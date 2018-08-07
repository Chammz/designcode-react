import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (

<div>
<div className="Hero">
    <div className="HeroGroup">
      <h1 className="top">Learn to <br />design and code</h1> 
      <h1 className="bottom"> modern apps</h1>
      <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
      <Link to="/page-2/">Watch the video</Link>

      <div className="Logos">
        <img src={require('../images/logo-sketch.png')} width="50" />
        <img src={require('../images/logo-figma.png')} width="50" />
        <img src={require('../images/logo-studio.png')} width="50" />
        <img src={require('../images/logo-framer.png')} width="50" />
        <img src={require('../images/logo-react.png')} width="50" />
        <img src={require('../images/logo-swift.png')} width="50" />
      </div>
    </div>

    <Wave />

</div>

<div className="Cards">
  <h2>12 courses, more coming</h2> 
</div>

<div className="CardGroup">
  <Card
    title="React for designers"
    text="12 sections"
    image={require('../images/wallpaper.jpg')}
  />
  <Card
    title="Design system in Figma"
    text="10 sections"
    image={require('../images/wallpaper.jpg')}
  />
  <Card
    title="Design system in Figma"
    text="10 sections"
    image={require('../images/wallpaper.jpg')}
  />
  <Card
    title="Design system in Figma"
    text="10 sections"
    image={require('../images/wallpaper.jpg')}
  />
  <Card
    title="Design system in Figma"
    text="10 sections"
    image={require('../images/wallpaper.jpg')}
  />
</div>

<Section
  image={require('../images/wallpaper2.jpg')}
  logo={require('../images/logo-react.png')}
  title="React for Designers"
  text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
/>
</div>
)

export default IndexPage
