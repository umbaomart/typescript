export function L27_PartialAndRequired() {
    // Example 1
    // type Todo = {
    //     title: string
    //     completed: boolean
    //     address?: {
    //         street?: string
    //     }
    // }

    // // type FormTodo = Partial<Todo> // type FormTodo = { title?: string; completed?: boolean; }
    // // type FormTodo = Required<Todo> // type FormTodo = { title: string; completed: boolean; }

    // // type FormTodo = Required<Pick<Todo, "title">> // type FormTodo = { title: string; }
    // type FormTodo = Required<Pick<Todo, "title">> & Omit<Todo, "title">

    // const todo: FormTodo = {
    //     completed: true,
    //     title: "Buy milk",
    //     address: {
    //         street: "Main"
    //     }
    // } //- End Example 1

    type Todo = {
        title: string
        completed: boolean
        address?: {
            street?: string
        }
    }

    // Required and Pick in one function
    // type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key> & T>
    // type FormTodo = RequiredPick<Todo, "title">
    // const todo: FormTodo = {
    //     completed: true,
    // } //- End Required and Pick in one function

    // Partial and Pick in one function
    type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key> & Omit<T, Key>>

    type FormTodo = PartialPick<Todo, "title">

    const todo: FormTodo = {
        completed: true,
    }

    console.log(todo);
}