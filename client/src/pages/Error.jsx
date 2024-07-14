import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const Error = () => {
  return (
    <div className="container">
      <Header/>
      <div className="row">
        <div className="col-12">
          <h1>Error!</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Error;