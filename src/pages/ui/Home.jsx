import { BirdSpecies } from "../../shared/ui/birdSpecies/BirdSpecies";
import { AssemblyEat } from "../../shared/ui/eat/AssemblyEat";
import { AssemblyIzba } from "../../shared/ui/izba/AssemblyIzba";
import { Mixes } from "../../shared/ui/productCard/Mixes";
import { AssemblyKatalog } from "../../widgets/katalog/AssemblyKatalog";

export const Home = () => {
  return (
    <div>
      <AssemblyKatalog />
      <Mixes />
      <BirdSpecies />
      <AssemblyEat />
      <AssemblyIzba />
    </div>
  );
};
