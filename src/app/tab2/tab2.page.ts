import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  text = ""
  identity
  constructor(public loading: LoadingController, private router: Router, public alert: AlertController, private http: HttpClient, public toastController: ToastController) {}
  
  async ngOnInit() {
    let identity = await Storage.get({ key: TOKEN_KEY });
    identity = JSON.parse(identity.value);
    if (identity != null) {
      this.identity = identity;
      console.log(this.identity)
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  async send() {
    let object = {
      "text":  this.text,
      "user": this.identity[0].NOMBRE,
      "user_id": this.identity[0].COD_PERSONAL,
    }
    let loading = this.loading.create({
      message: 'Por favor espere....'
    });
    (await loading).present();
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*/*')
    await this.http.post(environment.API + '/mail', object, { headers: headers }).subscribe(async (response) => {
        const toast = await this.toastController.create({
          message: 'Tu correo ha sido enviado.',
          color: 'success',
          duration: 2000
        });
      (await loading).dismiss();
        toast.present();
    }, async error => {
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        subHeader: '',
        message: 'Error al enviar tu correo.',
        buttons: ['OK']
      });
      (await loading).dismiss();
      await alert.present();
    });
    
  }

}
