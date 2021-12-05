import { User } from "./user";

export interface Expense {
    description: string;
    amount: number;
    date: Date;
    payee: string; //User;
    currency?: Currency; 
    category?: ExpenseCategory
}

export type Currency = 'EUR';

export type ExpenseCategory = 'housing' | 'food';