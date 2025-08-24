const Tour = require("../models/tour");
const User = require("../models/user");

const adminController = {
  getDashboard: (req, res) => {
    const tours = Tour.getAll();
    const users = User.getAll(); // This function needs to be added to the User model
    res.render("admin/dashboard", { title: "Admin Dashboard", tours, users });
  },
  addTour: (req, res) => {
    Tour.create(req.body);
    res.redirect("/admin/dashboard");
  },
  getEditTourForm: (req, res) => {
    const tour = Tour.findById(req.params.id);
    if (tour) {
      res.render("edit-tour", { title: `Edit ${tour.title}`, tour: tour });
    } else {
      res.status(404).send("Tour not found");
    }
  },
  updateTour: (req, res) => {
    const { title, description, location, price, image_url } = req.body;
    const result = Tour.update(req.params.id, {
      title,
      description,
      location,
      price,
      image_url,
    });

    if (result.changes > 0) {
      res.flash("success_msg", "Tour updated successfully");
      res.redirect(`/tours/${req.params.id}`);
    } else {
      res.flash("error_msg", "Failed to update tour");
      res.redirect(`/tours/${req.params.id}/edit`);
    }
  },
  deleteTour: (req, res) => {
    Tour.delete(req.params.id);
    res.redirect("/admin/dashboard");
  },
};

module.exports = adminController;
