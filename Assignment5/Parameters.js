//สร้างสินค้าเป็น array object ขึ้นมา
let products = [  
    { productName: 'Doritos', price: 20 },
    { productName: 'Coke', price: 15 },
    { productName: 'Farm house', price: 25 },
    { productName: 'M150', price: 10 },
    { productName: 'Mentos', price: 10 }
]
 
//Default parameters 
function buy(item, amount = 1) { //รับ parameter เป็น item เเละ amount โดยให้ amount เป็น Default parameter = 1
    let name = products[item].productName //ให้ name เก็บชื่อสินค้า ที่ index ตาม item
    let totalPrice = products[item].price * amount //ให้ totalPrice เก็บราคาสินค้า * จำนวนที่ซื้อ
    return `${name} ${amount} ea price ${totalPrice} baht`
}
//ถ้าเรียกใช้งาน function แต่ไม่ได้ใส่ parameter เมื่อเรียก ค่า default จะถูกใช้เป็นค่า parameter
console.log(buy(3)) //ในตัวอย่าง ซื้อ item ที่ 2 แต่ไม่ได้ใส่ amount ก็จะให้ amount default เป็น 1 ซึ่งเรากำหนดให้เป็นขั้นต่ำในการซื้อ
//ถ้าเรียกใช้งาน function แล้วใส่ค่า parameter เมื่อเรียก จะใช้ค่าที่ใส่เป็น default parameter
console.log(buy(3, 13)) //ในตัวอย่าง ซื้อ item ที่ 2 เเล้วใส่ amount ตัว default ก็จะตาม parameter ที่เราใส่ ก็คือ 5
console.log("\n")
 
//Rest parameters
function importOrder(...manyItem) { //รับ parameter หลายตัว
    //.reduce คือการเอาพารามิเตอร์แรก และพารามิเตอร์ที่สองเป็นค่าเริ่มต้นสำหรับเมธอดเพื่อทำงานต่อ 
    //โดยในตัวอย่างเราจะเอา prev กับ curr มารวมกัน เเล้วคั่นด้วย ,
    return manyItem.reduce(function (prev, curr) {
        return prev + ", " + curr;
    });
}
//โดยเราจะใส่ parameter หรือ itemOrder ของเราเท่าไหร่ก็ได้ ไม่จำกัด
console.log("The import order is ")
console.log(importOrder("Pepsi", "SevenUp", "Oreo", "Bento", "Pizza", "Chocobo"))
console.log("\n")
 
//Destructuring
//Destruct ภายใน Arguments ของ Function ด้วยการใส่ ชื่อของ Properties ที่เราต้องการ ลงในวงเล็บ
function infoItem({productName,price}){ //ต้องการ productName กับ price
    return `1 piece of ${productName}, price ${price} baht`
}
//แสดงข้อมูลสินค้าสินค้า Index ที่ 2
console.log(infoItem(products[2]))