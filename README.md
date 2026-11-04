# Totei & Fah — Wedding Invitation

เว็บการ์ดแต่งงาน ใช้ Next.js App Router, TypeScript, Tailwind CSS v4 และ GSAP + ScrollTrigger โทน Wine Red / Powder Blue

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

แก้ `src/lib/wedding.ts` สำหรับชื่อ ชื่อเต็ม ผู้ปกครอง วัน เวลา สถานที่ แผนที่ กำหนดการ รูปภาพ Dress code และลิงก์ RSVP วันที่ใช้เขตเวลา `+07:00` และควรแก้วันแสดงผลให้ตรงกัน

ภาพหลักและภาพแรกในแกลเลอรีใช้รูปที่ผู้ใช้เลือก (`public/photos/totei-fah-hero.jpg`) ภาพอื่นดึงจากไฟล์การ์ด PDF ของผู้ใช้ โดยคัดเฉพาะภาพคู่จริงที่ปรากฏในการ์ด เปลี่ยนรูปเพิ่มเติมได้โดยวางใน `public/photos/` และใส่ path `/photos/your-image.jpg` ใน config

รายละเอียดงานถอดจาก PDF สองหน้าที่ผู้ใช้ส่งเมื่อ 4 พฤศจิกายน 2569: เจ้าสาว นางสาวอรวรรณ เสดา (Fah), เจ้าบ่าว นายจำนงค์ เชื้อสร (Totei), วันเสาร์ที่ 20 มีนาคม 2570 ณ บ้านหนองประดิษฐ์ ตำบลโพธิ์กระสังข์ อำเภอขุนหาญ จังหวัดศรีสะเกษ

กำหนดการ: 08:09 แห่ขันหมาก, 09:09 พิธีสู่ขอ, 10:09 พิธีรับไหว้ผูกข้อมือ, 11:30 รับประทานอาหาร ไม่ได้ระบุเวลาสิ้นสุดในต้นฉบับ จึงไม่สร้าง `DTEND` ในไฟล์ปฏิทิน

ลิงก์แผนที่ถอดจาก QR โดยตรง: https://maps.app.goo.gl/9SxLfevWN7E1X4qt9 ภาพ QR แผนที่และยินดีออนไลน์เก็บไว้ใน `public/images/` ตามการ์ดต้นฉบับ ปุ่มยินดีออนไลน์แสดงและดาวน์โหลด QR เท่านั้น ไม่มีการทำธุรกรรมหรือเก็บข้อมูลการชำระเงิน

เปลี่ยนข้อความเรื่องราวใน `src/app/page.tsx` และสีใน `src/app/globals.css` (`--wine`, `--blue`, `--cream`) ก่อนใช้จริง

ชื่อที่แสดงหลักยังคงเรียง Totei & Fah ตามการปรับก่อนหน้า ส่วนเจ้าสาว/เจ้าบ่าวและผู้ปกครองในพิธีเรียงตามข้อมูลในการ์ด ตั้งค่า metadata ใน `src/app/layout.tsx` ให้เป็นโดเมนจริงเมื่อย้าย hosting

## ลูกเล่น

- GSAP staggered hero entrance และ ScrollTrigger reveal / image parallax
- เปิดซองด้วยการแตะตราประทับ
- Countdown, ดาวน์โหลดไฟล์ปฏิทิน `.ics` และ Google Maps
- แกลเลอรีพร้อม lightbox ใช้ปุ่มลูกศร เปลี่ยนภาพ และ Escape เพื่อปิด
- เพลงประกอบเบา ๆ สร้างด้วย Web Audio เริ่มเมื่อผู้ใช้กดเท่านั้น
- RSVP demo บันทึกเฉพาะ `localStorage` บนอุปกรณ์ผู้กรอก **ไม่ส่งข้อมูลถึงคู่บ่าวสาว** ใส่ `rsvpUrl` เพื่อใช้ Google Forms หรือระบบรับคำตอบจริง
- Responsive mobile / desktop, keyboard focus, native modal focus trap และ reduced-motion support

`npm run start` ใช้ไม่ได้กับ static export; สำหรับตรวจ production output ใช้ static file server ชี้ไปที่ `out/`
