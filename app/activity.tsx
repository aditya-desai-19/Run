import AddNotes from "@/components/activity/add-notes"
import DateDuration from "@/components/activity/date-duration"
import InputLabel from "@/components/activity/input-label"
import Title from "@/components/activity/title"
import { TimeProps } from "@/components/activity/types"
import { useState } from "react"
import { View } from "react-native"

export default function Activity() {
  const [title, setTitle] = useState<string>("")
  const [distance, setDistance] = useState<string>("")
  const [date, setDate] = useState<any>(null)
  const [hoursAndMinutes, setHoursAndMinutes] = useState<TimeProps>({
    hours: 0,
    minutes: 0,
  })
  const [duration, setDuration] = useState<string>("")
  const [notes, setNotes] = useState<string>("")

  const onChangeTitle = (text: string) => {
    if (text.length > 25) return
    setTitle(text)
  }

  const onDistanceChange = (text: string) => {
    setDistance(text)
  }

  const onChangeDuration = (text: string) => {
    setDuration(text)
  }

  const onConfirmDate = (params: any) => {
    if (!params.date) return
    setDate(params.date)
  }

  const onConfirmTime = (hm: TimeProps) => {
    setHoursAndMinutes(hm)
  }

  const onNotesChange = (text: string) => {
    setNotes(text)
  }

  return (
    <View style={{ width: "100%" }}>
      <Title />
      <InputLabel
        label="Title"
        value={title}
        onChangeText={onChangeTitle}
        placeholder="Add"
      />
      <DateDuration
        date={date}
        hours={hoursAndMinutes.hours}
        minutes={hoursAndMinutes.minutes}
        duration={duration}
        onChangeDuration={onChangeDuration}
        onConfirmDate={onConfirmDate}
        onConfirmTime={onConfirmTime}
      />
      <InputLabel
        label="Distance"
        value={distance}
        onChangeText={onDistanceChange}
        keyboardType="decimal-pad"
        placeholder="In km"
      />
      <AddNotes value={notes} onChangeText={onNotesChange} />
    </View>
  )
}
