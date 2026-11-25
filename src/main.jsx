import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Menu, X, Plus, Minus, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Check } from 'lucide-react';
import './styles.css';

const photos = {
  hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1900&q=90',
  about: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85',
  living: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85',
  bedroom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85',
  dining: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=85',
  office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85',
  kitchen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85'
};
const projects = [
  {id:1,title:'The Quiet Residence',type:'Residential',place:'New Delhi, India',year:'2025',image:photos.living,desc:'A warm, layered home shaped around natural materials, soft light and everyday rituals.'},
  {id:2,title:'A Study in Stillness',type:'Residential',place:'Gurugram, India',year:'2025',image:photos.bedroom,desc:'A calm private retreat with tactile finishes, muted tones and considered details.'},
  {id:3,title:'The Sunday Table',type:'Residential',place:'Noida, India',year:'2024',image:photos.dining,desc:'An inviting dining space designed for slow mornings and long conversations.'},
  {id:4,title:'Form & Function',type:'Commercial',place:'New Delhi, India',year:'2024',image:photos.office,desc:'A thoughtful workplace balancing focus, collaboration and a sense of ease.'},
  {id:5,title:'Earthbound Kitchen',type:'Residential',place:'Jaipur, India',year:'2024',image:photos.kitchen,desc:'A functional kitchen grounded in warm timber, stone and honest materials.'}
];
const services = [
  ['01','Residential interiors','Homes shaped around your routines, personality and the way you want to feel.','Living rooms · Bedrooms · Kitchens',photos.living],
  ['02','Commercial spaces','Distinctive environments for teams, clients and the people who use them every day.','Workplaces · Retail · Hospitality',photos.office],
  ['03','Space planning','Thoughtful layouts that make every corner feel intentional and effortless.','Layouts · Furniture planning · Lighting',photos.dining],
  ['04','Renovation & styling','A considered refresh, from material selection to the final finishing touch.','Material palette · Styling · Turnkey',photos.kitchen]
];
const steps = [
  ['01','The conversation','We learn about your space, needs, references, timeline and investment range.'],
  ['02','The direction','We develop the concept, mood, layout and material palette for your approval.'],
  ['03','The making','We coordinate the details and bring the design to life with care.'],
  ['04','The handover','We style the final space and walk you through your finished interior.']
];
const testimonials = [
  ['“The team understood how we wanted our home to feel. Every choice feels considered, but nothing feels overdone.”','Ayesha K.','Homeowner, New Delhi'],
  ['“From the first conversation to the final styling, the process felt clear, collaborative and genuinely personal.”','Rohan M.','Homeowner, Gurugram'],
  ['“They found a balance between beautiful materials and the way our family actually lives. We love being here.”','Meera S.','Homeowner, Noida']
];

function Label({children}) { return <div className="eyebrow"><span>{children}</span><i/></div>; }
function Header() {
  const [open,setOpen]=useState(false);
  const links=[['About','#about'],['Services','#services'],['Projects','#projects'],['Process','#process'],['Consultation','#consultation'],['Contact','#contact']];
  const close=()=>setOpen(false);
  return <header className="header">
    <a className="logo" href="#home" onClick={close}>OURA <em>&</em> CO.</a>
    <nav className={open?'nav open':'nav'}><a href="#home" onClick={close}>Home</a>{links.map(([t,h])=><a key={h} href={h} onClick={close}>{t}</a>)}</nav>
    <a className="header-cta" href="#consultation">Get your design <ArrowUpRight size={14}/></a>
    <button className="menu" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>;
}
function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy"><Label>Interior design studio</Label>
      <h1>We design<br/>the feeling<br/>of you<span>.</span></h1>
      <p>Thoughtfully crafted interiors that reflect your style, your story and the way you live.</p>
      <div className="actions"><a className="btn dark" href="#projects">Explore projects <ArrowRight size={15}/></a><a className="btn light" href="#consultation"><CalendarDays size={15}/> Book consultation</a></div>
      <small className="hero-index">01 — 04 <b>/</b> Spaces with soul</small>
    </div>
    <div className="hero-visual"><img src={photos.hero} alt="Sunlit contemporary living room with natural textures"/><div className="hero-caption">A home should feel<br/>like you, only more so.</div><a className="scroll-note" href="#about">Scroll to explore <ArrowDown size={13}/></a></div>
  </section>;
}
function About() {
  return <section className="about section" id="about">
    <div className="about-copy reveal"><Label>About us</Label><h2>Spaces that tell<br/>your <i>story.</i></h2><p>We believe interior design is more than how a room looks. It is how it welcomes you, supports your everyday life and makes the ordinary feel a little more meaningful.</p><a className="under-link" href="#consultation">A little more about us <ArrowUpRight size={15}/></a></div>
    <div className="about-photo reveal"><img src={photos.about} alt="Sculptural furniture and warm neutral interior"/><span>Materials, light &amp; the little things.</span></div>
    <div className="stats reveal"><div><strong>4<span>+</span></strong><p>Years of thoughtful<br/>space-making</p></div><div><strong>62<span>+</span></strong><p>Spaces made<br/>more personal</p></div><div><strong>20<span>+</span></strong><p>Craft partners<br/>and collaborators</p></div></div>
  </section>;
}
function Services() {
  const [active,setActive]=useState(0);
  return <section className="services section" id="services">
    <div className="section-heading reveal"><div><Label>What we do</Label><h2>Considered design.<br/><i>Complete care.</i></h2></div><p>From the first sketch to the finishing touches, we bring clarity and care to every part of your project.</p></div>
    <div className="service-layout"><div className="service-list">{services.map((s,i)=><button key={s[0]} className={active===i?'service-row active':'service-row'} onClick={()=>setActive(i)}><span className="number">{s[0]}</span><span className="service-name">{s[1]}</span><span className="plus">{active===i?<Minus size={17}/>:<Plus size={17}/>}</span>{active===i&&<span className="service-detail">{s[2]}<small>{s[3]}</small></span>}</button>)}</div><div className="service-photo"><img key={active} src={services[active][4]} alt={services[active][1]}/><span>OUR APPROACH / {services[active][0]}</span></div></div>
  </section>;
}
function Projects() {
  const [filter,setFilter]=useState('All'),[selected,setSelected]=useState(null);
  const filtered=useMemo(()=>projects.filter(p=>filter==='All'||p.type===filter),[filter]);
  useEffect(()=>{const key=e=>e.key==='Escape'&&setSelected(null);window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[]);
  return <section className="projects section" id="projects">
    <div className="section-heading reveal"><div><Label>Selected work / 2023—25</Label><h2>Made to be <i>lived in.</i></h2></div><p>A collection of spaces, each with its own character. Thoughtful in detail, personal by nature.</p></div>
    <div className="project-toolbar"><div>{['All','Residential','Commercial'].map(f=><button key={f} className={filter===f?'filter active':'filter'} onClick={()=>setFilter(f)}>{f}</button>)}</div><small>{String(filtered.length).padStart(2,'0')} projects</small></div>
    <div className="project-grid">{filtered.map((p,i)=><button className="project-card reveal" key={p.id} onClick={()=>setSelected(p)}><div className="project-img"><img src={p.image} alt={p.title}/><span><ArrowUpRight/></span></div><div className="project-meta"><small>{p.type} / {p.place}</small><small>{p.year}</small></div><h3>{p.title}</h3></button>)}</div>
    {selected&&<div className="modal-shade" onClick={()=>setSelected(null)}><div className="project-modal" role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><button className="modal-x" onClick={()=>setSelected(null)} aria-label="Close"><X/></button><img src={selected.image} alt={selected.title}/><div><Label>{selected.type} / {selected.year}</Label><h2>{selected.title}</h2><p>{selected.desc}</p><small>{selected.place}</small></div></div></div>}
  </section>;
}
function Process() {
  return <section className="process section" id="process"><div className="process-intro reveal"><Label>How we work</Label><h2>Good spaces begin<br/>with <i>good conversations.</i></h2><a className="under-link" href="#consultation">Start a conversation <ArrowUpRight size={15}/></a></div><div className="steps">{steps.map(s=><article className="step reveal" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></section>;
}
function Testimonial() {
  const [index,setIndex]=useState(0),q=testimonials[index];
  return <section className="testimonial section"><div className="testimonial-title reveal"><Label>Kind words</Label><h2>What it feels like<br/>to come <i>home.</i></h2><div className="quote-arrows"><button onClick={()=>setIndex((index+2)%3)} aria-label="Previous"><ArrowLeft/></button><button onClick={()=>setIndex((index+1)%3)} aria-label="Next"><ArrowRight/></button><small>0{index+1} / 03</small></div></div><div className="quote reveal"><b>“</b><blockquote>{q[0]}</blockquote><div className="person"><span>{q[1][0]}</span><div><strong>{q[1]}</strong><small>{q[2]}</small></div></div></div></section>;
}
function Consultation() {
  const [form,setForm]=useState({name:'',email:'',phone:'',location:'',project:'Residential interior',budget:'',message:''});
  const [submitted,setSubmitted]=useState(false);
  const update=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=e=>{e.preventDefault();const subject=encodeURIComponent('Design consultation enquiry — '+form.name);const body=encodeURIComponent(`Name: ${form.name}\\nEmail: ${form.email}\\nPhone: ${form.phone}\\nLocation: ${form.location}\\nProject: ${form.project}\\nBudget: ${form.budget}\\nDetails: ${form.message}`);setSubmitted(true);window.location.href=`mailto:hello@yourstudio.com?subject=${subject}&body=${body}`;};
  return <section className="consultation section" id="consultation">
    <div className="consult-copy reveal"><Label>Let's begin</Label><h2>Tell us about<br/>your <i>space.</i></h2><p>Whether you have a clear vision or just a feeling you want to create, we'd love to hear about it.</p><div className="consult-note"><CalendarDays size={18}/><span>Share a few details and we'll be in touch to arrange an introductory conversation.</span></div><img src={photos.dining} alt="Sunlit dining area"/></div>
    <form className="enquiry-form reveal" onSubmit={submit}><div className="form-head"><b>01 / PROJECT ENQUIRY</b><small>Fields marked * are required.</small></div><div className="form-grid">
      <label>Your name *<input name="name" value={form.name} onChange={update} placeholder="Full name" required/></label>
      <label>Email address *<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label>
      <label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+91"/></label>
      <label>Project location<input name="location" value={form.location} onChange={update} placeholder="City / area"/></label>
      <label>What are you planning? *<select name="project" value={form.project} onChange={update}><option>Residential interior</option><option>Commercial interior</option><option>Renovation</option><option>Space planning</option><option>Styling consultation</option></select></label>
      <label>Approx. budget<select name="budget" value={form.budget} onChange={update}><option value="">Select a range</option><option>Under ₹5 lakh</option><option>₹5–10 lakh</option><option>₹10–20 lakh</option><option>₹20–40 lakh</option><option>₹40 lakh+</option><option>Not sure yet</option></select></label>
      <label className="wide">Tell us about your project<textarea name="message" value={form.message} onChange={update} rows="4" placeholder="Your space, ideas, timeline or anything you'd like us to know..."/></label>
    </div><div className="form-foot"><small>Submitting opens your email app with the enquiry details.</small><button className="btn dark" type="submit">Send enquiry <ArrowUpRight size={15}/></button></div>{submitted&&<p className="sent"><Check size={15}/> Your email app should open. Update the studio email address before publishing.</p>}</form>
  </section>;
}
function Footer() {
  return <footer className="footer" id="contact"><div className="footer-top"><a className="footer-logo" href="#home">OURA <em>&</em> CO.</a><p>Thoughtful spaces.<br/>Meaningful living.</p><a href="#consultation">Have a project in mind? <ArrowUpRight size={15}/></a></div><div className="footer-columns"><div><small>GET IN TOUCH</small><a href="mailto:hello@yourstudio.com"><Mail/> hello@yourstudio.com</a><a href="tel:+910000000000"><Phone/> +91 XXXXX XXXXX</a><p><MapPin/> New Delhi, India</p></div><div><small>EXPLORE</small><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#process">Our process</a></div><div><small>FOLLOW ALONG</small><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://facebook.com" aria-label="Facebook"><Facebook/></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin/></a></div></div></div><div className="legal"><span>© {new Date().getFullYear()} OURA & CO. All rights reserved.</span><a href="#home">Back to top ↑</a><span>Designed with intention.</span></div></footer>;
}
function App() {
  useEffect(()=>{const els=document.querySelectorAll('.reveal');if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('visible'));return}const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e));return()=>io.disconnect()},[]);
  return <><Header/><main><Hero/><About/><Services/><Projects/><Process/><Testimonial/><Consultation/></main><Footer/></>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
