import SCTipCard from "./TipCard.styled";

export default function TipCard({ image, name, description }) {
  return (
    <SCTipCard>
      <img src={image} alt={name} />
      <div className="tip">
        <h3 className="heading-m color-gunmetal">{name}</h3>
        <p className="body-m color-dark-electric-blue">{description}</p>
      </div>
    </SCTipCard>
  );
}
