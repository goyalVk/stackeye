import React, {Component} from 'react';
import './pure-0.3.0.css';
import './main.css';
import './np.css';


class App extends Component {
	render() {
	return (
        <div className="header np-header">
          <div className="ribbon">
            <a href="https://github.com/sachinjain024/stackeye">
              <img width={149} height={149} src={require("./resources/images/forkme_left_orange_ff7600.png")} className="attachment-full size-full" alt="Fork StackEye on GitHub" data-recalc-dims={1} />
            </a>
          </div>
          <img src={require("./resources/images/icon_so_48.png")} className="icon-stackoverflow"/>
          <span className="se-white">Stack</span>
          <span className="se-blue"> Eye </span>
          <span className="se-dash"> - </span>
          <span className="se-line">Keep Watching Keep Learning</span>
          <button id="report-button" className="pure-button pure-button-error report-option">
            <a href={"https://github.com/sachinjain024/stackeye/issues"} target="_blank">Report Issue</a>
          </button>
        </div>
        <div className="np-page">
          <div className="se-category pure-menu pure-menu-open pure-menu-horizontal">
            <ul className="tabContainer">
              <li className="pure-menu-selected notification-list-option">
                <a href="#" data-targetid="notification-area" className="se-tab">Question Notifications<span /></a>
              </li>
              <li className="user-notification-list-option">
                <a href="#" data-targetid="user-notification-area" className="se-tab">User Notifications<span /></a>
              </li>
              <li className="question-list-option">
                <a href="#" data-targetid="question-area" className="se-tab">Questions<span /></a>
              </li>
              <li className="user-list-option">
                <a href="#" data-targetid="users-area" className="se-tab">Users<span /></a>
              </li>
              <li className="system-list-option">
                <a href="#" data-targetid="settings-area" className="se-tab">System<span /></a>
              </li>
            </ul>
          </div>
          <div id="notification-area" className="category-area">
            <ul className="notification-list se-list" />
            <button id="notification-deleter" className="pure-button pure-button-error deleter" disabled="true" data-objecttype="question_notification" data-message="Are you sure you want to clear selected notifications ?"> Clear
            </button>
          </div>
          <div id="user-notification-area" className="category-area hidden">
            <ul className="user-notification-list se-list" />
            <button id="user-notification-deleter" className="pure-button pure-button-error deleter" disabled="true" data-objecttype="user_notification" data-message="Are you sure you want to clear selected notifications ?"> Clear
            </button>
          </div>
          <div id="question-area" className="category-area hidden">
            <ul className="question-list se-list" />
            <button id="question-deleter" className="pure-button pure-button-error deleter" disabled="true" data-objecttype="question" data-message="Are you sure you want to unwatch selected questions ?"> Unwatch
            </button>
          </div>
          <div id="users-area" className="category-area hidden">
            <ul className="user-list se-list" />
            <button id="user-deleter" className="pure-button pure-button-error deleter" disabled="true" data-objecttype="user" data-message="Are you sure you want to unfollow selected users ?">Unfollow
            </button>
          </div>
          <div id="settings-area" className="category-area hidden">
            <div className="settings-grid se-list">
              <div className="pure-g">
                
                  {/* Export Data Options*/ }

                <div className="pure-u-1-2">
                  <div className="setting-item">
                    <div className="setting-header">
                      <h2>Export Data</h2>
                    </div>
                    <p className="setting-description">
                      Using the option, you can export list of followed questions and users.
                      Please note for performance reasons we do not export/imports notification data.
                    </p>
                    <div className="cta-container align-right">
                      <button id="data-export" className="pure-button pure-button-normal setting-button" data-objecttype="data" data-message="Are you sure you want to export data ?">Export
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pure-u-1-2">
                  <div className="setting-item">
                    <div className="setting-header">
                      <h2>Import Data</h2>
                    </div>
                    <p className="setting-description">
                      {Using this option, you can import list of questions and users.
                      After importing, you will get notifications for the imported questions and users too.
                    </p>
                    <div className="cta-container align-right">
                      <button id="data-import" className="pure-button pure-button-normal setting-button" data-objecttype="data" data-message="Are you sure you want to import data ?">Import
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pure-g">

                {/* Clear Questions & Users list*/}

                <div className="pure-u-1-2">
                  <div className="setting-item">
                    <div className="setting-header">
                      <h2>Clear Questions &amp; Users</h2>
                    </div>
                    <p className="setting-description">
                      Using this option, you can clear list of followed questions &amp; users.
                      Please note that once data is deleted, it cannot be reverted!
                      We recommend you to take backup using export before doing this operation.
                    </p>
                    <div className="cta-container align-right">
                      <button id="questions-users-clear-button" className="pure-button pure-button-normal setting-button" data-objecttype="data" data-message="Are you sure you want to clear all followed users and questions ?">Clear
                      </button>
                    </div>
                  </div>
                </div>

                 {/*Clear Questions & Users Notifications */}

                <div className="pure-u-1-2">
                  <div className="setting-item">
                    <div className="setting-header">
                      <h2>Clear Notifications</h2>
                    </div>
                    <p className="setting-description">
                      Using this option, you can clear all notifications.
                      Please note that once data is deleted, it cannot be reverted!
                    </p>
                    <div className="cta-container align-right">
                      <button id="notifications-clear-button" className="pure-button pure-button-normal setting-button" data-objecttype="data" data-message="Are you sure you want to clear all notifications?">Clear Notifications
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Script area */}
      </div>
    );
  }
};

export default App;
