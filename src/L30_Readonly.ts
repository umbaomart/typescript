export function L30_Readonly() {
    // Readonly types is the same with const in javascript
    type Todo = {
        title: string
        completed: boolean
    }

    const todo = {
        title: "sddf",
        completed: false
    }

    type FinalTodo = Readonly<Todo>

    Object.freeze(todo) // to freeze an object is like const or readonly
}