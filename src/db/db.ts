import { orchidORM } from "orchid-orm";
import { config } from "./config";
import { RegionTable } from "./tables/Region";

export const db = orchidORM(config.database, {
  region: RegionTable,
});
