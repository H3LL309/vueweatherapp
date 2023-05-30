(function(){"use strict";var e={6496:function(e,t,n){var a=n(9242),r=n(3396),i=n.p+"img/logo.865c565e.svg";const o={key:0,class:"container"},s={key:1,class:"loading"},c=(0,r._)("img",{src:i,alt:""},null,-1),l=[c];function u(e,t,n,a,i,c){const u=(0,r.up)("Navbar"),m=(0,r.up)("Main");return e.weather?((0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(u),(0,r.Wm)(m)])):((0,r.wg)(),(0,r.iD)("div",s,l))}var m=n.p+"img/drop.c59feb1d.svg";const d={class:"nav"},p=(0,r._)("a",{href:"#",class:"logo"},[(0,r._)("img",{src:i,alt:""}),(0,r._)("span",{class:"logo__span"},"vue weather")],-1),g={class:"nav__search"};function _(e,t,n,i,o,s){return(0,r.wg)(),(0,r.iD)("nav",d,[p,(0,r._)("div",g,[(0,r._)("img",{src:m,alt:"",onClick:t[0]||(t[0]=(...e)=>s.darkMode&&s.darkMode(...e))}),(0,r.wy)((0,r._)("input",{type:"text",class:"nav__search-input",placeholder:"Выбрать город","onUpdate:modelValue":t[1]||(t[1]=e=>o.city=e),onKeydown:t[2]||(t[2]=(0,a.D2)((t=>e.getWeather(o.city)),["enter"]))},null,544),[[a.nr,o.city]])])])}var h=n(65),w={name:"WeatherNavbar",data(){return{city:""}},methods:{...(0,h.nv)(["getWeather"]),darkMode(){let e=document.body.style.getPropertyValue("--bg");"white"==e?(document.body.style.setProperty("--bg","rgb(27,27,27)"),document.body.style.setProperty("--text","white")):(document.body.style.setProperty("--bg","white"),document.body.style.setProperty("--text","black"))}}},f=n(89);const v=(0,f.Z)(w,[["render",_]]);var y=v;const b={class:"main"};function k(e,t,n,a,i,o){const s=(0,r.up)("MainContent"),c=(0,r.up)("MainWeek");return(0,r.wg)(),(0,r.iD)("div",b,[(0,r.Wm)(s),(0,r.Wm)(c)])}var M=n(7139),z=n.p+"img/bg.2bb078cc.svg",D=n.p+"img/temp.9e8ece40.svg",W=n.p+"img/pressure.02d61c63.svg",x=n.p+"img/precipitation.dfa604f4.svg",O=n.p+"img/wind.0eed094c.svg";const C={class:"main__content"},Z={class:"main__content-left"},j={class:"main__content-left-degree"},P=(0,r._)("p",{class:"main__content-left-today"},"Сегодня",-1),L={class:"main__content-left-time"},S={class:"main__content-left-city"},U={class:"main__content-left-img"},K=["src"],T={class:"main__content-right"},$=(0,r._)("img",{src:z,class:"main__content-right-bg",alt:""},null,-1),I={class:"main__content-right-item"},N=(0,r._)("div",{class:"main__content-right-item-img"},[(0,r._)("img",{src:D,alt:""})],-1),R=(0,r._)("span",{class:""},"Температура",-1),V={class:""},q={class:"main__content-right-item"},A=(0,r._)("div",{class:"main__content-right-item-img"},[(0,r._)("img",{src:W,alt:""})],-1),E=(0,r._)("span",{class:""},"Давление",-1),F={class:""},H={class:"main__content-right-item"},Y=(0,r._)("div",{class:"main__content-right-item-img"},[(0,r._)("img",{src:x,alt:""})],-1),B=(0,r._)("span",{class:""},"Осадки",-1),G={class:""},J={class:"main__content-right-item"},Q=(0,r._)("div",{class:"main__content-right-item-img"},[(0,r._)("img",{src:O,alt:""})],-1),X=(0,r._)("span",{class:""},"Ветер",-1),ee={class:""};function te(e,t,n,a,i,o){return(0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",Z,[(0,r._)("p",j,(0,M.zw)(Math.round(e.weather.current.temp))+"° ",1),P,(0,r._)("p",L,"Время: "+(0,M.zw)(o.getTime),1),(0,r._)("p",S," Город: "+(0,M.zw)(e.weather.name.toUpperCase()),1),(0,r._)("div",U,[(0,r._)("img",{src:o.getImg,alt:""},null,8,K)])]),(0,r._)("div",T,[$,(0,r._)("div",I,[N,R,(0,r._)("p",V,(0,M.zw)(Math.round(e.weather.current.temp))+"° - ощущается как "+(0,M.zw)(Math.round(e.weather.current.feels_like))+"° ",1)]),(0,r._)("div",q,[A,E,(0,r._)("p",F,(0,M.zw)(e.weather.current.pressure)+"мм ртутного столба ",1)]),(0,r._)("div",H,[Y,B,(0,r._)("p",G,(0,M.zw)(e.weather.current.clouds)+"%",1)]),(0,r._)("div",J,[Q,X,(0,r._)("p",ee,(0,M.zw)(e.weather.current.wind_speed)+" м/с ",1)])])])}const ne={"дымка":n(5977),"ясно":n(2661),"небольшая облачность":n(5977),"пасмурно":n(5977),"облачно с прояснениями":n(6273),"небольшой дождь":n(8884),"дождь":n(483),"переменная облачность":n(5977)};var ae={computed:{...(0,h.rn)(["weather"]),description(){return this.weather.current.weather[0].description},getImg(){return ne[this.description]||ne["ясно"]},getTime(){return(new Date).toLocaleString("en-US",{timeZone:this.weather.timezone,timeStyle:"short",hourCycle:"h23"})}}};const re=(0,f.Z)(ae,[["render",te]]);var ie=re;const oe={class:"main__week"};function se(e,t,n,a,i,o){const s=(0,r.up)("Day");return(0,r.wg)(),(0,r.iD)("div",oe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.weather.daily,((e,t)=>((0,r.wg)(),(0,r.j4)(s,{key:t,day:e},null,8,["day"])))),128))])}const ce={class:"main__week-item"},le={class:"main__week-item-title"},ue={class:"main__week-item-date"},me={class:"main__week-item-img"},de=["src"],pe={class:"main__week-item-temp"},ge={class:"main__week-item-feels-like"},_e={class:"main__week-item-info"};function he(e,t,n,a,i,o){return(0,r.wg)(),(0,r.iD)("div",ce,[(0,r._)("h2",le,(0,M.zw)(o.getWeekDay),1),(0,r._)("p",ue,(0,M.zw)(o.getDay)+" "+(0,M.zw)(o.getMonth),1),(0,r._)("div",me,[(0,r._)("img",{src:o.getImg,alt:""},null,8,de)]),(0,r._)("p",pe,(0,M.zw)(n.day.temp.max>=1?"+":"")+" "+(0,M.zw)(Math.round(n.day.temp.max))+"° ",1),(0,r._)("p",ge,(0,M.zw)(n.day.feels_like.day>=1?"+":"")+" "+(0,M.zw)(Math.round(n.day.feels_like.day))+"° ",1),(0,r._)("p",_e,(0,M.zw)(o.description),1)])}function we(e,t){const n=1e3*e,a=new Date(n);let r="day"==t?a.toLocaleString("ru-RU",{day:"numeric"}):"month"==t?a.toLocaleString("ru-RU",{month:"short"}):"weekday"==t?a.toLocaleString("ru-RU",{weekday:"short"}):"";return r}var fe=we,ve={props:{day:{typeof:Object}},computed:{description(){return this.day.weather[0].description},getImg(){return ne[this.description]||ne["ясно"]},getWeekDay(){return fe(this.day.dt,"weekday")},getDay(){return fe(this.day.dt,"day")},getMonth(){return fe(this.day.dt,"month")}}};const ye=(0,f.Z)(ve,[["render",he]]);var be=ye,ke={components:{Day:be},computed:{...(0,h.rn)(["weather"])}};const Me=(0,f.Z)(ke,[["render",se]]);var ze=Me,De={components:{MainContent:ie,MainWeek:ze}};const We=(0,f.Z)(De,[["render",k]]);var xe=We,Oe={name:"WeatherApp",components:{Navbar:y,Main:xe},methods:{...(0,h.nv)(["getWeather"])},computed:{...(0,h.rn)(["weather"])},created(){this.getWeather("Ташкент")}};const Ce=(0,f.Z)(Oe,[["render",u]]);var Ze=Ce,je=n(4161),Pe=(0,h.MT)({state:{apiKey:"d616eb310967fea5ef61a5fe251a8b19",weather:null},getters:{},mutations:{getWeather(e,t){e.weather=t,console.log(e.weather)}},actions:{async getWeather(e,t){try{let n=await je.Z.get(`https://api.openweathermap.org/geo/1.0/direct?q=${t}&appid=${e.state.apiKey}`);console.log(n);let{lat:a,lon:r,local_names:i}=n.data[0];if(i.ru.toLowerCase()==t.toLowerCase()){let n=await je.Z.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${a}&lon=${r}&exclude=minutely,hourly,alerts&appid=${e.state.apiKey}&units=metric&lang=ru`);console.log(n);let i={...n.data,name:t};e.commit("getWeather",i)}}catch(n){console.log(n)}}},modules:{}});(0,a.ri)(Ze).use(Pe).mount("#app")},5977:function(e,t,n){e.exports=n.p+"img/cloud.2c113939.svg"},8884:function(e,t,n){e.exports=n.p+"img/minirain.33855e11.svg"},483:function(e,t,n){e.exports=n.p+"img/rain.2b77a947.svg"},2661:function(e,t,n){e.exports=n.p+"img/sun.aac1cd71.svg"},6273:function(e,t,n){e.exports=n.p+"img/sunrain.60f59e6c.svg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,i){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/vueweatherapp/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,i,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(a);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunkvueweather"]=self["webpackChunkvueweather"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6496)}));a=n.O(a)})();
//# sourceMappingURL=app.ec504b04.js.map