import { BaseTable } from "./BaseTable";
import { LocationTable } from "./Location";
import { EventTypeTable } from "./EventType";

export class LocationEventTypeTable extends BaseTable {
  readonly table = "location_event_type";
  columns = this.setColumns((t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    locationId: t.uuid().foreignKey(() => LocationTable, "id"),
    eventTypeId: t.uuid().foreignKey(() => EventTypeTable, "id"),
  }));

  relations = {
    location: this.belongsTo(() => LocationTable, {
      references: ["id"],
      columns: ["locationId"],
    }),
    eventType: this.belongsTo(() => EventTypeTable, {
      references: ["id"],
      columns: ["eventTypeId"],
    }),
  };
}
