import React from 'react'
import MainShop from "../../component/main/MainShop"
import Loader from '../../component/UI/Loader/Loader'
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
                    ?   <Loader />
                    :   <MainShop
                            category={this.props.category}
                            shop={this.props.shop}
                            page={this.props.page}
                            totalPages={this.props.totalPages}
                            length={this.props.length}
                            item={this.props.item}
                        />
                }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        category: state.shop.category,
        shop: state.shop.shop,
        page: state.shop.page,
        totalPages: state.shop.totalPages,
        length: state.shop.length,
        item: state.shop.item
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initShop: () => dispatch(initShop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Shop)