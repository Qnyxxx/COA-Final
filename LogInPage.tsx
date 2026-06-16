// @ts-nocheck
/**
 * Reconstructed Component: LogInPage
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



function Bj({onLoginSuccess:s,initialEmail:l="nythanjanbagasani@gmail.com"}){const[c,r]=k.useState(!1),[d,h]=k.useState(""),[f,p]=k.useState(""),[g,x]=k.useState(""),[y,v]=k.useState(""),[j,C]=k.useState(""),[w,O]=k.useState(!1),[_,F]=k.useState(()=>{const Y=localStorage.getItem("aft_saas_accounts");if(Y)try{return JSON.parse(Y)}catch{}return[{email:"nythanjanbagasani@gmail.com",passphrase:"password"}]});k.useEffect(()=>{c?(h(""),p(""),x("")):(h(l),p("password")),v(""),C("")},[c,l]),k.useEffect(()=>{localStorage.setItem("aft_saas_accounts",JSON.stringify(_))},[_]);const $=Y=>{if(Y.preventDefault(),v(""),C(""),!d){v("Please enter your email address.");return}const L=d.trim().toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(L)){v("Please enter a valid email address.");return}if(c){if(f.length<6){v("Passphrase must be at least 6 characters long for cryptographic compliance.");return}if(f!==g){v("Secured Passphrase confirmation does not match.");return}if(_.some(ae=>ae.email.toLowerCase()===L)){v("This email address is already registered inside the SaaS registry.");return}O(!0),setTimeout(()=>{const ae={email:L,passphrase:f},se=[..._,ae];F(se),O(!1),C("Account provisioned successfully! Authenticating securely..."),setTimeout(()=>{s(L)},1200)},1e3)}else O(!0),setTimeout(()=>{O(!1);const de=_.find(Ae=>Ae.email.toLowerCase()===L),ae=L==="nythanjanbagasani@gmail.com"&&(f==="••••••••"||f==="password"),se=de&&de.passphrase===f;ae||se?s(L):v("Invalid credentials. Please verify your email or cryptologically matched passphrase.")},850)};return i.jsxs("div",{id:"login-container",className:"min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 relative overflow-hidden px-4",children:[i.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80"}),i.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"}),i.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"}),i.jsxs(ya.div,{id:"login-card",initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 relative z-10 backdrop-blur-md",children:[i.jsxs("div",{id:"login-header",className:"text-center mb-8",children:[i.jsx("div",{className:"inline-flex items-center justify-center w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl mb-4",children:i.jsx(Ab,{className:"w-7 h-7"})}),i.jsx("h1",{className:"text-2xl font-bold font-sans tracking-tight text-white mb-2",children:"Accountable Forms Tracker"}),i.jsx("p",{className:"text-sm text-slate-400",children:"Secure Audit & Records Dashboard (SaaS Portal)"})]}),i.jsx(Vj,{error:y,successMessage:j}),i.jsxs("form",{onSubmit:$,className:"space-y-5",children:[i.jsxs("div",{className:"space-y-1.5",children:[i.jsx("label",{className:"text-xs font-medium text-slate-300 font-sans uppercase tracking-wider block",children:"Email Address"}),i.jsxs("div",{className:"relative",children:[i.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500",children:i.jsx(gj,{className:"w-4 h-4"})}),i.jsx("input",{id:"email-input",type:"email",value:d,onChange:Y=>h(Y.target.value),placeholder:"officer@municipality.gov",className:"w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors",required:!0})]})]}),i.jsxs("div",{className:"space-y-1.5",children:[i.jsx("label",{className:"text-xs font-medium text-slate-300 font-sans uppercase tracking-wider block",children:"Secured Passphrase"}),i.jsxs("div",{className:"relative",children:[i.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500",children:i.jsx(wx,{className:"w-4 h-4"})}),i.jsx("input",{id:"password-input",type:"password",value:f,onChange:Y=>p(Y.target.value),placeholder:"••••••••",className:"w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors",required:!0})]})]}),c&&i.jsxs(ya.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"space-y-1.5 overflow-hidden",children:[i.jsx("label",{className:"text-xs font-medium text-slate-300 font-sans uppercase tracking-wider block",children:"Confirm Passphrase"}),i.jsxs("div",{className:"relative",children:[i.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500",children:i.jsx(wx,{className:"w-4 h-4"})}),i.jsx("input",{id:"confirm-password-input",type:"password",value:g,onChange:Y=>x(Y.target.value),placeholder:"••••••••",className:"w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors",required:c})]})]}),!c&&i.jsx("div",{className:"text-right",children:i.jsx("span",{className:"text-xs text-emerald-400 hover:underline cursor-pointer",children:"Forgot security key?"})}),i.jsx("button",{id:"submit-auth-btn",type:"submit",disabled:w,className:"w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-center justify-center mt-2",children:w?i.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}):c?i.jsxs(i.Fragment,{children:[i.jsx(Oj,{className:"w-4 h-4"}),i.jsx("span",{children:"Initialize Auditor Account"})]}):i.jsxs(i.Fragment,{children:[i.jsx(hj,{className:"w-4 h-4"}),i.jsx("span",{children:"Access Secure Dashboard"})]})})]}),i.jsx("div",{className:"mt-6 pt-5 border-t border-slate-800 text-center",children:i.jsx("button",{id:"toggle-auth-mode-btn",type:"button",onClick:()=>r(!c),className:"text-xs text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 mx-auto",children:c?i.jsxs(i.Fragment,{children:["Already registered in registry? ",i.jsx("span",{className:"text-emerald-400 font-medium hover:underline",children:"Sign In Instead"})]}):i.jsxs(i.Fragment,{children:["Need custom credentials? ",i.jsx("span",{className:"text-emerald-400 font-medium hover:underline",children:"Create an Account"})]})})})]})]})}function Vj({error:s,successMessage:l}){return i.jsxs(ks,{mode:"popLayout",children:[s&&i.jsxs(ya.div,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},className:"mb-6 p-4 bg-red-950/40 border border-red-900/50 text-red-400 rounded-lg flex items-start gap-3 text-xs",children:[i.jsx(P2,{className:"w-4 h-4 shrink-0 mt-0.5"}),i.jsx("span",{children:s})]},"error-panel"),l&&i.jsxs(ya.div,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},className:"mb-6 p-4 bg-emerald-950/40 border border-emerald-900/50 text-emerald-400 rounded-lg flex items-start gap-3 text-xs",children:[i.jsx(vb,{className:"w-4 h-4 shrink-0 mt-0.5"}),i.jsx("span",{children:l})]},"success-panel")]})}

export default Bj;
