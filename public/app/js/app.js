'use strict';
class Foo {
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		alert(`Hi ${this.name}!!!`);
	}
}

let bar = new Foo('DashboardPanel');
bar.sayHi();
