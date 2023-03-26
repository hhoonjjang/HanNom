import { useState } from "react";
import { useDispatch } from "react-redux";
import { accountThunk } from "./account.js";
import { usernameThunk } from "./username.js";
import Web3 from "web3";
import axios from "axios";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const event = async () => {
    if (window.ethereum) {
      // document.cookie = "login" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      // login은 쿠키의 이름이다. event 메서드는 새로 접속하거나 접속 중인 지갑이 바뀔 때 실행하는데, 새로운 쿠키를 만들기 위해 기존 쿠키를 제거한다.
      console.log(document.cookie);

      const [_account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("_account : ", _account);

      const user = (
        await axios.post("http://localhost:8080/api/user/login", {
          account: _account,
        })
      ).data.userName;

      console.log("user : ", user);

      if (_account) {
        dispatch(accountThunk({ account: _account }));
        dispatch(usernameThunk({ username: user }));
      }
    }
  };

  const login = async () => {
    try {
      if (window.ethereum) {
        const _web3 = new Web3(window.ethereum);
        setWeb3(_web3);
        event();

        window.ethereum.on("accountsChanged", async () => {
          event();
        });
      } else {
        console.log("MetaMask is not exist");
      }
    } catch (error) {
      window.ethereum.on("connect", async () => {
        event();
      });
      if (error.code == -32002) {
        alert(
          "이미 메타마스크에 로그인 요청을 보냈습니다.\n메타마스크에서 로그인을 마쳐주세요."
        );
      }
    }
    return;
  };

  return { web3, login };
};
