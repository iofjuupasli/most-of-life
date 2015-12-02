export default class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    concat(v){
        return new Vector(this.x + v.x, this.y + v.y);
    }

    equals(v){
        return this.x === v.x && this.y === v.y;
    }

    static deserialize(obj) {
        return new Vector(obj.x, obj.y);
    }
}
