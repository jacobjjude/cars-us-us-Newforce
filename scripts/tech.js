import { getTech, setTech } from './database.js';

const techs = getTech();

document.addEventListener('change', (changeEvent) => {
	if (changeEvent.target.id === 'tech') {
		const chosenOption = changeEvent.target.value;
		setTech(parseInt(chosenOption));
	}
});

export const Technologies = () => {
	let html = `<h2>Technologies</h2>`;
	html += '<select id="tech">';
	html += '<option value="0">Select a Technology package</option>';

	for (const tech of techs) {
		html += `<option value="${tech.id}">${tech.package}</option>`;
	}

	html += '</select>';
	return html;
};
