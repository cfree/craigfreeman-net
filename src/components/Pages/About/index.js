import React from 'react'

import styles from './about.module.scss'
import { Page, SEO, Main } from '../../Layout'
import { Masthead, Rule } from '../../Common'
import { withPrefix } from 'gatsby';

const About = () => (
  <Page>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Masthead title="About" background="mountains" />
    <Main>
      <p>
        <img
          class={styles.photo}
          src={withPrefix('/img/cf-4x3.jpg')}
          alt="Craig Freeman"
          width="300"
          height="200"
        />
        I’m a web developer originally from Western Connecticut and currently
        residing in Denver, Colorado. I’m a former paramedic and firefighter and
        I enjoy outdoor sports, including hiking, camping, backpacking,
        kayaking, snowboarding, boating, and playing softball. Traveling is a
        passion of mine, and I intend to visit all 59 national parks, as well as
        complete the Appalachian Trail and learn how to speak German. I recently
        earned my motorcycle license and have picked up the bass guitar after an
        8-year hiatus. You can find documentation of my adventures at{' '}
        <a href="http://58parks.com/" rel="noopener noreferrer" target="_blank">
          58parks.com
        </a>
        .
      </p>

      <p>
        I am a 2009 graduate of the{' '}
        <a
          href="http://www.rit.edu/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Rochester Institute of Technology
        </a>
        , where I obtained a Bachelor of Science degree in Information
        Technology, with concentrations in Web Development, Graphic Media, and
        Psychology. I’m fascinated by JavaScript and am intent on mastering
        every quirk. I enjoy standards-compliant front-end development and
        full-stack programming in a LAMP-environment. Having backgrounds in both
        information sciences and healthcare, my career goals include finding new
        uses of technology to further the field of medicine. Topics in medical
        informatics and biotechnology are of special interest to me.
      </p>

      <Rule />

      <h3>Awards</h3>
      <p>
        <a
          href="https://www.scouting.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eagle Scout
        </a>
        , 2000
      </p>

      <h3>Community Service</h3>
      <p>
        <a
          href="https://www.nremt.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          NREMT-Paramedic
        </a>
        , Medic, Driver, and Dispatcher Instructor, Board of Directors, IT
        Committee
        <br />–{' '}
        <a
          href="http://chsmobilehealth.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henrietta Ambulance
        </a>
        , 2002-2010
      </p>

      <p>
        EMT-Basic, Medic, Driver, and Dispatcher Trainer, Operations Staff,
        Executive Board
        <br />–{' '}
        <a
          href="https://ambulance.rit.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rochester Institute of Technology Ambulance
        </a>
        , 2001-2006, 2008-2010
      </p>

      <p>
        EMT-Basic, Driver
        <br />–{' '}
        <a
          href="http://brookfieldfire.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brookfield Volunteer Fire Department
        </a>
        , 2003-2005
      </p>

      <p>
        Firefighter, EMT-Basic
        <br />–{' '}
        <a
          href="http://www.henriettafire.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henrietta Fire District
        </a>
        , 2001-2005
      </p>

      <p>
        Firefighter
        <br />– Brookfield Volunteer Fire Department,{' '}
        <a
          href="http://candlewoodfire.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Candlewood Company
        </a>
        , 2000-2005
      </p>

      <Rule />

      <p>
        <a
          href="https://github.com/cfree/craigfreeman-net"
          target="_blank"
          rel="noopener noreferrer"
        >
          This site
        </a>{' '}
        was built for{' '}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{' '}
        using{' '}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React
        </a>
        ,{' '}
        <a
          href="https://sass-lang.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sass
        </a>
        ,{' '}
        <a
          href="https://github.com/css-modules/css-modules"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS Modules
        </a>
        ,{' '}
        <a href="https://typekit.com" target="_blank" rel="noopener noreferrer">
          Typekit
        </a>
        , and a custom{' '}
        <a href="fontastic.me" target="_blank" rel="noopener noreferrer">
          Fontastic
        </a>{' '}
        icon font.
      </p>
    </Main>
  </Page>
)

export default About
