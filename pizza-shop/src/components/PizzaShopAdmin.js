import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const PizzaShopAdmin = (props) => {

    const { loggedIn, email } = props

    const navigate = useNavigate();

    

    const onButtonClick = () => {

        if (loggedIn) {

            localStorage.removeItem("user")

            props.setLoggedIn(false)

        } else {

            navigate("/products")

        }

    }

    const onButtonClick2 = () => {

        if (loggedIn) {

            localStorage.removeItem("user")

            props.setLoggedIn(false)

        } else {

            navigate("/employees")

        }

    }

    const onButtonClick3 = () => {

        if (loggedIn) {

            localStorage.removeItem("user")

            props.setLoggedIn(false)

        } else {

            navigate("/weeklystatistics")

        }

    }


    return <div className="adminPageContainer">

        <div className={"titleContainer"}>

            <div>PIZZA SHOP</div>

        </div>

        <div>Admin</div>

        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick2}
                value="Employee Information" />
        </div>

        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick3}
                value="Weekly Statistics" />
        </div>

        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value="Start an order" />
        </div>

    </div>
}


export default PizzaShopAdmin