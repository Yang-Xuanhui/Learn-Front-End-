import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
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

function RenderComment(comments){
    if(comments != null){
        var comment = comments.comments
        return (
                <Media tag="li">
                          <Media body className="ml-5">
                            <p>{comment.comment} <br/> {comment.author} &nbsp;
                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                          </Media>
                </Media>
            );
    }
    else
        return(
            <div></div>
        );
}

const  DishDetail = (props) => {
        const comment = props.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <Media list>
                        <RenderComment comments={comment}/>
                    </Media>
                </div>
            );
        });
    
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>{comment}</div>
                </div>
            </div>
            </div>
        );
        
}

export default DishDetail;