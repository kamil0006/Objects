const newUser = {
	name: 'Kamil',
	age: 25,
	car: {
		brand: 'Renault',
		model: 'Clio',
		color: 'Srebrny',
		//    Funkcjia w obiekcie to metoda
		sound() {
			console.log('Brum Brum')
		},
	},
}

console.log(`${newUser.name} jeździ samochodem marki ${newUser.car.brand}, kolor ${newUser.car.color}.`)

newUser.car.sound()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const user = {
	name: 'Asia',
	age: 22,
	'fav-color': 'czerwony',
}

user.country = 'Polska'
// user.fav-color
user['fav-color'] = 'niebieski'

console.log(user)

const dogName = 'Frida'
const dogAge = 3

const dog = {
	// Zapis skrócony
	dogName,
	dogAge,
}

console.log(dog)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Pętla for in w obiektach

const userFemale = {
	name: 'Agata',
	age: 24,
	sex: 'female',
	'hair-color': 'blonde', // Niestandardowy zapis
}

for (const data in userFemale) {
	console.log(data + ': ' + userFemale[data])
}

//  Zasada działania this

const userForThisMethod = {
	name: 'Adam',
	showName() {
		console.log(this.name)
	},
}

userForThisMethod.showName()

// Konstruktor funkcja do tworzenia obiektów

function User(name, age) {
	this.name = name
	this.age = age
}

const newUser1 = new User('Zosia', 23)
const newUser2 = new User('Lily', 34)
const newUser3 = new User('Kamil', 25)

console.log(newUser1, newUser2, newUser3)

// Prototypy

User.prototype.hello = function () {
	console.log(`Cześć ${this.name}`)
}

User.prototype.country = 'Polska'
console.log(newUser2.country)

newUser3.hello()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Zadanie

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')
// const p = document.querySelector('p')

// function Meals(name, price) {
// 	this.name = name
// 	this.price = price
// }

// const firstMeal = new Meals('Pizza', 30)
// const secondMeal = new Meals('Burger', 40)
// const thirdMeal = new Meals('Lody', 11)

// Meals.prototype.menu = function () {
// 	console.log(`${this.name} kosztuje ${this.price}zł`)
// }

// btn1.addEventListener('click', () => {
// 	firstMeal.menu()
// })
// btn2.addEventListener('click', () => {
// 	secondMeal.menu()
// })
// btn3.addEventListener('click', () => {
// 	thirdMeal.menu()
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This cd.

// console.log(this) targetujemy window

// this w zwykłej funkcji wskazuje na obiekt, który jest na lewo od kropki

const person = {
	name: 'Ania',
	'fav-meal': 'Pizza',
	adress: {
		city: 'Gdańsk',
		'zip-code': '00-000',
		showCity: function () {
			console.log(this)
		},
	},
}

person.adress.showCity()

// this w konstruktorze wskazuje na obiekt, stworzony na podstawie konstruktora

function Food(name) {
	this.name = name
}

const meal = new Food('schabowy')
const meal2 = new Food('coca-cola')

console.log(meal, meal2)

// this w funkcji strzałkowej

const ob = {
	number: 123,
	showNumber() {
		console.log(this.number)
	},
	showNumber2() {
		const test = () => {
			console.log(this.number)
			console.log(this)
		}
		test()
	},
}

ob.showNumber()
ob.showNumber2()

// Bind

function test() {
	console.log(this)
	console.log(this.name)
}

const car1 = {
	name: 'Audi',
}
const car2 = {
	name: 'BMW',
}
const car3 = {
	name: 'Renault',
}

test.bind(car3)()

// Call & Apply

const movie = {
	title: 'Avengers',
}

function showMovie(price, cinema) {
	console.log(`Film ${this.title}, cena: ${price}, kino: ${cinema}.`)
}

showMovie(30, 'SuperKINO')

// Funkcja.call(OBIEKT, ARGUMENTY)
showMovie.call(movie, 35, 'SuperKINO2')

// Funkcja.apply(OBIEKT, TABLICA)
const movieData = [40, 'Super2']

showMovie.apply(movie, movieData)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stary konstruktor

function Person2(name, age) {
	this.name = name
	this.age = age
}

Person2.prototype.sayHi = function () {
	console.log(`Cześć jestem ${this.name}`)
}
Person2.prototype.showAge = function () {
	console.log(`Mam ${this.age} lat`)
}
const person3 = new Person2('Kamil', 25)
person3.sayHi()
person3.showAge()

// Klasa

class Person5 {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	sayHi() {
		console.log(`Cześć jestem ${this.name}`)
	}
	showAge() {
		console.log(`Mam ${this.age} lat`)
	}
}
const person5 = new Person5('Ola', 40)
console.log(person5)

// Obiekty Extends & Super

class Animal {
	constructor(name) {
		this.name = name
	}

	sound() {
		console.log('HAU HAU')
	}
}

class Dog extends Animal {
	constructor(name, age) {
		super(name)
		this.age = age
	}
}

class Cat extends Animal {
	sound() {
		console.log('Miauuuu')
	}
}

const doggy = new Dog('Hades', 8)
const cat = new Cat('Feliks')
cat.sound()
doggy.sound()
console.log(cat)

// Object.assign

const usr = {
	name: 'Bogdan',
	age: 40,
}

const pet = {
	name: 'Fafik',
	age: 3,
}

const usrInfo = Object.assign({}, usr, pet)
const usrCopy = Object.assign({}, usr)

usrCopy.age = 89
console.log(usrCopy)
console.log(usr)

// Destrukturyzacja obiektów

const employee = {
	name: 'Dawid',
	age: 18,
	job: 'Brukarz',
	car: {
		brand: 'Ford',
		model: 'Mustang',
	},
}

const info = ({ job, name, age }) => {
	console.log(`${name} pracuje jako ${job} i ma ${age} lat.`)
}

info(employee)

const info2 = ({ car: { brand, model } }) => {
	console.log(`Jego samochód to ${brand} ${model}.`)
}

info2(employee)

const info3 = () => {
	const {
		car: { brand, model },
	} = employee
	console.log(`Jego samochód to ${brand} ${model}.`)
}

info3()


// Destrukturyzacja tablic

const colors = ['red', 'green', 'blue']

const firstColor = colors[0]
const secondColor = colors[1]

const [first, second] = colors

console.log(firstColor, secondColor);
console.log(first, second);

const [,,abcd] = colors
console.log(abcd);