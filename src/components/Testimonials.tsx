import { FunctionComponent } from "react";

const Testimonials: FunctionComponent = () => {
  const testimonies = [
    {
      name: "Tiffany Rolfe",
      location: "New York, USA",
      description:
        "AR so far seems to be the simplest way to transition us into the metaverse. But we’ll continue to see attempts to push more into VR with headsets.",
    },
    {
      name: "Rony Abovitz",
      location: "London, UK",
      description:
        "I believe that the Xverse will be a wild, organic, and amazing outgrowth of what we think of today as the internet and web.",
    },
    {
      name: "Matthew Ball",
      location: "New York, USA",
      description:
        "The brilliant thing about platform changes of this magnitude is its unpredictability. We can say blanket statements like participate in an AR world, spend more time wearing VR headsets, and own more virtual goods.",
    },
    {
      name: "Yat Siu",
      location: "Nashville, USA",
      description:
        "Reality will exist on a spectrum ranging from physical to virtual (VR), but a significant chunk of our time will be spent somewhere between those extremes, in some form of augmented reality (AR).",
    },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-2xl md:text-3xl relative z-10 lg:text-[56px] text-iconColor font-semibold font-monserat leading-tight md:text-center md:w-[80%] lg:w-[70%] mx-auto">
        What Did They
        <span className="text-clay leading-tight"> Say</span> about{" "}
        <span className="text-darkRed leading-tight">Metaverse!</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 mt-8 lg:mt-10 gap-1 md:gap-7 lg:gap-5 lg:px-20">
        {testimonies.map((testimony) => (
          <div
            key={testimony.name}
            className="space-y-3 border border-[#D9D9D9]/60 bg-bg p-4 min-md:p-5 rounded-xl shadow-md shadow-black/50"
          >
            <p className="text-sm text-light font-manrope font-medium md:text-xl lg:text-2xl">
              &ldquo;{testimony.description}&rdquo;
            </p>

            <h3 className="text-sm font-manrope font-semibold text-clay md:text-lg lg:text-xl">
              {testimony.name}
            </h3>
            <span className="text-xs font-manrope text-p md:text-base lg:text-lg">
              {testimony.location}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
