export default function SecurityCard({ icon, title, description, color, iconColor }) {
  return (
    <article
      className="security-card"
      style={{ background: color, borderTop: `8px solid ${iconColor}` }}
    >

      <div className="security-icon" style={{ color: iconColor }} aria-hidden="true">
        {icon}
      </div>

      <h4>{title}</h4>

      <p>{description}</p>

    </article>
  );
}
