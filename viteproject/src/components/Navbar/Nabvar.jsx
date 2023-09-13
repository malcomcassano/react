import CartWidget from '../CartWidget/CartWidget';
import Contador from '../CartWidget/Contador';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import  './styles.css'

const Navbar = () => {
    return (
        <div className='navbar'>
        <ItemListContainer/>

        <CartWidget/>
        <Contador/>
        </div>
    );
};

export default Navbar;