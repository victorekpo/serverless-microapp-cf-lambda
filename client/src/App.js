import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NextUIProvider } from "@nextui-org/react";
import { Outlet } from 'react-router-dom';
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
const App = () => {
    return (_jsx("div", { className: "container", children: _jsxs(NextUIProvider, { children: [_jsx(Header, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }) }));
};
export default App;
