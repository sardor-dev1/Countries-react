import { useState } from "react";
import { Button } from "flowbite-react";
import { DrawerComponent } from "./Drawer";
import { useSelector } from "react-redux";
import Logo from "../assets/countries.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const selectedCountries = useSelector(
    (store) => store.countries.selectedCountries || []
  );

  return (
    <>
      <DrawerComponent
        isOpen={isOpen}
        handleClose={handleClose}
        selectedCountries={selectedCountries}
      />
      <div className="max-w-[1140px] flex justify-between items-center bg-gray-200 mx-auto p-2 px-4 rounded-md mb-2">
        <div className="flex items-center gap-3">
          <img className="w-10" src={Logo} alt="Countries" />
          <h2 className="text-green-600 text-24px]">Countries</h2>
        </div>
        <div>
          <Button onClick={() => setIsOpen(true)}>Selected Countries</Button>
        </div>
      </div>
    </>
  );
}
