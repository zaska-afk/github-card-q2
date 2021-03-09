import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// import logo from './logo.svg';
import "./App.css";

const { useState } = React;

function App() {
  //use state
  let [user, setUser] = useState({});
  let [active, setActive] = useState(false);

  const toggleButton = (e) => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }

    //fetch data from github
    fetch("https://api.github.com/users/zaska-afk")
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
        console.log(user);
      });
  };

  //card is hidden
  switch (active) {
    case false:
      return (
        <div>
          <Button variant="primary" onClick={toggleButton}>
            Show User
          </Button>{" "}
          {/* <Button onClick={toggleButton}>Show User</Button> */}
        </div>
      );

    //show card and data
    case true:
      return (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Body>
              <Card.Title>Github User Card</Card.Title>
              <Card.Text>
                <div>Name: {user.name}</div>
                <div>Login: {user.login}</div>
                <div>Github URL: {user.html_url}</div>
                <div>Location: {user.location}</div>
              </Card.Text>
              <Button onClick={toggleButton}>Show User</Button>
            </Card.Body>
          </Card>
        </div>
      );

    default:
      return null;
  }
}

export default App;
