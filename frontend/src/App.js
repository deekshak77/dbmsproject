import { useState } from "react";
import NavBar from "./Navbar";
import Movies from "./Movies";
import Theaters from "./Theaters";
import Booking from "./Booking";
import Users from "./Users";
import Showtime from "./Showtime";


function App() {
  // states are used to re-render pages in react
  // we are using react-bootstrap for styling
  // so that we dont need to worry too much abt the styling part
  // some places we use basic bootstrap as well, this is shown in className
  const [activeBody, setActiveBody] = useState(1);
  const getBody = () => {
    switch (activeBody) {
      case 1:
        return <Theaters />;
      case 2:
        return <Movies/>;
      case 3:
        return <Booking/>;
      case 4:
        return <Showtime/>;
      case 5:
        return <Users />;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <>
      {/* Navbar component */}
      <NavBar setActiveBody={setActiveBody} />
      {/* generate body based on appropriate tab selected, using function speecified abovve */}
      {getBody()}
    </>
  );
}

export default App;
