import React, {Component, Fragment} from 'react';
import './Main.css'
import {connect} from "react-redux";
import {fetchGetDish, fetchImportDish} from "../../store/action/action";
import DishesCard from "../../components/DishesCard/DishesCard";



class Main extends Component {

    componentDidMount() {
        this.props.fetchGetDish()
    }

    render() {
        return (
            <Fragment>
                <div className={"dishesMenu"}>
                    {this.props.dishesThis && Object.keys(this.props.dishesThis).map((dish, index) => (
                        <DishesCard
                            key={index}
                            name={this.props.dishesThis[dish].name}
                            price={this.props.dishesThis[dish].price}
                            img={this.props.dishesThis[dish].img}
                            onclick={(e) => this.props.fetchImportDish( {name: this.props.dishesThis[dish].name, price :this.props.dishesThis[dish].price})}
                        />

                    ))}

                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dishesThis: state.mainReducer.dishes,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetDish: () => dispatch(fetchGetDish()),
        fetchImportDish: (orders) => dispatch(fetchImportDish(orders))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);