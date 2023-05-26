import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserCollectionComponent from "./Component";

const UserCollectionContainer = ({ web3, account }) => {
  return (
    <>
      <UserCollectionComponent web3={web3} userAccount={account} />
    </>
  );
};
export default UserCollectionContainer;
