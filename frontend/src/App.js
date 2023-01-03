import { useState } from "react";
import AvailableHouses from "./AvailableHouses";
import Customers from "./Customers";
import Houses from "./Houses";
import HousesWithOwners from "./HousesWithOwners";
import NavBar from "./Navbar";
import Owners from "./Owners";
import RentedHouses from "./RentedHouses";

function App() {
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
        return <AvailableHouses />;
      case 6:
        return <HousesWithOwners />;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <>
      <NavBar setActiveBody={setActiveBody} />
      {getBody()}
    </>
  );
}

export default App;
