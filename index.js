// import { logInfo } from "./info.js";

// const windows = {
//     name: "alex",
//     fgdgdfgdfgdf: function () {
//         console.log(this)
//     }
// }
// windows.fgdgdfgdfgdf();



// ========================
// function myFunc () {
//     console.log(this)
// }

// const alex = {
//     name: "Alex",
//     func: myFunc
// }

// alex.func();

// const x = function () {

// }

// ==================== 
// const getContext = function () {
//     console.log(this);
// } 
// getContext(); //window || undefined

// =======================
// const getContext = function () {
//     console.log(this);
// }

// const user = {
//     name: "Alex",
//     age: 25,
//     getContext,
// }

// user.getContext(); //{}
// getContext();//undefined

// ========================

// const user = {
//     name: "Alex",
//     age: 25,
//     getContext: function () {
//         console.log(this);
//     },
// }

// const user1 = user;
// console.log(user1);

// // user1.name = "Nikita";
// // console.log(user)

// const func = function () {
//     console.log('Hello');
// }

// console.log(typeof func);

// func.newFunc = function () {
//     console.log("HEllo 1");
// }

// func.newFunc()

// user.getContext()

// window.getInfo = function () {
//     console.log(this);
// }
// getInfo()//window

// console.dir(window);

// ==================== () => {} ==========================

// const getUserInfo = () => {
//     console.log(this);
// }

// const user = {
//     name: "Alex",
//     getUserInfo: () => {
//         console.log(this);
//     }
// }

// user.getUserInfo()


// ===================================

// const getContext = function () {
//     console.log('this', this);
// }

// const functionsForUser = {

//     getProperties(name, age, course, status) {
//         this.name = name;
//         this.age = age;
//         this.course = course;
//         this.status = status;

//         console.log(this);

//         console.group(`${this.name} properties:`);
//         console.log('Name:', this.name);
//         console.log('Age:', this.age);
//         console.log('Course:', course);
//         console.log('Status:', status);
//         console.groupEnd();
//     }
// }
// const alex = {
//     name: "Alex",
//     age: 25,
//     info: ['BC#20', 'student']
// }
// const nikita = {
//     name: "Nikita",
//     age: 30,
//     info: ['BC#19', 'student']
// }

// functionsForUser.getProperties(
//     nikita.name,
//     nikita.age,
//     nikita.info[0],
//     nikita.info[1]
// )



// ============================

// function getProperties() {
//     console.log(this);
//     console.group(`${this.name} properties`);
//     console.log('Name:', this.name);
//     console.log('Age:', this.age);
//     console.log('Course:', this.course);
//     console.log('Status:', this.status);
//     console.groupEnd();
// }
// const nikita = {
//     name: "Nikita",
//     age: 30,
//     course: 'BC#19',
//     status: 'student'
// }
// const alex = {
//     name: "Alex",
//     age: 32,
//     course: 'BC#29',
//     status: 'teacher'
// }
// getProperties.call(nikita);
// const getProps = getProperties.bind(nikita);
// const getProps1 = getProperties.bind(alex);

// document.querySelector('.clickButton').addEventListener('click', (e) => logInfo(e, "Hello"))
// document.querySelector('.clickButton1').addEventListener('click', () => getProperties.call(alex))

// functionsForUser.getProperties.call(nikita)
// getProperties.call(nikita)

// =============================

// const alex = {
//     name: "Alex",
//     getName: () => {
//         console.log(this);
//     }
// }

// const getName = new Function();
// console.log(alex.getName.bind(alex)());

// =========================
// const test = {
//     name: "Alex",
//     createContext: function () {
//         return function () {
//             console.log(this);
//             // console.log(arguments);
//         }
//     },
//     createArrowContext: function () {
//         return () => {
//             console.log(this);
//             // console.log(arguments);
//         }
//     }
// }

// const anonim = test.createContext();
// const arrow = test.createArrowContext();

// anonim(); //window
// arrow(); // test

// const getData = function () {
//     console.log(this);
// }
// // getData()

// const object = {
//     name: "Alex",
//     getData: function () {
//         console.log(this);
//     }
// }

// const get = function () {
//     console.log(this);
// }
// get()

// =========================


// const user = {
//     name: 'Mango',
//     getContext: function () {
//         console.log(this)
//         return () => {
//             console.log('this in showThis: ', this);
//         }

//     }
// }

// const alex = {
//     name: "Alex"
// }

// const result = user.getContext.bind(alex);
// result()();



// function getSomething() {
//     return function () {
//         console.log("1")
//         return function () {
//             console.log("2")
//             return function () {
//                 console.log("3")
//                 return function () {
//                     console.log("4")
//                     return function () {
//                         console.log("5")
//                         return function () {
//                             console.log("Hello")
//                         }()
//                     }()
//                 }()
//             }()
//         }()
//     }()
// }
// getSomething();

// =================================
// const getContext = () => {
//     console.log(this)//undefined
// }

// function getContext () {
//     console.log(this)//{alex}
// }
// const getContext = function () {
//     console.log(this)//{alex}
// }

// const alex = {
//     name: "alex"
// }
// getContext.call(alex)



// ================ self ==================
// function getSomething() {
//     console.log(this)
//     return function () {
//         console.dir(this)
//         return function () {
//             console.log(this)
//             return function () {
//                 console.log(this)
//                 return function () {
//                     console.log(this)
//                     return function () {
//                         console.log(this)
//                     }
//                 }
//             }
//         }
//     }
// }
// const nikita = {
//     name: "Nikita"
// }
// const result = getSomething.bind(nikita);
// console.dir(result)

// const nikita = {
//     name: "nikita",
//     getContext(){
//         // console.log(this)
//         function getInnerContext () {
//             console.log('this', this)
//         }
//         const getcont = getInnerContext.bind(nikita);
//         getcont()
//     }
// }

// // window.Function()
// nikita.getContext.call(nikita);

// const nikita2 = {
//     getContext: {
//         this: null,
//         getInnerContext: {
//             this: null
//         }
//     }
// }





// =============================
// const hotel = {
//     name: 'Resort hotel',
//     showThis: function showThis() {
//       const context = this;
//       const fn = function fn() {
//         console.log('this in fn: ', context);
//       };

//       fn();
//       console.log('this in showThis: ', this);
//     },
//   };

//   hotel.showThis();
//   // this in fn: {name: 'Resort hotel', showThis: ƒ}
//   // this in showThis: {name: 'Resort hotel',showThis: ƒ}

//  ================== !!!!!!!!! ===============
// const hotel = {
//     name: 'Resort hotel',
//     showThis: function showThis() {
//         const fn = () => {
//             console.log('this in fn: ', this); //{}
//         };
//         fn();
//     },
// };

// hotel.showThis();

// === ИЛИ =====
// const hotel = {
//     name: 'Resort hotel',
//     showThis: function showThis() {
//         const fn = () => console.log('this in fn: ', this); 
//         fn();
//     },
// };

// hotel.showThis();

// ===================================
// const hotel = {
//     name: 'Resort hotel',
//     showThis: () => console.log('this:', this)
// };

// const user = {
//     name: "Alex"
// }

//     hotel.showThis.call(user);
// ==================================

// const numbers = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i])
// }

// console.log("====================")
// for (const number of numbers) {
//     console.log(number)
// }
// console.log("====================")
// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.forEach(element => {
//     element += 1
// });
// console.dir(numbers)
// console.log('numbers', numbers)


// const users = [
//     { id: "fsgfdhfjgh", name: "Alex" },
//     { id: "wqweqeweqw", name: "Nikita" },
//     { id: "fsgfddfsffdhfjgh", name: "Potap" },
//     { id: "dfsadffsdfd", name: "Govard" },
//     { id: "ffdsdsgsdsa", name: "Flex" },
// ]
// users.forEach((user, index, numbers) => {
//     if (user.id === "dfsadffsdfd") {
//         user.name = "Mike"
//     }
//     // console.log(number)
//     // console.log(index)
//     // console.log(numbers)
// })

// ================ map ===========================
// const users = [
//     { id: "fsgfdhfjgh", name: "Alex" },
//     { id: "wqweqeweqw", name: "Nikita" },
//     { id: "fsgfddfsffdhfjgh", name: "Potap" },
//     { id: "dfsadffsdfd", name: "Govard" },
//     { id: "ffdsdsgsdsa", name: "Flex" },
// ]

// const result = users.map(user => {
//     return {...user, name: user.name + '...'}
// })

// console.log(result)

// ========================================
// const users = [
//     { id: "fsgfdhfjgh", name: "Alex" },
//     { id: "wqweqeweqw", name: "Nikita" },
//     { id: "fsgfddfsffdhfjgh", name: "Potap" },
//     { id: "dfsadffsdfd", name: "Govard" },
//     { id: "ffdsdsgsdsa", name: "Alex" },
// ]

// const result = users.find(({name}) => name === "Alex")
// console.log(result);
// ==========================================

// const users = [
//     { id: "fsgfdhfjgh", name: "Alex" },
//     { id: "wqweqeweqw", name: "Nikita" },
//     { id: "fsgfddfsffdhfjgh", name: "Potap" },
//     { id: "dfsadffsdfd", name: "Govard" },
//     { id: "ffdsdsgsdsa", name: "Alex" },
// ]

// const result = users.filter(user => user.name !== "Alex");
// console.log(result)
// ---------

// const shop = {
//     products: [
//         { id: "fdssdsdd", name: "Milk", price: 30 },
//         { id: "fdfds", name: "Water", price: 40 },
//         { id: "fdssdsfsdfsdfdd", name: "Juice", price: 50 },
//         { id: "fdsssdfsdfdsdd", name: "Compot", price: 60 },
//         { id: "fdsdfsdssdsdd", name: "Mors", price: 70 },
//     ]
// }

// console.log(shop)
// const result = shop.products
//     .filter(product => product.name === "Juice")
//     .map(item => ({ ...item, status: "ok" }))
// console.log(result)

// ================================================
// const shop = {
//     products: [
//         { id: "fdssdsdd", name: "Milk", price: 30 },
//         { id: "fdfds", name: "Water", price: 40 },
//         { id: "fdssdsfsdfsdfdd", name: "Juice", price: 50 },
//         { id: "fdsssdfsdfdsdd", name: "Compot", price: 60 },
//         { id: "fdsdfsdssdsdd", name: "Mors", price: 70 },
//     ]
// }

// const totalSum = shop.products.reduce((acc, product) => {
//     acc += product.price
//     return acc
// }, 0)
// console.log(totalSum);

// =============================================
// const list = document.querySelector('.list');

// const shop = {
//     products: [
//         { id: "fdssdsdd", name: "Milk", price: 30 },
//         { id: "fdfds", name: "Water", price: 40 },
//         { id: "fdssdsfsdfsdfdd", name: "Juice", price: 50 },
//         { id: "fdsssdfsdfdsdd", name: "Compot", price: 60 },
//         { id: "fdsdfsdssdsdd", name: "Mors", price: 70 },
//     ]
// }

// function getMarkup(array) {
//     return array.reduce((acc, product) => {
//         acc += `
//         <li class="listItem" id=${product.id}>
//             <h2>${product.name}</h2>
//             <h3>${product.price}</h3>
//             <button type="button">Delete</button>
//         </li>`
//         return acc
//     }, '')
// }

// function deleteProduct(e) {
//     console.dir(e.target.closest('[id]').id)
//     const id = e.target.closest('[id]').id;
//     shop.products = shop.products.filter(product=> product.id !== id);
//     list.innerHTML = getMarkup(shop.products);
// }

// list.innerHTML = getMarkup(shop.products);
// list.addEventListener('click', deleteProduct)

// =====================================

// const newArray = [];
// for (const product of products) {
//     if (product.price > 40) {
//         newArray.push(product)
//     }
// }
// console.log(newArray);

// const result = products.reduce((acc, product)=> {
//     if (product.price > 40) {
//         acc.push(product)
//     }
//     return acc
// }, [])

// console.log(result)


// every
// some
// sort (indexOf)
// callBacks