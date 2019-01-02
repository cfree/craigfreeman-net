import React from 'react'
import { withPrefix } from 'gatsby'

import { Page, SEO, Main } from '../../Layout'
import { Masthead, Button } from '../../Common'

const Resume = () => (
  <Page>
    <SEO title="Resume" keywords={[`gatsby`, `application`, `react`]} />
    <Masthead title="Resume" background="notes" />
    <Main>
      <p>
        <Button
          secondary={true}
          href={withPrefix('/pdf/FreemanResume-1022v1.pdf')}
        >
          Download
        </Button>
      </p>

      <h3>Profile</h3>
      <p>
        Denver-based front-end engineer providing a seamless bridge between
        design and the back-end. Experience with architecting and developing
        large-scale JavaScript applications for enterprise companies.
        Specialties include full-stack JavaScript, responsive web design, mobile
        optimization, and scalable, performant CSS.
      </p>

      <h3>Education</h3>
      <p>
        <a
          title="Rochester Institute of Technology"
          href="https://rit.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rochester Institute of Technology
        </a>
        , Rochester NY
        <br />
        Bachelor of Science in Information Technology 2009
        <br />
        Concentrations in Web Development, Graphic Media and Psychology
      </p>

      <h3>Community</h3>
      <p>
        Organizer of the{' '}
        <a
          href="https://meetup.com/denver-code-club"
          target="_blank"
          rel="noopener noreferrer"
        >
          Denver Code Club
        </a>
        , a semi-monthly&nbsp;meetup dedicated to providing space for web
        developers to further their professional education
      </p>

      <h3>Technical Skills</h3>
      <p>
        <strong>Programming Languages:</strong> JavaScript, CSS/Sass/cssnext,
        HTML, AJAX, PHP, MySQL, JSON, XML, bash
        <br />
        <strong>Frameworks/Libraries:</strong> React, Redux, Node.js, Angular,
        AngularJS, Webpack, Gulp.js, Gatsby, Next.js, jQuery, WordPress
        <br />
        <strong>Software:</strong> Adobe Creative Suite, iTerm 2/Terminal,
        Microsoft Office, Adobe Acrobat, Visual Studio Code/Webstorm/Sublime
        Text 3<br />
        <strong>Operating Systems:</strong> Linux, Mac OS X and iOS, Microsoft
        Windows
        <br />
        <strong>Other</strong>: Git, Jira/Bitbucket/Confluence Atlassian
        products, Rally products, Agile/SAFe workflows, responsive web design
      </p>

      <h3>Personal Projects</h3>
      <p>
        Developed a WordPress plugin,{' '}
        <a
          href="https://github.com/cfree/wp-karten"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karten
        </a>
        , to display geo-tagged Instagram photos on a Google Maps map in
        page/post content or within a theme, leveraging WordPress best
        practices, PHP and JavaScript OOP principles, and AJAX.
      </p>

      <p>
        Planned, constructed and iterated upon a{' '}
        <a
          href="https://github.com/cfree/rolodex"
          target="_blank"
          rel="noopener noreferrer"
        >
          contacts management single-page application
        </a>
        &nbsp;and custom REST API using AngularJS, MongoDB, Node.js, and
        Express.js.
      </p>

      <p>
        Created a{' '}
        <a
          href="https://github.com/cfree/pediwheel"
          target="_blank"
          rel="noopener noreferrer"
        >
          pediatric emergency medical reference for paramedics
        </a>{' '}
        as a mobile web application using PHP, JavaScript, XML, AJAX, CSS3
        transforms and animations, HTML5 client-side database, and HTML5 offline
        detection
      </p>

      <h3>Experience</h3>
      <p>
        <strong>
          <a href="http://kenzan.com" target="_blank" rel="noopener noreferrer">
            Kenzan
          </a>
        </strong>
        , Denver&nbsp;CO
        <br />
        Front-End Technical Architect (May 2018 – present)
        <ul>
          <li>
            Audited the UI of a high-profile internal application, resulting in
            dozens of users stories improving user experience, UI performance,
            documentation, development workflow, code quality, and developer
            experience. Provided training and coaching for junior developers
            through PR reviews and training sessions
          </li>
          <li>
            Research and development with emerging technologies and frameworks
          </li>
          <li>Manager of one direct report</li>
          <li>Create LOE documents for potential new business</li>
          <li class="li1">
            <span class="s2">
              Research, establish, document, and maintain company coding best
              practices, development organization, and workflow standards
            </span>
          </li>
          <li>Interview and review code samples of potential new hires</li>
        </ul>
      </p>

      <p>
        <strong>
          <a href="http://kenzan.com" target="_blank" rel="noopener noreferrer">
            Kenzan
          </a>
        </strong>
        , Denver&nbsp;CO
        <br />
        Senior Front-End&nbsp;Developer (January 2016 – May 2018)
        <ul>
          <li>
            Participated in a successful digital transformation of a client’s
            product offerings to a microservices environment, which included
            architecture reviews, JavaScript, React.js, Redux, and Node
            training, developer coaching, and high-performance team augmentation
            using Scaled Agile Framework (SAFe)
          </li>
          <li class="li1">
            <span class="s2">
              Used HTML5, CSS3/cssnext, React.js, Redux, JavaScript, Git,
              Webpack, and REST APIs to develop complex, responsive, large-scale
              web applications
            </span>
          </li>
          <li class="li1">
            <span class="s2">
              Delegated tasks to a full-stack team of to six; provided training
              and coaching for junior developers
            </span>
          </li>
          <li class="li1">
            <span class="s2">
              Performed PCI audits on front-end pull requests and add bug fixes
              to features on a large-scale, micro-UI
              billing&nbsp;interface&nbsp;project using AngularJS, LESS, HTML5,
              Git, and Gulp/Grunt
            </span>
          </li>
          <li class="li1">
            <span class="s2">
              Led a front-end team of five to create new features, make updates
              to existing features using AngularJS, and consume JSON
              microservices in an Agile environment. Responsible for the
              front-end architecture, pull request reviews, post-merge
              deployments, and releases
            </span>
          </li>
          <li class="li1">
            <span class="s2">
              Wrote&nbsp;JavaScript/AngularJS, HTML5, and CSS3/Sass&nbsp;and
              performed unit testing for&nbsp;new features on a successful
              streaming video rebranding project
            </span>
          </li>
          <li class="li1">
            <span class="s2">
              Researched, established, documented, and maintained company coding
              best practices, development organization, and workflow standards
            </span>
          </li>
          <li>Interviewed and reviewed code samples of potential new hires</li>
        </ul>
      </p>

      <p>
        <strong>
          <a
            href="http://voltagead.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voltage Advertising
          </a>
        </strong>
        , Louisville CO
        <br />
        Senior Developer, Team Lead (April 2015 – January 2016)
        <ul>
          <li>
            Used HTML5, CSS3, Sass, jQuery, PHP, MySQL, Git, Gulp, Grunt, and
            REST/SOAP APIs to develop complex responsive WordPress themes and
            plugins
          </li>
          <li>
            Used AngularJS for both single-page applications and adding enhanced
            functionality to PHP views
          </li>
          <li>
            Delegated projects to four team members and provide
            mentoring&nbsp;for junior developers
          </li>
          <li>
            Interfaced with clients and vendors and managed expectations
            during&nbsp;development. Was instrumental in the development and
            launch of several large projects, leading to overwhelming client
            satisfaction and the establishment/continuation of long-term
            business partnerships
          </li>
          <li>
            Researched, established, documented and maintained company coding
            best practices, development organization, and workflow standards
          </li>
          <li>
            Created a build script using Gulp.js task runner and a boilerplate
            theme for internal use
          </li>
          <li>Interviewed and reviewed code samples of potential new hires</li>
        </ul>
      </p>

      <p>
        <strong>
          <a
            title="Crowd Favorite"
            href="http://crowdfavorite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crowd Favorite
          </a>
        </strong>
        , Denver CO
        <br />
        Developer &nbsp;(December 2012 – March 2015)
        <ul>
          <li>
            Developed desktop and responsive WordPress themes using HTML5, CSS3,
            Sass, jQuery, PHP, MySQL and Git
          </li>
          <li>Developed projects leveraging AngularJS and MVC frameworks</li>
          <li>
            Documented development plans, participated in post-launch
            evaluations with both in-house and remote teams
          </li>
          <li>Developed custom plugins to meet client requirements</li>
          <li>
            Customized and refactored company plugins and theme template engine
          </li>
          <li>
            Created a build script using Gulp.js and Node.js for internal use
          </li>
          <li>
            Researched and maintained company CSS, JavaScript best practices
          </li>
        </ul>
      </p>

      <p>
        <strong>
          <a href="#rosemont-media">Rosemont Media</a>
        </strong>
        , San Diego CA
        <br />
        Web Developer (October 2010 – November 2012)
        <ul>
          <li>
            Greatly increased the attractiveness of our niche offering by being
            first to market mobile themes. Optimized mobile product through
            iterative testing and by using responsive design techniques
          </li>
          <li>
            Developed desktop WordPress themes for doctors using HTML, CSS,
            jQuery, PHP, MySQL. Improved WordPress theme templates for minimal
            build time
          </li>
          <li>
            Provided and customized jQuery and WordPress plugins to suit client
            needs
          </li>
          <li>
            Integrated Google Maps into CodeIgniter-backed sales CMS utilizing
            jQuery, JSON
          </li>
          <li>
            Planned, deployed, and maintained a Mac OS X Server for team web
            development and company-wide file server
          </li>
          <li>
            Trained other developers in desktop and mobile theme development
          </li>
        </ul>
      </p>

      <p>
        <strong>
          <a
            href="http://www.1011i.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teneleven Interactive
          </a>
        </strong>
        , San Diego CA
        <br />
        Web Developer (March 2010)
        <ul>
          <li>Revised current client sites (PHP/Symfony, Blueprint CSS)</li>
        </ul>
      </p>

      <p>
        <strong>LogicalSolutions.net</strong>, Rochester NY
        <br />
        Developer (August 2008 – September 2008)
        <ul>
          <li>Revised current client sites (ASP, ASP.NET, PHP, ColdFusion)</li>
        </ul>
      </p>

      <p>
        <strong>
          <a
            href="http://www.brandlogic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brand Logic
          </a>
        </strong>
        , Rochester NY
        <br />
        Developer (March 2006 – August 2006) Cooperative Education
        <ul>
          <li>
            Developed a C#/ASP.NET application to complement a University
            client’s large-scale fundraising campaign, displaying contributor
            names and amounts dynamically using AJAX
          </li>
          <li>
            Performed heuristic evaluations and documented information
            architectures of existing sites to reevaluate the effectiveness of
            current user interfaces
          </li>
        </ul>
      </p>
    </Main>
  </Page>
)

export default Resume
