import UrlList from './Components/UrlList';
import './App.css';

function App() {

  let linksArr = [{url:"link1" , isOnEdit:false},{url:"link2", isOnEdit:false},{url:"link3", isOnEdit:false}]


  return (
    <UrlList arr={linksArr} />
  );
}

export default App;
