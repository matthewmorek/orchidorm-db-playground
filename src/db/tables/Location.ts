import { BaseTable } from "./BaseTable";
import { EventTypeTable } from "./EventType";
import { FacilityTable } from "./Facility";
import { LocationEnergyLimitSetTable } from "./LocationEnergyLimitSet";
import { LocationEventTypeTable } from "./LocationEventType";
import { LocationFacilityTable } from "./LocationFacility";
import { LocationLinkTable } from "./LocationLink";
import { LocationPyroRuleSetTable } from "./LocationPyroRuleSet";
import { LocationTypeTable } from "./LocationType";
import { RegionTable } from "./Region";

export class LocationTable extends BaseTable {
  readonly table = "location";
  columns = this.setColumns((t) => ({
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
    regionId: t.uuid().foreignKey(() => RegionTable, "id"),
    locationTypeId: t.uuid().foreignKey(() => LocationTypeTable, "id"),
    primaryEventTypeId: t.uuid().foreignKey(() => EventTypeTable, "id"),
    energyLimitsId: t
      .uuid()
      .nullable()
      .foreignKey(() => LocationEnergyLimitSetTable, "id"),
    pyroRulesId: t
      .uuid()
      .nullable()
      .foreignKey(() => LocationPyroRuleSetTable, "id"),

    // enums
    status: t
      .enum("location_status", [
        "draft",
        "in_review",
        "published",
        "archived",
        "declined",
      ])
      .default("draft"),
  }));

  relations = {
    region: this.belongsTo(() => RegionTable, {
      required: true,
      references: ["id"],
      columns: ["regionId"],
    }),
    locationType: this.belongsTo(() => LocationTypeTable, {
      required: true,
      references: ["id"],
      columns: ["locationTypeId"],
    }),
    primaryEventType: this.belongsTo(() => EventTypeTable, {
      required: true,
      references: ["id"],
      columns: ["primaryEventTypeId"],
    }),
    locationEventTypes: this.hasMany(() => LocationEventTypeTable, {
      columns: ["id"],
      references: ["locationId"],
    }),
    eventTypes: this.hasMany(() => EventTypeTable, {
      through: "locationEventTypes",
      source: "eventType",
    }),
    energyLimits: this.belongsTo(() => LocationEnergyLimitSetTable, {
      columns: ["energyLimitsId"],
      references: ["id"],
    }),
    pyroRuleSet: this.belongsTo(() => LocationPyroRuleSetTable, {
      columns: ["pyroRulesId"],
      references: ["id"],
    }),
    locationFacilities: this.hasMany(() => LocationFacilityTable, {
      columns: ["id"],
      references: ["locationId"],
    }),
    facilities: this.hasMany(() => FacilityTable, {
      through: "locationFacilities",
      source: "facility",
    }),
    links: this.hasMany(() => LocationLinkTable, {
      columns: ["id"],
      references: ["locationId"],
    }),
  };
}

// export interface LocationObject extends Location {
//   region: Region;
//   locationType: LocationType;
//   primaryEventType: EventType;
//   facilities?: Facility[];
//   energyLimits?: LocationEnergyLimitSet;
//   pyroRuleSet?: LocationPyroRuleSet;
//   eventTypes?: EventType[];
//   links?: LocationLink[];
// }
