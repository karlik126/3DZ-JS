class Game{
    render(){
        var dir=new Dir(3,2);
        this.team1.mages[0].move(dir);
            this.team1.mages[1].move(dir);
            this.team1.mages[2].move(dir);
            this.team2.mages[0].move(dir);
            this.team2.mages[1].move(dir);
            this.team2.mages[2].move(dir);
    }

     init(){
         var  mage;
         this.team1=new team('yellow');
         this.team2=new team('red');
         this.level=new Level();
         this.level.setWall();
        for (var i=0;i<3;i++){
            mage=new Mage(Math.floor(Math.random() * (19 - 0) + 0),Math.floor(Math.random() * (19 - 0) + 0),this.team1.teamColor);
            this.team1.addMage(mage);

        }
        for (var i=0;i<3;i++){
            mage=new Mage(Math.floor(Math.random() * (19 - 0) + 0),Math.floor(Math.random() * (19 - 0) + 0),this.team2.teamColor);
            this.team2.addMage(mage);

        }


    }




}
var game=new Game();
game.init();
setInterval(function() {
game.render();
}, 500);


