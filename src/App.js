import logo from './logo.svg';
import './App.css';
import RouterComp from './router'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Tab from './components/Tab'
import TabBar from './components/TabBar'

/* const useDerivedState = (props) => {
  const rerender = useState()[1];
  const stateRef = useRef();

  if (props?.value) {
    stateRef.current = props.value;
  }

  const setState = (value) => {
    stateRef.current =
      typeof value === "function" ? value(stateRef.current) : value;
    rerender({});
  };

  return [stateRef.current, setState];
}; */



function App (props) {
  const [navTitle, setNavTitle] = useState('首页')
  const [tabBarFlag,setTabBarFlag] = useState(true)
  console.log(props,'app')
  /* const [state, setState] = useDerivedValue("value", () => {
    if ("value" in props) {
      return props.value;
    }
    return null;
  }); */
  /* useEffect(()=>{
    if ('value' in props) {
      console.log(props, 11222)
      //setState(props.value)
    }
  }, [props]) */

  const { pathname } = useLocation();
  const tabTitle = {
    '/home': '首页',
    '/user': '个人中心',
    '/activity':'活动'

  }
  useEffect(() => {
    console.log(pathname, 889900)
    setNavTitle(tabTitle[pathname])
    if (pathname.indexOf('activity') > -1) {
      setTabBarFlag(false)
    } else {
      setTabBarFlag(true)
    }
  }, [pathname])

  console.log(navTitle, '111222')
  return (
    <div className="App">
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      111222
      <NavLink to="/home" activeClassName="nav_active">首页</NavLink>
      <NavLink to="/user" activeClassName="nav_active">个人中心</NavLink>
      <Tab title={navTitle}></Tab>
      <RouterComp></RouterComp>
      {tabBarFlag &&<TabBar></TabBar>}
    </div>
  );
}

export default App;
