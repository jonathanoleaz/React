import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutComponent from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchComments, fetchDishes, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

/**Now, all the  redux state becomes available as props*/
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}


const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (newFeedback) => dispatch(postFeedback(newFeedback)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },

    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },

    fetchLeaders:() => {dispatch(fetchLeaders())}
})


/**
 * @description: Component dedicated to track the state of the application
 */
class Main extends Component {
    /**We left props as a property of the main or father component in order to be passed as property to its children components */
    /*constructor(props) {
        super(props);


    }*/

    componentDidMount() {
        /*Theses requests area made until the mainComponent will be mounted */
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}

                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                            leadersLoading={this.props.leaders.isLoading}
                            leadersErrMess={this.props.leaders.errMess}
                />
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.dishes.commentsErrMess}
                    postComment={this.props.postComment}
                />
            );
        }

        return (
            <div className="App">
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}
                                onClick={(dishId) => this.onDishSelect(dishId)} />} />
                            <Route path="/menu/:dishId" component={DishWithId} />
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                            postFeedback={this.props.postFeedback}/>} />
                            <Route path="/about" component={() => <AboutComponent leaders={this.props.leaders} 
                            leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                            isLoading={this.props.leaders.isLoading}
                            errMess={this.props.leaders.errMess}/>} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

/*Connecting component to redux store */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
