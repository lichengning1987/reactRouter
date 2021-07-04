import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 路由模式   hash/history  HashRouter / BrowserRouter
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import Home from './home'
import { checkTokenReq , identityReq} from './service'
import { setCookie } from './utils'
checkTokenReq().then(res => {
  console.log('res', res)
  if (res.data.status == 1) {
    identityReq().then(resdata => {
      console.log(resdata, 'data')
      if (resdata.data.status == 1) {
        setCookie('username', resdata.data.data.username, 7)
        setCookie('root',resdata.data.root,7)
      }
    }).catch(error => Promise.reject(error))
  }
  setCookie('tokenStatus',res.data.status,7)
}).catch(error => Promise.reject(error))


ReactDOM.render(
  <Router>
         <App />
        {/*  <Route path="/home" component={Home} /> */}
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
