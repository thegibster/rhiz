import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Menu, Image, Dropdown } from "semantic-ui-react";
import rhizImg from '../../assets/images/rhiz.png';

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderLogin() {
    console.log("this.props in HEADERRRRR", this.props);
    if (!this.props.auth) {
      return (
        <div>
          <Menu.Item
            name="Sign Up"
            onClick={this.handleItemClick}
            href="register"
          />
        </div>
      );
    } else {
      return <div>
          <Dropdown item text={this.props.auth.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/settings">Settings</Dropdown.Item>
              <Dropdown.Item href="/auth/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>;
    }
  }

  render() {
    return <Menu secondary>
        <Menu.Item name="home" href="/">
          <Image className="rhiz-header-logo" src={rhizImg} />
        </Menu.Item>
        <Menu.Item name="pricing" href="/pricing" />
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
