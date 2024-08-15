import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { AddBookMarkItemState } from "../atom";

//메인 페이지) 내가 관심 있을 만한 포지션 (합격보상금 100만원, 북마크 기능)
const PositionBookMark = ({ positionItem }) => {
  const [addBookMarkItem, setAddBookMarkItem] =
    useRecoilState(AddBookMarkItemState);

  const AddpositionBookMark = (positionItem) => {
    if (
      addBookMarkItem.find(
        (bookMarkItem) => bookMarkItem.id === positionItem.id
      )
    ) {
      setAddBookMarkItem(
        addBookMarkItem.filter(
          (bookMarkItem) => bookMarkItem.id !== positionItem.id
        )
      );
    } else {
      setAddBookMarkItem([...addBookMarkItem, positionItem]);
    }
  };

  const isBookmarked = addBookMarkItem.find(
    (bookMarkItem) => bookMarkItem.id === positionItem.id
  );
  return (
    <Wrap>
      <span>합격보상금 100만원</span>
      <FontAwesomeIcon
        className="buttons"
        icon={isBookmarked ? faSolidBookmark : faBookmark}
        size="xl"
        onClick={() => AddpositionBookMark(positionItem)}
      />
    </Wrap>
  );
};

export default PositionBookMark;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`;
