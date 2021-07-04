// 路由配置文件
import React, { Suspense,lazy } from 'react'
import routes from './routes'
import { Redirect, Route, Switch , withRouter} from 'react-router-dom'
import { getCookie } from '../utils'
import Login from '../other/Login'
const tokenStatus = getCookie('tokenStatus')
const root = getCookie('root')

 function RouterComp (props) {
  if (tokenStatus != 1) return <Route path="/" component={Login}></Route>
  return <Suspense fallback={<div> 加载中。。。</div>}>
    <Switch>
      <Redirect from="/" to="/home" exact></Redirect>
       {/*  {
        root == 'admin' ?  routes.map((item, index) => <Route key={index} path={item.path} component={item.component} />) :
          routes.filter(item => item.root !== 'admin').map((item, index) => <Route key={index} path={item.path} component={item.component} />)
       } */}
      {routes.map((item, index) => <Route
        key={index} path={item.path} render={
          () => {
            if(item.root != root && item.root) return <div>您的权限不够</div>
            return <item.component {...props}></item.component>
          }
        } />)
      }


    </Switch>
  </Suspense>
}

export default withRouter(RouterComp)