class Level{

    constructor(){
        this.map=[];
        for (var i=0;i<20;i++){
            for(var j=0;j<20;j++){
                this.map[i]=[];
                this.map[i][j]='void';
            }
        }
    }

    setWall(){
        for (var i=1;i<14;i++){
            this.map[i][18]='wall';
            document.getElementById(Math.floor(i)+' and '+Math.floor(18)).style.backgroundColor='black';
        }
    }

 getCell(dir){
    return this.map[dir.coordinateX][dir.coordinateY];
 }













}