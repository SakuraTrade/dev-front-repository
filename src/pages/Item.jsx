import { useParams, useNavigate } from "react-router-dom";
import useItem from "../hooks/useItem";
import Header from "../components/header/Header";
import Viewer from "../components/body/Viewer";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataStateContext, DataDispatchContext } from "../App";

const Item = () => {
  const params = useParams();
  const nav = useNavigate();
  const curItem = useItem(params.id);
  const [loading, setLoading] = useState(true);
  const { favorites, shoppingCarts } = useContext(DataStateContext);
  const { setFavorites, setShoppingCarts } = useContext(DataDispatchContext);

  const addToFavorites = (newItem) => {
    setFavorites([...favorites, newItem]);
    if (window.confirm("즐겨찾기로 이동하시겠습니까?")) {
      nav("/favorites");
    }
  };

  const addToCarts = (newItem) => {
    setShoppingCarts([...shoppingCarts, newItem]);
    if (window.confirm("장바구니로 이동하시겠습니까?")) {
      nav("/carts");
    }
  };

  useEffect(() => {
    if (curItem !== undefined) {
      setLoading(false);
    }
  }, [curItem]);

  if (loading) {
    return <div>데이터 로딩중...!</div>;
  }

  if (!curItem) {
    return <div>존재하지 않는 아이템입니다.</div>;
  }

  return (
    <div>
      <Header />
      <Viewer
        data={curItem}
        addToFavorites={addToFavorites}
        addToCarts={addToCarts}
      />
    </div>
  );
};

export default Item;
