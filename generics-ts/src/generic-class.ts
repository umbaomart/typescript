//---------------
// Generic Class
//---------------

class DataCollection<T> {
    constructor(private data: T[]) { }

    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll(): T[] {
        return this.data
    }
    add(val: T): T[] {
        this.data.push(val)
        return this.data
    }
}

interface User {
    name: string
    score: number
}

const newUsers = new DataCollection<User>([
    { name: 'mario', score: 5 },
    { name: 'luigi', score: 10 },
    { name: 'yoshi', score: 50 },
])

newUsers.add({ name: 'bowser', score: 75 })
const userOne = newUsers.loadOne();
const userAll = newUsers.loadAll();
console.log(userOne);
console.log(userAll);
