class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.child = [];
    }
    getByName(name){
        return this.child.find((child)=>{
            return child.name === name;
        })
    }
    deleteChildByName(name){
        this.child = this.child.filter(function(child) {
            return child.name !== name;
        });
    }
    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    update(){
        this.child.map((child)=>child.update());
    }
    render() {
        this.child.map((child) => {
            child.render(this.context);
        })
    }
    add(object) {
        this.child.push(object);
    }
}

export default Game;