(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{X3zk:function(t,n,e){"use strict";e.r(n),e.d(n,"LoginPageModule",(function(){return b}));var o=e("ofXK"),i=e("3Pt+"),s=e("TEn/"),r=e("tyNb"),a=e("mrSG"),c=e("tk/3"),l=e("AytR"),d=e("fXoL");const g=[{path:"",component:(()=>{class t{constructor(t,n,e,o){this.loading=t,this._router=n,this.alert=e,this.http=o,this.user={id:"",password:""}}ngOnInit(){}onSubmit(){return Object(a.a)(this,void 0,void 0,(function*(){let t=this.loading.create({message:"Please wait..."});(yield t).present();let n=this.user;console.log(n);let e=(new c.c).set("Content-Type","application/json").set("Accept","*/*");yield this.http.post(l.a.API+"/login/",n,{headers:e}).subscribe(n=>Object(a.a)(this,void 0,void 0,(function*(){console.log(n),window.localStorage.setItem("identity",JSON.stringify(n)),(yield t).dismiss(),this._router.navigateByUrl("/tabs")})),n=>Object(a.a)(this,void 0,void 0,(function*(){this.user.id="",this.user.password="";const n=yield this.alert.create({cssClass:"my-custom-class",header:"Error",subHeader:"",message:"Usuario o contrase\xf1a erroneos.",buttons:["OK"]});(yield t).dismiss(),yield n.present()})))}))}}return t.\u0275fac=function(n){return new(n||t)(d.Ib(s.C),d.Ib(r.g),d.Ib(s.a),d.Ib(c.a))},t.\u0275cmp=d.Cb({type:t,selectors:[["app-login"]],decls:16,vars:3,consts:[[3,"translucent"],["no-bounce","",1,"login"],["padding","",1,"login-box"],["novalidate","",3,"ngSubmit"],["loginForm","ngForm"],["clearInput","false","placeholder","Id","name","id","type","text","spellcheck","false","autocapitalize","off","required","",1,"code",3,"ngModel","ngModelChange"],["id","ngModel"],["clearInput","false","placeholder","Contrase\xf1a","name","password","type","password","spellcheck","false","autocapitalize","off","required","",1,"code",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit","color","primary","block","",1,"login-button"]],template:function(t,n){1&t&&(d.Lb(0,"ion-header",0),d.Lb(1,"ion-toolbar"),d.Lb(2,"ion-title"),d.pc(3,"Login"),d.Kb(),d.Kb(),d.Kb(),d.Lb(4,"ion-content",1),d.Lb(5,"ion-card",2),d.Lb(6,"form",3,4),d.Tb("ngSubmit",(function(){return n.onSubmit()})),d.Lb(8,"ion-item"),d.Lb(9,"ion-input",5,6),d.Tb("ngModelChange",(function(t){return n.user.id=t})),d.Kb(),d.Kb(),d.Lb(11,"ion-item"),d.Lb(12,"ion-input",7,8),d.Tb("ngModelChange",(function(t){return n.user.password=t})),d.Kb(),d.Kb(),d.Lb(14,"ion-button",9),d.pc(15," Login "),d.Kb(),d.Kb(),d.Kb(),d.Kb()),2&t&&(d.bc("translucent",!0),d.xb(9),d.bc("ngModel",n.user.id),d.xb(3),d.bc("ngModel",n.user.password))},directives:[s.i,s.z,s.y,s.g,s.d,i.j,i.e,i.f,s.l,s.k,s.H,i.i,i.d,i.g,s.c],styles:[".login-box[_ngcontent-%COMP%]{max-width:350px;margin:40px auto 0}.logo[_ngcontent-%COMP%]{margin:0 auto;height:30px}.if-logo[_ngcontent-%COMP%]{height:200px;margin-left:22%}.RP-Icon[_ngcontent-%COMP%]{width:100%;height:66px;bottom:90px;margin:50px auto 0 -2px}.login-button[_ngcontent-%COMP%]{width:90%;margin:20px auto 20px 5%}.login-register[_ngcontent-%COMP%]{width:90%;margin:0 auto 20px 5%}.code[_ngcontent-%COMP%]{margin-top:1vw;border-bottom:1px solid #ddd;padding:10px;color:#888}.app-version[_ngcontent-%COMP%]{color:#fff;font-size:18px;font-weight:300;text-align:center;margin-top:90px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(g)],r.i]}),t})(),b=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,s.A,p]]}),t})()}}]);