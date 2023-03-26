import { useCallback, useState } from "react";
import styled from "styled-components";

const GroupRegistComponent = ({ createGroup }) => {
  const [file, setFile] = useState();
  const [img, setImg] = useState("");

  const fileChange = useCallback((e) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setFile(e.currentTarget.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(e.currentTarget.files[0]);
      reader.onload = () => {
        if (reader.result) {
          setImg(reader.result);
        }
      };
    }
  }, []);

  return (
    <GroupRegistBox>
      <div className="GroupRegistBox_innerBox">
        <div className="GroupRegistBox_left">
          <div className="GroupRegistBox_left_FileBox">
            {img ? (
              <div className="GroupRegistBox_left_file">
                <img src={img.toString()} />
              </div>
            ) : (
              <div className="GroupRegistBox_left_noFile">
                NFT 그룹의 대표 이미지를 설정하십시오
              </div>
            )}
          </div>
          <div>
            <input
              type="file"
              onChange={fileChange}
              className="GroupRegistBox_left_fileSelect"
            />
          </div>
        </div>
        <div className="GroupRegistBox_right">
          <div className="GroupRegistBox_right_textBox">
            <div className="GroupRegistBox_right_textBox_block">
              <div className="GroupRegistBox_right_textBox_block_text">
                NFT 그룹 등록자 지갑
              </div>
              <div className="GroupRegistBox_right_textBox_block_input">
                <input type="text"></input>
              </div>
            </div>
            <div className="GroupRegistBox_right_textBox_block">
              <div className="GroupRegistBox_right_textBox_block_text">
                NFT 그룹명
              </div>
              <div className="GroupRegistBox_right_textBox_block_input">
                <input type="text"></input>
              </div>
            </div>
            <div className="GroupRegistBox_right_textBox_block">
              <div className="GroupRegistBox_right_textBox_block_text">
                테마
              </div>
              <div className="GroupRegistBox_right_textBox_block_input">
                <input type="text"></input>
              </div>
            </div>
          </div>
          <div className="GroupRegistBox_right_buttonBox">
            <div className="GroupRegistBox_right_buttonBox_cancel">
              <button>취소</button>
            </div>
            <div className="GroupRegistBox_right_buttonBox_submit">
              <button
                onClick={() => {
                  createGroup();
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </GroupRegistBox>
  );
};

export default GroupRegistComponent;

const GroupRegistBox = styled.div`
  display: flex;
  justify-content: center;

  .GroupRegistBox_innerBox {
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin-top: 50px;

    .GroupRegistBox_left {
      .GroupRegistBox_left_FileBox {
        border: 1px solid black;
        width: 250px;
        height: 300px;
        display: flex;
        justify-content: center;

        .GroupRegistBox_left_file {
          display: flex;
          justify-content: center;
          flex-direction: column;

          img {
            width: 100%;
          }
        }
        .GroupRegistBox_left_noFile {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      }
      .GroupRegistBox_left_fileSelect {
        margin-top: 20px;
      }
    }

    .GroupRegistBox_right {
      .GroupRegistBox_right_textBox {
        .GroupRegistBox_right_textBox_block {
          margin-top: 20px;
          .GroupRegistBox_right_textBox_block_text {
            margin-bottom: 10px;
            text-align: left;
          }
          .GroupRegistBox_right_textBox_block_input {
            background-color: #ced4da;
            border-radius: 3px;
            padding: 3px;

            input {
              width: 300px;
              border: none;
              background-color: transparent;
            }
          }
        }
      }

      .GroupRegistBox_right_buttonBox {
        display: flex;
        justify-content: end;
        margin-top: 20px;

        .GroupRegistBox_right_buttonBox_cancel {
        }

        .GroupRegistBox_right_buttonBox_submit {
          margin-left: 10px;
        }
      }
    }
  }
`;
