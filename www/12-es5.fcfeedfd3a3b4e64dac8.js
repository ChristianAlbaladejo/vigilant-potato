!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TUkU:function(n,r,o){"use strict";o.r(r),o.d(r,"Tab2PageModule",(function(){return v}));var i,s,a,c=o("TEn/"),u=o("ofXK"),l=o("3Pt+"),b=o("tyNb"),p=o("mrSG"),d=o("tk/3"),f=o("AytR"),h=o("fXoL"),m=[{path:"",component:(i=function(){function n(t,r,o,i,s){e(this,n),this.loading=t,this.router=r,this.alert=o,this.http=i,this.toastController=s,this.text="";var a=JSON.parse(localStorage.getItem("identity"));null!=a?(this.identity=JSON.parse(a),console.log(this.identity)):this.router.navigateByUrl("/login")}var r,o,i;return r=n,(o=[{key:"send",value:function(){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={text:this.text,user:this.identity[0].NOMBRE,user_id:this.identity[0].COD_PERSONAL},n=this.loading.create({message:"Por favor espere...."}),e.next=3,n;case 3:return e.sent.present(),r=(new d.c).set("Content-Type","application/json").set("Accept","*/*"),e.next=7,this.http.post(f.a.API+"/mail",t,{headers:r}).subscribe((function(e){return Object(p.a)(o,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({message:"Tu correo ha sido enviado.",color:"success",duration:2e3});case 2:return t=e.sent,e.next=5,n;case 5:e.sent.dismiss(),t.present();case 7:case"end":return e.stop()}}),e,this)})))}),(function(e){return Object(p.a)(o,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({cssClass:"my-custom-class",header:"Error",subHeader:"",message:"Error al enviar tu correo.",buttons:["OK"]});case 2:return t=e.sent,e.next=5,n;case 5:return e.sent.dismiss(),e.next=8,t.present();case 8:case"end":return e.stop()}}),e,this)})))}));case 7:case"end":return e.stop()}}),e,this)})))}}])&&t(r.prototype,o),i&&t(r,i),n}(),i.\u0275fac=function(e){return new(e||i)(h.Ib(c.E),h.Ib(b.g),h.Ib(c.a),h.Ib(d.a),h.Ib(c.K))},i.\u0275cmp=h.Cb({type:i,selectors:[["app-tab2"]],decls:14,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["lines","full"],["position","floating"],["name","text","rows","6","cols","20","placeholder","Escribe aqu\xed tu mensaje",3,"ngModel","ngModelChange"],["type","submit","color","success","expand","block",3,"click"]],template:function(e,t){1&e&&(h.Lb(0,"ion-header",0),h.Lb(1,"ion-toolbar"),h.Lb(2,"ion-title"),h.pc(3," RRHH "),h.Kb(),h.Kb(),h.Kb(),h.Lb(4,"ion-content",1),h.Lb(5,"ion-item",2),h.Lb(6,"ion-label",3),h.pc(7,"Mensaje"),h.Kb(),h.Lb(8,"ion-textarea",4),h.Tb("ngModelChange",(function(e){return t.text=e})),h.Kb(),h.Kb(),h.Lb(9,"ion-row"),h.Jb(10,"ion-col"),h.Lb(11,"ion-col"),h.Lb(12,"ion-button",5),h.Tb("click",(function(){return t.send()})),h.pc(13,"Enviar"),h.Kb(),h.Kb(),h.Kb(),h.Kb()),2&e&&(h.bc("translucent",!0),h.xb(4),h.bc("fullscreen",!0),h.xb(4),h.bc("ngModel",t.text))},directives:[c.i,c.B,c.A,c.g,c.l,c.p,c.z,c.J,l.d,l.g,c.s,c.f,c.c],styles:[""]}),i)}],g=((a=function t(){e(this,t)}).\u0275mod=h.Gb({type:a}),a.\u0275inj=h.Fb({factory:function(e){return new(e||a)},imports:[[b.i.forChild(m)],b.i]}),a),v=((s=function t(){e(this,t)}).\u0275mod=h.Gb({type:s}),s.\u0275inj=h.Fb({factory:function(e){return new(e||s)},imports:[[c.C,u.b,l.a,g]]}),s)}}])}();