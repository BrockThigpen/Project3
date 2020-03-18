// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });

db.user.create({ name: "" })
  .then(dbuser => {
    console.log(dbuser);
  })
  .catch(({message}) => {
    console.log(message);
  });

app.post("/submit", ({body}, res) => {
  db.user.create(body)
    .then(({_id}) => db.user.findOneAndUpdate({}, { $push: { user: _id } }, { new: true }))
    .then(dbuser => {
      res.json(dbuser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/login", (req, res) => {
  db.Book.find({})
    .then(dbuser => {
      res.json(dbuser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/", (req, res) => {
  db.user.find({})
    .then(dbuser => {
      res.json(dbuser);
    })
    .catch(err => {
      res.json(err);
    });
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});