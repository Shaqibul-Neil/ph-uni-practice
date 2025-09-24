const StatusBox = ({ data }) => {
  const pendingData = data.filter((el) => el.status === "Pending");
  const submittedData = data.filter((el) => el.status === "Submitted");
  const reviewedData = data.filter((el) => el.status === "Reviewed");

  return (
    <>
      <div className="h-[250px] bg-slate-600 rounded-md flex flex-col justify-center items-center space-y-2">
        <h2 className="text-white font-bold text-4xl">Pending</h2>
        <p className="text-white font-bold text-2xl">{pendingData.length}</p>
      </div>
      <div className="h-[250px] bg-purple-600 rounded-md flex flex-col justify-center items-center space-y-2">
        <h2 className="text-white font-bold text-4xl">Submitted</h2>
        <p className="text-white font-bold text-2xl">{submittedData.length}</p>
      </div>
      <div className="h-[250px] bg-teal-600 rounded-md flex flex-col justify-center items-center space-y-2">
        <h2 className="text-white font-bold text-4xl">Reviewed</h2>
        <p className="text-white font-bold text-2xl">{reviewedData.length}</p>
      </div>
    </>
  );
};

export default StatusBox;
