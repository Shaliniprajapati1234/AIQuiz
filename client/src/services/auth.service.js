import { axiosClient } from "../lib/apiConfig"

export const signUpUser=async(userData)=>{
    //signup logic
    const response=await axiosClient.post('/auth/register',userData)
    return response.data
}

export const loginUser=async(loginData)=>{
    //login logic
    const response=await axiosClient.post('/auth/login',loginData)

     // Save JWT token
  localStorage.setItem("accessToken", response.data.accessToken);

  // Save loggged-in user data
  localStorage.setItem("user", JSON.stringify(response.data.user));

    return response.data
}

export const updateProfile = async (profileData) => {
  const response = await axiosClient.put("/users/profile", profileData);
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};


export const updatePassword = async (passwordData) => {
  const response = await axiosClient.put("/users/password", passwordData);
  return response.data;
};

export const changeUserRole = async (userId, roleName) => {
  const response = await axiosClient.post("/auth/change-user-role", { userId, role: roleName });
  return response.data;
};