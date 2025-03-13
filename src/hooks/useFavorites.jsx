import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const nav = useNavigate();

  const addToFavorites = (newItem) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((item) => item.id === newItem.id)) {
        return prevFavorites; // 이미 존재하면 상태 변경하지 않음
      }
      return [...prevFavorites, newItem];
    });
    if (window.confirm("즐겨찾기로 이동하시겠습니까?")) {
      nav("/favorites");
    }
  };

  const deleteFavorites = (itemId) => {
    if (!favorites.length) return;
    const newItems = favorites.filter((item) => item.id !== itemId);
    setFavorites(newItems);
    window.alert("삭제 되었습니다.");
  };

  return { favorites, addToFavorites, deleteFavorites };
};

export default useFavorites;
