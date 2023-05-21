"use client";

import React, { useState } from "react";
import { mdiMinus, mdiPlus } from "@mdi/js";
import Link from "next/link";
import { getButtonColor } from "../lib/colors";
import BaseIcon from "../components/BaseIcon";
import AsideMenuList from "./AsideMenuList";
import { MenuAsideItem } from "../interfaces";

type Props = {
  item: MenuAsideItem;
  isDropdownList?: boolean;
};

const AsideMenuItem = ({ item, isDropdownList = false }: Props) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeClassAddon = "font-bold text-white";

  const asideMenuItemInnerContents = (
    <>
      {item.icon && (
        <BaseIcon
          path={item.icon}
          className={`flex-none ${activeClassAddon}`}
          w="w-16"
          size="18"
        />
      )}
      <span
        className={`grow text-ellipsis line-clamp-1 ${
          item.menu ? "" : "pr-12"
        } ${activeClassAddon}`}
      >
        {item.label}
      </span>
      {item.menu && (
        <BaseIcon
          path={isDropdownActive ? mdiMinus : mdiPlus}
          className={`flex-none ${activeClassAddon}`}
          w="w-12"
        />
      )}
    </>
  );

  const componentClass = [
    "flex cursor-pointer",
    isDropdownList ? "py-3 px-6 text-sm" : "py-3",
    item.color
      ? getButtonColor(item.color, false, true)
      : `text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white`,
  ].join(" ");

  return (
    <li>
      {item.href && (
        <Link href={item.href} target={item.target} className={componentClass}>
          {asideMenuItemInnerContents}
        </Link>
      )}
      {!item.href && (
        <div
          className={componentClass}
          onClick={() => setIsDropdownActive(!isDropdownActive)}
        >
          {asideMenuItemInnerContents}
        </div>
      )}
      {item.menu && (
        <AsideMenuList
          menu={item.menu}
          className={`"bg-gray-700/50" ${
            isDropdownActive ? "block dark:bg-slate-800/50" : "hidden"
          }`}
          isDropdownList
        />
      )}
    </li>
  );
};

export default AsideMenuItem;
