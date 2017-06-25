import React, { Component } from 'react';
import './App.css';

const PublicImg = ({ alt, path }) => {
  const imgPath = process.env.NODE_ENV !== 'production'
    ? path
    : `${process.env.PUBLIC_URL}/img/${path}`;

  return (
    <img alt={alt} src={imgPath} />
  )
}

const App = () => (
  <div className="App">
    <div className="App-header">
      <h1>Just Bring Coffee</h1>
    </div>

    <h1 className="App-intro">
      Hey, I'm Klaus Chamberlain
    </h1>

    <p>
      I am starting a new business. Have you ever wished someone could just bring you Coffee? If so, than Just Bring Coffee is the place for you. we will deliver coffee from a wide range of shops, to the doorstep of anyone
      in uptown westerville, OH. soon, we will update this site and you will be able to use a simple SMS ( a certain number
      that a bot willl answer) to get coffee at your doorstep.
      so get ready for someone bring, you <a href="https://goo.gl/4HdJRF">Coffee!!</a>
    </p>

    <PublicImg alt="coffee_1" path="coffee_1.jpg" />
    <PublicImg alt="coffee_2" path="coffee_2.jpg" />
  </div>
);

export default App;
