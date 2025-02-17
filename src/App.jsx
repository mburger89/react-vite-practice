import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const profileCard = {
	display: "grid",
	maxWidth: "400px",
	gridTemplateColumns: "1fr 1fr",
	listStyle: "none",
	backgroundColor: "rgba(255, 255, 255, 0.1)",
	borderRadius: "5px",
	borderColor: "rgba(255, 255, 255, 1)",
	borderSize: "3px",
	padding: "10px",
};

const profileImg = {
	borderRadius: "50px",
	width: "100px",
	height: "100px",
	overflow: "hidden",
	backgroundColor: "rgba(255, 255, 255, 0.1)",
	objectFit: "fill",
};

const profileList = {
	display: "grid",
	gap: "10px",
	gridTemplateColumns: "1fr 1fr 1fr",
};

const textBlock = {
	textAlign: "left",
};

function App() {
	const [users, setUsers] = useState([]);

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
	const user_arr = users.map((u) => (
		<li style={profileCard} key={u.id}>
			<img style={profileImg} src={u.photo} />
			<div style={textBlock}>
				<p>{`name: ${u.name}`}</p>
				<p>{`user name: ${u.username}`}</p>
			</div>
		</li>
	));
	return (
		<>
			<ul style={profileList}>{user_arr}</ul>
		</>
	);
}

export default App;
