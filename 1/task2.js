
const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    averageSpeed: 100, 

    displayInfo: function() {
        console.log(`Производитель: ${this.manufacturer}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`Средняя скорость: ${this.averageSpeed} км/ч`);
    },

    calculateTravelTime: function(distance) {
        const time = distance / this.averageSpeed; 
        const restTime = Math.floor(time / 4); 
        const totalTime = time + restTime; 
        return totalTime;
    }
};

car.displayInfo();

const distance = 500;
const travelTime = car.calculateTravelTime(distance);
console.log(`Для преодоления расстояния ${distance} км потребуется ${travelTime.toFixed(2)} часов.`);