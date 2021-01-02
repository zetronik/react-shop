import React from "react";
import classes from './Home.module.css'
import Slider from '../../component/slider/Slider'
import MainHome from '../../component/main/MainHome'
import {connect} from 'react-redux'
import {initShop} from '../../store/actions/shop'

class Header extends React.Component {
    componentDidMount() {
        document.title = 'Chilly | Главная'
        this.props.initShop()
    }
    homeItemFilter = () => {
        return this.props.shop.filter(s => s.home)
    }
    render() {
        return (
            <div  className={classes.Header}>
                <Slider slider={this.props.slider} />
                <MainHome shopHome={this.homeItemFilter()}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shop: state.shop.shop,
        slider: state.shop.slider
    }
}
function mapDispatchToProps(dispatch) {
    return {
        initShop: () => dispatch(initShop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)