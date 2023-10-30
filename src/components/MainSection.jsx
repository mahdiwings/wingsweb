import CardMainSection1 from "./CardMainSection1";

function MainSection() {
  return (
    <section>
      <div className="relative mx-auto mt-16 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
        <img
          className=" h-80  w-80 object-cover md:h-96 md:w-96"
          src="../public/dev-ed-wave.png"
          alt="developer"
        />
      </div>
      <div className="md:mx-auto md:my-2 md:max-w-xl md:text-center">
        <h3 className="py-3 pt-5 text-3xl font-medium dark:text-slate-50">
          services we provide
        </h3>
        <p className="text-md leading-7 text-gray-800 dark:text-slate-300 md:text-xl md:leading-8">
          We are a website design team that provides remote and freelance
          projects and services related to website design and services
        </p>
        <p className="text-md leading-7 text-gray-800 dark:text-slate-300 md:text-xl md:leading-8">
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
      {/* Image 1 Section */}

      <div className="gap-10 lg:flex">
        {/* Image Card 1 */}
        <CardMainSection1
          myImage={"../public/design.png"}
          AltImg={"design developer"}
          SkillTitle={"Design Tools I Use"}
          CardTitle={"Beautiful Designs"}
          Skill1={"PhotoShop"}
          Skill2={"Illustrator"}
          Skill3={"Figma"}
          Skill4={"Adobe XD"}
        />
        <CardMainSection1
          myImage={"../public/code.png"}
          AltImg={"code developer"}
          SkillTitle={"My programming skills"}
          CardTitle={"Smart Coding"}
          Skill1={"HTML + CSS"}
          Skill2={"WordPress"}
          Skill3={"JavaScript"}
          Skill4={"React Js"}
        />
        <CardMainSection1
          myImage={"public/consulting.png"}
          AltImg={"consulting developer"}
          SkillTitle={"The things we do"}
          CardTitle={"Our expertise"}
          Skill1={"Site Management"}
          Skill2={"Web Develope"}
          Skill3={"SEO"}
          Skill4={"Ui Ux"}
        />
      </div>
    </section>
    // {/* End Image 1 Section */}
  );
}

export default MainSection;
