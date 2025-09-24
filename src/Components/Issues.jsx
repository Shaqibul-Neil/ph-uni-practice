import Container from "./Container";
import Issue from "./Issue";

const Issues = ({ filteredData, data, setData }) => {
  return (
    <>
      <Container>
        {filteredData.length === 0 ? (
          <h2 className="text-4xl font-bold text-center my-24">
            No Issues Left
          </h2>
        ) : (
          <div className="grid grid-cols-3 gap-4 mb-24">
            {filteredData.map((issue) => (
              <Issue
                key={issue.ticketId}
                issue={issue}
                setData={setData}
                data={data} //সবসময় update করতে হবে data তে, কারণ ওটাই main state (source of truth)। যখন data বদলাবে, React আবার automatically filter করে নতুন filteredData বানাবে।
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Issues;
