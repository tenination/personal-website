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
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
//background
import keyboard from './keyboard.jpg'
// frontend
import reactLogo from './reactLogo.png';
import reduxLogo  from './reduxLogo.png';
import angularLogo from './angularLogo.png';
import backboneLogo from './backboneLogo.png';
import jqueryLogo from './jqueryLogo.png';
import htmlLogo from './htmlLogo.png';
import cssLogo from './cssLogo.png';
import javascriptLogo from './javascriptLogo.png';
// backend
import nodeLogo from './nodeLogo.png';
import mongodbLogo from './mongodbLogo.png';
import mysqlLogo from './mysqlLogo.svg';
import expressjsLogo from './expressjsLogo.svg';
import graphQLLogo from './graphQLLogo.png';
import sqliteLogo from './sqliteLogo.png';

// other
import awsLogo from './awsLogo.png';
import herokuLogo from './herokuLogo.svg';
import gitLogo from './gitLogo.png';
import npmLogo from './npmLogo.png';
import mochaLogo from './mochaLogo.svg';
import pythonLogo from './pythonLogo.png';
import cplusplusLogo from './cplusplusLogo.png';
import javaLogo from './javaLogo.png';

import MySong from './MySong.png';
import PantryByte from './PantryByte.png';
import AsteroidTracker from './AsteroidTracker.png';
import MyGoalPosts from './MyGoalPosts.png';

import purple from './purple.jpg';


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Tim Ninan'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content="I'm an Austin based full-stack software engineer focused on crafting clean & user‑friendly experiences."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        background: 'rgba(0, 0, 0, 0.3)'
      }}
    />
  </Container>
)

class DesktopContainer extends Component {

  render() {
    const { children } = this.props
    return (
      <Responsive {...Responsive.onlyComputer}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em', backgroundImage:`url(${keyboard})`, backgroundSize:'cover'  }} vertical>
            <HomepageHeading />
          </Segment>
        {children}
      </Responsive>
    )
  }
}

class TabletContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <Responsive {...Responsive.onlyMobile}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em', backgroundImage:`url(${keyboard})`, backgroundSize:'cover'  }} vertical>
              <HomepageHeading mobile />
            </Segment>
            {children}
      </Responsive>
    )
  }
}


class MobileContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <Responsive {...Responsive.onlyTablet}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em', backgroundImage:`url(${keyboard})`, backgroundSize:'cover'  }} vertical>
              <HomepageHeading mobile />
            </Segment>
            {children}
      </Responsive>
    )
  }
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <TabletContainer>{children}</TabletContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

const Homepage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '0em 0em' }}>
    <h1 style={{height: '100px', textAlign: 'center', color:'white', fontSize:'50px', marginTop:'-20px', background:'black'}}>About Me</h1>
     <p style={{padding:'20px 10px', fontSize:'20px'}}>I started programming about 10 years ago when I took Java courses in highschool. I have always had a passion for programming and after a 3+ year career in telecom engineering, I rediscovered this passion. Since then I have been on a quest to code all the time and continually build my skills. I am fortunate to know my purpose in life - building awesome web and mobile based experiences.  </p>
    </Segment>

    <Segment inverted style={{ padding: '8em 0em' }}>
    <h1 style={{textAlign: 'center', color:'white', fontSize:'50px', marginTop:'-70px'}}>Skills</h1>
      <Grid style={{marginTop:'30px'}}>  
      <Grid.Row columns={3}>
        <Grid.Column style={{background: 'white'}}>
        <h1 style={{textAlign: 'center', color: 'black'}}>Front End</h1>
        <Grid.Row>
          <img src={reactLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={reduxLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={angularLogo} style={{height:'100px', width:'100px', padding: '15px', background:'white'}}></img>
          <img src={backboneLogo} style={{height:'130px', width:'100px', padding: '15px'}}></img>
          <img src={jqueryLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={htmlLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={cssLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={javascriptLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
        </Grid.Row>
        </Grid.Column>

        <Grid.Column style={{background: 'white'}}>
        <h1 style={{textAlign: 'center', color: 'black'}}>Back End</h1>
        <Grid.Row>
          <img src={nodeLogo} style={{height:'70px', width:'100px', padding: '15px'}}></img>
          <img src={mongodbLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={mysqlLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={expressjsLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={graphQLLogo} style={{height:'80px', width:'170px', padding: '15px'}}></img>
        </Grid.Row>
        </Grid.Column>

        <Grid.Column style={{background: 'white'}}>
        <h1 style={{textAlign: 'center', color: 'black'}}>Other</h1>
        <Grid.Row>
          <img src={awsLogo} style={{height:'70px', width:'100px', padding: '15px'}}></img>
          <img src={herokuLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={gitLogo} style={{height:'60px', width:'100px', padding: '15px'}}></img>
          <img src={npmLogo} style={{height:'60px', width:'100px', padding: '15px'}}></img>
          <img src={mochaLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={pythonLogo} style={{height:'50px', width:'100px', padding: '15px'}}></img>
          <img src={javaLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
          <img src={cplusplusLogo} style={{height:'100px', width:'90px', padding: '15px'}}></img>
        </Grid.Row>
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <h1 style={{textAlign: 'center', color:'white', fontSize:'50px', marginTop:'-92px'}}>Portfolio</h1>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h2' style={{ fontSize: '2em' }}>MySong</Header>
            <p style={{fontStyle:'italic', fontSize:'30px'}}>A Spotify integrated platform to share your favorite song for the week with people in your life</p>
            <img src={MySong} style={{width:'488px', height:'226px'}}></img>
            <br/>
            <img src={reactLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
            <img src={nodeLogo} style={{height:'100px', width:'150px', padding: '15px'}}></img>
            <img src={mongodbLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
            <br/>
            <a href='https://tranquil-hollows-12097.herokuapp.com' target="_blank" style={{textAlign:'left'}}>See Project</a>
            <br/>
            <a href='https://github.com/TeamCRT/MySong' target="_blank" style={{textAlign:'left'}}>View on Github</a>
          </Grid.Column>

          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>PantryByte</Header>
            <p style={{fontStyle:'italic', fontSize:'30px'}}>An app to help you find recipes based on ingredients in your kitchen</p>
            <img src={PantryByte} style={{width:'488px', height:'226px'}}></img>
            <br/>
            <img src={reactLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
            <img src={nodeLogo} style={{height:'100px', width:'150px', padding: '15px'}}></img>
            <img src={mysqlLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
            <br/>
            <a href='https://github.com/3bit-Inc/byte' target="_blank" style={{textAlign:'left'}}>View on Github</a>
          </Grid.Column>

        </Grid.Row>
          <Grid.Row textAlign='center'>
          
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>Asteroid Tracker</Header>
             <p style={{fontStyle:'italic', fontSize:'30px'}}>Stay one step ahead of the asteroids closest to earth</p>
            <img src={AsteroidTracker} style={{width:'488px', height:'226px'}}></img>
            <br/>
            <img src={angularLogo} style={{height:'100px', width:'100px', padding: '15px'}}></img>
            <img src={nodeLogo} style={{height:'100px', width:'150px', padding: '15px'}}></img>
            <br/>
            <a href='https://asteroidtracker.herokuapp.com' target="_blank" style={{textAlign:'left'}}>See Project</a>
            <br/>
            <a href='https://github.com/tenination/asteroid-tracker' target="_blank" style={{textAlign:'left'}}>View on Github</a>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em 0em' }}>
    <h1 style={{height: '100px', textAlign: 'center', color:'white', fontSize:'50px', marginTop:'-20px', background:'black'}}>Blog</h1>
     <p style={{padding:'20px 10px', fontSize:'20px', textAlign:'center'}}>Coming Soon!</p>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
          <h1 style={{textAlign:'center', fontSize:'20px'}}>&copy; 2018 Tim Ninan</h1>
          <div style={{textAlign:'center'}}>
          <span style={{fontSize:'15px', marginLeft:'25px'}}>Created using React.js and lots of</span>
          <span style={{color:'black'}}> ...</span>
          <Icon name='heart' size='large' color='red' />
          </div>
      </Container>
    </Segment>

  </ResponsiveContainer>
)
export default Homepage