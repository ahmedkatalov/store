import { useDispatch, useSelector } from "react-redux";
import { birdSpecies } from "../../moks/birdSpecies";
import { DetailedButton } from "../../model/DetailedButton";
import { Spin } from "antd";
import { MoreButton } from "../MoreButton";
import "@/shared/ui/birdSpecies/birdSpecies.css";
import "@/shared/ui/styles/media.css";
import {
  setBirdVisibleCount,
  setBirdLoading,
} from "../../../features/model/reducers/birdVisibleReducer";
export const BirdSpecies = () => {
  const dispatch = useDispatch();
  const visibleCount = useSelector((state) => state.bird.visibleCount);
  const loading = useSelector((state) => state.bird.loading);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const filteredProducts = birdSpecies.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const handleLoadMore = () => {
    dispatch(setBirdLoading(true));
    setTimeout(() => {
      dispatch(setBirdVisibleCount());
      dispatch(setBirdLoading(false));
    }, 2000);
  };

  return (
    <div className="">
      {!searchQuery && (
        <div className="headCard">
          <span>Виды птиц</span>{" "}
        </div>
      )}
      {visibleCount < filteredProducts.length && (
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? <Spin /> : <MoreButton />}
        </button>
      )}
      <div className="card-container">
        {filteredProducts.slice(0, visibleCount).map((item, id) => (
          <div key={id} className="card">
            <img src={item.img} alt="bird" />
            <h3>{item.name}</h3>
            <p>{item.descriptions}</p>
            <DetailedButton />
          </div>
        ))}
      </div>
    </div>
  );
};
