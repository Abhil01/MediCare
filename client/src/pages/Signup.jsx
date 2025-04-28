function Signup() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <form className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-6 text-center font-bold">Signup</h2>
          <input type="text" placeholder="Name" className="border p-2 mb-4 w-full rounded" required />
          <input type="email" placeholder="Email" className="border p-2 mb-4 w-full rounded" required />
          <input type="password" placeholder="Password" className="border p-2 mb-4 w-full rounded" required />
          <button type="submit" className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">Signup</button>
        </form>
      </div>
    );
  }
  
  export default Signup;
  