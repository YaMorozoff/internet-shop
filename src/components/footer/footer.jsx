import React from "react";
import "./footer.css";
import {Icon,Container,Grid } from "semantic-ui-react";


const Footer = (props) => {
  return (
<div className="footer">
    <Container>

    <Grid relaxed centered columns={4}>
    <Grid.Column textAlign='center'>
     <a href="https://www.instagram.com/scrizal/"><Icon name="instagram" color='green' size='huge'></Icon> </a>
    </Grid.Column>
    <Grid.Column textAlign='center'>
     <a href="https://vk.com/heyded"><Icon name="vk" color='green' size='huge'></Icon> </a>
    </Grid.Column>
    <Grid.Column textAlign='center'>
     <a href="https://web.telegram.org/the_scrizal"><Icon name="telegram" color='green' size='huge'></Icon></a>
    </Grid.Column>
    <Grid.Column textAlign='center'>
      <a href="https://twitter.com/666PODONOCK666"><Icon name="twitter" color='green' size='huge'/></a>
    </Grid.Column>
  </Grid>

    </Container>

</div>
  )
}

export default Footer;
