const express = require('express');
const router = express.Router();
const MedicineReminder = require('../models/MedicineReminder');
const sendEmail = require('../utils/sendEmail');

// inside router.post('/', ...)
await newMedicine.save();

// Send email alert
await sendEmail('relative_email@example.com', 'Medicine Reminder', `Reminder to take ${req.body.medicineName} at ${req.body.time}.`);

res.status(201).json(newMedicine);

// @route POST /api/medicines
// @desc Add new medicine
router.post('/', async (req, res) => {
  try {
    const newMedicine = new MedicineReminder(req.body);
    const savedMedicine = await newMedicine.save();
    res.status(201).json(savedMedicine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/', async (req, res) => {
    try {
      const medicines = await MedicineReminder.find();
      res.json(medicines);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // @route PATCH /api/medicines/:id/taken
router.patch('/:id/taken', async (req, res) => {
    try {
      const medicine = await MedicineReminder.findById(req.params.id);
      if (!medicine) {
        return res.status(404).json({ message: 'Medicine not found' });
      }
      medicine.takenToday = true;
      await medicine.save();
      res.json({ message: 'Medicine marked as taken' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  


module.exports = router;
