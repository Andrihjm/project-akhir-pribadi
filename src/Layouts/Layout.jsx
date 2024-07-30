import Navigation from "../components/globals/Navigation";
import Routers from "../routers/Routers";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Routers />
      </main>
    </>
  );
};

export default Layout;
