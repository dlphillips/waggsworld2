// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var session = require('cookie-session');

// Require Schemas
var User = require("./server/models/user");
var Bars = require("./server/models/bars");
var Boarders = require("./server/models/boarders");
var Vets = require("./server/models/vets");
var Hospitals = require("./server/models/hospitals");
var Groomers = require("./server/models/groomers");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("mongodb://webuser:webuser@ds129023.mlab.com:29023/waggsworld");

var db = mongoose.connection;

db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function () {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

User.createStrategy();


app.post("/api/users/registration",
  function (req, res) {

    newUser = new User(req.body);

    User.register(newUser, req.body.password, function (err) {
      if (err) {
        console.log('An error occured', err)
      } else {
        console.log('User ' + newUser.username + ' created succesfully');
      }

    })
    res.redirect('/')
  });


app.get('/api/users/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      User.
        findOneAndUpdate({ username: user.username }, {
          last: Date.now,
        }
        )
      //need to finish adding tracking metric info for user login info... lastLogin, attempts, etc. 
      // return res.redirect('/users/' + user.username);
    });
  });
});

app.post('/api/users/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) { return next(err); }
      // if (!user) { return res.redirect('/login'); }
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        console.log('User ' + req.body.username + ' authenticated succesfully');
        return res.redirect('/'), res.send({ user: user.username });
      });
    })(req, res, next);
  });


app.get("/api/getmapdata", function (req, res) {
     var METERS_PER_MILE = 1609.34;
     var mongoModel = req.query.model;

     console.log(mongoModel);

     switch(mongoModel) {
       case "bars":
             Bars.find({ geometry: { $nearSphere: { $geometry: { type: "Point", coordinates: [ req.query.lon, req.query.lat ] }, $maxDistance: req.query.start * METERS_PER_MILE } } })
             .exec(function (err, doc) {
              if (err) {
                console.log(err);
              }
              else {
                res.send(doc);
              }
            });
           break;
       case "boarders":
             Boarders.find({ geometry: { $nearSphere: { $geometry: { type: "Point", coordinates: [ req.query.lon, req.query.lat ] }, $maxDistance: req.query.start * METERS_PER_MILE } } })
             .exec(function (err, doc) {
              if (err) {
                console.log(err);
              }
              else {
                res.send(doc);
              }
            });
           break;
       case "groomers":
             Groomers.find({ geometry: { $nearSphere: { $geometry: { type: "Point", coordinates: [ req.query.lon, req.query.lat ] }, $maxDistance: req.query.start * METERS_PER_MILE } } })
             .exec(function (err, doc) {
              if (err) {
                console.log(err);
              }
              else {
                res.send(doc);
              }
            });
           break;
       default:
       case "hospitals":
             Hospitals.find({ geometry: { $nearSphere: { $geometry: { type: "Point", coordinates: [ req.query.lon, req.query.lat ] }, $maxDistance: req.query.start * METERS_PER_MILE } } })
             .exec(function (err, doc) {
              if (err) {
                console.log(err);
              }
              else {
                res.send(doc);
              }
            });
           break;     
       case "vets":
             Vets.find({ geometry: { $nearSphere: { $geometry: { type: "Point", coordinates: [ req.query.lon, req.query.lat ] }, $maxDistance: req.query.start * METERS_PER_MILE } } })
             .exec(function (err, doc) {
              if (err) {
                console.log(err);
              }
              else {
                res.send(doc);
              }
            });
           break;
     }    
});

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});



// // Route to get all saved articles
// app.get("/api/saved", function (req, res) {

//   Article.find({})
//     .exec(function (err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });

// Route to add an article to saved list
// app.post("/api/saved", function (req, res) {
//   var newArticle = new Article(req.body);

//   console.log(req.body);

//   newArticle.save(function (err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });


//   if (err) {
//     console.log('The following error occured:');
//     console.log(err);
//   }
//   console.log('User ' + req.body.username + ' authenticated succesfully');
//   res.redirect('/');

// });






// console.log(newUser);



// Route to delete an article from saved list
// app.delete("/api/saved/", function (req, res) {

//   var url = req.param("url");

//   Article.find({ url: url }).remove().exec(function (err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Deleted");
//     }
//   });