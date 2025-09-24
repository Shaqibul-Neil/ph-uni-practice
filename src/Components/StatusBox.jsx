const StatusBox = () => {
  return (
    <>
      <div className="h-[250px] bg-slate-600 rounded-md flex flex-col justify-center items-center space-y-2">
        <h2 className="text-white font-bold text-4xl">Pending</h2>
        <p className="text-white font-bold text-2xl">0</p>
      </div>
      <div className="h-[250px] bg-purple-600 rounded-md flex flex-col justify-center items-center space-y-2">
        <h2 className="text-white font-bold text-4xl">Submitted</h2>
        <p className="text-white font-bold text-2xl">0</p>
      </div>
      <div className="h-[250px] bg-teal-600 rounded-md flex flex-col justify-center items-center space-y-2">
        <h2 className="text-white font-bold text-4xl">Reviewed</h2>
        <p className="text-white font-bold text-2xl">0</p>
      </div>
    </>
  );
};

export default StatusBox;
