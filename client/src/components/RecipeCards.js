import React from 'react';
import BlueberryCrumbCake from './Desserts/BlueberryCrumbCake'
import Test from './Test'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const RecipeCards = (props) => {
  return (
    <Router>
      <div>
        <div className="dessertRow">
          {/* <h1>Desserts</h1> */}
        </div>
        <div className="flexRow">
          <Card className="card">
            <CardImg top width="100%" src="https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/76781371_101039028025425_1472592750762262528_n.jpg?_nc_cat=111&_nc_oc=AQkh3LCvHWk8N-VQbTPxr5vvnLXKMbSTXA34gMjvIKJgX0ad1TgqASDqchONR8zWsOGoCl_SNhDoE1sKEeKFsEIF&_nc_ht=scontent.fzty1-1.fna&oh=75bce418c18fc26d32f27ea91615179f&oe=5E55537C" alt="Card image cap" />
            <CardBody>
              <CardTitle>Blueberry Crumb Cake</CardTitle>
              <CardSubtitle className="cookTime">1 hr</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

              {/* <Button>Check It Out</Button> */}
              <Link to="/test">Check It Out</Link>



            </CardBody>
          </Card>



          <Card className="card">
            <CardImg top width="100%" src="https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/72474919_101038691358792_5495923676190605312_n.jpg?_nc_cat=111&_nc_oc=AQkWwrlUJUxoLQnBBfWk9-m9JAzpWhbSiLre0iQTLWmi7EBBSVoxsr_y4s0A1XYzVwuOVDkEcm8nvUrtP4pBKrEk&_nc_ht=scontent.fzty1-1.fna&oh=36401df83d9be13153cee2c840190c1d&oe=5E5A0FF6" alt="Card image cap" />
            <CardBody>
              <CardTitle>Raspberry Danish Bun</CardTitle>
              <CardSubtitle className="cookTime">4 hr</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Check It Out</Button>
            </CardBody>
          </Card>

          <Card className="card">
            <CardImg top width="100%" src="https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/75199833_101038734692121_8139194159585034240_n.jpg?_nc_cat=110&_nc_oc=AQnmbG9AG3ph8F3yaWLWlzBnsRpg2O9yB08FoxhsMnAM-MqP3q7-lCfRqvwIkYrmCRkliSkYhov7FUPTUSFp002U&_nc_ht=scontent.fzty1-1.fna&oh=95f3afe99997b9b585751d984c8798f0&oe=5E431AA9" alt="Card image cap" />
            <CardBody>
              <CardTitle>Apple Cinnomon Crumb Cake</CardTitle>
              <CardSubtitle className="cookTime">1 hr</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Check It Out</Button>
            </CardBody>
          </Card>



        </div>

      </div>

      <div>
        <Switch>
          <Route path="Test">
            <Test />
          </Route>
        </Switch>
      </div>



    </Router>
  );
};



export default RecipeCards;