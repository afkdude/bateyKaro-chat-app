
import { Route, Routes } from 'react-router';
import './App.css';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import Users_Groups from './Components/Users_Groups';
import CreateGroups from './Components/CreateGroups';
import Groups from './Components/Groups';

function App() {
  return (
    <div className="App bg-[#dddedd]  min-h-[100vh]  flex justify-center items-center flex-col">
      {/* <MainContainer /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        < Route path='app' element={<MainContainer />}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='chat' element={<ChatArea />} />
          <Route path='users-groups' element={<Users_Groups />} />
          <Route path='groups' element={<Groups />} />

          
          <Route path='create-groups' element={<CreateGroups />} />
         

        </Route>
      </Routes>
     

    </div>
  );
}

export default App;
