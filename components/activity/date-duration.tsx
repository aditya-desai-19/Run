import { View } from "react-native"
import DateTime from "./date-time"
import Duration from "./duration"
import { DateTimeProps, DurationProps } from "./types"
import withDivider from "./with-divider"

function DateDurationComponent({
  date,
  hours,
  minutes,
  onChangeDuration,
  onConfirmDate,
  onConfirmTime,
  duration,
}: DateTimeProps & DurationProps) {
  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <DateTime
        date={date}
        hours={hours}
        minutes={minutes}
        onConfirmDate={onConfirmDate}
        onConfirmTime={onConfirmTime}
      />
      <Duration duration={duration} onChangeDuration={onChangeDuration} />
    </View>
  )
}

const DateDuration = withDivider(DateDurationComponent)
export default DateDuration
