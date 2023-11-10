import Barra from './Barra';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        <Barra/>
      </div>
    </header>
  );
};

export default Header;