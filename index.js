// Your code here

class Polygon{

    constructor(integers){
        this.integers = integers;
    }

    get countSides(){
        return this.integers.length;
    }

    get perimeter(){
        return this.integers.reduce((a, b)=> a + b);
    }

}

class Triangle extends Polygon{
    get isValid(){
        let a = this.integers[0]
        let b = this.integers[1]
        let c = this.integers[2]

     return (a + b > c && b + c > a && c + a > b)
    }

}

class Square extends Polygon{
    get isValid(){
        let a = this.integers[0]
        let b = this.integers[1]
        let c = this.integers[2]
        let d = this.integers[3]

        return (a === b && a === c && a === d)
    }
    get area(){
        return this.integers[0] *  this.integers[1];
    }
}