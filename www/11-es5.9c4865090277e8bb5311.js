!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{tmrb:function(n,r,i){"use strict";i.r(r),i.d(r,"Tab1PageModule",(function(){return O}));var a=i("TEn/"),o=i("ofXK"),s=i("3Pt+"),c=i("tyNb"),b=i("mrSG"),l=i("tk/3"),u=i("AytR"),p=i("fXoL");function h(e,t){if(1&e&&(p.Lb(0,"ion-title"),p.pc(1),p.Kb()),2&e){var n=p.Vb();p.xb(1),p.rc(" Hola ",n.identity[0].NOMBRE," ")}}function m(e,t){if(1&e){var n=p.Mb();p.Lb(0,"ion-item",17),p.Tb("click",(function(){p.jc(n);var e=t.$implicit;return p.Vb(2).obraSelected(e)})),p.pc(1),p.Kb()}if(2&e){var r=t.$implicit;p.xb(1),p.sc("",r.DESCRIPCION," - ",r.OBRA,"")}}function d(e,t){if(1&e&&(p.Lb(0,"ion-list"),p.nc(1,m,2,2,"ion-item",16),p.Kb()),2&e){var n=p.Vb();p.xb(1),p.bc("ngForOf",n.obras)}}function f(e,t){if(1&e){var n=p.Mb();p.Lb(0,"ion-input",18),p.Tb("ngModelChange",(function(e){return p.jc(n),p.Vb().empresa.DESCRIPCION=e})),p.Kb()}if(2&e){var r=p.Vb();p.bc("ngModel",r.empresa.DESCRIPCION)("readonly",!0)}}function g(e,t){if(1&e){var n=p.Mb();p.Lb(0,"ion-item-sliding"),p.Lb(1,"ion-item"),p.Lb(2,"ion-label"),p.pc(3),p.Kb(),p.Kb(),p.Lb(4,"ion-item-options"),p.Lb(5,"ion-item-option",20),p.Tb("click",(function(){p.jc(n);var e=t.$implicit;return p.Vb(2).delete(e)})),p.Jb(6,"ion-icon",21),p.Kb(),p.Kb(),p.Kb()}if(2&e){var r=t.$implicit;p.xb(3),p.sc(" ",r.DESCRIPCION,", ",r.CANTIDAD," h ")}}function v(e,t){if(1&e&&(p.Lb(0,"div"),p.nc(1,g,7,2,"ion-item-sliding",19),p.Kb()),2&e){var n=p.Vb();p.xb(1),p.bc("ngForOf",n.tareas)}}var y,x,I,C=[{path:"",component:(y=function(){function n(t,r,i,a,o){e(this,n),this.navCtrl=t,this.loading=r,this.router=i,this.alert=a,this.http=o,this.myDate=(new Date).toISOString(),this.observations="",this.numHours=0,this.isItemAvailable=!1,this.items=[],this.load()}var r,i,a;return r=n,(i=[{key:"initializeItems",value:function(){this.items=["Obra1 - 1234","Obra2 - 4321","Obra3 - 7894"]}},{key:"ngOnInit",value:function(){this.load()}},{key:"getItems",value:function(e){var t=e.target.value;t&&""!==t.trim()?(this.isItemAvailable=!0,this.items=this.items.filter((function(e){return e.toLowerCase().indexOf(t.toLowerCase())>-1}))):this.isItemAvailable=!1}},{key:"obraSelected",value:function(e){var t=this;this.obra=e.DESCRIPCION,this.obra_id=e.OBRA,this.isItemAvailable=!1,this.http.get(u.a.API+"/empresa/"+e.EMPRESA).subscribe((function(e){t.empresa=e,t.empresa=JSON.parse(t.empresa),t.empresa=t.empresa[0]}))}},{key:"load",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null!=(t=JSON.parse(localStorage.getItem("identity")))?(this.identity=JSON.parse(t),console.log(this.identity)):this.router.navigateByUrl("/login"),e.next=4,this.http.get(u.a.API+"/"+this.identity[0].EMPRESA).subscribe((function(e){return Object(b.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.obras=e,this.obras=JSON.parse(this.obras),console.log(this.obras),t.next=5,this.http.get(u.a.API+"/workday/"+this.identity[0].COD_PERSONAL).subscribe((function(e){n.total=0,n.tareas=e,n.tareas=JSON.parse(n.tareas);for(var t=0;t<n.tareas.length;t++)n.tareas[t].CANTIDAD=parseFloat(n.tareas[t].CANTIDAD).toFixed(2),n.total=(parseFloat(n.tareas[t].CANTIDAD)+parseFloat(n.total||0)).toFixed(1);console.log(n.tareas)}));case 5:case"end":return t.stop()}}),t,this)})))}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"save",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.empresa||null==this.obra_id||null==this.identity[0]||null==this.numHours||null==this.observations){e.next=10;break}return t={empresa:this.empresa.EMPRESA,obra:this.obra_id,fecha:this.myDate.slice(0,10),codigo:this.identity[0].COD_PERSONAL,descripcion:this.observations,cantidad:this.numHours},n=this.loading.create({message:"Por favor espere..."}),e.next=4,n;case 4:return e.sent.present(),r=(new l.c).set("Content-Type","application/json").set("Accept","*/*"),e.next=8,this.http.post(u.a.API+"/save/",t,{headers:r}).subscribe((function(e){return Object(b.a)(a,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get(u.a.API+"/workday/"+this.identity[0].COD_PERSONAL).subscribe((function(e){t.total=0,t.tareas=e,t.tareas=JSON.parse(t.tareas);for(var n=0;n<t.tareas.length;n++)t.tareas[n].CANTIDAD=parseFloat(t.tareas[n].CANTIDAD).toFixed(2),t.total=(parseFloat(t.tareas[n].CANTIDAD)+parseFloat(t.total||0)).toFixed(1)}));case 2:return this.empresa.EMPRESA=null,this.observations="",this.numHours=0,this.obra=null,e.next=8,n;case 8:e.sent.dismiss();case 9:case"end":return e.stop()}}),e,this)})))}),(function(e){return Object(b.a)(a,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({cssClass:"my-custom-class",header:"Error",subHeader:"",message:"Error al enviar tu trabajo.",buttons:["OK"]});case 2:return t=e.sent,e.next=5,n;case 5:return e.sent.dismiss(),e.next=8,t.present();case 8:case"end":return e.stop()}}),e,this)})))}));case 8:e.next=16;break;case 10:return console.log(this.empresa,this.obra_id,this.identity[0],this.numHours),e.next=13,this.alert.create({cssClass:"my-custom-class",header:"Error",subHeader:"",message:"Por favor rellene el formulario .",buttons:["OK"]});case 13:return i=e.sent,e.next=16,i.present();case 16:case"end":return e.stop()}}),e,this)})))}},{key:"salir",value:function(){window.localStorage.removeItem("identity"),this.navCtrl.navigateRoot("/login")}},{key:"delete",value:function(e){var t=this;this.http.delete(u.a.API+"/delete/"+e.LINEA+"/"+e.FECHA+"/"+e.OBRA+"/"+this.identity[0].COD_PERSONAL).subscribe((function(e){return Object(b.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get(u.a.API+"/workday/"+this.identity[0].COD_PERSONAL).subscribe((function(e){t.total=0,t.tareas=e,t.tareas=JSON.parse(t.tareas);for(var n=0;n<t.tareas.length;n++)t.tareas[n].CANTIDAD=parseFloat(t.tareas[n].CANTIDAD).toFixed(2),t.total=(parseFloat(t.tareas[n].CANTIDAD)+parseFloat(t.total||0)).toFixed(1);console.log(t.tareas)}));case 2:case"end":return e.stop()}}),e,this)})))}))}}])&&t(r.prototype,i),a&&t(r,a),n}(),y.\u0275fac=function(e){return new(e||y)(p.Ib(a.D),p.Ib(a.C),p.Ib(c.g),p.Ib(a.a),p.Ib(l.a))},y.\u0275cmp=p.Cb({type:y,selectors:[["app-tab1"]],decls:40,vars:13,consts:[[3,"translucent"],[4,"ngIf"],["slot","end"],[3,"fullscreen"],["lines","full"],["position","stacked"],["type","text","debounce","600","name","obra","placeholder","Buscar obra",3,"ngModel","ngModelChange","ionInput"],["lines","full",1,"opacity"],["position","floating",1,"opacity"],["class","opacity","placeholder","Empresa de la obra","name","empresa","type","text",3,"ngModel","readonly","ngModelChange",4,"ngIf"],["position","floating"],["name","numhours","clearOnEdit","true","minlength","0","inputmode","numeric","maxlength","1","required","",3,"ngModel","ngModelChange"],["name","observations","placeholder","Tus observaciones...",3,"ngModel","ngModelChange"],["name","time","displayFormat","DD/MM/YYYY","pickerFormat","DD/MM/YYYY",3,"ngModel","max","ngModelChange","maxChange"],["type","button","color","danger","expand","block",3,"click"],["type","submit","color","success","expand","block",3,"click"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["placeholder","Empresa de la obra","name","empresa","type","text",1,"opacity",3,"ngModel","readonly","ngModelChange"],[4,"ngFor","ngForOf"],["color","danger",3,"click"],["name","trash"]],template:function(e,t){1&e&&(p.Lb(0,"ion-header",0),p.Lb(1,"ion-toolbar"),p.nc(2,h,2,1,"ion-title",1),p.Lb(3,"h4",2),p.pc(4),p.Kb(),p.Kb(),p.Kb(),p.Lb(5,"ion-content",3),p.Lb(6,"form"),p.Lb(7,"ion-item",4),p.Lb(8,"ion-label",5),p.pc(9,"Obra"),p.Kb(),p.Lb(10,"ion-searchbar",6),p.Tb("ngModelChange",(function(e){return t.obra=e}))("ionInput",(function(e){return t.getItems(e)})),p.Kb(),p.nc(11,d,2,1,"ion-list",1),p.Kb(),p.Lb(12,"ion-item",7),p.Lb(13,"ion-label",8),p.pc(14,"Empresa"),p.Kb(),p.nc(15,f,1,2,"ion-input",9),p.Kb(),p.Lb(16,"ion-item",4),p.Lb(17,"ion-label",10),p.pc(18,"Horas"),p.Kb(),p.Lb(19,"ion-input",11),p.Tb("ngModelChange",(function(e){return t.numHours=e})),p.Kb(),p.Kb(),p.Lb(20,"ion-item",4),p.Lb(21,"ion-label",10),p.pc(22,"Observaciones"),p.Kb(),p.Lb(23,"ion-textarea",12),p.Tb("ngModelChange",(function(e){return t.observations=e})),p.Kb(),p.Kb(),p.Lb(24,"ion-item",4),p.Lb(25,"ion-label",10),p.pc(26,"Fecha"),p.Kb(),p.Lb(27,"ion-datetime",13),p.Tb("ngModelChange",(function(e){return t.myDate=e}))("maxChange",(function(e){return t.myDate=e})),p.Kb(),p.Kb(),p.Lb(28,"ion-row"),p.Lb(29,"ion-col"),p.Lb(30,"ion-button",14),p.Tb("click",(function(){return t.salir()})),p.pc(31,"Salir"),p.Kb(),p.Kb(),p.Lb(32,"ion-col"),p.Lb(33,"ion-button",15),p.Tb("click",(function(){return t.save()})),p.pc(34,"Aceptar"),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Lb(35,"ion-header",0),p.Lb(36,"ion-toolbar"),p.Lb(37,"ion-title"),p.pc(38,"Tus obras"),p.Kb(),p.Kb(),p.Kb(),p.nc(39,v,2,1,"div",1),p.Kb()),2&e&&(p.bc("translucent",!0),p.xb(2),p.bc("ngIf",t.identity),p.xb(2),p.rc("",t.total," h"),p.xb(1),p.bc("fullscreen",!0),p.xb(5),p.bc("ngModel",t.obra),p.xb(1),p.bc("ngIf",t.isItemAvailable),p.xb(4),p.bc("ngIf",t.empresa),p.xb(4),p.bc("ngModel",t.numHours),p.xb(4),p.bc("ngModel",t.observations),p.xb(4),p.bc("ngModel",t.myDate)("max",t.myDate),p.xb(8),p.bc("translucent",!0),p.xb(4),p.bc("ngIf",t.tareas))},directives:[a.i,a.z,o.j,a.g,s.k,s.g,s.h,a.l,a.p,a.t,a.G,s.f,s.i,a.k,s.c,s.b,s.j,a.x,a.h,a.F,a.s,a.f,a.c,a.y,a.q,o.i,a.o,a.n,a.m,a.j],styles:["h4[_ngcontent-%COMP%]{margin-right:1rem}ion-label[_ngcontent-%COMP%]{opacity:1!important}"]}),y)}],A=((I=function t(){e(this,t)}).\u0275mod=p.Gb({type:I}),I.\u0275inj=p.Fb({factory:function(e){return new(e||I)},imports:[[c.i.forChild(C)],c.i]}),I),O=((x=function t(){e(this,t)}).\u0275mod=p.Gb({type:x}),x.\u0275inj=p.Fb({factory:function(e){return new(e||x)},imports:[[a.A,o.b,s.a,A]]}),x)}}])}();