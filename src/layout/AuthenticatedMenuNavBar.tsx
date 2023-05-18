import {
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiHomeCircle,
} from "@mdi/js";
import { MenuNavBarItem } from "../interfaces";

const AuthenticatedMenuNavBar: MenuNavBarItem[] = [
  {
    icon: mdiHomeCircle,
    label: "Home",
    isDesktopNoLabel: true,
    href: "/",
  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Profile",
      },
      {
        icon: mdiCogOutline,
        label: "Settings",
      },
      {
        icon: mdiEmail,
        label: "Messages",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiLogout,
        label: "Log Out",
        isLogout: true,
      },
    ],
  },
];

export default AuthenticatedMenuNavBar;
