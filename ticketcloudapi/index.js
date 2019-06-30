const express = require('express');
const bodyParser = require('body-parser');
const Cors = require("cors");

const eventorganizer = require("./model/eventorganizer");
const event = require("./model/event");
const attendance = require("./model/attendance");
const attendee = require("./model/attendee");
const bankingdetails = require("./model/bankingdetails");
const eventcategory = require("./model/eventcategory");
const eventcontract = require("./model/eventcontract");
const sales = require("./model/sales");
const paymentoption = require("./model/paymentoption");
const ticket = require("./model/ticket");
const tickettype = require("./model/tickettype");





const app = express();
app.listen(3000);

// parse application/json
app.use(bodyParser.json());
app.use(Cors());+

///eventorganizer
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

///attendance
app.get("/api/attendance/:id", function(req, res){
    try {
        attendance.getattendance(req.params.id,function(err, data){
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

app.post("/api/attendance", function(req, res){
    try {
        attendance.insertattendance(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                attendance.getattendance(data.insertId, function(err, data){
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

app.put("/api/attendance/:id", function(req, res){
    try {
        attendance.updateattendance(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                attendance.getattendance(req.params.id, function(err, data){
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

app.delete("/api/attendance/:id", function(req, res){
    try {
        attendance.deleteattendance(req.params.id, function(err, data){
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

///attendee
app.get("/api/attendee/:id", function(req, res){
    try {
        attendee.getattendee(req.params.id,function(err, data){
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

app.post("/api/attendee", function(req, res){
    try {
        attendee.insertattendee(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                attendee.getattendee(data.insertId, function(err, data){
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

app.put("/api/attendee/:id", function(req, res){
    try {
        attendee.updateattendee(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                attendee.getattendee(req.params.id, function(err, data){
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

app.delete("/api/attendee/:id", function(req, res){
    try {
        attendee.deleteattendee(req.params.id, function(err, data){
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

///bankingdetails
app.get("/api/bankingdetails/:id", function(req, res){
    try {
        bankingdetails.getbankingdetails(req.params.id,function(err, data){
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

app.post("/api/bankingdetails", function(req, res){
    try {
        bankingdetails.insertbankingdetails(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                bankingdetails.getbankingdetails(data.insertId, function(err, data){
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

app.put("/api/bankingdetails/:id", function(req, res){
    try {
        bankingdetails.updatebankingdetails(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                bankingdetails.getbankingdetails(req.params.id, function(err, data){
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

app.delete("/api/bankingdetails/:id", function(req, res){
    try {
        bankingdetails.deletebankingdetails(req.params.id, function(err, data){
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

///eventcategory
app.get("/api/eventcategory/:id", function(req, res){
    try {
        eventcategory.geteventcategory(req.params.id,function(err, data){
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

app.post("/api/eventcategory", function(req, res){
    try {
        eventcategory.inserteventcategory(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                eventcategory.geteventcategory(data.insertId, function(err, data){
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

app.put("/api/eventcategory/:id", function(req, res){
    try {
        eventcategory.updateeventcategory(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                eventcategory.geteventcategory(req.params.id, function(err, data){
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

app.delete("/api/eventcategory/:id", function(req, res){
    try {
        eventcategory.deleteeventcategory(req.params.id, function(err, data){
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

///eventcontract
app.get("/api/eventcontract/:id", function(req, res){
    try {
        eventcontract.geteventcontract(req.params.id,function(err, data){
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

app.post("/api/eventcontract", function(req, res){
    try {
        eventcontract.inserteventcontract(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                eventcontract.geteventcontract(data.insertId, function(err, data){
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

app.put("/api/eventcontract/:id", function(req, res){
    try {
        eventcontract.updateeventcontract(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                eventcontract.geteventcontract(req.params.id, function(err, data){
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

app.delete("/api/eventcontract/:id", function(req, res){
    try {
        eventcontract.deleteeventcontract(req.params.id, function(err, data){
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


///paymentoption
app.get("/api/paymentoption/:id", function(req, res){
    try {
        paymentoption.getpaymentoption(req.params.id,function(err, data){
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

app.post("/api/paymentoption", function(req, res){
    try {
        paymentoption.insertpaymentoption(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                paymentoption.getpaymentoption(data.insertId, function(err, data){
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

app.put("/api/paymentoption/:id", function(req, res){
    try {
        paymentoption.updatepaymentoption(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                paymentoption.getpaymentoption(req.params.id, function(err, data){
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

app.delete("/api/paymentoption/:id", function(req, res){
    try {
        paymentoption.deletepaymentoption(req.params.id, function(err, data){
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


///sales
app.get("/api/sales/:id", function(req, res){
    try {
        sales.getsales(req.params.id,function(err, data){
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

app.post("/api/sales", function(req, res){
    try {
        sales.insertsales(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                sales.getsales(data.insertId, function(err, data){
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

app.put("/api/sales/:id", function(req, res){
    try {
        sales.updatesales(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                sales.getsales(req.params.id, function(err, data){
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

app.delete("/api/sales/:id", function(req, res){
    try {
        sales.deletesales(req.params.id, function(err, data){
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

///ticket
app.get("/api/ticket/:id", function(req, res){
    try {
        ticket.getticket(req.params.id,function(err, data){
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

app.post("/api/ticket", function(req, res){
    try {
        ticket.insertticket(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                ticket.getticket(data.insertId, function(err, data){
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

app.put("/api/ticket/:id", function(req, res){
    try {
        ticket.updateticket(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                ticket.getticket(req.params.id, function(err, data){
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

app.delete("/api/ticket/:id", function(req, res){
    try {
        ticket.deleteticket(req.params.id, function(err, data){
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


///tickettype
app.get("/api/tickettype/:id", function(req, res){
    try {
        tickettype.gettickettype(req.params.id,function(err, data){
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

app.post("/api/tickettype", function(req, res){
    try {
        tickettype.inserttickettype(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                tickettype.gettickettype(data.insertId, function(err, data){
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

app.put("/api/tickettype/:id", function(req, res){
    try {
        tickettype.updatetickettype(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                tickettype.gettickettype(req.params.id, function(err, data){
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

app.delete("/api/tickettype/:id", function(req, res){
    try {
        tickettype.deletetickettype(req.params.id, function(err, data){
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


