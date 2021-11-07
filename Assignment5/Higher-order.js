//High Order Functions
function calculate(opera, FirstValue, numbers) {             //ฟังก์ชั่น calculate รับพารามิตเตอร์ opera, FirstValue, numbers 
    let total = FirstValue;                                  //เก็บ FirstValue ในตัวแปร total 
    for (const number of numbers) {                          //วนลูปทุกตัวในตัวแปร number
      total = opera(total, number);                          //เรียกใช้ฟังก์ชันจากพารามิตเตอร์ opera โดยในฟังก์ชั่นมีพารามิตเตอร์เป็น total กับ number และ คืนค่า total
    }
    return total;                                         
  }
  function sum(n1, n2) {                                     //ฟังก์ชัน sum รับค่าพารามิตเตอร์เป็น n1 กับ n2 และ คืนค่า n1 + n2
    return n1 + n2;                                          
  }
  function multiply(n1, n2) {                                //ฟังก์ชัน multiply รับค่าพารามิตเตอร์เป็น n1 กับ n2 และ คืนค่า n1 * n2
    return n1 * n2;                                          
  }
  function minus(n1, n2) {                                   //ฟังก์ชัน minus รับค่าพารามิตเตอร์เป็น n1 กับ n2 และ คืนค่า n1 - n2  
    return n1 - n2;                                          
  }
  function devine(n1, n2) {                                 //ฟังก์ชัน devine รับค่าพารามิตเตอร์เป็น n1 กับ n2 และ คืนค่า n1 / n2
    return n1 / n2;                                         
  }
 
  console.log(calculate(sum, 3, [1, 2, 4]));  //เป็นการเรียกใช้ fucntion calculate โดยรับ sum , 3 และ array ที่เก็บค่าของ [1,2,4] เข้าไปที่ parameter
                                              //โดยหลังจาก function calculate ทำงาน ก็จะส่งค่าเข้าไปที่ fucntion sum ต่อ เนื่องจาก parameter ที่รับมานั้น เกิดเป็น function
  console.log(calculate(multiply, 1, [1, 2, 4]));
  
    