import React from 'react';
import NavigationBar from '../NavigationBar'

var bbcrumb = "https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/76781371_101039028025425_1472592750762262528_n.jpg?_nc_cat=111&_nc_oc=AQkh3LCvHWk8N-VQbTPxr5vvnLXKMbSTXA34gMjvIKJgX0ad1TgqASDqchONR8zWsOGoCl_SNhDoE1sKEeKFsEIF&_nc_ht=scontent.fzty1-1.fna&oh=75bce418c18fc26d32f27ea91615179f&oe=5E55537C"

function BlueberryCrumbCake() {
  return (
    <div>
      <NavigationBar />


      <div className="bluberrycrumbcake-main">
        <img
          className="bbcrumbs"
          src={bbcrumb} alt="crumbcake" />
        <h2>Blueberry Crumb Cake</h2>

      </div>


    </div>
  );
}

export default BlueberryCrumbCake;
