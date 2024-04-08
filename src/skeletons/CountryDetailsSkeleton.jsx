const CountryDetailsSkeleton = () => {
  return (
    <section
      className={` bg-slate-50 dark:text-slate-50 dark:bg-Very_Dark_Blue_Dark_Mode_Background min-h-screen py-10`}
    >
      <main className="max-container pt-10  lg:block ">
        <div
          className=" grid lg:grid-cols-2 gap-y-10 
            gap-x-28 bg-transparent max-w-[550px] lg:max-w-full "
        >
          <div
            className=" rounded-lg w-full self-center 
           bg-slate-200 dark:bg-slate-600"
          ></div>
          <div className="lg:py-8">
            <h3 className="h-3 w-[10%]"></h3>
            <div className="grid lg:grid-cols-2 mt-4 lg:mt-6 gap-y-8 gap-x-8">
              <div>
                <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600"></p>
                <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600"></p>
                <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600"></p>
                <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600"></p>
                <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600"></p>
              </div>
              <div>
                <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600"></p>
                <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600"></p>
                <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600"></p>
              </div>
            </div>
            <p className="h-2 w-[60%] bg-slate-200 dark:bg-slate-600 mt-8"></p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CountryDetailsSkeleton;
