import Center from "./Center";
import Navigator from "./Navigator";
import Top from "./Top";

const Header = () => {
  return (
    <div className="w-full shadow-md">
      <Top />
      <Center />
      <Navigator />
    </div>
  );
};

export default Header;
