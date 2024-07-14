import logo from "@public/images/cloudflare.svg";

export const Header = () => (
    <div>
      <nav className="navbar navbar-light bg-light mb-1">
        <div className="container-fluid">
          <span className="navbar-brand h1">Cloudflare React Worker</span>
        </div>
      </nav>
      <img src={ logo } width="200" alt="logo"/>
      <br/>
    </div>
  );