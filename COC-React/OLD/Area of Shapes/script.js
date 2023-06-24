
const pi = 3.14;
class Shape {
    constructor(color, border) {
        this.color = color;
        this.border = border;
    }
}

class Circle extends Shape {
    constructor(color, border, radius) {
        super(color, border);
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }
}

class Cylinder extends Circle {
    constructor(color, border, radius, height) {
        super(color, border, radius);
        this.height = height;
    }

    area() {
        return 3.14 * this.radius * this.radius * this.height;
    }
}

class Rectangle extends Shape {
    constructor(color, border, height, width) {
        super(color, border);
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

class RectanglePrism extends Rectangle {
    constructor(color, border, height, width, length) {
        super(color, border, height, width);
        this.length = length;
    }

    area() {
        return this.height * this.width * this.length;
    }
}
const isNumber = (x) => (typeof Number(x) === 'number' && isFinite(Number(x)));

const colorInput = document.getElementById("color");
const borderInput = document.getElementById("border");

const cylinderInputs = document.querySelectorAll("#Cylinder>input");
const rectangleInputs = document.querySelectorAll("#Rectangle>input");
const rectanglePrismInputs = document.querySelectorAll("#RectanglePrism>input");

let circle = new Circle(colorInput.value, borderInput.value, 0)
let cylinder = new Cylinder(colorInput.value, borderInput.value, 0, 0)
let rectangle = new Rectangle(colorInput.value, borderInput.value, 0, 0)
let rectanglePrism = new RectanglePrism(colorInput.value, borderInput.value, 0, 0, 0)

borderInput.addEventListener("input", () => {
    rectangleHandler();
    circleHandler();
})
colorInput.addEventListener("input", () => {
    rectangleHandler();
    circleHandler();
})

const circleHandler = () => {
    if (isNumber(document.querySelector("#Circle>input").value)) {
        circle = new Circle(colorInput.value, borderInput.value, Number(document.querySelector("#Circle>input").value))
        document.querySelector("#Circle>span").innerHTML = "Area = " + circle.area();
        let x = document.querySelector("#Circle>div");
        x.style.width = Number(document.querySelector("#Circle>input").value) + "em";
        x.style.height = Number(document.querySelector("#Circle>input").value) + "em";
        x.style.borderWidth = Number(circle.border) + "px";
        x.style.background = circle.color;
    }
}
const cylinderHandler = () => {
    if (isNumber(cylinderInputs[0].value) && isNumber(cylinderInputs[1].value)) {
        cylinder = new Cylinder(colorInput.value, borderInput.value, cylinderInputs[0].value, cylinderInputs[1].value)
        document.querySelector("#Cylinder>span").innerHTML = "Area = " + cylinder.area();
    }
}
const rectangleHandler = () => {
    if (isNumber(rectangleInputs[0].value) && isNumber(rectangleInputs[1].value)) {
        rectangle = new Rectangle(colorInput.value, borderInput.value, rectangleInputs[0].value, rectangleInputs[1].value)
        document.querySelector("#Rectangle>span").innerHTML = "Area = " + rectangle.area();
        let x = document.querySelector("#Rectangle>div");
        x.style.width = Number(rectangleInputs[0].value) + "em";
        x.style.height = Number(rectangleInputs[1].value) + "em";
        x.style.background = colorInput.value;
        x.style.borderWidth = Number(rectangle.border) + "px";
    }
}
const reactPrismHandler = () => {
    if (isNumber(rectanglePrismInputs[0].value) && isNumber(rectanglePrismInputs[1].value) && isNumber(rectanglePrismInputs[2].value)) {
        rectanglePrism = new RectanglePrism(color.value, borderInput.value, rectanglePrismInputs[0].value, rectanglePrismInputs[1].value, rectanglePrismInputs[2].value)
        document.querySelector("#RectanglePrism>span").innerHTML = "Area = " + rectanglePrism.area();
    }
}

for (x of document.querySelectorAll("#Circle>input")) {
    x.addEventListener("keyup", circleHandler);
}
for (x of document.querySelectorAll("#Cylinder>input")) {
    x.addEventListener("keyup", cylinderHandler);
}
for (x of document.querySelectorAll("#Rectangle>input")) {
    x.addEventListener("keyup", rectangleHandler);
}
for (x of document.querySelectorAll("#RectanglePrism>input")) {
    x.addEventListener("keyup", reactPrismHandler);
}


