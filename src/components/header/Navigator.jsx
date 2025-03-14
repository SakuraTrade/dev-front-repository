import "./Navigator.css";

const Navigator = () => {
  return (
    <nav className="Navigator">
      <ul className="menu">
        <li>
          <a>신규입고</a>
        </li>
        <li>
          <a>Pick Up 상품</a>
        </li>
        <li className="dropdown">
          <a>일러스트북/동인지</a>
          <ul className="dropdown-menu">
            <li>
              <a>블루 아카이브</a>
            </li>
            <li>
              <a>소녀 전선</a>
            </li>
            <li>
              <a>명조</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a>굿즈</a>
          <ul className="dropdown-menu">
            <li>
              <a>블루 아카이브</a>
            </li>
            <li>
              <a>소녀 전선</a>
            </li>
            <li>
              <a>명조</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a>작가별 분류</a>
          <ul className="dropdown-menu">
            <li>
              <a>A 작가</a>
            </li>
            <li>
              <a>B 작가</a>
            </li>
            <li>
              <a>C 작가</a>
            </li>
          </ul>
        </li>
        <li>
          <a>19세</a>
        </li>
        <li>
          <a>고객센터</a>
        </li>
        <li>
          <a>HOT! 세일</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
