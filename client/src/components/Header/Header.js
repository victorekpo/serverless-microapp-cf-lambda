import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useMemo } from 'react';
import logoSrc from "@public/images/cloudflare.svg";
export const Header = memo(() => {
    const logo = useMemo(() => logoSrc, []);
    return (_jsxs("div", { children: [_jsx("nav", { className: "navbar navbar-light bg-light mb-1", children: _jsxs("div", { className: "container-fluid", style: { height: "50px" }, children: [_jsx("span", { className: "navbar-brand h1", children: "Cloudflare React Worker" }), _jsx("span", { style: { position: "relative", right: 0 }, children: _jsx("img", { src: logo, width: "151", height: "50", alt: "logo" }) })] }) }), _jsx("br", {})] }));
});
