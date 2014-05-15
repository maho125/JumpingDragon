game.module(
    'game.objects'
)
.require(
    'engine.sprite'
)
.body(function() {

Floor = game.Class.extend({
   init : function(x,y){
  
          this.sprite = new game.TilingSprite('floor',game.system.width,20);
          this.sprite.anchor.set(0.5,0.5);
          
          this.shape = new game.Rectangle(game.system.width*2,20);
          
          this.body = new game.Body({
            position: {x: x+game.system.width*0.5, y: y+10},
            collisionGroup: 0
          });

          this.body.addShape(this.shape);
          
          game.scene.world.addBody(this.body);
          game.scene.stage.addChild(this.sprite);
          game.scene.addObject(this);
          
   },
   
   update : function(){ 
  
           this.sprite.position.x = this.body.position.x;
           this.sprite.position.y = this.body.position.y;
   } 
});

Obstacle = game.Class.extend({
   isRemoved: false,
   init : function(x,y){
  
          this.sprite = new game.Sprite('apple');
          this.sprite.anchor.set(0.5,0.5);

          this.shape = new game.Rectangle(this.sprite.width,this.sprite.height);
          
          this.body = new game.Body({
            position: {x: x, y: y},
            collisionGroup: 1,
            collideAgainst: 1
          });
          
          this.body.addShape(this.shape);
          this.body.collide = this.collide.bind(this); 
          
          game.scene.world.addBody(this.body);
          game.scene.stage.addChild(this.sprite);
          game.scene.addObject(this);
          
          this.update();
   },
   
   setPosition: function(x,y){
          this.isRemoved = false;
          this.body.position.x = x;
          this.body.position.y = y;
         
          game.scene.world.addBody(this.body);
          game.scene.stage.addChild(this.sprite);         
          game.scene.addObject(this);
          
          this.update();
   },
   
   remove : function(obj){
            if(this.isRemoved) { return; }
             
            obj.isRemoved = true;
            
            game.scene.world.removeBody(obj.body);
            game.scene.stage.removeChild(obj.sprite);    
            game.scene.removeObject(obj);
            
   },
   
   collide : function(body){
            if(this.isRemoved) { return; }
            
            game.scene.score+=1;
            this.remove(this);

            return false;
   },
   
   update : function(){ 
           if(this.isRemoved) { return; }
           this.sprite.position.x = this.body.position.x;
           this.sprite.position.y = this.body.position.y;
   } 
});

Player = game.Class.extend({
   isJumping: false,
   speedStep : [2,12],
   acceleration : [0,0],
   init : function(x,y){
          
          var move = [game.Texture.fromImage('dragon1'),game.Texture.fromImage('dragon2'),game.Texture.fromImage('dragon3'),game.Texture.fromImage('dragon4'),game.Texture.fromImage('dragon5'),game.Texture.fromImage('dragon6'),
                      game.Texture.fromImage('dragon7'),game.Texture.fromImage('dragon8'),game.Texture.fromImage('dragon9'),game.Texture.fromImage('dragon10'),game.Texture.fromImage('dragon11'),game.Texture.fromImage('dragon12')];
                       
          this.sprite = new game.MovieClip(move);
          this.sprite.anchor.set(0.5,0.5);
          this.sprite.stop();
          this.shape = new game.Rectangle(this.sprite.width,this.sprite.height);
          
          this.body = new game.Body({
            position: {x: x, y: game.system.height - this.sprite.height*0.5 - 20},
            collisionGroup: 1,
            collideAgainst: 0,
            mass: 20
          });
          
          this.body.addShape(this.shape);
          
          game.scene.world.addBody(this.body);
          game.scene.stage.addChild(this.sprite);
          game.scene.addObject(this);
          
          this.update();
   },
   
   jump : function(){
   
          if(!this.isJumping)
          {
            this.acceleration[1] = -1;
            this.isJumping = true;
          }
     
   },
   
   update: function(){
           
           if(this.body.position.x > game.system.width && this.acceleration[0]==1){
              this.body.position.x = 0;
              game.scene.clearObstacles();
              game.scene.createObstacles(6);
           }
           
           if(this.body.position.x < 0 && this.acceleration[0]==-1){
              this.body.position.x = game.system.width;
              game.scene.clearObstacles();
              game.scene.createObstacles(6);
           }

             switch(this.acceleration[0]){
                  case 1 :   this.sprite.scale.x = 1;
                             if(!this.isJumping){
                                this.sprite.play();
                             }else{
                                this.sprite.gotoAndStop(1);
                             } 
                             break;
                  case -1 :  this.sprite.scale.x = -1;
                             if(!this.isJumping){
                                this.sprite.play();
                             }else{
                                this.sprite.gotoAndStop(1);
                             }
                             break;
                  default:   this.sprite.gotoAndStop(1);                    
             } 

            
           this.body.position.x += this.acceleration[0]*this.speedStep[0];
           
           if(this.isJumping){
            this.body.position.y += this.acceleration[1]*this.speedStep[1];
           }
           
           if(this.isJumping && this.acceleration[1]==-1 && this.sprite.y < (game.system.height - this.sprite.height - 200)){
             this.acceleration[1] = 0;
           }
           
           if(this.acceleration[1]==0 && this.sprite.position.y >= (game.system.height - this.sprite.height*0.5 - 20)){
              this.isJumping = false;
              this.acceleration[1] = 0;
           }
           
           this.sprite.position.x = this.body.position.x;
           this.sprite.position.y = this.body.position.y + 10;
   }

});

ScoreText = game.Class.extend({
  
  init : function(text,x,y,scale){
      
        this.text = new game.BitmapText(text.toString(), {font: 'Pixel'});
        this.text.scale.x = this.text.scale.y = scale;
        this.text.position.x = x;
        this.text.position.y = y;
        game.scene.stage.addChild(this.text);
  
  },
  
  setScore : function(value){
  
        this.text.setText('Score: '+value.toString());
  }

});

});