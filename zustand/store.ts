import { TimeProps } from "@/components/activity/types"
import { create } from "zustand"

interface Activity {
  title: string
  date: string
  time: TimeProps
  duration: string
  distance: string
  notes: string
}

const initialState = {
  title: "",
  date: "",
  time: {
    hours: 0,
    minutes: 0,
  },
  duration: "",
  distance: "",
  notes: "",
}

interface ActivityState {
  state: Activity
  reset: () => void
  updateTitle: (newTitle: string) => void
  updateDate: (newDate: string) => void
  updateTime: (newTime: TimeProps) => void
  updateDuration: (newDuration: string) => void
  updateDistance: (newDist: string) => void
  updateNotes: (newTitle: string) => void
}

export const useActivityStore = create<ActivityState>()((set, get) => ({
  state: initialState,
  reset: () => set({ state: initialState }),
  updateTitle: (text: string) => {
    const currState = get().state
    set({ state: { ...currState, title: text } })
  },
  updateDate: (date: string) => {
    const currState = get().state
    set({ state: { ...currState, date: date } })
  },
  updateTime: (time: TimeProps) => {
    const currState = get().state
    set({ state: { ...currState, time: time } })
  },
  updateDuration: (duration: string) => {
    const currState = get().state
    set({ state: { ...currState, duration: duration } })
  },
  updateDistance: (newDistance: string) => {
    const currState = get().state
    set({ state: { ...currState, distance: newDistance } })
  },
  updateNotes: (text: string) => {
    const currState = get().state
    set({ state: { ...currState, notes: text } })
  },
}))
