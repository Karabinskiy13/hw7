//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id,name,surname,email,phone){
//     this.id=id
//     this.name=name
//     this.surname=surname
//     this.email=email
//     this.phone=phone
// }
//
//  let userarray=[
//      new User(1, 'ivan', 'baban', 'asd@asd.com', 3805030303030),
//      new User(2, 'olya', 'kaban', 'hnsd@asd.com', 3805030303031),
//      new User(3, 'jvan', 'laban', 'sagd@asd.com', 3805030303032),
//      new User(4, 'kvan', 'iaban', 'hdrj@asd.com', 3805030303033),
//      new User(5, 'lvan', 'yaban', 'sgs@asd.com', 3805030303034),
//      new User(6, 'qvan', 'taban', 'agbdabds@asd.com', 38050303403030),
//      new User(7, 'tvan', 'raban', 'sagdsrgh@asd.com', 3805030333030)
//  ]
// console.log(userarray)
// //

// //
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filter=userarray.filter((value) =>{if (value.id%2===0){
//     return value
// }} )
// console.log(filter)
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortable=userarray.sort((a,b)=>(a.id-b.id))
//     console.log(sortable)
// //


// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clientarray=[
//     new Client(1,'ivan','qar','vsd@asd', 3805031,6),
//     new Client(2,'avan','war','bsd@asd', 3805032,3),
//     new Client(3,'svan','ear','nsd@asd', 3805033,2),
//     new Client(4,'dvan','rar','msd@asd', 3805034,1),
//     new Client(5,'fvan','tar','tsd@asd', 3805035,7),
//     new Client(6,'gvan','yar','rsd@asd', 38050306,56)
// ]
// let sortable=clientarray.sort((a,b)=>b.order-a.order)
// console.log(sortable)