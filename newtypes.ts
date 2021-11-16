// type && type assignment

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple type
} = {
// const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'Cooking'],
    role: [2, 'author']
};

// push is an exception to the length tuple type restriction
person.role.push('admin');
// below will throw an error
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}