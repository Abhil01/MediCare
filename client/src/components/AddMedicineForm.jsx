import { useState } from 'react';

function AddMedicineForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    medicineName: '',
    dosage: '',
    time: '',
    doctorName: '',
    doctorContact: '',
    stock: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["medicineName", "dosage", "time", "doctorName", "doctorContact", "stock", "notes"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.replace(/([A-Z])/g, ' $1')}
            value={formData[field]}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        ))}
      </div>
      <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
        Add Medicine
      </button>
    </form>
  );
}

export default AddMedicineForm;
