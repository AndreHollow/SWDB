(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/if_darth-maul_1626614.bffbf18e.svg"},function(e,t,a){e.exports=a.p+"static/media/if_darth-vader_1626615.b3bb8791.svg"},function(e,t,a){e.exports=a.p+"static/media/if_lightsaber-luke-anh_1626625.2af4d0f6.svg"},function(e,t,a){e.exports=a.p+"static/media/if_lightsaber-luke-rotj_1626626.6ac25e93.svg"},function(e,t,a){e.exports=a.p+"static/media/if_yoda_1626636.d1a54477.svg"},function(e,t,a){e.exports=a.p+"static/media/yoda_1.31c37d3d.svg"},function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/if_chewbacca_1626612.b6b4459c.svg"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(7),c=a.n(s),r=(a(19),a(1)),l=a(2),i=a(4),u=a(3),m=a(5);a(21),a(23);var h=function(e){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"link"}))},d=(a(24),a(8)),g=a.n(d);var p=function(e){return o.a.createElement("header",{className:"logo-header"},o.a.createElement("a",{href:"https://andrehollow.github.io/swbd/"},o.a.createElement("img",{src:g.a,className:"logo-logo",alt:"logo"})),o.a.createElement("div",{className:"logo-info"},o.a.createElement("p",{className:"logo-name"},"SWDB by"),o.a.createElement("a",{className:"logo-link",href:"https://github.com/AndreHollow",target:"_blank",rel:"noopener noreferrer"},"Andre Hollow")))},f=(a(26),a(9)),v=a.n(f),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={isChosen:!1,inputValue:"",e:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateInputValue",value:function(e){e.preventDefault(),this.setState({e:e,inputValue:e.target.value})}},{key:"handleCategoryChoosing",value:function(){this.setState({isChosen:!0});var e=document.getElementById("input");e.classList.contains("close")&&(e.classList.toggle("close"),e.setAttribute("placeholder","Search in category"),e.classList.toggle("open"))}},{key:"handleIconClick",value:function(){var e=document.getElementById("input");this.state.isChosen>0?(e.setAttribute("placeholder","Search in category"),e.classList.toggle("open")):(e.setAttribute("placeholder","Choose category"),e.classList.toggle("close"))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Navbar"},o.a.createElement("ul",{className:"Nav-menu"},this.props.categoryList.map(function(t,a){return o.a.createElement("li",{key:t,id:a,className:"Nav-menu-item",onMouseUp:function(){e.handleCategoryChoosing()},onClick:function(){return e.props.onClick(t,a)}},t)})),o.a.createElement("div",{className:"form-container"},o.a.createElement("form",{className:"search",onSubmit:function(){return e.props.onSubmit(e.state.e,e.state.inputValue)}},o.a.createElement("img",{src:v.a,alt:"icon",className:"search-icon",onClick:function(){return e.handleIconClick()}}),o.a.createElement("input",{id:"input",type:"text",className:"search-field",onChange:function(t){return e.updateInputValue(t)}}),o.a.createElement("span",{className:"search-button"}))))}}]),t}(n.Component);a(28);var E=function(e){return o.a.createElement("div",{id:"modal-wrapper",className:"modal-wrapper"},o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-item-content"},o.a.createElement("a",{className:"btn-close trigger",onClick:function(t){return e.onClick(t)}}),o.a.createElement("ul",{className:"info-list"},e.chosenItem.map(function(t,a){return t.includes("https://")||"object"===typeof t?void 0:e.itemProperties[a].includes("created")||"edited"===e.itemProperties[a]?void 0:o.a.createElement("li",{className:"item-field",key:e.itemProperties[a]+t},e.itemProperties[a]+": ",o.a.createElement("span",{className:"item-data"},t))})))))},b=(a(30),a(10)),C=a.n(b),k=a(11),N=a.n(k),w=a(12),j=a.n(w),L=a(13),O=a.n(L),S=new Headers;S.append("Accept","application/json");var I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).defineReq=function(e){var t;return console.log(e),"string"===typeof e?t=new Request(e,{method:"GET",headers:S,mode:"cors"}):(t=new Request("https://swapi.co/api/".concat(e.categoryChosen.toLowerCase(),"/"),{method:"GET",headers:S,mode:"cors"}),""===e.categoryChosen||void 0===e.categoryChosen?"https://jsonplaceholder.typicode.com/users":t)},a.fetchData=function(e){null!==e&&fetch(a.defineReq(e)).then(function(e){if(e.ok)return e.json();throw new Error("Owi6o4ka")}).then(function(e){console.log(e),a.setState({isLoaded:!0,category:{count:e.count,next:e.next,previous:e.previous,data:e.results}})})},a.state={isLoaded:!1,category:{count:0,next:"",previous:"",data:[]},chosenItem:[],itemProperties:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(console.log(e.searchValue),e.searchValue&&void 0!==e.searchValue&&""!==e.searchValue){var t="https://swapi.co/api/".concat(e.categoryChosen.toLowerCase(),"/?search=").concat(e.searchValue);this.fetchData(t)}else this.fetchData(e)}},{key:"handleOpenClick",value:function(e){var t=Object.values(e),a=Object.keys(e),n=document.getElementById("toggle"),o=document.getElementById("modal-wrapper");this.setState({chosenItem:t,itemProperties:a}),o.classList.toggle("open"),n.classList.toggle("blur")}},{key:"handleCloseClick",value:function(e){e.preventDefault();var t=document.getElementById("toggle");document.getElementById("modal-wrapper").classList.toggle("open"),t.classList.toggle("blur")}},{key:"render",value:function(){var e=this;return""===this.props.categoryChosen||void 0===this.props.categoryChosen?o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content-main"},o.a.createElement("img",{src:O.a,alt:"Yoda icon",className:"main-yoda-logo"}),"Greetings, young Padawan. ",o.a.createElement("br",null),"Welcome to the star wars universe. ",o.a.createElement("br",null),"My name is Yoda the Grand Master of the Jedi Order. ",o.a.createElement("br",null),"Here you can get more information about: people, planets, species, starships, vehicles.",o.a.createElement("br",null),"Just choose what interests you. ",o.a.createElement("br",null),"You can also use search that will satisfy your interest in a certain category, ",o.a.createElement("br",null),"you can find search bar under the mask of Darth Vader. ",o.a.createElement("br",null),"Good luck to you, traveler, and may the force be with you. ",o.a.createElement("br",null))):this.state.isLoaded?o.a.createElement("div",{className:"content"},o.a.createElement("div",{id:"toggle",className:"content-list"},o.a.createElement("div",{className:"left-arrow",onClick:function(){e.fetchData(e.state.category.previous)}},o.a.createElement("img",{id:"bluesaber",src:C.a,alt:"prevPage"})),o.a.createElement("ul",{className:"items-list"},this.state.category.data.map(function(t){return o.a.createElement("li",{className:"trigger",onClick:function(){return e.handleOpenClick(t)},key:t.name},t.name)})),o.a.createElement("div",{className:"right-arrow",onClick:function(){e.fetchData(e.state.category.next)}},o.a.createElement("img",{id:"greensaber",src:N.a,alt:"nextPage"}))),o.a.createElement(E,{chosenItem:this.state.chosenItem,itemProperties:this.state.itemProperties,onClick:this.handleCloseClick})):o.a.createElement("div",{className:"content content-loading"},o.a.createElement("img",{src:j.a,alt:"loading icon",className:"loading-icon"}))}}]),t}(n.Component),V=(a(32),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e,t){a.setState({categoryChosen:e});var n=document.getElementsByClassName("chosen"),o=document.getElementById(t);0===n.length?o.classList.toggle("chosen"):(document.getElementById(n[0].id).classList.toggle("chosen"),o.classList.toggle("chosen"))},a.handleSubmit=function(e,t){e.preventDefault(),a.setState({searchValue:t})},a.handleSearchBar=function(e){e||a.setState({searchValue:""})},a.state={categoryChosen:"",categoryList:["People","Planets","Species","Starships","Vehicles"],searchValue:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(y,{className:"navBar",categoryList:this.state.categoryList,categoryChosen:this.state.categoryChosen,onClick:this.handleClick,onSubmit:this.handleSubmit}),o.a.createElement(I,{className:"content",categoryChosen:this.state.categoryChosen,searchValue:this.state.searchValue,handleSearchBar:this.handleSearchBar}),o.a.createElement(h,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.a89cb5a3.chunk.js.map