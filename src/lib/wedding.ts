// Wedding details transcribed and visually verified from the user's two-page invitation.
// The hero photo is the photo previously selected by the user.
export const wedding = {
  bride: "Fah",
  groom: "Totei",
  brideThai: "Fah",
  groomThai: "Totei",
  brideFullName: "นางสาวอรวรรณ เสดา",
  groomFullName: "นายจำนงค์ เชื้อสร",
  brideParents: ["นายดอน เสดา", "นางทองดี เสดา"],
  groomParents: ["นายคำเพียร เชื้อสร", "นางสำรวย เชื้อสร"],
  date: "2027-03-20T08:09:00+07:00",
  // The invitation does not specify an ending time. Calendar events omit DTEND.
  dateLabel: "20 March 2027",
  thaiDateLabel: "วันเสาร์ที่ 20 มีนาคม 2570",
  venue: "บ้านหนองประดิษฐ์",
  venueThai: "บ้านหนองประดิษฐ์",
  venueAddress: "ตำบลโพธิ์กระสังข์ อำเภอขุนหาญ จังหวัดศรีสะเกษ",
  mapUrl: "https://maps.app.goo.gl/9SxLfevWN7E1X4qt9",
  mapQr: "/images/wedding-map-qr.png",
  congratulationsQr: "/images/wedding-congratulations-qr.png",
  hashtag: "ToteiAndFahForever",
  // Optional real collection URL, e.g. a Google Form. Empty uses a clearly labeled local demo.
  rsvpUrl: "",
  dressCode: [
    { color: "#004aad", label: "ROYAL BLUE", thai: "น้ำเงิน" },
    { color: "#89c9e9", label: "SKY BLUE", thai: "ฟ้า" },
    { color: "#8e1e1c", label: "WINE RED", thai: "แดงไวน์" },
    { color: "#e591b4", label: "SOFT PINK", thai: "ชมพู" },
  ],
  photos: {
    hero: "/photos/totei-fah-hero.jpg",
    story: "/photos/totei-fah-portrait.jpg",
    gallery: [
      { src: "/photos/totei-fah-hero.jpg", alt: "Totei และ Fah นั่งคู่กันบนเนินหญ้าหน้ากังหันลม" },
      { src: "/photos/totei-fah-portrait.jpg", alt: "Fah ถือช่อดอกไม้และมอง Totei บนเนินหญ้า" },
      { src: "/photos/totei-fah-hill.jpg", alt: "Totei และ Fah จับมือกันบนเนินหญ้าท่ามกลางกังหันลม" },
    ],
  },
  schedule: [
    { time: "08:09", title: "Khan Maak procession", thai: "แห่ขันหมาก", icon: "flower" },
    { time: "09:09", title: "Engagement ceremony", thai: "พิธีสู่ขอ", icon: "rings" },
    { time: "10:09", title: "Blessings & wrist tying", thai: "พิธีรับไหว้ผูกข้อมือ", icon: "heart" },
    { time: "11:30", title: "Lunch with our loved ones", thai: "รับประทานอาหาร", icon: "meal" },
  ],
};

export const weddingIdentity = {
  // Preserve the display order previously requested, independently of ceremony roles.
  firstName: wedding.groom,
  secondName: wedding.bride,
  firstInitial: wedding.groom.charAt(0).toLowerCase(),
  secondInitial: wedding.bride.charAt(0).toLowerCase(),
  names: `${wedding.groom} & ${wedding.bride}`,
  fileSlug: `${wedding.groom}-${wedding.bride}`.toLowerCase(),
};

const ceremony = new Date(wedding.date);
const datePart = (options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Bangkok", ...options }).format(ceremony);

export const weddingDate = {
  weekday: datePart({ weekday: "long" }).toUpperCase(),
  day: datePart({ day: "2-digit" }),
  month: datePart({ month: "long" }).toUpperCase(),
  shortMonth: datePart({ month: "short" }).toUpperCase(),
  year: datePart({ year: "numeric" }),
  stamp: datePart({ day: "2-digit", month: "2-digit", year: "2-digit" }).replaceAll("/", "."),
  time: datePart({ hour: "2-digit", minute: "2-digit", hour12: false }),
};
