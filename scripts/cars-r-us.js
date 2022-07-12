import { Technologies } from './tech.js';
import { Interior } from './interior.js';
import { Wheels } from './wheels.js';
import { Paint } from './paint.js';
import { addCustomOrder } from './database.js';
import { Orders } from './orders.js';

document.addEventListener('click', (event) => {
	const itemClicked = event.target;
	if (itemClicked.id === 'orderButton') {
		addCustomOrder();
	}
});

export const RenderHTML = () => {
	let htmlString = `
    ${Technologies()}
    ${Interior()}
    ${Wheels()}
    ${Paint()}
    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>
    <h2>Orders</h2>
    ${Orders()}
    `;
	return htmlString;
};
