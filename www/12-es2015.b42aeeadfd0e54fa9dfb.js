(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TUkU:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab2PageModule",(function(){return y}));var o=n("TEn/"),i=n("ofXK"),s=n("3Pt+"),r=n("tyNb"),c=n("mrSG"),a=n("tk/3"),l=n("AytR"),b=n("gcOT"),u=n("fXoL");const{Storage:d}=b.a,p=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i){this.loading=t,this.router=e,this.alert=n,this.http=o,this.toastController=i,this.text=""}ngOnInit(){return Object(c.a)(this,void 0,void 0,(function*(){let t=yield d.get({key:"my-token"});t=JSON.parse(t.value),null!=t?(this.identity=t,console.log(this.identity)):this.router.navigateByUrl("/login")}))}send(){return Object(c.a)(this,void 0,void 0,(function*(){let t={text:this.text,user:this.identity[0].NOMBRE,user_id:this.identity[0].COD_PERSONAL},e=this.loading.create({message:"Por favor espere...."});(yield e).present();let n=(new a.c).set("Content-Type","application/json").set("Accept","*/*");yield this.http.post(l.a.API+"/mail",t,{headers:n}).subscribe(t=>Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.toastController.create({message:"Tu correo ha sido enviado.",color:"success",duration:2e3});(yield e).dismiss(),t.present()})),t=>Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.alert.create({cssClass:"my-custom-class",header:"Error",subHeader:"",message:"Error al enviar tu correo.",buttons:["OK"]});(yield e).dismiss(),yield t.present()})))}))}}return t.\u0275fac=function(e){return new(e||t)(u.Ib(o.F),u.Ib(r.g),u.Ib(o.a),u.Ib(a.a),u.Ib(o.M))},t.\u0275cmp=u.Cb({type:t,selectors:[["app-tab2"]],decls:14,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["lines","full"],["position","floating"],["name","text","rows","6","cols","20","placeholder","Escribe aqu\xed tu mensaje",3,"ngModel","ngModelChange"],["type","submit","color","success","expand","block",3,"click"]],template:function(t,e){1&t&&(u.Lb(0,"ion-header",0),u.Lb(1,"ion-toolbar"),u.Lb(2,"ion-title"),u.pc(3," RRHH "),u.Kb(),u.Kb(),u.Kb(),u.Lb(4,"ion-content",1),u.Lb(5,"ion-item",2),u.Lb(6,"ion-label",3),u.pc(7,"Mensaje"),u.Kb(),u.Lb(8,"ion-textarea",4),u.Tb("ngModelChange",(function(t){return e.text=t})),u.Kb(),u.Kb(),u.Lb(9,"ion-row"),u.Jb(10,"ion-col"),u.Lb(11,"ion-col"),u.Lb(12,"ion-button",5),u.Tb("click",(function(){return e.send()})),u.pc(13,"Enviar"),u.Kb(),u.Kb(),u.Kb(),u.Kb()),2&t&&(u.bc("translucent",!0),u.xb(4),u.bc("fullscreen",!0),u.xb(4),u.bc("ngModel",e.text))},directives:[o.j,o.C,o.B,o.f,o.m,o.q,o.A,o.L,s.g,s.j,o.t,o.e,o.c],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(p)],r.i]}),t})(),y=(()=>{class t{}return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(e){return new(e||t)},imports:[[o.D,i.b,s.d,h]]}),t})()}}]);