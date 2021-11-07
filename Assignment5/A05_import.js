//import
import {nightClub, member} from "./A05.js" //การนำ function จากในไฟล์อื่นมาใช้ที่ไฟล์นี้


let newMember = nightClub(new member('001', 'boss','male',19)) 
//สร้างและส่ง object ที่เป็น member ไปที่ function nightClub จากนั้นเมื่อ function ทำงานเสร็จจะรีเทิร์น function addMember มาเก็บในตัวแปร newMember
console.log(newMember(new member ('002', 'jom','male',19)))
//สร้างและส่ง object ไปที่ function addMember ซึ่งถูกเก็บใน newMember จากนั้นนำผลลัพธ์ที่เกิดขึ้นมาแสดง 
console.log(newMember(new member('049', 'tle','male',20)))
//สร้างและส่ง object ไปที่ function addMember ซึ่งถูกเก็บใน newMember จากนั้นนำผลลัพธ์ที่เกิดขึ้นมาแสดง 

