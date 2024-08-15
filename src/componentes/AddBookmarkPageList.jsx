import { useRecoilState } from "recoil";
import { AddBookMarkItemState } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

//서브 페이지) 북마크 페이지에 추가된 회사 리스트
const AddBookmarkPageList = () => {
  const [addBookMarkItem, setAddBookMarkItem] =
    useRecoilState(AddBookMarkItemState);

  const clickDelete = (bookMarkItem) => {
    setAddBookMarkItem(
      addBookMarkItem.filter((deleteItem) => deleteItem.id !== bookMarkItem.id)
    );
  };

  return (
    <Wrap>
      {addBookMarkItem.length !== 0 ? (
        addBookMarkItem.map((bookMarkItem, i) => (
          <div key={i} className="bookMarkBox">
            <Image>
              <FontAwesomeIcon
                className="buttons"
                icon={faSolidBookmark ? faSolidBookmark : faBookmark}
                size="xl"
                onClick={() => clickDelete(bookMarkItem)}
              />
            </Image>
            <div className="bookMarkTitle">
              <h3>{bookMarkItem.title}</h3>
              <h5>{bookMarkItem.subTitle}</h5>
              <h5>{bookMarkItem.position}</h5>
              <h5 className="country">{bookMarkItem.country}</h5>
              <h5>{bookMarkItem.location}</h5>
            </div>
          </div>
        ))
      ) : (
        <NullBg>
          <h2>아직 북마크한 포지션이 없습니다.</h2>
        </NullBg>
      )}
    </Wrap>
  );
};

export default AddBookmarkPageList;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .bookMarkBox {
    width: 100%;
    max-width: 24%;
    cursor: pointer;
    margin-top: 10px;
  }

  .bookMarkTitle {
    margin-top: 10px;
    font-weight: bold;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2px;

    h5 {
      font-size: 13px;
    }
    .country {
      color: #999;
    }
  }
`;

const Image = styled.div`
  aspect-ratio: 3/2;
  border-radius: 5px;
  background-color: #999;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  color: rgb(51, 102, 255);
`;

const NullBg = styled.div`
  width: 100vw;
  height: 70vh;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
