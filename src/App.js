import React, {lazy, Suspense} from 'react'
import { Route, Switch } from  'react-router-dom'
import {connect} from "react-redux"
import Layout from './hoc/Layout/Layout'
import Loader from './component/UI/Loader/Loade'
import {initShop} from './store/actions/shop'

const Home  = lazy(() => import('./containers/home/Home'))
const Shop  = lazy(() => import('./containers/shop/Shop'))
const Product  = lazy(() => import('./containers/product/Product'))
const Cart  = lazy(() => import('./containers/cart/Cart'))
const Order  = lazy(() => import('./containers/order/Order'))
const About  = lazy(() => import('./containers/about/About'))
const Size  = lazy(() => import('./containers/size/Size'))
const Care  = lazy(() => import('./containers/care/Care'))

class App extends React.Component {
    componentDidMount() {
        this.props.initShop()
    }
    render() {
        return (
            <Layout contact={this.props.contact}>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/shop" exact={true} component={Shop} />
                        <Route path="/shop/:id" exact={true} component={Product} />
                        <Route path="/cart" exact={true} component={Cart} />
                        <Route path="/order" exact={true} component={Order} />
                        <Route path="/about" exact={true} component={About} />
                        <Route path="/size" exact={true} component={Size} />
                        <Route path="/care" exact={true} component={Care} />
                    </Switch>
                </Suspense>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        contact: state.shop.contact
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initShop: () => dispatch(initShop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
