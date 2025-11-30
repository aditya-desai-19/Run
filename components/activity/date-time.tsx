import { useState } from "react"
import { View } from "react-native"
import { Chip, Text } from "react-native-paper"
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates"
import { DateTimeProps, TimeProps } from "./types"

export default function DateTime({
  date,
  onConfirmDate,
  hours,
  minutes,
  onConfirmTime,
}: DateTimeProps) {
  const [showDate, setShowDate] = useState<boolean>(false)
  const [showTime, setShowTime] = useState<boolean>(false)

  const onDismissDate = () => {
    setShowDate(false)
  }

  const onDatePress = () => {
    setShowDate(true)
  }

  const onDateConfirm = (params: any) => {
    onConfirmDate(params)
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
        paddingHorizontal: 16,
      }}
    >
      <Text>{"Start"}</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Chip onPress={onDatePress} style={{ padding: 4 }}>
          {date}
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
          style={{ padding: 4 }}
        >{`${hours} : ${minutes}`}</Chip>
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
