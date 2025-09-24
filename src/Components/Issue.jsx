const Issue = ({ issue, setData, data }) => {
  //সবসময় update করতে হবে data তে, কারণ ওটাই main state (source of truth)। যখন data বদলাবে, React আবার automatically filter করে নতুন filteredData বানাবে।

  const conditionalClass = (status) => {
    if (status === "High" || status === "Pending")
      return "text-red-500 bg-red-100 padding";
    if (status === "Low" || status === "Reviewed")
      return "text-green-500 bg-green-100 padding";
    if (status === "Medium" || status === "Submitted")
      return "text-yellow-500 bg-yellow-100 padding";
  };

  const handleClick = (id) => {
    const currData = data.find((el) => el.ticketId === id);
    const newData = {
      ...currData,
      status: currData.status === "Pending" ? "Submitted" : "Reviewed",
    };

    const restData = data.filter((el) => el.ticketId !== id);
    setData([newData, ...restData]);
  };

  return (
    <div
      className="rounded-md shadow-2xl p-4 space-y-4 h-[290px] cursor-pointer"
      onClick={() => handleClick(issue.ticketId)}
    >
      <div>
        <img
          className="w-16 h-16 rounded-full"
          src={issue.userImg}
          alt={issue.requestedBy}
          title={issue.requestedBy}
        />
      </div>
      <h3 className="text-lg font-bold">{issue.requestedBy}</h3>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold w-44">{issue.subject}</h2>
        <div className="flex gap-2 items-center">
          <div className={conditionalClass(issue.priority)}>
            {issue.priority}
          </div>
          <div className={conditionalClass(issue.status)}>{issue.status}</div>
        </div>
      </div>
      <p className="text-slate-500">{issue.description}</p>
    </div>
  );
};

export default Issue;
