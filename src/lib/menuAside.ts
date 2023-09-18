import { mdiAccountCircle, mdiGithub, mdiViewList } from "@mdi/js";
import { MenuAsideItem } from "../interfaces";

const menuAside: MenuAsideItem[] = [
  {
    href: "/text_to_art",
    icon: mdiAccountCircle,
    label: "Text To Art",
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
