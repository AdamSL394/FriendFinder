var surveyResults = require ("../data/friends")
console.log(surveyResults);
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(surveyResults);
    });


    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
      

        
            surveyResults.push(req.body);

            for(var i = 0; i<surveyResults.length;i++){
                // console.log(surveyResults[i])
               parseInt(surveyResults[i].scores)
               console.log(typeof(surveyResults[i].scores))
            }

            res.json(surveyResults);

    });
}