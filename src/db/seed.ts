import { db } from "./db";

export const seed = async () => {
  await db.region.create({
    name: "test",
    title: "test",
  });
  // await db.region.insertMany(regions);

  await db.$close();
};
