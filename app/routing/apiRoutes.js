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
                //    console.log((parseInt(surveyResults[i].scores[j])))
                    difference  += Math.abs((parseInt(currentPerson.scores[j]) - (parseInt(surveyResults[i].scores[j]))))
                    // console.log("below is the equator in the for loop ");
                    
                    
                }
                equator.push({diff:difference,name:surveyResults[i].name});
        
            }
        
            surveyResults.push(req.body);
        
                equator.sort(function(a,b){
                    return a.diff-b.diff
                });
            // console.log("below is the sorted equator")
            // console.log(equator[0])
           
            res.json(equator[0]);

    });
}