const filterPopulationAbove100k = (arr) => {
	return arr.filter((city) => city.population > 100000);
};

const filterPopulationBelow100k = (arr) => {
	return arr.filter((city) => city.population < 100000);
};

export { filterPopulationAbove100k, filterPopulationBelow100k };
