import "./index.css";

const Activities = () => {
  return (
    <div>
      <h1>Activities</h1>
      <div className="">
        <select>
          <option value="All">All</option>
          <option value="Today">Today</option>
        </select>
        <p>Guest</p>
        <p>User</p>
      </div>
    </div>
  );
};
export default Activities;
