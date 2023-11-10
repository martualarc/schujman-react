import { Outlet } from 'react-router-dom';
import Header from './Header';

const Show = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Show;