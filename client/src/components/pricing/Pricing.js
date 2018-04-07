import React, { Component } from "react";
import { Container, Divider, Grid } from 'semantic-ui-react'
import ParallaxImage from "../common/ParallaxImage";
import PriceCard from './PriceCards';
import landscape2 from "../../assets/images/landscape2.jpeg";
import "./priceCard.css";

class Pricing extends Component {

  renderPriceCards() {
    return <Container className="price-cards-div">
        <Grid>
          <Grid.Column width={5}>
            <PriceCard title="Part-Time" header="Free!" description={<div className="price-card-descriptions">
                  <p>Business Facebook/InstagramLinkage</p>
                  <Divider />
                  <p>Reviews</p>
                  <Divider />
                  <p>Wrapify Earnings Eligible</p>
                  <Divider />
                </div>} link="https://www.google.com" />
          </Grid.Column>
          <Grid.Column width={5}>
            <PriceCard title="Full-Time" header="$39.00/mo" description={<div className="price-card-descriptions">
                  <p>Business Facebook/InstagramLinkage</p>
                  <Divider />
                  <p>Reviews</p>
                  <Divider />
                  <p>Wrapify Earnings Eligible</p>
                  <Divider />
                  <p>Stripe Connect - Escrow + Payments </p>
                  <Divider />
                  <p>DreamTeam - Business Networking </p>
                  <Divider />
                  <p>Legalzoom Discount</p>
                  <Divider />
                </div>} link="https://www.google.com" />
          </Grid.Column>
          <Grid.Column width={5}>
            <PriceCard title="Big-Time" header="$59.00/mo" description={<div className="price-card-descriptions">
                  <p>Business Facebook/InstagramLinkage</p>
                  <Divider />
                  <p>Reviews</p>
                  <Divider />
                  <p>Wrapify Earnings Eligible</p>
                  <Divider />
                  <p>Stripe Connect - Escrow + Payments </p>
                  <Divider />
                  <p>DreamTeam - Business Networking </p>
                  <Divider />
                  <p>Legalzoom Discount</p>
                  <Divider />
                  <p>Custom URL</p>
                  <Divider />
                  <p>On-Demand Scheduling</p>
                  <Divider />
                  <p>Boosted Search Results</p>
                  <Divider />
                </div>} link="https://www.google.com" />
          </Grid.Column>
        </Grid>
      </Container>;
  }

  render() {
    return (
      <div>
        <ParallaxImage
          height={{ height: "100px" }}
          bgImage={landscape2}
          title="Pricing Options"
          text="Access your needs and goals; we've got you covered! Start your free trial with one of our options below."
          alt="parallaximg"
        />
        {this.renderPriceCards()}
      </div>

    );
  }
}

export default Pricing;
