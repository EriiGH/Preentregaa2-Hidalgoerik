import {fruticolaEH} from '../NavBar/NavBar.module.css'
import img from './imagenLogo.png'
const Logo = () => {
    return (
        <div>
        <a href="#"><img src={img} alt="Fruticola EH" className={fruticolaEH}/></a>
    </div>
    );
  };
  export default Logo