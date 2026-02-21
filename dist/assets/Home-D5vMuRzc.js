import{r as o,j as e}from"./index-1Z6SQSH-.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(...t)=>t.filter((a,r,n)=>!!a&&a.trim()!==""&&n.indexOf(a)===r).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,r,n)=>n?n.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t=>{const a=R(t);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=o.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:p="",children:c,iconNode:l,...s},d)=>o.createElement("svg",{ref:d,...W,width:a,height:a,stroke:t,strokeWidth:n?Number(r)*24/Number(a):r,className:w("lucide",p),...!c&&!Y(s)&&{"aria-hidden":"true"},...s},[...l.map(([i,m])=>o.createElement(i,m)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(t,a)=>{const r=o.forwardRef(({className:n,...p},c)=>o.createElement(A,{ref:c,iconNode:a,className:w(`lucide-${$(x(t))}`,`lucide-${t}`,n),...p}));return r.displayName=x(t),r};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],z=u("arrow-right",_);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],B=u("award",E);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],F=u("camera",L);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21V3",key:"11j9sm"}]],N=u("chart-no-axes-column-increasing",T);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],V=u("cloud",H);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],P=u("headphones",O);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],S=u("layers",q);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],X=u("megaphone",D);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],U=u("music",G);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],K=u("pen-tool",Z);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],J=u("play",Q);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],te=u("rocket",ee);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ae=u("shield",re);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ie=u("smartphone",ne);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],M=u("sparkles",oe);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],le=u("video",se);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],C=u("wand-sparkles",ce);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],I=u("zap",de);function pe({isMobile:t}){const a=o.useRef(null);return o.useEffect(()=>{const r=a.current;if(!r)return;const n=r.getContext("2d");let p,c=[];const l=()=>{r.width=window.innerWidth,r.height=window.innerHeight},s=()=>{c=[];const i=t?30:80;for(let m=0;m<i;m++)c.push({x:Math.random()*r.width,y:Math.random()*r.height,size:Math.random()*2+.5,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5,opacity:Math.random()*.5+.2})},d=()=>{n.clearRect(0,0,r.width,r.height),c.forEach(i=>{i.x+=i.speedX,i.y+=i.speedY,(i.x<0||i.x>r.width)&&(i.speedX*=-1),(i.y<0||i.y>r.height)&&(i.speedY*=-1),n.beginPath(),n.arc(i.x,i.y,i.size,0,Math.PI*2),n.fillStyle=`rgba(6, 182, 212, ${i.opacity})`,n.fill()}),c.forEach((i,m)=>{c.slice(m+1).forEach(g=>{const f=i.x-g.x,h=i.y-g.y,y=Math.sqrt(f*f+h*h);y<150&&(n.beginPath(),n.moveTo(i.x,i.y),n.lineTo(g.x,g.y),n.strokeStyle=`rgba(6, 182, 212, ${.1*(1-y/150)})`,n.stroke())})}),p=requestAnimationFrame(d)};return l(),s(),d(),window.addEventListener("resize",()=>{l(),s()}),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",l)}},[t]),e.jsx("canvas",{ref:a,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})}function b({children:t,variant:a="primary",icon:r}){const[n,p]=o.useState({x:0,y:0}),c=d=>{const i=d.currentTarget.getBoundingClientRect(),m=(d.clientX-i.left-i.width/2)/10,g=(d.clientY-i.top-i.height/2)/10;p({x:m,y:g})},l=()=>p({x:0,y:0}),s=a==="primary";return e.jsx("a",{href:"/contact",onMouseMove:c,onMouseLeave:l,style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"1rem 2rem",borderRadius:50,fontWeight:600,fontSize:"1rem",textDecoration:"none",background:s?"linear-gradient(135deg, #06b6d4, #0891b2)":"rgba(255, 255, 255, 0.05)",color:"#fff",border:s?"none":"1px solid rgba(255, 255, 255, 0.15)",boxShadow:s?"0 4px 30px rgba(6, 182, 212, 0.4)":"none",transform:`translate(${n.x}px, ${n.y}px)`,transition:"transform 0.2s ease, box-shadow 0.3s ease",cursor:"pointer"},children:t})}function me(){const[t,a]=o.useState(!1);return o.useEffect(()=>{a(!0)},[]),e.jsxs("section",{style:{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"linear-gradient(180deg, #02040a 0%, #0f172a 100%)"},children:[e.jsx(pe,{isMobile:!1}),e.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:`
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,backgroundSize:"60px 60px"}}),e.jsxs("div",{style:{position:"relative",zIndex:10,maxWidth:"900px",margin:"0 auto",padding:"0 1.5rem",textAlign:"center"},children:[e.jsx("div",{style:{marginBottom:"2.5rem",opacity:t?1:0,transform:t?"translateY(0)":"translateY(20px)",transition:"all 0.6s ease"},children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem 1.5rem",borderRadius:50,background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(6, 182, 212, 0.3)"},children:[e.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#22d3ee",animation:"pulse 2s infinite"}}),e.jsx("span",{style:{color:"#67e8f9",fontSize:"0.875rem",fontWeight:500},children:"Premium Video Editing Agency"})]})}),e.jsxs("h1",{style:{fontSize:"clamp(2rem, 7vw, 4rem)",fontWeight:700,lineHeight:1.1,marginBottom:"2rem"},children:[e.jsx("div",{style:{color:"#fff",marginBottom:"0.5rem",opacity:t?1:0,transform:t?"translateY(0)":"translateY(40px)",transition:"all 0.8s ease 0.1s"},children:"Your Vision."}),e.jsx("div",{style:{background:"linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",opacity:t?1:0,transform:t?"translateY(0)":"translateY(40px)",transition:"all 0.8s ease 0.3s"},children:"Our Editing Magic."})]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"0.75rem",marginBottom:"2rem",opacity:t?1:0,transform:t?"translateY(0)":"translateY(20px)",transition:"all 0.6s ease 0.4s"},children:[{icon:le,text:"Video Editing"},{icon:C,text:"Motion Graphics"},{icon:X,text:"Digital Marketing"}].map((r,n)=>e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 1rem",borderRadius:50,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#94a3b8",fontSize:"0.875rem"},children:[e.jsx(r.icon,{size:14,color:"#22d3ee"}),r.text]},n))}),e.jsx("p",{style:{fontSize:"clamp(1rem, 2vw, 1.25rem)",color:"#94a3b8",maxWidth:"600px",margin:"0 auto 2.5rem",lineHeight:1.7,opacity:t?1:0,transform:t?"translateY(0)":"translateY(30px)",transition:"all 0.8s ease 0.5s"},children:"From raw footage to cinematic masterpieces. We transform your content into compelling stories that captivate audiences and grow your brand."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem",opacity:t?1:0,transform:t?"translateY(0)":"translateY(30px)",transition:"all 0.8s ease 0.7s"},children:[e.jsxs(b,{icon:M,children:["Start Your Project",e.jsx(z,{size:20})]}),e.jsx(b,{variant:"secondary",icon:J,children:"Watch Showreel"})]})]}),e.jsxs("div",{style:{position:"absolute",bottom:"2.5rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",opacity:t?1:0,transition:"opacity 0.8s ease 1.5s"},children:[e.jsx("span",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.15em",color:"#64748b"},children:"Scroll"}),e.jsx("div",{style:{width:24,height:40,borderRadius:12,border:"2px solid #475569",display:"flex",justifyContent:"center",paddingTop:8},children:e.jsx("div",{style:{width:4,height:8,background:"#22d3ee",borderRadius:2,animation:"bounce 1.5s infinite"}})})]}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:120,background:"linear-gradient(to top, #02040a, transparent)"}}),e.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (min-width: 640px) {
          div[style*="flex-direction: column"] {
            flex-direction: row !important;
          }
        }
      `})]})}const v=[{icon:I,title:"Lightning Fast",description:"Blazing fast delivery without compromising on quality."},{icon:ae,title:"Secure Files",description:"Enterprise-grade security for your valuable assets."},{icon:te,title:"Scalable Solutions",description:"From startup to enterprise, we scale with you."},{icon:S,title:"Premium Quality",description:"Industry-standard output that competes globally."},{icon:F,title:"4K Rendering",description:"Crystal clear resolution for professional broadcast."},{icon:U,title:"Audio Engineering",description:"Studio-grade sound design and mixing services."}],k=[{icon:K,title:"Custom Graphics",description:"Bespoke visual assets tailored to your brand."},{icon:N,title:"Analytics",description:"Data-driven insights to optimize performance."},{icon:ie,title:"Mobile-First",description:"Optimized for every screen size and platform."},{icon:V,title:"Cloud Storage",description:"Access your projects anywhere, anytime securely."},{icon:P,title:"24/7 Support",description:"Round-the-clock assistance for all your needs."},{icon:B,title:"Award Winning",description:"Recognized excellence in creative media."}];function j({icon:t,title:a,description:r}){return e.jsxs("div",{style:{flexShrink:0,width:280,padding:"2rem",borderRadius:"1.5rem",background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",backdropFilter:"blur(10px)"},children:[e.jsx("div",{style:{width:56,height:56,borderRadius:"0.75rem",background:"rgba(6, 182, 212, 0.15)",border:"1px solid rgba(6, 182, 212, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.25rem"},children:e.jsx(t,{size:28,color:"#22d3ee"})}),e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:700,color:"#fff",marginBottom:"0.5rem"},children:a}),e.jsx("p",{style:{color:"#94a3b8",fontSize:"0.875rem",lineHeight:1.6},children:r})]})}function ue(){const[t,a]=o.useState(!1);return o.useEffect(()=>{a(!0)},[]),e.jsxs("section",{style:{position:"relative",padding:"7rem 0",overflow:"hidden",background:"#02040a"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.02), transparent)"}}),e.jsxs("div",{style:{position:"relative",zIndex:10,textAlign:"center",marginBottom:"4rem",padding:"0 1.5rem"},children:[e.jsx("span",{style:{display:"inline-block",padding:"0.5rem 1.25rem",borderRadius:50,background:"rgba(6, 182, 212, 0.1)",border:"1px solid rgba(6, 182, 212, 0.2)",color:"#22d3ee",fontSize:"0.875rem",fontWeight:500,marginBottom:"1.5rem"},children:"Why Choose Us"}),e.jsxs("h2",{style:{fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:700,color:"#fff"},children:["Features That"," ",e.jsx("span",{style:{background:"linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Set Us Apart"})]})]}),e.jsxs("div",{style:{position:"relative",marginBottom:"2rem"},children:[e.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:120,background:"linear-gradient(90deg, #02040a, transparent)",zIndex:10}}),e.jsx("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:120,background:"linear-gradient(-90deg, #02040a, transparent)",zIndex:10}}),e.jsx("div",{style:{display:"flex",gap:"1.5rem",overflow:"hidden",padding:"0.5rem 0"},children:e.jsx("div",{style:{display:"flex",gap:"1.5rem",animation:"scrollLeft 30s linear infinite"},children:[...v,...v].map((r,n)=>e.jsx(j,{...r},n))})})]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:120,background:"linear-gradient(90deg, #02040a, transparent)",zIndex:10}}),e.jsx("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:120,background:"linear-gradient(-90deg, #02040a, transparent)",zIndex:10}}),e.jsx("div",{style:{display:"flex",gap:"1.5rem",overflow:"hidden",padding:"0.5rem 0"},children:e.jsx("div",{style:{display:"flex",gap:"1.5rem",animation:"scrollRight 35s linear infinite"},children:[...k,...k].map((r,n)=>e.jsx(j,{...r},n))})})]}),e.jsx("style",{children:`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `})]})}const ge=[{title:"Discover",description:"We dive deep into your vision, analyzing every detail to understand your goals.",icon:M,color:"#06b6d4",glow:"rgba(6, 182, 212, 0.4)"},{title:"Design",description:"Our creative minds craft stunning visuals that captivate and inspire.",icon:C,color:"#8b5cf6",glow:"rgba(139, 92, 246, 0.4)"},{title:"Develop",description:"Cutting-edge technology meets artistic vision for breakthrough experiences.",icon:S,color:"#3b82f6",glow:"rgba(59, 130, 246, 0.4)"},{title:"Deliver",description:"Excellence in every frame. We ensure flawless execution.",icon:I,color:"#10b981",glow:"rgba(16, 185, 129, 0.4)"}];function fe({item:t,index:a}){const[r,n]=o.useState(!1),[p,c]=o.useState({x:0,y:0}),l=o.useRef(null);o.useEffect(()=>{const i=new IntersectionObserver(([m])=>{m.isIntersecting&&n(!0)},{threshold:.4});return l.current&&i.observe(l.current),()=>i.disconnect()},[]);const s=i=>{if(!l.current)return;const m=l.current.getBoundingClientRect();c({x:(i.clientX-m.left)/m.width,y:(i.clientY-m.top)/m.height})},d=t.icon;return e.jsxs("div",{ref:l,onMouseMove:s,style:{padding:"6rem 0",borderBottom:a<3?"1px solid rgba(255,255,255,0.05)":"none",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:r?`radial-gradient(circle at ${p.x*100}% ${p.y*100}%, ${t.color}10 0%, transparent 50%)`:"transparent",transition:"background 0.3s ease",opacity:r?1:0,transition:"opacity 0.8s ease"}}),r&&e.jsx(e.Fragment,{children:[...Array(6)].map((i,m)=>e.jsx("div",{style:{position:"absolute",width:Math.random()*4+2,height:Math.random()*4+2,borderRadius:"50%",background:t.color,left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,opacity:0,animation:`float${a} ${3+Math.random()*2}s ease-in-out infinite`,animationDelay:`${Math.random()*2}s`,boxShadow:`0 0 ${Math.random()*10+5}px ${t.color}`}},m))}),e.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",padding:"0 1.5rem",textAlign:"center",position:"relative",zIndex:10},children:[e.jsxs("div",{style:{fontSize:"clamp(4rem, 10vw, 8rem)",fontWeight:700,color:t.color,opacity:r?.08:0,transform:r?"scale(1)":"scale(0.8)",transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",position:"absolute",left:"50%",top:"-2rem",transform:`translateX(-50%) scale(${r?1:.8})`,letterSpacing:"-0.05em",pointerEvents:"none"},children:["0",a+1]}),e.jsxs("div",{style:{position:"relative",width:80,height:80,margin:"0 auto 2rem",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("div",{style:{position:"absolute",inset:0,border:`2px solid ${t.color}30`,borderRadius:"50%",opacity:r?1:0,transform:r?"rotate(0deg)":"rotate(-180deg)",transition:"all 1s cubic-bezier(0.16, 1, 0.3, 1)",animation:r?"spin 8s linear infinite":"none"}}),e.jsx("div",{style:{position:"absolute",inset:5,background:`linear-gradient(135deg, ${t.color}20, transparent)`,borderRadius:"50%",opacity:r?1:0,transform:r?"scale(1)":"scale(0.5)",transition:"all 0.6s ease 0.2s"}}),e.jsx("div",{style:{width:50,height:50,borderRadius:"50%",background:`linear-gradient(135deg, ${t.color}, ${t.color}80)`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:r?`0 0 40px ${t.glow}`:"none",opacity:r?1:0,transform:r?"scale(1) rotate(0deg)":"scale(0.5) rotate(-180deg)",transition:"all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"},children:e.jsx(d,{size:24,color:"#fff"})})]}),e.jsx("h3",{style:{fontSize:"clamp(1.75rem, 5vw, 3rem)",fontWeight:700,color:t.color,marginBottom:"1rem",opacity:r?1:0,transform:r?"translateY(0)":"translateY(30px)",transition:"all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",textShadow:r?`0 0 40px ${t.glow}`:"none"},children:t.title}),e.jsx("p",{style:{color:"#94a3b8",fontSize:"clamp(1rem, 2vw, 1.25rem)",maxWidth:"500px",margin:"0 auto",lineHeight:1.8,opacity:r?1:0,transform:r?"translateY(0)":"translateY(30px)",transition:"all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"},children:t.description}),a<3&&r&&e.jsx("div",{style:{position:"absolute",left:"50%",bottom:0,transform:"translateX(-50%)",width:2,height:60,background:`linear-gradient(to bottom, ${t.color}40, transparent)`,animation:"lineGrow 0.8s ease forwards",animationDelay:"0.8s",opacity:0}})]}),e.jsx("style",{children:`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(10px, -20px) scale(1.2); opacity: 0.3; }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-15px, -15px) scale(0.8); opacity: 0.2; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(20px, -10px) scale(1.1); opacity: 0.2; }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-10px, -25px) scale(0.9); opacity: 0.3; }
        }
        @keyframes lineGrow {
          from { opacity: 0; height: 0; }
          to { opacity: 1; height: 60px; }
        }
      `})]})}function he(){return e.jsx("section",{style:{position:"relative",padding:"2.5rem 0",background:"linear-gradient(180deg, #02040a 0%, #0f172a 30%, #02040a 100%)"},children:ge.map((t,a)=>e.jsx(fe,{item:t,index:a},a))})}const ye=[{value:500,suffix:"+",label:"Projects Completed",color:"#06b6d4"},{value:98,suffix:"%",label:"Client Satisfaction",color:"#8b5cf6"},{value:5,suffix:"+",label:"Years Experience",color:"#3b82f6"},{value:50,suffix:"+",label:"Team Members",color:"#10b981"},{value:24,suffix:"",label:"/7 Support",color:"#f59e0b"},{value:100,suffix:"%",label:"On-Time Delivery",color:"#ef4444"}],xe=[{name:"YouTube",color:"#FF0000"},{name:"Instagram",color:"#E4405F"},{name:"TikTok",color:"#000000"},{name:"Twitter",color:"#1DA1F2"},{name:"LinkedIn",color:"#0A66C2"},{name:"Facebook",color:"#1877F2"}];function be({item:t,index:a}){const[r,n]=o.useState(!1),[p,c]=o.useState(0),l=o.useRef(null);return o.useEffect(()=>{const s=new IntersectionObserver(([d])=>{d.isIntersecting&&!r&&n(!0)},{threshold:.3});return l.current&&s.observe(l.current),()=>s.disconnect()},[r]),o.useEffect(()=>{if(!r)return;let s=0;const d=t.value,m=d/(2e3/16),g=setTimeout(()=>{const f=setInterval(()=>{s+=m,s>=d?(c(d),clearInterval(f)):c(Math.floor(s))},16);return()=>clearInterval(f)},a*100);return()=>clearTimeout(g)},[r,a,t.value]),e.jsxs("div",{ref:l,style:{position:"relative",textAlign:"center",padding:"2rem 1rem",borderRadius:"1.5rem",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.05)",overflow:"hidden",opacity:r?1:0,transform:r?"translateY(0) scale(1)":"translateY(50px) scale(0.8)",transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",transitionDelay:`${a*.1}s`},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:`radial-gradient(circle at 50% 0%, ${t.color}15 0%, transparent 70%)`,opacity:r?1:0,transition:"opacity 0.5s ease 0.5s"}}),e.jsxs("div",{style:{fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:700,background:`linear-gradient(135deg, ${t.color}, #fff)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",position:"relative",zIndex:1},children:[p,t.suffix]}),e.jsx("div",{style:{color:"#64748b",fontSize:"0.875rem",marginTop:"0.5rem",position:"relative",zIndex:1},children:t.label}),e.jsx("div",{style:{position:"absolute",top:0,right:0,width:40,height:40,background:`linear-gradient(135deg, transparent 50%, ${t.color}20 50%)`,borderRadius:"0 1.5rem 0 0"}})]})}function ve({name:t,color:a,index:r}){const[n,p]=o.useState(!1),[c,l]=o.useState(!1),s=o.useRef(null);return o.useEffect(()=>{const d=new IntersectionObserver(([i])=>{i.isIntersecting&&p(!0)},{threshold:.5});return s.current&&d.observe(s.current),()=>d.disconnect()},[]),e.jsx("div",{ref:s,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{padding:"1rem 2rem",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.75rem",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.08)",opacity:n?1:0,transform:n?"translateY(0) scale(1)":"translateY(20px) scale(0.9)",transition:"all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",transitionDelay:`${r*.1}s`,cursor:"pointer",minWidth:140},children:e.jsx("span",{style:{fontSize:"1.25rem",fontWeight:700,color:a,letterSpacing:"0.05em",textShadow:c?`0 0 20px ${a}80`:"none",transition:"text-shadow 0.3s ease"},children:t})})}function ke(){const[t,a]=o.useState(!1),[r,n]=o.useState(!1),p=o.useRef(null),c=o.useRef(null);return o.useEffect(()=>{const l=new IntersectionObserver(([d])=>{d.isIntersecting&&a(!0)},{threshold:.3}),s=new IntersectionObserver(([d])=>{d.isIntersecting&&n(!0)},{threshold:.3});return p.current&&l.observe(p.current),c.current&&s.observe(c.current),()=>{l.disconnect(),s.disconnect()}},[]),e.jsxs("section",{style:{position:"relative",padding:"8rem 0",overflow:"hidden",background:"#02040a"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.02) 50%, transparent 100%)"}}),e.jsx("div",{style:{position:"absolute",top:"20%",left:"10%",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",filter:"blur(60px)",animation:"orb1 8s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",bottom:"20%",right:"10%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",filter:"blur(80px)",animation:"orb2 10s ease-in-out infinite"}}),e.jsxs("div",{style:{position:"relative",zIndex:10,maxWidth:"1100px",margin:"0 auto",padding:"0 1.5rem"},children:[e.jsxs("div",{ref:p,style:{textAlign:"center",marginBottom:"5rem",opacity:t?1:0,transform:t?"translateY(0)":"translateY(40px)",transition:"all 1s cubic-bezier(0.16, 1, 0.3, 1)"},children:[e.jsx("div",{style:{display:"inline-block",padding:"0.6rem 1.5rem",borderRadius:50,background:"rgba(59, 130, 246, 0.1)",border:"1px solid rgba(59, 130, 246, 0.2)",color:"#60a5fa",fontSize:"0.875rem",fontWeight:500,marginBottom:"1.5rem",opacity:t?1:0,transform:t?"scale(1)":"scale(0.8)",transition:"all 0.6s ease 0.2s"},children:"Our Impact"}),e.jsxs("h2",{style:{fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#fff",letterSpacing:"-0.02em"},children:["Numbers That"," ",e.jsx("span",{style:{background:"linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Speak"})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",marginBottom:"6rem"},children:ye.map((l,s)=>e.jsx(be,{item:l,index:s},s))}),e.jsxs("div",{ref:c,style:{textAlign:"center",opacity:r?1:0,transition:"opacity 0.8s ease 0.3s"},children:[e.jsx("p",{style:{color:"#64748b",marginBottom:"2.5rem",fontSize:"1rem",opacity:r?1:0,transition:"opacity 0.5s ease 0.5s"},children:"Trusted by leading brands worldwide"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"1rem"},children:xe.map((l,s)=>e.jsx(ve,{name:l.name,color:l.color,index:s},s))})]})]}),e.jsx("style",{children:`
        @media (min-width: 768px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: repeat(6, 1fr) !important;
          }
        }
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 20px); }
        }
      `})]})}function we(){const[t,a]=o.useState(!1),r=o.useRef(null);return o.useEffect(()=>{const n=new IntersectionObserver(([p])=>{p.isIntersecting&&a(!0)},{threshold:.3});return r.current&&n.observe(r.current),()=>n.disconnect()},[]),e.jsxs("div",{style:{background:"#02040a",minHeight:"100vh"},children:[e.jsx(me,{}),e.jsx(ue,{}),e.jsx(he,{}),e.jsx(ke,{}),e.jsxs("section",{ref:r,style:{position:"relative",padding:"10rem 0",overflow:"hidden"},children:[e.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,height:800,borderRadius:"50%",background:"radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 60%)",filter:"blur(60px)",animation:"ctaOrb1 6s ease-in-out infinite"}}),e.jsx("div",{style:{position:"absolute",top:"30%",right:"20%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",filter:"blur(50px)",animation:"ctaOrb2 8s ease-in-out infinite"}})]}),e.jsx("div",{style:{position:"relative",zIndex:10,maxWidth:"900px",margin:"0 auto",padding:"0 1.5rem",textAlign:"center"},children:e.jsxs("div",{style:{padding:"4rem 2rem",md:{padding:"5rem 3rem"},borderRadius:"2rem",background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",backdropFilter:"blur(20px)",opacity:t?1:0,transform:t?"translateY(0) scale(1)":"translateY(50px) scale(0.95)",transition:"all 1s cubic-bezier(0.16, 1, 0.3, 1)"},children:[e.jsxs("h2",{style:{fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,color:"#fff",marginBottom:"1.5rem",letterSpacing:"-0.02em",opacity:t?1:0,transform:t?"translateY(0)":"translateY(30px)",transition:"all 0.6s ease 0.2s"},children:["Ready to"," ",e.jsx("span",{style:{background:"linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Transform"})," ","Your Vision?"]}),e.jsx("p",{style:{color:"#94a3b8",fontSize:"clamp(1rem, 2vw, 1.25rem)",marginBottom:"3rem",maxWidth:"450px",margin:"0 auto 3rem",lineHeight:1.8,opacity:t?1:0,transform:t?"translateY(0)":"translateY(30px)",transition:"all 0.6s ease 0.3s"},children:"Let's create something extraordinary together. Start your journey today."}),e.jsxs("a",{href:"/contact",style:{display:"inline-flex",alignItems:"center",gap:"0.75rem",background:"linear-gradient(135deg, #06b6d4, #3b82f6)",color:"#fff",padding:"1.25rem 3rem",borderRadius:50,fontWeight:600,fontSize:"1.125rem",boxShadow:"0 4px 40px rgba(6, 182, 212, 0.4)",textDecoration:"none",opacity:t?1:0,transform:t?"translateY(0) scale(1)":"translateY(30px) scale(0.9)",transition:"all 0.6s ease 0.4s, transform 0.3s ease, box-shadow 0.3s ease"},onMouseEnter:n=>{n.target.style.transform="translateY(-4px) scale(1.02)",n.target.style.boxShadow="0 8px 50px rgba(6, 182, 212, 0.6)"},onMouseLeave:n=>{n.target.style.transform="translateY(0) scale(1)",n.target.style.boxShadow="0 4px 40px rgba(6, 182, 212, 0.4)"},children:["Get Started Now",e.jsx(z,{size:24})]})]})}),e.jsx("style",{children:`
          @keyframes ctaOrb1 {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-40%, -60%) scale(1.1); }
          }
          @keyframes ctaOrb2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-30px, 20px); }
          }
        `})]})]})}export{we as default};
