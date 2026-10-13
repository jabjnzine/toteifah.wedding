# Anne & Pop — Wedding Invitation

เว็บการ์ดแต่งงานตัวอย่าง ใช้ Next.js App Router, TypeScript, Tailwind CSS v4 และ GSAP + ScrollTrigger โทน Wine Red / Powder Blue

## เริ่มใช้งาน

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

```bash
npm run typecheck
npm run build
```

Build เป็น static export ที่ `out/` สามารถโฮสต์บนบริการ static hosting ได้ ไม่มี backend ที่ต้องตั้งค่า

## เปลี่ยนรายละเอียดงาน

แก้ `src/lib/wedding.ts` สำหรับชื่อ วัน เวลา สถานที่ แผนที่ กำหนดการ รูปภาพ และลิงก์ RSVP วันที่ใช้เขตเวลา `+07:00` และควรแก้วันแสดงผลให้ตรงกัน

รูปในตัวอย่างใช้ Unsplash และไม่ใช่ภาพคู่บ่าวสาวจริง เปลี่ยนเป็นภาพของคุณ โดยวางใน `public/photos/` และใส่ path `/photos/your-image.jpg` ใน config

Photo credits: [d i e g o Authentic](https://unsplash.com/photos/KKvXIWSZnWs), [Alexander Mass](https://unsplash.com/photos/eDmxIBTVVBo), and the other illustrative event photographs on Unsplash.

เปลี่ยนข้อความเรื่องราวใน `src/app/page.tsx` และสีใน `src/app/globals.css` (`--wine`, `--blue`, `--cream`) ก่อนใช้จริง

ตัวอย่างแสดงวันที่ 20 ธันวาคม 2569 ตั้งค่า metadata ใน `src/app/layout.tsx` ให้เป็นโดเมนจริงเมื่อย้าย hosting

## ลูกเล่น

- GSAP staggered hero entrance และ ScrollTrigger reveal / image parallax
- เปิดซองด้วยการแตะตราประทับ
- Countdown, ดาวน์โหลดไฟล์ปฏิทิน `.ics` และ Google Maps
- แกลเลอรีพร้อม lightbox ใช้ปุ่มลูกศร เปลี่ยนภาพ และ Escape เพื่อปิด
- เพลงประกอบเบา ๆ สร้างด้วย Web Audio เริ่มเมื่อผู้ใช้กดเท่านั้น
- RSVP demo บันทึกเฉพาะ `localStorage` บนอุปกรณ์ผู้กรอก **ไม่ส่งข้อมูลถึงคู่บ่าวสาว** ใส่ `rsvpUrl` เพื่อใช้ Google Forms หรือระบบรับคำตอบจริง
- Responsive mobile / desktop, keyboard focus, native modal focus trap และ reduced-motion support

`npm run start` ใช้ไม่ได้กับ static export; สำหรับตรวจ production output ใช้ static file server ชี้ไปที่ `out/`
