import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartPie,
  mdiChartTimelineVariant,
  mdiGithub,
  mdiMonitorCellphone,
  mdiReload,
} from "@mdi/js";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton";

export default function Home() {
  return (
    <section className={`p-6 xl:max-w-6xl xl:mx-auto`}>
      <SectionTitleLineWithButton
        icon={mdiChartTimelineVariant}
        title="Overview"
        main
      ></SectionTitleLineWithButton>
    </section>
  );
}
