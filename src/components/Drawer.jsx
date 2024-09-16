import { Drawer } from "flowbite-react";

export function DrawerComponent({
  isOpen,
  handleClose,
  selectedCountries = [],
}) {
  return (
    <Drawer className="w-[500px]" open={isOpen} onClose={handleClose} position="right">
      <Drawer.Header title="Selected Countries" />
      <Drawer.Items>
        {selectedCountries.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {selectedCountries.map((country) => (
              <div key={country.cca2} className="flex items-center space-x-4">
                <img
                  src={country.flagURL}
                  alt={`${country.name} flag`}
                  className="w-20 h-20 rounded-md"
                />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No countries selected.</p>
        )}
      </Drawer.Items>
    </Drawer>
  );
}
