import { Query } from "..";
import { Orders } from "../../../../types";

export const get_orders = () => Query<Orders[]>
    ('SELECT * FROM Orders');
export const get_one_order = (id: string) => Query<Orders[]>
    ('SELECT * FROM Orders WHERE id=?', [id]);
export const post_order = (newOrder: Orders, id: string) => Query
    ('INSERT INTO Orders SET ?',[newOrder, id]);
export const edit_order = (editOrder: Orders, id: string) => Query
    ('UPDATE Orders SET ? WHERE id=?',[editOrder, id]);
export const delete_order = (id: string) => Query
    ('DELETE FROM Orders WHERE id=?', [id]);