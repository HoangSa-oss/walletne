import React, { useEffect } from "react";
import { message } from "antd";
import { GetUserInfo } from "../apicalls/users";
import { useNavigate } from "react-router-dom";


function ProtectedRoute(props) {
  const [userData,setUserData] = React.useState(null)

  const getData = async()=>{
    try {
        const response = await GetUserInfo()
        if(response.success){
            setUserData(response.data)
        }
    } catch (error) {
        message.error(error.message)
    } 
  }
  useEffect(()=>{
    getData()
  },[])

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     if (!user) {
  //       getData();
  //     }
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

  useEffect(()=>{
    

      getData();
    

  },[])
  return (
      <div>
        ProtecRouter
      </div>
  );
}

export default ProtectedRoute;
