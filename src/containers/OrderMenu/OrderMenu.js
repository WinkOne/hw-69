import React, {Component} from 'react';
import './OrderMenu.css'
import {connect} from "react-redux";
import {fetchRemoveOrder} from "../../store/action/action";


class OrderMenu extends Component {

    render() {

        return (
            <div className="orderMenu">
                <div>
                    {Object.keys(this.props.orderDish).map((order, index) =>(
                        <div key={index}>
                            <span>{this.props.orderDish[order].name}</span>_____________
                            <span>x{this.props.orderDish[order].count}</span>_____________
                            <span>{this.props.orderDish[order].price} KGZ</span>__
                            <button onClick={(removeOrder) => this.props.fetchRemoveOrder(removeOrder)}>X</button>
                        </div>
                    ))}
                    <p>Total: {this.props.total}</p>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
       total: state.orderReducer.dishesTotal,
        orderDish: state.orderReducer.orderDish
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRemoveOrder: (removeOrder) => dispatch(fetchRemoveOrder(removeOrder))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderMenu);