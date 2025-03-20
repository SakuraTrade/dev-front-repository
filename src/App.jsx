import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import Item from "./pages/Item";
import Favorites from "./pages/Favorites";
import Carts from "./pages/Carts";
// import Login from "./pages/login";
import useFavorites from "./hooks/useFavorites";
import useCarts from "./hooks/useCarts";
import Login from "./pages/login";
import Header from "./components/header/Header";

const Items = [
  {
    id: 1,
    price: 10000,
    quantity: 0,
    author: "A",
    createdDate: new Date(2025, 0, 1),
    title: "test_data1",
    content: "1번째 테스트 데이터입니다.",
    img_URI: [
      "/assets/test_data1.png",
      "/assets/test_data2.png",
      "/assets/test_data3.png",
      "/assets/test_data4.png",
      "/assets/test_data1.png",
    ],
    tag: ["ADULTS", "GOODS"],
  },
  {
    id: 2,
    price: 15000,
    quantity: 5,
    author: "B",
    createdDate: new Date(2025, 0, 2),
    title: "test_data2",
    content: "2번째 테스트 데이터입니다.",
    img_URI: ["/assets/test_data2.png"],
    tag: ["ADULTS", "DOUJINSHI", "SALES"],
  },
  {
    id: 3,
    price: 20000,
    quantity: 100,
    author: "C",
    createdDate: new Date(2025, 1, 1),
    title: "test_data3",
    content: "3번째 테스트 데이터입니다.",
    img_URI: ["/assets/test_data3.png"],
    tag: ["GOODS", "SALES"],
  },
  {
    id: 4,
    price: 25000,
    quantity: 1000,
    author: "D",
    createdDate: new Date(2025, 2, 5),
    title: "test_data4",
    content: "4번째 테스트 데이터입니다.",
    img_URI: ["/assets/test_data4.png"],
    tag: ["DOUJINSHI"],
  },
  {
    id: 5,
    price: 30000,
    quantity: 100,
    author: "E",
    createdDate: new Date(2025, 2, 1),
    title: "test_data5",
    content: "5번째 테스트 데이터입니다.",
    img_URI: ["/assets/test_data4.png"],
    tag: ["DOUJINSHI"],
  },
  {
    id: 1,
    price: 10000,
    quantity: 0,
    author: "A",
    createdDate: new Date(2025, 0, 1),
    title: "test_data1",
    content: "1번째 테스트 데이터입니다.",
    img_URI: [
      "/assets/test_data1.png",
      "/assets/test_data2.png",
      "/assets/test_data3.png",
      "/assets/test_data4.png",
      "/assets/test_data1.png",
    ],
    tag: ["ADULTS", "GOODS"],
  },
  {
    id: 2,
    price: 15000,
    quantity: 5,
    author: "B",
    createdDate: new Date(2025, 0, 2),
    title: "test_data2",
    content: "2번째 테스트 데이터입니다.",
    img_URI: ["/assets/test_data2.png"],
    tag: ["ADULTS", "DOUJINSHI", "SALES"],
  },
  {
    id: 3,
    price: 20000,
    quantity: 100,
    author: "C",
    createdDate: new Date(2025, 1, 1),
    title: "test_data3",
    content: "3번째 테스트 데이터입니다.",
    img_URI: ["/assets/test_data3.png"],
    tag: ["GOODS", "SALES"],
  },
  {
    id: 4,
    price: 25000,
    quantity: 1000,
    author: "D",
    createdDate: new Date(2025, 2, 5),
    title: "test_data4",
    content: "4번째 테스트 데이터입니다.",
    img_URI: ["/assets/test_data4.png"],
    tag: ["DOUJINSHI"],
  },
  {
    id: 5,
    price: 30000,
    quantity: 100,
    author: "E",
    createdDate: new Date(2025, 2, 1),
    title: "test_data5",
    content: "5번째 테스트 데이터입니다.",
    img_URI: ["/assets/test_data4.png"],
    tag: ["DOUJINSHI"],
  },
];

export const DataStateContext = createContext();
export const DataDispatchContext = createContext();

function App() {
  const { favorites, addToFavorites, deleteFavorites } = useFavorites();
  const { carts, addToCarts, deleteCarts } = useCarts();

  return (
    <>
      <DataStateContext.Provider value={{ Items, favorites, carts }}>
        <DataDispatchContext.Provider
          value={{ addToFavorites, deleteFavorites, addToCarts, deleteCarts }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items/:id" element={<Item />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </DataDispatchContext.Provider>
      </DataStateContext.Provider>
    </>
  );
}

export default App;
