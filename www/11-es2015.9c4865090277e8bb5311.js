(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{tmrb:function(t,e,i){"use strict";i.r(e),i.d(e,"Tab1PageModule",(function(){return I}));var s=i("TEn/"),n=i("ofXK"),o=i("3Pt+"),a=i("tyNb"),r=i("mrSG"),l=i("tk/3"),b=i("AytR"),c=i("fXoL");function h(t,e){if(1&t&&(c.Lb(0,"ion-title"),c.pc(1),c.Kb()),2&t){const t=c.Vb();c.xb(1),c.rc(" Hola ",t.identity[0].NOMBRE," ")}}function d(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-item",17),c.Tb("click",(function(){c.jc(t);const i=e.$implicit;return c.Vb(2).obraSelected(i)})),c.pc(1),c.Kb()}if(2&t){const t=e.$implicit;c.xb(1),c.sc("",t.DESCRIPCION," - ",t.OBRA,"")}}function u(t,e){if(1&t&&(c.Lb(0,"ion-list"),c.nc(1,d,2,2,"ion-item",16),c.Kb()),2&t){const t=c.Vb();c.xb(1),c.bc("ngForOf",t.obras)}}function p(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-input",18),c.Tb("ngModelChange",(function(e){return c.jc(t),c.Vb().empresa.DESCRIPCION=e})),c.Kb()}if(2&t){const t=c.Vb();c.bc("ngModel",t.empresa.DESCRIPCION)("readonly",!0)}}function m(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-item-sliding"),c.Lb(1,"ion-item"),c.Lb(2,"ion-label"),c.pc(3),c.Kb(),c.Kb(),c.Lb(4,"ion-item-options"),c.Lb(5,"ion-item-option",20),c.Tb("click",(function(){c.jc(t);const i=e.$implicit;return c.Vb(2).delete(i)})),c.Jb(6,"ion-icon",21),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=e.$implicit;c.xb(3),c.sc(" ",t.DESCRIPCION,", ",t.CANTIDAD," h ")}}function g(t,e){if(1&t&&(c.Lb(0,"div"),c.nc(1,m,7,2,"ion-item-sliding",19),c.Kb()),2&t){const t=c.Vb();c.xb(1),c.bc("ngForOf",t.tareas)}}const f=[{path:"",component:(()=>{class t{constructor(t,e,i,s,n){this.navCtrl=t,this.loading=e,this.router=i,this.alert=s,this.http=n,this.myDate=(new Date).toISOString(),this.observations="",this.numHours=0,this.isItemAvailable=!1,this.items=[],this.load()}initializeItems(){this.items=["Obra1 - 1234","Obra2 - 4321","Obra3 - 7894"]}ngOnInit(){this.load()}getItems(t){const e=t.target.value;e&&""!==e.trim()?(this.isItemAvailable=!0,this.items=this.items.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())>-1)):this.isItemAvailable=!1}obraSelected(t){this.obra=t.DESCRIPCION,this.obra_id=t.OBRA,this.isItemAvailable=!1,this.http.get(b.a.API+"/empresa/"+t.EMPRESA).subscribe(t=>{this.empresa=t,this.empresa=JSON.parse(this.empresa),this.empresa=this.empresa[0]})}load(){return Object(r.a)(this,void 0,void 0,(function*(){let t=JSON.parse(localStorage.getItem("identity"));null!=t?(this.identity=JSON.parse(t),console.log(this.identity)):this.router.navigateByUrl("/login"),yield this.http.get(b.a.API+"/"+this.identity[0].EMPRESA).subscribe(t=>Object(r.a)(this,void 0,void 0,(function*(){this.obras=t,this.obras=JSON.parse(this.obras),console.log(this.obras),yield this.http.get(b.a.API+"/workday/"+this.identity[0].COD_PERSONAL).subscribe(t=>{this.total=0,this.tareas=t,this.tareas=JSON.parse(this.tareas);for(let e=0;e<this.tareas.length;e++)this.tareas[e].CANTIDAD=parseFloat(this.tareas[e].CANTIDAD).toFixed(2),this.total=(parseFloat(this.tareas[e].CANTIDAD)+parseFloat(this.total||0)).toFixed(1);console.log(this.tareas)})})))}))}save(){return Object(r.a)(this,void 0,void 0,(function*(){if(null!=this.empresa&&null!=this.obra_id&&null!=this.identity[0]&&null!=this.numHours&&null!=this.observations){let t={empresa:this.empresa.EMPRESA,obra:this.obra_id,fecha:this.myDate.slice(0,10),codigo:this.identity[0].COD_PERSONAL,descripcion:this.observations,cantidad:this.numHours},e=this.loading.create({message:"Por favor espere..."});(yield e).present();let i=(new l.c).set("Content-Type","application/json").set("Accept","*/*");yield this.http.post(b.a.API+"/save/",t,{headers:i}).subscribe(t=>Object(r.a)(this,void 0,void 0,(function*(){yield this.http.get(b.a.API+"/workday/"+this.identity[0].COD_PERSONAL).subscribe(t=>{this.total=0,this.tareas=t,this.tareas=JSON.parse(this.tareas);for(let e=0;e<this.tareas.length;e++)this.tareas[e].CANTIDAD=parseFloat(this.tareas[e].CANTIDAD).toFixed(2),this.total=(parseFloat(this.tareas[e].CANTIDAD)+parseFloat(this.total||0)).toFixed(1)}),this.empresa.EMPRESA=null,this.observations="",this.numHours=0,this.obra=null,(yield e).dismiss()})),t=>Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.alert.create({cssClass:"my-custom-class",header:"Error",subHeader:"",message:"Error al enviar tu trabajo.",buttons:["OK"]});(yield e).dismiss(),yield t.present()})))}else{console.log(this.empresa,this.obra_id,this.identity[0],this.numHours);const t=yield this.alert.create({cssClass:"my-custom-class",header:"Error",subHeader:"",message:"Por favor rellene el formulario .",buttons:["OK"]});yield t.present()}}))}salir(){window.localStorage.removeItem("identity"),this.navCtrl.navigateRoot("/login")}delete(t){this.http.delete(b.a.API+"/delete/"+t.LINEA+"/"+t.FECHA+"/"+t.OBRA+"/"+this.identity[0].COD_PERSONAL).subscribe(t=>Object(r.a)(this,void 0,void 0,(function*(){yield this.http.get(b.a.API+"/workday/"+this.identity[0].COD_PERSONAL).subscribe(t=>{this.total=0,this.tareas=t,this.tareas=JSON.parse(this.tareas);for(let e=0;e<this.tareas.length;e++)this.tareas[e].CANTIDAD=parseFloat(this.tareas[e].CANTIDAD).toFixed(2),this.total=(parseFloat(this.tareas[e].CANTIDAD)+parseFloat(this.total||0)).toFixed(1);console.log(this.tareas)})})))}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(s.D),c.Ib(s.C),c.Ib(a.g),c.Ib(s.a),c.Ib(l.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-tab1"]],decls:40,vars:13,consts:[[3,"translucent"],[4,"ngIf"],["slot","end"],[3,"fullscreen"],["lines","full"],["position","stacked"],["type","text","debounce","600","name","obra","placeholder","Buscar obra",3,"ngModel","ngModelChange","ionInput"],["lines","full",1,"opacity"],["position","floating",1,"opacity"],["class","opacity","placeholder","Empresa de la obra","name","empresa","type","text",3,"ngModel","readonly","ngModelChange",4,"ngIf"],["position","floating"],["name","numhours","clearOnEdit","true","minlength","0","inputmode","numeric","maxlength","1","required","",3,"ngModel","ngModelChange"],["name","observations","placeholder","Tus observaciones...",3,"ngModel","ngModelChange"],["name","time","displayFormat","DD/MM/YYYY","pickerFormat","DD/MM/YYYY",3,"ngModel","max","ngModelChange","maxChange"],["type","button","color","danger","expand","block",3,"click"],["type","submit","color","success","expand","block",3,"click"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["placeholder","Empresa de la obra","name","empresa","type","text",1,"opacity",3,"ngModel","readonly","ngModelChange"],[4,"ngFor","ngForOf"],["color","danger",3,"click"],["name","trash"]],template:function(t,e){1&t&&(c.Lb(0,"ion-header",0),c.Lb(1,"ion-toolbar"),c.nc(2,h,2,1,"ion-title",1),c.Lb(3,"h4",2),c.pc(4),c.Kb(),c.Kb(),c.Kb(),c.Lb(5,"ion-content",3),c.Lb(6,"form"),c.Lb(7,"ion-item",4),c.Lb(8,"ion-label",5),c.pc(9,"Obra"),c.Kb(),c.Lb(10,"ion-searchbar",6),c.Tb("ngModelChange",(function(t){return e.obra=t}))("ionInput",(function(t){return e.getItems(t)})),c.Kb(),c.nc(11,u,2,1,"ion-list",1),c.Kb(),c.Lb(12,"ion-item",7),c.Lb(13,"ion-label",8),c.pc(14,"Empresa"),c.Kb(),c.nc(15,p,1,2,"ion-input",9),c.Kb(),c.Lb(16,"ion-item",4),c.Lb(17,"ion-label",10),c.pc(18,"Horas"),c.Kb(),c.Lb(19,"ion-input",11),c.Tb("ngModelChange",(function(t){return e.numHours=t})),c.Kb(),c.Kb(),c.Lb(20,"ion-item",4),c.Lb(21,"ion-label",10),c.pc(22,"Observaciones"),c.Kb(),c.Lb(23,"ion-textarea",12),c.Tb("ngModelChange",(function(t){return e.observations=t})),c.Kb(),c.Kb(),c.Lb(24,"ion-item",4),c.Lb(25,"ion-label",10),c.pc(26,"Fecha"),c.Kb(),c.Lb(27,"ion-datetime",13),c.Tb("ngModelChange",(function(t){return e.myDate=t}))("maxChange",(function(t){return e.myDate=t})),c.Kb(),c.Kb(),c.Lb(28,"ion-row"),c.Lb(29,"ion-col"),c.Lb(30,"ion-button",14),c.Tb("click",(function(){return e.salir()})),c.pc(31,"Salir"),c.Kb(),c.Kb(),c.Lb(32,"ion-col"),c.Lb(33,"ion-button",15),c.Tb("click",(function(){return e.save()})),c.pc(34,"Aceptar"),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Lb(35,"ion-header",0),c.Lb(36,"ion-toolbar"),c.Lb(37,"ion-title"),c.pc(38,"Tus obras"),c.Kb(),c.Kb(),c.Kb(),c.nc(39,g,2,1,"div",1),c.Kb()),2&t&&(c.bc("translucent",!0),c.xb(2),c.bc("ngIf",e.identity),c.xb(2),c.rc("",e.total," h"),c.xb(1),c.bc("fullscreen",!0),c.xb(5),c.bc("ngModel",e.obra),c.xb(1),c.bc("ngIf",e.isItemAvailable),c.xb(4),c.bc("ngIf",e.empresa),c.xb(4),c.bc("ngModel",e.numHours),c.xb(4),c.bc("ngModel",e.observations),c.xb(4),c.bc("ngModel",e.myDate)("max",e.myDate),c.xb(8),c.bc("translucent",!0),c.xb(4),c.bc("ngIf",e.tareas))},directives:[s.i,s.z,n.j,s.g,o.k,o.g,o.h,s.l,s.p,s.t,s.G,o.f,o.i,s.k,o.c,o.b,o.j,s.x,s.h,s.F,s.s,s.f,s.c,s.y,s.q,n.i,s.o,s.n,s.m,s.j],styles:["h4[_ngcontent-%COMP%]{margin-right:1rem}ion-label[_ngcontent-%COMP%]{opacity:1!important}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(f)],a.i]}),t})(),I=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[s.A,n.b,o.a,y]]}),t})()}}]);