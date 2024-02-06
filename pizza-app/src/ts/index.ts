import { Pizza } from "./models/Pizza";

document.addEventListener('DOMContentLoaded', async () => {
    // Load the pizza data
    const pizzas = await Pizza.loadAll();

    console.log(pizzas);
})