(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,e,n){"use strict";n.r(e);var r=n("tyNb"),a=n("fXoL");let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["app-auth-layout"]],decls:1,vars:0,template:function(t,e){1&t&&a.Mb(0,"router-outlet")},directives:[r.c],styles:[""]}),t})();var b=n("Wp6s"),i=n("NFeN"),c=n("3Pt+"),m=n("kmnG"),l=n("qFsG"),u=n("bTqV");const s=[{path:"",component:o,children:[{path:"login",component:(()=>{class t{constructor(t){this.router=t,this.largeScreen=!0}ngOnInit(){this.width=window.outerWidth,this.width<599&&(this.largeScreen=!1)}report(){this.router.navigate(["/savean/register"])}submit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(r.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-login"]],decls:37,vars:2,consts:[[1,"d-flex","h-100"],[1,"my-auto","mx-md-auto","mx-2","p-4"],[1,"w-100","text-center",2,"margin-right","16px"],[1,"h2","mx-auto",2,"font-family","Brush Script MT","font-size","2.8rem"],[2,"text-align","center","margin-right","6rem"],[1,"icon"],[1,"text-center","text-sm"],[1,"text-center","mx-auto"],[1,"p-md-2","p-1",3,"ngSubmit"],[1,"row"],[1,"col-12"],["appearance","outline"],["matInput","","autocomplete","off"],["align","end"],["type","password","matInput","","autocomplete","off"],["mat-raised-button","",1,"float-left",3,"click"],["mat-raised-button","","color","primary",1,"float-right"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"mat-card",1),a.Qb(2,"mat-card-header"),a.Mb(3,"mat-card-title"),a.Qb(4,"div",2),a.Qb(5,"h2",3),a.lc(6,"SaveAn"),a.Pb(),a.Pb(),a.Pb(),a.Qb(7,"p",4),a.Qb(8,"mat-icon",5),a.lc(9,"lock"),a.Pb(),a.Mb(10,"br"),a.Pb(),a.Qb(11,"p",6),a.Qb(12,"strong",7),a.Qb(13,"mark"),a.lc(14,"Trouble Logging In?"),a.Pb(),a.Pb(),a.Mb(15,"br"),a.lc(16," Enter your username and we'll send you a OTP to reset your account password to default. "),a.Pb(),a.Qb(17,"mat-card-content"),a.Qb(18,"form",8),a.Yb("ngSubmit",(function(){return e.submit()})),a.Qb(19,"div",9),a.Qb(20,"div",10),a.Qb(21,"mat-form-field",11),a.Qb(22,"mat-label"),a.lc(23,"Username"),a.Pb(),a.Mb(24,"input",12),a.Mb(25,"mat-hint",13),a.Pb(),a.Mb(26,"br"),a.Qb(27,"mat-form-field",11),a.Qb(28,"mat-label"),a.lc(29,"Password"),a.Pb(),a.Mb(30,"input",14),a.Mb(31,"mat-hint",13),a.Pb(),a.Mb(32,"br"),a.Qb(33,"button",15),a.Yb("click",(function(){return e.report()})),a.lc(34,"Report a Problem"),a.Pb(),a.Qb(35,"button",16),a.lc(36,"Submit"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.Bb(1),a.Db("w-25",e.largeScreen))},directives:[b.a,b.c,b.e,i.a,b.b,c.g,c.d,c.e,m.a,m.e,l.a,m.d,u.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-icon[_ngcontent-%COMP%]{font-size:8rem}"]}),t})()},{path:"register",component:(()=>{class t{constructor(t){this.router=t,this.largeScreen=!0}ngOnInit(){this.width=window.outerWidth,this.width<599&&(this.largeScreen=!1)}submit(){}login(){this.router.navigate(["/savean/login"])}uploadImage(t){}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(r.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-register"]],decls:35,vars:2,consts:[[1,"d-flex","h-100"],[1,"my-auto","mx-md-auto","mx-2","p-4"],[1,"w-100","text-center",2,"margin-right","16px"],[1,"h1","mx-auto",2,"font-size","1.8rem"],[1,"p-md-2","p-1",3,"ngSubmit"],[1,"row"],[1,"col-12"],["appearance","outline"],["matInput","","autocomplete","off"],["align","end"],["type","password","matInput","","autocomplete","off"],[1,"form-group"],["type","file",1,"form-control",3,"change"],["matInput","","autocomplete","off",2,"resize","none"],["mat-raised-button","",1,"float-left",3,"click"],["mat-raised-button","","color","primary",1,"float-right"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"mat-card",1),a.Qb(2,"mat-card-header"),a.Mb(3,"mat-card-title"),a.Qb(4,"div",2),a.Qb(5,"h2",3),a.lc(6,"Report a Problem"),a.Pb(),a.Pb(),a.Pb(),a.Qb(7,"mat-card-content"),a.Qb(8,"form",4),a.Yb("ngSubmit",(function(){return e.submit()})),a.Qb(9,"div",5),a.Qb(10,"div",6),a.Qb(11,"mat-form-field",7),a.Qb(12,"mat-label"),a.lc(13,"Email"),a.Pb(),a.Mb(14,"input",8),a.Mb(15,"mat-hint",9),a.Pb(),a.Mb(16,"br"),a.Qb(17,"mat-form-field",7),a.Qb(18,"mat-label"),a.lc(19,"Name"),a.Pb(),a.Mb(20,"input",10),a.Mb(21,"mat-hint",9),a.Pb(),a.Mb(22,"br"),a.Qb(23,"div",11),a.Qb(24,"input",12),a.Yb("change",(function(t){return e.uploadImage(t)})),a.Pb(),a.Pb(),a.Qb(25,"mat-form-field",7),a.Qb(26,"mat-label"),a.lc(27,"Message"),a.Pb(),a.Mb(28,"textarea",13),a.Mb(29,"mat-hint",9),a.Pb(),a.Mb(30,"br"),a.Qb(31,"button",14),a.Yb("click",(function(){return e.login()})),a.lc(32,"Back to Login"),a.Pb(),a.Qb(33,"button",15),a.lc(34,"Submit"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.Bb(1),a.Db("w-25",e.largeScreen))},directives:[b.a,b.c,b.e,b.b,c.g,c.d,c.e,m.a,m.e,l.a,m.d,u.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-icon[_ngcontent-%COMP%]{font-size:8rem}textarea[_ngcontent-%COMP%]{height:8rem;resize:none}"]}),t})()}]}];let d=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[r.b.forChild(s)],r.b]}),t})();var p=n("PCNd");n.d(e,"AuthModule",(function(){return f}));let f=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[p.a,d]]}),t})()}}]);