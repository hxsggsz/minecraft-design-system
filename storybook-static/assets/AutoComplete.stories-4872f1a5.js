import{j as l}from"./jsx-runtime-6eef64cc.js";import{r as v,R as T}from"./index-c013ead5.js";import{I as _}from"./Input-e7140861.js";import{A as U}from"./Arrow-20336a8f.js";import{C as Q}from"./Close-358c5ab1.js";import{B as D}from"./Button-bff159b2.js";import"./_commonjsHelpers-725317a4.js";import"./index-e52f6e9a.js";const O="_wrapper_rgjhg_1",P="_list_rgjhg_4",z="_item_rgjhg_17",G="_button_rgjhg_37",w={wrapper:O,list:P,item:z,button:G};function J(t){const n=v.createRef();return v.useEffect(()=>{function a(e){n.current&&!n.current.contains(e.target)&&t(e)}return document.addEventListener("mousedown",a),()=>{window.removeEventListener("mousedown",a)}},[t,n]),n}let V=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((n,a)=>(a&=63,a<36?n+=a.toString(36):a<62?n+=(a-26).toString(36).toUpperCase():a>62?n+="-":n+="_",n),"");var K=function(n){var a=v.useState((n?n+"-":"")+V(5)),e=a[0];return e},j=function(n,a,e){return Math.max(Math.min(n,Math.max(a,e)),Math.min(a,e))},W=function(){var n=K(),a=T.useCallback(function(e){var b=[];if(e!=null&&e.parentElement){var r=document.createElement("span");if(r.id=n,r.innerText="Use the up and down arrow keys to navigate the list and use the left and right arrow keys to navigate inside of the item",r.style.border="none",r.style.clip="rect(0 0 0 0)",r.style.height="1px",r.style.margin="-1px",r.style.overflow="hidden",r.style.padding="0",r.style.position="absolute",r.style.top="20px",r.style.width="1px",r.setAttribute("data-useRovingTabIndex","true"),e.parentElement instanceof HTMLTableElement){var y=e.parentElement.querySelector("caption");if(y){var A=y.querySelector("[data-useRovingTabIndex]");A?r.id=A.id:y.append(r)}else{var m=document.createElement("caption");m.append(r),e.parentElement.prepend(m)}}else e.parentElement.insertBefore(r,e);e.setAttribute("aria-describedby",(e.getAttribute("aria-describedby")?e.getAttribute("aria-describedby")+" ":"")+r.id),b.push(function(){var d;e.setAttribute("aria-describedby",((d=e.getAttribute("aria-describedby"))==null?void 0:d.replace(r.id,""))+" "+r.id),r.remove()})}if(e){var p=function(f){var i=Array.from(e.childNodes).find(function(x){return x.querySelector('[tabindex]:not([tabindex="-1"])')}),h=function(s){if(f.preventDefault(),i&&s){var c=i.querySelector('[tabindex="0"]');c&&(c.tabIndex=-1),s.tabIndex=0,s.focus()}},o=function(){var s=i==null?void 0:i.querySelectorAll("[tabindex]");return Array.from(s??[]).findIndex(function(c){return c.tabIndex===0})},u=function(s){var c,S,g=s==null?void 0:s.querySelectorAll("[tabindex]"),k=j((c=o())!=null?c:0,0,(S=g==null?void 0:g.length)!=null?S:1),H=Array.from(g??[])[k];h(H)},C=function(s){var c,S=Array.from((c=i==null?void 0:i.querySelectorAll("[tabindex]"))!=null?c:[]),g=j(o()+s,0,S.length-1),k=S[g];h(k)};switch(f.key){case"ArrowDown":{u(i==null?void 0:i.nextSibling);break}case"ArrowUp":{u(i==null?void 0:i.previousSibling);break}case"ArrowRight":{C(1);break}case"ArrowLeft":{C(-1);break}}},I=function(f){var i=f.target;if(i instanceof HTMLElement){var h=e.querySelectorAll('[tabindex]:not([tabindex="-1"])');h.forEach(function(o){return o.tabIndex=-1}),i.tabIndex=0}};e.addEventListener("keydown",p),e.addEventListener("focusin",I),b.push(function(){e.removeEventListener("keydown",p),e.removeEventListener("focusin",I)})}return function(){return b.forEach(function(d){return d()})}},[n]);return a};const M=t=>{const[n,a]=v.useState(""),[e,b]=v.useState(!1),r=W(),y=J(()=>m(!1));function A(o){a(o.currentTarget.value)}function m(o){b(u=>o??!u)}function p(){a("")}function I(o){switch(o.key){case"Escape":if(!e)return p();m();break;case"Enter":e&&m();break}}const d=v.useMemo(()=>{const o=n.toLowerCase();return t.list.filter(u=>u.item.toLowerCase().includes(o))},[t.list,n]),f=()=>l.jsx("li",{"data-open":e,className:w.item,children:t.emptyMessage??`no search for ${n}`}),i=()=>d.map((o,u)=>l.jsx("li",{role:"option","data-open":e,className:w.item,"aria-selected":n==o.item,children:l.jsx("button",{tabIndex:u===0?0:-1,"aria-expanded":e,className:w.button,onClick:()=>{m(),p(),a(o.item),o.onSelect(o.item)},children:o.item})},o.id)),h=()=>l.jsx("ul",{ref:r,role:"listbox",id:"cb1-listbox","data-open":e,"aria-hidden":!e,className:w.list,children:d.length>0?i():f()});return l.jsxs("div",{ref:y,onKeyDown:I,className:w.wrapper,children:[l.jsxs(_.Root,{children:[l.jsx(_.Actions,{children:l.jsx(U,{variant:!0,outline:!0,orientation:`${e?"down":"up"}`})}),l.jsx(_.Input,{id:"cb1-input",fontSize:2.4,value:n,role:"combobox",spellCheck:"false","aria-expanded":e,"aria-autocomplete":"list",onChange:A,"aria-controls":"cb1-listbox","aria-label":"input for search",onClick:()=>m(),placeholder:t.placeholder}),l.jsx(_.Actions,{children:e&&l.jsx(D,{id:"cb1-button",variant:"none",onClick:p,"aria-expanded":e,"aria-controls":"cb1-listbox","aria-label":"indicator of autocomplete",children:l.jsx(Q,{variant:!0})})})]}),e&&h()]})};try{M.displayName="AutoComplete",M.__docgenInfo={description:"",displayName:"AutoComplete",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"ListProps[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:null,description:"",name:"emptyMessage",required:!1,type:{name:"string"}}}}}catch{}const oe={title:"Design System/components/AutoComplete",component:M},$={args:{placeholder:"Minecraft streamers",list:[{id:1,item:"Quackity, the creator of QSMP",onSelect:t=>alert(`selected: ${t}`)},{id:"dwadwadwa",item:"FoolishG",onSelect:t=>alert(`selected: ${t}`)},{id:2,item:"BadBoyHalo",onSelect:t=>alert(`selected: ${t}`)},{id:3,item:"JaidenAnimations",onSelect:t=>alert(`selected: ${t}`)},{id:5,item:"Cellbit",onSelect:t=>alert(`selected: ${t}`)}]}},E={args:{placeholder:"Minecraft streamers",emptyMessage:"there is nothing here for you",list:[{id:1,item:"Quackity, the creator of QSMP",onSelect:t=>alert(`selected: ${t}`)},{id:"dwadwadwa",item:"FoolishG",onSelect:t=>alert(`selected: ${t}`)},{id:2,item:"BadBoyHalo",onSelect:t=>alert(`selected: ${t}`)},{id:3,item:"JaidenAnimations",onSelect:t=>alert(`selected: ${t}`)},{id:5,item:"Cellbit",onSelect:t=>alert(`selected: ${t}`)}]}};var L,F,N;$.parameters={...$.parameters,docs:{...(L=$.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: "Minecraft streamers",
    list: [{
      id: 1,
      item: "Quackity, the creator of QSMP",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: "dwadwadwa",
      item: "FoolishG",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 2,
      item: "BadBoyHalo",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 3,
      item: "JaidenAnimations",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 5,
      item: "Cellbit",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }]
  }
}`,...(N=(F=$.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var R,q,B;E.parameters={...E.parameters,docs:{...(R=E.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: "Minecraft streamers",
    emptyMessage: "there is nothing here for you",
    list: [{
      id: 1,
      item: "Quackity, the creator of QSMP",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: "dwadwadwa",
      item: "FoolishG",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 2,
      item: "BadBoyHalo",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 3,
      item: "JaidenAnimations",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 5,
      item: "Cellbit",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }]
  }
}`,...(B=(q=E.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const ie=["Primary","CustomEmptyMessage"];export{E as CustomEmptyMessage,$ as Primary,ie as __namedExportsOrder,oe as default};
//# sourceMappingURL=AutoComplete.stories-4872f1a5.js.map
