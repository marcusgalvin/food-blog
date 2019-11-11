import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FittedImage } from 'react-fitted-image'


// var image = "https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/75199833_101038734692121_8139194159585034240_n.jpg?_nc_cat=110&_nc_oc=AQmSS18BDSoRADw6ZsZEnaLsYQKQYwoAbIT2T-saf8CTro7IG6mL3RQtlzkSTsbB3UJkNH4YkKUYRCeIoqjWyTpg&_nc_ht=scontent.fzty1-1.fna&oh=1247d7010895d3107d5c5382e0679a27&oe=5E431AA9"

const Landing = (props) => {
  return (
    <div className="test">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Apple Cinnomon Crumb Cake.</h1>
          <p>& so easy to make.</p>
          <button>Hire me</button>
        </div>
      </div>

    </div>
  );
};

export default Landing;

