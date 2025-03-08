import { useContext } from "react";
import { DataStateContext } from "../App";
import Header from "../components/header/Header";
import Body from "../components/body/Body";

const Home = () => {
  const { Items } = useContext(DataStateContext);
  console.log(Items);
  return (
    <>
      <Header />
      <Body data={Items} />
    </>
  );
};

export default Home;
