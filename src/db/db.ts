import { orchidORM } from "orchid-orm";
import { config } from "./config";
import { EventTypeTable } from "./tables/EventType";
import { FacilityTable } from "./tables/Facility";
import { LocationTable } from "./tables/Location";
import { LocationEnergyLimitSetTable } from "./tables/LocationEnergyLimitSet";
import { LocationEventTypeTable } from "./tables/LocationEventType";
import { LocationFacilityTable } from "./tables/LocationFacility";
import { LocationPyroRuleSetTable } from "./tables/LocationPyroRuleSet";
import { LocationLinkTable } from "./tables/LocationLink";
import { LocationTypeTable } from "./tables/LocationType";
import { RegionTable } from "./tables/Region";

export const db = orchidORM(config.database, {
  location: LocationTable,
  region: RegionTable,
  locationType: LocationTypeTable,
  locationEnergyLimitSet: LocationEnergyLimitSetTable,
  facility: FacilityTable,
  locationFacility: LocationFacilityTable,
  locationLink: LocationLinkTable,
  locationPyroRuleSet: LocationPyroRuleSetTable,
  eventType: EventTypeTable,
  locationEventType: LocationEventTypeTable,
});
