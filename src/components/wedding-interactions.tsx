"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowLeft, ArrowRight, CalendarPlus, Check, Heart, Mail, Menu, Music2, VolumeX, X } from "lucide-react";
import { wedding, weddingDate, weddingIdentity } from "@/lib/wedding";
import { RibbonBow, TinyFlower } from "./ornaments";

export function WeddingMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-hero]", { y: 30, opacity: 0, duration: 1.25, stagger: 0.15, ease: "power3.out", clearProps: "all" });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, { y: 40, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 92%", once: true }, clearProps: "all" });
      });
      gsap.to(".hero-bow", { rotation: 5, y: -5, duration: 3.4, repeat: -1, yoyo: true, ease: "sine.inOut", transformOrigin: "50% 35%" });
      gsap.to(".hero-photo img", { yPercent: 7, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts.ready.then(refresh);
    return () => { media.revert(); window.removeEventListener("load", refresh); };
  }, []);
  return null;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label={`${weddingIdentity.names} หน้าแรก`}>{weddingIdentity.firstInitial}<span>&</span>{weddingIdentity.secondInitial}<span className="wordmark-dot">.</span></a>
    <nav aria-label="เมนูหลัก" className={isOpen ? "main-nav is-open" : "main-nav"}>
      {[ ["Our story", "story"], ["The celebration", "celebration"], ["Our moments", "gallery"] ].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>{label}</a>)}
      <a href="#rsvp" className="nav-rsvp" onClick={() => setIsOpen(false)}>RSVP <ArrowRight size={14} /></a>
    </nav>
    <button className="mobile-menu icon-button" aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={22} /> : <Menu size={22} />}</button>
  </header>;
}

export function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setRemaining(Math.max(0, new Date(wedding.date).getTime() - Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const values = remaining === null ? ["—", "—", "—", "—"] : [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60].map(v => String(v).padStart(2, "0"));
  return <div className="countdown-wrapper" data-reveal>
    <p className="eyebrow">{remaining === 0 ? "OUR FOREVER HAS BEGUN" : "COUNTING THE MOMENTS UNTIL FOREVER"}</p>
    <div className="countdown" role="timer" aria-label="เวลานับถอยหลังถึงวันแต่งงาน">
      {values.map((value, i) => <div key={i}><span>{value}</span><small>{["DAYS", "HOURS", "MINUTES", "SECONDS"][i]}</small></div>)}
    </div>
  </div>;
}

function Modal({ children, label, onClose, className = "" }: { children: ReactNode; label: string; onClose: () => void; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { dialog?.close(); document.body.style.overflow = previous; };
  }, []);
  return <dialog ref={ref} className={`modal ${className}`} aria-label={label} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <button className="modal-close icon-button" onClick={onClose} aria-label="ปิดหน้าต่าง"><X size={22}/></button>
    {children}
  </dialog>;
}

export function InvitationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnsealed, setIsUnsealed] = useState(false);
  const envelopeRef = useRef<HTMLDivElement>(null);
  function unseal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setIsUnsealed(true); return; }
    gsap.timeline({ onComplete: () => setIsUnsealed(true) })
      .to(".wax-seal", { scale: 1.12, rotation: -12, duration: 0.2 })
      .to(".wax-seal", { scale: 0, opacity: 0, duration: 0.35 })
      .to(envelopeRef.current, { y: 15, opacity: 0, duration: 0.4 }, "-=.1");
  }
  return <>
    <button className="button button-wine" onClick={() => { setIsUnsealed(false); setIsOpen(true); }}><Mail size={16} /> เปิดการ์ดเชิญ <ArrowRight size={16}/></button>
    {isOpen && <Modal label="การ์ดเชิญงานแต่งงาน" onClose={() => setIsOpen(false)} className="invitation-modal">
      {isUnsealed ? <div className="invitation-content">
        <RibbonBow className="invitation-bow"/>
        <p className="eyebrow">TOGETHER WITH OUR FAMILIES</p>
        <h2>{wedding.bride} <em>&</em> {wedding.groom}</h2>
        <p>มีความยินดีขอเรียนเชิญคุณร่วมเป็นส่วนหนึ่ง<br/>ในวันสำคัญและการเริ่มต้นบทใหม่ของเรา</p>
        <TinyFlower className="tiny-flower mx-auto my-6"/>
        <p>{wedding.thaiDateLabel}<br/>เวลา {weddingDate.time} น. เป็นต้นไป</p>
        <p className="mt-4">{wedding.venueThai}</p>
        <a href="#celebration" className="button button-wine mt-8" onClick={() => setIsOpen(false)}>ดูรายละเอียดงาน <ArrowDown size={16}/></a>
        <small className="demo-note block mt-6">การ์ดตัวอย่าง · ข้อมูลสมมติ</small>
      </div> : <div className="envelope-scene" ref={envelopeRef}>
        <p className="eyebrow">A LITTLE LETTER, JUST FOR YOU</p>
        <div className="envelope"><div className="envelope-flap"/><button className="wax-seal" onClick={unseal} aria-label="เปิดซองการ์ดเชิญ">{weddingIdentity.firstInitial}&{weddingIdentity.secondInitial}</button><span className="envelope-name">with love, {weddingIdentity.names}</span></div>
        <p className="mt-8 text-sm">แตะตราประทับ เพื่อเปิดความสุขของเรา</p>
      </div>}
    </Modal>}
  </>;
}

export function CalendarButton() {
  function downloadCalendar() {
    const formatDate = (value: string) => new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const escape = (value: string) => value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
    const content = ["BEGIN:VCALENDAR", "VERSION:2.0", `PRODID:-//${escape(weddingIdentity.names)}//Wedding//TH`, "BEGIN:VEVENT", "UID:anne-pop-wedding-20261220@example.com", `DTSTAMP:${formatDate(new Date().toISOString())}`, `DTSTART:${formatDate(wedding.date)}`, `DTEND:${formatDate(wedding.endDate)}`, `SUMMARY:${escape(`${wedding.bride} & ${wedding.groom} Wedding (Demo)`)}`, `LOCATION:${escape(wedding.venueThai)}`, "DESCRIPTION:การ์ดแต่งงานตัวอย่าง - ข้อมูลสมมติ", "END:VEVENT", "END:VCALENDAR", ""].join("\r\n");
    const url = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = `${weddingIdentity.fileSlug}-wedding.ics`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <button className="text-link" onClick={downloadCalendar}><CalendarPlus size={16}/> บันทึกลงปฏิทิน <ArrowRight size={15}/></button>;
}

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const photos = wedding.photos.gallery;
  const move = (direction: number) => setSelected(current => current === null ? null : (current + direction + photos.length) % photos.length);
  return <>
    <div className="gallery-grid">
      {photos.map((photo, i) => <button className={`gallery-item gallery-item-${i + 1}`} data-reveal key={photo.src} onClick={() => setSelected(i)} aria-label={`ขยาย${photo.alt}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 70vw, 28vw"/>
        <span className="gallery-caption"><span>0{i + 1} / A moment to keep</span><ArrowRight size={20}/></span>
      </button>)}
    </div>
    {selected !== null && <Modal label="แกลเลอรีภาพตัวอย่าง" className="gallery-modal" onClose={() => setSelected(null)}>
      <div className="lightbox" onKeyDown={e => { if(e.key === "ArrowRight") move(1); if(e.key === "ArrowLeft") move(-1); }}>
        <Image src={photos[selected].src} alt={photos[selected].alt} width={1200} height={1000} className="lightbox-image" sizes="90vw"/>
        <div className="lightbox-controls"><button className="icon-button" onClick={() => move(-1)} aria-label="รูปก่อนหน้า"><ArrowLeft/></button><p aria-live="polite">{selected + 1} / {photos.length}</p><button className="icon-button" onClick={() => move(1)} aria-label="รูปถัดไป"><ArrowRight/></button></div>
      </div>
    </Modal>}
  </>;
}

export function RsvpButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"form" | "success">("form");
  const [attendance, setAttendance] = useState("yes");
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    if (!String(values.name ?? "").trim()) { setError("กรุณากรอกชื่อของคุณ"); return; }
    try {
      localStorage.setItem("anne-pop-demo-rsvp", JSON.stringify({ ...values, guests: attendance === "yes" ? values.guests : "0", savedAt: new Date().toISOString() }));
      setStatus("success"); setError("");
    } catch { setError("เบราว์เซอร์ไม่อนุญาตให้บันทึกข้อมูล กรุณาลองอีกครั้ง"); }
  }
  return <>
    {wedding.rsvpUrl ? <a className="button button-cream" href={wedding.rsvpUrl} target="_blank" rel="noreferrer">ตอบรับเข้าร่วมงาน <ArrowRight size={17}/></a> : <button className="button button-cream" onClick={() => { setStatus("form"); setError(""); setIsOpen(true); }}>ตอบรับเข้าร่วมงาน <ArrowRight size={17}/></button>}
    {isOpen && <Modal label="ตอบรับการเข้าร่วมงานตัวอย่าง" onClose={() => setIsOpen(false)} className="rsvp-modal">
      {status === "success" ? <div className="rsvp-success"><div className="success-heart"><Heart size={35}/></div><p className="eyebrow">A LITTLE NOTE, SAVED WITH LOVE</p><h2>Thank you, lovely.</h2><p>บันทึกคำตอบตัวอย่างไว้ในเบราว์เซอร์นี้แล้ว<br/>ยังไม่ได้ส่งข้อมูลถึงคู่บ่าวสาว</p><button className="button button-wine mt-8" onClick={() => setIsOpen(false)}>เรียบร้อย <Check size={16}/></button></div> : <form onSubmit={submit} className="rsvp-form">
        <p className="eyebrow">WE SAVED YOU A SEAT</p><h2>Will you join us?</h2><p className="demo-note">แบบฟอร์มตัวอย่าง · บันทึกเฉพาะบนอุปกรณ์นี้</p>
        <label htmlFor="guest-name">ชื่อของคุณ <span aria-hidden="true">*</span></label><input id="guest-name" name="name" autoComplete="name" placeholder="ชื่อ–นามสกุล" required maxLength={100}/>
        <fieldset><legend>คุณจะมาร่วมฉลองกับเราไหม?</legend><div className="attendance-options"><label><input type="radio" name="attendance" value="yes" checked={attendance === "yes"} onChange={() => setAttendance("yes")}/> ยินดีไปร่วมงาน</label><label><input type="radio" name="attendance" value="no" checked={attendance === "no"} onChange={() => setAttendance("no")}/> ส่งใจไปร่วมยินดี</label></div></fieldset>
        {attendance === "yes" && <><label htmlFor="guest-count">จำนวนผู้เข้าร่วม (รวมตัวคุณ)</label><select id="guest-count" name="guests" defaultValue="1">{[1,2,3,4,5].map(n => <option value={n} key={n}>{n} ท่าน</option>)}</select></>}
        <label htmlFor="guest-message">ฝากคำอวยพรถึงเรา</label><textarea id="guest-message" name="message" placeholder="เขียนข้อความน่ารัก ๆ ได้ที่นี่…" rows={3} maxLength={1000}/>
        {error && <p role="alert" className="form-error">{error}</p>}
        <button type="submit" className="button button-wine w-full mt-5">บันทึกคำตอบตัวอย่าง <Heart size={16}/></button>
      </form>}
    </Modal>}
  </>;
}

export function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); void audioRef.current?.close(); }, []);
  async function toggleMusic() {
    if (isPlaying) { if (timerRef.current) clearInterval(timerRef.current); await audioRef.current?.close(); audioRef.current = null; setIsPlaying(false); return; }
    try {
      const audio = new AudioContext(); audioRef.current = audio; await audio.resume();
      const notes = [261.63, 329.63, 392, 523.25, 440, 392, 329.63, 293.66, 261.63, 349.23, 440, 523.25, 493.88, 392, 329.63, 293.66];
      let cursor = 0;
      function playNote() {
        const oscillator = audio.createOscillator(); const gain = audio.createGain();
        oscillator.type = "sine"; oscillator.frequency.value = notes[cursor++ % notes.length];
        gain.gain.setValueAtTime(0, audio.currentTime); gain.gain.linearRampToValueAtTime(.055, audio.currentTime + .035); gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + 1.7);
        oscillator.connect(gain); gain.connect(audio.destination); oscillator.start(); oscillator.stop(audio.currentTime + 1.8);
      }
      playNote(); timerRef.current = setInterval(playNote, 650); setIsPlaying(true); setHasError(false);
    } catch { setHasError(true); }
  }
  return <div className="music-widget"><span>{hasError ? "เปิดเสียงไม่ได้" : isPlaying ? "a little love song" : "a little music?"}</span><button className={isPlaying ? "music-button is-playing" : "music-button"} onClick={toggleMusic} aria-label={isPlaying ? "ปิดเพลงประกอบ" : "เปิดเพลงประกอบ"} aria-pressed={isPlaying}>{isPlaying ? <Music2 size={18}/> : <VolumeX size={18}/>}</button></div>;
}
