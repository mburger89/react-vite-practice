import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	// const [count, setCount] = useState(0);
	const [users, setUsers] = useState([]);
	let user_arr = [];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("https://fake-json-api.mock.beeceptor.com/users");
				if (!res.ok) {
					throw new Error("request returned non 200 status");
				}
				const parsed = await res.json();
				setUsers(parsed);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);
	user_arr = users.map((u) => <li key={u.id}>{u.name}</li>);
	return (
		<>
			<ul>{user_arr}</ul>
		</>
	);
}

export default App;
