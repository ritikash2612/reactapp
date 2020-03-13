import React, { Component } from 'react'; //need these to define a component
import { Card, CardImg , CardTitle, CardImgOverlay, CardBody, CardText } from 'reactstrap';

export default class Menu extends Component{
    //define a constructor //neccesary
    constructor(props){
        super(props);
        this.state = {
            selectedDish : null
        }
    }
    onDishSelect(dish){
        this.setState({
            selectedDish: dish
        }); 
    }

    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>  
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    


    // need this function
    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key = {dish.id} onClick = {() => this.onDishSelect(dish)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container"> 
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }

}