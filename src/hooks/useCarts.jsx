import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useCarts = () => {
  const [carts, setCarts] = useState([]);
  const nav = useNavigate();

  const addToCarts = (newItem) => {
    setCarts((prevCarts) => {
      if (prevCarts.some((item) => item.id === newItem.id)) {
        return prevCarts;
      }
      return [...prevCarts, newItem];
    });
    if (window.confirm("장바구니로 이동하시겠습니까?")) {
      nav("/carts");
    }
  };

  const deleteCarts = (itemId) => {
    if (!carts.length) return;
    const newItems = carts.filter((item) => item.id !== itemId);
    setCarts(newItems);
    window.alert("삭제 되었습니다.");
  };

  return [carts, addToCarts, deleteCarts];
};

export default useCarts;
