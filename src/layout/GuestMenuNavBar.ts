import {
  mdiAccountCircle,
  mdiLogin,
  mdiAccountEdit,
  mdiHomeCircle,
} from "@mdi/js";
import { MenuNavBarItem } from "../interfaces";

const GuestMenuNavBar: MenuNavBarItem[] = [
  {
    icon: mdiHomeCircle,
    label: "Home",
    isDesktopNoLabel: true,
    href: "/",
  },
  {
    icon: mdiAccountCircle,
    label: "Account",
    menu: [
      {
        icon: mdiLogin,
        label: "Log In",
        href: "/api/auth/signin",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiAccountEdit,
        label: "Sign Up",
        href: "/sign_up",
      },
    ],
  },
];

export default GuestMenuNavBar;
