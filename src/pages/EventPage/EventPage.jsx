import { Router, useLocation } from "react-router-dom";
import "./EventPage.css";
import Circles from "../../components/Circles/Circles";



function EventPage() {
	const location = useLocation();
 function handleChange(){
    alert("registration is closed");
  }
  // const handleChange2=()=> {
  //   Router.push(location.state.data.registration_link)
   
  // }
	return (
    <div className="EventPage">
      <Circles />
      <h1>{location.state.data.name}</h1>
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

      <div className="buttondiv">
        <button
          className="button"
          onClick={ 
            location.state.data.registration_is_live == true
              ? console.log("registration is open")
              : handleChange
          }
        >
          Register now
        </button>
      </div>
    </div>
  );
}

export default EventPage;
