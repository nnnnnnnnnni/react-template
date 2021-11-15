import { FC } from "react";
import { Outlet } from "react-router";
import { PageAdminSiderBar } from "../../components";

const SideBar: FC = () => {
	return (
		<>
			<PageAdminSiderBar>
				<ul>
					<li>page1</li>
					<li>page1</li>
					<li>page1</li>
				</ul>
			</PageAdminSiderBar>
			<Outlet></Outlet>
		</>

	)
}

export default SideBar;