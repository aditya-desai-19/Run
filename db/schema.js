import { appSchema, tableSchema } from "@nozbe/watermelondb"

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "run_data",
      columns: [
        { name: "title", type: "string" },
        { name: "date", type: "string" },
        { name: "hours", type: "number" },
        { name: "minutes", type: "number" },
        { name: "duration", type: "number" },
        { name: "distance", type: "number" },
        { name: "notes", type: "string", isOptional: true },
      ],
    }),
  ],
})
