import { createBaseTable } from "orchid-orm";

export const BaseTable = createBaseTable({
  snakeCase: true,
  columnTypes: (t) => ({
    ...t,
    id: () =>
      t
        .uuid()
        .primaryKey()
        .default(t.sql`uuid_generate_v4()`),
    ...t.timestamps,
  }),
  exportAs: "BaseTable",
});
