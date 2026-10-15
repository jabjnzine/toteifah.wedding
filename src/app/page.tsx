import Image from "next/image";
import { ArrowDown, ArrowRight, Flower2, Heart, MapPin, Music2, Wine } from "lucide-react";
import { FloralSprig, RibbonBow, TinyFlower } from "@/components/ornaments";
import { CalendarButton, Countdown, Gallery, InvitationButton, MusicButton, Navigation, RsvpButton, WeddingMotion } from "@/components/wedding-interactions";
import { wedding, weddingDate, weddingIdentity } from "@/lib/wedding";

function RingsIcon() {
  return <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><circle cx="18" cy="28" r="11"/><circle cx="31" cy="28" r="11"/><path d="m12 12 6-7 6 7-6 6-6-6ZM25 12l6-7 6 7-6 6-6-6Z"/></svg>;
}

export default function WeddingPage() {
  return <>
    <WeddingMotion/>
    <a className="skip-link" href="#main">ข้ามไปยังเนื้อหา</a>
    <Navigation/>
    <main id="main">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow" data-hero>A LITTLE NOTE, A LIFETIME OF LOVE</p>
            <div className="name-composition" data-hero>
              <FloralSprig className="hero-floral-left"/>
              <h1 id="hero-title"><span>{wedding.bride}</span><em>&</em><span>{wedding.groom}</span></h1>
              <FloralSprig className="hero-floral-right"/>
            </div>
            <p className="hero-subtitle" data-hero>are getting married.</p>
            <div className="hero-date" data-hero><span>{weddingDate.weekday}</span><span className="date-number">{weddingDate.day}</span><span>{weddingDate.month}<br/>{weddingDate.year}</span></div>
            <p className="hero-thai" data-hero>เรื่องราวของเรา กำลังจะมีบทใหม่<br/>และเราอยากมีคุณอยู่ในวันนั้น</p>
            <div className="hero-action" data-hero><InvitationButton/></div>
          </div>
          <div className="hero-visual" data-hero>
            <div className="photo-frame"><div className="hero-photo"><Image src={wedding.photos.hero} alt="Totei และ Fah นั่งคู่กันบนเนินหญ้าหน้ากังหันลม" fill priority sizes="(max-width: 700px) 90vw, 45vw"/></div><span className="photo-script">you, me & forever.</span></div>
            <RibbonBow className="hero-bow"/>
            <div className="date-stamp"><Heart size={16}/><span>SAVE<br/>OUR DATE</span><small>{weddingDate.stamp}</small></div>
            <p className="visual-caption">THE BEGINNING OF OUR ALWAYS</p>
          </div>
        </div>
        <a className="scroll-note" href="#story"><span>OUR STORY STARTS HERE</span><ArrowDown size={15}/></a>
      </section>

      <div className="love-strip" aria-hidden="true"><span>Two hearts.</span><TinyFlower/><span>One beautiful beginning.</span><TinyFlower/><span>A lifetime of us.</span><TinyFlower/></div>

      <section className="story-section section-space" id="story" aria-labelledby="story-title">
        <div className="story-picture" data-reveal><div className="story-photo"><Image src={wedding.photos.story} alt="ภาพคู่รักตัวอย่างในงานแต่งงาน เจ้าบ่าวจูบหน้าผากเจ้าสาว" fill sizes="(max-width: 700px) 85vw, 38vw"/></div><span className="story-handwritten">my favorite person ♡</span><div className="story-photo-number">01 — OUR LITTLE LOVE STORY</div></div>
        <div className="story-copy" data-reveal><p className="eyebrow">IT WAS ALWAYS YOU</p><h2 id="story-title">Some things<br/>are just <em>meant to be.</em></h2><TinyFlower className="tiny-flower my-7"/><p>จากคนแปลกหน้า สู่คนที่ทำให้ทุกวันธรรมดาเป็นวันพิเศษ<br className="hidden lg:block"/> จากบทสนทนาเล็ก ๆ สู่ความรักที่ค่อย ๆ เติบโต</p><p>เราอาจไม่รู้ว่าพรุ่งนี้จะเป็นอย่างไร<br/>แต่เรารู้ว่าอยากมีอีกคนอยู่ข้าง ๆ ในทุกวันต่อจากนี้</p><p className="story-signature">And so, our forever begins.</p><span className="demo-note">เรื่องราวและภาพประกอบตัวอย่าง</span></div>
      </section>

      <section className="celebration-section section-space" id="celebration" aria-labelledby="celebration-title">
        <div className="section-heading" data-reveal><p className="eyebrow">A DAY MADE FOR LOVE</p><h2 id="celebration-title">Let’s make it <em>unforgettable.</em></h2><p>ขอเชิญคุณมาเป็นส่วนหนึ่งในวันสำคัญของเรา</p></div>
        <div className="celebration-details" data-reveal>
          <div className="event-date"><p className="eyebrow">SAVE THE DATE</p><div className="calendar-date"><span>{weddingDate.shortMonth}</span><strong>{weddingDate.day}</strong><span>{weddingDate.year}</span></div><p>{wedding.thaiDateLabel}</p><CalendarButton/></div>
          <div className="event-invitation"><TinyFlower className="tiny-flower mx-auto"/><h3>Together is<br/>a beautiful place to be.</h3><p>พร้อมด้วยความรักจากครอบครัวของเรา<br/>ขอเรียนเชิญร่วมพิธีมงคลสมรสระหว่าง</p><div className="thai-couple">{wedding.brideThai} <em>&</em> {wedding.groomThai}</div><p>ณ {wedding.venueThai}</p></div>
        </div>
        <Countdown/>
        <div className="schedule-heading" data-reveal><p className="eyebrow">THE ORDER OF OUR DAY</p><h3>A little plan for a <em>big day.</em></h3></div>
        <div className="schedule-grid">
          {wedding.schedule.map((event, i) => <article className="schedule-item" data-reveal key={event.time}><div className="schedule-icon">{event.icon === "flower" ? <Flower2 strokeWidth={1}/> : event.icon === "rings" ? <RingsIcon/> : event.icon === "glass" ? <Wine strokeWidth={1}/> : <Music2 strokeWidth={1}/>}</div><span className="schedule-dot"/><time>{event.time}</time><h4>{event.title}</h4><p>{event.thai}</p><span className="schedule-number">0{i + 1}</span></article>)}
        </div>
      </section>

      <section className="dress-section" aria-labelledby="dress-title"><div className="dress-ornament"><RibbonBow/></div><div className="dress-heading" data-reveal><p className="eyebrow">DRESS UP, LOVE</p><h2 id="dress-title">A little color.<br/><em>A lot of love.</em></h2></div><div className="dress-details" data-reveal><p>แต่งตัวในโทนสีที่ชอบ แล้วมาสร้างความทรงจำด้วยกัน</p><div className="swatches"><div><span style={{ background: "#721c35" }}/><small>WINE RED</small></div><div><span style={{ background: "#b6ccdf" }}/><small>POWDER BLUE</small></div><div><span style={{ background: "#ece6dc" }}/><small>WARM IVORY</small></div><div><span style={{ background: "#b9a18f" }}/><small>SOFT TAUPE</small></div></div><p className="dress-footnote">หรือสีที่ทำให้คุณรู้สึกเป็นตัวเองที่สุด ♡</p></div></section>

      <section className="gallery-section section-space" id="gallery" aria-labelledby="gallery-title"><div className="gallery-heading" data-reveal><div><p className="eyebrow">THE LITTLE THINGS, THE BIG FEELINGS</p><h2 id="gallery-title">A few of our <em>favorite moments.</em></h2></div><p>ภาพประกอบตัวอย่าง<br/><span>แตะภาพเพื่อดูความทรงจำใกล้ขึ้น <ArrowRight size={14}/></span></p></div><Gallery/><p className="gallery-bottom">Every picture, a little piece of us.</p></section>

      <section className="venue-section" id="venue" aria-labelledby="venue-title"><div className="venue-illustration" data-reveal><div className="venue-art-frame"><svg viewBox="0 0 440 270" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M65 214h310M100 214V108l120-65 120 65v106M90 109l130-73 130 73M115 112l105-56 105 56M125 214V119h190v95M155 119v95M190 119v95M220 56v158M250 119v95M285 119v95M125 151h190M125 185h190"/><path d="M45 214v-63m0 25c-24-8-28-27-16-41 17 9 22 22 16 41Zm0-16c19-9 29-28 18-41-18 6-23 22-18 41ZM390 214v-75m0 30c-23-11-28-32-15-44 17 11 21 28 15 44Zm0-16c19-9 27-27 16-41-17 8-22 22-16 41Z"/><path d="M191 214v-29c0-38 58-38 58 0v29M55 228h335M165 244h110M78 112h8M354 112h9M211 93h18"/></svg><span>The Glass House</span><TinyFlower className="tiny-flower mx-auto mt-2"/></div></div><div className="venue-copy" data-reveal><p className="eyebrow">MEET US HERE</p><h2 id="venue-title">Where our<br/><em>forever begins.</em></h2><p className="venue-name">{wedding.venue}</p><p>{wedding.venueThai}<br/><span className="demo-note">{wedding.venueAddress}</span></p><a className="button button-wine mt-7" href={wedding.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16}/> เปิด Google Maps <ArrowRight size={16}/></a></div></section>

      <section className="rsvp-section" id="rsvp" aria-labelledby="rsvp-title"><FloralSprig className="rsvp-floral rsvp-floral-left"/><FloralSprig className="rsvp-floral rsvp-floral-right"/><div className="rsvp-copy" data-reveal><p className="eyebrow">OUR DAY IS BETTER WITH YOU IN IT</p><h2 id="rsvp-title">We saved you <em>a seat.</em></h2><p>ความสุขของเราจะสมบูรณ์ยิ่งขึ้น เมื่อมีคุณอยู่ด้วย<br/>บอกเราหน่อยนะ ว่าจะได้เจอกันไหม</p><RsvpButton/><p className="rsvp-note">RSVP ตัวอย่าง · ทดลองบันทึกคำตอบบนอุปกรณ์ของคุณ</p><div className="rsvp-divider"/><p className="hashtag">#{wedding.hashtag}</p><p className="hashtag-note">เก็บทุกความทรงจำดี ๆ ไว้ด้วยแฮชแท็กนี้</p></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark" href="#home" aria-label="กลับด้านบน">{weddingIdentity.firstInitial}<span>&</span>{weddingIdentity.secondInitial}.</a><p>With full hearts & so much love.<br/><span>{wedding.bride} & {wedding.groom} · {wedding.dateLabel}</span></p><div className="footer-note"><Heart size={13}/><span>การ์ดแต่งงานตัวอย่าง</span></div></footer>
    <MusicButton/>
  </>;
}
