import { change } from "../dbScript";

change(async (db) => {
  await db.createExtension("uuid-ossp");
});
