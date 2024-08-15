import styled from "styled-components";
import NavbarMenuList from "./NavbarMenuList";
import { useNavigate } from "react-router-dom";
import SearchModal from "./SearchModal";
import { useRecoilState } from "recoil";
import { SearchModalState } from "../atom";

//메인 페이지) Navbar 전체부분
const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchModal, setIsSearchModal] = useRecoilState(SearchModalState);

  return (
    <Wrap>
      <div className="inner">
        <NavLeft>
          <h2 onClick={() => navigate("/")}>wanted</h2>
          <ul>
            <NavbarMenuList />
          </ul>
        </NavLeft>
        {isSearchModal && <SearchModal />}

        <NavRight>
          <ul>
            <li onClick={() => setIsSearchModal(true)}>검색</li>
            <li>알림</li>
            <li onClick={() => navigate("/profile")}>프로필</li>
            <li>
              <button>기업서비스</button>
            </li>
          </ul>
        </NavRight>
      </div>
    </Wrap>
  );
};

//z-index 사용 10 ~
const Wrap = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;

  .inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
`;

const NavLeft = styled.div`
  display: flex;
  gap: 50px;
  cursor: pointer;

  ul {
    display: flex;
    gap: 30px;
    font-weight: bold;
  }
`;

const NavRight = styled.div`
  display: flex;
  cursor: pointer;
  ul {
    display: flex;
    gap: 15px;
  }

  button {
    padding: 8px 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export default Navbar;
