import React from 'react'
import classes from './Layout.module.css'
import Footer from '../../component/footer/Footer'
import Top from "../../component/header/top/Top";
import Middle from "../../component/header/middle/Middle";
import Bottom from "../../component/header/bottom/Bottom";
import {connect} from "react-redux";
import {mountComponent} from "../../store/actions/cart";

class Layout extends React.Component {
    componentDidMount() {
        this.props.mountComponent()
    }

    render() {
        return (
            <div className={classes.Layout}>
                <header>
                  <Top contact={this.props.contact} />
                  <Middle cart={this.props.cart.length} />
                  <Bottom />
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
  }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mountComponent: () => dispatch(mountComponent()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Layout)
