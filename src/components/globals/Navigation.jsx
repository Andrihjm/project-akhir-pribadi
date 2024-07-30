import { useState } from "react";

const Navigation = () => {
  const [isOpenMenuNavbar, setIsOpenMenuNavbar] = useState(false);

  const handleOpenMenuNavbar = () => {
    setIsOpenMenuNavbar(!isOpenMenuNavbar);
  };

  return (
    <>
      <nav className="" onClick={handleOpenMenuNavbar}>
        open
      </nav>

      {isOpenMenuNavbar && <div className="w-[200px] h-[200px] bg-red-500">aku</div>}
    </>
  );
};

export default Navigation;
