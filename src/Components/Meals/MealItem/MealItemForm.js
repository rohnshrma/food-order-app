import { useState,useRef } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"
const ModuleItemForm = props => {

    const [amountIsValid,setAmountIsValid] = useState(true)


    const amountInputRef = useRef()


    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value
        
        //convert string number into actual number
        const enteredAmountNumber = +enteredAmount 
        console.log(typeof enteredAmountNumber);

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false)
            return; 
        }

        props.onAddToCart(enteredAmountNumber)

    }


    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={amountInputRef}
                label="Amount :"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "0"
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default ModuleItemForm;