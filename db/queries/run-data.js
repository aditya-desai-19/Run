import { database } from "../index.js"

export const addRunData = async (data) => {
  try {
    await database.write(async () => {
      await database.get("run_data").create((run) => {
        run.title = data.title
        run.date = data.date
        run.hours = data.time.hours
        run.minutes = data.time.minutes
        run.duration = data.duration
        run.distance = data.distance
        run.notes = data.notes
      })
    })
  } catch (error) {
    console.error("Some error occured while adding data ", error)
  }
}

export const getRunData = async () => {
  try {
    return await database.get("run_data").query().fetch()
  } catch (error) {
    console.error("Some error occured while reading data")
  }
}
