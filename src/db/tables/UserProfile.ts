import Account from "./Account";
import { BaseTable } from "./BaseTable";

export default class UserProfile extends BaseTable {
  readonly table = "user_profile";
  columns = this.setColumns((t) => ({
    id: t.uuid().primaryKey(),
    accountId: t.uuid().unique(),
    firstName: t.varchar(),
    lastName: t.varchar(),
  }));

  relations = {
    account: this.belongsTo(() => Account, {
      required: true,
      references: ["id"],
      columns: ["accountId"],
    }),
  };
}
