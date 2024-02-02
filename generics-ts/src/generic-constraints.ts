//----------------------
// Generics Constraints
//----------------------

interface HasId {
    id: number
}

class NewDataCollection<T extends HasId> {
    constructor(private data: T[]) {}

    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length);
    }

    loadAll(): T[] {
        return this.data;
    }

    add(val: T): T[] {
        this.data.push(val);
        return this.data;
    }

    deleteOne(id: number): void {
        this.data = this.data.filter((item) => item.id !== id);
    }
}

interface NewUser {
    id: number
    name: string
    score: number
}

const myUsers = new NewDataCollection<NewUser>([
    { name: 'mario', score: 5, id: 1 },
    { name: 'luigi', score: 10, id: 2 },
    { name: 'yoshi', score: 50, id: 3 },
])

myUsers.add({ name: 'bowser', score: 75, id: 4 })
myUsers.deleteOne(1)

const myUserOne = myUsers.loadOne();
const myUserAll = myUsers.loadAll();
console.log(myUserOne);
console.log(myUserAll);

