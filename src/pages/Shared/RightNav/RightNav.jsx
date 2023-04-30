// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        
        <FaGoogle/> Login With Google
      </Button>
      <Button variant="outline-secondary"> <FaGithub/> Login With Github</Button>
      <div>
      <ListGroup>
      <ListGroup.Item> <FaFacebook/> Cras justo odio</ListGroup.Item>
      <ListGroup.Item> <FaTwitter/> Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item> <FaInstagram/> Morbi leo risus</ListGroup.Item>
      
    </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="w-auto">
        <img className="w-auto"  src={bg} alt="" />
      </div>
    </div>
    
  );
};

export default RightNav;
