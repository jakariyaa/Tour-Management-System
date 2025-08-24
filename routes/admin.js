const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { isAdmin } = require("../middleware/auth");

router.get("/dashboard", isAdmin, adminController.getDashboard);
router.post("/tours/add", isAdmin, adminController.addTour);
router.get("/tours/:id/edit", adminController.getEditTourForm);
router.post("/tours/:id/edit", adminController.updateTour);
router.post("/tours/delete/:id", isAdmin, adminController.deleteTour);

module.exports = router;
