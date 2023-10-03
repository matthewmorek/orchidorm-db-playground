import { BaseTable } from "./BaseTable";
import { LocationTable } from "./Location";

export class LocationLinkTable extends BaseTable {
  readonly table = "location_link";
  columns = this.setColumns((t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    locationId: t.uuid(),
    type: t.enum("link_type", [
      "facebook",
      "instagram",
      "twitter",
      "youtube",
      "tiktok",
      "website",
      "other",
    ]),
    url: t.varchar(),
  }));

  relations = {
    location: this.belongsTo(() => LocationTable, {
      references: ["id"],
      columns: ["locationId"],
    }),
  };
}
