import { BaseTable } from "./BaseTable";

export class LocationPyroRuleSetTable extends BaseTable {
  readonly table = "location_pyro_rule_set";
  columns = this.setColumns((t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    name: t.varchar(),
    title: t.varchar(),
    description: t.varchar().nullable(),
  }));
}
