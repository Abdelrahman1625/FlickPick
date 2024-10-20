import { Routes , Route, Navigate } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/home/HomePage"
import Footer from "./components/footer"
import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/authUser"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import SearchPage from "./pages/SearchPage"
import SearchHistoryPage from "./pages/SearchHistoryPage"
function App() {
  const {user, isCheckingAuth,authCheck} = useAuthStore();
  useEffect(() =>{
    authCheck();
  },[authCheck]);
  if(isCheckingAuth){
    return(
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10"/>
        </div>
      </div>
    )
  }
  return (
    <>
    <Routes>
      <Route path = '/' element = {<HomePage/>} />
      <Route path = '/login' element = {user? <Navigate to={"/"}/> : <LoginPage/> } />
      <Route path = '/signup' element = {user? <Navigate to={"/"}/> : <SignUpPage/>} />
      <Route path = '/search' element = {user? <Navigate to={"/"}/> : <SearchPage/>} />
      <Route path = '/history' element = {user? <Navigate to={"/"}/> : <SearchHistoryPage/>} />
    </Routes>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
