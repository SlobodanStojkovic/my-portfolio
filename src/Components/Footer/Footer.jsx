import "./Footer.scss";

export const Footer = () => {
    return (

        <div id="contact" className="text-white pt-5">

            <h1 className="text-center pt-4 mb-5"><i className="fas fa-envelope"></i> CONTACT ME</h1>

            <div className="mx-auto d-flex flex-wrap justify-content-center row">
                <section className="contact-section-text pt-5 col-9">
                    <p className="text-light fs-1 fw-bold">I am ready to work on projects and make some fantastic things!<br />
                        You can contact me on:
                    </p>
                </section>
                <div className="contactNetworks col-4">
                    <section className="contact-section d-flex flex-wrap justify-content-around mt-5 pb-5 col-6">

                        <article className="mx-1 ms-5">
                            <a href="https://github.com/SlobodanStojkovic/" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </article>
                        <article className="mx-1 me-5">
                            <a href="https://www.linkedin.com/in/slobodan-stojkovic/" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </article>
                        {/*                         <article className="mx-1">
                            <a href="mailto:">
                                <i className="far fa-envelope"></i>
                            </a>
                        </article> */}

                    </section>
                </div>
            </div >
        </div >
    )
}