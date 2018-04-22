import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Menu, Image } from "semantic-ui-react";
import rhizImg from '../../assets/images/rhiz.png';

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderLogin() {
    console.log("this.props", this.props);
    if (!this.props.auth) {
      return (
        <div>
          <Menu.Item
            name="login"
            onClick={this.handleItemClick}
            href="register"
          />
        </div>
      );
    } else {
      return (
        <div>
          <Menu.Item
            name="logout"
            onClick={this.handleItemClick}
            href="/auth/logout"
          />
        </div>
      );
    }
  }

  render() {
    return <Menu secondary>
        <Menu.Item name="home" href="/">
          <Image className="rhiz-header-logo" src={rhizImg} />
        </Menu.Item>
        <Menu.Item name="pricing" href="/pricing" />
        <Menu.Item name="profile (Test)" href="/profile" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          {this.renderLogin()}
        </Menu.Menu>
      </Menu>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
