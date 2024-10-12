import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import { useAppStore } from "./store";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

const AuthRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  
  return isAuthenticated ? <Navigate to="/chat" /> : children;
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const {userInfo, setUserInfo} = useAppStore();

  useEffect(() => {
    const getUserData = async () => {
      try {
        
      } catch (error) {
        console.error(error);
      }
    }

    if(!userInfo) {
      getUserData();
    } else {
      setLoading(false);
    }
  },[userInfo,setUserInfo]);

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
