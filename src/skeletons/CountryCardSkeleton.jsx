const CountryCardSkeleton = () => {
  return (
    <div className=" dark:text-slate-50  bg-white dark:bg-dark_Blue_Dark_Mode_Elements  max-w-[470px]  rounded-md overflow-hidden ">
      <div className="animate-pulse">
        <div className=" object-cover bg-slate-200 dark:bg-slate-600  aspect-[2/1]"></div>
        <div className=" p-6">
          <h2 className="bg-slate-200 dark:bg-slate-600  h-3 w-[30%]"></h2>
          <div className="mt-4 space-y-[8px] ">
            <p className="bg-slate-200 dark:bg-slate-600 h-2 w-[60%]"></p>
            <p className="bg-slate-200 dark:bg-slate-600 h-2 w-[60%]"></p>
            <p className="bg-slate-200 dark:bg-slate-600 h-2 w-[60%]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCardSkeleton;
