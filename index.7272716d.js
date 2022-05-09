var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.flyg=void 0;var e=function(t){return t instanceof Element},n=function(t){return String(t).replace(/[^\w. ]/gi,(function(t){return"&#"+t.charCodeAt(0)+";"}))},s=function(t){var e=document.createElement("template");return t=t.trim(),e.innerHTML=t,e.content.firstChild};t.flyg=function(t){for(var l=[],a=1;a<arguments.length;a++)l[a-1]=arguments[a];for(var r="",i={},o=0;o<t.length;o++){var d=l[o],c=t[o];if(r+=c,"string"!=typeof d&&"number"!=typeof d&&"boolean"!=typeof d||(r+=n(d)),"object"==typeof d){if(!e(d))throw new Error("Value must be a string, number, boolean or a DOM element");var k="flyg-".concat(o);i[k]=d,r+='<template id="'.concat(k,'"></template>')}}var m=s(r);return Object.entries(i).forEach((function(t){var e=t[0],n=t[1];m.querySelector("template#".concat(e)).replaceWith(n)})),m};const l=e=>{const n=t.flyg`
    <div class="menu">
      ${t.flyg`
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 3458.3 1927.6" style="enable-background:new 0 0 3458.3 1927.6;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;}
	.st1{fill:#0F7ABD;}
	.st2{opacity:0.5;fill:none;stroke:#FFFFFF;stroke-width:0.3;}
	.st3{fill:#0669B1;}
	.st4{fill:currentColor;}
	.st5{fill:#095F93;}
	.st6{opacity:0.2;fill:#5B9ED6;}
	.st7{opacity:0.94;fill:url(#SVGID_1_);}
	.st8{fill:#FFFFFF;}
	.st9{fill:#7AB7E2;}
	.st10{fill:#5B9ED6;}
	.st11{fill:#69574B;}
	.st12{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
	.st13{fill:#045C83;}
	.st14{fill:#C9A593;}
	.st15{fill:#E9660B;}
	.st16{fill:#E5BCA4;}
	.st17{fill:#3C2313;}
	.st18{fill:none;stroke:#AB1917;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st19{fill:#AB1917;}
	.st20{fill:#4CB0E4;}
	.st21{fill:#1990CF;stroke:#1990CF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st22{fill:none;stroke:#1990CF;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st23{fill:#1990CF;}
	.st24{opacity:0.94;fill:url(#SVGID_00000127026949828594225300000003809793278205515160_);}
	.st25{clip-path:url(#SVGID_00000152974239647017359870000011230579213355431584_);}
	.st26{fill:#4BAFE3;}
	.st27{fill:#1D8ECE;stroke:#1D8ECE;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st28{fill:none;stroke:#1D8ECE;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st29{fill:#1D8ECE;}
	.st30{fill:none;stroke:#095F93;stroke-width:2;stroke-miterlimit:10;}
	.st31{clip-path:url(#SVGID_00000112616992815488284330000013662412324989399185_);}
	.st32{clip-path:url(#SVGID_00000071551611233967640450000003831242109549366183_);}
	.st33{fill:#0B72B2;}
	.st34{fill:#0B79BC;}
	.st35{fill:#5FB353;}
	.st36{opacity:0.94;fill:url(#SVGID_00000003811376508413735790000001373182448218559367_);}
	.st37{fill:#025D86;}
	.st38{fill:#0569B0;}
	.st39{fill:#DEBAA1;}
	.st40{fill:#F4CBAB;}
	.st41{fill:#D4976E;}
	.st42{fill:#096199;}
	.st43{fill:#D09E61;}
	.st44{fill:#AF793B;}
	.st45{fill:#EAC295;}
	.st46{fill:#F4A304;}
	.st47{opacity:0.94;fill:url(#SVGID_00000006689151544988010030000011773595315046752948_);}
	.st48{opacity:0.94;fill:url(#SVGID_00000105404141665433543960000017976663952827170975_);}
	.st49{fill:none;stroke:#095F93;stroke-width:1.5;stroke-miterlimit:10;}
	.st50{fill:none;stroke:#095F93;stroke-miterlimit:10;}
	.st51{fill:#086096;}
	.st52{fill:#5BA0D7;}
	.st53{font-family:'MyriadPro-Regular';}
	.st54{font-size:63.8477px;}
	.st55{fill:none;stroke:#1D1E1C;stroke-width:0.5;stroke-miterlimit:10;}
	.st56{fill:#53302C;}
	.st57{fill:#4DB2E6;}
	.st58{fill:#90573F;}
	.st59{fill:#AB1917;stroke:#0669B1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st60{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st61{fill:#F4CBAC;}
	.st62{fill:#0469B1;}
	.st63{fill:#DFBAA2;}
	.st64{fill:#D5986F;}
	.st65{fill:#D1A794;}
	.st66{font-size:68.1271px;}
	.st67{fill:#D7E0EE;}
	.st68{opacity:0.33;fill:#E2EBF8;stroke:#B5BBC5;stroke-width:5;stroke-miterlimit:10;}
	.st69{fill:#CECC90;}
	.st70{fill:#E7E890;}
	.st71{fill:#479535;}
	.st72{fill:#E7E7E8;}
	.st73{opacity:0.49;}
	.st74{fill:#C9CED3;}
	.st75{clip-path:url(#SVGID_00000041294033666193413220000007147502535199446448_);}
	.st76{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}
	.st77{clip-path:url(#SVGID_00000151544850561289721370000004252831626098950554_);}
	.st78{clip-path:url(#SVGID_00000089546156221848487740000012561565881444117947_);}
	.st79{font-size:64.7087px;}
	.st80{font-size:64.1014px;}
	.st81{font-family:'ComicSansMS';}
	.st82{font-size:2.868px;}
	.st83{font-size:64.8966px;}
	.st84{font-size:4.374px;}
	.st85{fill:#FFFFFF;stroke:#FFFFFF;stroke-miterlimit:10;}
	.st86{fill:#B06A26;}
	.st87{fill:#B9793D;}
	.st88{fill:#9F561A;}
	.st89{fill:#1892D1;}
	.st90{font-size:5.115px;}
	.st91{fill:#1D1D1B;}
	.st92{fill:none;stroke:#0669B1;stroke-width:10;stroke-miterlimit:10;}
	.st93{fill:none;stroke:#0669B1;stroke-width:10;stroke-miterlimit:10;stroke-dasharray:20.4087,20.4087;}
	.st94{fill:none;stroke:#0669B1;stroke-width:5;stroke-miterlimit:10;}
	.st95{fill:none;stroke:#0669B1;stroke-width:5;stroke-miterlimit:10;stroke-dasharray:10.0885,10.0885;}
	.st96{fill:none;stroke:#0669B1;stroke-width:2.5;stroke-miterlimit:10;}
	.st97{fill:none;stroke:#086096;stroke-width:2;stroke-miterlimit:10;}
	.st98{font-size:58.366px;}
	.st99{fill:none;stroke:#0669B1;stroke-width:10;stroke-miterlimit:10;stroke-dasharray:20.2919,20.2919;}
	.st100{fill:none;stroke:#0669B1;stroke-width:5;stroke-miterlimit:10;stroke-dasharray:9.8933,9.8933;}
	.st101{fill:none;stroke:#0669B1;stroke-width:2;stroke-miterlimit:10;}
</style>
	<g class="menu-item" data-value="5">
		<circle class="st4" cx="2247.4" cy="917.6" r="72.2"/>
		<text transform="matrix(1 0 0 1 2231.8193 934.939)" class="st8 st53 st54">5</text>
	</g>
	
	<g class="menu-item" data-value="6">
		<circle class="st4" cx="2806.2" cy="1175.3" r="77"/>
		<text transform="matrix(1 0 0 1 2789.5952 1193.8083)" class="st8 st53 st66">6</text>
	</g>
	<g class="menu-item" data-value="1">
		<circle class="st4" cx="543.9" cy="1402.2" r="73.1"/>
		<text transform="matrix(1 0 0 1 528.0991 1419.772)" class="st8 st53 st79">1</text>
	</g>
	<g class="menu-item" data-value="2">
		<circle class="st4" cx="470.7" cy="1039.9" r="72.4"/>
		<text transform="matrix(1 0 0 1 455.1215 1057.3354)" class="st8 st53 st80">2</text>
	</g>
    <g class="menu-item" data-value="3">
        <circle class="st4" cx="2053.2" cy="368.8" r="73.3"/>
        <text transform="matrix(1 0 0 1 2037.3438 386.4346)" class="st8 st53 st83">3</text>
    </g>
	<g class="menu-item" data-value="4">
		<circle class="st4" cx="2524.9" cy="318.2" r="66"/>
		<text transform="matrix(1 0 0 1 2510.7024 334.1143)" class="st8 st53 st98">4</text>
	</g>
</svg>
    `}
      <video autoplay muted loop>
        <source src="${e}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  `;n.querySelectorAll(".menu-item").forEach((t=>{t.addEventListener("click",(t=>{n.classList.remove("menu--opened"),n.classList.add("menu--closed"),n.dispatchEvent(new CustomEvent("navigation",{detail:Number(t.target.closest(".menu-item").getAttribute("data-value"))}))}))}));const s={open:()=>{n.classList.add("menu--opened"),n.classList.remove("menu--closed")}};return{component:n,actions:s}},a=()=>t.flyg`
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 473.654 473.654" style="enable-background:new 0 0 473.654 473.654;" xml:space="preserve">
  <circle style="fill:currentColor;" cx="236.827" cy="236.827" r="236.827"/>
  <path style="fill:#FFFFFF;" d="M358.075,216.091c-27.011-27.011-54.018-54.022-81.029-81.033
  c-25.56-25.564-65.08,14.259-39.456,39.883c11.009,11.009,22.019,22.019,33.028,33.032c-43.353,0-86.706,0-130.055,0
  c-36.225,0-36.543,56.109-0.404,56.109c43.491,0,86.982,0,130.47,0c-11.084,11.084-22.168,22.168-33.252,33.252
  c-25.564,25.56,14.259,65.08,39.883,39.456c27.011-27.007,54.018-54.014,81.029-81.025
  C369.133,244.916,368.838,226.85,358.075,216.091z"/>
</svg>
`,r=e=>{const n=t.flyg`
    <div class="page">
      <div class="page__content">
          <div class="page__header">
            <div class="page__title"></div>
            ${(e=>{const n=t.flyg`
    <div class="${e.class}">
        <input type="radio" id="sv" name="language" value="sv" />
        <label for="sv">Svenska</label>
        <input type="radio" id="en" name="language" value="en" />
        <label for="en">English</label>
    </div>
  `,s=n.querySelectorAll("[name='language']");return s.forEach((t=>{t.checked=t.value===e.language})),s.forEach((t=>{t.addEventListener("change",(t=>{n.dispatchEvent(new CustomEvent("language",{detail:t.target.value,bubbles:!0}))}))})),{component:n}})({language:e.language,class:"page__language-selector"}).component}
          </div>
          <div class="page__body"></div>
          <div class="page__footer">
              <button class="page__nav-button page__nav-button--previous">${a()}</button>
              <button class="page__back-button"></button>
              <button class="page__nav-button page__nav-button--next">${a()}</button>
          </div>
      </div>
    </div>
  `,s=n.querySelector(".page__title"),l=n.querySelector(".page__body"),r=n.querySelector(".page__back-button"),i=n.querySelector(".page__nav-button--next"),o=n.querySelector(".page__nav-button--previous");i.addEventListener("click",(()=>{n.dispatchEvent(new CustomEvent("next"))})),o.addEventListener("click",(()=>{n.dispatchEvent(new CustomEvent("previous"))})),r.addEventListener("click",(()=>{n.classList.remove("page--opened"),n.dispatchEvent(new CustomEvent("close"))}));const d={open:()=>{n.classList.add("page--opened")},setContent:({title:t,html:e,back:a,image:d},c=!0,k=!0)=>{s.innerHTML=t,l.innerHTML=e,r.innerHTML=a,n.style.backgroundImage=`url(${d})`,c?i.classList.remove("page__nav-button--disabled"):i.classList.add("page__nav-button--disabled"),k?o.classList.remove("page__nav-button--disabled"):o.classList.add("page__nav-button--disabled")}};return{component:n,actions:d}};var i={1:{sv:{title:"1.",image:"1.svg",html:'\n        <div>\n          <blockquote class="quote">Klimatpåverkan minskar med mer än 90% genom att vi undviker transporten till och från Kina.<blockquote>\n        </div>\n        <div>\n          <p>Torsk är en bottenlevande rovfisk som kan bli upp mot 2 meter lång och kan leva i 25 år. Världsrekordet på största torsk som fångats med fiskespö är 47 kg!</p>\n          <p>Torskbeståndet längst den Norska kusten kan delas in i två huvudtyper, kusttorsk och Skrei. Kusttorsken spenderar oftast merparten av sitt liv nära kusten på grunt vatten. Skrei däremot är en arktisk fisk som varje vinter ger sig ut på en lång vandring från Barents hav till den norska kusten för att fortplanta sig.</p> \n          <p>Båten som fångat  vår torsk heter Nordhavet och är en kustnära mindre fiskebåt som är verksam långt upp i Nordnorge. Nordhavet använder sig av skonsamma fiskemetoder med ett redskap som heter snurrevad. Fisken dör inte i näten utan tas upp levande. Snurrevad förstör inte havsbotten till skillnad från de stora bottentrålarna som står för det mesta av industrifisket.</p>\n        </div>\n      ',back:"Tillbaka till kartan"},en:{title:"1.",image:"1.svg",html:"\n        <div>\n          <p>Content</p>\n        </div>\n      ",back:"Back"}},2:{sv:{title:"2.",image:"2.svg",html:"\n      <div>\n        <p>När fisken tagits in till land storlekssorteras den. Den stora torsken går direkt till slakt. Torsken som är för liten och som annars skulle gå till fiskpinnar eller djurfoder skickas istället nästgårds till akvakulturföretaget Tysfjord Marine Farm. Där får den fortsätta sitt liv i stora öppna kassar ute i den djupa fjorden tills det är dags att hamna på din tallrik. Kassen är djup så torsken har gått om plats att röra sig. Till foder får de fiskrens ifrån sill och Lodda. Genom att odla upp vildfångad torsk från liten till stor så får man ett mycket bättre utnyttjande av protein.</p>\n      </div>\n      ",back:"Tillbaka till kartan"},en:{title:"2.",image:"2.svg",html:"\n        <div>\n          <p>Content</p>\n        </div>\n      ",back:"Back"}},3:{sv:{title:"3.",image:"3.svg",html:"\n        <div>\n          <p>När torsken vuxit från 1 kilo till cirka 2-3 kilo är det dags att slaktas. Torsken slaktas för hand på plats ute vid kassen. På så sätt stressar man inte djuren i onödan. Direkt efter slakten går torsken till produktionsanläggningen Taste of North där den fileas, fryses och förpackas för hand.</p>\n          <p>98 % torsken tas tillvara. Fiskbenen torkas och mals ner till proteinpulver som kan användas i länder med hungersnöd. Lever och rom säljs som egna produkter eller går till produktion av näringsrik fiskolja.</p>\n        </div>\n        ",back:"Tillbaka till kartan"},en:{title:"3.",image:"3.svg",html:"\n        <div>\n          <p>Content</p>\n        </div>\n      ",back:"Back"}},4:{sv:{title:"4.",image:"4.svg",html:"\n        <div>\n          <p>Istället för att ta hela omvägen via Kina så sker all produktion av vår torsk i Nordnorge. Efter den har paketerats så skickas den med tåg till Sverige. Genom att undvika vägen via Kina så blir det en minskning av klimatpåverkan från transporten med över 90 %. Med på leveransen sitter en sensor som mäter vilken väg den paketerade torsken åker samt vilken frystemperatur den håller.</p>\n        </div>\n      ",back:"Tillbaka till kartan"},en:{title:"4.",image:"4.svg",html:"\n        <div>\n          <p>Content</p>\n        </div>\n      ",back:"Back"}},5:{sv:{title:"5.",image:"5.svg",html:"\n        <div>\n          <p>Under vintern 2021 och våren 2022 så har cirka 13 ton torsk levererats från Nordnorge in till stadens skolkök och vårdboenden. All information ligger lagrad i vår helt egna blockkedja.</p>\n          <p>Blockkedjeteknologi bygger på en decentraliserad digital databas. Det finns alltså inte ett centralt ställe där data lagras utan en massa kopior. Datan hämtas in med automatik ifrån producentens egna system eller från sensorer. Alla händelser lagras i sammanlänkande krypterade block. Om någon information i kedjan ändras eller tas bort måste det verifieras av alla parter i kedjan. På så sätt blir bedrägeri i stort sätt omöjligt.</p>\n          <p>Man kan enkelt säga att alla som är inblandade i att leverera torsken till Helsingborgs stad krokar arm och delar information. All information om vår ”Helsingborgs-torsk” samlas digitalt i en helt egen blockkedja. Genom projektet har vi fått koll på en mängd data som när fisken blev fångad, hur den blev fångad, vad den har ätit, hur länge den transporterades och en massa annan spännande fakta.</p>\n          <p>Vi kan nu vara helt säkra på att vi kan äta torsk med gott samvete!</p>\n        </div>\n      ",back:"Tillbaka till kartan"},en:{title:"5.",image:"5.svg",html:"\n        <div>\n          <p>Content</p>\n        </div>\n      ",back:"Back"}},6:{sv:{title:"6.",image:"6.svg",html:'\n      <video controls>\n        <source src="torsk-svenska.mp4" type="video/mp4">\n        Your browser does not support the video tag.\n      </video>\n      ',back:"Tillbaka till kartan"},en:{title:"6.",image:"6.svg",html:'\n      <video controls>\n        <source src="torsk-engelska.mp4" type="video/mp4">\n        Your browser does not support the video tag.\n      </video>\n      ',back:"Back"}}};const o=({map:e,torskSvenska:n,torskEngelska:s})=>{const[a,o]=n,[d,c]=s;i[6].sv.html=i[6].sv.html.replace(a,o),i[6].en.html=i[6].en.html.replace(d,c);const k={page:void 0,language:"sv"},m=l(e[1]),p=r(k),v=(()=>{const e=t.flyg`<button class="fullscreen-button">Fullscreen</button>`;return document.addEventListener("fullscreenchange",(()=>{document.fullscreenElement?e.classList.add("d-none"):e.classList.remove("d-none")})),e.addEventListener("click",(()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()})),{component:e}})(),g=()=>k.page>1,u=()=>k.page<Object.keys(i).length;return m.component.addEventListener("navigation",(t=>{k.page=t.detail,p.actions.open(),p.actions.setContent(i[k.page][k.language],u(),g())})),p.component.addEventListener("language",(t=>{k.language=t.detail,p.actions.setContent(i[k.page][k.language],u(),g())})),p.component.addEventListener("close",(()=>{m.actions.open(),p.actions.setContent({title:"",back:"",html:"",image:""})})),p.component.addEventListener("next",(()=>{u()&&(k.page++,p.actions.setContent(i[k.page][k.language],u(),g()))})),p.component.addEventListener("previous",(()=>{g()&&(k.page--,p.actions.setContent(i[k.page][k.language],u(),g()))})),t.flyg`
    <div class="wrapper">
      ${v.component} ${p.component} ${m.component}
    </div>
  `},d={component:t.flyg`<div class="loader">Loading content...</div>`};document.body.appendChild(d.component),Promise.all([...["map.mp4","torsk-svenska.mp4","torsk-engelska.mp4"].map((t=>(t=>fetch(t).then((t=>t.blob())).then((e=>[t,URL.createObjectURL(e)])))(t))),...["1.svg","2.svg","3.svg","4.svg","5.svg","6.svg"].map((t=>(t=>new Promise((e=>{const n=new Image;n.onload=e,n.onerror=e,n.src=t})))(t)))]).then((t=>{document.body.removeChild(d.component),document.body.appendChild(o({map:t[0],torskSvenska:t[1],torskEngelska:t[2]}))}));
//# sourceMappingURL=index.7272716d.js.map
