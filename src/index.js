import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './Logo/Logo';
import Heading from './Heading/Heading';
import Description from './Description/Description';
import MusicSocialLinks from './MusicSocialLinks/MusicSocialLinks';
import Subscription from './Subscription/Subscription';

ReactDOM.render(
  <React.StrictMode>
    <main className="mobile">
      <Logo></Logo>
      <Heading></Heading>
      <Description></Description>
      <MusicSocialLinks></MusicSocialLinks>
      <Subscription></Subscription>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

