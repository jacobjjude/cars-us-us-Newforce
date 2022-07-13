const database = {
	paint: [
		{
			id: 1,
			color: 'Silver',
			price: 500
		},
		{
			id: 2,
			color: 'Midnight Blue',
			price: 500
		},
		{
			id: 3,
			color: 'Firebrick Red',
			price: 500
		},
		{
			id: 4,
			color: 'Spring Green',
			price: 500
		}
	],
	interior: [
		{
			id: 1,
			color: 'Beige Fabric',
			price: 1
		},
		{
			id: 2,
			color: 'Charcoal Fabric',
			price: 600
		},
		{
			id: 3,
			color: 'White Leather',
			price: 784
		},
		{
			id: 4,
			color: 'Black Leather',
			price: 651
		}
	],
	technology: [
		{
			id: 1,
			package: 'Basic Package',
			description: 'basic sound system',
			price: 210
		},
		{
			id: 2,
			package: 'Navigation Package',
			description: 'includes integrated navigation controls',
			price: 351
		},
		{
			id: 3,
			package: 'Visibility Package',
			description: 'includes side and rear cameras',
			price: 486
		},
		{
			id: 4,
			package: 'Ultra Package',
			description: 'include navigation and visibility packages',
			price: 569
		}
	],
	wheels: [
		{ id: 1, style: '17-inch Pair Radial', price: 251 },
		{ id: 2, style: '17-inch Pair Radial Black', price: 357 },
		{ id: 3, style: '18-inch Pair Spoke Silver', price: 456 },
		{ id: 4, style: '18-inch Pair Spoke Black', price: 987 }
	],
	orderBuilder: {},
	customOrders: []
};
export const getPaint = () => {
	return database.paint.map((item) => ({ ...item }));
};

export const getInterior = () => {
	return database.interior.map((item) => ({ ...item }));
};

export const getTech = () => {
	return database.technology.map((item) => ({ ...item }));
};

export const getWheels = () => {
	return database.wheels.map((item) => ({ ...item }));
};

export const getOrders = () => {
	return database.customOrders.map((item) => ({ ...item }));
};

export const setWheels = (id) => {
	database.orderBuilder.wheelId = id;
};

export const setInterior = (id) => {
	database.orderBuilder.interiorId = id;
};

export const setTech = (id) => {
	database.orderBuilder.techId = id;
};

export const setPaint = (id) => {
	database.orderBuilder.paintId = id;
};

let primaryKey = 1;
export const addCustomOrder = () => {
	if (
		database.orderBuilder.wheelId &&
		database.orderBuilder.paintId &&
		database.orderBuilder.interiorId &&
		database.orderBuilder.techId
	) {
		// Copy the current state of user choices
		const newOrder = { ...database.orderBuilder };

		// Add a new primary key to the object
		newOrder.id = primaryKey;

		// Add a timestamp to the order
		newOrder.timestamp = Date.now();

		// Add the new order object to custom orders state
		database.customOrders.push(newOrder);

		// Reset the temporary state for user choices
		database.orderBuilder = {};

		// Broadcast a notification that permanent state has changed
		document.dispatchEvent(new CustomEvent('stateChanged'));
		primaryKey++;
		console.log(database.customOrders);
	}
};
