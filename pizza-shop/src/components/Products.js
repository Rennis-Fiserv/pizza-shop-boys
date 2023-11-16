import React from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const { loggedIn, email } = props;

  const navigate = useNavigate();

  const onButtonClick = () => {
    if (loggedIn) {
      localStorage.removeItem("user");

      props.setLoggedIn(false);
    } else {
      navigate("/pizza");
    }
  };

  const onButtonClick2 = () => {
    if (loggedIn) {
      localStorage.removeItem("user");

      props.setLoggedIn(false);
    } else {
      navigate("/breadsticks");
    }
  };

  const onButtonClick3 = () => {
    if (loggedIn) {
      localStorage.removeItem("user");

      props.setLoggedIn(false);
    } else {
      navigate("/soda");
    }
  };

  return (
    <div className="productsContainer">
      <div className={"titleContainer"}>
        <div>Products</div>
      </div>

      <div className={"buttonContainer2"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value="Pizza"
        />
      </div>

      <div className={"buttonContainer2"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick2}
          value="Breadsticks"
        />
      </div>

      <div className={"buttonContainer2"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick3}
          value="Soda"
        />
      </div>

      <div>
          <div className="float-end"></div>
          <Table >
            <thead>
              <tr>
                <th colSpan={20}>Cart</th>
              </tr>
              <tr>
                <th>Quantity</th>
                <th>Item</th>
              </tr>
            </thead>
          </Table>
      </div>
    </div>
  );
};

export default Products;
