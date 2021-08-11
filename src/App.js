import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile'
import photo from './Profile/photo.png'


function App() {
  return (
    <div className="App">
      <div>
        <Profile Fn="Dellai Mohamed Ali" Bio="mind your own bio" Profession="isi student" >

          <img src={photo} />
        </Profile>
      </div>

    </div>
  );
}

export default App;
