const DashboardCard = ({ cardImg, title, cardDate, amount }) => {
  return (
    <>
      <div className="bg-white w-full lg:w-[300px] p-3 shadow-sm shadow-gray-400 rounded-2xl">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 ">
          <div>
            <div className="flex-shrink-0 ">{cardImg}</div>
          </div>
          <div className="text-gray-800">
            <div className="text-[14px]">
              <p className="font-semibold text-[16px]">{title}</p>
              <p>{amount}</p>
              <p className="text-[13px] text-gray-500">
                last updated on : {cardDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
