export class CookieUtil {
  static get(name) {
    let cookieName = `${encodeURIComponent(name)}=`,
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null;
    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
         }
            cookieValue = decodeURIComponent(
              document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
             );
      console.log(`cookieValue = ${cookieValue}`);
    }
    return cookieValue;
  }
  static set(name, value, expires) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (expires instanceof Date) {
      cookieText += `; expires=${expires.toUTCString()}`;
      // cookieText += `; expires=${expires}`;
    }
    document.cookie = cookieText;
  }
  static unset(name) {
    CookieUtil.set(name, "", new Date(0));
  }
  static deleteAllCookies() {
    const cookies = document.cookie.split(";");//เช็คว่าถ้ามี ; จะทำแบ่งมูลออกเป็นอีกตำแหน่ง indexนึง เช่น [1;2,0] จะเป็น [1,2,0]
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    
  }
}
