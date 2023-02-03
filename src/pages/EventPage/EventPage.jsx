import { useLocation } from "react-router-dom";

function EventPage() {
	const location = useLocation();
	return (
		<div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
			<div>
				<ul>
					<li>name: {location.state.data.name}</li>
					<li>prize: {location.state.data.prize_money}</li>
					<li>registration fees: {location.state.data.registration_fees}</li>
					<li>registration link: {location.state.data.registration_link}</li>
					<li>
						rules:
						<ul style={{ padding: "1rem" }}>
							{location.state.data.rules.map((rule, id) => {
								return <li key={id}>{rule}</li>;
							})}
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default EventPage;
