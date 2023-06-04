import AOS from 'aos';
import { Link } from "react-router-dom"
function AboutUs() {
    return (
        <section className="Aboutus">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-0 "style={{height:"493px"}} data-aos="fade-right">
                        <div className='w-100 h-100'>
                            <img className='w-100 h-100' src={require('../../Assests/about.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 p-0" data-aos="fade-left" >
                        <div className='aboutus-des'>
                            <div className='about-show mb-3'></div>
                            <div>
                                <h1 className='text-dark mb-4'>About Us</h1>
                            </div>
                            <div>
                                <p>
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet
                                </p>
                            </div>
                            <div className='row mb-3'>
                                <div className="col-md-6 col-sm-4 ">
                                    <div className='d-flex align-items-center'>
                                        <div className='about-img-show bg-white me-3 rounded-circle'data-aos="flip-left">
                                            <img className='img-fluid' src={require("../../Assests/icon-1.png")} alt="" />
                                        </div>
                                        <div>
                                            <h2 className='m-0 text-dark'>1234</h2>
                                            <p className='m-0 about-clients'>
                                                Happy Clients
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-4 ">
                                    <div className='d-flex align-items-center'>
                                        <div className='about-img-show bg-white me-3 rounded-circle' data-aos="flip-left">
                                            <img className='img-fluid' src={require("../../Assests/icon-5.png")} alt="" />
                                        </div>
                                        <div>
                                            <h2 className='m-0 text-dark'>1234</h2>
                                            <p className='m-0 about-clients'>
                                                Projects Done
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <Link className='about-more' to="/">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;