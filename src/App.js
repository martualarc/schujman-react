import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Link1 from './routes/Link1';
import Link2 from './routes/Link2';
import Link3 from './routes/Link3';
import Submenu1 from './routes/Submenu1';
import Submenu2 from './routes/Submenu2';
import Submenu3 from './routes/Submenu3';
import MasSubmenus from './routes/MasSubmenus';
import OtroMas from './routes/OtroMas';
import SubSubMenu from './routes/SubSubmenu';
import OtroSubmenu from './routes/OtroSubmenu';
import OtroSubmenu1 from './routes/OtroSubmenu1';

const App = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="link2" element={<Link1 />} />
            <Route path="link2" element={<Link2 />} />
            <Route path="link3" element={<Link3 />} />
            <Route path="submenu1" element={<Submenu1 />} />
            <Route path="submenu2" element={<Submenu2 />} />
            <Route path="submenu3" element={<Submenu3 />} />
            <Route path="massubmenus" element={<MasSubmenus />} />
            <Route path="otromas" element={<OtroMas />} />
            <Route path="subsubmenu" element={<SubSubMenu />} />
            <Route path="otrosubmenu" element={<OtroSubmenu />} />
            <Route path="otrosubmenu1" element={<OtroSubmenu1 />} />
            <Route path="*" element={<p>Not found!</p>} />
          </Route>
        </Routes>
      </>
    );
  };
  
  export default App;