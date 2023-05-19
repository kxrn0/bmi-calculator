import SCLimitCard from "./LimitCard.styled";

export default function LimitCard({ icon, name, description }) {
  return (
    <SCLimitCard className="limit-card">
      <div className="name">
        <img src={icon} alt={name} />
        <h4 className="heading-s color-gunmetal">{name}</h4>
      </div>
      <p className="description body-m color-dark-electric-blue">
        {description}
      </p>
    </SCLimitCard>
  );
}
