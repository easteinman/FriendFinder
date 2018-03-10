var path = require('path');
var friendsList = require("../app/data/friends.js");

// Routes
// =============================================================
module.exports = function(app) {

    // Displays the friendList
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });

    // Creates New Friends and find their match
    app.post("/api/friends", function(req, res) {

    //====================== CREATING NEW FRIEND ======================      
        // Grabs user input from the html
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        };
        // console.log(newFriend);

        // Need to parse the score string and return the integers
        var scoresArray = [];

        for(var i=0; i < req.body.scores.length; i++){
          scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;
        // Console logging stuff to make sure it's correct
        // console.log(newFriend.name);
        // console.log(newFriend.photo);
        // console.log(newFriend.scores);

    //====================== GRABBING THE MATCH ======================
		// Empty variable to push match name to
        var matchName = "";
        // Empty variable to push match photo link to
        var matchPhoto = "";
        // Base difference value to run calculations on
		var matchDifference = 100;

        // Loop through all the friends currently in the friendsList in friends.js
		for (var i = 0; i < friendsList.length; i++) {

			// Create a variable to hold the difference between each score in each array
            var scoreDifference = 0;
            // Loop through all the friends' scores currently in the friendsList in friends.js
			for (var j = 0; j < newFriend.scores.length; j++) {
                // Calculate the difference between the current friends' scores and the new friend's. Math.abs returns the absolute value of a number so we have no negatives.
                scoreDifference += Math.abs(friendsList[i].scores[j] - newFriend.scores[j]);
            }
            
			// console.log(scoreDifference);

			// When the loop finds the lowest score diference, it stores that match
			if (scoreDifference < matchDifference) {

                matchDifference = scoreDifference;
                
                // Pushes matchName to empty variable above
                matchName = friendsList[i].name;
                // Pushes matchPhoto to empty variable above
                matchPhoto = friendsList[i].photo;
                
                // console.log(matchName);
                // console.log(matchPhoto);
			}
		}

        // Push the new friend to the friendsList in friends.js
        friendsList.push(newFriend);

    //====================== SEND MATCH TO SURVEY.HTML ======================
        res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});
    });

};