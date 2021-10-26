import { Request } from "express";

export interface mysqlResponse {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface Orders {
    id?: string,
    first_name?: string,
    price?: number,
    drink_id?: number,
    snack_id?: number,
    drink_prices?: string,
    snack_prices?: string,
    drink_names?: string,
    snack_names?: string,
    _created?: Date,
    _updated?: Date,
    isPreview?: boolean,
    in_progress?: boolean,
    is_finished?: boolean,
    order?: object
}
export interface Drinks {
    id?: number,
    name?: string,
    price?: number
}
export interface DrinksOrder {
    id?: number,
    drink_id?: number,
    price?: number,
    order_id?: string
}
export interface Snacks {
    id?: number,
    name?: string,
    price?: number
}
export interface SnacksOrder {
    id?: number,
    snack_id?: number,
    price?: number,
    order_id?: string
}
export interface Users {
    id?: string,
    full_name?: string,
    email?: string,
    password?: string,
    _created?: Date
}
export interface ReqUsers extends Request {
    user?: Users
}
export interface PaymentProps {
    id: string,
    fullName: string,
    amount: number,
    tip: number,
    subtotal: number
}