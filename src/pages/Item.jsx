import { useParams, useNavigate } from "react-router-dom";
import useItem from "../hooks/useItem";
import Header from "../components/header/Header";
import Viewer from "../components/body/Viewer";
import { useEffect, useState } from "react";
const Item = () => {
  const params = useParams();
  const nav = useNavigate();
  const curItem = useItem(params.id);
  console.log(curItem);
  const [loading, setLoading] = useState(true);

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
      <Viewer data={curItem} />
    </div>
  );
};

export default Item;
