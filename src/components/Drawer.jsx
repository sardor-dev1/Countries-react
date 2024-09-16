import { Drawer } from "flowbite-react";

export function DrawerComponent({isOpen, handleClose}) {
  

  return (
    <>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Drawer" />  
        <Drawer.Items>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
