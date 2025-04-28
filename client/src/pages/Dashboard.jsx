import MedicineList from '../components/MedicineList';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4 font-bold">Today's Medicines</h1>
      <MedicineList />
    </div>
  );
}

export default Dashboard;
