// ------------------
// Generic Interface
// ------------------

interface Collection<T> {
    data: T[]
    name: string
}

const collectionOne: Collection<string> = {
    data: ['mario', 'luigi', 'yoshi', 'bowser'],
    name: 'mario characters'
}

const collectionTwo: Collection<number> = {
    data: [1, 2, 3, 4, 5],
    name: 'winning numbers'
}

function randomCollectionItem<T>(c: Collection<T>): T {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}

const restOne = randomCollectionItem<string>(collectionOne);
//- Automatically detects the type of the collection item based on the data property
const restTwo = randomCollectionItem(collectionTwo);

console.log(restOne);
console.log(restTwo);

