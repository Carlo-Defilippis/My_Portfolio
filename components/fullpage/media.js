import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <Lettering
            title="INDEX"
            text={[
              "This is a single full page fixed screen.",
              "Use the arrow on the side or the navigation buttons to navigate to the next page"
            ]}
          />
        }
      // action={
      //   <div classNameName="button">
      //     <AwesomeButton
      //       size="large"
      //       onPress={() => {
      //         fullpage.navigate("/page-two");
      //       }}
      //     >
      //       Goto the next page
      //     </AwesomeButton>
      //   </div>
      // }
      />
    </Section>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false}>
      <Background src="https://raw.githubusercontent.com/Carlo-Defilippis/My_Portfolio/master/public/contact.gif" />
      <Content
        main={
          <Lettering
            title="PAGE-THREE"
            text={["This is a screen with preloaded background image."]}
          />
        }
      // action={
      //   <div classNameName="button">
      //     <AwesomeButton
      //       size="large"
      //       onPress={() => {
      //         fullpage.navigate("/page-two");
      //       }}
      //     >
      //       Goto the prev page
      //     </AwesomeButton>
      //   </div>
      // }
      />
    </Section>
  );
});

export const media = [
  {
    slug: "",
    classNameName: "slide page-one",
    children: <Home />
  },
  {
    slug: "page-two",
    classNameName: "sectioned page-two",
    children: (
      <Page>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Content
            main={
              <Lettering
                title="Recent Projects"
                text={[
                  "Scroll down to view some of my recent work."
                ]}
              />
            }
            action={<Mouse />}
          />
        </Section>
        <Section backgroundColor="#617be3">
          <Lettering
            title="Recent Work"
            text={[
              <div className="container">
                <header>
                  <h3>Here are some apps and websites I've made recently.</h3>
                  <p> </p>
                </header>
                <div className="row">
                  <div className="col-4 col-6-md col-12-sm">
                    <article className="mx-auto box style2">
                      <a href="https://carlo-defilippis.github.io/React_Employee_App/" className="mx-auto image featured"><img style={{ width: "auto", height: "auto" }} className="rounded border-dark mx-auto" src="https://raw.githubusercontent.com/Carlo-Defilippis/My_Portfolio/master/public/React.PNG" alt="React Employee Search Screenshot" /></a>
                      <h6><a style={{ textDecoration: "underline" }} className="text-light" href="https://carlo-defilippis.github.io/React_Employee_App/">React Employee Searcher</a></h6>
                      <p>A dynamic table built with React.js that can be sorted in any way your heart desires!</p>
                    </article>
                  </div>
                  <div className="col-4 col-6-md col-12-sm">
                    <article className="mx-auto box style2">
                      <a href="https://google-book-search-carlo.herokuapp.com/" className="mx-auto image featured"><img style={{ width: "auto", height: "auto" }} className="rounded border-dark mx-auto" src="https://raw.githubusercontent.com/Carlo-Defilippis/My_Portfolio/master/public/googlebooks.PNG" alt="Google books search and save screenshot" /></a>
                      <h6><a style={{ textDecoration: "underline" }} className="text-light" href="https://google-book-search-carlo.herokuapp.com/">Google Books Search and Save</a></h6>
                      <p>A React.js based google book search engine that can also save your favorite books to a list.</p>
                    </article>
                  </div>
                  <div className="col-4 col-6-md col-12-sm">
                    <article className="mx-auto box style2">
                      <a href="https://budget-tracker-carlo.herokuapp.com" className="mx-auto image featured"><img style={{ width: "auto", height: "auto" }} className="rounded border-dark mx-auto" src="https://raw.githubusercontent.com/Carlo-Defilippis/My_Portfolio/master/public/budget.PNG" alt="" /></a>
                      <h6><a style={{ textDecoration: "underline" }} className="text-light" href="https://budget-tracker-carlo.herokuapp.com">Progressive Budget</a></h6>
                      <p>Budget tracker that records data of money spent and paid on a Mongo DataBase, and if the user is offline its saves your user inputs and it then adds the data to the MONGO DataBase when it is back online.</p>
                    </article>
                  </div>

                  <div className="col-4 col-6-md col-12-sm">
                    <article className="mx-auto box style2">
                      <a href="#" className="mx-auto image featured"><img style={{ width: "auto", height: "auto" }} className="rounded border-dark mx-auto" src="https://via.placeholder.com/1000x800" alt="" /></a>
                      <h6><a style={{ textDecoration: "underline" }} className="text-light" href="#">Tempus dolore</a></h6>
                      <p>Ornare nulla proin odio consequat.</p>
                    </article>
                  </div>
                  <div className="col-4 col-6-md col-12-sm">
                    <article className="mx-auto box style2">
                      <a href="#" className="mx-auto image featured"><img style={{ width: "auto", height: "auto" }} className="rounded border-dark mx-auto" src="https://via.placeholder.com/1000x800" alt="" /></a>
                      <h6><a style={{ textDecoration: "underline" }} className="text-light" href="#">Feugiat aliquam</a></h6>
                      <p>Ornare nulla proin odio consequat.</p>
                    </article>
                  </div>
                  <div className="col-4 col-6-md col-12-sm">
                    <article className="mx-auto box style2">
                      <a href="#" className="mx-auto image featured"><img style={{ width: "auto", height: "auto" }} className="rounded border-dark mx-auto" src="https://via.placeholder.com/1000x800" alt="" /></a>
                      <h6><a style={{ textDecoration: "underline" }} className="text-light" href="#">Sed amet ornare</a></h6>
                      <p>Ornare nulla proin odio consequat.</p>
                    </article>
                  </div>
                </div>
                <footer>
                  <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
                  <a href="#contact" className="button large scrolly">Get in touch with me</a>
                </footer>
                <div className="content__action__go">
                  <Mouse />
                </div>
              </div>
            ]}
          />
        </Section>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Lettering
            title="Recent Projects"
            text={[
              <div className="container">
                <header>
                  <h3>Here are some algorithms I've made recently.</h3>
                  <p> </p>
                </header>
                <div className="row">
                  <div className="col-4 col-6-md col-12-sm">
                    <div className="card mb-2" style={{ width: "auto", height: "auto" }}>
                      <img src="https://via.placeholder.com/1000x800" className="card-img-top" alt="desc" />
                      <div className="card-body">
                        <h5 className="card-title text-dark">Card title</h5>
                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="input-group input-group-sm mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">User Input</span>
                          </div>
                          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-6-md col-12-sm">
                    <div className="card mb-2" style={{ width: "auto", height: "auto" }}>
                      <img src="https://via.placeholder.com/1000x800" className="card-img-top" alt="desc" />
                      <div className="card-body">
                        <h5 className="card-title text-dark">Card title</h5>
                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="input-group input-group-sm mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">User Input</span>
                          </div>
                          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-6-md col-12-sm">
                    <div className="card mb-2" style={{ width: "auto", height: "auto" }}>
                      <img src="https://via.placeholder.com/1000x800" className="card-img-top" alt="desc" />
                      <div className="card-body">
                        <h5 className="card-title text-dark">Card title</h5>
                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="input-group input-group-sm mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">User Input</span>
                          </div>
                          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-4 col-6-md col-12-sm">
                    <div className="card mb-2" style={{ width: "auto", height: "auto" }}>
                      <img src="https://via.placeholder.com/1000x800" className="card-img-top" alt="desc" />
                      <div className="card-body">
                        <h5 className="card-title text-dark">Card title</h5>
                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="input-group input-group-sm mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">User Input</span>
                          </div>
                          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-6-md col-12-sm">
                    <div className="card mb-2" style={{ width: "auto", height: "auto" }}>
                      <img src="https://via.placeholder.com/1000x800" className="card-img-top" alt="desc" />
                      <div className="card-body">
                        <h5 className="card-title text-dark">Card title</h5>
                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="input-group input-group-sm mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">User Input</span>
                          </div>
                          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-6-md col-12-sm">
                    <div className="card mb-2" style={{ width: "auto", height: "auto" }}>
                      <img src="https://via.placeholder.com/1000x800" className="card-img-top" alt="desc" />
                      <div className="card-body">
                        <h5 className="card-title text-dark">Card title</h5>
                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="input-group input-group-sm mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">User Input</span>
                          </div>
                          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                </div>
                <footer>
                  <small>
                    Built with <span className="text-danger">{`<3`}</span> by{" "}
                    <a className="text-warning" target="_blank" href="https://github.com/Carlo-Defilippis">
                      Carlo DeFilippis
                    </a>
                  </small>
                </footer>

              </div>
            ]}
          />
        </Section>
      </Page>
    )
  },
  {
    slug: "page-three",
    preload: ["https://raw.githubusercontent.com/Carlo-Defilippis/My_Portfolio/master/public/contact.gif"],
    classNameName: "slide page-three",
    children: <Third />
  }
];
