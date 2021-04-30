import pyodbc
import socket
from flask_caching import Cache
from flask import Flask, json, request, jsonify
from flask_cors import CORS, cross_origin
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
import config

api = Flask(__name__)
cache = Cache(api, config={"CACHE_TYPE": "simple", "CACHE_DEFAULT_TIMEOUT": "10"})
cors = CORS(api)
api.config['CORS_HEADERS'] = 'Content-Type'
conn_str = (
    r'DRIVER={SQL Server};'
    r'SERVER=(local)\a3erp;'
    r'DATABASE=TREE;'
    r'Trusted_Connection=yes;'
)

cache.init_app(api)


database = "TREE"


@api.route('/<empresa>', methods=['GET'])
def get_obras(empresa):
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT EMPRESA, OBRA, DESCRIPCION FROM [" + database + "].[dbo].[T_OBRAS] WHERE EMPRESA='" + empresa + "'")
    data = cursor.fetchall()
    conn.close()
    tablesN = []
    column_names = [column[0] for column in cursor.description]
    for row in data:
        tablesN.append(dict(zip(column_names, row)))
    tablesN = str(tablesN)
    _str = tablesN.replace("\'", "\"")
    return json.dumps(_str)


@api.route('/partes', methods=['GET'])
def get_partes():
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM [' + database + '].[dbo].[T_PARTE]')
    data = cursor.fetchall()
    conn.close()
    tablesN = []
    column_names = [column[0] for column in cursor.description]
    for row in data:
        tablesN.append(dict(zip(column_names, row)))
    tablesN = str(tablesN)
    _str = tablesN.replace("\'", "\"")
    return json.dumps(_str)


@api.route('/workday/<employee_id>', methods=['GET'])
def get_workday(employee_id):
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    cursor.execute(
        "SELECT DESCRIPCION, OBRA, convert(varchar,[FECHA],23) as FECHA, LINEA, LINEA ,CAST(CANTIDAD as VARCHAR(50)) AS CANTIDAD FROM [TREE].[dbo].[T_PARTE_LIN] where cast([FECHA] as date) = CONVERT(VARCHAR(10), getdate(), 111) AND COD_PERSONAL ='" + employee_id + "'")
    data = cursor.fetchall()
    conn.close()
    tablesN = []
    column_names = [column[0] for column in cursor.description]
    for row in data:
        tablesN.append(dict(zip(column_names, row)))
    tablesN = str(tablesN)
    _str = tablesN.replace("\'", "\"")
    print(_str)
    return json.dumps(_str)


@api.route('/empresa/<id>', methods=['GET'])
def get_empresa(id):
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    cursor.execute("SELECT [EMPRESA],[DESCRIPCION] FROM [" + database + "].[dbo].[T_EMPRESAS] where EMPRESA ='" + id + "'")
    data = cursor.fetchall()
    conn.close()
    tablesN = []
    column_names = [column[0] for column in cursor.description]
    for row in data:
        tablesN.append(dict(zip(column_names, row)))
    tablesN = str(tablesN)
    _str = tablesN.replace("\'", "\"")
    return json.dumps(_str)


@api.route('/login/', methods=['POST'])
def login():
    conn = pyodbc.connect(conn_str)
    data = request.get_json()
    cursor = conn.cursor()
    sql = "SELECT [EMPRESA],[COD_PERSONAL],[NOMBRE] FROM [" + database + "].[dbo].[T_PERSONAL] where COD_PERSONAL = '" + \
          data['id'] + "' AND FAX = '" + data['password'] + "'"
    cursor.execute(sql)
    data = cursor.fetchall()
    conn.close()
    if data:
        tablesN = []
        column_names = [column[0] for column in cursor.description]
        for row in data:
            tablesN.append(dict(zip(column_names, row)))
        tablesN = str(tablesN)
        _str = tablesN.replace("\'", "\"")
        return json.dumps(_str)
    else:
        return 'bad request!', 400


@api.route('/save/', methods=['POST'])
def save():
    body = request.get_json()
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    sql = "SELECT [EMPRESA], [PARTE],[DESCRIPCION]  FROM [" + database + "].[dbo].[T_PARTE_LIN] where cast ([FECHA] as date) = '"+str(body['fecha'])+"' AND OBRA = '" + str(body['obra']) + "'"
    print(sql)
    cursor.execute(sql)
    data = cursor.fetchall()
    cursor.commit()
    if not data:
        cursor = conn.cursor()
        sql = "SELECT (MAX(CAST(PARTE as int)))+1 AS parte FROM ["+database+"].[dbo].[T_PARTE]"
        cursor.execute(sql)
        data = cursor.fetchall()
        cursor.commit()
        tablesN = []
        column_names = [column[0] for column in cursor.description]
        for row in data:
            tablesN.append(dict(zip(column_names, row)))
        if not tablesN[0]['parte']:
            tablesN[0]['parte'] = 1
        cursor = conn.cursor()
        sql = "INSERT INTO [" + database + "].[dbo].[T_PARTE] (EMPRESA, PARTE, FECHA, OBRA_PROVE) values ('" + str(
            body['empresa']) + "','" + str(tablesN[0]['parte']) + "',cast('" + str(
            body['fecha']) + "'as date), '*')"
        print(sql)
        cursor.execute(sql)
        cursor.commit()
        print(str(body['fecha']))
        cursor = conn.cursor()
        sql = "INSERT INTO [" + database + "].[dbo].[T_PARTE_LIN] (EMPRESA, PARTE, LINEA, OBRA,FECHA,COD_PERSONAL," \
                                           "DESCRIPCION,CANTIDAD) values ('" + str(
            body['empresa']) + "','" + str(tablesN[0]['parte']) + "', 1, '" + str(body['obra']) + "',cast('" + str(
            body['fecha']) + "'as date),'" + str(body['codigo']) + "','" + str(body['descripcion']) + "'," + str(
            body['cantidad']) + ")"
        print(sql)
        cursor.execute(sql)
        cursor.commit()
        
    else:
        tablesN = []
        column_names = [column[0] for column in cursor.description]
        for row in data:
            tablesN.append(dict(zip(column_names, row)))
        print(tablesN[0])
        cursor = conn.cursor()
        sql = "SELECT (MAX(LINEA)+1) as linea from [" + database + "].[dbo].[T_PARTE_LIN] where EMPRESA = '" + str(
            body['empresa']) + "' AND cast([FECHA] as date) ='" + str(body['fecha']) + "' AND OBRA ='" + str(body['obra']) + "'"
        cursor.execute(sql)
        data = cursor.fetchall()
        cursor.commit()
        table = []
        column_names = [column[0] for column in cursor.description]
        for row in data:
            table.append(dict(zip(column_names, row)))
        print(table[0]['linea'])
        cursor = conn.cursor()
        sql = "INSERT INTO [" + database + "].[dbo].[T_PARTE_LIN] (EMPRESA, PARTE, LINEA, OBRA,FECHA,COD_PERSONAL," \
                                           "DESCRIPCION,CANTIDAD) values ('" + str(
            body['empresa']) + "','" + str(tablesN[0]['PARTE']) + "'," + str(table[0]['linea']) + " , '" + str(
            body['obra']) + "',cast('" + str(
            body['fecha']) + "'as date),'" + str(body['codigo']) + "','" + str(body['descripcion']) + "'," + str(
            body['cantidad']) + ")"
        print(sql)
        cursor.execute(sql)
        cursor.commit()
    conn.close()
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


@api.route('/delete/<linea>/<obra>/<cod>', methods=['DELETE'])
def delete(obra, cod, linea):
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    sql = "DELETE FROM [" + database + "].[dbo].[T_PARTE_LIN] WHERE OBRA = '" + obra + "' AND LINEA = " + linea + " AND COD_PERSONAL = '" + cod + "'"
    print(sql)
    cursor.execute(sql)
    cursor.commit()
    conn.close()
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


@api.route('/mail', methods=['POST'])
def send_mail():
    try:
        body = request.get_json()
        msg = MIMEMultipart()
        message = body['text']
        password = 'S@t...Jnc'
        msg['From'] = 'pruebasdecosasparamiscosas@gmail.com'
        msg['To'] = 'pruebasdecosasparamiscosas@gmail.com'
        msg['Subject'] = "El trabajoder: " + str(body['user']) + " Id: " + str(body['user_id']) + " dice"

        # add in the message body
        msg.attach(MIMEText(message, 'plain'))

        # create server
        server = smtplib.SMTP('smtp.gmail.com: 587')

        server.starttls()

        # Login Credentials for sending the mail
        server.login(msg['From'], password)

        # send the message via the server.
        server.sendmail(msg['From'], msg['To'], msg.as_string())

        server.quit()
        return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}
    except:
        return 'Error con la cuenta de correo!', 400


ip = socket.gethostbyname(socket.gethostname())

api.run(host='0.0.0.0', port=5001)
