import {
  mdiHomeAssistant,
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
} from "@mdi/js";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton";
import CardBoxWidget from "../components/CardBoxWidget";

export default function Home() {
  return (
    <>
      <section className={`p-6 xl:max-w-6xl xl:mx-auto`}>
        <SectionTitleLineWithButton
          icon={mdiHomeAssistant}
          title="Ottrmate"
          main
        ></SectionTitleLineWithButton>
      </section>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          trendLabel="12%"
          trendType="up"
          trendColor="success"
          icon={mdiAccountMultiple}
          iconColor="success"
          number={512}
          label="Clients"
        />
        <CardBoxWidget
          trendLabel="16%"
          trendType="down"
          trendColor="danger"
          icon={mdiCartOutline}
          iconColor="info"
          number={7770}
          numberPrefix="$"
          label="Sales"
        />
        <CardBoxWidget
          trendLabel="Overflow"
          trendType="warning"
          trendColor="warning"
          icon={mdiChartTimelineVariant}
          iconColor="danger"
          number={256}
          numberSuffix="%"
          label="Performance"
        />
      </div>
    </>
  );
}
