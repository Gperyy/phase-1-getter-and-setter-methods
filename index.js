class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    get diameter() {
        return this._radius * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return Math.PI * (this._radius ** 2);
    }

    set diameter(diameter) {
        this._radius = diameter / 2;
    }

    set circumference(circumference) {
        this._radius = circumference / (2 * Math.PI);
    }

    set area(area) {
        this._radius = Math.sqrt(area / Math.PI);
    }
}
