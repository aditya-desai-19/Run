import { Model } from "@nozbe/watermelondb"
import { field, text } from "@nozbe/watermelondb/decorators"

export default class RunData extends Model {
  static table = "run_data"

  @text("title") title
  @text("date") date
  @field("hours") hours
  @field("minutes") minutes
  @field("duration") duration
  @field("distance") distance
  @field("notes") notes
}
