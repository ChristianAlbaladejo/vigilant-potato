import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myDate: String = new Date().toISOString();
  obras: any;
  empresa: any;
  tareas;
  identity;
  obra_id;
  observations = "";
  total;
  numHours = 0;
  constructor(public loading: LoadingController, private router: Router, public alert: AlertController, private http: HttpClient) {
    this.load();
  }
  obra: String;
  isItemAvailable = false;
  items = [];

  initializeItems() {
    this.items = ["Obra1 - 1234", "Obra2 - 4321", "Obra3 - 7894"];
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.isItemAvailable = false;
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
  }


  async load() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != null) {
      this.identity = JSON.parse(identity);
      console.log(this.identity)
    } else {
      this.router.navigateByUrl('/login');
    }
    await this.http.get(environment.API + '/' + this.identity[0].EMPRESA).subscribe((response) => {
      this.obras = response;
      this.obras = JSON.parse(this.obras)
      console.log(this.obras);
    });
    await this.http.get(environment.API + '/workday/' + this.identity[0].COD_PERSONAL).subscribe((response) => {
      this.total = 0;
      this.tareas = response;
      this.tareas = JSON.parse(this.tareas)
      for (let i = 0; i < this.tareas.length; i++) {
        this.tareas[i].CANTIDAD = parseFloat(this.tareas[i].CANTIDAD).toFixed(2)
        this.total = (parseFloat(this.tareas[i].CANTIDAD) + parseFloat(this.total || 0)).toFixed(1);
      }
    });
  }

  async save() {
    let object = {
      "empresa": this.empresa.EMPRESA,
      "obra": this.obra_id,
      "fecha": this.myDate.slice(0, 10),
      "codigo": this.identity[0].COD_PERSONAL,
      "descripcion": this.observations,
      "cantidad": this.numHours
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
      this.empresa.EMPRESA = "";
      this.observations = "";
      this.numHours = 0;
      this.obra = "";
      (await loading).dismiss();
    }, async error => {
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: '',
        message: 'Error al enviar tu trabajo.',
        buttons: ['OK']
      });
      (await loading).dismiss();
      await alert.present();
    });
  }

  salir() {
    window.localStorage.removeItem('identity');
    this.router.navigateByUrl('/login')
  }

  delete(t) {
    this.http.delete(environment.API + '/delete/' + t.LINEA + '/' + t.FECHA + '/' + t.OBRA + '/' + this.identity[0].COD_PERSONAL).subscribe(async (response) => {
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
