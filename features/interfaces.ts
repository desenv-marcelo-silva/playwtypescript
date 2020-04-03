interface IVehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return `Name ${this.name} | Year ${this.year} | Broken ${this.broken}`;
	},
};

//const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
// const printVehicle = (vehicle: Vehicle): void => {
const printVehicle = (vehicle: IVehicle): void => {
	console.log(vehicle.summary());
};

printVehicle(oldCivic);

//// mudando a interface

interface IReportable {
	summary(): string;
}

const oldCivicItem = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return `Name ${this.name} | Year ${this.year} | Broken ${this.broken}`;
	},
};

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`;
	},
};

//const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
// const printVehicle = (vehicle: Vehicle): void => {
const printSummary = (vehicle: IReportable): void => {
	console.log(vehicle.summary());
};

// very different objects
printSummary(oldCivicItem);
printSummary(drink);
