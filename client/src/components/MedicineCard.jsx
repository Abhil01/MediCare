function MedicineCard({ medicine }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg font-semibold">{medicine.medicineName}</h2>
        <p>Dosage: {medicine.dosage}</p>
        <p>Time: {medicine.time}</p>
        <p>Doctor: {medicine.doctorName} ({medicine.doctorContact})</p>
        <p>Stock Left: {medicine.stock}</p>
        <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
          Mark as Taken
        </button>
      </div>
    );
  }
  
  export default MedicineCard;
  