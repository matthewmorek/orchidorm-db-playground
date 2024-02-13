import { Selectable } from "orchid-orm";
import { BaseTable } from "./BaseTable";

export type Region = Selectable<RegionTable>;

export class RegionTable extends BaseTable {
  readonly table = "region";
  columns = this.setColumns((t) => ({
    id: t.uuid().primaryKey(),
    name: t.varchar().unique(),
    title: t.varchar(),
    description: t.varchar().nullable(),
    createdAt: t.timestamp().default(t.sql`now()`),
    updatedAt: t.timestamp().nullable(),
  }));
}
