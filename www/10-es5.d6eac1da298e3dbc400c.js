!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{X3zk:function(t,r,o){"use strict";o.r(r),o.d(r,"LoginPageModule",(function(){return k}));var i=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),u=o("mrSG"),l=o("gcOT"),d=o("fXoL"),p=o("ej43");function g(e,n){1&e&&(d.Lb(0,"span"),d.pc(1,"Password is required"),d.Kb())}function b(e,n){1&e&&(d.Lb(0,"span"),d.pc(1,"Password needs to be 6 characters"),d.Kb())}function f(e,n){if(1&e&&(d.Lb(0,"div",8),d.nc(1,g,2,0,"span",9),d.nc(2,b,2,0,"span",9),d.Kb()),2&e){var t=d.Vb();d.xb(1),d.bc("ngIf",null==t.password.errors?null:t.password.errors.required),d.xb(1),d.bc("ngIf",null==t.password.errors?null:t.password.errors.minlength)}}var m,h,x,w=l.a.Storage,v=[{path:"",component:(m=function(){function t(n,r,o,i,a,s){e(this,t),this.fb=n,this.authService=r,this.alertController=o,this.router=i,this.loadingController=a,this.menuCtrl=s}var r,o,i;return r=t,(o=[{key:"ngOnInit",value:function(){this.credentials=this.fb.group({email:[""],password:[""]})}},{key:"ionViewDidEnter",value:function(){this.menuCtrl.enable(!1)}},{key:"ionViewDidLeave",value:function(){this.menuCtrl.enable(!0)}},{key:"login",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.credentials),e.next=3,this.loadingController.create();case 3:return n=e.sent,e.next=6,n.present();case 6:this.authService.login(this.credentials.value).subscribe((function(e){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,n.dismiss();case 3:return t.next=5,w.get({key:"my-token"});case 5:if(r=t.sent,console.log(r.value),"Usuario no Existente"!=r.value){t.next=14;break}return t.next=9,this.alertController.create({header:"Error",message:"La contrase\xf1a o el usuario son err\xf3neos",buttons:["OK"]});case 9:return o=t.sent,t.next=12,o.present();case 12:t.next=15;break;case 14:this.router.navigateByUrl("/tabs",{replaceUrl:!0});case 15:case"end":return t.stop()}}),t,this)})))}),(function(e){return Object(u.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,n.dismiss();case 3:return t.next=5,this.alertController.create({header:"Error",message:"Parece que tenemos problemas",buttons:["OK"]});case 5:return r=t.sent,t.next=8,r.present();case 8:case"end":return t.stop()}}),t,this)})))}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"email",get:function(){return this.credentials.get("email")}},{key:"password",get:function(){return this.credentials.get("password")}}])&&n(r.prototype,o),i&&n(r,i),t}(),m.\u0275fac=function(e){return new(e||m)(d.Ib(a.a),d.Ib(p.a),d.Ib(s.a),d.Ib(c.g),d.Ib(s.F),d.Ib(s.G))},m.\u0275cmp=d.Cb({type:m,selectors:[["app-login"]],decls:14,vars:4,consts:[[3,"translucent"],["no-bounce","",1,"login"],[3,"formGroup","ngSubmit"],[1,"input-group"],["type","email","placeholder","Email","formControlName","email"],["type","password","placeholder","Password","formControlName","password"],["class","errors",4,"ngIf"],["type","submit","expand","block","color","success",3,"disabled"],[1,"errors"],[4,"ngIf"]],template:function(e,n){1&e&&(d.Lb(0,"ion-header",0),d.Lb(1,"ion-toolbar"),d.Lb(2,"ion-title"),d.pc(3,"La Miguelota APP"),d.Kb(),d.Kb(),d.Kb(),d.Lb(4,"ion-content",1),d.Lb(5,"form",2),d.Tb("ngSubmit",(function(){return n.login()})),d.Lb(6,"div",3),d.Lb(7,"ion-item"),d.Jb(8,"ion-input",4),d.Kb(),d.Lb(9,"ion-item"),d.Jb(10,"ion-input",5),d.Kb(),d.nc(11,f,3,2,"div",6),d.Kb(),d.Lb(12,"ion-button",7),d.pc(13,"Log in"),d.Kb(),d.Kb(),d.Kb()),2&e&&(d.bc("translucent",!0),d.xb(5),d.bc("formGroup",n.credentials),d.xb(6),d.bc("ngIf",(n.password.dirty||n.password.touched)&&n.password.errors),d.xb(1),d.bc("disabled",!n.credentials.valid))},directives:[s.j,s.C,s.B,s.f,a.n,a.h,a.c,s.m,s.l,s.L,a.g,a.b,i.j,s.c],styles:[".login-box[_ngcontent-%COMP%]{max-width:350px;margin:40px auto 0}.logo[_ngcontent-%COMP%]{margin:0 auto;height:30px}.if-logo[_ngcontent-%COMP%]{height:200px;margin-left:22%}.RP-Icon[_ngcontent-%COMP%]{width:100%;height:66px;bottom:90px;margin:50px auto 0 -2px}.login-button[_ngcontent-%COMP%]{width:90%;margin:20px auto 20px 5%}.login-register[_ngcontent-%COMP%]{width:90%;margin:0 auto 20px 5%}.code[_ngcontent-%COMP%]{margin-top:1vw;border-bottom:1px solid #ddd;padding:10px;color:#888}.app-version[_ngcontent-%COMP%]{color:#fff;font-size:18px;font-weight:300;text-align:center;margin-top:90px}ion-content[_ngcontent-%COMP%]{--padding-top:10rem;--padding-start:10%;--padding-end:10%;--background:none;background:url(https://image.freepik.com/foto-gratis/herramientas-construccion-colocadas-suelos-madera_1150-15320.jpg) no-repeat fixed 50%;background-size:cover}.input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;margin-bottom:3em}img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:50%;margin-bottom:4rem}.errors[_ngcontent-%COMP%]{font-size:small;color:#fff;background:var(--ion-color-danger);padding-left:15px;padding-top:5px;padding-bottom:5px}.toolbar-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:66%;margin:0}"]}),m)}],C=((x=function n(){e(this,n)}).\u0275mod=d.Gb({type:x}),x.\u0275inj=d.Fb({factory:function(e){return new(e||x)},imports:[[c.i.forChild(v)],c.i]}),x),k=((h=function n(){e(this,n)}).\u0275mod=d.Gb({type:h}),h.\u0275inj=d.Fb({factory:function(e){return new(e||h)},imports:[[i.b,a.d,s.D,C,a.l]]}),h)}}])}();