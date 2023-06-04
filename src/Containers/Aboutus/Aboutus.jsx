function AboutUs() {
    return (
        <section className="Aboutus">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className='w-100'>
                            <img className='w-100' src={require('../../Assests/about.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className='aboutus-des'>
                            <div className='about-show'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;