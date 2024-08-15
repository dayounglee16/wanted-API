import styled from "styled-components";
import PositionSlideList from "./PositionSlideList";

// 메인 페이지) 내가 관심 있을 만한 포지션 전체부분
const InstrastPosition = ({ photos }) => {
  return (
    <PositionTitle>
      <MyPosition>
        <h2>내가 관심 있을 만한 포지션</h2>
        <div className="allListBtn">
          <b>전체보기</b>
          <span className="positionPrev swiper-button-prev"></span>
          <span className="positionNext swiper-button-next"></span>
        </div>
      </MyPosition>
      <div>
        <PositionSlideList photos={photos} />
      </div>
    </PositionTitle>
  );
};

export default InstrastPosition;

const PositionTitle = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
`;

const MyPosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;

  .allListBtn > b {
    margin-right: 70px;
  }

  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: auto !important;
    right: 35px !important;
    color: #333;
  }

  .allListBtn > .positionPrev:after {
    padding: 5px 8px;
    border: 1px solid #ccc;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
    border-right: none;
    font-size: 12px;

    &:hover {
      background-color: #eee;
    }
  }

  .allListBtn > .positionNext:after {
    padding: 5px 8px;
    border: 1px solid #ccc;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    font-size: 12px;

    &:hover {
      background-color: #eee;
    }
  }
`;
