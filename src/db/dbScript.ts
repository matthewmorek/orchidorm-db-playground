import { rakeDb } from "rake-db";
import { appCodeUpdater } from "orchid-orm/codegen";
import { config } from "./config";
import { BaseTable } from "./tables/BaseTable";

export const change = rakeDb(config.database, {
  snakeCase: true,
  baseTable: BaseTable,
  migrationsPath: "./migrations",
  appCodeUpdater: appCodeUpdater({
    tablePath: (tableName) => `./tables/${tableName}.ts`,
    ormPath: "./db.ts",
  }),
  useCodeUpdater: false, // set to false to disable code updater
  commands: {
    async seed() {
      const { seed } = await import("./seed");
      await seed();
    },
  },
  import: (path) => import(path),
});
