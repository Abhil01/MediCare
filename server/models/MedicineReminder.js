const mongoose = require('mongoose');

const MedicineReminderSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  dosage: { type: String, required: true },
  time: { type: String, required: true },
  doctorName: { type: String, required: true },
  doctorContact: { type: String, required: true },
  stock: { type: Number, required: true },
  notes: { type: String },
  takenToday: { type: Boolean, default: false }

});

module.exports = mongoose.model('MedicineReminder', MedicineReminderSchema);
