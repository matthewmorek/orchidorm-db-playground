import { BaseTable } from "./BaseTable";
import { LocationFacilityTable } from "./LocationFacility";

export class FacilityTable extends BaseTable {
  readonly table = "facility";
  columns = this.setColumns((t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    name: t.varchar().unique(),
    title: t.varchar(),
    description: t.varchar().nullable().default(null),
  }));

  relations = {
    locationFacilities: this.hasMany(() => LocationFacilityTable, {
      primaryKey: "id",
      foreignKey: "facilityId",
    }),
  };
}
