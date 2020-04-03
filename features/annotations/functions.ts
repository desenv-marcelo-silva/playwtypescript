// inferência não atua nos parâmetros
// inferência atua no retorno
const add = (a: number, b: number) => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function(a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
	//return undefined;
};

const throwError = (message: string): never => {
	throw new Error(message);
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = (forecast: {date: Date; weather: string}): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

// es2015
const logWeatherES2015 = ({date, weather}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todaysWeather);
logWeatherES2015(todaysWeather);

// es2015
const logWeatherES2015_with_destruction = ({date, weather}: {date: Date; weather: string}): void => {
	console.log(date);
	console.log(weather);
};
