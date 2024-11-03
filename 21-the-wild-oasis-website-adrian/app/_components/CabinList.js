import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList() {
  // noStore would opt out this compoent from caching
  // this is still experimental and has not been fully
  // implemented
  // noStore();

  console.log("Starting...");
  // CHANGE
  const cabins = await getCabins();
  console.log(cabins);

  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
