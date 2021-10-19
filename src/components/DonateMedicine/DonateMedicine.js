import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const DonateMedicine = () => {
    return (
        <div>
            <Header></Header>
            <div className="container my-5">
            <h1 className="text-center my-5">Donate medicine</h1>
            <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="text" name="" placeholder="Medicine name" id="" />
                    <br />
                    <br />
                    <input type="text" name="" placeholder="Medicine Quantity" id="" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DonateMedicine;