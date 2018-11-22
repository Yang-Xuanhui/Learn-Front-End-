import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish){
        
        if(dish != null){
            var comments = dish.comments
            return(
                <div>
                    <h4>Comments</h4>

                    <ul className="list-unstyled">
                    <li>{comments[0].comment}<br/>{comments[0].author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[0].date)))}</li>
                    <li>{comments[1].comment}<br/>{comments[1].author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[1].date)))}</li>
                    <li>{comments[2].comment}<br/>{comments[2].author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[2].date)))}</li>
                    <li>{comments[3].comment}<br/>{comments[3].author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[3].date)))}</li>
                    <li>{comments[4].comment}<br/>{comments[4].author}  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[4].date)))}</li>
                    </ul>
                </div>
            
            );
        }
        else
            return(
                <div></div>
            );
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;