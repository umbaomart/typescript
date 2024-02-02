//--------------
// Intersection
//--------------

interface HasID {
    id: number
}

function addIdToValue<T>(val: T): T & HasID {
    const id = Math.random()
    return {...val, id}
}

const resOne = addIdToValue({id: 10})

interface Post {
    title: string
    thumbsUp: number
}

const post = addIdToValue<Post>({title: 'Hello', thumbsUp: 10})

console.log(post);
console.log(post.id);

