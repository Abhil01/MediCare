import AddMedicineForm from '../components/AddMedicineForm';
import { addMedicine } from '../services/medicineService';

function AddMedicine() {
  const handleAddMedicine = async (formData) => {
    try {
      const response = await addMedicine(formData);
      console.log('Medicine Added:', response.data);
      alert('Medicine Added Successfully!');
    } catch (error) {
      console.error('Error adding medicine:', error);
      alert('Failed to add medicine');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4 font-bold">Add New Medicine</h1>
      <AddMedicineForm onSubmit={handleAddMedicine} />
    </div>
  );
}

export default AddMedicine;
