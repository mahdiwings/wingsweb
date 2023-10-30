import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
function UnderHeader() {
  return (
    <>
      <div className="px-10 text-center">
        <h1 className="py-2 text-5xl font-medium text-teal-500 dark:text-teal-400 md:py-3 md:text-6xl">
          Wings Web
        </h1>
        <h3 className="py-2 text-2xl font-medium dark:text-slate-50 md:py-4 md:text-3xl">
          We are Web Developer.
        </h3>
        <p className="text-md mx-auto max-w-xl leading-8 text-gray-800 dark:text-slate-300 md:text-xl md:leading-10">
          We are a passionate team who work as freelancers and do website design
          projects and website services
        </p>
      </div>
      <div className="flex justify-center gap-16 pt-10 text-5xl text-gray-500 delay-150 dark:text-gray-200">
        <AiFillInstagram className="cursor-pointer delay-100 hover:text-gray-400 dark:text-gray-300" />
        <AiFillTwitterCircle className="cursor-pointer delay-100 hover:text-gray-400 dark:text-gray-300" />
        <AiFillYoutube className="cursor-pointer delay-100 hover:text-gray-400 dark:text-gray-300" />
      </div>
    </>
  );
}

export default UnderHeader;
