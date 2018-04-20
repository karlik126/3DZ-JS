class Mage{
    constructor(X,Y,color){
        this.coordinateX=X;
        this.coordinateY=Y;
        this.mageColor=color;
        document.getElementById(Math.floor(this.coordinateX)+' and '+Math.floor(this.coordinateY)).style.backgroundColor=this.mageColor;
    }


    move(dir) {
        var differenceX = this.coordinateX - dir.coordinateX;
        var differenceY = this.coordinateY - dir.coordinateY;
        document.getElementById(Math.floor(this.coordinateX)+' and '+Math.floor(this.coordinateY)).style.backgroundColor='#ffcf48';
        if(differenceX > 0){
            this.coordinateX--;
        }else if(differenceX < 0){
            this.coordinateX++;
        }
        if(differenceY > 0){
            this.coordinateY--;
        }else if(differenceY < 0){
            this.coordinateY++;
        }
        document.getElementById(Math.floor(this.coordinateX)+' and '+Math.floor(this.coordinateY)).style.backgroundColor=this.mageColor;
    }





}



