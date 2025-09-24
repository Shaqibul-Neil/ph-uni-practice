import StatusBoxes from "./StatusBoxes";
import Buttons from "./Buttons";
import { useState } from "react";
const Management = () => {
  const [toggleStatus, setToggleStatus] = useState("All");
  return (
    <>
      <StatusBoxes />
      <Buttons toggleStatus={toggleStatus} setToggleStatus={setToggleStatus} />
    </>
  );
};

export default Management;
