class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
       p1=createSprite(200,200);
       if(keyIsDown(UP_ARROW) && player.index !== null){
        p1.velocityY=-2;
        p1.velocityY+=1;
        player.update();
         
        }
       p1.addImage("p1",pImage);
       p2=createSprite(200,500);
       if(keyIsDown(UP_ARROW) && player.index !== null){
        p2.velocityY=-2;
        p2.velocityY+=1;
        player.update();
         
        }
       p2.addImage("p2",pImage);
       ps = [p1,p2];
    }
  
    play(){
      form.hide();
      textSize(30);
      text("ready to leap!??", 50, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
      



        var index=0;
        var x;
        var y=0;
  
  
        //var display_position = 130;
        for(var plr in allPlayers){
  
          index=index+1;
          y=y+200;
          x=displayHeight-allPlayers[plr].distance;
          ps[index-1].x=x;
          ps[index-1].y=y;
          if(index === player.index){
            ps[index-1].shapeColor="red";
            camera.position.y=displayWidth/2;
            camera.position.x=ps[index-1].x;
  
  
          }
          // if (plr === "player" + player.index)
          //   fill("red")
          // else
          //   fill("black");
  
          // display_position+=20;
          // textSize(15);
          // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
       player.distance -=20
       player.update();
  
       }
       
       function spawnObstacle(){
        if (World.frameCount%350===0) {
         var obs=createSprite(350,200,10,10);
         
         obs.velocityY=1;
         obs.scale=0.5;
         obs.lifetime=400;
         
          
      } 
        }
       
      drawSprites();
      
      
    }
      
  }
  