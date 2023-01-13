import { useState } from "react";
import Customers from "./Customers";
import Houses from "./Houses";
import HousesWithOwners from "./HousesWithOwners";
import NavBar from "./Navbar";
import Owners from "./Owners";
import RentedHouses from "./RentedHouses";

function App() {
  // states are used to re-render pages in react
  // we are using react-bootstrap for styling
  // so that we dont need to worry too much abt the styling part
  // some places we use basic bootstrap as well, this is shown in className
  const [activeBody, setActiveBody] = useState(1);
  const getBody = () => {
    switch (activeBody) {
      case 1:
        return <Houses />;
      case 2:
        return <Customers />;
      case 3:
        return <Owners />;
      case 4:
        return <RentedHouses />;
      case 5:
        return <HousesWithOwners />;
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
