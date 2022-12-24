import { useContext } from "react"

import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props =>{





return <button className={classes.button} onClick={props.onCartClick} >

        <span className={classes.icon}><CartIcon/></span>
        <span>Cart</span>
        <span className={classes.badge}>0</span>
    </button>
}

export default HeaderCartButton