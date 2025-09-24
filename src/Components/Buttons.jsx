import Container from "./Container";

const Buttons = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];

  return (
    <>
      <Container>
        <div className="text-right mb-16">
          {btns.map((btn, i) => (
            <button
              className={`toggle-btn ${i === 0 && "rounded-l-md"} ${
                i === btns.length - 1 && "rounded-r-md"
              } ${toggleStatus === btn && "!text-white !bg-purple-500"}`}
              key={i}
              onClick={() => setToggleStatus(btn)}
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
