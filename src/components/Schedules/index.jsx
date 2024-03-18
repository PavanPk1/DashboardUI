import "./index.css";
const schedulesData = [
  {
    id: 1,
    name: "Meeting with suppliers from kuta Bali",
    timeSlot: "14.00-15.00",
    venue: "at Sunset, Kuta Bali",
  },
  {
    id: 2,
    name: "Check operation at Giga Factory 1",
    timeSlot: "18.00-20.00",
    venue: "at Central Jakarta ",
  },
];

const Schedules = () => {
  return (
    <div className="schedules">
      <div className="sch-container1">
        <h1 className="sch-title">Today&apos;s Schedules</h1>
        <p className="sch-title">SeeAll {`>`}</p>
      </div>
        <ul className="sch-container2">
          {schedulesData.map((schedule) => (
            <li key={schedule.id} className="task">
              <h1 className="name">{schedule.name}</h1>
              <p className="time">{schedule.timeSlot}</p>
              <p className="venue">{schedule.venue}</p>
            </li>
          ))}
        </ul>
    </div>
  );
};
export default Schedules;
