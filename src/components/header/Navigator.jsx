import "./Navigator.css";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav className="Navigator">
      <ul className="menu">
        <li>
          <Link to={"/?type=NEW"}>신규입고</Link>
        </li>
        <li>
          <Link to={"/?type=PICKUP"}>Pick Up 상품</Link>
        </li>
        <li className="dropdown">
          <Link to={"/?ca_id=10000"}>일러스트북/동인지</Link>
          <ul className="dropdown-menu">
            <li>
              <Link to={"/?ca_id=10001"}>블루 아카이브</Link>
            </li>
            <li>
              <Link to={"/?ca_id=10002"}>소녀 전선</Link>
            </li>
            <li>
              <Link to={"/?ca_id=10003"}>명조</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to={"/?ca_id=20000"}>굿즈</Link>
          <ul className="dropdown-menu">
            <li>
              <Link to={"/?ca_id=20001"}>블루 아카이브</Link>
            </li>
            <li>
              <Link to={"/?ca_id=20002"}>소녀 전선</Link>
            </li>
            <li>
              <Link to={"/?ca_id=20003"}>명조</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to={"/?ca_id=1000"}>작가별 분류</Link>
          <ul className="dropdown-menu">
            <li>
              <Link to={"/?ca_id=1001"}>A 작가</Link>
            </li>
            <li>
              <Link to={"/?ca_id=1002"}>B 작가</Link>
            </li>
            <li>
              <Link to={"/?ca_id=1003"}>C 작가</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/?type=ADULTS"}>19세</Link>
        </li>
        <li>
          <a>고객센터</a>
        </li>
        <li>
          <Link to={"/?type=SALE"}>HOT! 세일</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
