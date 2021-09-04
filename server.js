// // app.js file

// const { append } = require('vary');

// var jsonServer = require('json-server');

// // Returns an Express server
// var server = jsonServer.create();

// // Set default middlewares (logger, static, cors and no-cache)
// server.use(jsonServer.defaults());

// // Add custom routes
// // server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })


// var router = jsonServer.router('db.json');

// server.use(router);

// server.listen(3000);
const express=require('express');
var session = require('express-session')
const mysql = require("mysql");
var parseurl = require('parseurl')
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(session({
    secret: 'CSE135watermelonsugarhi.site', // just a long random string
    resave: false,
    saveUninitialized: true,
    cookie: {path: '/', httpOnly: true, secure: false, expires: 60000}
}));
// app.use(function (req, res, next) {
//     if (!req.session.views) {
//       req.session.views = {}
//     }
  
//     // get the url pathname
//     var pathname = parseurl(req).pathname
  
//     // count the views
//     req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  
//     next()
//   })
const pool = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"Cse135@@",
    database: "DATA",
});

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', '*');
    	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.get('/static',(req,res)=>{
    pool.query("SELECT * FROM static_data",(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json(results);  
        }
    });
});
app.get('/static/:id',(req,res)=>{
    pool.query("SELECT * FROM static_data where id = ?",req.params.id,(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json(results);

        }
    });
});

app.get('/performance',(req,res)=>{
    pool.query("SELECT * FROM performance_data",(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json(results);

        }
    });
});
app.get('/performance/:id',(req,res)=>{
    pool.query("SELECT * FROM performance_data where id = ?",req.params.id,(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json(results);

        }
    });
});
app.get('/activity',(req,res)=>{
    pool.query("SELECT * FROM activity_data",(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json(results);

        }
    });
});
app.get('/activity/:id',(req,res)=>{
    pool.query("SELECT * FROM activity_data where id = ?",req.params.id,(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({status:"success",results});

        }
    });
});
app.post('/static',(req,res)=>{
    const query = 'INSERT INTO static_data VALUE (?, ?, ?, ?, ?, ?, ?)';
    const data={
        id: req.sessionID.toString(), 
        userAgent: JSON.stringify(req.body.userAgent),
        language: JSON.stringify(req.body.language),
        acceptsCookies: JSON.stringify(req.body.acceptsCookies),
        screenDimmensions: JSON.stringify(req.body.screenDimmensions),
        connection: JSON.stringify(req.body.connection),
        ready: JSON.stringify(req.body.ready)
    };
    pool.query(query,Object.values(data),(error)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({id:data.id});
        }
    });

    
});

app.post('/performance',(req,res)=>{
    const query = "INSERT INTO performance_data VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const data={
        id: req.sessionID.toString(),
        startTime: JSON.stringify(req.body.startTime),
        fetchStart: JSON.stringify(req.body.fetchStart),
        requestStart: JSON.stringify(req.body.requestStart),
        responseStart: JSON.stringify(req.body.responseStart),
        responseEnd: JSON.stringify(req.body.responseEnd),
        domInteractive: JSON.stringify(req.body.domInteractive),
        domContentLoadedEventStart: JSON.stringify(req.body.domContentLoadedEventStart),
        domContentLoadedEventEnd: JSON.stringify(req.body.domContentLoadedEventEnd),
        domComplete: JSON.stringify(req.body.domComplete),
        loadEventStart: JSON.stringify(req.body.loadEventStart),
        loadEventEnd: JSON.stringify(req.body.loadEventEnd),
        duration: JSON.stringify(req.body.duration),
        transferSize: JSON.stringify(req.body.transferSize),
        decodedBodySize: JSON.stringify(req.body.decodedBodySize),
        ready: JSON.stringify(req.body.ready)
    };
    pool.query(query,Object.values(data),(error)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({id:data.id});
        }
    });

});
app.post('/activity',(req,res)=>{
    const query = 'INSERT INTO activity_data VALUE (?, ?, ?, ?, ?)';
    const data={
        id: req.sessionID.toString(), 
        mousePosition: JSON.stringify(req.body.mousePosition),
        mouseClicks: JSON.stringify(req.body.mouseClicks),
        keystrokes: JSON.stringify(req.body.keystrokes),
        timing: JSON.stringify(req.body.timing)
    };
    pool.query(query,Object.values(data),(error)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({id:data.id});
        }
    });

});
app.delete("/static/:id",(req,res)=>{
    pool.query("DELETE FROM static_data where id = ?",req.params.id,(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({status:"success",results});

        }
    });
});

app.delete("/performance/:id",(req,res)=>{
    pool.query("DELETE FROM performance_data where id = ?",req.params.id,(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({status:"success",results});

        }
    });
});

app.delete("/activity/:id",(req,res)=>{
    pool.query("DELETE FROM activity_data where id = ?",req.params.id,(error,results)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({status:"success",results});

        }
    });
});
app.put('/static/:id',(req,res)=>{
    const query = 'UPDATE static_data SET userAgent = ?, language = ?, acceptsCookies = ?, screenDimmensions = ?, connection = ?, ready = ? where id = ?';
    const data={
        id: req.params.id.toString(), 
        userAgent: JSON.stringify(req.body.userAgent),
        language: JSON.stringify(req.body.language),
        acceptsCookies: JSON.stringify(req.body.acceptsCookies),
        screenDimmensions: JSON.stringify(req.body.screenDimmensions),
        connection: JSON.stringify(req.body.connection),
        ready: JSON.stringify(req.body.ready),
    };
    pool.query(query,[data.userAgent,data.language,data.acceptsCookies,data.screenDimmensions,data.connection,data.ready, data.id],(error)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({status:"success",data:data});
        }
    });

    
});

app.put('/performance/:id',(req,res)=>{
    const query = 'UPDATE performance_data SET startTime = ?, fetchStart = ?, requestStart = ?, responseStart = ?, responseEnd = ?, domInteractive = ?, domContentLoadedEventStart = ?, domContentLoadedEventEnd = ?, domComplete = ?, loadEventStart = ?, loadEventEnd = ?, duration = ?, transferSize = ?, decodedBodySize = ?, ready = ? where id = ?';
    const data={
        id: req.sessionID.toString(),
        startTime: JSON.stringify(req.body.startTime),
        fetchStart: JSON.stringify(req.body.fetchStart),
        requestStart: JSON.stringify(req.body.requestStart),
        responseStart: JSON.stringify(req.body.responseStart),
        responseEnd: JSON.stringify(req.body.responseEnd),
        domInteractive: JSON.stringify(req.body.domInteractive),
        domContentLoadedEventStart: JSON.stringify(req.body.domContentLoadedEventStart),
        domContentLoadedEventEnd: JSON.stringify(req.body.domContentLoadedEventEnd),
        domComplete: JSON.stringify(req.body.domComplete),
        loadEventStart: JSON.stringify(req.body.loadEventStart),
        loadEventEnd: JSON.stringify(req.body.loadEventEnd),
        duration: JSON.stringify(req.body.duration),
        transferSize: JSON.stringify(req.body.transferSize),
        decodedBodySize: JSON.stringify(req.body.decodedBodySize),
        ready: JSON.stringify(req.body.ready)
    };
    pool.query(query,[data.startTime, data.fetchStart, data.requestStart, data.responseStart, data.responseEnd, data.domInteractive, data.domContentLoadedEventStart, data.domContentLoadedEventEnd, data.domComplete, data.loadEventStart, data.loadEventEnd, data.duration, data.transferSize, data.decodedBodySize, data.ready, data.id],(error)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({status:"success",data:data});
        }
    });
});
app.put('/activity/:id',(req,res)=>{
    const query = 'UPDATE activity_data SET mousePosition = ?, mouseClicks = ?, keystrokes = ?, timing = ? where id = ?';
    const data={
        id: req.sessionID.toString(), 
        mousePosition: JSON.stringify(req.body.mousePosition),
        mouseClicks: JSON.stringify(req.body.mouseClicks),
        keystrokes: JSON.stringify(req.body.keystrokes),
        timing: JSON.stringify(req.body.timing)
    };
    pool.query(query,[data.mousePosition,data.mouseClicks,data.akeystrokes,data.timing,data.id],(error)=>{
        if(error){
            res.json({status:"failure",reason: error.code});
        }else{
            res.json({status:"success",data:data});
        }
    });
});

app.listen(PORT, () => console.log('api is alive on port: '+PORT));

