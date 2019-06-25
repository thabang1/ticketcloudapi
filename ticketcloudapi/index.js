const express = require('express');
const bodyParser = require('body-parser');
const Cors = require("cors");

const eventorganizer = require("./model/eventorganizer");
const event = require("./model/event");
const app = express();
app.listen(3000);

// parse application/json
app.use(bodyParser.json());
app.use(Cors());+


app.get("/api/eventorganizer/:id", function(req, res){
    try {
        eventorganizer.geteventorganizer(req.params.id,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/eventorganizer", function(req, res){
    try {
        eventorganizer.inserteventorganizer(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                eventorganizer.geteventorganizer(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
});

app.put("/api/eventorganizer/:id", function(req, res){
    try {
        eventorganizer.updateeventorganizer(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                eventorganizer.geteventorganizer(req.params.id, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
})

app.delete("/api/eventorganizer/:id", function(req, res){
    try {
        eventorganizer.deleteeventorganizer(req.params.id, function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

///event
app.get("/api/event/:id", function(req, res){
    try {
        event.getevent(req.params.id,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/event", function(req, res){
    try {
        event.insertevent(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                event.getevent(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
});

app.put("/api/event/:id", function(req, res){
    try {
        event.updateevent(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                event.getevent(req.params.id, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
})

app.delete("/api/event/:id", function(req, res){
    try {
        event.deleteevent(req.params.id, function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


