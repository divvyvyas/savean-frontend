(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,e,r){"use strict";r.r(e);var o=r("tyNb"),i=r("fXoL");let n=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-auth-layout"]],decls:1,vars:0,template:function(t,e){1&t&&i.Nb(0,"router-outlet")},directives:[o.c],styles:[""]}),t})();var a=r("3Pt+"),b=r("7dP1"),s=r("Wp6s"),c=r("NFeN"),l=r("kmnG"),m=r("qFsG"),u=r("bTqV");let p=(()=>{class t{constructor(t,e,r){this.router=t,this.fb=e,this._authService=r,this.largeScreen=!0,this.user=this.fb.group({username:[""],password:[""]})}ngOnInit(){this.width=window.outerWidth,this.width<599&&(this.largeScreen=!1)}report(){this.router.navigate(["/savean/register"])}submit(){let t={};t=this.user.value,this.user.valid&&this._authService.login(t).subscribe(t=>this.userData=t,t=>console.log(t),()=>{this.router.navigate(["/savean/home"])})}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(o.a),i.Mb(a.b),i.Mb(b.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-login"]],decls:37,vars:3,consts:[[1,"d-flex","h-100"],[1,"my-auto","mx-md-auto","mx-2","p-4",2,"box-shadow","0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"],[1,"w-100","text-center",2,"margin-right","16px"],["src","assets/images/logo1.png","alt","","srcset","",1,"img","d-inline-block","img-fluid","my-2","mx-3",2,"height","3.5rem"],[2,"text-align","center","margin-right","6rem"],[1,"icon"],[1,"text-center","text-sm"],[1,"text-center","mx-auto","h5"],[1,"lead"],[1,"p-md-2","p-1",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-12"],["appearance","outline"],["matInput","","formControlName","username","autocomplete","off"],["align","end"],["type","password","formControlName","password","matInput","","autocomplete","off"],["mat-raised-button","",1,"float-left",3,"click"],["mat-raised-button","","color","primary",1,"float-right"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"mat-card",1),i.Rb(2,"mat-card-header"),i.Nb(3,"mat-card-title"),i.Rb(4,"div",2),i.Nb(5,"img",3),i.Qb(),i.Qb(),i.Rb(6,"p",4),i.Rb(7,"mat-icon",5),i.pc(8,"lock"),i.Qb(),i.Nb(9,"br"),i.Qb(),i.Rb(10,"p",6),i.Rb(11,"strong",7),i.Rb(12,"mark"),i.pc(13,"LogIn"),i.Qb(),i.Qb(),i.Nb(14,"br"),i.Rb(15,"span",8),i.pc(16,"Login to track problems/crimes against Animals."),i.Qb(),i.Qb(),i.Rb(17,"mat-card-content"),i.Rb(18,"form",9),i.Zb("ngSubmit",(function(){return e.submit()})),i.Rb(19,"div",10),i.Rb(20,"div",11),i.Rb(21,"mat-form-field",12),i.Rb(22,"mat-label"),i.pc(23,"Username"),i.Qb(),i.Nb(24,"input",13),i.Nb(25,"mat-hint",14),i.Qb(),i.Nb(26,"br"),i.Rb(27,"mat-form-field",12),i.Rb(28,"mat-label"),i.pc(29,"Password"),i.Qb(),i.Nb(30,"input",15),i.Nb(31,"mat-hint",14),i.Qb(),i.Nb(32,"br"),i.Rb(33,"button",16),i.Zb("click",(function(){return e.report()})),i.pc(34,"Report a Problem"),i.Qb(),i.Rb(35,"button",17),i.pc(36,"Submit"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.Bb(1),i.Db("w-25",e.largeScreen),i.Bb(17),i.ec("formGroup",e.user))},directives:[s.a,s.e,s.i,c.a,s.d,a.l,a.h,a.d,l.b,l.f,m.a,a.a,a.g,a.c,l.e,u.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-icon[_ngcontent-%COMP%]{font-size:8rem}"]}),t})();var f=r("ZPyn"),d=r("dNgK"),g=r("ofXK");function h(t,e){1&t&&(i.Rb(0,"mat-error"),i.pc(1,"Email is "),i.Rb(2,"strong"),i.pc(3,"required"),i.Qb(),i.Qb())}function R(t,e){if(1&t&&(i.Rb(0,"mat-form-field",12),i.Rb(1,"mat-label"),i.pc(2,"Email"),i.Qb(),i.Nb(3,"input",13),i.Nb(4,"mat-hint",14),i.oc(5,h,4,0,"mat-error",15),i.Qb()),2&t){const t=i.bc();i.Bb(5),i.ec("ngIf",null==t.Email.errors?null:t.Email.errors.required)}}function Q(t,e){1&t&&(i.Rb(0,"mat-error"),i.pc(1,"Name is "),i.Rb(2,"strong"),i.pc(3,"required"),i.Qb(),i.Qb())}function v(t,e){if(1&t&&(i.Rb(0,"mat-form-field",12),i.Rb(1,"mat-label"),i.pc(2,"Name"),i.Qb(),i.Nb(3,"input",16),i.Nb(4,"mat-hint",14),i.oc(5,Q,4,0,"mat-error",15),i.Qb()),2&t){const t=i.bc();i.Bb(5),i.ec("ngIf",null==t.Name.errors?null:t.Name.errors.required)}}function N(t,e){if(1&t){const t=i.Sb();i.Rb(0,"div",17),i.Rb(1,"input",18),i.Zb("change",(function(e){return i.ic(t),i.bc().uploadImage(e)})),i.Qb(),i.Qb()}}function w(t,e){1&t&&(i.Rb(0,"mat-error"),i.pc(1,"Message is "),i.Rb(2,"strong"),i.pc(3,"required"),i.Qb(),i.Qb())}function I(t,e){if(1&t&&(i.Rb(0,"mat-form-field",12),i.Rb(1,"mat-label"),i.pc(2,"Message"),i.Qb(),i.Nb(3,"textarea",19),i.Nb(4,"mat-hint",14),i.oc(5,w,4,0,"mat-error",15),i.Qb()),2&t){const t=i.bc();i.Bb(5),i.ec("ngIf",null==t.Message.errors?null:t.Message.errors.required)}}function x(t,e){1&t&&(i.Rb(0,"mat-error"),i.pc(1,"Name is "),i.Rb(2,"strong"),i.pc(3,"required"),i.Qb(),i.Qb())}function y(t,e){if(1&t&&(i.Rb(0,"mat-form-field",12),i.Rb(1,"mat-label"),i.pc(2,"Enter 6 digit Otp"),i.Qb(),i.Nb(3,"input",20),i.Nb(4,"mat-hint",14),i.oc(5,x,4,0,"mat-error",15),i.Qb()),2&t){const t=i.bc();i.Bb(5),i.ec("ngIf",null==t.Otp.errors?null:t.Otp.errors.required)}}function k(t,e){if(1&t){const t=i.Sb();i.Rb(0,"button",21),i.Zb("click",(function(){return i.ic(t),i.bc().login()})),i.pc(1,"Back to Login"),i.Qb()}}function S(t,e){if(1&t){const t=i.Sb();i.Rb(0,"button",22),i.Zb("click",(function(){return i.ic(t),i.bc().showOtp()})),i.pc(1,"Submit"),i.Qb()}if(2&t){const t=i.bc();i.ec("disabled",t.report.invalid)}}function B(t,e){if(1&t&&(i.Rb(0,"button",23),i.pc(1,"Submit"),i.Qb()),2&t){const t=i.bc();i.ec("disabled",t.report.invalid)}}const M=[{path:"",component:n,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:p},{path:"register",component:(()=>{class t{constructor(t,e,r,o){this.router=t,this.reportService=e,this.fb=r,this.snackBar=o,this.otp=!1,this.largeScreen=!0,this.filedata=null,this.report=this.fb.group({email:["",[a.k.required,a.k.email]],name:["",[a.k.required,a.k.pattern("[A-Za-z ]+")]],file:["",[a.k.required]],message:["",[a.k.required,a.k.pattern("[A-Za-z0-9 ]+")]],otp:[""]})}get Email(){return this.report.get("email")}get Name(){return this.report.get("name")}get File(){return this.report.get("file")}get Message(){return this.report.get("message")}get Otp(){return this.report.get("otp")}ngOnInit(){this.width=window.outerWidth,this.width<599&&(this.largeScreen=!1),this.reportService.getPosition().subscribe(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.zoom=15},t=>console.log(t))}showOtp(){this.reportService.sendOtp(this.report.value.email).subscribe(),this.otp=!0}submit(){let t={};t=this.report.value,t.file=this.filedata,t.latitude=this.latitude,t.longitude=this.longitude,this.report.valid&&this.reportService.checkOtp(t.otp,t.email).subscribe(e=>{e?this.reportService.addReport(t).subscribe(t=>this.reportRes=t,t=>console.log(t),()=>{this.router.navigateByUrl("/RefreshComponent",{skipLocationChange:!0}).then(()=>{this.router.navigate(["/savean/register"])}).then(()=>this.snackBar.open("Report Submitted Successfully","dismiss",{duration:2e3}))}):this.snackBar.open("Incorrect OTP","dismiss",{duration:2e3})},t=>console.log(t))}login(){this.router.navigate(["/savean/login"])}uploadImage(t){this.filedata=t.target.files[0]}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(o.a),i.Mb(f.a),i.Mb(a.b),i.Mb(d.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-register"]],decls:23,vars:11,consts:[[1,"d-flex","h-100"],[1,"my-auto","mx-md-auto","mx-2","p-4",2,"box-shadow","0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"],[1,"w-100","text-center",2,"margin-right","16px"],[1,"h1","mx-auto",2,"font-size","1.8rem"],[1,"p-md-2","p-1",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-12"],["appearance","outline",4,"ngIf"],["class","form-group",4,"ngIf"],["type","button","class","float-left","mat-raised-button","",3,"click",4,"ngIf"],["type","button","mat-raised-button","","class","float-right","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","class","float-right","color","primary",3,"disabled",4,"ngIf"],["appearance","outline"],["formControlName","email","matInput","","autocomplete","off"],["align","end"],[4,"ngIf"],["formControlName","name","matInput","","autocomplete","off"],[1,"form-group"],["formControlName","file","type","file",1,"form-control",3,"change"],["formControlName","message","matInput","","autocomplete","off",2,"resize","none"],["formControlName","otp","matInput","","autocomplete","off"],["type","button","mat-raised-button","",1,"float-left",3,"click"],["type","button","mat-raised-button","","color","primary",1,"float-right",3,"disabled","click"],["mat-raised-button","","color","primary",1,"float-right",3,"disabled"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"mat-card",1),i.Rb(2,"mat-card-header"),i.Nb(3,"mat-card-title"),i.Rb(4,"div",2),i.Rb(5,"h2",3),i.pc(6,"Report a Problem"),i.Qb(),i.Qb(),i.Qb(),i.Rb(7,"mat-card-content"),i.Rb(8,"form",4),i.Zb("ngSubmit",(function(){return e.submit()})),i.Rb(9,"div",5),i.Rb(10,"div",6),i.oc(11,R,6,1,"mat-form-field",7),i.Nb(12,"br"),i.oc(13,v,6,1,"mat-form-field",7),i.Nb(14,"br"),i.oc(15,N,2,0,"div",8),i.oc(16,I,6,1,"mat-form-field",7),i.Nb(17,"br"),i.oc(18,y,6,1,"mat-form-field",7),i.Nb(19,"br"),i.oc(20,k,2,0,"button",9),i.oc(21,S,2,1,"button",10),i.oc(22,B,2,1,"button",11),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.Bb(1),i.Db("w-25",e.largeScreen),i.Bb(7),i.ec("formGroup",e.report),i.Bb(3),i.ec("ngIf",!e.otp),i.Bb(2),i.ec("ngIf",!e.otp),i.Bb(2),i.ec("ngIf",!e.otp),i.Bb(1),i.ec("ngIf",!e.otp),i.Bb(2),i.ec("ngIf",e.otp),i.Bb(2),i.ec("ngIf",!e.otp),i.Bb(1),i.ec("ngIf",!e.otp),i.Bb(1),i.ec("ngIf",e.otp))},directives:[s.a,s.e,s.i,s.d,a.l,a.h,a.d,g.j,l.b,l.f,a.a,m.a,a.g,a.c,l.e,l.a,u.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-icon[_ngcontent-%COMP%]{font-size:8rem}textarea[_ngcontent-%COMP%]{height:8rem;resize:none}"]}),t})()}]}];let O=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[o.b.forChild(M)],o.b]}),t})();var C=r("PCNd");r.d(e,"AuthModule",(function(){return q}));let q=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[C.a,O]]}),t})()}}]);