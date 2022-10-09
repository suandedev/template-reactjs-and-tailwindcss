const Badge = ({ rounded, color, border, bg, size, text, link }) => {
    if (link == true) {
    return (
      <>
        <p
          className={
            rounded + " " + color + " " + border + " " + bg + " " + size
          }
        >
          <a href="#">{text}</a>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p
          className={
            rounded + " " + color + " " + border + " " + bg + " " + size
          }
        >
          {text}
        </p>
      </>
    );
  }
};

export default Badge;
