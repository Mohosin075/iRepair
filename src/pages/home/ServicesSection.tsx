import Container from "@/components/Container";
import BateryReplacement from "@/components/ServiceTiles/BateryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";

function ServicesSection() {
  return (
    <Container>
      <div className="text-center my-40">
        <h1>Services That we Provide.</h1>
        <p className="max-w-[80ch] mx-auto mt-10 mb-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          quaerat doloribus cumque libero nam impedit quod incidunt est, nobis
          blanditiis. Magni reiciendis ipsum dolor quos.
        </p>
        <div className="grid grid-cols-12 gap-5">
          <BateryReplacement></BateryReplacement>
          <ChipsetReplacement></ChipsetReplacement>
          <DataRecovery></DataRecovery>
          <div className="h-56 bg-red-500 col-span-12 rounded-lg"></div>
          <div className="h-56 bg-red-500 col-span-12 md:col-span-6 lg:col-span-4 rounded-lg"></div>
          <div className="h-56 bg-red-500 col-span-12 md:col-span-6 lg:col-span-4 rounded-lg"></div>
          <div className="h-56 bg-red-500 col-span-12 lg:col-span-4 rounded-lg"></div>
        </div>
      </div>
    </Container>
  );
}

export default ServicesSection;
