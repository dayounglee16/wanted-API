import { useState } from "react";
import { data } from "../data";
import styled from "styled-components";

//메인 페이지) Navbar 메뉴리스트
const NavbarMenuList = () => {
  const [ismouse, setIsMouse] = useState(false);

  return (
    <>
      {data.menuListData.map((menu) => (
        <MenuItem
          key={menu.id}
          onMouseOver={() => setIsMouse(true)}
          onMouseOut={() => setIsMouse(false)}
        >
          {menu.menuItem}
        </MenuItem>
      ))}
      {ismouse && (
        <MenuSlide
          onMouseOver={() => setIsMouse(true)}
          onMouseOut={() => setIsMouse(false)}
        >
          <ul className="category">
            <li>
              <b>직군전체</b>
            </li>
            {data.categoryMenuData.map((categoryItem) => (
              <li key={categoryItem.id}>{categoryItem.menuItem}</li>
            ))}
          </ul>
          <div className="categoryItem">
            <h4>직군을 먼저 선택하면 상세 직무를 볼 수 있어요.</h4>
          </div>
        </MenuSlide>
      )}
    </>
  );
};

export default NavbarMenuList;

//z-index사용 50~
const MenuItem = styled.li`
  cursor: pointer;
`;

const MenuSlide = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 400px;
  padding: 10px 19.7%;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  transition: top 0.5s ease;
  z-index: 50;

  .category {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 0;
    overflow-y: scroll;
    cursor: pointer;
    font-size: 12px;
  }
  .categoryItem {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    color: #666;
  }
`;
