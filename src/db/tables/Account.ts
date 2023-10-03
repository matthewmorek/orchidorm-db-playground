import UserProfile from "./UserProfile";
import { BaseTable } from "./BaseTable";

export default class AccountTable extends BaseTable {
  readonly table = "account";
  columns = this.setColumns((t) => ({
    id: t
      .uuid()
      .primaryKey()
      .default(t.sql`uuid_generate_v4()`),
    email: t.varchar().unique(),
    role: t.enum("userRole", ["admin", "host", "player"]),
  }));

  relations = {
    userProfile: this.hasOne(() => UserProfile, {
      required: true,
      columns: ["id"],
      references: ["accountId"],
    }),
  };
}
