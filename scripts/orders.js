import { getOrders } from './database.js';
import { findInterior } from './interior.js';
import { findPaint } from './paint.js';
import { findTech } from './tech.js';
import { findWheels } from './wheels.js';

const buildOrderListItem = (order) => {
	const chosenInt = findInterior(order.interiorId);
	const chosenPaint = findPaint(order.paintId);
	const chosenTech = findTech(order.techId);
	const chosenWheel = findWheels(order.wheelId);
	const totalPrice = chosenInt.price + chosenPaint.price + chosenTech.price + chosenWheel.price;
	const priceOutput = totalPrice.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	return `<li>
    Order #${order.id}: You chose the ${chosenPaint.color} color car with ${chosenInt.color} interior, ${chosenWheel.style} wheels, and the ${chosenTech.package}</li><li>Your total price is ${priceOutput}</li>`;
};

export const Orders = () => {
	const order = getOrders();

	if (order.length === 0) {
		return '';
	} else {
		let html = '<ul>';
		const listItems = order.map(buildOrderListItem);
		html += listItems.join('');
		html += '</ul>';
		return html;
	}
};
