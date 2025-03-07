import { useParams, useNavigate } from "react-router-dom";
import useItem from "../hooks/useItem";
import Header from "../components/header/Header";
import Viewer from "../components/body/Viewer";
const Item = () => {
  const params = useParams();
  const nav = useNavigate();
  const curItem = useItem(params.id);
  console.log(curItem);

  if (!curItem) {
    return <div>데이터 로딩중...!</div>;
  }
  return (
    <div>
      <Header />
      <Viewer data={curItem} />
    </div>
  );
};

export default Item;
