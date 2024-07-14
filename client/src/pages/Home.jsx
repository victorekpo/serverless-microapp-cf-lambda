import { useState } from 'react';
import { Button } from "@nextui-org/react";

const Home = () => {
  const [count, setCount] = useState(0);
  const tester = "Victor E";

  return (
    <div className="row">
      <div className="col-12">
        <h1>Hello, Cloudflare Workers!</h1>
        <br/>
        <h3>This is a basic React page deployed on Cloudflare Workers.</h3>
        <br/>
        <pre><strong>Your name:</strong> { tester }</pre>

        <p>Count: { count }</p>
        <br/>
        <Button
          color="primary"
          type="button"
          onClick={ () => setCount(count + 1) }
        >
          Increase
        </Button>
      </div>
    </div>
  );
};

export default Home;