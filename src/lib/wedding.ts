// All names, dates, stories, venue information and photos below are illustrative demo content.
// Replace these values with the couple's real wedding details before sharing with guests.
export const wedding = {
  bride: "Anne",
  groom: "Pop",
  brideThai: "แอน",
  groomThai: "ป๊อป",
  date: "2026-12-20T16:00:00+07:00",
  endDate: "2026-12-20T22:00:00+07:00",
  dateLabel: "20 December 2026",
  thaiDateLabel: "วันอาทิตย์ที่ 20 ธันวาคม 2569",
  venue: "The Glass House",
  venueThai: "เดอะ กลาสเฮาส์ · กรุงเทพฯ",
  venueAddress: "สถานที่ตัวอย่างสำหรับแสดงรูปแบบการ์ดเชิญ",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Glass+House+Bangkok",
  hashtag: "AnneAndPopForever",
  // Optional real collection URL, e.g. a Google Form. Empty uses a clearly labeled local demo.
  rsvpUrl: "",
  photos: {
    hero: "https://images.unsplash.com/photo-1617202000199-15fab1b09935?auto=format&fit=crop&w=1400&q=85",
    story: "https://images.unsplash.com/photo-1654994088648-e18f010da116?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      { src: "https://images.unsplash.com/photo-1617202000199-15fab1b09935?auto=format&fit=crop&w=1200&q=85", alt: "ภาพตัวอย่างคู่บ่าวสาวในวันแต่งงาน" },
      { src: "https://images.unsplash.com/photo-1654994088648-e18f010da116?auto=format&fit=crop&w=1200&q=85", alt: "ภาพตัวอย่างช่วงเวลาอบอุ่นของคู่รัก" },
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85", alt: "ภาพตัวอย่างบรรยากาศงานแต่งงาน" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85", alt: "ภาพตัวอย่างโต๊ะอาหารในงานฉลอง" },
    ],
  },
  schedule: [
    { time: "16:00", title: "Welcome & warm hugs", thai: "ลงทะเบียนและต้อนรับแขก", icon: "flower" },
    { time: "17:00", title: "We say ‘I do’", thai: "พิธีแลกคำสัญญา", icon: "rings" },
    { time: "18:00", title: "Dinner & celebration", thai: "ร่วมรับประทานอาหารและฉลองมงคลสมรส", icon: "glass" },
    { time: "20:00", title: "Dance the night away", thai: "สนุกไปด้วยกันในอาฟเตอร์ปาร์ตี้", icon: "music" },
  ],
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
