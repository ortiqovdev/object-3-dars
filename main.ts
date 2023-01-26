// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// type Teacher = {
//     name: string;
//     subject: string;
// }

// type Student = {
//     name: string;
//     age: number;
//     address: string;
// }


// type Group = {
//     teacher: Teacher;
//     students: Student[];
// }

// let data: Group[]  = [
//    {
//     teacher: {
//       name: "Jalol Imomaddinov",
//       subject: "Node.js",
//     },
//     students: [
//         {
//             name: "Aslbek Qadamboyev",
//             age: 13,
//             address: "Xonqa"
//         },
//         {
//             name: "Dilshod Matyoqubov",
//             age: 22,
//             address: "Shovot"
//         }
//     ]
//   }
// ];
// console.log(data[0].students[1].age);
// let have: boolean = false;
// data[0].students.forEach(n => {
//     if(n.name == "Aslbek Qadamboyev"){
//         have = true;
//     }
// })
// if(have) {
//     console.log("Bor");
// }else {
//     console.log("Yo'q");
// }


// console.log(data[0].students.find(st => st.name == 'Aslbek Qadamboyev') != undefined);

export { }
// type Student = {
//     name :string
//     surname : string
//     score : number
//     address:{
//         street: string,
//         number: number
//     }
// }
type Game = {
    name: string,
    price: number
}
const games: Game[] = [
    {
        name: 'Call of Duty MW2',
        price: 10
    },

    {
        name: 'GTA V',
        price: 12
    },
    {
        name: 'CS GO',
        price: 2
    },
    {
        name: 'Dota 2',
        price: 12
    },
    {
        name: 'PUBG',
        price: 0
    }

]
// const names = games.filter(game => game.price > 10).map(game => `${game.name}$${game.price}`)
const names = games
.filter(game => game.price > 10)
.map(game => `${game.name}$${game.price}`)