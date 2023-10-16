"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[453],{4453:(ht,b,i)=>{i.r(b),i.d(b,{HeroesModule:()=>pt});var l=i(6814),a=i(6223),m=i(3403),t=i(5879),L=i(4567),p=i(2296),v=i(617),g=i(9038),H=i(2651),P=i(1274);function Y(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"mat-list-item",9),t.NdJ("click",function(){t.CHM(e),t.oxw();const n=t.MAs(2);return t.KtG(n.toggle())}),t.TgZ(1,"mat-icon",10),t._uU(2),t.qZA(),t._uU(3),t.qZA()}if(2&o){const e=c.$implicit;t.Q6J("routerLink",e.url),t.xp6(2),t.Oqu(e.icon),t.xp6(1),t.hij(" ",e.label," ")}}const w=function(){return{width:"250px"}};let E=(()=>{class o{constructor(e,r){this.router=e,this.authService=r,this.sidebarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xf1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}]}get user(){return this.authService.currentUser}onLogout(){this.authService.logout(),this.router.navigate(["/auth/login"])}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(m.F0),t.Y36(L.e))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-layout-page"]],decls:23,vars:4,consts:[["fullscreen",""],["mode","push",3,"ngStyle"],["sidenav",""],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["color","primary"],["mat-button","",3,"click"],[1,"container","p-2"],[3,"routerLink","click"],["matListItemIcon",""]],template:function(r,n){if(1&r){const u=t.EpF();t.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2)(3,"mat-toolbar")(4,"span"),t._uU(5,"Men\xfa"),t.qZA(),t._UZ(6,"span",3),t.TgZ(7,"button",4),t.NdJ("click",function(){t.CHM(u);const U=t.MAs(2);return t.KtG(U.toggle())}),t.TgZ(8,"mat-icon"),t._uU(9,"menu"),t.qZA()()(),t.TgZ(10,"mat-nav-list"),t.YNc(11,Y,4,3,"mat-list-item",5),t.qZA()(),t.TgZ(12,"mat-toolbar",6)(13,"button",4),t.NdJ("click",function(){t.CHM(u);const U=t.MAs(2);return t.KtG(U.toggle())}),t.TgZ(14,"mat-icon"),t._uU(15,"menu"),t.qZA()(),t._UZ(16,"span",3),t.TgZ(17,"span"),t._uU(18),t.qZA(),t.TgZ(19,"button",7),t.NdJ("click",function(){return n.onLogout()}),t._uU(20," Logout "),t.qZA()(),t.TgZ(21,"div",8),t._UZ(22,"router-outlet"),t.qZA()()}2&r&&(t.xp6(1),t.Q6J("ngStyle",t.DdM(3,w)),t.xp6(10),t.Q6J("ngForOf",n.sidebarItems),t.xp6(7),t.Oqu(null==n.user?null:n.user.email))},dependencies:[l.sg,l.PC,m.lC,m.rH,p.lW,p.RK,v.Hw,g.Hk,g.Tg,g.Yt,H.JX,H.TM,P.Ye],encapsulation:2})}return o})();var k=i(5177),T=i(4664),I=i(6306),q=i(2096),M=i(7398),Q=i(9413),j=i(9862);let f=(()=>{class o{constructor(e){this.http=e,this.baseUrl=Q.T.baseUrl}getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}getHeroById(e){return this.http.get(`${this.baseUrl}/heroes/${e}`).pipe((0,I.K)(r=>(0,q.of)(void 0)))}getSuggestions(e){return this.http.get(`${this.baseUrl}/heroes?q=${e}&_limit=6`)}addHero(e){return this.http.post(`${this.baseUrl}/heroes`,e)}updateHero(e){if(!e.id)throw Error("Hero id is required.");return this.http.patch(`${this.baseUrl}/heroes/${e.id}`,e)}deleteHeroById(e){return this.http.delete(`${this.baseUrl}/heroes/${e}`).pipe((0,M.U)(r=>!0),(0,I.K)(r=>(0,q.of)(!1)))}static#t=this.\u0275fac=function(r){return new(r||o)(t.LFG(j.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var s=i(5195),_=i(2557),y=i(3176),$=i(5940);let A=(()=>{class o{transform(e){return e.id||e.alt_img?e.alt_img?e.alt_img:`assets/heroes/${e.id}.jpg`:"assets/no-image.png"}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275pipe=t.Yjl({name:"heroImage",type:o,pure:!0})}return o})();function B(o,c){1&o&&(t.TgZ(0,"mat-grid-list",2)(1,"mat-grid-tile"),t._UZ(2,"mat-spinner"),t.qZA()())}function D(o,c){if(1&o&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.xp6(1),t.hij(" ",e," ")}}function X(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA()(),t._UZ(7,"img",5),t.ALo(8,"heroImage"),t.qZA(),t.TgZ(9,"mat-card",4)(10,"mat-card-header")(11,"mat-card-title"),t._uU(12,"Informaci\xf3n"),t.qZA(),t.TgZ(13,"mat-card-subtitle"),t._uU(14),t.qZA()(),t.TgZ(15,"mat-card-content")(16,"mat-list")(17,"mat-list-item"),t._uU(18),t.qZA(),t.TgZ(19,"mat-list-item"),t.YNc(20,D,2,1,"mat-chip",6),t.ALo(21,"slice"),t.qZA(),t.TgZ(22,"mat-list-item"),t._uU(23),t.qZA(),t.TgZ(24,"mat-list-item"),t._uU(25),t.qZA()(),t._UZ(26,"span",7),t.TgZ(27,"button",8),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.goBack())}),t._uU(28," Regresar "),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Oqu(e.hero.alter_ego),t.xp6(2),t.Oqu(e.hero.superhero),t.xp6(1),t.Q6J("src",t.lcZ(8,9,e.hero),t.LSH)("alt",e.hero.superhero),t.xp6(7),t.Oqu(e.hero.superhero),t.xp6(4),t.Oqu(e.hero.first_appearance),t.xp6(2),t.Q6J("ngForOf",t.Dn7(21,11,e.hero.characters.split(","),0,3)),t.xp6(3),t.Oqu(e.hero.publisher),t.xp6(2),t.Oqu(e.hero.alter_ego)}}let G=(()=>{class o{constructor(e,r,n){this.heroesService=e,this.activatedRouter=r,this.router=n}ngOnInit(){this.activatedRouter.params.pipe((0,k.g)(2e3),(0,T.w)(({id:e})=>this.heroesService.getHeroById(e))).subscribe(e=>{if(!e)return this.router.navigate(["/heroes/list"]);this.hero=e,console.log({hero:e})})}goBack(){this.router.navigateByUrl("/heroes/list")}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(f),t.Y36(m.gz),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-hero-page"]],decls:3,vars:2,consts:[["divLoading",""],["class","grid p-2",4,"ngIf","ngIfElse"],["cols","1"],[1,"grid","p-2"],[1,"col-12","sm:col-6"],["mat-card-image","",3,"src","alt"],[4,"ngFor","ngForOf"],[1,"spacer"],["mat-button","","color","warn",3,"click"]],template:function(r,n){if(1&r&&(t.YNc(0,B,3,0,"ng-template",null,0,t.W1O),t.YNc(2,X,29,15,"div",1)),2&r){const u=t.MAs(1);t.xp6(2),t.Q6J("ngIf",n.hero)("ngIfElse",u)}},dependencies:[l.sg,l.O5,p.lW,s.a8,s.dn,s.dk,s.G2,s.$j,s.n5,_.HS,y.Il,y.DX,g.i$,g.Tg,$.Ou,l.OU,A],encapsulation:2})}return o})();var C=i(6385);function K(o,c){if(1&o&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.xp6(1),t.hij(" ",e," ")}}const R=function(o){return["/heroes/edit",o]},z=function(o){return["/heroes",o]};let W=(()=>{class o{ngOnInit(){if(!this.hero)throw Error("Hero property is required")}static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["heroes-hero-card"]],inputs:{hero:"hero"},decls:30,vars:19,consts:[["mat-card-image","",3,"src","alt"],[1,"mt-2"],[4,"ngFor","ngForOf"],["mat-button","","mat-raised","","color","primary",3,"routerLink"],[1,"spacer"],["mat-button","","mat-raised","",3,"routerLink"]],template:function(r,n){1&r&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA()(),t._UZ(6,"img",0),t.ALo(7,"heroImage"),t.TgZ(8,"mat-card-content",1)(9,"h4"),t._uU(10),t.qZA(),t.TgZ(11,"p")(12,"strong"),t._uU(13,"Primera aparaci\xf3n"),t.qZA(),t._uU(14),t._UZ(15,"br"),t.TgZ(16,"mat-chip-listbox"),t.YNc(17,K,2,1,"mat-chip",2),t.ALo(18,"slice"),t.qZA()()(),t._UZ(19,"mat-divider"),t.TgZ(20,"mat-card-actions")(21,"button",3)(22,"mat-icon"),t._uU(23,"edit"),t.qZA(),t._uU(24," Editar "),t.qZA(),t._UZ(25,"span",4),t.TgZ(26,"button",5)(27,"mat-icon"),t._uU(28,"more_horiz"),t.qZA(),t._uU(29," M\xe1s "),t.qZA()()()),2&r&&(t.xp6(3),t.Oqu(n.hero.superhero),t.xp6(2),t.Oqu(n.hero.alter_ego),t.xp6(1),t.Q6J("src",t.lcZ(7,9,n.hero),t.LSH)("alt",n.hero.superhero),t.xp6(4),t.Oqu(n.hero.publisher),t.xp6(4),t.hij(" ",n.hero.first_appearance," "),t.xp6(3),t.Q6J("ngForOf",t.Dn7(18,11,n.hero.characters.split(","),0,3)),t.xp6(4),t.Q6J("routerLink",t.VKq(15,R,n.hero.id)),t.xp6(5),t.Q6J("routerLink",t.VKq(17,z,n.hero.id)))},dependencies:[l.sg,m.rH,p.lW,s.a8,s.hq,s.dn,s.dk,s.G2,s.$j,s.n5,_.HS,_.z2,v.Hw,C.d,l.OU,A],encapsulation:2})}return o})();function V(o,c){if(1&o&&(t.TgZ(0,"div",2),t._UZ(1,"heroes-hero-card",3),t.qZA()),2&o){const e=c.$implicit;t.xp6(1),t.Q6J("hero",e)}}let tt=(()=>{class o{constructor(e){this.heroesService=e,this.heroes=[]}ngOnInit(){this.heroesService.getHeroes().subscribe(e=>this.heroes=e)}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-page"]],decls:5,vars:1,consts:[[1,"grid","nm-8","pt-2"],["class","col-12 sm:col-4 md:col-3 xl:col-2",4,"ngFor","ngForOf"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero"]],template:function(r,n){1&r&&(t.TgZ(0,"h1"),t._uU(1,"Listado de H\xe9roes"),t.qZA(),t._UZ(2,"mat-divider"),t.TgZ(3,"div",0),t.YNc(4,V,2,1,"div",1),t.qZA()),2&r&&(t.xp6(4),t.Q6J("ngForOf",n.heroes))},dependencies:[l.sg,C.d,W],encapsulation:2})}return o})();var F=function(o){return o.DCComics="DC Comics",o.MarvelComics="Marvel Comics",o}(F||{}),N=i(2181),h=i(7700);let et=(()=>{class o{constructor(e,r){this.dialogRef=e,this.data=r,console.log({data:r})}onNoClick(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(h.so),t.Y36(h.WI))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-confirm-dialog"]],decls:11,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],[1,"spacer"],["mat-button","","color","primary","cdkFocusInitial","",3,"click"]],template:function(r,n){1&r&&(t.TgZ(0,"h1",0),t._uU(1,"\xbfEst\xe1 seguro?"),t.qZA(),t.TgZ(2,"div",1)(3,"p"),t._uU(4),t.qZA()(),t.TgZ(5,"div",2)(6,"button",3),t.NdJ("click",function(){return n.onNoClick()}),t._uU(7," No Thanks "),t.qZA(),t._UZ(8,"span",4),t.TgZ(9,"button",5),t.NdJ("click",function(){return n.onConfirm()}),t._uU(10," Ok "),t.qZA()()),2&r&&(t.xp6(4),t.hij("Este proceso no es reversible, est\xe1 a punto de eliminar a ",n.data.superhero,""))},dependencies:[p.lW,h.uh,h.xY,h.H8],encapsulation:2})}return o})();var ot=i(2939),S=i(3680),Z=i(9157),x=i(2032),rt=i(8525);function nt(o,c){if(1&o&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij("",e.currentHero.superhero," ")}}function it(o,c){if(1&o&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.desc," ")}}function at(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onDeleteHero())}),t._uU(1," Borrar "),t.qZA()}}let J=(()=>{class o{constructor(e,r,n,u,d){this.heroesService=e,this.activatedRoute=r,this.router=n,this.snackbar=u,this.dialog=d,this.heroForm=new a.cw({id:new a.NI(""),superhero:new a.NI("",{nonNullable:!0}),publisher:new a.NI(F.DCComics),alter_ego:new a.NI(""),first_appearance:new a.NI(""),characters:new a.NI(""),alt_img:new a.NI("")}),this.publishers=[{id:"DC Comics",desc:"DC - Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}]}ngOnInit(){this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,T.w)(({id:e})=>this.heroesService.getHeroById(e))).subscribe(e=>{if(!e)return this.router.navigateByUrl("/");this.heroForm.reset(e)})}get currentHero(){return this.heroForm.value}onSubmit(){if(!this.heroForm.invalid){if(this.currentHero.id)return void this.heroesService.updateHero(this.currentHero).subscribe(e=>{this.showSnackbar(`${e.superhero} updated!`)});this.heroesService.addHero(this.currentHero).subscribe(e=>{this.showSnackbar(`${e.superhero} created!`),this.router.navigate(["heroes/edit",e.id])})}}onDeleteHero(){if(!this.currentHero.id)throw Error("Hero id is required!.");this.dialog.open(et,{data:this.heroForm.value}).afterClosed().pipe((0,N.h)(r=>!0===r),(0,T.w)(()=>this.heroesService.deleteHeroById(this.currentHero.id)),(0,N.h)(r=>r)).subscribe(r=>{this.router.navigate(["/heroes"])})}showSnackbar(e){this.snackbar.open(e,"done",{duration:2500})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(f),t.Y36(m.gz),t.Y36(m.F0),t.Y36(ot.ux),t.Y36(h.uw))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-page"]],decls:45,vars:8,consts:[[4,"ngIf"],[1,"mb-2"],[1,"grid"],[1,"col-12","sm:col-6"],[1,"grid",3,"formGroup","ngSubmit"],["matInput","","type","text","required","","formControlName","superhero"],["matInput","","type","text","required","","formControlName","alter_ego"],[1,"col-12"],["matInput","","type","text","required","","formControlName","first_appearance"],["matInput","","type","text","required","","formControlName","characters"],["formControlName","publisher","required",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","alt_img"],[1,"flex","justify-content-between"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","","color","primary",3,"click"],["alt","imagen del h\xe9roe","mat-card-image","",3,"src"],[3,"value"],["mat-flat-button","","color","warn",3,"click"]],template:function(r,n){1&r&&(t.TgZ(0,"h1"),t._uU(1),t.YNc(2,nt,2,1,"small",0),t.qZA(),t._UZ(3,"mat-divider",1),t.TgZ(4,"div",2)(5,"div",3)(6,"mat-card")(7,"mat-card-content")(8,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(9,"mat-form-field",3)(10,"mat-label"),t._uU(11,"Super h\xe9roe"),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.TgZ(13,"mat-form-field",3)(14,"mat-label"),t._uU(15,"Alter ego"),t.qZA(),t._UZ(16,"input",6),t.qZA(),t.TgZ(17,"mat-form-field",7)(18,"mat-label"),t._uU(19,"Primera aparaci\xf3n"),t.qZA(),t._UZ(20,"input",8),t.qZA(),t.TgZ(21,"mat-form-field",7)(22,"mat-label"),t._uU(23,"Personajes"),t.qZA(),t._UZ(24,"input",9),t.qZA(),t.TgZ(25,"mat-form-field",7)(26,"mat-label"),t._uU(27,"Creador"),t.qZA(),t.TgZ(28,"mat-select",10),t.YNc(29,it,2,2,"mat-option",11),t.qZA()(),t.TgZ(30,"mat-form-field",7)(31,"mat-label"),t._uU(32,"Imagen Alternativa"),t.qZA(),t._UZ(33,"input",12),t.qZA()(),t.TgZ(34,"div",13),t.YNc(35,at,2,0,"button",14),t._UZ(36,"span"),t.TgZ(37,"button",15),t.NdJ("click",function(){return n.onSubmit()}),t.TgZ(38,"mat-icon"),t._uU(39,"save"),t.qZA(),t._uU(40," Guardar "),t.qZA()()()()(),t.TgZ(41,"div",3)(42,"mat-card"),t._UZ(43,"img",16),t.ALo(44,"heroImage"),t.qZA()()()),2&r&&(t.xp6(1),t.hij(" ",n.currentHero.id?"Editar":"Agregar"," h\xe9roe "),t.xp6(1),t.Q6J("ngIf",n.currentHero.id),t.xp6(6),t.Q6J("formGroup",n.heroForm),t.xp6(21),t.Q6J("ngForOf",n.publishers),t.xp6(6),t.Q6J("ngIf",n.currentHero.id),t.xp6(8),t.Q6J("src",t.lcZ(44,6,n.currentHero),t.LSH))},dependencies:[l.sg,l.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.sg,a.u,S.ey,p.lW,s.a8,s.dn,s.G2,Z.KE,Z.hX,v.Hw,x.Nt,C.d,rt.gD,A],encapsulation:2})}return o})();var O=i(4630);function st(o,c){if(1&o&&(t.TgZ(0,"mat-option",6),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.superhero," ")}}function ct(o,c){if(1&o&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" No se encontr\xf3 nada con el t\xe9rmino ",e.searchInput.value," ")}}const lt=[{path:"",component:E,children:[{path:"new-hero",component:J},{path:"search",component:(()=>{class o{constructor(e){this.heroesService=e,this.searchInput=new a.NI(""),this.heroes=[]}ngOnInit(){throw new Error("Method not implemented.")}searchHero(){const e=this.searchInput.value||"";this.heroesService.getSuggestions(e).subscribe(r=>{this.heroes=r}),console.log({value:e})}onSelectedOption(e){if(!e.option.value)return void(this.selectedHero=void 0);const r=e.option.value;this.searchInput.setValue(r.superhero),this.selectedHero=r}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-search-page"]],decls:14,vars:10,consts:[[1,"flex","flex-column","p-2"],["type","text","matInput","",3,"formControl","matAutocomplete","input"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["value","",4,"ngIf"],[3,"value"],["value",""]],template:function(r,n){if(1&r&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Buscardor"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Buscardo de h\xe9roes"),t.qZA(),t.TgZ(6,"input",1),t.NdJ("input",function(){return n.searchHero()}),t.qZA(),t.TgZ(7,"mat-autocomplete",2,3),t.NdJ("optionSelected",function(d){return n.onSelectedOption(d)}),t.YNc(9,st,2,2,"mat-option",4),t.YNc(10,ct,2,1,"mat-option",5),t.qZA()(),t._uU(11),t.ALo(12,"json"),t.ALo(13,"json"),t.qZA()),2&r){const u=t.MAs(8);t.xp6(6),t.Q6J("formControl",n.searchInput)("matAutocomplete",u),t.xp6(3),t.Q6J("ngForOf",n.heroes),t.xp6(1),t.Q6J("ngIf",0===n.heroes.length&&n.searchInput.value&&n.searchInput.value.length>0),t.xp6(1),t.AsE(" ",t.lcZ(12,6,n.searchInput.value)," ",t.lcZ(13,8,n.selectedHero)," ")}},dependencies:[l.sg,l.O5,a.Fj,a.JJ,a.oH,O.XC,S.ey,O.ZL,Z.KE,Z.hX,x.Nt,l.Ts],encapsulation:2})}return o})()},{path:"edit/:id",component:J},{path:"list",component:tt},{path:":id",component:G},{path:"**",redirectTo:"list"}]}];let ut=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(lt),m.Bz]})}return o})();var mt=i(6889);let pt=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.ez,a.UX,ut,mt.q]})}return o})()}}]);