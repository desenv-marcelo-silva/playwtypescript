const profile = {
	name: 'Marcelo',
	age: 46,
	coords: {
		lat: 0,
		lng: 15,
	},
	setAge(age: number) {
		this.age = age;
	},
};

const {age, name}: {age: number; name: string} = profile;
const {
	coords: {lat, lng},
}: {coords: {lat: number; lng: number}} = profile;
