var path = require('path');
var friendArray = require('../data/friends');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    });

    app.post("/api/friends", function (req, res) {
      //this var is to compare new-search.
      // less difference will be matched
        var soulmate = {
          name: "",
          photo: "",
          difference: Infinity
        };
    
    
        // console.log(req.body);
        // console.log(userScores);
    
        var userData = req.body;
        var userScores = userData.scores;
        
    
       
        var totalDifference = 0;
    
        for (var i = 0; i < friendArray.length; i++) {
        //   console.log(friendArray[i]);
          totalDifference = 0;
    
          for (var j = 0; j < friendArray[i].scores[j]; j++); {
    
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendArray[i].scores[j]))
    
            if (totalDifference <= soulmate.difference) {
    
              soulmate.name = friendArray[i].name;
              soulmate.photo = friendArray[i].photo;
              soulmate.difference = totalDifference;
            }
          }
        }
    
        friendArray.push(userData);
    
        res.json(soulmate);
      });
    
    }