import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = "37fdd7ba76be425eb9082658e526b82c"

export const config = { mode: "rtc", codec: "vp8", appId: appId }

export const useClient = createClient(config)
