function formatValue(value: string | number | boolean): string | number | boolean {
	if (typeof value === "string") {
		return value.toUpperCase();
	}

	if (typeof value === "number") {
		return value * 10;
	}

	return !value;
}

function getLength(value: string | unknown[]): number {
	if (typeof value === "string") {
		return value.length;
	}

	if (Array.isArray(value)) {
		return value.length;
	}

	return 0;
}

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getDetails(): string {
		return `Name: ${this.name}, Age: ${this.age}`;
	}
}

type RatedItem = {
	title: string;
	rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
	return items.filter((item) => item.rating >= 4);
}

type User = {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
	return users.filter((user) => user.isActive === true);
}

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

function printBookDetails(book: Book): string {
	const availabilityStatus = book.isAvailable ? "Yes" : "No";

	return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityStatus}`;
}

function getUniqueValues(firstArray: (string | number)[], secondArray: (string | number)[]): (string | number)[] {
	return [...new Set([...firstArray, ...secondArray])];
}

type Product = {
	name: string;
	price: number;
	quantity: number;
	discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
	if (products.length === 0) {
		return 0;
	}

	return products.reduce((total, product) => {
		const basePrice = product.price * product.quantity;
		const discountAmount = product.discount ? basePrice * (product.discount / 100) : 0;

		return total + (basePrice - discountAmount);
	}, 0);
}
