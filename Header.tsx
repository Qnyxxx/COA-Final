// @ts-nocheck
/**
 * Reconstructed Component: Header
 * Extracting and restoring from build bundle
 */
import React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import { motion, AnimatePresence } from 'motion/react';
import * as lucideReact from 'lucide-react';
import { FORM_DEFAULTS, INITIAL_ENTRIES } from '../types';

// React Core / JSX Aliases
const k = React;
const i = jsxRuntime;
const ya = {
  div: motion.div,
  span: motion.span,
  button: motion.button,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  a: motion.a,
  header: motion.header,
  section: motion.section,
  main: motion.main,
  footer: motion.footer,
  aside: motion.aside,
  ul: motion.ul,
  li: motion.li,
  form: motion.form,
  nav: motion.nav
};
const ks = AnimatePresence;

// Lucide Icon Mappings
const bb = lucideReact.ArrowLeft;
const fo = lucideReact.ArrowRight;
const Bo = lucideReact.BookOpen;
const yb = lucideReact.CalendarRange;
const K2 = lucideReact.Calendar;
const Rs = lucideReact.Check;
const P2 = lucideReact.CircleAlert;
const vb = lucideReact.CircleCheck;
const bf = lucideReact.ClipboardList;
const Nb = lucideReact.Download;
const aj = lucideReact.FileCheck;
const yf = lucideReact.FileSpreadsheet;
const lj = lucideReact.FileText;
const rj = lucideReact.History;
const cj = lucideReact.House;
const Sb = lucideReact.Layers;
const wx = lucideReact.Lock;
const hj = lucideReact.LogIn;
const pj = lucideReact.LogOut;
const gj = lucideReact.Mail;
const jb = lucideReact.Moon;
const vj = lucideReact.PenTool;
const Ns = lucideReact.Pencil;
const Tb = lucideReact.Plus;
const Qd = lucideReact.Printer;
const vf = lucideReact.Search;
const Nf = lucideReact.ShieldCheck;
const Ab = lucideReact.Shield;
const Cj = lucideReact.Sparkles;
const Eb = lucideReact.Sun;
const Yl = lucideReact.Trash2;
const Wn = lucideReact.TriangleAlert;
const Oj = lucideReact.UserPlus;
const zj = lucideReact.User;
const Ol = lucideReact.X;

// Database / Shared Config Aliases
const ho = INITIAL_ENTRIES;
const Vo = FORM_DEFAULTS;

// React import module resolver
const In = React;



function Uj({email:s,onLogout:l,activeTab:c,onNavigate:r,theme:d,onToggleTheme:h}){const[f,p]=k.useState("");k.useEffect(()=>{const x=()=>{const v=new Date;try{const C=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Manila",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(v),w={};C.forEach(O=>{w[O.type]=O.value}),p(`${w.year}-${w.month}-${w.day} ${w.hour}:${w.minute}:${w.second}`)}catch{const C=v.getTime(),w=v.getTimezoneOffset()*6e4,O=C+w,_=new Date(O+36e5*8),F=_.getFullYear(),$=String(_.getMonth()+1).padStart(2,"0"),Y=String(_.getDate()).padStart(2,"0"),L=String(_.getHours()).padStart(2,"0"),pe=String(_.getMinutes()).padStart(2,"0"),de=String(_.getSeconds()).padStart(2,"0");p(`${F}-${$}-${Y} ${L}:${pe}:${de}`)}};x();const y=setInterval(x,1e3);return()=>clearInterval(y)},[]);const g=x=>x.split("@")[0].toUpperCase();return i.jsx("header",{id:"app-header",className:"bg-slate-900 border-b border-slate-800 text-slate-100 sticky top-0 z-50 shadow-md",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex items-center justify-between h-16",children:[i.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>r("home"),children:[i.jsx("div",{className:"w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center",children:i.jsx(Ab,{className:"w-5 h-5"})}),i.jsx("div",{children:i.jsx("span",{className:"font-bold text-sm tracking-tight text-white block",children:"Commission on Audit System"})})]}),i.jsxs("div",{className:"hidden md:flex items-center gap-4 text-xs",children:[i.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400",children:[i.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),i.jsx("span",{children:"SYS ACTIVE"})]}),i.jsxs("div",{className:"text-slate-500",children:["PHT: ",i.jsx("span",{className:"font-mono text-slate-300",children:f||"Loading..."})]})]}),i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700",children:i.jsx(zj,{className:"w-4 h-4 text-emerald-400"})}),i.jsxs("div",{className:"hidden sm:block text-left",children:[i.jsx("p",{className:"text-xs font-semibold text-slate-300 leading-3",children:g(s)}),i.jsx("p",{className:"text-[10px] text-slate-500 leading-none mt-1",children:"Custodian / Officer"})]})]}),i.jsx("button",{onClick:h,className:"p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-all cursor-pointer",title:d==="light"?"Switch to Dark Mode":"Switch to Light Mode",children:d==="light"?i.jsx(jb,{className:"w-4 h-4 text-indigo-400"}):i.jsx(Eb,{className:"w-4 h-4 text-amber-500"})}),i.jsx("button",{id:"logout-btn",onClick:l,className:"p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-all cursor-pointer",title:"Logout session",children:i.jsx(pj,{className:"w-4.5 h-4.5"})})]})]})})})}

export default Uj;
