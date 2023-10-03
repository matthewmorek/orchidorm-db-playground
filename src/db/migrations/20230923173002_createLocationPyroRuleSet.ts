import { change } from "../dbScript";

change(async (db) => {
  await db.createTable("location_pyro_rule_set", (t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    name: t.varchar(),
    title: t.varchar(),
    description: t.varchar().nullable(),
    ...t.timestamps,
  }));
});
