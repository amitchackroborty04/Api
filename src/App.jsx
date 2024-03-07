import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Container } from "react-bootstrap";
import { IoIosStar } from "react-icons/io";
import { BsStarHalf } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const App = () => {
  const [amit] = useTypewriter({
    words: ['WELLCOME','API-PROJECT','ONLINE-BAZAR'],
    loop: {},
    typeSpeed:500,
    delaySpeed:50,  
  });
  let [productlist, setProductlist] = useState([]);

  useEffect(() => {
    async function getApidata() {
      let data = await axios.get("https://dummyjson.com/products");
      setProductlist(data.data.products);
    }
    getApidata();
  }, []);
   
  return (
    <Container>
      <h1 style={{ margin: "50px", textAlign:"center" }}>
        <span style={{ color: "Green" }}>{amit}</span>
        <span style={{ color: "red" }}>
          <Cursor cursorStyle='<'/>
        </span>
      </h1>

      <div className="d-flex flex-wrap justify-content-between">
        {productlist.map((item) => (
          <Card style={{ width: "20rem", margin: "20px" }}>
            <Card.Img
              variant="top"
              width="100%"
              height="250px"
              style={{ background: "object-fit" }}
              src={item.thumbnail}
            />
            <Card.Body>
              <Card.Title style={{ height: "50px" }}>{item.title}</Card.Title>
              <Card.Text style={{ height: "100px" }}>
                {item.description}
              </Card.Text>
              <div>
                <h3>${item.price}</h3>
                <div>
                  <IoIosStar style={{ color: "#FFFF00" }} />
                  <IoIosStar style={{ color: "#FFFF00" }} />
                  <IoIosStar style={{ color: "#FFFF00" }} />
                  <IoIosStar style={{ color: "#FFFF00" }} />
                  <BsStarHalf style={{ color: "#FFFF00" }} />
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default App;
