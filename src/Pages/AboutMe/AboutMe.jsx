import "./AboutMe.css";

function AboutMe() {
    return (
        <div className="about-me-section aboutme-inside my-5" id="aboutme">
            <div className="d-flex flex-column">
                <span className="about-me-text">About me</span>
                <span className="why-text-sub">Why Choose me?</span>
                <div className="row justify-content-center shadow-lg mt-3 about-me-container">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center about-anim">
                        <lottie-player className="lottie1" src="https://assets9.lottiefiles.com/packages/lf20_v1yudlrx.json" background="transparent" speed="1" style={{ width: "500px", height: "500px" }} loop autoplay></lottie-player>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
                        <span className="some-text-about-me">
                        Passionate MERN Stack Developer contributing to the world of web development with a focus on popular Frontend technology ReactJs.
                        </span>
                        <span className="few-highlights">
                            <span className="few-text">Here are few highlights</span>
                            <span className="few-list">
                                <ul>
                                    <li>FullStack Web Developer</li>
                                    <li>Interactive Front end as per the design</li>
                                    <li>Node JS, Express, MongoDB(All backend technologies)</li>
                                </ul>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;