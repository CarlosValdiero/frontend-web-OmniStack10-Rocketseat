import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="App">
      <aside>
        <strong>Register</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Github User</label>
            <input name='github_username' id='github_username' required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input name='techs' id='techs' required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name='latitude' id='latitude' required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name='longitude' id='longitude' required />
            </div>
          </div>

          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/58005573?s=460&v=4" alt="foto"/>
              <div className="user-info">
                <strong>Carlos valdiero</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>biografia dasfasfasfasfasfasf</p>
            <a href="https://github.com/CarlosValdiero">visit profile on github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/58005573?s=460&v=4" alt="foto"/>
              <div className="user-info">
                <strong>Carlos valdiero</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>biografia dasfasfasfasfasfasf</p>
            <a href="https://github.com/CarlosValdiero">visit profile on github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/58005573?s=460&v=4" alt="foto"/>
              <div className="user-info">
                <strong>Carlos valdiero</strong>
                <span>ReactJS</span>
              </div>
            </header>
            <p>biografia dasfasfasfasfasfasf</p>
            <a href="https://github.com/CarlosValdiero">visit profile on github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
