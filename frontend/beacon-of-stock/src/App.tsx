import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/nav/Nav';
// import Home from './pages/home/Home';
import BacktestMain from './pages/home/backtest/BacktestMain';
import BacktestResult from './pages/home/backtest/result/BacktestResult';
import CommunityMain from './pages/community/CommunityMain';
import NotLoginHome from './pages/home/NotLoginHome';
import { WriteCommu } from './pages/community/WriteCommu';
import { Detail } from './pages/community/Detail';
// import { IndexPage } from './pages/home/IndexPage';
import { LoginIndex } from './component/login/LoginIndex';
import { Contests } from './pages/community/contests/Contests';
import { CommunityDibs } from './pages/community/CommunityDibs';
import Login from './component/login/Login';
import { Bookmark } from './pages/profile/bookmark/Bookmark';
import { MyProfile } from './pages/profile/MyProfile';
import { Strategy } from './pages/profile/strategy/Strategy';
import { useLoginStore } from './store/store';

const App = () => {
  const { isLogin } = useLoginStore();
  // console.log(isLogin)
  return (
    <>
      <BrowserRouter>
        <Nav />
        <hr className='bg-[#808080] h-[1px] border-0 opacity-25' />
        <Routes>
          {/* 로그인 여부에 따라 보이는 화면 다르게 구성 */}
          {isLogin ? (
            <>
              {/* 로그인 된 상태 */}
              <Route path='/' element={<BacktestMain />} />
              <Route path='/index' element={<LoginIndex />} />
              <Route path='/result' element={<BacktestResult />} />
              <Route path='/community' element={<CommunityMain />}>
                <Route path='write' element={<WriteCommu />} />
                <Route path='dibs' element={<CommunityDibs />} />
                <Route path='contests/:id' element={<Contests />} />
                <Route path='datail/:id' element={<Detail />} />
              </Route>
              <Route path='/myProfile' element={<MyProfile />} />
              <Route path='/strategy' element={<Strategy />} />
              <Route path='/bookmark' element={<Bookmark />} />
            </>
          ) : (
            <>
              <Route path='/' element={<NotLoginHome />} />
              <Route path='/login' element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;