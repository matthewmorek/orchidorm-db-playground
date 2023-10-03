import { change } from "../dbScript";

change(async (db) => {
  await db.createTable("location_event_type", (t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    locationId: t.uuid().foreignKey("location", "id"),
    eventTypeId: t.uuid().foreignKey("event_type", "id"),
    ...t.timestamps,
  }));
});
