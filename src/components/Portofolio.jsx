import web1 from "../images/web1.jpg";
import web2 from "../images/web2.jpg";
import web3 from "../images/web3.jpg";
import web4 from "../images/web4.jpg";
import web5 from "../images/web5.jpg";
import web6 from "../images/web6.png";
import { BsGithub } from "react-icons/bs";
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
        <div className="group relative flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={web1}
            alt="web"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#24242498] opacity-0 transition-opacity group-hover:opacity-100">
            <button className="opacity-1 flex items-center justify-center gap-3 rounded-lg bg-blue-950 px-4 py-2 text-white hover:bg-blue-900">
              <BsGithub className="inline-block text-3xl" />{" "}
              <span>Live Project</span>
            </button>
          </div>
        </div>
        <div className="group relative flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={web2}
            alt="web"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#24242498] opacity-0 transition-opacity group-hover:opacity-100">
            <button className="opacity-1 flex items-center justify-center gap-3 rounded-lg bg-blue-950 px-4 py-2 text-white hover:bg-blue-900">
              <BsGithub className="inline-block text-3xl" />{" "}
              <span>Live Project</span>
            </button>
          </div>
        </div>
        <div className="group relative flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={web3}
            alt="web"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#24242498] opacity-0 transition-opacity group-hover:opacity-100">
            <button className="opacity-1 flex items-center justify-center gap-3 rounded-lg bg-blue-950 px-4 py-2 text-white hover:bg-blue-900">
              <BsGithub className="inline-block text-3xl" />{" "}
              <span>Live Project</span>
            </button>
          </div>
        </div>
        <div className="group relative flex-1 basis-1/3 shadow-lg">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={web4}
            alt="web"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#24242498] opacity-0 transition-opacity group-hover:opacity-100">
            <button className="opacity-1 flex items-center justify-center gap-3 rounded-lg bg-blue-950 px-4 py-2 text-white hover:bg-blue-900">
              <BsGithub className="inline-block text-3xl" />{" "}
              <span>Live Project</span>
            </button>
          </div>
        </div>
        <div className="flex-1 basis-1/3 shadow-lg group relative">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={web5}
            alt="web"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#24242498] opacity-0 transition-opacity group-hover:opacity-100">
            <button className="opacity-1 flex items-center justify-center gap-3 rounded-lg bg-blue-950 px-4 py-2 text-white hover:bg-blue-900">
              <BsGithub className="inline-block text-3xl" />{" "}
              <span>Live Project</span>
            </button>
          </div>
        </div>
        <div className="flex-1 basis-1/3 shadow-lg relative group">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={web6}
            alt="web"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#24242498] opacity-0 transition-opacity group-hover:opacity-100 rounded-lg">
            <button className="flex justify-center items-center gap-3 rounded-lg bg-blue-950 opacity-1 px-4 py-2 text-white hover:bg-blue-900">
            <BsGithub className="text-3xl inline-block"/> <span>Live Project</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
