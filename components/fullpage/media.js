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
              "Use the button bellow to navigate to the next page"
            ]}
          />
        }
        action={
          <div classNameName="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              Goto the next page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#ff6f5e">
      <Background src="https://caferati.me/images/series/bojack-0.png" />
      <Content
        main={
          <Lettering
            title="PAGE-THREE"
            text={["This is a screen with preloaded background image."]}
          />
        }
        action={
          <div classNameName="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              Goto the prev page
            </AwesomeButton>
          </div>
        }
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
								<a href="https://carlo-defilippis.github.io/React_Employee_App/" className="mx-auto image featured"><img style={{width: "auto", height: "auto"}} className="rounded border-dark mx-auto" src="https://raw.githubusercontent.com/Carlo-Defilippis/React_Employee_App/master/React.PNG" alt="React Employee Search Screenshot" /></a>
								<h6><a style={{textDecoration: "underline"}} className="text-light" href="https://carlo-defilippis.github.io/React_Employee_App/">React Employee Searcher</a></h6>
								<p>A dynamic table built with React.js that can be sorted in any way your heart desires!</p>
							</article>
						</div>
						<div className="col-4 col-6-md col-12-sm">
							<article className="mx-auto box style2">
								<a href="https://google-book-search-carlo.herokuapp.com/" className="mx-auto image featured"><img style={{width: "auto", height: "auto"}} className="rounded border-dark mx-auto" src="https://github.com/Carlo-Defilippis/google_book_search/raw/master/googlebooks.PNG" alt="Google books search and save screenshot" /></a>
								<h6><a style={{textDecoration: "underline"}} className="text-light" href="https://google-book-search-carlo.herokuapp.com/">Google Books Search and Save</a></h6>
								<p>A React.js based google book search engine that can also save your favorite books to a list.</p>
							</article>
						</div>
						<div className="col-4 col-6-md col-12-sm">
							<article className="mx-auto box style2">
								<a href="https://budget-tracker-carlo.herokuapp.com" className="mx-auto image featured"><img style={{width: "auto", height: "auto"}} className="rounded border-dark mx-auto" src="https://raw.githubusercontent.com/Carlo-Defilippis/Progressive_Budget/master/images/budget.PNG" alt="" /></a>
								<h6><a style={{textDecoration: "underline"}} className="text-light" href="https://budget-tracker-carlo.herokuapp.com">Progressive Budget</a></h6>
								<p>Budget tracker that records data of money spent and paid on a Mongo DataBase, and if the user is offline its saves your user inputs and it then adds the data to the MONGO DataBase when it is back online.</p>
							</article>
						</div>
            
						<div className="col-4 col-6-md col-12-sm">
							<article className="mx-auto box style2">
								<a href="#" className="mx-auto image featured"><img style={{width: "auto", height: "auto"}} className="rounded border-dark mx-auto" src="https://via.placeholder.com/200" alt="" /></a>
								<h6><a style={{textDecoration: "underline"}} className="text-light" href="#">Tempus dolore</a></h6>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="col-4 col-6-md col-12-sm">
							<article className="mx-auto box style2">
								<a href="#" className="mx-auto image featured"><img style={{width: "auto", height: "auto"}} className="rounded border-dark mx-auto" src="https://via.placeholder.com/200" alt="" /></a>
								<h6><a style={{textDecoration: "underline"}} className="text-light" href="#">Feugiat aliquam</a></h6>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
						<div className="col-4 col-6-md col-12-sm">
							<article className="mx-auto box style2">
								<a href="#" className="mx-auto image featured"><img style={{width: "auto", height: "auto"}} className="rounded border-dark mx-auto" src="https://via.placeholder.com/200" alt="" /></a>
								<h6><a style={{textDecoration: "underline"}} className="text-light" href="#">Sed amet ornare</a></h6>
								<p>Ornare nulla proin odio consequat.</p>
							</article>
						</div>
					</div>
					<footer>
						<p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
						<a href="#contact" className="button large scrolly">Get in touch with me</a>
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
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    classNameName: "slide page-three",
    children: <Third />
  }
];
