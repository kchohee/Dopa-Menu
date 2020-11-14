import './App.css'
// package
import {connect} from 'react-redux'
import React, { Component } from 'react'
import { Switch,withRouter, Redirect} from 'react-router-dom'
// containers & componnets
import NavHeader from './v1/containers/NavHeader'
import Home from './v1/containers/Home'
import Dashboard from './v1/containers/Dashboard'
import Profile from './v1/containers/Profile'
import SignUp from './v1/containers/SignUp'
import LogIn from './v1/containers/LogIn'
import ItemShow from './v1/containers/ItemShow'
import NewItem from './v1/containers/newItem'
import AlertComponent from './v1/components/alert'
// helpers
import {Navi} from './v1/helpers/Routes'
import history from './v1/helpers/history'
// actions
import {actions} from './v1/actions/_index'
import {sessionReconnect} from './v1/actions/appAction'
import {activeSession} from './v1/actions/appAction'

class App extends Component{
  componentDidMount=()=>{
    this.props.sessionReconnect()
    history.listen((location, action)=>{
      if(this.props.alert.message){
        this.props.clearAlerts()
      }
    })
  }
  render(){
    const alert = this.props.alert
    const links = activeSession() ? Navi.PrivUrls : Navi.PubUrls
    return(
      <div className="wrapper">
        <NavHeader fixed="top" links={links}/>
        <div className="App">
          {alert.message &&
          <AlertComponent alert={alert} closeAlert={this.props.clearAlerts}/>}
          <Switch>
            <Navi.PubRoute restricted={false} component={Home} path="/dopa-menu" exact/>
            <Navi.PubRoute restricted={true} component={SignUp} path="/dopa-menu/signup" exact/>
            <Navi.PubRoute restricted={true} component={LogIn} path="/dopa-menu/login" exact/>
            <Navi.PrivRoute component={Dashboard} path="/dopa-menu/:id" exact/>
            <Navi.PrivRoute component={Profile} path="/dopa-menu/:id/profile" exact/>
            <Navi.PrivRoute component={NewItem} path='/dopa-menu/:id/menuItems/create' exact/>
            <Navi.PrivRoute component={ItemShow} path='/dopa-menu/:id/menuItems/:itemId' exact/>
            <Redirect from="*" to="/dopa-menu"/>
          </Switch>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=> {
  return {
    alert: state.alert
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    sessionReconnect: ()=>dispatch(sessionReconnect()),
      clearAlerts: ()=>dispatch(actions.alert.clear())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))