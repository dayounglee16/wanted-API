import styled from "styled-components";
import { data } from "../data";

// 서브 페이지) 채용공고 페이지 상단 태그부분
const JobPostingPageTagSelect = () => {
  return (
    <Wrap>
      <div className="inner">
        <div className="listSelectBox">
          <div className="listSelect">
            <h2>
              개발 ∙ 프론트엔드 개발자 외 2
              <select>
                <option></option>
              </select>
            </h2>
            <h2>
              신입~1년
              <select>
                <option></option>
              </select>
            </h2>
          </div>
          <div className="listSelectBtn">
            <button>추천순</button>
            <button>최신순</button>
            <button>인기순</button>
          </div>
        </div>
        <div>
          <div className="tagBox">
            <DropDown>
              <button>태그전체</button>
              <select>
                <option>한국</option>
              </select>
              <select>
                <option>기술스택</option>
              </select>
            </DropDown>
            <TagList>
              {data.tagNameData.map((tagItem) => (
                <button key={tagItem.id}>{tagItem.tagName}</button>
              ))}
            </TagList>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default JobPostingPageTagSelect;

const Wrap = styled.div`
  width: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  background-color: rgba(255, 255, 255);
  .inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .listSelectBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 50px;

    .listSelect {
      display: flex;
      gap: 10px;
      font-size: 16px;

      h2 {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      select {
        width: 20px;
        height: 20px;
        border: 1px solid #999;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        padding-right: 5px;
      }

      button {
        font-size: 20px;
        background-color: #fff;
        padding-left: 5px;
      }
    }
    .listSelectBtn {
      display: flex;
      gap: 10px;
      button {
        padding: 10px;
        border-radius: 5px;
      }
    }
  }
  .tagBox {
    margin-top: 70px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    button {
      padding: 8px;
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #f1f1f1;
      &:hover {
        background-color: #eeeeee9b;
      }
    }
  }
`;

const DropDown = styled.div`
  display: flex;
  gap: 10px;
  border-right: 1px solid #eee;
  padding-right: 20px;

  select {
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    cursor: pointer;

    &:hover {
      background-color: #eeeeee9b;
    }
  }
`;
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
