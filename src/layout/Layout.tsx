"use client";

import { ReactNode, useState, useEffect } from "react";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { Session } from "next-auth";

import NavBarItemPlain from "./NavBarItemPlain";
import BaseIcon from "../components/BaseIcon";
import NavBar from "./NavBar";
import menuAside from "../lib/menuAside";
import AsideMenu from "./AsideMenu";

import SearchBar from "./SearchBar";
import GuestMenuNavBar from "./GuestMenuNavBar";
import AuthenticatedMenuNavBar from "./AuthenticatedMenuNavBar";

interface LayoutProps {
  children: ReactNode;
  session?: Session;
}

export default function Layout({ children, session }: LayoutProps) {
  const layoutAsidePadding = "xl:pl-60";
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);
  const [isAsideLgActive, setIsAsideLgActive] = useState(false);

  const NavBarMenuInUse = session ? AuthenticatedMenuNavBar : GuestMenuNavBar;

  return (
    <div
      className={`${layoutAsidePadding} ${
        isAsideMobileExpanded ? "ml-60 lg:ml-0" : ""
      } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
    >
      <NavBar
        menu={NavBarMenuInUse}
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? "ml-60 lg:ml-0" : ""
        }`}
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
        >
          <BaseIcon
            path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger}
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          onClick={() => setIsAsideLgActive(true)}
        >
          <BaseIcon path={mdiMenu} size="24" />
        </NavBarItemPlain>
        {session ? <SearchBar session={session} /> : <SearchBar />}
      </NavBar>
      <AsideMenu
        isAsideMobileExpanded={isAsideMobileExpanded}
        isAsideLgActive={isAsideLgActive}
        menu={menuAside}
        onAsideLgClose={() => setIsAsideLgActive(false)}
      />
      {children}
    </div>
  );
}
