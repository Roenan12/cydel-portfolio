import "./TitleHeader.css";

export function TitleHeader({ title, description, id }) {
  return (
    <div className="header-section">
      <h1 className="header-title" id={id}>
        {title}
      </h1>
      <p className="header-description">{description}</p>
    </div>
  );
}
