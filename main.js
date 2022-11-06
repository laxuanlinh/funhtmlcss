// function Person(firstname, lastname){
// 	this.firstname = firstname
// 	this.lastname = lastname
// }

// Person.prototype.getFullName = function(){
// 	return this.firstname + this.lastname
// }

// function Superhero(firstname, lastname){
// 	this.isSuperhero = true
// 	Person.call(this, firstname, lastname)
// }

// Superhero.prototype.fightCrimes = function(){
// 	console.log("Fighting crimes")
// }

// Superhero.prototype = Object.create(Person.prototype)
// Superhero.prototype.constructor = Superhero
class Person{
	constructor(firstname, lastname){
		this.firstname = firstname
		this.lastname = lastname
	}
	getFullName(){
		return this.firstname+" "+this.lastname
	}
}
class Superhero extends Person{
	constructor(firstname, lastname){
		super(firstname, lastname)
		this.isSuperHero = true
	}
	fightCrimes(){
		console.log("Fighting crimes")
	}
}
const superhero = new Superhero("Linh", "La Xuan")
// console.log(superhero)
// console.log(superhero.getFullName())
// console.log(superhero.fightCrimes())










