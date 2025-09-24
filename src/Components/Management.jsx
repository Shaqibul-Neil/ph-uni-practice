import StatusBoxes from "./StatusBoxes";
import Buttons from "./Buttons";
import Issues from "./Issues";
import { use, useState } from "react";

const Management = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const issuesData = use(fetchPromise);
  const [data, setData] = useState(issuesData);
  const filteredData =
    toggleStatus === "All"
      ? data
      : data.filter((el) => el.status === toggleStatus);
  return (
    <>
      <StatusBoxes data={data} />
      <Buttons toggleStatus={toggleStatus} setToggleStatus={setToggleStatus} />
      <Issues filteredData={filteredData} data={data} setData={setData} />
    </>
  );
};

export default Management;
