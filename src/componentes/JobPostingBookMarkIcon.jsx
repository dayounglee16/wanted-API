import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";

import { useRecoilState } from "recoil";
import { AddBookMarkItemState } from "../atom";

const JopPostingBookMarkIcon = ({ companyItem }) => {
  const [addBookMarkItem, setAddBookMarkItem] =
    useRecoilState(AddBookMarkItemState);

  const clickAddBookMark = () => {
    if (
      addBookMarkItem.find((bookMarkItem) => bookMarkItem.id === companyItem.id)
    ) {
      setAddBookMarkItem(
        addBookMarkItem.filter(
          (bookMarkItem) => bookMarkItem.id !== companyItem.id
        )
      );
    } else {
      setAddBookMarkItem([...addBookMarkItem, companyItem]);
    }
  };

  const isIncludes = addBookMarkItem.find(
    (bookMarkItem) => bookMarkItem.id === companyItem.id
  );

  return (
    <>
      <FontAwesomeIcon
        className="buttons"
        icon={isIncludes ? faSolidBookmark : faBookmark}
        size="xl"
        onClick={clickAddBookMark}
      />
    </>
  );
};

export default JopPostingBookMarkIcon;
