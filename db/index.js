import { Platform } from "react-native"
import { Database } from "@nozbe/watermelondb"
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"

import schema from "./schema.js"
import migrations from "./migration.js"
import RunData from "./model/run-data.js"

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: Platform.OS === "ios",
  onSetUpError: (error) => {
    console.log("Some error occured ", error)
  },
})

export const database = new Database({
  adapter,
  modelClasses: [RunData],
})
