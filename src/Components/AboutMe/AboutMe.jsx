import "./AboutMe.scss";

export const AboutMe = () => {
    return (
        <div id="about" className="container my-5 text-center">
            <h1 className="text-center mb-5 fw-bold"> ABOUT ME</h1>

            <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center">
                <section className="ps-lg-5 pe-lg-5">
                    <p className="aboutP text-center">Hello there! <br />
                        I am a Junior frontend developer with experience in designing, coding, and testing web applications and sites. I m interested in remote work opportunities. I am results-oriented with excellent communication skills and high attention to details. I am very passionate about programming. <br />
                        Lets code!
                    </p>
                    <i className="fas fa-laptop-code fa-5x"></i>
                </section>
            </div>

        </div>
    )
}