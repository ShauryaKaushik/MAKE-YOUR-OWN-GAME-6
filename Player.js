class Player{

    constructor(){

        this.name = null;
        this.distance = 0;
        this.index = null;

    }

    //updating the player info for a particular player in the database
    update(){
        database.ref("players/player"+ this.index).update({
          name : this.name,
          distance : this.distance
      })

    }

    // is reading player info from the database 
    static readPlayerInfo(){

      database.ref("players").on("value",function(data){
        allPlayers = data.val();
      })

    }

    //updating the  player count in database 
    updateCount(count){
       database.ref("/").update({playerCount : count})
               
    }

    //reads the number of player count from the database 
    readCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val();
        })
    }


}

//Static Functions are not attached to any particular object. Hence, they are called by the class name instead of the object name 