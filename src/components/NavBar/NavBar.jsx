import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';


const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <ul className={style.moni}>
        <li>
          <NavLink to="/" end>  Inicio
          </NavLink>
        </li>
      </ul>
      <ul className={style.cate}>
        <li>
          <NavLink to="/category/frutas" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Frutas
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/verduras" className={({ isActive }) =>  {
            console.log('isActive frutas:', isActive);
            return isActive ? 'ActiveOption' : 'Option';
          }}>
            Verduras
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/frutasSecas" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Frutas secas
          </NavLink>
        </li>
      </ul>
      <div id="carrito" className="carrito">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
