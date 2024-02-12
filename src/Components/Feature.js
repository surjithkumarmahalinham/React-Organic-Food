import Footer from "./Footer";
import Header from "./Header";

function Feature(){
    return(
        <div>
            <Header />
            <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">Features</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="text-body" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-body" href="/">Pages</a></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">Features</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-fluid bg-light bg-icon py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <h1 className="display-5 mb-3">Our Features</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="img/icon-1.png" alt="" />
                                <h4 className="mb-3">Natural Process</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                                <h4 className="mb-3">Organic Products</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                                <h4 className="mb-3">Biologically Safe</h4>
                                <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                                <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Feature;