import React, { useEffect, useState } from "react";
import "./footer.css";
import { Icon, Container, Grid } from "semantic-ui-react";

const Footer = (props) => {
  const [xui, setXui] = useState(
    document.body.scrollHeight - document.body.clientHeight
  );
  // eslint-disable-next-line
  useEffect(() =>
    setXui(document.body.scrollHeight - document.body.clientHeight)
  );
  // console.log(xui);
  // console.log(document.body.clientHeight);
  return (
    <div className={xui ? "footer-block" : "footer-fixed"}>
      <Container>
        <Grid relaxed centered columns={4}>
          <Grid.Column textAlign="center">
            <a href="https://www.instagram.com/scrizal/">
              <Icon name="instagram" color="purple" size="huge" />{" "}
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <a href="https://vk.com/heyded">
              <Icon name="vk" color="purple" size="huge" />{" "}
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <a href="https://web.telegram.org/the_scrizal">
              <Icon name="telegram" color="purple" size="huge" />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <a href="https://twitter.com/666PODONOCK666">
              <Icon name="twitter" color="purple" size="huge" />
            </a>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
