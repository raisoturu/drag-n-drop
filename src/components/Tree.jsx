import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css";
import FileExplorerTheme from "react-sortable-tree-theme-minimal";
import Dropdown from "./Dropdown";
export class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [
        {
          id: "1",
          title: "Chicken",
          subtitle: "Settings, behavior, etc.",
          count: 10,
          children: [
            {
              id: "2",
              title: "Egg",
              subtitle: "Settings, behavior, etc.",
              children: [
                {
                  id: "3",
                  title: "Child",
                },
              ],
            },
          ],
        },
      ],
    };
  }
  render() {
    const theme = {
      ...FileExplorerTheme,
    };
    return (
      <div className="tree">
        {/* {console.log(theme)} */}
        <SortableTree
          treeData={this.state.treeData}
          onChange={(treeData) => this.setState({ treeData })}
          theme={theme}
          generateNodeProps={(rowInfo) => ({
            buttons: [<Dropdown data={rowInfo} />],
          })}
        />
      </div>
    );
  }
}

export default Tree;
