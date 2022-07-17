import {configureStore} from "@reduxjs/toolkit"

import socket from "./slices/socket.io"

export default configureStore({
	reducer: {
		socket: socket.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false,
		}),
})
