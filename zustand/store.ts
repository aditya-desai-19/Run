import { TimeProps } from "@/components/activity/types"
import { create } from "zustand"

export interface Activity {
  title: string
  date: string
  time: TimeProps
  duration: number
  distance: number
  notes: string
}

const initialState: Activity = {
  title: "",
  date: "",
  time: {
    hours: 0,
    minutes: 0,
  },
  duration: 0,
  distance: 0,
  notes: "",
}

interface ActivityState {
  state: Activity
  reset: () => void
  updateTitle: (newTitle: string) => void
  updateDate: (newDate: string) => void
  updateTime: (newTime: TimeProps) => void
  updateDuration: (newDuration: number) => void
  updateDistance: (newDist: number) => void
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
  updateDuration: (duration: number) => {
    const currState = get().state
    set({ state: { ...currState, duration: duration } })
  },
  updateDistance: (newDistance: number) => {
    const currState = get().state
    set({ state: { ...currState, distance: newDistance } })
  },
  updateNotes: (text: string) => {
    const currState = get().state
    set({ state: { ...currState, notes: text } })
  },
}))
