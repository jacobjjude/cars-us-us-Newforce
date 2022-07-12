const database = {
	paint: [
		{
			id: 1,
			color: 'Silver'
		},
		{
			id: 2,
			color: 'Midnight Blue'
		},
		{
			id: 3,
			color: 'Firebrick Red'
		},
		{
			id: 4,
			color: 'Spring Green'
		}
	],
	interior: [
		{
			id: 1,
			color: 'Beige Fabric'
		},
		{
			id: 2,
			color: 'Charcoal Fabric'
		},
		{
			id: 3,
			color: 'White Leather'
		},
		{
			id: 4,
			color: 'Black Leather'
		}
	],
	technology: [
		{
			id: 1,
			package: 'Basic Package',
			description: 'basic sound system'
		},
		{
			id: 2,
			package: 'Navigation Package',
			description: 'includes integrated navigation controls'
		},
		{
			id: 3,
			package: 'Visibility Package',
			description: 'includes side and rear cameras'
		},
		{
			id: 4,
			package: 'Ultra Package',
			description: 'include navigation and visibility packages'
		}
	],
	wheels: [
		{ id: 1, style: '17-inch Pair Radial' },
		{ id: 2, style: '17-inch Pair Radial Black' },
		{ id: 3, style: '18-inch Pair Spoke Silver' },
		{ id: 4, style: '18-inch Pair Spoke Black' }
	],
	customOrder: []
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
