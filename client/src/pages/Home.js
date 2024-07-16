import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from "@nextui-org/react";
const Home = () => {
    const [count, setCount] = useState(0);
    const tester = "Victor E";
    return (_jsx("div", { className: "row", children: _jsxs("div", { className: "col-12", children: [_jsx("h1", { children: "Hello, Cloudflare Workers!" }), _jsx("br", {}), _jsx("h3", { children: "This is a basic React page deployed on Cloudflare Workers." }), _jsx("br", {}), _jsxs("pre", { children: [_jsx("strong", { children: "Your name:" }), " ", tester] }), _jsxs("p", { children: ["Count: ", count] }), _jsx("br", {}), _jsx(Button, { color: "primary", type: "button", onClick: () => setCount(count + 1), children: "Increase" })] }) }));
};
export default Home;
