import logo from "../logo.svg"
import "../App.css"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import socketIo from "../store/slices/socket.io"

export default function Main() {
	const {socket} = useSelector((state) => state.socket)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(socketIo.actions.emit({name: "hello from client", test: 2}))
	}, [])

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	)
}
