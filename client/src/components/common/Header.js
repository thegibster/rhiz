import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Menu } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderLogin() {
    if (!this.props.auth) {
      return (
        <div>
          <Menu.Item
            name="login"
            onClick={this.handleItemClick}
            href="/auth/google"
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
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          {this.renderLogin()}
        </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
