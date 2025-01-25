import { useAppContext } from "./useContext";

export const login = () => {
  const user = {
    id: "1",
    name: "John Doe",
    email: "asad@gmail.com",
    avatar:
      "https://res.cloudinary.com/dmvht7o8m/image/upload/v1737711309/download_bjkj2g.png",
  };
  return user;
};

export const logout = () => {
  return null;
};
