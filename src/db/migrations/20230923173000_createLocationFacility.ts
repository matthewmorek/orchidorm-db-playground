import { change } from "../dbScript";

change(async (db) => {
  await db.createTable("location_facility", (t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    locationId: t.uuid().foreignKey("location", "id"),
    facilityId: t.uuid().foreignKey("facility", "id"),
    ...t.timestamps,
  }));
});
