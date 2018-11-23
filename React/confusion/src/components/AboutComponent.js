import React from 'react';
import {Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderLeader ({leader}) {
    return (
        <Media tag="li">
                  <Media left middle>
                      <Media object alt={leader.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.abbr}</p>
                    <p>{leader.description}</p>
                  </Media>
        </Media>
    );
}

const Aboutus = (props) => {
    
    const leader = props.leaders.map((leader) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={leader.id}>
                <Media list>
                    <RenderLeader leader={leader}/>
                </Media>
            </div>
        );
    });

    return (
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {leader}
                </div>
        </div>
    );
}

export default Aboutus;