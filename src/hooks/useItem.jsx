import { useContext, useState, useEffect } from "react";
import { DataStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useItem = (id) => {
  const nav = useNavigate();
  const [curItem, setCurItem] = useState();
  const { Items } = useContext(DataStateContext);
  console.log(`useItem 상의 데이터 : ${Items}`);
  useEffect(() => {
    if (!Items || Items.length === 0) return;

    const currentItem = Items.find((item) => String(item.id) === String(id));

    console.log(`입력받은 id : ${id}`);

    if (!currentItem) {
      window.alert("존재하지 않는 아이템 입니다.");
      nav(-1, { replace: true });
      return;
    }

    setCurItem(currentItem);
  }, [id]);

  return curItem;
};

export default useItem;
