import { db } from "./db";

export const seed = async () => {
  await db.facility.create({
    name: "test",
    title: "test",
  });
  // await db.region.insertMany(regions);
  // await db.eventType.insertMany(eventTypes);
  // await db.locationType.insertMany(locationTypes);

  await db.$close();
};
