import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import GroupComponent from "./Component";

const GroupContainer = () => {
  const { groupId } = useParams();
  const [group, setGroup] = useState([]);
  const getGroupData = async () => {
    try {
      const data = (await axios.post("http://localhost:8080/group", groupId))
        .data;
      setGroup(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return <GroupComponent groupId={groupId} group></GroupComponent>;
};

export default GroupContainer;
