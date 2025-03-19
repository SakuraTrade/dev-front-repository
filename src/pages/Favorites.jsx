import { useContext } from "react";
import { DataStateContext } from "../App";
import ItemList from "../components/body/ItemList";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import { selectFavorites } from "../context/FavoriteSlice";
import useFavorites from "../hooks/useFavorites";

const Favorites = () => {
  // const { favorites } = useContext(DataStateContext);
  const favorites = useSelector(selectFavorites);

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
