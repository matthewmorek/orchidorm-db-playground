import { change } from "../dbScript";

change(async (db) => {
  await db.createTable("location_type", (t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    name: t.varchar().unique(),
    title: t.varchar(),
    description: t.varchar().nullable(),
    ...t.timestamps,
  }));
});
