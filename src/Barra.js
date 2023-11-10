import { contMenu } from './contMenu';
import Menu from './Menu';
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {contMenu.map((menu, index) => {
          const depthLevel = 0;
          return (
            <Menu
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;