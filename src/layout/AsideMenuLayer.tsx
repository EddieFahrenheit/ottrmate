import React from "react";
import { mdiLogout, mdiClose } from "@mdi/js";
import BaseIcon from "../components/BaseIcon";
import AsideMenuItem from "./AsideMenuItem";
import AsideMenuList from "./AsideMenuList";
import { MenuAsideItem } from "../interfaces";

type Props = {
  menu: MenuAsideItem[];
  className?: string;
  onAsideLgCloseClick: () => void;
};

export default function AsideMenuLayer({
  menu,
  className = "",
  ...props
}: Props) {
  const logoutItem: MenuAsideItem = {
    label: "Logout",
    icon: mdiLogout,
    color: "info",
    isLogout: true,
  };

  const handleAsideLgCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onAsideLgCloseClick();
  };

  return (
    <aside
      className={`${className} zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}
    >
      <div
        className={`lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900 bg-gray-800`}
      >
        <div
          className={`flex flex-row h-14 items-center justify-between dark:bg-slate-900 bg-gray-900 text-white`}
        >
          <div className="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
            <b className="font-black">Ottrmate</b>
          </div>
          <button
            className="hidden lg:inline-block xl:hidden p-3"
            onClick={handleAsideLgCloseClick}
          >
            <BaseIcon path={mdiClose} />
          </button>
        </div>
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars-[slate]`}
        >
          <AsideMenuList menu={menu} />
        </div>
        <ul>
          <AsideMenuItem item={logoutItem} />
        </ul>
      </div>
    </aside>
  );
}
