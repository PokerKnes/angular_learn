import{$ as nt,A as R,B as z,C as Z,E as B,H as L,I as H,J as P,L as G,Q as T,S as U,T as tt,V as M,W as Y,X as F,Z as et,_ as it,a as E,aa as ot,b as k,ba as rt,c as V,ca as at,d as m,da as ct,e as h,f as X,g as y,h as l,i as _,j as W,k as x,m as u,n as O,o as c,p as a,q as v,r as D,s as N,t as C,u as b,v as d,w as s,x as S,y as I,z as A}from"./chunk-E47D2QZO.js";function ft(t,n){if(t&1&&(D(0),c(1,"option",14),s(2),a(),N()),t&2){let r=n.$implicit;l(),u("value",r[1]),l(),S(r[0])}}function gt(t,n){t&1&&(c(0,"div",15)(1,"span"),s(2,"\u041F\u043E \u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043D\u0438 1 \u043A\u043D\u0438\u0433\u0438. \u041F\u043E\u043C\u0435\u043D\u044F\u0439\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B"),a()())}function _t(t,n){t&1&&v(0,"div",16)}function bt(t,n){t&1&&v(0,"app-items-section")}function xt(t,n){if(t&1){let r=C();c(0,"app-paginator",17),b("loadPage",function(e){m(r);let o=d();return h(o.searchRedirect(e))}),a()}}var st=function(t){return t.Any="",t.Afrikaans="af",t.Aleut="ale",t.Arabic="ar",t.Arapaho="arp",t.Bodo="brx",t.Breton="br",t.Bulgarian="bg",t.Cal\u00F3="rmq",t.Catalan="ca",t.Cebuano="ceb",t.Chinese="zh",t.Czech="cs",t.Danish="da",t.Dutch="nl",t.English="en",t.Esperanto="eo",t.Estonian="et",t.Farsi="fa",t.Finnish="fi",t.French="fr",t.Frisian="fy",t.Friulian="fur",t["Gaelic, Scottish"]="gla",t.Galician="gl",t.Gamilaraay="kld",t.German="de",t.Greek="el",t["Greek, Ancient"]="grc",t.Hebrew="he",t.Hungarian="hu",t.Icelandicvalue="is",t.Iloko="ilo",t.Interlingua="ia",t.Inuktitut="iu",t.Irish="ga",t.Italian="it",t.Japanese="ja",t.Kashubian="csb",t.Khasi="kha",t.Korean="ko",t.Latin="la",t.Lithuanian="lt",t.Maori="mi",t["Mayan Languages"]="myn",t["Middle English"]="enm",t.Nahuatl="nah",t["Napoletano-Calabrese"]="nap",t.Navajo="nav",t["North American Indian"]="nai",t.Norwegian="no",t.Occitan="oc",t.Ojibwa="oji",t["Old English"]="ang",t.Polish="pl",t.Portuguese="pt",t.Romanian="ro",t.Russian="ru",t.Sanskrit="sa",t.Serbian="sr",t.Slovenian="sl",t.Spanish="es",t.Swedish="sv",t.Tagabawa="bgs",t.Tagalog="tl",t.Telugu="te",t.Welsh="cy",t.Yiddish="yi",t}(st||{}),J=(()=>{let n=class n{constructor(i,e,o){this.dataService=i,this.route=e,this.router=o,this.emptyHint=!1,this.listLang=Object.entries(st),this.authorFilter="",this.titleFilter="",this.subjectFilter="",this.selectFilter="",this.url="",this.query={},this.searchInProgress=!1,this.timeoutId=null,this.viewHint=!0}search(i,e){this.searchInProgress=!0;let o="";i==null&&(i="1");let p=this.selectFilter,f="";if(e==null){if(p!=""&&(o+="https://gutendex.com/books/?languages="+p),this.authorFilter.trim()!=""){let w=this.authorFilter.trim().replace(/ +/g,"%20");f+="search="+w}if(this.titleFilter.trim()!=""){let w=this.titleFilter.trim().replace(/ +/g,"%20");f!=""?f+="%20"+w:f+="search="+w}if(f!=""&&(o!=""?o+="&"+f:o+="https://gutendex.com/books/?"+f),this.subjectFilter.trim()!=""){let w=this.subjectFilter.trim().replace(/ +/g,"%20");o!=""?o+="&topic="+w:o+="https://gutendex.com/books/?topic="+w}}else e.languages&&(o+="https://gutendex.com/books/?languages="+e.languages),e.search&&(o!=""?o+="&search="+e.search:o+="https://gutendex.com/books/?search="+e.search),e.topic&&(o!=""?o+="&topic="+e.topic:o+="https://gutendex.com/books/?topic="+e.topic);o==""?o=`https://gutendex.com/books/?page=${i}`:o+=`&page=${i}`,this.dataService.getBooks(o,i);let g={authorFilter:this.authorFilter,titleFilter:this.titleFilter,subjectFilter:this.subjectFilter,selectFilter:this.selectFilter,query:this.query};this.dataService.setDataFilter(g)}searchRedirect(i="1"){let e={};this.selectFilter!=""&&(e.languages=this.selectFilter),this.subjectFilter!=""&&(e.topic=this.subjectFilter.trim());let o=this.authorFilter.trim(),p=this.titleFilter.trim(),f="";if(p!=""&&o!=""?f=p+" "+o:p!=""?f=p:f=o,f!=""&&(e.search=f),e.page=i,this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null),Object.keys(this.query).length!=0&&JSON.stringify(this.query)===JSON.stringify(e)){this.viewHint=!1,this.timeoutId=setTimeout(()=>{this.timeoutId=null,this.viewHint=!0},1e3);return}this.query=e,this.router.navigate(["/book-search"],{relativeTo:this.route,queryParams:e})}ngOnInit(){this.dataService.getDataObservable().subscribe(i=>{this.emptyHint=i.emptyHint,this.url=i.url,this.searchInProgress=i.searchInProgress}),this.authorFilter=this.dataService.authorFilter,this.titleFilter=this.dataService.titleFilter,this.subjectFilter=this.dataService.subjectFilter,this.selectFilter=this.dataService.selectFilter,this.query=this.dataService.query,this.emptyHint=this.dataService.emptyHint,this.url=this.dataService.url,this.route.queryParams.subscribe(i=>{Object.keys(i).length==0&&(i=this.query);let e=i.page;Object.keys(i).length!==0&&this.search(e,i)})}};n.\u0275fac=function(e){return new(e||n)(_(F),_(T),_(U))},n.\u0275cmp=k({type:n,selectors:[["app-filter-section"]],decls:32,vars:10,consts:[["select",""],[1,"main-container"],[1,"filter-container"],[1,"item-filter"],[3,"ngModelChange","ngModel"],[4,"ngFor","ngForOf"],["type","text",3,"ngModelChange","ngModel"],[1,"button-container"],[1,"button","button-search",3,"click"],[1,"hint-error",3,"hidden"],["class","hint-empty",4,"ngIf"],["class","loader",4,"ngIf"],[4,"ngIf"],[3,"loadPage",4,"ngIf"],[3,"value"],[1,"hint-empty"],[1,"loader"],[3,"loadPage"]],template:function(e,o){if(e&1){let p=C();c(0,"div",1)(1,"h4"),s(2,"\u0424\u0438\u043B\u044C\u0442\u0440\u044B"),a(),c(3,"div",2)(4,"div",3)(5,"span"),s(6,"\u044F\u0437\u044B\u043A"),a(),c(7,"select",4,0),z("ngModelChange",function(g){return m(p),R(o.selectFilter,g)||(o.selectFilter=g),h(g)}),x(9,ft,3,2,"ng-container",5),a()(),c(10,"div",3)(11,"span"),s(12,"\u0430\u0432\u0442\u043E\u0440"),a(),c(13,"input",6),z("ngModelChange",function(g){return m(p),R(o.authorFilter,g)||(o.authorFilter=g),h(g)}),a()(),c(14,"div",3)(15,"span"),s(16,"\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),a(),c(17,"input",6),z("ngModelChange",function(g){return m(p),R(o.titleFilter,g)||(o.titleFilter=g),h(g)}),a()(),c(18,"div",3)(19,"span"),s(20,"\u0442\u0435\u043C\u0430"),a(),c(21,"input",6),z("ngModelChange",function(g){return m(p),R(o.subjectFilter,g)||(o.subjectFilter=g),h(g)}),a()(),c(22,"div",7)(23,"button",8),b("click",function(){return m(p),h(o.searchRedirect("1"))}),s(24,"\u043F\u043E\u0438\u0441\u043A"),a()()()(),c(25,"div",9)(26,"span"),s(27,"\u0443\u043A\u0430\u0437\u0430\u043D\u044B \u0442\u0435 \u0436\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0430"),a()(),x(28,gt,3,0,"div",10)(29,_t,1,0,"div",11)(30,bt,1,0,"app-items-section",12)(31,xt,1,0,"app-paginator",13)}e&2&&(l(7),A("ngModel",o.selectFilter),l(2),u("ngForOf",o.listLang),l(4),A("ngModel",o.authorFilter),l(4),A("ngModel",o.titleFilter),l(4),A("ngModel",o.subjectFilter),l(4),u("hidden",o.viewHint),l(3),u("ngIf",o.emptyHint),l(),u("ngIf",o.searchInProgress),l(),u("ngIf",!o.searchInProgress),l(),u("ngIf",!o.searchInProgress))},styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{margin:0;background-color:#e3cdbb}.main-container[_ngcontent-%COMP%]{width:fit-content;border:1px solid black;padding:10px;border-radius:6px;background-color:#e1d9d9}.filter-container[_ngcontent-%COMP%]{display:flex}.hint-error[_ngcontent-%COMP%]{padding:10px;border-radius:6px;background-color:#e1d9d9;border:2px solid rgb(221,42,42);width:fit-content;margin:15px 0}.item-filter[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;margin-right:10px}.item-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .item-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:200px;padding:6px;border:1px solid #7e7c7c;border-radius:5px;color:#333}.item-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:17px}span[_ngcontent-%COMP%]{margin-bottom:2px}h4[_ngcontent-%COMP%]{margin:0 0 8px;text-align:center}.button-container[_ngcontent-%COMP%]{align-content:end}.hint-empty[_ngcontent-%COMP%]{padding:10px;border-radius:6px;background-color:#e1d9d9;border:2px solid rgb(221,42,42);width:fit-content;margin:15px 0}.button[_ngcontent-%COMP%]{height:31px;border-radius:5px;border:1px solid #7e7c7c;background-color:#fff;transition:background-color .7s ease}.button[_ngcontent-%COMP%]:hover{background-color:#e3cdbb;border:2px solid black;padding:0 5px}.loader[_ngcontent-%COMP%]{border:15px solid #e1d9d9;border-top:15px solid #a75c1f;border-radius:50%;width:150px;height:150px;animation:_ngcontent-%COMP%_spin 2s linear infinite;position:fixed;top:40%;left:19%;transform:translate(-50%,-50%)}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']});let t=n;return t})();function vt(t,n){if(t&1){let r=C();c(0,"div",7),b("click",function(){m(r);let e=d().$implicit,o=d(2);return h(o.redirectTo(e.id))}),v(1,"img",8),a()}if(t&2){let r=d().$implicit;l(),u("src",r.formats["image/jpeg"],y)}}function kt(t,n){if(t&1){let r=C();c(0,"div",7),b("click",function(){m(r);let e=d().$implicit,o=d(2);return h(o.redirectTo(e.id))}),v(1,"img",9),a()}}function yt(t,n){if(t&1){let r=C();c(0,"button",10),b("click",function(){m(r);let e=d().$implicit,o=d(2);return h(o.addBookYourself(e))}),s(1,"\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C"),a()}}function St(t,n){t&1&&(c(0,"div",11)(1,"span"),s(2,"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430"),a()())}function Bt(t,n){if(t&1&&(D(0),c(1,"div",2),x(2,vt,2,1,"div",3)(3,kt,2,0),c(4,"div",4)(5,"ul")(6,"li")(7,"b"),s(8,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),a(),s(9),a(),c(10,"li")(11,"b"),s(12,"\u0410\u0432\u0442\u043E\u0440\u044B"),a(),s(13),a()(),c(14,"div",5),x(15,yt,2,0,"button",6)(16,St,3,0),a()()(),N()),t&2){let r=n.$implicit;l(2),O(2,r.formats["image/jpeg"]?2:3),l(7),I(`:
`,r.title,""),l(4),I(`:
`,r.authorsFormat,""),l(2),O(15,r.add?16:15)}}function Pt(t,n){if(t&1&&(D(0),x(1,Bt,17,4,"ng-container",1),N()),t&2){let r=d();l(),u("ngForOf",r.booksList)}}var ut=(()=>{let n=class n{constructor(i,e,o,p,f){this.dataService=i,this.router=e,this.route=o,this.yourBooksService=p,this.renderer=f,this.timeoutId=null}redirectTo(i){this.router.navigate([`book-info/${i}`],{relativeTo:this.route})}addBookYourself(i){let e=i.id;this.yourBooksService.listBooks.find(p=>p.id===e)==null&&this.yourBooksService.addBook(i)}ngOnInit(){this.dataService.getDataObservable().subscribe(i=>{this.booksList=i.listBookPage}),this.booksList=this.dataService.listBookPage}};n.\u0275fac=function(e){return new(e||n)(_(F),_(U),_(T),_(Y),_(W))},n.\u0275cmp=k({type:n,selectors:[["app-items-section"]],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"main-container"],[1,"image-container"],[1,"info-container"],[1,"add-book-conteiner"],[1,"button","button-add"],[1,"image-container",3,"click"],[3,"src"],["src","../../../../assets/defaultBook.png"],[1,"button","button-add",3,"click"],[1,"already-add-hint"]],template:function(e,o){e&1&&x(0,Pt,2,1,"ng-container",0),e&2&&u("ngIf",o.booksList!=null)},dependencies:[H,P],styles:["body[_ngcontent-%COMP%]{margin:0;background-color:#e3cdbb}.main-container[_ngcontent-%COMP%]{border-radius:6px;background-color:#e1d9d9;border:1px solid black;width:fit-content;margin:15px 0;display:flex;padding:20px;width:910.578px;font-size:18px}.info-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:center;justify-content:space-between;align-items:flex-start;flex-grow:1;margin-left:20px}.info-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:0;list-style-type:none}.info-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px;white-space:pre-wrap}.button-add[_ngcontent-%COMP%]{height:auto;border-radius:5px;border:1px solid #7e7c7c;background-color:#fff;transition:background-color .7s ease;font-size:16px;padding:8px;width:89.8281px}.button-add[_ngcontent-%COMP%]:hover{background-color:#e3cdbb;border:2px solid black;font-size:16px;padding:7px}.already-add-hint[_ngcontent-%COMP%]{border-radius:6px;background-color:#e1d9d9;border:1px solid black;width:fit-content;margin:0;padding:6px;border:2px solid green;font-size:17px;background-color:#e3cdbb}.add-book-conteiner[_ngcontent-%COMP%]{align-self:end}.image-container[_ngcontent-%COMP%]{display:flex;height:fit-content}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;max-height:150px}"]});let t=n;return t})();var dt=t=>({disabled:t}),q=t=>({active:t});function Mt(t,n){t&1&&(c(0,"span"),s(1,"..."),a())}function Ft(t,n){if(t&1){let r=C();c(0,"button",7),b("click",function(){m(r);let e=d(2);return h(e.changePage(e.changeFirstButton))}),s(1),a()}if(t&2){let r=d(2);u("ngClass",B(2,q,r.changeFirstButton===r.currentPage)),l(),S(r.changeFirstButton)}}function wt(t,n){if(t&1){let r=C();c(0,"button",7),b("click",function(){m(r);let e=d(2);return h(e.changePage(e.changeSecondButton))}),s(1),a()}if(t&2){let r=d(2);u("ngClass",B(2,q,r.changeSecondButton===r.currentPage)),l(),S(r.changeSecondButton)}}function Ot(t,n){if(t&1){let r=C();c(0,"button",7),b("click",function(){m(r);let e=d(2);return h(e.changePage(e.changeThirdButton))}),s(1),a()}if(t&2){let r=d(2);u("ngClass",B(2,q,r.changeThirdButton===r.currentPage)),l(),S(r.changeThirdButton)}}function It(t,n){t&1&&(c(0,"span"),s(1,"..."),a())}function Et(t,n){if(t&1){let r=C();c(0,"div",1)(1,"button",2),b("click",function(){m(r);let e=d();return h(e.changePage(e.currentPage-1))}),s(2,"\u041D\u0430\u0437\u0430\u0434"),a(),c(3,"button",3),b("click",function(){m(r);let e=d();return h(e.changePage(e.firstButtonValue))}),s(4),a(),x(5,Mt,2,0,"span",4)(6,Ft,2,4,"button",5)(7,wt,2,4,"button",5)(8,Ot,2,4,"button",5)(9,It,2,0,"span",4),c(10,"button",6),b("click",function(){m(r);let e=d();return h(e.changePage(e.lastButtonValue))}),s(11),a(),c(12,"button",2),b("click",function(){m(r);let e=d();return h(e.changePage(e.currentPage+1))}),s(13,"\u0412\u043F\u0435\u0440\u0435\u0434"),a()()}if(t&2){let r=d();l(),u("disabled",r.currentPage===r.firstButtonValue)("ngClass",B(13,dt,r.currentPage===r.firstButtonValue)),l(2),u("ngClass",B(15,q,r.firstButtonValue===r.currentPage)),l(),S(r.firstButtonValue),l(),u("ngIf",r.leftEllipsis),l(),u("ngIf",r.lastButtonValue>2),l(),u("ngIf",r.lastButtonValue>3),l(),u("ngIf",r.lastButtonValue>4),l(),u("ngIf",r.rightEllipsis),l(),u("ngClass",B(17,q,r.lastButtonValue===r.currentPage)),l(),S(r.lastButtonValue),l(),u("disabled",r.currentPage===r.lastButtonValue)("ngClass",B(19,dt,r.currentPage===r.lastButtonValue))}}var pt=(()=>{let n=class n{constructor(i){this.dataService=i,this.loadPage=new X,this.leftEllipsis=!1,this.rightEllipsis=!1,this.firstButtonValue=1,this.changeFirstButton=2,this.changeSecondButton=3,this.changeThirdButton=4}providePage(i){this.loadPage.emit(i)}changePage(i){this.lastButtonValue!=null&&this.currentPage!=i&&(this.currentPage=i,this.calcButtonsValues(i,this.lastButtonValue),this.providePage(i+""))}calcButtonsValues(i,e){this.currentPage=i,this.lastButtonValue!=null&&(this.lastButtonValue<6?(this.changeFirstButton=2,this.changeSecondButton=3,this.changeThirdButton=4,this.leftEllipsis=!1,this.rightEllipsis=!1):i==1?(this.changeFirstButton=2,this.changeSecondButton=3,this.changeThirdButton=4,this.leftEllipsis=!1,this.rightEllipsis=!0):i==e?(this.changeFirstButton=this.lastButtonValue-3,this.changeSecondButton=this.lastButtonValue-2,this.changeThirdButton=this.lastButtonValue-1,this.leftEllipsis=!0,this.rightEllipsis=!1):(i-2<=this.firstButtonValue||i+2>=this.lastButtonValue?i-2==this.firstButtonValue||i+2==this.lastButtonValue?(this.changeFirstButton=i-1,this.changeSecondButton=i,this.changeThirdButton=i+1):i-1==this.firstButtonValue?(this.changeFirstButton=i,this.changeSecondButton=i+1,this.changeThirdButton=i+2):i+1==this.lastButtonValue&&(this.changeFirstButton=i-2,this.changeSecondButton=i-1,this.changeThirdButton=i):(this.changeFirstButton=i-1,this.changeSecondButton=i,this.changeThirdButton=i+1),this.changeFirstButton-1!=this.firstButtonValue?this.leftEllipsis=!0:this.leftEllipsis=!1,this.changeThirdButton+1!=this.lastButtonValue?this.rightEllipsis=!0:this.rightEllipsis=!1))}ngOnInit(){this.dataService.getDataObservable().subscribe(i=>{this.currentPage=i.currentPage,this.lastButtonValue=i.countPages,this.calcButtonsValues(this.currentPage,this.lastButtonValue)}),this.currentPage=this.dataService.currentPage,this.lastButtonValue=this.dataService.countPages,this.calcButtonsValues(this.currentPage,this.lastButtonValue)}};n.\u0275fac=function(e){return new(e||n)(_(F))},n.\u0275cmp=k({type:n,selectors:[["app-paginator"]],outputs:{loadPage:"loadPage"},decls:1,vars:1,consts:[["class","main-container",4,"ngIf"],[1,"main-container"],[1,"arrow-button","button",3,"click","disabled","ngClass"],[1,"number-button","button","firstPage",3,"click","ngClass"],[4,"ngIf"],["class","number-button button",3,"ngClass","click",4,"ngIf"],[1,"number-button","button","lastPage",3,"click","ngClass"],[1,"number-button","button",3,"click","ngClass"]],template:function(e,o){e&1&&x(0,Et,14,21,"div",0),e&2&&u("ngIf",o.lastButtonValue!=1&&o.lastButtonValue!=0&&o.lastButtonValue!=null)},dependencies:[L,P],styles:["body[_ngcontent-%COMP%]{margin:0;background-color:#e3cdbb}.main-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{margin:0 5px 0 0}.button[_ngcontent-%COMP%]{padding:5px 11px}.button[_ngcontent-%COMP%]:hover{background-color:#a75c1f}.arrow-button[_ngcontent-%COMP%]{border-radius:5px;border:0;background-color:#a75c1f70;transition:background-color .7s ease}.number-button[_ngcontent-%COMP%]{border-radius:5px;border:0;background-color:#e3cdbb;transition:background-color .7s ease}.active[_ngcontent-%COMP%]{background-color:#a75c1f}.disabled[_ngcontent-%COMP%]{display:none;opacity:70%;color:#000}"]});let t=n;return t})();function Vt(t,n){if(t&1&&(c(0,"div",2),v(1,"img",15),a()),t&2){let r=d();l(),u("src",r.book.formats["image/jpeg"],y)}}function Tt(t,n){t&1&&(c(0,"div",2),v(1,"img",16),a())}function jt(t,n){if(t&1){let r=C();c(0,"button",17),b("click",function(){m(r);let e=d();return h(e.addBookYourself(e.book))}),s(1,"\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C"),a()}}function Dt(t,n){t&1&&(c(0,"div",18)(1,"span"),s(2,"\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430"),a()())}function Nt(t,n){if(t&1&&(c(0,"a",13),s(1,"\u0447\u0438\u0442\u0430\u0442\u044C"),a()),t&2){let r=d();u("href",r.book.formats["application/pdf"],y)}}function At(t,n){if(t&1&&(c(0,"a",13),s(1,"\u0447\u0438\u0442\u0430\u0442\u044C"),a()),t&2){let r=d();u("href",r.book.formats["text/html"],y)}}function Rt(t,n){if(t&1&&(c(0,"a",13),s(1,"\u0447\u0438\u0442\u0430\u0442\u044C"),a()),t&2){let r=d();u("href",r.book.formats["text/html; charset=iso-8859-1"],y)}}function zt(t,n){if(t&1&&(c(0,"button",19)(1,"a",13),s(2,"\u0441\u043A\u0430\u0447\u0430\u0442\u044C"),a()()),t&2){let r=d();l(),u("href",r.book.formats["application/epub+zip"],y)}}var mt=(()=>{let n=class n{constructor(i,e,o,p){this.renderer=i,this.route=e,this.dataService=o,this.yourBooksService=p,this.query={}}ngOnInit(){this.dataService.getDataObservable().subscribe(e=>{this.query=e.query}),this.query=this.dataService.query;let i=this.dataService.listBookPage;this.route.params.subscribe(e=>{let o=i.filter(p=>p.id==e.id)[0];this.book=o})}addBookYourself(i){let e=i.id;this.yourBooksService.listBooks.find(p=>p.id===e)==null&&this.yourBooksService.addBook(i)}};n.\u0275fac=function(e){return new(e||n)(_(W),_(T),_(F),_(Y))},n.\u0275cmp=k({type:n,selectors:[["app-item"]],decls:32,vars:8,consts:[[1,"item-align-wrapper"],[1,"main-image-container"],[1,"image-container"],[1,"arrow-block"],["routerLink","/book-search",3,"queryParams"],["src","../../../../assets/back-arrow.svg"],[1,"main-container"],[1,"info-container"],[1,"button-container"],[1,"add-book-conteiner"],[1,"button","button-add"],[1,"read-container"],[1,"button","button-read"],["target","_blank",3,"href"],["class","button button-download",4,"ngIf"],[3,"src"],["src","../../../../assets/defaultBook.png"],[1,"button","button-add",3,"click"],[1,"already-add-hint"],[1,"button","button-download"]],template:function(e,o){e&1&&(c(0,"div",0)(1,"div",1),x(2,Vt,2,1,"div",2)(3,Tt,2,0),c(4,"div",3)(5,"a",4),v(6,"img",5),a()()(),c(7,"div",6)(8,"div",7)(9,"ul")(10,"li")(11,"b"),s(12,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),a(),s(13),a(),c(14,"li")(15,"b"),s(16,"\u0410\u0432\u0442\u043E\u0440\u044B"),a(),s(17),a(),c(18,"li")(19,"b"),s(20,"\u0422\u0435\u043C\u044B"),a(),s(21),a()()(),c(22,"div",8)(23,"div",9),x(24,jt,2,0,"button",10)(25,Dt,3,0),a(),c(26,"div",11)(27,"button",12),x(28,Nt,2,1,"a",13)(29,At,2,1)(30,Rt,2,1),a()(),x(31,zt,3,1,"button",14),a()()()),e&2&&(l(2),O(2,o.book.formats["image/jpeg"]?2:3),l(3),u("queryParams",o.query),l(8),I(`:
`,o.book.title,""),l(4),I(`:
`,o.book.authorsFormat,""),l(4),I(`:
`,o.book.subjectsFormat,""),l(3),O(24,o.book.add?25:24),l(4),O(28,o.book.formats["application/pdf"]?28:o.book.formats["text/html"]?29:30),l(3),u("ngIf",o.book.formats["application/epub+zip"]))},dependencies:[tt,P],styles:["body[_ngcontent-%COMP%]{margin:0;background-color:#e3cdbb}.main-container[_ngcontent-%COMP%]{border-radius:6px;background-color:#e1d9d9;border:1px solid black;margin:15px 0;display:flex;padding:20px;font-size:20px;flex-direction:column;width:fit-content}.item-align-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.main-image-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.arrow-block[_ngcontent-%COMP%]{width:fit-content;position:fixed;left:15px}.arrow-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px}.info-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:center;justify-content:space-between;align-items:flex-start;flex-grow:1}.info-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:0;list-style-type:none}.info-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px;white-space:pre-wrap}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.button-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:15px}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}.button[_ngcontent-%COMP%]{height:auto;border-radius:5px;border:1px solid #7e7c7c;background-color:#fff;transition:background-color .7s ease;font-size:16px;padding:8px;width:90px}.button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;display:block;padding:8px;cursor:context-menu}.button-read[_ngcontent-%COMP%], .button-download[_ngcontent-%COMP%]{padding:0;border-radius:5px}.button-read[_ngcontent-%COMP%]:hover, .button-download[_ngcontent-%COMP%]:hover{background-color:#e3cdbb;border:2px solid black;padding:0;border-radius:5px}.button-read[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .button-download[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{padding:7px}.button-add[_ngcontent-%COMP%]:hover{background-color:#e3cdbb;border:2px solid black;font-size:16px;padding:7px}.already-add-hint[_ngcontent-%COMP%]{border-radius:6px;background-color:#e1d9d9;border:1px solid black;width:fit-content;margin:0;padding:6px;border:2px solid green;font-size:17px;background-color:#e3cdbb}.add-book-conteiner[_ngcontent-%COMP%]{align-self:end}.image-container[_ngcontent-%COMP%]{display:flex}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;max-height:300px}"]});let t=n;return t})();var qt=[{path:"",component:J},{path:"book-info/:id",component:mt}],K=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=V({type:n}),n.\u0275inj=E({imports:[M.forChild(qt),M]});let t=n;return t})();var ht=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=V({type:n}),n.\u0275inj=E({providers:[M],imports:[K,G]});let t=n;return t})();var _e=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=V({type:n}),n.\u0275inj=E({providers:[M],imports:[K,G,ct,M,ht]});let t=n;return t})();Z(J,[H,P,rt,at,et,ot,it,nt,pt,ut],[]);export{ht as a,_e as b};