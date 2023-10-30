function CardMainSection1({
  myImage,
  CardTitle,
  SkillTitle,
  Skill1,
  Skill2,
  Skill3,
  Skill4,
  AltImg,
}) {
  return (
    <div>
      <div className="my-10 rounded-xl p-10 text-center shadow-lg dark:bg-slate-50">
        <img
          className="mx-auto"
          src={myImage}
          width={100}
          height={100}
          alt={AltImg}
        />
        <h3 className="py-4 text-lg">{CardTitle}</h3>
        <p className="py-2">
          Creating elegant designs suited for your needs following core design
          theory.
        </p>
        <h4 className="py-4 font-medium text-teal-600">{SkillTitle}</h4>
        <p className="py-1 text-gray-800">{Skill1}</p>
        <p className="py-1 text-gray-800">{Skill2}</p>
        <p className="py-1 text-gray-800">{Skill3}</p>
        <p className="py-1 text-gray-800">{Skill4}</p>
      </div>
    </div>
  );
}

export default CardMainSection1;
