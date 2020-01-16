import React from 'react';
import './DishesCard.css'
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const DishesCard = (props) => {
    return (
        <div>
            <Card body outline color="danger"
                  style={{width: '250px',
                      height: '300px',
                      textAlign: 'centre',
                      padding: '25px',
                      margin: '5px'}}>
                <CardImg style={{width: '120px',
                    height: '100px',
                    margin: '0 auto'}} top width="100%" src={props.img}
                         alt="Card image cap"/>
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardText>Price: {props.price}</CardText>
                    <Button onClick={props.onclick} outline color="danger">Add to card</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishesCard;