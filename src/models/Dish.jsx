import {Ingredient} from "./Ingredient";

export class Dish {

    uuid = '';
    active = false;
    amount = 0;
    categoryId = 0;
    description = '';
    ingredients = [Ingredient];
    notes = '';
    pictures = '';
    price = 0;
    title = '';

    constructor(uuid, active, amount, categoryId, description, ingredients, notes, pictures, price, title) {
        this.uuid = uuid;
        this.active = active;
        this.amount = amount;
        this.categoryId = categoryId;
        this.description = description;
        this.ingredients = ingredients;
        this.notes = notes;
        this.pictures = pictures;
        this.price = price;
        this.title = title;
    }
}