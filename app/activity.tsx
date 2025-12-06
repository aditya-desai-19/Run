import AddNotes from "@/components/activity/add-notes"
import DateDuration from "@/components/activity/date-duration"
import InputLabel from "@/components/activity/input-label"
import Title from "@/components/activity/title"
import { TimeProps } from "@/components/activity/types"
import { View } from "react-native"
import dayjs from "dayjs"
import { useActivityStore } from "@/zustand/store"
import { useEffect } from "react"

export default function Activity() {
  const dayjsObj = dayjs()
  const currHour = parseInt(dayjsObj.format("HH"))
  const currMin = parseInt(dayjsObj.format("mm"))

  const {
    state,
    updateTitle,
    updateDistance,
    updateDuration,
    updateDate,
    updateNotes,
    updateTime,
    reset,
  } = useActivityStore()

  const { title, date, distance, duration, notes, time } = state

  const onChangeTitle = (text: string) => {
    if (text.length > 25) return
    updateTitle(text)
  }

  const onDistanceChange = (text: string) => {
    updateDistance(text)
  }

  const onChangeDuration = (text: string) => {
    updateDuration(text)
  }

  const onConfirmDate = (date: Date) => {
    updateDate(date.toISOString())
  }

  const onConfirmTime = (hm: TimeProps) => {
    updateTime(hm)
  }

  const onNotesChange = (text: string) => {
    updateNotes(text)
  }

  useEffect(() => {
    updateTime({
      hours: currHour,
      minutes: currMin,
    })

    return () => {
      reset()
    }
  }, [])

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
        hours={time.hours}
        minutes={time.minutes}
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
