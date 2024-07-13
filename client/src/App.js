import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, Cloudflare Workers!</h1>
      <p>This is a basic React page deployed on Cloudflare Workers.</p>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
