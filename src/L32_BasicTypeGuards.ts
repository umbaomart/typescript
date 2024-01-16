export default function L32_BasicTypeGuards() {

    type Todo = {
        title: string
        priority: "High" | "Normal" | "Low"
        isComplete: boolean
        description?: string
        dueDate: Date | string | number
    }

    const todoList: Todo = {
        title: "Learn TypeScript",
        priority: "High",
        isComplete: false,
        description: "Learn how to use TypeScript",
        dueDate: new Date()
    }

    // extendTodo(todoList);

    function extendTodo(todo: Todo) {
        if (todo.dueDate instanceof Date) {
            console.log(todo.dueDate);
        } else if (typeof todo.dueDate === "number"){
            console.log(todo.dueDate);
        } else {
            console.log(todo.dueDate);
        }

        if (todo.description) {
            console.log("Description: " + todo.description);
        }

        const formEl = document.querySelector<HTMLFormElement>(".form");
        formEl?.addEventListener("submit", () => { })

        switch (todo.priority) {
            case "High":
                console.log("High");
                break;

            case "Normal":
                console.log("Normal");
                break;

            case "Low":
                console.log("Low");
                break;

            default:
                break;
        }
    }
}