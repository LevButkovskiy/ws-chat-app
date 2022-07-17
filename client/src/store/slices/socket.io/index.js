import {createSlice} from "@reduxjs/toolkit"
import io from "socket.io-client"

const initialState = {
	socket: io(process.env.REACT_APP_WSS_URL, {
		reconnectionDelay: 25000,
		reconnectionDelayMax: 10000,
	}),
}

export default createSlice({
	name: "socket",
	initialState,
	reducers: {
		emit: (state, {payload}) => {
			const {name, ...truePayload} = payload
			state.socket.emit(name || "default", truePayload)
		},
		// onEvent: (state, {payload}) => {
		// 	if (typeof payload == "object") state.socket.on(payload.name || "default", payload.cb)
		// },
		// offEvent: (state, {payload}) => {
		// 	if (typeof payload == "object") state.socket.off(payload.name || "default", payload.cb)
		// },
	},
})
