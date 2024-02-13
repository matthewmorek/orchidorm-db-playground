import { db } from "@/db/db";

export async function getRegionByName(name: string) {
  const result = await db.region.findBy({ name: name });
  return result;
}
