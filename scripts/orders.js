import { getOrders } from './database.js';

const buildOrderListItem = (order) => {
    return `<li>
    Order ${order.id}: 
    </li>`
}

export const Orders = () => {
    const order = getOrders();

    return 'IT WORKED!!!'
};
