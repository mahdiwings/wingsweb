function Portofolio() {
  return (
    <section className="pb-10">
      <div className="md:text-center ">
        <h3 className="py-8 text-3xl font-medium dark:text-slate-50">
          Portofolio
        </h3>
        <div className="lg:mx-auto lg:max-w-2xl">
          <p className="text-md leading-8 text-gray-800 dark:text-slate-200">
            We are a website design team that provides remote and freelance
            projects and services related to website design and services
          </p>
          <p className="text-md leading-8 text-gray-800 dark:text-slate-200">
            We are also interested in{" "}
            <span className="font-semibold text-teal-500 dark:text-teal-400">
              teamwork and startups{" "}
            </span>
            , and we are also trying to form a great team in the field of
            <span className="font-semibold text-teal-500 dark:text-teal-400">
              {" "}
              website development
            </span>{" "}
            and do things in the best way.
          </p>
        </div>
      </div>
      <div className="mx-auto my-10 flex max-w-4xl flex-col gap-12 lg:flex-row lg:flex-wrap">
        <div className="flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src="public/web1.png"
            alt="web"
          />
        </div>
        <div className="flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src="public/web2.png"
            alt="web"
          />
        </div>
        <div className="flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src="public/web3.png"
            alt="web"
          />
        </div>
        <div className="flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src="public/web4.png"
            alt="web"
          />
        </div>
        <div className="flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src="public/web5.png"
            alt="web"
          />
        </div>
        <div className="flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src="public/web6.png"
            alt="web"
          />
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
