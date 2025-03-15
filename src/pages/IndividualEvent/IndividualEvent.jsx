import { useParams } from "react-router-dom";
import EventBoard from "../../components/EventBoard.jsx";

import EventData from "../../data/EventData.jsx";
import Rules from "../../components/Rules.jsx";


const IndividualEvent = () => {
    const {eventName} = useParams();
    if (!eventName) {
        return <h1>Loading...</h1>;  // or redirect to a proper page
    }
    

    
    const eventData = EventData.find(event => event.title.replace(/\s+/g,"-").toLowerCase() === eventName.toLowerCase())
    // Need to fetch the complete data of event from the backend or we can just give it here 
    if (!eventData) {
        return <h1>Event Not Found</h1>;
    }




    return (
        <div className="bg-[url('public/grid.png')] bg-cover bg-center">
            <EventBoard eventData={eventData} />
            <Rules />
        </div>
    )
}

export default IndividualEvent;