import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutComponent from './AboutComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

/**
 * @description: Component dedicated to track the state of the application
 */
class Main extends Component {
    /**We left props as a property of the main or father component in order to be passed as property to its children components */
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS/*,
            selectedDish: null*/
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage=() =>{
            return(
                <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                leader={this.state.leaders.filter((leader)=>leader.featured)[0]} />
            )
        }

        const DishWithId=({match})=>{
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                />
            );
        }

        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} 
                                                                    onClick={(dishId) => this.onDishSelect(dishId)} />}/>
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact}/>
                    <Route path="/about" component={()=> <AboutComponent leaders={this.state.leaders} />}/>
                    <Redirect to="/home" />
                </Switch>                
                <Footer/>
            </div>
        );
    }
}

export default Main;
