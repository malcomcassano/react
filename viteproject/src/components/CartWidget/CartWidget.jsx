import {BsFillCartFill} from 'react-icons/bs';
import {Badge} from '@mui/material';


const CartWidget =() => {
    return (
    <Badge badgeContent={1} color="primary">
        <BsFillCartFill size={25}/>
    </Badge>
)
}

export default CartWidget