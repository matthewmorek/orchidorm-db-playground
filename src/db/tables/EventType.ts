import { BaseTable } from "./BaseTable";
import { LocationEventTypeTable } from "./LocationEventType";

export class EventTypeTable extends BaseTable {
  readonly table = "event_type";
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
    locationEventTypes: this.hasMany(() => LocationEventTypeTable, {
      primaryKey: "id",
      foreignKey: "eventTypeId",
    }),
  };
}
