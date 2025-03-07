import { useContext } from "react";
import { DataStateContext } from "../App";
import Header from "../components/header/Header";
import Body from "../components/body/Body";

const Home = () => {
  const data = useContext(DataStateContext);
  console.log(data);
  return (
    <>
      <Header />
      <Body data={data} />
    </>
  );
};

export default Home;
