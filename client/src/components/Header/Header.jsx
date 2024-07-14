import { memo, useMemo } from 'react';
import logoSrc from "@public/images/cloudflare.svg";

export const Header = memo(() => {
  const logo = useMemo(() => logoSrc, []);

  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-1">
        <div className="container-fluid" style={ { height: "50px" } }>
          <span className="navbar-brand h1">Cloudflare React Worker</span>
          <span style={ { position: "relative", right: 0 } }>
            <img src={ logo } width="151" height="50" alt="logo"/>
          </span>
        </div>
      </nav>
      <br/>
    </div>
  );
});

Header.displayName = 'Header';
