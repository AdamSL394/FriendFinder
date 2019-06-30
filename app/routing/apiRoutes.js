var surveyResults = require ("../data/friends")
module.exports = function (app) {

    app.get("/friends", function (req, res) {
        res.json(surveyResults);
    });


    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
    
            
            var currentPerson = req.body
            var equator = []
            for(var i = 0; i<surveyResults.length;i++){
                var difference = 0
                for(var j = 0; j < surveyResults[i].scores.length; j++){
                   console.log((parseInt(surveyResults[i].scores[j])))
                    difference  += parseInt(currentPerson.scores[j]) - (parseInt(surveyResults[i].scores[j]))
                    console.log("below is the equator in the for loop ");
                    console.log(equator);
                    equator.push({diff:difference,name:surveyResults.name});
                }
                
                // surveyResults.push(req.body);
                

                
                // console.log("newperson");
                // total=0
                // for (var k = 0; k < newPerson.length; k++){
                //     total= newPerson[k]+total
                // }
                // console.log("------Total below")
                // console.log(total)
            
                //for(var j= 0)
                // 
                //console.log("below You are turning the scores into integers")
            //    var scores = parseInt(surveyResults[i].scores)
            //    console.log("below You are printing the survey index scores  scores ")
            //    console.log((surveyResults[i].scores[i]))
            //    console.log("below You are printing the scores ")
            //    console.log(scores[i]);
            }

            res.json(surveyResults);

    });
}