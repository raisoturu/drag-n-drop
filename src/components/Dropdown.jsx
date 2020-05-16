import React, { Component } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import "@material/react-list/dist/list.css";
import "@material/react-menu-surface/dist/menu-surface.css";
import "@material/react-menu/dist/menu.css";
import Menu, {
  MenuList,
  MenuListItem,
  MenuListItemText,
} from "@material/react-menu";
export class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      coordinates: undefined,
    };
  }

  rightClickCallback = (e) => {
    this.setState({
      open: !this.state.open,
      coordinates: { x: e.clientX, y: e.clientY },
    });
    e.preventDefault();
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    const menuOptions = [
      "Edit Subtopic",
      "Add New Subtopic",
      "Add Child Subtopic",
      "Add Obligation",
      "Save as Draft",
      "Publish",
    ];
    const { node } = this.props.data;
    return (
      <React.Fragment>
        {node.count && <span className="counter-badge">{node.count}</span>}
        <button
          className="btn-dropdown"
          style={{
            verticalAlign: "middle",
          }}
          onClick={(e) => this.rightClickCallback(e)}
        >
          <GoKebabHorizontal size="16" />
        </button>
        <Menu
          open={this.state.open}
          onClose={this.onClose}
          coordinates={this.state.coordinates}
          onSelected={(index, item) => console.log(index, item)}
        >
          <MenuList>
            {menuOptions.map((option, index) => (
              <MenuListItem key={index}>
                <MenuListItemText primaryText={option} />
              </MenuListItem>
            ))}
          </MenuList>
        </Menu>
      </React.Fragment>
    );
  }
}

export default Dropdown;
