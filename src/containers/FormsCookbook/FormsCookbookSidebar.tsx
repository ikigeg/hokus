import * as React from "react";
import { Route } from "react-router";
import { Sidebar } from "./../Sidebar";
import { SidebarMenu } from "./../Sidebar";
import { samples } from "./samples";

type FormsCookbookSidebarProps = {
  menuIsLocked: boolean;
  onLockMenuClicked: () => void;
  onToggleItemVisibility: () => void;
  hideItems: boolean;
};

type FormsCookbookSidebarState = {};

export class FormsCookbookSidebar extends React.Component<FormsCookbookSidebarProps, FormsCookbookSidebarState> {
  render() {
    return (
      <Route
        render={({ history }) => {
          return this.renderWithRoute(history);
        }}
      />
    );
  }

  renderWithRoute(history: { push: (path: string) => void }) {
    let menu: SidebarMenu = {
      title: "Forms Cookbook",
      items: samples.map(sample => {
        return {
          active: false,
          label: sample.title,
          onClick: () => {
            history.push("/forms-cookbook/" + sample.key);
          }
        };
      })
    };

    let menuBeta: SidebarMenu = {
      title: "Form Tools",
      items: [
        {
          active: false,
          label: "Form Builder (Beta)",
          onClick: () => {
            history.push("/forms-cookbook/builder/");
          }
        }
      ]
    };

    return <Sidebar {...this.props} menus={[menu, menuBeta]} />;
  }
}
