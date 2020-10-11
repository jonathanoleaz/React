import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';

/**
 * @description: Component dedicated to track the state of the application
 */
class Main extends Component {
    /**We left props as a property of the main or father component in order to be passed as property to its children components */
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }


    onDishSelect(dishId) {
        console.log(dishId);
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}

export default Main;
