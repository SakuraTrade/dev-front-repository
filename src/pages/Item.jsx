import { useParams, useNavigate } from "react-router-dom";
import useItem from "../hooks/useItem";
import Header from "../components/header/Header";
import Viewer from "../components/body/Viewer";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataStateContext, DataDispatchContext } from "../App";

const Item = () => {
  const params = useParams();
  const curItem = useItem(params.id);
  const [loading, setLoading] = useState(true);
  const { addToFavorites, addToCarts } = useContext(DataDispatchContext);

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
    <div className="w-screen m-auto">
      <Viewer
        data={curItem}
        addToFavorites={addToFavorites}
        addToCarts={addToCarts}
      />
    </div>
  );
};

export default Item;
