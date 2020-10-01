import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular'
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    "id": "",
    "password": ""
  }
  identity;
  constructor(public loading: LoadingController, private _router: Router, public alert: AlertController, private http: HttpClient) {

  }

  ngOnInit() { }

  async onSubmit() {
    
    let loading = this.loading.create({
      message: 'Please wait...'
    });
    (await loading).present();
    let params = this.user;
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','*/*')
    await this.http.post('http://172.19.192.1:5000/login/', params, { headers: headers }).subscribe((response) => {
      console.log(response);
      window.localStorage.setItem('identity', JSON.stringify(response));
      this._router.navigateByUrl('/tabs')
    }, error =>{
      console.log(error);
      
    });
    (await loading).dismiss();


  }
}
