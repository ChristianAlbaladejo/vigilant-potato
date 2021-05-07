import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular'
import { environment } from '../../environments/environment'
import { AuthenticationService } from '../services/authentication.service';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  myDate: String = new Date().toISOString();
  maxDate: String = new Date().toISOString();
  obras: any;
  empresa: any;
  tareas;
  identity;
  obra_id;
  observations = "";
  total;
  numHours = 0;
  obra: String;
  isItemAvailable = false;
  isMachineAvailable = false;
  showPrecios = false
  items = [];
  precios;
  itemsMachine = [];
  capitulos;
  capitulo = "";
  tipo = 'P';
  maquina = "";
  maquinas;
  precio;

  constructor(public navCtrl: NavController, public loading: LoadingController, private router: Router, public alert: AlertController, private authService: AuthenticationService, private http: HttpClient) { this.load(); }



  initializeItems() {
    this.items = ["Obra1 - 1234", "Obra2 - 4321", "Obra3 - 7894"];
  }

  ngOnInit(): void {
    this.load();
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    this.items = this.obras
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        console.log(item);
        return (item.DESCRIPCION.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.OBRA.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.isItemAvailable = false;
    }
  }

  getMachines(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    this.itemsMachine = this.maquinas
    // if the value is an empty string don't filter the itemsMachine
    if (val && val.trim() !== '') {
      this.isMachineAvailable = true;
      this.itemsMachine = this.itemsMachine.filter((item) => {
        console.log(item);
        return (item.NOMBRE.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.COD_MAQUINA.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.isMachineAvailable = false;
    }
  }

  obraSelected(selected: any): void {
    this.obra = selected.DESCRIPCION;
    this.obra_id = selected.OBRA
    this.isItemAvailable = false;
    this.http.get(environment.API + '/empresa/' + selected.EMPRESA).subscribe((response) => {
      this.empresa = response;
      this.empresa = JSON.parse(this.empresa)
      this.empresa = this.empresa[0]
    });
    this.http.get(environment.API + '/capitulo/' + selected.OBRA).subscribe((response) => {
      this.capitulos = response;
      this.capitulos = JSON.parse(this.capitulos)
      this.capitulo = ""
    });
  }

  maquinaSelected(selected: any): void{
    this.maquina = selected.COD_MAQUINA
    this.isMachineAvailable = false;
    this.http.get(environment.API + '/precios/' + selected.COD_MAQUINA).subscribe((response) => {
      this.precios = response;
      this.precios = JSON.parse(this.precios)
      console.log(this.precios)
      if (this.precios.length == 1) {
        this.precio = this.precios[0].COD_INTERNO
        this.showPrecios = false;
      }else{
        this.showPrecios = true;
      }
    });
  }


  async load() {
    let loading = this.loading.create({
      message: 'Por favor espere...'
    });
    (await loading).present();
    let identity = await Storage.get({ key: TOKEN_KEY });
    identity = JSON.parse(identity.value);
    console.log(identity)
    if (identity != null) {
      this.identity = identity;
      console.log(this.identity)
      try {
        this.http.get(environment.API + '/' + this.identity[0].EMPRESA).subscribe(async (response) => {
          this.obras = response;
          this.obras = JSON.parse(this.obras);
          this.http.get(environment.API + '/workday/' + this.identity[0].COD_PERSONAL).subscribe((response) => {
            this.total = 0;
            this.tareas = response;
            this.tareas = JSON.parse(this.tareas);
            for (let i = 0; i < this.tareas.length; i++) {
              this.tareas[i].CANTIDAD = parseFloat(this.tareas[i].CANTIDAD).toFixed(2);
              this.total = (parseFloat(this.tareas[i].CANTIDAD) + parseFloat(this.total || 0)).toFixed(1);
            }
            this.http.get(environment.API + '/maquinas').subscribe((response) => {
              this.maquinas = response;
              this.maquinas = JSON.parse(this.maquinas);
              console.log(this.maquinas)
            });
          }, async error =>{
            this.load()
          });
        }, async error => {
          const alert = await this.alert.create({
            cssClass: 'my-custom-class',
            header: 'Error',
            subHeader: '',
            message: 'Error al cargar los datos.',
            buttons: [{
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                this.load();
              }
            }]
          });
          await alert.present();
        });
        (await loading).dismiss();
      } catch (error) {
        (await loading).dismiss();
        this.salir()
      }
    } else {
      (await loading).dismiss();
      this.salir()
    }
  }

  async save() {
    if (this.empresa !== null && this.empresa !== undefined && this.obra_id !== null && this.obra_id !== undefined && this.identity[0] !== null && this.identity[0] !== undefined && this.numHours !== undefined && this.numHours !== null && this.observations !== undefined && this.observations !== null) {
      let object = {
        "empresa": this.empresa.EMPRESA,
        "obra": this.obra_id,
        "fecha": this.myDate.slice(0, 10),
        "codigo": this.identity[0].COD_PERSONAL,
        "descripcion": this.observations,
        "cantidad": this.numHours,
        "tipo": this.tipo,
        "codigo_maquina": this.maquina,
        "capitulo": this.capitulo,
        "precio_maquina": this.precio
      }
      let loading = this.loading.create({
        message: 'Por favor espere...'
      });
      (await loading).present();
      let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*/*')
      await this.http.post(environment.API + '/save/', object, { headers: headers }).subscribe(async (response) => {
        await this.http.get(environment.API + '/workday/' + this.identity[0].COD_PERSONAL).subscribe((response) => {
          this.total = 0;
          this.tareas = response;
          this.tareas = JSON.parse(this.tareas)
          for (let i = 0; i < this.tareas.length; i++) {
            this.tareas[i].CANTIDAD = parseFloat(this.tareas[i].CANTIDAD).toFixed(2)
            this.total = (parseFloat(this.tareas[i].CANTIDAD) + parseFloat(this.total || 0)).toFixed(1);
          }
        });
        this.observations = "";
        this.maquina = "";
        this.capitulo = "";
        this.numHours = 0;
        this.obra = null;
        this.showPrecios = false;
        (await loading).dismiss();
      }, async error => {
        const alert = await this.alert.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          subHeader: '',
          message: 'Error al enviar tu trabajo.',
          buttons: ['OK']
        });
        (await loading).dismiss();
        await alert.present();
      });
    } else {
      console.log(this.empresa, this.obra_id, this.identity[0], this.numHours);

      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: '',
        message: 'Por favor rellene el formulario .',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async salir() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  checkFocus(){
    this.isItemAvailable = true;
    this.items = this.obras
  }

  checkMaquinaFocus(){
    this.isMachineAvailable = true;
    this.itemsMachine = this.maquinas
  }


  incrementQty() {
    this.numHours += 1;
  }

  byPassValue(){
  if (this.numHours < 0) {
      this.numHours = 0;
    }
    console.log(this.numHours)
  }

  decrementQty() {
    if (this.numHours <= 0) {
      this.numHours = 0;
    } else {
      this.numHours -= 1;
    }
  }

  delete(t) {
    this.http.delete(environment.API + '/delete/' + t.LINEA + '/' + t.OBRA + '/' + this.identity[0].COD_PERSONAL).subscribe(async (response) => {
      await this.http.get(environment.API + '/workday/' + this.identity[0].COD_PERSONAL).subscribe((response) => {
        this.total = 0;
        this.tareas = response;
        this.tareas = JSON.parse(this.tareas)
        for (let i = 0; i < this.tareas.length; i++) {
          this.tareas[i].CANTIDAD = parseFloat(this.tareas[i].CANTIDAD).toFixed(2)
          this.total = (parseFloat(this.tareas[i].CANTIDAD) + parseFloat(this.total || 0)).toFixed(1);
        }
        console.log(this.tareas);
      });
    });

  }
}
