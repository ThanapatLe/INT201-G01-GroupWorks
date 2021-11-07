
//Closure
//export คือ การส่งออก function เพื่อนให้สามารถไปดรียกใช้ได้ที่ไฟล์อื่น
export function member(id, nickName, sex, age){ //สร้าง function ที่ใช้สร้าง/กำหนด property ให้ object 
        this._id = id
        this._nickName = nickName
        this._sex = sex
        this._age = age 
}

export function nightClub (mem){ //รับพารามิเตอร์ที่เป็น object
    let club = []
    mem._age >= 20 ? club.push(mem) : console.log(`อายุของคุณไม่ถึงเกณฑ์ กรุณารออายุ 20 ปีบริบูรณ์แล้วกลับมาใหม่`) 
    //เช็คเงื่อนไขว่า object mem ที่รับเข้ามามีค่ามากกว่าหรือเท่ากับ 20 ไหม 
    //ถ้าใช่ให้เพิ่ม mem นั้นลงใน array club ถ้าไม่จะแสดง string กลับไป
    function addMember(newMember){
        newMember._age >= 20 ? club.push(newMember) : console.log(`อายุของคุณไม่ถึงเกณฑ์ กรุณารออายุ 20 ปีบริบูรณ์แล้วกลับมาใหม่`)
        //เช็คเงื่อนไขว่า object newMember ที่รับเข้ามามีค่ามากกว่าหรือเท่ากับ 20 ไหม 
        //ถ้าใช่ให้เพิ่ม newMember นั้นลงใน array club ต่อหลัง element เดิมที่มีอยู่/ถูกเก็บรักษาไว้ไม่ได้ตายไปพร้อม function เมื่อจบการทำงาน
        //ถ้าไม่จะแสดง string กลับไป
        return `Members in the section : ${club.map(m => `${m._id}-${m._nickName}-${m._sex}-${m._age}`)}`
        //รีเทิร์นข้อความ และ ข้อมูลภายใน array โดยใช้การ map โดยเปลี่ยนรูปแบบการแสดงผลจากเดิมที่เป็น object ให้เป็นตามที่กำหนดใน arrow function
    }
    return addMember //รีเทิร์น function ออกไป
}


//Default parameters 
let products = [  //สร้างสินค้าเป็น array object ขึ้นมา
    { productName: 'snack', price: 20 },
    { productName: 'cola', price: 15 },
    { productName: 'sandwich', price: 25 }
]

function buy(item, amount = 1) { //รับ parameter เป็น item เเละ amount = 1
    let name = products[item].productName //ให้ name เก็บชื่อสินค้า ที่ index ตาม item
    let totalPrice = products[item].price * amount //ให้ totalPrice เก็บราคาสินค้า * จำนวนที่ซื้อ
    return `${name} ${amount} ea price ${totalPrice} baht`
}
//ถ้าเรียกใช้งาน function แต่ไม่ได้ใส่ parameter เมื่อเรียก ค่า default จะถูกใช้เป็นค่า parameter
console.log(buy(2)) //ในตัวอย่าง ซื้อ item ที่ 2 แต่ไม่ได้ใส่ amount ก็จะให้ amount default เป็น 1 ซึ่งเรากำหนดให้เป็นขั้นต่ำในการซื้อ

//ถ้าเรียกใช้งาน function แล้วใส่ค่า parameter เมื่อเรียก จะใช้ค่าที่ใส่เป็น default parameter
console.log(buy(2, 5)) //ในตัวอย่าง ซื้อ item ที่ 2 เเล้วใส่ amount ตัว default ก็จะตาม parameter ที่เราใส่ ก็คือ 5

console.log("\n")
