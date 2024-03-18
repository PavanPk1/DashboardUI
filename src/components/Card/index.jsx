import PropTypes from "prop-types";
import "./index.css";

const Card = (props) => {
  const { details } = props;
  //   console.log(details);
  const { id, name, money, color, icon } = details;
  const cardStyle = {
    backgroundColor: color,
    borderRadius: "10px",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
  };
  return (
    <li className="card" key={id} style={cardStyle}>
      <img src={icon} alt={name} className="icon" />
      <h1 className="name">{name}</h1>
      <p className="money">{money}</p>
    </li>
  );
};

Card.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    money: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
