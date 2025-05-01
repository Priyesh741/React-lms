// import React from 'react'
// import './index.css'
// import Home from './component/Home'
// import Booking from './component/Booking';
// const App = () => {
//   return (
//     <>
    
//     <Home/>
//     <Booking/>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageBooks from './component/ManageBooks';
import Booking from '';
import Member from "./component/Member"; // your Members component
import Sidebar from "./component/Sidebar";


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Sidebar will always be shown */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/manage-books" element={<ManageBooks />} />
            <Route path="/booking" element={<Bookings />} />
            <Route path="/members" element={<Member />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

