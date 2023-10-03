import { BaseTable } from "./BaseTable";
import { LocationTable } from "./Location";
import { FacilityTable } from "./Facility";

export class LocationFacilityTable extends BaseTable {
  readonly table = "location_facility";
  columns = this.setColumns((t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    locationId: t.uuid().foreignKey(() => LocationTable, "id"),
    facilityId: t.uuid().foreignKey(() => FacilityTable, "id"),
  }));

  relations = {
    location: this.belongsTo(() => LocationTable, {
      references: ["id"],
      columns: ["locationId"],
    }),
    facility: this.belongsTo(() => FacilityTable, {
      references: ["id"],
      columns: ["facilityId"],
    }),
  };
}
