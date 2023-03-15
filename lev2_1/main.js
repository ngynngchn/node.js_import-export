import data from "./cities.js";
import {
	filterPopulationAbove100k,
	filterPopulationBelow100k,
} from "./filter.js";

console.log("💡 ~ above 100k:", filterPopulationAbove100k(data));
console.log("💡 ~ below 100k:", filterPopulationBelow100k(data));
