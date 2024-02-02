//--------------
// Generics 101
//--------------

function logAndReturnString(val: string): string {
    console.log(val)
    return val
}
function logAndReturnNumber(val: number): number {
    console.log(val)
    return val
}
function logAndReturnBoolean(val: boolean): boolean {
    console.log(val)
    return val
}

function logAndReturnValue<T>(val: T): T {
    // console.log(typeof(val))
    console.log(val)
    return val
}

// Example 1
const resultOne = logAndReturnValue<string>('mario')
const resultTwo = logAndReturnValue<number>(25)

// Example 2
function getRandomArrayValue<T>(val: T[]): T {
    const i = Math.floor(Math.random() * val.length)

    return val[i]
}

interface User {
    name: string
    score: number
}

const users: User[] = [
    { name: 'mario', score: 5 },
    { name: 'luigi', score: 10 },
    { name: 'yoshi', score: 50 },
    { name: 'bowser', score: 75 },
]

const randomArrayValue = getRandomArrayValue<User>(users)
console.log(randomArrayValue);
