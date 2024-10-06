import boltshoft from "../assets/boltShift.svg";
import featureDev from "../assets/featureDev.svg";
import globalBank from "../assets/globalBank.svg";
import lightbox from "../assets/lightbox.svg";
import spherule from "../assets/spherule.svg";
import nietz from "../assets/nietz.svg";
import Companies from "./helper/Companies";

const TrustedCompnies = () => {
  return (
    <section className=" md:my-16 space-y-6 mb-3">
      <p className="text-gray-500 text-center">Join 4,000+ companies already growing</p>

      <div className=" flex flex-wrap justify-between mx-14 md:mx-32  gap-y-4 gap-x-1">
        <Companies src={boltshoft} title="Boltshoft" />
        <Companies src={lightbox} title="Lightbox" />
        <Companies src={featureDev} title="Feather Dev" />
        <Companies src={spherule} title="Spherule" />
        <Companies src={globalBank} title="Global Bank" />
        <Companies src={nietz} title="Nietzsche" />
      </div>
    </section>
  );
};

export default TrustedCompnies;
