import bitPeople from "./assets/bit-people.png";
import hackerNews from "./assets/hackerNews.png";
import bitShow from "./assets/bitShow.png";
import gitHubSearcher from "./assets/gitHubSearcher.png";
import rickAndMorty from "./assets/rickAndMorty.png";
import buildEstate from "./assets/buildEstate.png";
import "./MyProjects.scss";

export const MyProjects = () => {
    return (
        <div id="projects" class="mb-5">
            <h1 class="text-center pt-4 mb-5"> PROJECTS</h1>

            <section class="container d-flex flex-wrap justify-content-center project-container">
                <article class="project-article mb-5 col-lg-5 fs-5 text-center">
                    <h3>BIT People</h3>
                    <a href="https://slobodanstojkovic.github.io/react-bit-people/" target="_blank"><img className="projectImg" src={bitPeople} alt="BIT People" /></a>
                    <p>React BIT People is application created using React that pulls random user data from Random User API. Application is used for searching random fetched users. Users can be displayed as a list or as a grid.</p>
                </article>
                <article class="project-article mb-5 col-lg-5 fs-5 text-center">
                    <h3>Search TV Shows</h3>
                    <a href="https://slobodanstojkovic.github.io/Search-TV-Shows/" target="_blank"><img className="projectImg" src={bitShow} alt="Search TV Shows" /></a>
                    <p>Website whose main purpose is to provide information to the users about TV shows. It has a search function for specific TV show, or if you type few characters and press enter it will display matching TV Shows. You can also view cast, number of episodes and AKAs.</p>
                </article>
                <article class="project-article mb-5 col-lg-5 fs-5 text-center">
                    <h3>GitHub Searcher</h3>
                    <a href="https://slobodanstojkovic.github.io/GitHub-Searcher/" target="_blank"><img className="projectImg" src={gitHubSearcher} alt="GitHub Searcher" /></a>
                    <p>Single page application that enables you to search for GitHub profiles and see their list of repositories.
                    </p>
                </article>
                <article class="project-article mb-5 col-lg-5 fs-5 text-center">
                    <h3>Rick and Morty Characters</h3>
                    <a href="https://slobodanstojkovic.github.io/Rick-and-Morty-Characters/" target="_blank"><img className="projectImg" src={rickAndMorty} alt="Rick And Morty" /></a>
                    <p>Web application for browsing Rick & Morty characters. Application pulls data from API.
                    </p>
                </article>
                <article class="project-article mb-5 col-lg-5 fs-5 text-center">
                    <h3>Build Estate</h3>
                    <a href="https://slobodanstojkovic.github.io/BuildEstate/" target="_blank"><img className="projectImg" src={buildEstate} alt="Build Estate" /></a>
                    <p>BuildEstate is the responsive website example. It changes depending if its being viewed on mobile devices, tablets or laptops and desktop computers.
                    </p>
                </article>
                <article class="project-article mb-5 col-lg-5 fs-5 text-center">
                    <h3>Hacker News</h3>
                    <a href="https://slobodanstojkovic.github.io/hacker-news/" target="_blank"><img className="projectImg" src={hackerNews} alt="" /></a>
                    <p>Hacker News is a project that makes example of a single page blog that collects latest news fetched from API, gives out basic data about that news and provides link to original news location.
                    </p>
                </article>

            </section>
        </div>
    )
}