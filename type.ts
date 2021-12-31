// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Maximillian",
//     age: 30,
//     hobbies: ['sports', 'Cooking'],
//     role: [2, 'author']
// }
enum Role { ADMIN, READ_ONLY, AUTHOR, }

const person = {
    name: "Maximillian",
    age: 30,
    hobbies: ['sports', 'Cooking'],
    role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.age)

for (const hobby of person.hobbies) {
    console.log(hobby)
}