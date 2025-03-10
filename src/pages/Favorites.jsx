import { useContext } from "react";
import { DataStateContext, DataDispatchContext } from "../App";
import ItemList from "../components/body/ItemList";

const Favorites = () => {
  const { favorites } = useContext(DataStateContext);

  if (!favorites) {
    return <div>데이터 로딩중...!</div>;
  }
  return (
    <div className="Favorites">
      <ItemList title={"즐겨찾기"} data={favorites} />
    </div>
  );
};

export default Favorites;
