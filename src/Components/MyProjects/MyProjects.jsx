import bitPeople from "./assets/bitPeople.jpg";
import hackerNews from "./assets/hackerNews.jpg";
import bitShow from "./assets/bitShow.jpg";
import gitHubSearcher from "./assets/gitHubSearcher.jpg";
import rickAndMorty from "./assets/rickAndMorty.jpg";
import buildEstate from "./assets/buildEstate.jpg";
import movieFestival from "./assets/movieFestival.jpg";
import examStatistics from "./assets/examStatistics.jpg";
import studentProfiles from "./assets/studentProfiles.png";
import bitBlog from "./assets/bitBlog.png";
import "./MyProjects.scss";

export const MyProjects = () => {
  return (
    <div id="projects" className="mb-5 anchor">
      <h1 className="text-center pt-4 mb-5"> PROJECTS</h1>

      <section className="container d-flex flex-wrap justify-content-center project-container">
        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>Student Profiles</h3>
          <a
            href="https://slobodanstojkovic.github.io/student-profiles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={studentProfiles}
              alt="Student Profiles"
            />
          </a>
          <p>
            Single page app that fetches students data from API and allows you
            to add tags to each student, search students by full name or by tags
            that you have added. Technologies used are React.JS, JavaScript,
            HTML5, CSS3, AJAX.
          </p>
        </article>

        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>Bit Blog</h3>
          <a
            href="https://slobodanstojkovic.github.io/bit-blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="projectImg" src={bitBlog} alt="Bit Blog" />
          </a>
          <p>
            BIT BLOG is a Single Page Application whose main purpose is to show
            example of a blog. It fetches random blog and posts data from API in
            form of lorem ipsum text and displays it on the page.
          </p>
        </article>

        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>BIT People</h3>
          <a
            href="https://slobodanstojkovic.github.io/react-bit-people/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="projectImg" src={bitPeople} alt="BIT People" />
          </a>
          <p>
            React BIT People is application created using React that pulls
            random user data from Random User API. Application is used for
            searching random fetched users. Users can be displayed as a list or
            as a grid.
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
        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>Rick and Morty Characters</h3>
          <a
            href="https://slobodanstojkovic.github.io/Rick-and-Morty-Characters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={rickAndMorty}
              alt="Rick And Morty"
            />
          </a>
          <p>
            Web application for browsing Rick & Morty characters. Application
            pulls data from API.
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
          <h3>Hacker News</h3>
          <a
            href="https://slobodanstojkovic.github.io/hacker-news/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="projectImg" src={hackerNews} alt="Hacker News" />
          </a>
          <p>
            Hacker News is a project that makes example of a single page blog
            that collects latest news fetched from API, gives out basic data
            about that news and provides link to original news location.
          </p>
        </article>
        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>MVC-MovieFestival</h3>
          <a
            href="https://slobodanstojkovic.github.io/MVC-MovieFestival/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={movieFestival}
              alt="Movie Festival"
            />
          </a>
          <p>
            MVC-MovieFestival is a Single Page Application whose main purpose is
            to create Movie Festival Program. Program is created on certain date
            in future and movies with their details can be added to program. You
            can create multiple Movie Festival Programs.
          </p>
        </article>
        <article className="project-article mb-5 col-lg-5 fs-5 text-center">
          <h3>MVC-ExamStatistics</h3>
          <a
            href="https://slobodanstojkovic.github.io/MVC-ExamStatistics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="projectImg"
              src={examStatistics}
              alt="Exam Statistics"
            />
          </a>
          <p>
            Single Page Application designed to calculate Exam Statistics. It
            shows percentage of students that have passed and failed exams. Its
            created using JavaScript and Model View Control Pattern.
          </p>
        </article>
      </section>
    </div>
  );
};
