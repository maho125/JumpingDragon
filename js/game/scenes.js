game.module(
    'game.scenes'
)
.require(
    'engine.scene'
)
.body(function() {

SceneGame = game.Scene.extend({
    backgroundColor : 0xCCCCCC,
    obstacles: [],
    score: 0,
    init: function() {
          this.world = new game.World(0,9.81);
          this.initGame();
 
    },
    
    initGame: function(){
    
          //floor
          this.floor = new Floor(0,game.system.height-20);
          
          //obstacles
          this.createObstacles(6);
          
          //player
          this.player = new Player(50);
          
          //score
          this.scoreBox = new ScoreText(this.score,10,10,0.7);

    },
    
    createObstacles : function(num){
    
         for(var i=0; i < num; i++)
         {
           if(game.scene.obstacles.length < num){
              game.scene.obstacles.push(new Obstacle(100+i*100,parseInt(game.system.height - 120 - 100*Math.random())));
           }else{
              game.scene.obstacles[i].setPosition(100+i*100,parseInt(game.system.height - 120 - 100*Math.random()));
           }
         }

    },
    
    clearObstacles : function(){

         for(var i=0; i<game.scene.obstacles.length;i++)
         {                                                                  
            game.scene.obstacles[i].remove(game.scene.obstacles[i]); 
         }
        
    },
    
    keydown : function(event){

             switch(event){
                case 'W'    :
                case 'UP'   :   this.player.jump();
                                break;
                case 'A'    :
                case 'LEFT'   : this.player.acceleration[0] = -1; break;
                case 'D'    :
                case 'RIGHT' :  this.player.acceleration[0] = 1; break;
             
             }
             
   },
   
   keyup : function(event){
            
           switch(event){
                case 'UP'   :
                case 'W'    :   
                                 break;
                case 'A'    :
                case 'LEFT'   :  this.player.acceleration[0] = 0; break;
                case 'D'    :
                case 'RIGHT' :   this.player.acceleration[0] = 0; break;
             
           }
   },
    
    update : function(){
             this._super();
             
             this.player.update();
             
             this.scoreBox.setScore(this.score);
    }  
});

});