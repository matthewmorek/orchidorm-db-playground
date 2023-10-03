import { change } from "../dbScript";

change(async (db) => {
  await db.createEnum("link_type", [
    "facebook",
    "instagram",
    "twitter",
    "youtube",
    "tiktok",
    "website",
    "other",
  ]);

  await db.createTable("location_link", (t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    locationId: t.uuid(),
    type: t.enum("link_type"),
    url: t.varchar(),
    ...t.timestamps,
  }));
});
