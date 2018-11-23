import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, 
    Breadcrumb, BreadcrumbItem, Media, 
    Button, Col, Label, 
    Nav, NavItem,  Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input,FormFeedback } from 'reactstrap';
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


    function RenderComments({comments, addComment, dishId}) {
    if(comments != null){
        const comment = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <Media tag="li">
                          <Media body >
                            <p>{comment.comment}</p>
                            <p>--{comment.author} , 
                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                          </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div>
                <Media list>
                    {comment}
                </Media>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
            );
    }
    else
        return(
            <div></div>
        );
}

const  DishDetail = (props) => {
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
                    <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
      />

                </div>
            </div>
            </div>
        );
        
}

class CommentForm extends Component{
        constructor(props) {
            super(props);
            this.state = {
                isModalOpen: false,
                rating: '',
                name: '',
                comment: '',
                touched: {
                    name: false
                }
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
    
        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
            });
        }

        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleSubmit(event) {
            this.toggleModal();
            this.props.addComment(this.props.dishId, this.state.rating, this.state.author, this.state.comment);
            console.log('Current State is: ' + JSON.stringify(this.state));
            alert('Current State is: ' + JSON.stringify(this.state));
            event.preventDefault();
            return{

            }
    
        }

        validate(name) {

            const errors = {
                name: ''
            };
    
            if (this.state.touched.name && name.length < 3)
                errors.name = 'Must be greater than 3 characters';
            else if (this.state.touched.name && name.length > 15)
                errors.name = 'Must be 15 character or less';
    
            return errors;
        }

        handleBlur = (field) => (evt) => {
            this.setState({
              touched: { ...this.state.touched, [field]: true },
            });
        }

        render() {
            const errors = this.validate(this.state.name);
            return(
                <div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit &nbsp; Comment</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Input type="select"  id="rating" name="rating" value={this.state.rating} onChange={this.handleInputChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    </Input>
                                    
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="yourname">Your Name</Label>
                                    <Input type="text" id="name" name="name"
                                        placeholder="Your Name"
                                        value={this.state.name}
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.name}</FormFeedback>   
                                        
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Input type="textarea" id="comment" name="comment"
                                        rows="6"
                                        value={this.state.comment}
                                        onChange={this.handleInputChange}></Input>
                                </FormGroup>
                                <FormGroup row>
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                            </Form>
                        </ModalBody>
                    </Modal>
                    <div className="container">
                        
                                <Nav className="ml-auto">
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Submit &nbsp; Comment</Button>
                                    </NavItem>
                                </Nav>
                            
                        </div>
                    
                </div>
            );
        }
    }


export default DishDetail;