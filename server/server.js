const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jsonServer = require("json-server");
const usersDB = require('./users.json');

const middlewares = jsonServer.defaults();
const router = jsonServer.router("./server/data.json");
const server = jsonServer.create();

const findUser = (email, password) =>
  usersDB.find((user) => user.email === email && user.password === password);

const findUserById = (id) =>
  usersDB.find((user) => user.id === id);

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password",
  session: false,
},
  (email, password, done) => {
    const user = findUser(email, password);
    if (!user) { return done(null, false); }

    return done(null, user);
  }
));

passport.serializeUser((user, done) =>
  done(null, user.id));

  passport.deserializeUser((id, done) => {
  const user = findUserById(id);
  done(null, user);
});

server.use(passport.initialize());
server.use(passport.session());
server.use(middlewares);

server.post("/login", passport.authenticate("local"), (req, res) => {
  const { password, ...user } = req.user;
  res.json(user);
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running http://localhost:3001/");
});

