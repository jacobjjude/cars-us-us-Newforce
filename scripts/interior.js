import { getInterior, setInterior } from './database.js';

const interior = getInterior();

document.addEventListener('change', (changeEvent) => {
	if (changeEvent.target.id === 'interior') {
		const chosenOption = changeEvent.target.value;
		setInterior(parseInt(chosenOption));
	}
});

export const Interior = () => {
	let html = '<h2>Interiors</h2>';
	html += '<select id="interior">';
	html += '<option value="0">Select an Interior package></option>';
	for (const int of interior) {
		html += `<option value="${int.id}">${int.color}</option>`;
	}
	html += '</select>';
	return html;
};
