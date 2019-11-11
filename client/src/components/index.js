import React from "react";
// import { Link } from "react-router-dom";
import RecipeCards from './RecipeCards'
import Landing from './Landing'
import RecipeCards2 from './RecipeCards2'
import NavigationBar from './NavigationBar'
import Test from './Test'
import TopBar from './TopBar'

//cards
import BlueberryCrumbCake from './Desserts/BlueberryCrumbCake'



//bootstrap / react router
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


//Functional Component 
const MainPage = () => {
  return (
    <div>
      {/* <Link to="/users">Show List of Users</Link> */}
      {/* <Link to="/test">Show Test Component</Link> */}
      {/* <Link to="/recipecards">Show Cards</Link> */}


      <TopBar />
      <NavigationBar />
      <Landing />

      <Switch>
        <Route path="/recipecards" component={RecipeCards} />

      </Switch>



      {/* <RecipeCards /> */}

      <div className="test">
        <div>
          {/* <div className="dessertRow"> */}
          {/* <h1>Desserts</h1> */}
          {/* </div> */}
          <div className="flexRow">
            <Card className="card">
              <CardImg top width="100%" src="https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/76781371_101039028025425_1472592750762262528_n.jpg?_nc_cat=111&_nc_oc=AQkh3LCvHWk8N-VQbTPxr5vvnLXKMbSTXA34gMjvIKJgX0ad1TgqASDqchONR8zWsOGoCl_SNhDoE1sKEeKFsEIF&_nc_ht=scontent.fzty1-1.fna&oh=75bce418c18fc26d32f27ea91615179f&oe=5E55537C" alt="Card image cap" />
              <CardBody>
                <CardTitle>Blueberry Crumb Cake</CardTitle>
                <CardSubtitle className="cookTime">1 hr</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                {/* <Button>Check It Out</Button> */}
                <Link to="/BlueBerryCrumbCake">Check It Out</Link>



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

      </div>



      {/* <RecipeCards2 /> */}

      <div>
        <div className="centerRow">
          <div className="flexRow">
            <Card className="card">
              <CardImg top width="100%" src="https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/74483659_101174771345184_5297334696345075712_n.jpg?_nc_cat=110&_nc_oc=AQmk_JiH1BIXl2yS1vUYgrWl8mZVsMpcY1wNoLHpeykMjPkJqVRA7T4SAmcAyQVYIskW_n8BrVzNYufcBjNDE8tR&_nc_ht=scontent.fzty1-1.fna&oh=a7899d6b4a503906d0d30299b607712c&oe=5E64561B" alt="Card image cap" />
              <CardBody>
                <CardTitle>Italian Sub Pizza</CardTitle>
                <CardSubtitle className="cookTime">1 hr</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Check It Out</Button>
              </CardBody>
            </Card>

            <Card className="card">
              <CardImg top width="100%" src="https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/74498759_101174544678540_6186691297995128832_n.jpg?_nc_cat=108&_nc_oc=AQlhwRuXCd58P1J2Rc23_hH2AQ2nv7BasA0hZTqp2u42cy8GgmblWimIPYcNVsN9_sCw2lPTk3N0oZGI5YupQvkv&_nc_ht=scontent.fzty1-1.fna&oh=d142cdb1db6e1092a9e4f56e7150d29d&oe=5E45BEDE" alt="Card image cap" />
              <CardBody>
                <CardTitle>Caprese Bun</CardTitle>
                <CardSubtitle className="cookTime">1 hr</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Check It Out</Button>
              </CardBody>
            </Card>

            <Card className="card">
              <CardImg top width="100%" src="https://scontent.fzty1-1.fna.fbcdn.net/v/t1.0-9/74468119_101174928011835_6873645147754594304_n.jpg?_nc_cat=104&_nc_oc=AQlxBpIio9jwqCZMIsSdPh-J-OJS9ZjZNXDi941p2Cxs-3O54YWu2XDWhVUIHw6SCnGJnQqTxwmtJewz69qOqo68&_nc_ht=scontent.fzty1-1.fna&oh=920ad941740c3f555d1cf2d94f4debd6&oe=5E4BB1F8" alt="Card image cap" />
              <CardBody>
                <CardTitle>Panzanella Salad</CardTitle>
                <CardSubtitle className="cookTime">1 hr</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Check It Out</Button>
              </CardBody>
            </Card>
          </div>

        </div>

      </div>


    </div >
  );
};

export default MainPage;