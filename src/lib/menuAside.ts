import { mdiAccountCircle, mdiGithub, mdiViewList } from "@mdi/js";
import { MenuAsideItem } from "../interfaces";

const menuAside: MenuAsideItem[] = [
  {
    href: "/my_tools",
    icon: mdiAccountCircle,
    label: "My Tools",
  },
  {
    label: "Dropdown",
    icon: mdiViewList,
    menu: [
      {
        label: "Item One",
      },
      {
        label: "Item Two",
      },
    ],
  },
  {
    href: "https://github.com/ottrmate",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank",
  },
];

export default menuAside;
