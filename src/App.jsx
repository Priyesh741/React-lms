import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageBooks from "./component/ManageBooks";
import Booking from "./component/Booking";
import Member from "./component/Member"; // your Members component
import Sidebar from "./component/Sidebar"; // Your sidebar layout
import AddPage from "./component/AddPage";
import AddMember from "./component/AddMember";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar /> {/* Sidebar will always be shown */}
        <div className="flex-1 p-2">
          <Routes>
            <Route path="/manage-books" element={<ManageBooks />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/members" element={<Member />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/addmember" element={<AddMember />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
