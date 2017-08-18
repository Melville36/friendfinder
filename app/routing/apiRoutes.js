//Require the friends data table
var friendsData = require("../data/friends");

//Get and post data to the friends data table
module.exports = function(app){

  //Get data from the friends table
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  //Post data to the friends table
  app.post("/api/friends", function(req, res) {
   	  console.log(friendsData);
      
      for (i=0; i < friendsData.length; i++){
      	//Get Friends Scores
        var friendScoreArray = friendsData[i].scores;
      	var totalDiff = 0;
        for (j=0; j<friendScoreArray.length; j++){
      		
      		var friendScores = friendScoreArray[j];
      		var surveyUser = req.body.scores[j];
      		//console.log("Friends Score " + friendScores);
      		//console.log("New Friends Score " + surveyUser);
      		var questionDiff = Math.abs(friendScores - surveyUser);
          var newDiff = totalDiff + questionDiff;
          var totalDiff = newDiff;
      		//console.log("Question Diff " + questionDiff);
      		//console.log("Total Diff " + totalDiff);
          var oldDiff = totalDiff;
         if(totalDiff <= oldDiff){
             newMatch();
          }

      	}
         function newMatch(){
            //console.log(friendsData[i].name);
            //console.log(friendsData[i].photo);
            friendsData.push(req.body);
            console.log(friendsData[i]);
            res.json(
              [{name: friendsData[i].name},{photo: friendsData[i].photo}]);
         }

      }
      // friendsData.push(req.body);

      // console.log(req.body.scores);


      // var surveyUser = req.body.scores;

      // for(i=0; i<req.body.length; i++){

      // }

      // //Check compatibility here
      // res.json(true);
    
  });
}