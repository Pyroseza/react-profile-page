import React, { Component } from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCrown } from '@fortawesome/free-solid-svg-icons'
import logoPyro from './media/Pyroseza.jpg'
// Languages
import logoPython from './media/Python.png'
import logoJavaScript from './media/JavaScript.png'
import logoCpp from './media/Cpp.png'
import logoJava from './media/Java.jpg'
// IDEs
import logoVS from './media/VisualStudio.png'
import logoPyCharm from './media/PyCharm.png'
import logoIntelliJIdea from './media/IntelliJ_IDEA.png'
import logoEclipse from './media/Eclipse.png'
// Fave browsers
import logoChrome from './media/Chrome.png'
import logoFirefox from './media/Firefox.png'
import logoSafari from './media/Safari.png'
import logoOpera from './media/Opera.png'
// terminals and shells
import logoBash from './media/Bash.png'
import logoCmd from './media/Cmd.jpg'
import logoGitBash from './media/GitBash.png'
import logoMacTerminal from './media/MacTerminal.png'
// text editors
import logoVSCode from './media/VisualStudioCode.png'
import logoNpp from './media/Notepad++.png'
import logoVim from './media/Vim.png'
import logoEmacs from './media/Emacs.png'
import logoAtom from './media/Atom.png'

function StaffCheck(staffMember) {  
  return staffMember ? <FontAwesomeIcon className="profile-info-staff" icon={faCrown} /> : "";
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: 'Pyroseza#8749',
        power: 4173,
        pic_src: logoPyro,
        roles: ['staff', 'warrior'],
        is_staff: true,
      },        
    };
  }

  styles = {
    chip: {
      backgroundColor: "red",
    },
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Profile information</h1>
        </header>
        <div className="profile-info">
          <div className="profile-info-primary">
            <Avatar className="profile-logo"
            src={this.state.user.pic_src}
            title={this.state.user.username}
            size={50}/>
            <span className="profile-name">{this.state.user.username}</span>
            <span className="profile-info-power">
              <FontAwesomeIcon className="profile-info-bolt" icon={faBolt} />
              {this.state.user.power}
            </span>
            <StaffCheck staffMember={this.state.user.is_staff}/>
          </div>
        </div>
        <br />
        <div className="profile-prefs">
          <div className="profile-pref">
            <div className="profile-pref-title">
                Fave Progamming Languages
            </div>
            <br />
            <div className="profile-pref-choices">
              <Avatar className="profile-pref-icon-active" src={logoPython} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <div className="profile-pref-choices">
                <Avatar className="profile-pref-icon" src={logoJava} title={this.state.text}/>
                  <div className="vert-div-sep">|</div>
                <Avatar className="profile-pref-icon-active" src={logoJavaScript} title={this.state.text}/>
                  <div className="vert-div-sep">|</div>
                  <Avatar className="profile-pref-icon" src={logoCpp} title={this.state.text}/>
              </div>
            </div>
          </div>
          <br />
          <div className="profile-pref">
            <div className="profile-pref-title">
                Fave IDE
            </div>
            <br />
            <div className="profile-pref-choices">
              <Avatar className="profile-pref-icon-active" src={logoVS} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
               <Avatar className="profile-pref-icon" src={logoPyCharm} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoIntelliJIdea} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoEclipse} title={this.state.text}/>
            </div>
          </div>
          <br />
          <div className="profile-pref">
            <div className="profile-pref-title">
                Fave Browser
            </div>
            <br />
            <div className="profile-pref-choices">
              <Avatar className="profile-pref-icon" src={logoChrome} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon-active" src={logoFirefox} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoSafari} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoOpera} title={this.state.text}/>
            </div>
          </div>
          <br />
          <div className="profile-pref">
            <div className="profile-pref-title">
                Fave Shell / Terminal
            </div>
            <br />
            <div className="profile-pref-choices">
              <Avatar className="profile-pref-icon-active" src={logoBash} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoCmd} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoMacTerminal} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoGitBash} title={this.state.text}/>
            </div>
          </div>
          <br />
          <div className="profile-pref">
            <div className="profile-pref-title">
                Fave Text Editor
            </div>
            <br />
            <div className="profile-pref-choices">
              <Avatar className="profile-pref-icon-active" src={logoVSCode} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoNpp} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoVim} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoEmacs} title={this.state.text}/>
              <div className="vert-div-sep">|</div>
              <Avatar className="profile-pref-icon" src={logoAtom} title={this.state.text}/>
            </div>
          </div>
          <br />                              
        </div>
      </div>
    );
  }
}

export default App;
