import axios from "axios";
// import get Data from "./app";
const getUser = async (userId) => {
  const { data: user } = await axios(
    " https://jsonplaceholder.typicode.com/users/ " + userId
  );
  const { data: userPost } = await axios(
    " https://jsonplaceholder.typicode.com/posts?userId= " + userId
  );
  const userInfo = [user, userPost];
  return userInfo;
};
console.log(await getUser(1));
// getData(await getUser(1));
