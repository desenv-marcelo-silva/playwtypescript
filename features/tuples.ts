const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

const pepsi = ['bronw', true, 40];
// quebrou a ordem
//pepsi[0] = 40;
//pepsi[2] = 'brown';

//const pepsiTuble: [string, boolean, number] = ['bronw', true, 40];
// can't change order because value types

type Drink = [string, boolean, number];
const pepsiTubleWithType: Drink = ['bronw', true, 40];

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
