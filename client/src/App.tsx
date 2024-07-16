import { NextUIProvider } from "@nextui-org/react";
import { Outlet } from 'react-router-dom';
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <NextUIProvider>
        <Header/>
        <Outlet/>
        <Footer/>
      </NextUIProvider>
    </div>

  );
};

export default App;