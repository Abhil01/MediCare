function Login() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <form className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
          <input type="email" placeholder="Email" className="border p-2 mb-4 w-full rounded" required />
          <input type="password" placeholder="Password" className="border p-2 mb-4 w-full rounded" required />
          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  