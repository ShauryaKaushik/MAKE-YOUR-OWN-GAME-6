class Game{

    constructor(){



    }

    readState(){

      database.ref("gameState").on("value",function(data){
          gameState = data.val();
      })

    }

    updateState(state){

        database.ref("/").update({gameState : state})

    }

    start(){

        if(gameState === 0){
            player = new Player();
            player.readCount();
            form = new Form();
            form.display();
        }
      player1 = createSprite(50,100,10,10);
      player1.addAnimation("runningMan1",runningMan);
      player2 = createSprite(50,350,10,10);
      player2.addAnimation("runningMan2",runningMan);

      players = [player1,player2]

    }

    play(){
        form.hide();
        Player.readPlayerInfo();
    
        if(allPlayers !== undefined){

          image(backgroundImg,0,0,displayWidth*5,displayHeight);
          var index = 0;
          var x;
          var y = 100;

          for(var plr in allPlayers){
            index = index+1
            x = displayWidth/2+allPlayers[plr].distance;
            y = y+160;
            players[index-1].x=x;
            players[index-1].y=y
            if(index===player.index){
              players[index-1].shapeColor = "red";
              camera.position.x = players[index-1].x+700;
              camera.position.y = displayHeight/2+10;
            }
         }
        }
    
        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
          player.distance +=10;
          player.update();
        }
        drawSprites();
      }
         end(){
          if(player.distance===7070){
            gameState = 2;
            text("Game Over !",200,200);
            } 
         }
}

