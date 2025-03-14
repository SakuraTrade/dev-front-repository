import { useContext } from "react";
import { DataStateContext } from "../App";
import Body from "../components/body/Body";
import { useParams } from "react-router-dom";

const Home = () => {
  const { Items } = useContext(DataStateContext);
  return (
    <>
      <Body data={Items} />
    </>
  );
};

export default Home;
