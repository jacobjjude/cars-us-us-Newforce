import { RenderHTML } from './cars-r-us.js';

const mainContainer = document.querySelector('#container');

const renderALLHTML = () => {
	mainContainer.innerHTML = RenderHTML();
};

renderALLHTML();

document.addEventListener('stateChanged', (event) => {
	console.log('State of data has changed. Regenerating HTML...');
	renderALLHTML();
});
