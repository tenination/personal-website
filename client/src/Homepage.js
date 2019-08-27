import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

//background
import keyboard from './keyboard.jpg';
import bluepaper from './blue-wallpaper.jpg';
// frontend
import reactLogo from './reactLogo.png';
import reduxLogo from './reduxLogo.png';
import angularLogo from './angularLogo.png';
import backboneLogo from './backboneLogo.png';
import jqueryLogo from './jqueryLogo.png';
import htmlLogo from './htmlLogo.png';
import cssLogo from './cssLogo.png';
import javascriptLogo from './javascriptLogo.png';
import typescriptLogo from './typescriptLogo.png';
import d3Logo from './d3Logo.png';
import apolloLogo from './apolloLogo.png';
// backend
import nodeLogo from './nodeLogo.png';
import mongodbLogo from './mongodbLogo.png';
import mysqlLogo from './mysqlLogo.svg';
import expressjsLogo from './expressjsLogo.svg';
import graphQLLogo from './graphQLLogo.png';
import sqliteLogo from './sqliteLogo.png';
import firebaseLogo from './firebaseLogo.png';

// general
import awsLogo from './awsLogo.png';
import herokuLogo from './herokuLogo.svg';
import gitLogo from './gitLogo.png';
import npmLogo from './npmLogo.png';
import mochaLogo from './mochaLogo.svg';
import pythonLogo from './pythonLogo.png';
import cplusplusLogo from './cplusplusLogo.png';
import javaLogo from './javaLogo.png';

// projects
import MySong from './MySong.png';
import PantryByte from './PantryByte.png';
import AsteroidTracker from './AsteroidTracker.png';
import ProjectPlan from './ProjectPlan.png';
import BooksApp from './BooksApp.png';
// blogs
// screenshots taken at 90% window size
import mediumArticle1 from './mediumArticle-1.png';
import mediumArticle2 from './medium-cartooning-around.png';

//icon logo
import twitterLogo from './twitterLogoGrey1.png';
import githubIconGrey from './githubIconGrey.png';
import linkedIcon from './linkedinIcon.png';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      class="element2"
      as="h1"
      content="Tim Ninan"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        fontFamily: 'Bungee',
      }}
    />
    <Header
      as="h2"
      content="I'm an Austin based full-stack software engineer focused on crafting clean & user‑friendly experiences."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        // background: 'rgba(0, 0, 0, 0.3)',
        // borderRadius:'20px',
        padding: '20px',
      }}
    />
    <div>
      <a href="http://www.linkedin.com/in/tim-ninan" target="_blank">
        <img
          className="contact-icon-top"
          style={{ opacity: '0.5' }}
          src={linkedIcon}
        />
      </a>
      <a href="http://www.github.com/tenination" target="_blank">
        <img className="contact-icon-top" src={githubIconGrey} />
      </a>
      <a href="http://www.twitter.com/tenination" target="_blank">
        <img className="contact-icon-top" src={twitterLogo} />
      </a>
      {/* <a href='https://drive.google.com/file/d/1RB-77e5hFF-K5JOSH6gWWgoiig4U2GNz/view' target='_blank'>
      <img className='contact-icon-top' style={{width:'65px'}}src='https://ucarecdn.com/b68d6734-b22c-4dc5-95e6-0ea2d90ac756/resumeicon.png'></img>
    </a> */}
    </div>
  </Container>
);

class DesktopContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Responsive {...Responsive.onlyComputer}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, backgroundImage: `url(${bluepaper})` }}
          vertical
        >
          <HomepageHeading />
        </Segment>
        {children}
      </Responsive>
    );
  }
}

class TabletContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 350,
            padding: '1em 0em',
            backgroundImage: `url(${bluepaper})`,
            backgroundSize: 'cover',
          }}
          vertical
        >
          <HomepageHeading mobile />
        </Segment>
        {children}
      </Responsive>
    );
  }
}

class MobileContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Responsive {...Responsive.onlyTablet}>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 350,
            padding: '1em 0em',
            backgroundImage: `url(${bluepaper})`,
            backgroundSize: 'cover',
          }}
          vertical
        >
          <HomepageHeading mobile />
        </Segment>
        {children}
      </Responsive>
    );
  }
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <TabletContainer>{children}</TabletContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

const Homepage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '0em 0em' }}>
      <Segment
        className="website-heading"
        style={{
          textAlign: 'center',
          fontSize: '50px',
          marginTop: '-92px',
          borderRadius: '0px',
        }}
      >
        About Me
      </Segment>
      <p
        style={{ padding: '100px 80px', fontSize: '20px', textAlign: 'center' }}
      >
        {' '}
        Hi I'm Tim, a full stack software engineer. I'm interested in all things
        web and mobile and looking to leverage my skills to build awesome
        things. I'm proficient in working across the full stack and constantly
        building upon my toolkit with new technologies and approaches to problem
        solving. Contact me with any professional opportunities at
        tim.ninan.atx@gmail.com!{' '}
      </p>
    </Segment>

    <Segment style={{ padding: '8em 0em', marginTop: '-13px' }}>
      <Segment
        className="website-heading"
        style={{ textAlign: 'center', fontSize: '50px', marginTop: '-115px' }}
      >
        Skills
      </Segment>
      <Grid style={{ marginTop: '30px', padding: '10px' }}>
        <Grid.Row columns={3}>
          <Grid.Column style={{ background: 'white' }}>
            <h1 className="skills-subheading">Front-End</h1>
            <Grid.Row>
              <img
                src={reactLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={reduxLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={angularLogo}
                style={{
                  height: '100px',
                  width: '100px',
                  padding: '15px',
                  background: 'white',
                }}
              />
              <img
                src={backboneLogo}
                style={{ height: '130px', width: '100px', padding: '15px' }}
              />
              <img
                src={jqueryLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={htmlLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={cssLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={javascriptLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={typescriptLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={d3Logo}
                style={{ height: '100px', width: '120px', padding: '15px' }}
              />
              <img
                src={apolloLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
            </Grid.Row>
          </Grid.Column>

          <Grid.Column style={{ background: 'white' }}>
            <h1 className="skills-subheading">Back-End</h1>
            <Grid.Row>
              <img
                src={nodeLogo}
                style={{ height: '70px', width: '100px', padding: '15px' }}
              />
              <img
                src={mongodbLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={mysqlLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={expressjsLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={graphQLLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={firebaseLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
            </Grid.Row>
          </Grid.Column>

          <Grid.Column style={{ background: 'white' }}>
            <h1 className="skills-subheading">General</h1>
            <Grid.Row>
              <img
                src={gitLogo}
                style={{ height: '60px', width: '100px', padding: '15px' }}
              />
              <img
                src={npmLogo}
                style={{ height: '60px', width: '100px', padding: '15px' }}
              />
              <img
                src={mochaLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={pythonLogo}
                style={{ height: '50px', width: '100px', padding: '15px' }}
              />
              <img
                src={javaLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={awsLogo}
                style={{ height: '70px', width: '100px', padding: '15px' }}
              />
              <img
                src={herokuLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
              <img
                src={cplusplusLogo}
                style={{ height: '100px', width: '90px', padding: '15px' }}
              />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em', paddingBottom: '50px' }} vertical>
      <Segment
        className="website-heading"
        style={{
          textAlign: 'center',
          fontSize: '50px',
          marginTop: '-92px',
          borderRadius: '0px',
        }}
      >
        Portfolio
      </Segment>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header
              as="h2"
              style={{ fontSize: '2em', fontFamily: 'Titillium Web' }}
            >
              MySong
            </Header>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '20px',
                padding: '0px 50px',
              }}
            >
              A Spotify integrated platform to share your favorite song for the
              week with people in your life
            </p>
            <img
              src={MySong}
              style={{ width: '488px', height: '226px', borderRadius: '10px' }}
            />
            <br />
            <div style={{ paddingTop: '20px' }}>
              <img src={reactLogo} style={{ width: '80px', padding: '15px' }} />
              <img src={nodeLogo} style={{ width: '100px', padding: '15px' }} />
              <img
                src={mongodbLogo}
                style={{ width: '80px', padding: '15px' }}
              />
            </div>
            <br />
            <a
              href="https://tranquil-hollows-12097.herokuapp.com"
              target="_blank"
              style={{ textAlign: 'left' }}
            >
              See Project
            </a>
            <br />
            <a
              href="https://github.com/tenination/MySong"
              target="_blank"
              style={{ textAlign: 'left' }}
            >
              View on Github
            </a>
          </Grid.Column>

          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header
              as="h3"
              style={{ fontSize: '2em', fontFamily: 'Titillium Web' }}
            >
              Byte
            </Header>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '20px',
                padding: '0px 50px',
              }}
            >
              An app to help you find recipes based on ingredients in your
              kitchen
            </p>
            <img
              src={PantryByte}
              style={{ width: '488px', height: '226px', borderRadius: '10px' }}
            />
            <br />
            <div style={{ paddingTop: '20px' }}>
              <img src={reactLogo} style={{ width: '80px', padding: '15px' }} />
              <img src={nodeLogo} style={{ width: '100px', padding: '15px' }} />
              <img
                src={mysqlLogo}
                style={{ height: '100px', width: '100px', padding: '15px' }}
              />
            </div>
            <br />
            <a
              href="https://github.com/tenination/byte"
              target="_blank"
              style={{ textAlign: 'left' }}
            >
              View on Github
            </a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header
              as="h2"
              style={{ fontSize: '2em', fontFamily: 'Titillium Web' }}
            >
              ProjectPlan
            </Header>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '20px',
                padding: '0px 50px',
              }}
            >
              A project management app to keep track of all your projects.
            </p>
            <img
              src={ProjectPlan}
              style={{ width: '488px', height: '226px', borderRadius: '10px' }}
            />
            <br />
            <div style={{ paddingTop: '20px' }}>
              <img src={reactLogo} style={{ width: '80px', padding: '15px' }} />
              <img src={reduxLogo} style={{ width: '80px', padding: '15px' }} />
              <img src={nodeLogo} style={{ width: '100px', padding: '15px' }} />
              <img
                src={mongodbLogo}
                style={{ width: '80px', padding: '15px' }}
              />
              <img
                src={firebaseLogo}
                style={{ width: '80px', padding: '15px' }}
              />
            </div>
            <br />
            <a
              href="https://project-planz.firebaseapp.com/"
              target="_blank"
              style={{ textAlign: 'left' }}
            >
              See Project
            </a>
            <br />
            <a
              href="https://github.com/tenination/projects-app"
              target="_blank"
              style={{ textAlign: 'left' }}
            >
              View on Github
            </a>
          </Grid.Column>

          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header
              as="h3"
              style={{ fontSize: '2em', fontFamily: 'Titillium Web' }}
            >
              Books
            </Header>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '20px',
                padding: '0px 50px',
              }}
            >
              A reading list app
            </p>
            <img
              src={BooksApp}
              style={{ width: '488px', height: '226px', borderRadius: '10px' }}
            />
            <br />
            <div style={{ paddingTop: '20px' }}>
              <img src={reactLogo} style={{ width: '80px', padding: '15px' }} />
              <img
                src={apolloLogo}
                style={{ width: '80px', padding: '15px' }}
              />
              <img
                src={graphQLLogo}
                style={{ width: '80px', padding: '15px' }}
              />
              <img src={nodeLogo} style={{ width: '100px', padding: '15px' }} />
            </div>
            <br />
            <a
              href="https://github.com/tenination/books-app"
              target="_blank"
              style={{ textAlign: 'left' }}
            >
              View on Github
            </a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header
              as="h3"
              style={{
                fontSize: '2em',
                padding: '10px',
                fontFamily: 'Titillium Web',
              }}
            >
              Asteroid Tracker
            </Header>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '20px',
                padding: '0px 50px',
              }}
            >
              Stay one step ahead of the asteroids closest to earth
            </p>
            <img
              src={AsteroidTracker}
              style={{ width: '488px', height: '226px', borderRadius: '10px' }}
            />
            <br />
            <div style={{ paddingTop: '20px' }}>
              <img
                src={angularLogo}
                style={{ width: '80px', padding: '15px' }}
              />
              <img src={nodeLogo} style={{ width: '100px', padding: '15px' }} />
            </div>
            <br />
            <a
              href="https://asteroidtracker.herokuapp.com"
              target="_blank"
              style={{ textAlign: 'left' }}
            >
              See Project
            </a>
            <br />
            <a
              href="https://github.com/tenination/asteroid-tracker"
              target="_blank"
              style={{ textAlign: 'left' }}
            >
              View on Github
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em 0em', paddingBottom: '100px' }}>
      <Segment
        className="website-heading"
        style={{ textAlign: 'center', fontSize: '50px', marginTop: '-92px' }}
      >
        Blog
      </Segment>
      <div style={{ textAlign: 'center' }}>
        {/* <a href='https://medium.com/@tim.ninan/why-i-left-a-promising-career-in-telecom-to-become-a-software-engineer-66070e2b0533' target="_blank">
         <img className='blog' src={mediumArticle1}></img>
       </a>
       <a href='https://medium.com/@tim.ninan/cartooning-around-54e2473d316d' target="_blank">
         <img className='blog' src={mediumArticle2}></img>
       </a> */}
        <div style={{ fontSize: '20px' }}>Coming Soon....</div>
      </div>
    </Segment>

    <Segment style={{ padding: '0em 0em' }}>
      <Segment
        className="website-heading"
        style={{ textAlign: 'center', fontSize: '50px', marginTop: '-92px' }}
      >
        Contact Me!
      </Segment>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <a href="http://www.linkedin.com/in/tim-ninan" target="_blank">
          <img className="contact-icon-top" src={linkedIcon} />
        </a>
        <a href="http://www.github.com/tenination" target="_blank">
          <img className="contact-icon-bottom" src={githubIconGrey} />
        </a>
        <a href="http://www.twitter.com/tenination" target="_blank">
          <img className="contact-icon-bottom" src={twitterLogo} />
        </a>
        {/* <a href='https://drive.google.com/file/d/1RB-77e5hFF-K5JOSH6gWWgoiig4U2GNz/view' target='_blank'>
      <img className='contact-icon-bottom' style={{width:'65px'}}src='https://ucarecdn.com/b68d6734-b22c-4dc5-95e6-0ea2d90ac756/resumeicon.png'></img>
    </a> */}
        <br />
        <br />
        <a className="email" href="mailto:tim.ninan@gmail.com" target="_blank">
          <u>tim.ninan.atx@gmail.com</u>
        </a>
      </div>
    </Segment>

    <Segment
      inverted
      vertical
      style={{ padding: '5em 0em', marginTop: '-14px' }}
    >
      <Container>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: 'Bungee',
          }}
        >
          &copy; 2019 Tim Ninan
        </h1>
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              fontSize: '15px',
              marginLeft: '25px',
              fontFamily: 'Titillium Web',
            }}
          >
            Created using React.js and lots of
          </span>
          <span style={{ color: 'black' }}> ...</span>
          <Icon name="heart" size="large" color="red" />
        </div>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default Homepage;
