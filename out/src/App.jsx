import "./assets/css/reset.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./page/Home";
import MusicChart from "./page/MusicChart";
import ItemInfoPage from "./components/ItemInfoPage";
import MusicList from "./components/MusicList";
import Searchpage from "./components/Searchpage";
import List from "./file/List";
import ListQna from "./file/ListQna";
import ListItem from "./file/ListItem";
import Storage from "./user/storage";
import Login from "./login/Login";
import JoinLogin from "./login/JoinLogin";
import JoinLoginTable from "./login/JoinLoginTable";
import SignUpCompleted from "./login/SignUpCompleted";
import FooterPolicy from "./footer/FooterPolicy";
import NavBar from "./components/NavBar";
import LyricsDisplay from "./file/LyricsDisplay";
import Eventbanner from "./components/Eventbanner";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <HashRouter> */}
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":searchtext" element={<Searchpage />} />
            <Route path="/event" element={<Eventbanner />} />
          </Route>
          <Route path="/chart">
            <Route index element={<MusicChart />} />
            <Route path=":chartid/:listname" element={<ItemInfoPage />} />
            <Route path=":listname/:text/:type" element={<MusicList />} />
          </Route>

          <Route path="/list">
            <Route index element={<List />} />
            <Route path="QNA" element={<ListQna />} />
            <Route path=":listID" element={<ListItem />} />
          </Route>
          <Route path="/storage" element={<Storage />} />
          <Route path="/Login">
            <Route index element={<Login />} />
            <Route path="/Login/join" element={<JoinLogin />} />
            <Route path="/Login/joinup" element={<JoinLoginTable />} />
            <Route path="/Login/completed" element={<SignUpCompleted />} />
            <Route path="/Login/FooterPolicy" element={<FooterPolicy />} />
          </Route>
          <Route path="/lyrics" element={<LyricsDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
