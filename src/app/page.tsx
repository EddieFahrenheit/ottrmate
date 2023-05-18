import {
  mdiHomeAssistant,
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartPie,
  mdiGithub,
  mdiMonitorCellphone,
  mdiReload,
} from "@mdi/js";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton";

export default function Home() {
  return (
    <section className={`p-6 xl:max-w-6xl xl:mx-auto`}>
      <SectionTitleLineWithButton
        icon={mdiHomeAssistant}
        title="Ottrmate"
        main
      ></SectionTitleLineWithButton>
    </section>
  );
}
