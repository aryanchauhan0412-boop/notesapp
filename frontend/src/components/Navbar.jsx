import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || null)

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };
  return (
    <div className="flex justify-between items-center bg-white shadow p-4">

      <h2 className="text-xl font-semibold">
        Welcome {user?.name}
      </h2>

      <div className="flex gap-4">

        <button
          onClick={() => navigate("/create")}
          className="bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Create Note
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

    </div>

   
  );
}

export default Navbar;