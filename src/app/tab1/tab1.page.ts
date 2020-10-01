import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular'

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
    this.http.get('http://172.19.192.1:5000/empresa/' + selected.EMPRESA).subscribe((response) => {
      this.empresa = response;
      this.empresa = JSON.parse(this.empresa)
      this.empresa = this.empresa[0]
      console.log(this.empresa.DESCRIPCION);
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
    await this.http.get('http://172.19.192.1:5000/').subscribe((response) => {
      this.obras = response;
      this.obras = JSON.parse(this.obras)
      console.log(this.obras);
    });
    await this.http.get('http://172.19.192.1:5000/workday/' + this.identity[0].COD_PERSONAL).subscribe((response) => {
      this.tareas = response;
      this.tareas = JSON.parse(this.tareas)
      console.log(this.tareas);
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
      message: 'Please wait...'
    });
    (await loading).present();
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*/*')
    await this.http.post('http://172.19.192.1:5000/save/', object, { headers: headers }).subscribe((response) => {
      console.log('TOMA');
    }, error => {
      console.log(error);
    });
    (await loading).dismiss();


    console.log(object);

  }

}
