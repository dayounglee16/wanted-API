import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//메인 페이지) 아이콘 메뉴
const IconMenuList = ({ photos }) => {
  const navigate = useNavigate();

  return (
    <Wrap>
      {photos.slice(0, 9).map((icon) => {
        return (
          <IconBox
            key={icon.id}
            onClick={() => navigate(icon.id === 1 ? "/shortcutItem" : null)}
          >
            <img
              className="iconImg"
              src={icon.url}
              alt={icon.title}
              width="80%"
            />
            <li className="iconTxt">{icon.title}</li>
          </IconBox>
        );
      })}
    </Wrap>
  );
};

export default IconMenuList;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  margin: 130px 0 80px 0;
`;

const IconBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .iconImg {
    cursor: pointer;
  }

  .iconTxt {
    color: #999;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }
`;
