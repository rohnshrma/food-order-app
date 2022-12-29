import { useContext } from "react"

import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext)
    console.log(cartCtx);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    console.log(numberOfCartItems);

    return <button className={classes.button} onClick={props.onCartClick} >

        <span className={classes.icon}><CartIcon /></span>
        <span>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton