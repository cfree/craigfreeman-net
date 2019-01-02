import React from 'react'
import { withPrefix } from 'gatsby'

import { Page, SEO, Main } from '../../Layout'
import { Masthead, Rule } from '../../Common'

const Talks = () => (
  <Page>
    <SEO title="Talks" keywords={[`gatsby`, `application`, `react`]} />
    <Masthead title="Talks" background="typewriter" />
    <Main>
      <h2>Upcoming</h2>
      <p>None scheduled.</p>

      <h2>Past</h2>
      <p>
        12/13/18 – "Modern Node.js API Development with LoopBack 4" co-presenter
        <br />
        <a
          href="https://www.meetup.com/Denver-Code-Club/events/255458658/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Denver Code Club meetup
        </a>{' '}
        – Denver, CO
        <br />
        <a
          href={withPrefix(
            '/pdf/Modern-Node.js-API-Development-with-LoopBack-4.pdf'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>{' '}
        –{' '}
        <a
          href="https://github.com/denvercodeclub/loopback4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>

      <p>
        <span
          class="embed-youtube"
          style={{ textAlign: 'center', display: 'block' }}
        >
          <iframe
            title="Loopback 4"
            class="youtube-player"
            type="text/html"
            width="1200"
            height="705"
            src="http://www.youtube.com/embed/POtuWwqDB_E?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent"
            allowfullscreen="true"
            style={{ border: 0 }}
          />
        </span>
      </p>

      <Rule />

      <p>
        10/10/18 – "Fail Faster: Adding Circuit Breakers to your APIs"
        <br />
        <a
          href="https://jsi2018.sched.com/event/F76E"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node+JS Interactive conference
        </a>{' '}
        – Vancouver, BC
        <br />
        <a
          href={withPrefix('/pdf/Fail_Faster-Adding_Circuit_Breakers_to_your_APIs.pdf')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>
      </p>

      <p>
        <span
          class="embed-youtube"
          style={{ textAlign: 'center', display: 'block' }}
        >
          <iframe
            title="Fail Faster"
            class="youtube-player"
            type="text/html"
            width="1200"
            height="705"
            src="http://www.youtube.com/embed/_xufvNPLJ24?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent"
            allowfullscreen="true"
            style={{ border: 0 }}
          />
        </span>
      </p>

      <Rule />

      <p>
        12/7/17 – "Progressive Web Apps – Fitter, happier, more-productive UIs"
        co-presenter
        <br />
        <a
          href="https://www.meetup.com/Denver-Code-Club/events/244763622/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Denver Code Club meetup
        </a>{' '}
        – Denver, CO
        <br />
        <a
          href="https://docs.google.com/presentation/d/e/2PACX-1vRWz5Lj0UGJ4CrpijPm0iROR9sLayknCkFCThrpgLAMjDzejF6iQGaE609JpyKtq0a3yCYRq9ERC6RS/pub?start=false&amp;loop=false&amp;delayms=3000&amp;slide=id.g2bf5b242f2_0_346"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>
      </p>

      <p>
        <span
          class="embed-youtube"
          style={{ textAlign: 'center', display: 'block' }}
        >
          <iframe
            title="PWAs"
            class="youtube-player"
            type="text/html"
            width="1200"
            height="705"
            src="http://www.youtube.com/embed/IfDIaVfD8cs?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent"
            allowfullscreen="true"
            style={{ border: 0 }}
          />
        </span>
      </p>

      <Rule />

      <p>
        3/23/17 – "Learn Loopback" co-presenter
        <br />
        <a
          href="https://www.meetup.com/Denver-Code-Club/events/238120194/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Denver Code Club meetup
        </a>{' '}
        – Denver, CO
        <br />
        <a
          href="https://docs.google.com/presentation/d/1IYFhP5ehTZ4wWmZuN9olp-btOds_N6KbmZDlo6M9hfs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>
      </p>

      <Rule />

      <p>
        10/20/16 – "Unit Test Basics and TDD Exercise"
        <br />
        <a
          href="https://www.meetup.com/Denver-Code-Club/events/234831162/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Denver Code Club meetup
        </a>{' '}
        – Denver, CO
        <br />
        <a
          href="https://slides.com/cfree/unit-testing-basics"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>{' '}
        –{' '}
        <a
          href="https://github.com/denvercodeclub/tdd-code-katas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </Main>
  </Page>
)

export default Talks
