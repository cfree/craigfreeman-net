import React from 'react'

import styles from './home.module.scss'
import { Page, SEO, Section, Container } from '../../Layout'
import { Button, Card, Intro, Masthead } from '../../Common'

const Home = () => (
  <Page>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Masthead title="Craig Freeman" subtitle="Front-End Engineer" />
    <Intro>
      Hi, I’m Craig Freeman, a front-end engineer and organizer of the{' '}
      <a
        href="https://www.meetup.com/denver-code-club/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        Denver Code Club
      </a>{' '}
      in sunny Colorado. I architect and write scalable, maintainable code to
      create clean, consistent and effective user interfaces by utilizing the
      latest industry trends.
    </Intro>
    <Section dark={true}>
      <Container>
        <Button
          href="https://github.com/cfree"
          target="_blank"
          primary={true}
          ghostOnHover={true}
        >
          GitHub
        </Button>
        <Button to="/resume" primary={true} ghostOnHover={true}>
          Resume
        </Button>
        <Button
          href="https://linkedin.com/in/cfree"
          primary={true}
          ghostOnHover={true}
        >
          LinkedIn
        </Button>
      </Container>
    </Section>
    <div className={styles.cards}>
      <Container small={true}>
        <Card background="o" className={styles.cardArchitecture}>
          <h2>Architecture</h2>
          <p>
            I look at projects or features from a high level, determine
            dependencies and a timeline, and then create a plan. Closer to the
            code, I make organizational decisions and enable teams to deliver
            large-scale user interface applications efficiently.
          </p>
        </Card>
        <Card background="d" right={true} className={styles.cardDesign}>
          <h2>Design</h2>
          <p>
            My graphic media background has instilled in me an eye for design,
            rhythm, and cleanliness. I’m an advocate for consistent themes and I
            appreciate intuitive interfaces, both of which lend themselves to an
            enjoyable user experience. As needed, I am able to make revisions to
            design mockups and wireframes.
          </p>
        </Card>
        <Card background="m" className={styles.cardFrontend}>
          <h2>Front-End</h2>
          <p>
            I create responsive, well-tested, progressively-enhanced web
            applications by adhering to industry standards. My scalable Sass
            styles and advanced JavaScript components marry data with design for
            optimized communication. This positions me as a seamless bridge
            between design and the back-end.
          </p>
        </Card>
        <Card background="c" right={true} className={styles.cardBackend}>
          <h2>Back-End</h2>
          <p>
            Whether creating routes for REST API endpoints, leveraging an ORM,
            or writing GraphQL queries, my experience with Node.js and MVC
            frameworks, such as Laravel, gives me a clear perspective on how to
            best provide data to the front-end.
          </p>
        </Card>
      </Container>
    </div>
  </Page>
)

export default Home
