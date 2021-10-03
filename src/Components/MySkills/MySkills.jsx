import "./MySkills.scss";


export const MySkills = () => {
    return (
        <div id="skills" className=" pb-5">
            <h1 className="text-center pt-4 mb-5 text-dark fw-bold">MY SKILLS <i className="fas fa-user-secret text-center"></i></h1>

            <div className="container skill-section py-5 mb-5 row">

                <div className="rowOneSkills row">
                    <article className="col text-center">
                        <i className="fab fa-react"></i>
                        <p className="text-center">React</p>
                    </article>
                    <article className="col text-center">
                        <img src="https://icons.iconarchive.com/icons/graphics-vibe/developer/128/javascript-icon.png" className="skill" alt="javascript" />
                        <p className="text-center">Javascript</p>
                    </article>
                    <article className="col text-center">
                        <img src="https://icons.iconarchive.com/icons/graphics-vibe/developer/128/html-icon.png" className="skill" alt="html" />
                        <p className="text-center">HTML5</p>
                    </article>
                    <article className="col text-center">
                        <img src="https://icons.iconarchive.com/icons/graphics-vibe/developer/128/css-icon.png" className="skill" alt="css" />
                        <p className="text-center">CSS3</p>
                    </article>
                </div>
                <div className="rowTwoSkills row">
                    <article className="col text-center">
                        <img src="https://icon-library.com/images/jquery-icon-png/jquery-icon-png-7.jpg" className="skill" alt="jQuery" />
                        <p className="text-center">jQuery</p>
                    </article>
                    <article className="col text-center">
                        <img src="https://icons.iconarchive.com/icons/graphics-vibe/developer/128/ajax-icon.png" className="skill" alt="AJAX" />
                        <p className="text-center">AJAX</p>
                    </article>

                    <article className="col text-center">
                        <i className="fab fa-bootstrap"></i>
                        <p className="text-center">Bootstrap 5</p>
                    </article>
                    <article className="col text-center">
                        <i className="fab fa-sass"></i>
                        <p className="text-center">SASS</p>
                    </article>
                </div>
            </div>
        </div>
    )
}