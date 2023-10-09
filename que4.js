// Develop a set of classes in JavaScript for calculating the area and perimeter of various shapes. Begin with a base class Shape that provides default methods for area and perimeter calculation and includes subclasses like Circle, Rectangle, and Triangle. Each subclass should inherit from Shape and override the area and perimeter calculation methods to provide accurate results for their respective shapes.


class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Shape class cannot be instantiated directly.');
        }
    }

    calculateArea() {
        throw new Error('Area method must be implemented by subclasses.');
    }

    calculatePerimeter() {
        throw new Error('Perimeter method must be implemented by subclasses.');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(base, height, side1, side2, side3) {
        super();
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }

    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}


const circle = new Circle(5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Circle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(`Circle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);

