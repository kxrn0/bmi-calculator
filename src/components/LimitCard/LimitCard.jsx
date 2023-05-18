import SCLimitCard from "./LimitCard.styled";

export default function LimitCard({ icon, name, description }) {
  return (
    <SCLimitCard>
      <div className="name">
        <img src={icon} alt={name} />
        <p>{name}</p>
      </div>
      <p className="description">{description}</p>
    </SCLimitCard>
  );
}
