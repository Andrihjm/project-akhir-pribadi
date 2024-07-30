import { Route, Routes } from "react-router";
import Home from "../root/Home";

const Routers = () => {
  return (
    <>
      <Routes>
        {/* ---------- Landing Page ---------- */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routers;
