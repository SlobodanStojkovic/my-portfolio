import "./Header.scss";
import $ from "jquery";

export const Header = () => {


    const showMenuOnClick = () => {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    };



    return (

        <header>
            <nav className="nav">
                <div className="container">
                    <div className="logoName">
                        <a href="#">Slobodan Stojkovic</a>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">My skills</a></li>
                            <li><a href="#projects">My projects</a></li>
                            <li><a href="#footer">Contact</a></li>
                        </ul>
                    </div>
                    <span className="navTrigger" onClick={showMenuOnClick}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>

            <section className="homeSec">

                <div className="divHeader">
                    <section className="sec-header">
                        <h1>Hi, I am Slobodan Stojkovic</h1>
                        <hr className="col-xs-12 d-none d-sm-block hrHeader" />
                        <div className="presentationHeader">
                            <section className="half-header-r d-none d-sm-none d-md-block">
                                <p className="line1Header">"I'm a Frontend Developer."</p>
                                <p className="line2Header">"Are you looking for one?"</p>
                                <p className="line3Header">"Let's work together!"</p>
                                <p className="line4Header">{`>`}<span className="cursor1Header">_</span></p>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
        </header>
    )
}


