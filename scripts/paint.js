import { getPaint, setPaint } from './database.js';

const paints = getPaint();

document.addEventListener('change', (changeEvent) => {
	if (changeEvent.target.id === 'paint') {
		const chosenOption = changeEvent.target.value;
		setPaint(parseInt(chosenOption));
	}
});

export const Paint = () => {
	let html = `<h2>Paint</h2>`;
	html += '<select id="paint">';
	html += '<option value="0">Select a Paint package</option>';

	for (const paint of paints) {
		html += `<option value="${paint.id}">${paint.color}</option>`;
	}

	html += '</select>';
	return html;
};
