import { getRegionByName } from "./methods";

export async function generateMetadata({ params }) {
  const selectedRegion = params.region || undefined;
  const currentRegion = selectedRegion
    ? await getRegionByName(selectedRegion)
    : undefined;

  const pageTitle = selectedRegion
    ? `Airsoft sites in ${currentRegion.title}, UK`
    : "Airsoft sites in the UK";
  return {
    title: pageTitle,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${pageTitle}`,
        },
      ],
    },
  };
}
