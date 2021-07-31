export interface Dish
{
    id: string;
    name: string;
    category: string;
    preparationTime: string;
    cookingTime: string;
    seasons: Season[];
    numberOfPeople : number;

    ingredients?: {
        id: number;
        name: string;
        amount: string;
        unit: string;
    }[];

    recipe?: {
        id: number;
        description: string;
    }[];
}

export interface Ingredient
{
    id: number;
        name: string;
        amount: number;
        unit: string;
}

export interface Recipe
{
    id: number;
    description: string;
}

export interface Season
{
    id: string;
    name: string;
}