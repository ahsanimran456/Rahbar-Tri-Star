import AOS from 'aos';
import React, { useEffect } from 'react';
function Simplecards() {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease-in-out',
          once: false,
          mirror: false
        });
      }, []);
    return (
        <section className="simplecrards-section">
            <div className="container">
                <div className="simple-cards-main">
                    <div data-aos="zoom-in" className="simple-each-cards p-4 ">
                        <div className="d-flex justify-content-between align-items-center mb-3" >
                            <div className='simplecards-icon'>
                                <img src={require('../../Assests/icon-3.png')} alt="" className='w-100' />
                            </div>
                            <div>
                                <h1 className='simple-card-number'>
                                    01
                                </h1>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-white'>
                                Home Security
                            </h5>
                            <hr className="w-25 text-white" />
                        </div>
                        <div>
                            <span>
                                Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et
                            </span>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className=" simple-each-cards   p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3" >
                            <div className='simplecards-icon'>
                                <img src={require('../../Assests/icon-3.png')} alt="" className='w-100' />
                            </div>
                            <div>
                                <h1 className='simple-card-number'>
                                    01
                                </h1>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-white'>
                                Home Security
                            </h5>
                            <hr className="w-25 text-white" />
                        </div>
                        <div>
                            <span>
                                Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et
                            </span>
                        </div>
                    </div>
                    <div data-aos="zoom-in"  className="simple-each-cards   p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3" >
                            <div className='simplecards-icon'>
                                <img src={require('../../Assests/icon-3.png')} alt="" className='w-100' />
                            </div>
                            <div>
                                <h1 className='simple-card-number'>
                                    01
                                </h1>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-white'>
                                Home Security
                            </h5>
                            <hr className="w-25 text-white" />
                        </div>
                        <div>
                            <span>
                                Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo clita et
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Simplecards;