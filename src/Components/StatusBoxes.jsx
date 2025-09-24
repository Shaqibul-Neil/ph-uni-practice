import Container from "./Container";
import StatusBox from "./StatusBox";
const StatusBoxes = ({ data }) => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-3 gap-6 my-24">
          <StatusBox data={data} />
        </div>
      </Container>
    </>
  );
};

export default StatusBoxes;
