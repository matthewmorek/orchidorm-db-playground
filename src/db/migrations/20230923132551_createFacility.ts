import { change } from "../dbScript";

change(async (db) => {
  await db.createTable("facility", (t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    name: t.varchar().unique(),
    title: t.varchar(),
    description: t.varchar().nullable().default(null),
    ...t.timestamps,
  }));
});
