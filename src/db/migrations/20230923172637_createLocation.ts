import { change } from "../dbScript";

change(async (db) => {
  await db.createEnum("location_status", [
    "draft",
    "in_review",
    "published",
    "archived",
    "declined",
  ]);
  await db.createTable("location", (t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    name: t.varchar().unique(),
    title: t.varchar(),
    locality: t.varchar(),
    hostName: t.varchar().nullable(),
    description: t.varchar().nullable(),
    bioAmmo: t.boolean().nullable(),
    ukaraRegistered: t.boolean().nullable(),
    onlineBookingAvailable: t.boolean().nullable(),
    barrelSockRequired: t.boolean().nullable(),
    open: t.boolean().default(false),
    latitude: t.real(),
    longitude: t.real(),
    address: t.varchar(),
    contactEmail: t.varchar().nullable(),
    priceStandard: t.real().nullable(),
    priceHire: t.real().nullable(),

    // foreign keys
    regionId: t.uuid(),
    locationTypeId: t.uuid(),
    primaryEventTypeId: t.uuid(),
    energyLimitsId: t.uuid().nullable(),
    pyroRulesId: t.uuid().nullable(),

    // enums
    status: t.enum("location_status").default("draft"),

    // timestamps
    ...t.timestamps,
  }));
});
