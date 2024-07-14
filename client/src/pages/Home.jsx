import React, { useState } from 'react';
import logo from '../../public/cloudflare.svg'
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import {Button} from "@nextui-org/react";

export const Home = () => {
  const [count, setCount] = useState(0);
  const tester = "Victor E";

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-12">
          <div>
            <div>
              <img src={logo} width="300"/>
            </div>
          </div>
          <h1>Hello, Cloudflare Workers!</h1>
          <h3>This is a basic React page deployed on Cloudflare Workers.</h3>
          <p>
            <strong>Your name:</strong> { tester }
          </p>
          <pre>{ tester }</pre>

          <p>Count: { count }</p>
          <Button
            color="primary"

            onClick={ () => setCount(count + 1) }
          >
            Increase
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};