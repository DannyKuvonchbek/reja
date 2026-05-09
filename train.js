
// F-TASK
function findDoublers(str) {
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        let harf = str[i];

        if (seen[harf]) {
            return true;
        }

        seen[harf] = true;
    }

    return false;
}
console.log(findDoublers("hello"));

// E-TASK
/*
function getReverse(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
} 

console.log(getReverse("hello"));
*/

// D-TASK

/*
function checkContent(str1, str2) {

    let roll1 = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        roll1 += str1[i];
    }
    
    return roll1 === str2;
}

console.log(checkContent("mitgroup", "puorgtim"));
console.log(checkContent("mitgroup", "gmtiprou"));
*/

// C-TACK

/*
class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qoldiq(vaqt) {
        console.log(`Hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`);
    }

    sotish(mahsulot, miqdor) {
        if (mahsulot === "non") {
            this.non -= miqdor;
        } else if (mahsulot === "lag'mon" || mahsulot === "lagmon") {
            this.lagmon -= miqdor;
        } else if (mahsulot === "cola") {
            this.cola -= miqdor;
        }

        console.log(`${mahsulot}dan ${miqdor}ta sotildi`);
    }

    qabul(mahsulot, miqdor) {
        if (mahsulot === "non") {
            this.non += miqdor;
        } else if (mahsulot === "lag'mon" || mahsulot === "lagmon") {
            this.lagmon += miqdor;
        } else if (mahsulot === "cola") {
            this.cola += miqdor;
        }

        console.log(`${mahsulot}dan ${miqdor}ta qabul qilindi`);
      
    }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq("20:40");
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq("20:50");
*/

// B-TASK: ad2a54y79wet0sfgb9

/*
function countDigits(matn) {
    let sonlarSoni = 0;
    for (let i = 0; i < matn.length; i++) {
        let harf = matn[i];
        if (harf >= '0' && harf <= '9') {
            sonlarSoni++;
        }
    }
    return sonlarSoni;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
*/

// A-TASK: executed

/*

function countLetter(letter, text) {
  let count = 0;
  for (let i of text) {
    if (i === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("e", "executed"));

*/

//  Callback function

/*

console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling",//0-20
    " togri boshliq tanlang va koproq hato qiling", //20-30
    "uzingiz ishlashingizni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling ", //50-60
    "endi dam oling , foydasi yuq endi", //60
];

function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if (a <=20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else { 
        //setTimeout(function () {
        //callback(null, list[5]);
       // }, 5000);
    
        setInterval(function () {
        callback(null, list[5]);
       }, 1000);
    }
} 

console.log("passed here 0");
maslahatBering(65, (err, data) => {
    if (err) console.log('Error:', err);
    console.log('javob:', data);
});
console.log("passed here 1");



// --- ASYnchronous function ----

/*

console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling",//0-20
    " togri boshliq tanlang va koproq hato qiling", //20-30
    "uzingiz ishlashingizni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling ", //50-60
    "endi dam oling , foydasi yuq endi", //60
];

 async function maslahatBering(a) {
    if (typeof a !== "number") throw new Error("insert a number");
    else if (a <=20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 3000); 
        //return list[5];
        // setTimeout(function () {
        // callback(null, list[5]);
        // }, 5000);
    });
 }
}

// then/catch
//console.log("passed here 0");
//maslahatBering(65)
// .then((data) => {
//  console.log('javob:', data);
// })
//.catch((err) => {
//    console.log('ERROR:', err);
// });
//console.log("passed here 1");

//async/await
async function run() {
    let javob = await maslahatBering(25);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
    javob = await maslahatBering(65);
    console.log(javob);
}
run();

*/
