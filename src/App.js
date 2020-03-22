import React from 'react';
import Header from './components/Header';
import ProductsContainer from './redux/containers/ProductsContainer';
import MessageContainer from './redux/containers/MessageContainer';
import CartContainer from './redux/containers/CartContainer';
import Footer from './components/Footer';


class App extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- Header --> */}
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        {/* <!-- Products --> */}
                        <ProductsContainer />
                        {/* <!-- Message --> */}
                        <MessageContainer />
                        {/* <!-- Cart --> */}
                        <CartContainer />
                    </div>
                </main>
                {/* <!-- Footer --> */}
                <Footer />
            </div>
        );
    }
}
export default App;
