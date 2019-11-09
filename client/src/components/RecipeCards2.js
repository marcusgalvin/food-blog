import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const RecipeCards2 = (props) => {
  return (
    <div>
      <div>
        {/* <h2>Dessert</h2> */}
      </div>
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


  );
};

export default RecipeCards2;