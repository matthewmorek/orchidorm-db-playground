import { createBaseTable } from "orchid-orm";

export const BaseTable = createBaseTable({
  snakeCase: true,
  columnTypes: (t) => ({
    id: () => t.uuid().primaryKey(),
    ...t,
  }),
  exportAs: "BaseTable",
});
