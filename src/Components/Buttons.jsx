import Container from "./Container";

const Buttons = () => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <>
      <Container>
        <div className="text-right mb-16">
          {btns.map((btn, i) => (
            <button
              className={`${
                i === 0 ? "toggle-btn rounded-l-md" : "toggle-btn"
              } ${
                i === btns.length - 1 ? "toggle-btn rounded-r-md" : "toggle-btn"
              }`}
              key={i}
            >
              {btn}
            </button>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Buttons;
