const express = require("express");
const path = require("path");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);
const db = require("./database/database.js");
const flash = require("express-flash-message").default;

const app = express();
const port = 3000;

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session management
app.use(
  session({
    store: new SQLiteStore({
      db: "tms.db",
      dir: "./database",
    }),
    secret: "your-secret-key", // Replace with a real secret key
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }, // 1 week
  })
);

app.use(
  flash({
    sessionKeyName: 'express-flash-message',
    onAddFlash: (type, message) => {
      // Optional: Add custom logic when flash messages are added
      // console.log(`Flash added: ${type} - ${message}`);
    },
    onConsumeFlash: (type, messages) => {
      // Optional: Add custom logic when flash messages are consumed
      // console.log(`Flash consumed: ${type} - ${messages}`);
    },
  })
);

// Global variables for views
app.use((req, res, next) => {
  res.locals.getFlashMessages = req.getFlashMessages;
  res.locals.user = req.session.user || null;
  next();
});

// Routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const toursRouter = require("./routes/tours");
const adminRouter = require("./routes/admin");

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/tours", toursRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
