import React from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
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
        <Container fluid>
          <div className="float-end">
          </div>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Cart</th>
                <th width="20%">Quantity</th>
                <th width="20%">Item</th>
              </tr>
            </thead>
            <tbody>Joeseppi</tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default Products;
