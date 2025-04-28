import { useEffect, useState } from 'react';
import { getMedicines } from '../services/medicineService';
// import { markMedicineTaken } from '../services/medicineService';

function MedicineList() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await getMedicines();
        setMedicines(response.data);
      } catch (error) {
        console.error('Failed to fetch medicines', error);
      }
    };

    fetchMedicines();
  }, []);

  const handleMarkAsTaken = async (id) => {
    try {
      await markMedicineTaken(id);
      alert('Medicine marked as taken!');
      // Refresh list
      const response = await getMedicines();
      setMedicines(response.data);
    } catch (error) {
      console.error('Error marking as taken:', error);
      alert('Failed to update');
    }
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {medicines.map((medicine) => (
        <div key={medicine._id} className={`p-4 rounded shadow ${medicine.stock < 5 ? 'bg-red-100' : 'bg-white'}`}>
          <h2 className="text-lg font-bold">{medicine.medicineName}</h2>
          <p><strong>Dosage:</strong> {medicine.dosage}</p>
          <p><strong>Time:</strong> {medicine.time}</p>
          <p><strong>Doctor:</strong> {medicine.doctorName} ({medicine.doctorContact})</p>
          <p><strong>Stock:</strong> {medicine.stock}</p>
          {medicine.stock < 5 && (
            <p className="text-red-600 font-semibold">⚠️ Low Stock! Please refill soon.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default MedicineList;
