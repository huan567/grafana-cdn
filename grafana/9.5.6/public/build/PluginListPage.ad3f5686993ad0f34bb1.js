"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{75260:(O,h,a)=>{a.d(h,{SX:()=>E,IF:()=>T,oZ:()=>f,xh:()=>N});var l=a(68404),e=a(24699),d=a(19985);function E({error:n}){const m=B(n);return l.createElement(d.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:m})}function B(n){switch(n){case e.w2.modifiedSignature:return"Plugin disabled due to modified content";case e.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case e.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${n?`: ${n}`:""}`}}var g=a(72648),c=a(9892);const v=n=>c.css`
  background: ${n.colors.background.primary};
  border-color: ${n.colors.border.strong};
  color: ${n.colors.text.secondary};
`;function f(){const n=(0,g.wW)(v);return l.createElement(d.C,{text:"Installed",color:"orange",className:n})}var C=a(66121),$=a(52081),x=a(51613),P=a(31403);function T({plugin:n}){const m=(0,g.wW)(v),b=D=>{D.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${n.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")};return(0,C.v)("enterprise.plugins")?l.createElement(d.C,{text:"Enterprise",color:"blue"}):l.createElement($.Lh,null,l.createElement(x.o,{status:n.signature}),l.createElement(d.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:m}),l.createElement(P.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:b},"Learn more"))}function N({plugin:n}){const m=(0,g.wW)(S);return n.hasUpdate&&!n.isCore&&n.type!==e.zV.renderer?l.createElement("p",{className:m.hasUpdate},"Update available!"):null}const S=n=>({hasUpdate:c.css`
      color: ${n.colors.text.secondary};
      font-size: ${n.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},21701:(O,h,a)=>{a.r(h),a.d(h,{default:()=>ee});var l=a(9892),e=a(68404),d=a(70356),E=a(37932),B=a(35645),g=a(72648),c=a(24799),v=a(53217),f=a(2594),C=a(6554),$=a(61744),x=a(79396),P=a(86245),T=a(86475),N=a(81168),S=a(21048),n=a(48996),m=a(39904),b=a(52081),D=a(51613),p=a(75260);function M({plugin:t}){return t.isEnterprise?e.createElement(b.Lh,{height:"auto",wrap:!0},e.createElement(p.IF,{plugin:t}),t.isDisabled&&e.createElement(p.SX,{error:t.error}),e.createElement(p.xh,{plugin:t})):e.createElement(b.Lh,{height:"auto",wrap:!0},e.createElement(D.o,{status:t.signature}),t.isDisabled&&e.createElement(p.SX,{error:t.error}),t.isInstalled&&e.createElement(p.oZ,null),e.createElement(p.xh,{plugin:t}))}function X({alt:t,className:i,src:r,height:s}){return e.createElement("img",{src:r,className:i,alt:t,loading:"lazy",height:s})}const G="48px";function w({plugin:t,pathName:i,displayMode:r=n.lL.Grid}){const s=(0,g.wW)(V),o=r===n.lL.List;return e.createElement("a",{href:`${i}/${t.id}`,className:(0,l.cx)(s.container,{[s.list]:o})},e.createElement(X,{src:t.info.logos.small,className:s.pluginLogo,height:G,alt:""}),e.createElement("h2",{className:(0,l.cx)(s.name,"plugin-name")},t.name),e.createElement("div",{className:(0,l.cx)(s.content,"plugin-content")},e.createElement("p",null,"By ",t.orgName),e.createElement(M,{plugin:t})),e.createElement("div",{className:s.pluginType},t.type&&e.createElement(m.J,{name:n.Co[t.type],title:`${t.type} plugin`})))}const V=t=>({container:l.css`
      display: grid;
      grid-template-columns: ${G} 1fr ${t.spacing(3)};
      grid-template-rows: auto;
      gap: ${t.spacing(2)};
      grid-auto-flow: row;
      background: ${t.colors.background.secondary};
      border-radius: ${t.shape.borderRadius()};
      padding: ${t.spacing(3)};
      transition: ${t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short})};

      &:hover {
        background: ${t.colors.emphasize(t.colors.background.secondary,.03)};
      }
    `,list:l.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${t.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:l.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${t.colors.text.secondary};
    `,pluginLogo:l.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:l.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${t.colors.text.secondary};
    `,name:l.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${t.typography.h4.fontSize};
      color: ${t.colors.text.primary};
      margin: 0;
    `}),j=({plugins:t,displayMode:i})=>{const r=i===n.lL.List,s=(0,g.wW)(J),{pathname:o}=(0,d.TH)(),A=B.v.appSubUrl+(o.endsWith("/")?o.slice(0,-1):o);return e.createElement("div",{className:(0,l.cx)(s.container,{[s.list]:r}),"data-testid":"plugin-list"},t.map(y=>e.createElement(w,{key:y.id,plugin:y,pathName:A,displayMode:i})))},J=t=>({container:l.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${t.spacing(3)};
    `,list:l.css`
      grid-template-columns: 1fr;
    `});var K=a(70197),Q=a(14747);const Y=(t,i=0,r=[])=>{const s=(0,e.useRef)(!0),o=[...r,s];return(0,K.Z)(()=>{if(s.current){s.current=!1;return}return t()},i,o)},k=({value:t,onSearch:i})=>{const[r,s]=(0,e.useState)(t);return Y(()=>i(r??""),500,[r]),e.createElement(Q.H,{value:r,onKeyDown:o=>{(o.key==="Enter"||o.keyCode===13)&&i(o.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:o=>{s(o)},width:46})};var q=a(59210);const _=()=>({push:({query:t})=>{E.E1.partial(t)}});var I=a(74509);function ee({route:t}){const i=(0,d.TH)(),r=(0,E.Ox)(i.search),s=(0,N.useSelector)(u=>(0,P.ht)(u.navIndex,"plugins")),{displayMode:o,setDisplayMode:A}=(0,I.iY)(),y=(0,g.wW)(te),L=_(),ae=(0,I.y9)(),W=r.q||"",z=r.filterBy||"installed",F=r.filterByType||"all",Z=r.sortBy||q.Nh.nameAsc,{isLoading:ne,error:U,plugins:le}=(0,I.GE)({query:W,filterBy:z,filterByType:F,sortBy:Z}),H=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],se=u=>{L.push({query:{sortBy:u.value}})},R=u=>{L.push({query:{filterBy:u}})},re=u=>{L.push({query:{filterByType:u.value}})},oe=u=>{L.push({query:{filterBy:"all",filterByType:"all",q:u}})};if(U)return console.error(U.message),null;const ie=B.v.featureToggles.dataConnectionsConsole?e.createElement("p",null,"Extend the Grafana experience with panel plugins and apps. To find more data sources go to"," ",e.createElement("a",{href:`${T.Z.ConnectData}?cat=data-source`},"Connections"),"."):e.createElement("p",null,"Extend the Grafana experience with panel plugins and apps.");return e.createElement(x.T,{navModel:s,subTitle:ie},e.createElement(x.T.Contents,null,e.createElement(S.L,{wrap:!0},e.createElement(c.g,{label:"Search"},e.createElement(k,{value:W,onSearch:oe})),e.createElement(S.L,{wrap:!0,className:y.actionBar},e.createElement(c.g,{label:"Type"},e.createElement(v.Ph,{"aria-label":"Plugin type filter",value:F,onChange:re,width:18,options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})),ae?e.createElement(c.g,{label:"State"},e.createElement(f.S,{value:z,onChange:R,options:H})):e.createElement(C.u,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top"},e.createElement("div",null,e.createElement(c.g,{label:"State"},e.createElement(f.S,{disabled:!0,value:z,onChange:R,options:H})))),e.createElement(c.g,{label:"Sort"},e.createElement(v.Ph,{"aria-label":"Sort Plugins List",width:24,value:Z,onChange:se,options:[{value:"nameAsc",label:"By name (A-Z)"},{value:"nameDesc",label:"By name (Z-A)"},{value:"updated",label:"By updated date"},{value:"published",label:"By published date"},{value:"downloads",label:"By downloads"}]})),e.createElement(c.g,{label:"View"},e.createElement(f.S,{className:y.displayAs,value:o,onChange:A,options:[{value:n.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:n.lL.List,icon:"list-ul",description:"Display plugins in list"}]})))),e.createElement("div",{className:y.listWrap},ne?e.createElement($.u,{className:l.css`
                margin-bottom: 0;
              `,text:"Loading results"}):e.createElement(j,{plugins:le,displayMode:o}))))}const te=t=>({actionBar:l.css`
    ${t.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:l.css`
    margin-top: ${t.spacing(2)};
  `,displayAs:l.css`
    svg {
      margin-right: 0;
    }
  `})}}]);

//# sourceMappingURL=PluginListPage.ad3f5686993ad0f34bb1.js.map