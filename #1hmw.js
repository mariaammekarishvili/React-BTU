class Vehicle{
    constructor(make, model){
        this.make=make;
        this.model=model;
    }
    creatCar(){
        return 'top model of ' + this.make+ " is "+ this.model;
    }
}

class Car extends Vehicle{}

const car1 = new Car('BMW',"X5 M");

console.log('We know that ' + car1.creatCar());