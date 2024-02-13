import { change } from "../dbScript";

change(async (db) => {
  await db.createTable(
    "region",
    { createIfNotExists: true, dropIfExists: true },
    (t) => ({
      id: t.uuid().primaryKey(),
      name: t.varchar().unique(),
      title: t.varchar(),
      description: t.varchar().nullable(),
      createdAt: t.timestamp().default(t.sql`now()`),
      updatedAt: t.timestamp().nullable(),
    }),
  );
});
