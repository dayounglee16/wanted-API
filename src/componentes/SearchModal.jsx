import { data } from "../data";
import styled from "styled-components";
import { SearchModalState } from "../atom";
import { useRecoilState } from "recoil";

const SearchModal = () => {
  const [searchModal, setSearchModal] = useRecoilState(SearchModalState);

  return (
    <Wrap>
      {searchModal && (
        <div className="searchModalInner">
          <div className="closeBox">
            <button onClick={() => setSearchModal(false)}>X</button>
          </div>
          <input type="text" placeholder="검색어를 입력해 주세요" />
          <div className="searchWordBox">
            <h3>
              인기 검색어<span>01:00 기준</span>
            </h3>
            <ul className="searchWordData">
              {data.searchWordData.map((search) => (
                <li className="searchWordItem" key={search.id}>
                  <b>{search.id}</b>
                  {search.searchItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Wrap>
  );
};

export default SearchModal;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow-y: hidden;
  z-index: 100;

  .searchModalInner {
    max-width: 700px;
    margin: 0 auto;
    .closeBox {
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button {
        border: none;
        background-color: rgba(0, 0, 0, 0);
        font-size: 22px;
        color: #ccc;
      }
    }
    input {
      width: 100%;
      padding: 15px 20px;
      border-radius: 10px;
      border: 1px solid #ccc;
      font-size: 16px;
      outline: none;

      &:focus {
        border: 1px solid #1445e3;
      }

      &::placeholder {
        color: #ccc;
      }
    }
    .searchWordBox {
      width: 100%;
      margin-top: 15px;

      h3 > span {
        margin-left: 10px;
        font-size: 14px;
        color: #999;
        font-weight: normal;
      }

      .searchWordData {
        display: flex;
        flex-wrap: wrap;
        .searchWordItem {
          display: flex;
          line-height: 40px;
          gap: 10px;
          width: 50%;
          font-weight: bold;
          color: #555;
          cursor: pointer;
          b {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
