class Vehicle {
	//color: string;
	// drive(): void {
	// 	console.log('chugga chugga');
	// }
	constructor(public color: string) {}

	honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

vehicle.honk();

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		// não redeclarar o modificador no color
		super(color);
	}

	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
	}
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
car.honk();
