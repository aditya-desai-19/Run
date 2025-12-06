import { useState } from "react"
import { View } from "react-native"
import { Chip, Text } from "react-native-paper"
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates"
import { DateTimeProps, TimeProps } from "./types"
import dayjs, { Dayjs } from "dayjs"

const formatDate = (date: Dayjs) => {
  return date.format("DD/MMM").replace(/\//g, " ")
}

export default function DateTime({
  date,
  onConfirmDate,
  hours,
  minutes,
  onConfirmTime,
}: DateTimeProps) {
  const [dateValue, setDateValue] = useState<string>(formatDate(dayjs()))
  const [showDate, setShowDate] = useState<boolean>(false)
  const [showTime, setShowTime] = useState<boolean>(false)

  const onDismissDate = () => {
    setShowDate(false)
  }

  const onDatePress = () => {
    setShowDate(true)
  }

  const onDateConfirm = (params: any) => {
    const date = formatDate(dayjs(params.date))
    setDateValue(date)
    onConfirmDate(params.date)
    setShowDate(false)
  }

  const onTimePress = () => {
    setShowTime(true)
  }

  const onDismissTime = () => {
    setShowTime(false)
  }

  const onTimeConfirm = (hoursAndMinutes: TimeProps) => {
    onConfirmTime(hoursAndMinutes)
    setShowTime(false)
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text variant="titleMedium">
        {"Start"}
        <Text style={{ color: "red" }}>{"*"}</Text>
      </Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 1 }}>
        <Chip
          onPress={onDatePress}
          style={{ padding: 2, backgroundColor: "transparent" }}
        >
          <Text variant="bodyLarge">{dateValue}</Text>
        </Chip>
        <DatePickerModal
          locale="en"
          mode="single"
          visible={showDate}
          onDismiss={onDismissDate}
          date={date}
          onConfirm={onDateConfirm}
        />
        <Chip
          onPress={onTimePress}
          style={{ padding: 2, backgroundColor: "transparent" }}
        >
          <Text variant="bodyLarge">{`${hours} : ${minutes} ${hours > 12 ? "pm" : "am"}`}</Text>
        </Chip>
        <TimePickerModal
          visible={showTime}
          onDismiss={onDismissTime}
          onConfirm={onTimeConfirm}
          hours={hours}
          minutes={minutes}
        />
      </View>
    </View>
  )
}
