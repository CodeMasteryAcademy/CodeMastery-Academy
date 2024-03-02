"use strict";

class Course {
  constructor(name, durationInDays, price) {
    this.name = name;
    this.duration = durationInDays;
    this.price = price;
  }

  describeCourse() {
    console.log(`Nome: ${this.name}`);
    console.log(`Duração: ${this.duration} dias`);
    console.log(`Preço: ${this.price}€`);
  }
}

const courses = [
    new Course("Lógica de Programação", 30, 10),
    new Course("Desenvolvimento Web | Front-end", 30, 10)
];

export default courses;
