const Tour = require("../models/tour");

const tourController = {
  getAllTours: (req, res) => {
    const tours = Tour.getAll();
    res.render("tours", { title: "Tours", tours: tours });
  },
  getTourById: (req, res) => {
    const tour = Tour.findById(req.params.id);
    if (tour) {
      res.render("tour-detail", { title: tour.title, tour: tour });
    } else {
      res.status(404).send("Tour not found");
    }
  },
};

module.exports = tourController;
