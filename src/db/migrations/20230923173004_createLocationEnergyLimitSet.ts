import { change } from "../dbScript";

change(async (db) => {
  await db.createTable("location_energy_limit_set", (t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    pistol: t.decimal(),
    auto: t.decimal().nullable(),
    support: t.decimal().nullable(),
    semiAutoDmr: t.decimal().nullable(),
    boltAction: t.decimal().nullable(),
    notes: t.varchar().nullable(),
    ...t.timestamps,
  }));
});
