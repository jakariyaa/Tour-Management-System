const User = require("../models/user");
const bcrypt = require("bcryptjs");
const db = require("../database/database");

const authController = {
  register: (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.flash("error_msg", "Please fill in all fields");
      return res.redirect("/register");
    }
    const existingUser = User.findByUsername(username);
    if (existingUser) {
      res.flash("error_msg", "User already exists");
      return res.redirect("/register");
    }
    User.create(username, password);
    res.flash("success_msg", "You are now registered and can log in");
    res.redirect("/login");
  },
  login: (req, res) => {
    const { username, password } = req.body;
    const user = User.findByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      res.flash("success_msg", "You are now logged in");
      res.redirect("/profile");
    } else {
      res.flash("error_msg", "Invalid credentials");
      res.redirect("/login");
    }
  },
  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.flash("error_msg", "Could not log out");
        return res.redirect("/profile");
      }
      res.redirect("/");
    });
  },
  updateProfile: (req, res) => {
    const { username } = req.body;
    const userId = req.session.user.id;

    if (!username) {
      res.flash("error_msg", "Username is required");
      return res.redirect("/profile/edit");
    }

    // Update user in database
    const stmt = db.prepare("UPDATE Users SET username = ? WHERE id = ?");
    const result = stmt.run(username, userId);

    if (result.changes > 0) {
      // Update session user data
      req.session.user.username = username;
      res.flash("success_msg", "Profile updated successfully");
      res.redirect("/profile");
    } else {
      res.flash("error_msg", "Failed to update profile");
      res.redirect("/profile/edit");
    }
  },
};

module.exports = authController;
