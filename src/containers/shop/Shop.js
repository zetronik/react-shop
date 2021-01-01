import React from 'react'
import MainShop from "../../component/main/MainShop"
import Loader from '../../component/UI/Loader/Loade'
import {connect} from 'react-redux'
import {initShop} from '../../store/actions/shop'

class Shop extends React.Component {
    componentDidMount() {
        document.title = 'Chilly | Магазин'
        this.props.initShop()
    }
    render() {
        return (
            <section>
                {
                    this.props.shop.length === 0
                    ? <Loader />
                    : <MainShop category={this.props.category} shop={this.props.shop} />
                }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        category: state.shop.category,
        shop: state.shop.shop
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initShop: () => dispatch(initShop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Shop)