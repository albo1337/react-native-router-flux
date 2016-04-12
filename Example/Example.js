import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import Launch from './components/Launch'
import Register from './components/Register'
import Login from './components/Login'
import Login2 from './components/Login2'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import Error from './components/Error'
import Home from './components/Home'
import TabView from './components/TabView'
import EchoView from './components/EchoView'
import NavigationDrawer from './components/NavigationDrawer'

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
        );
    }
}

class Right extends React.Component {
    render(){
        return <Text style={{
        width: 80,
        height: 37,
        position: "absolute",
        bottom: 4,
        right: 2,
        padding: 8,
    }}>Right</Text>
    }
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"transparent",justifyContent: "center",
        alignItems: "center",}

});

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class Example extends React.Component {
    render() {
        return <Router createReducer={reducerCreate}>
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar={true}>
                
                    <Scene key="tabbarOne" Component={TabBar} tabs={true} default="loginTab">
                        <Scene key="loginTab" title="Login" icon={TabIcon}>
                            <Scene key="login" component={Login} title="Login"/>
                        </Scene>
                        <Scene key="registerTab" title="Registration" icon={TabIcon}>
                            <Scene key="register" component={Register} title="Registration"/>
                        </Scene>
                    </Scene>

                    <Scene key="tabbarTwo" Component={TabBar} tabs={true} default="homeTab">
                        <Scene key="homeTab" title="Home" icon={TabIcon}>
                            <Scene key="home" component={Home} title="Home"/>
                        </Scene>
                    </Scene>
                </Scene>
            </Scene>
        </Router>;
    }
}
