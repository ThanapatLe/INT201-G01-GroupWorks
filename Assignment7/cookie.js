
//1. string.indexOf(searchvalue, start)
//return an index number here the specified searchvalue occurs for the first time,
//or -1 if it never occurs

//2. string.substring(start,end)
//start
//The substring() method extracts the characters from a string,
//between "start" (inclusive) and "end" (exclusive), not including "end" itself., and returns the new sub string.

export class CookieUtil {
    static get(name) {
      console.log(`all cookies: ${document.cookie}`);
      let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
      console.log(`cookieName = ${cookieName}`);//ไว้แสดงข้อมูลใน log ไม่มีผลกับ CODE!
      console.log(`cookieStart = ${cookieStart}`);//ไว้แสดงข้อมูลใน log ไม่มีผลกับ CODE!

      let cookieEnd = document.cookie.indexOf(';', cookieStart);
      cookieEnd = document.cookie.length;
      if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(';', cookieStart);
        console.log(`cookieEnd = ${cookieEnd}`);//ไว้แสดงข้อมูลใน log ไม่มีผลกับ CODE!
        if (cookieEnd == -1) {
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(
          document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
        );
        console.log(`cookieValue = ${cookieValue}`);//ไว้แสดงข้อมูลใน log ไม่มีผลกับ CODE!
      }
  
      return cookieValue;
    }
  
    static set(name, value, expires) {
      let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
    //   if (expires instanceof Date) {
    //     cookieText += `; expires=${expires.toUTCString()}`;
    //     // cookieText += `; expires=${expires}`;
    //   }
      console.log(`cookieText = ${cookieText}`);//ไว้แสดงข้อมูลใน log ไม่มีผลกับ CODE!
      document.cookie = cookieText;
    }
  
    static unset(name) {
      CookieUtil.set(name, '', new Date(0));
    }

    static deleteAllCookies() {
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        
      }
  }
  
  //set cookies
//   CookieUtil.set('name', 'Umaporn');
//   CookieUtil.set('book', 'JavaScript Beginner');
//   CookieUtil.set('hobby', 'reading', new Date('January 1, 2022'));
  
//   alert(`CookieUtil.get("name")#1: ${CookieUtil.get('name')}`); // "Umaporn"
//   alert(`CookieUtil.get("book")#1: ${CookieUtil.get('book')}`); // "JavaScript Beginner"
//   alert(`CookieUtil.get("hobby")#1: ${CookieUtil.get('hobby')}`);
  
  //overwrite cookies
//   CookieUtil.set('book', 'JavaScript Tutorial'); //overwrite because same path and name
//   alert(`CookieUtil.get("book")#2: ${CookieUtil.get('book')}`); // "JavaScript Beginner"
  
//   CookieUtil.set('hobby2', 'shopping', new Date('December 10, 2021')); //overwrite and change an expiration date
//   alert(`CookieUtil.get("hobby")#2: ${CookieUtil.get('hobby2')}`); //shopping
  
  // remove the cookies
  // CookieUtil.unset("name");
  // CookieUtil.unset('hobby2');
