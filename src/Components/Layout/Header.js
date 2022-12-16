import React,{Fragment} from "react"
import mealsImage from "../../assests/meals.jpg"
import classes from "./Header.module.css"


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Tomato</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="table full of meals" />
            </div>
        </Fragment>
    )
}


export default Header