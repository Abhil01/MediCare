const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');
const sendEmail = require('./utils/sendEmail');
const MedicineReminder = require('./models/MedicineReminder');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const medicineRoutes = require('./routes/medicineRoutes');
app.use('/api/medicines', medicineRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error(err));


cron.schedule('0 9 * * *', async () => {
    console.log('Running daily medicine reminder job...');
  
    try {
      const pendingMedicines = await MedicineReminder.find({ takenToday: false });
  
      for (let med of pendingMedicines) {
        // Replace 'relative_email@example.com' with actual patient's relative email
        await sendEmail(
          'relative_email@example.com',
          'Daily Medicine Reminder',
          `Reminder: Take your medicine ${med.medicineName} scheduled at ${med.time}.`
        );
      }
  
      console.log('Reminder emails sent!');
    } catch (error) {
      console.error('Error running daily reminder:', error);
    }
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
