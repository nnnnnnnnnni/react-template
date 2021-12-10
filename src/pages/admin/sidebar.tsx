import { FC } from "react";
import { Outlet, useLocation } from "react-router";
import { PageAdminSiderBar } from "../../components";
import { List, ListItem } from "@chakra-ui/react";

const SideBar: FC = () => {
  return (
    <>
      <PageAdminSiderBar>
        <List>
          <ListItem>page1</ListItem>
          <ListItem>page1</ListItem>
          <ListItem>page1</ListItem>
        </List>
      </PageAdminSiderBar>
      <Outlet></Outlet>
    </>
  );
};

export default SideBar;
