import { BaseTable } from "./BaseTable";
import { LocationTable } from "./Location";

export class LocationTypeTable extends BaseTable {
  readonly table = "location_type";
  columns = this.setColumns((t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    name: t.varchar().unique(),
    title: t.varchar(),
    description: t.varchar().nullable(),
  }));

  relations = {
    locations: this.hasMany(() => LocationTable, {
      required: false,
      columns: ["id"],
      references: ["locationTypeId"],
    }),
  };
}
