import { getWheels, setWheels } from './database.js';

const wheels = getWheels();

document.addEventListener('change', (changeEvent) => {
	if (changeEvent.target.id === 'wheels') {
		const chosenOption = changeEvent.target.value;
		setWheels(parseInt(chosenOption));
	}
});

export const Wheels = () => {
	let html = `<h2>Wheels</h2>`;
	html += '<select id="wheels">';
	html += '<option value="0">Select a Wheel type</option>';
	for (const wheel of wheels) {
		html += `<option value="${wheel.id}">${wheel.style}</option>`;
	}
	html += '</select>';
	return html;
};

export const findWheels = (id) => {
	for (const wheel of wheels) {
		if (id === wheel.id) {
			return wheel;
		}
	}
};
