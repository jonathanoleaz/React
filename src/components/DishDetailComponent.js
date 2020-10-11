import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }
 
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-md-5 col-12 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    

    renderComments(dish) {
        if (dish != null) {
            const commentsJsx = dish.comments.map((comment) => {
                return (
                    <li key={comment.id}><p>{comment.comment}</p>
                        <p>--{comment.author}, {this.formatDate(comment.date)}</p>
                    </li>
                );
            });
            return (
                <div className="col-md-5 col-12 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsJsx}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        console.log(this.props.dish);
        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );

    }

    formatDate(dateString) {

        var date = new Date(dateString);
        var year = date.getFullYear();
        var day = date.getDate();
        var month = date.toLocaleDateString('en-us', { month: 'short' });

        return (month + " " + day + ", " + year);
    }
}
export default DishDetail;