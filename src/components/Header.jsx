import { useState } from "react";
import { Button } from "flowbite-react";
import { DrawerComponent } from "./Drawer";
import { useSelector } from "react-redux";

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
        <h2>Header</h2>
        <div>
          <Button onClick={() => setIsOpen(true)}>Selected Countries</Button>
        </div>
      </div>
    </>
  );
}
