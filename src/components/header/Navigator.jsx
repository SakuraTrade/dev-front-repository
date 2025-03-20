import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav className="w-full bg-gray-700">
      <ul className="flex justify-center items-center text-white list-none p-0 m-0 ">
        <li className="relative justify-center px-5 py-2 hover:bg-gray-500  cursor-pointer">
          <Link to={"/?type=NEW"} className="text-base no-underline">
            신규입고
          </Link>
        </li>
        <li className="relative  justify-center px-5 py-2 hover:bg-gray-500 cursor-pointer dropdown">
          <Link to={"/?type=PICKUP"} className="text-base no-underline">
            Pick Up 상품
          </Link>
        </li>
        <li className="group relative px-5 py-2 hover:bg-gray-500 dropdown">
          <Link to={"/?ca_id=10000"}>일러스트북/동인지</Link>
          <div className="min-w-32 group-hover:block dropdown-menu absolute hidden h-auto w-full px-2 py-2 text-black border border-black bg-white">
            <ul className="dropdown-menu">
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=10001"}>블루 아카이브</Link>
              </li>
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=10002"}>소녀 전선</Link>
              </li>
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=10003"}>명조</Link>
              </li>
            </ul>{" "}
          </div>
        </li>
        <li className="group relative px-5 py-2 hover:bg-gray-500 dropdown">
          <Link to={"/?ca_id=20000"}>굿즈</Link>
          <div className="min-w-32 group-hover:block dropdown-menu absolute hidden h-auto px-2 py-2 text-black border border-black bg-white">
            <ul className="dropdown-menu">
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=20001"}>블루 아카이브</Link>
              </li>
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=20002"}>소녀 전선</Link>
              </li>
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=20003"}>명조</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="group relative px-5 py-2 hover:bg-gray-500 dropdown">
          <Link to={"/?ca_id=1000"}>작가별 분류</Link>
          <div className="min-w-32 group-hover:block dropdown-menu absolute hidden h-auto w-full px-2 py-2 text-black border border-black bg-white">
            <ul className="dropdown-menu">
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=1001"}>A 작가</Link>
              </li>
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=1002"}>B 작가</Link>
              </li>
              <li className="hover:bg-gray-300">
                <Link to={"/?ca_id=1003"}>C 작가</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="group relative px-5 py-2 hover:bg-gray-500 dropdown">
          <Link to={"/?type=ADULTS"}>19세</Link>
        </li>
        <li className="group relative px-5 py-2 hover:bg-gray-500 dropdown">
          <a>고객센터</a>
        </li>
        <li className="group relative px-5 py-2 hover:bg-gray-500 dropdown">
          <Link to={"/?type=SALE"}>HOT! 세일</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
