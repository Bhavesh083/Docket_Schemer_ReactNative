import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './components/Home';
import { Container, Containertwo, Alertbox, ABtext, Linking} from './styles/appStyles';
import { Text} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() { 

  const [infoc,setInfoc] = useState(false);

  const handleCloseinf=()=>{
    setInfoc(true); 
  }

  return (
    <>
    {infoc?
        <Container>
          <Home/>
          <StatusBar backgroundColor="#888"  style="light"/> 
        </Container>
        : 
        <Containertwo>
          <Alertbox>
            <ABtext><Feather style={{color:"#cc2900"}} name="alert-triangle" size={23} color="black" /> I Bhavesh Kumar, developed this application only for my project purpose and for those who want to learn and acquire knowledge on React Native.{"\n"}
            {"\n"}Please do not enter important schedules or any information of yours.{"\n"}{"\n"}
            <AntDesign name="github" size={24} color="black" /> Github username: Bhavesh083 </ABtext>
            <Entypo onPress={()=>handleCloseinf()} style={{color:"#fff",borderRadius:50,backgroundColor:"#cc2900"}} name="cross" size={25} />
          </Alertbox>
        </Containertwo>}
    </>
  );  
} 
{/*
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";*/}
