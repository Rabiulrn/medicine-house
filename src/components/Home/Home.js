import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Home.css"

const Home = () => {
    const [recipes, setReceipes] = useState([]);
    useEffect(() => {
        fetch('./medicine.json')
            .then(res => res.json())
            .then(data => setReceipes(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className="my-5 text-center">Recent Medicine</h1>
            <div>
                <div className="row">
                    {
                        recipes.map(recipe => <div className="col-lg-3 my-5">
                            <Card className="card1" style={{ width: '18rem' }}>
                                <Card.Img variant="top" className="image" src={recipe.image} />
                                <Card.Body>
                                    <Card.Title>{recipe.name}</Card.Title>
                                    <Card.Text>

                                        <p>Descriptions: {recipe.ingredients}</p>
                                    </Card.Text>
                                    <Link to="/Details" className="">
                                        <Button variant="outline-primary">Details</Button>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>


            </div>
            {/* FAG */}
            <div className="container">
                <h1 className="my-5 text-center">Frequently Asked Questions</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How to donate medicine?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <strong>Donation Proccess.</strong> Step 1: Determine if the medicine is eligible for donation. ...
                                Step 2: Check your state's regulations on medicine donation. ... <br />
                                Step 3: Fill out the required forms. ... <br />
                                Step 4: Remove any personal information from the packaging. ... <br />
                                Step 5: Coordinate shipping or drop-off of the medication.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How to request for Medicine?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Donation Proccess.</strong> Step 1: Determine if the medicine is eligible for donation. ...
                                Step 2: Check your state's regulations on medicine donation. ...
                                Step 3: Fill out the required forms. ...
                                Step 4: Remove any personal information from the packaging. ...
                                Step 5: Coordinate shipping or drop-off of the medication.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How to collect Medicine?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


          
            {/* doner */}
            <div >
            <h1 className="text-center my-5">Top Donor</h1>
            <div className="chef container mb-5">
                <div>
                    <img className="chef-photo" src="./images/d1.jpg" alt="" />
                    <h5 className="text-center my-2"> Arefin Shuvo</h5>
                </div>
                <div>
                    <img className="chef-photo" src="./images/d2.jpg" alt="" />
                    <h5 className="text-center my-2">Siam</h5>
                </div>
                <div>
                    <img className="chef-photo" src="./images/d3.jpg" alt="" />
                    <h5 className="text-center my-2">Karim</h5>
                </div>
               

            </div>

        </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;