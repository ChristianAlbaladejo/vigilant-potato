import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave(): void {
    this.menuCtrl.enable(true);
  }
  async login() {
    console.log(this.credentials)
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        console.log(res)
        await loading.dismiss();
        let token = await Storage.get({ key: TOKEN_KEY });
        console.log(token.value)
        if (token.value == "Usuario no Existente") {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'La contraseña o el usuario son erróneos',
            buttons: ['OK'],
          });
          await alert.present();
        } else {
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
        }
      },
      async (res) => {
        console.log(res)
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Parece que tenemos problemas',
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
}