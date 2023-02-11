import bitShow from "./assets/bitShow.webp";
import gitHubSearcher from "./assets/gitHubSearcher.webp";
import buildEstate from "./assets/buildEstate.webp";
import sweetPleasures from "./assets/sweetPleasures.webp";
import landingPageLoopStudios from "./assets/landingPageLoopStudios.webp";
import landingPageSunnyside from "./assets/landingPageSunnyside.webp";
import "./MyProjects.scss";

export const MyProjects = () => {
  return (
    <div id="projects" className="mb-5 anchor">
      <h1 className="text-center pt-4 mb-5"> PROJECTS</h1>

      <section className="container d-flex flex-wrap justify-content-center project-container">
        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>Order Sweets App</h3>
          <a
            href="https://slobodanstojkovic.github.io/order-sweets-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={sweetPleasures}
              alt="Sweet Pleasures"
            />
          </a>
          <p>
            This app is designed to allow its users to order their favorite
            sweets directly from a seller. It uses API that fetches data from
            sellers backend and allows users to add products with desired amount
            to the cart, and after clicking the ORDER button it will then lead
            customer to insert the information where should sweets of his choice
            be delivered. After submitting the required data the seller receives
            information about customers order.
          </p>
        </article>

        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>Search TV Shows</h3>
          <a
            href="https://slobodanstojkovic.github.io/Search-TV-Shows/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="projectImg" src={bitShow} alt="Search TV Shows" />
          </a>
          <p>
            Website whose main purpose is to provide information to the users
            about TV shows. It has a search function for specific TV show, or if
            you type few characters and press enter it will display matching TV
            Shows. You can also view cast, number of episodes and AKAs.
          </p>
        </article>

        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>Landing page Loop Studios</h3>
          <a
            href="https://slobodanstojkovic.github.io/landing-page-loop-studios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={landingPageLoopStudios}
              alt="Landing page Loop Studios"
            />
          </a>
          <p>
            This project is made using Figma design to create landing page for
            Loop Studios. It represents a landing page for Loop Studios. Landing
            page is completely responsive. Its styles are written in SASS and it
            uses gulp to minify the production code and transpile sass to css.
          </p>
        </article>

        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>Landing page Sunnyside</h3>
          <a
            href="https://slobodanstojkovic.github.io/landing-page-sunnyside/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={landingPageSunnyside}
              alt="Landing page Sunnyside"
            />
          </a>
          <p>
            This project is made using Figma design to create landing page for
            Sunnyside. It represents a landing page for Sunnyside. Landing page
            is completely responsive. Its styles are written in SASS and it uses
            gulp to minify the production code and transpile sass to css.
          </p>
        </article>

        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>Build Estate</h3>
          <a
            href="https://slobodanstojkovic.github.io/BuildEstate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="projectImg" src={buildEstate} alt="Build Estate" />
          </a>
          <p>
            BuildEstate is the responsive website example. It changes depending
            if its being viewed on mobile devices, tablets or laptops and
            desktop computers.
          </p>
        </article>

        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>GitHub Searcher</h3>
          <a
            href="https://slobodanstojkovic.github.io/GitHub-Searcher/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={gitHubSearcher}
              alt="GitHub Searcher"
            />
          </a>
          <p>
            Single page application that enables you to search for GitHub
            profiles and see their list of repositories.
          </p>
        </article>
      </section>
    </div>
  );
};
