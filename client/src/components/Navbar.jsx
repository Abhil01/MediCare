import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">MediCare</h1>
      <div className="flex space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/add-medicine" className="hover:underline">Add Medicine</Link>
      </div>
    </nav>
  );
}

export default Navbar;
