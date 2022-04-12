import React from "react";
import {View,Image,Text,TextInput,StatusBar, StyleSheet, Touchable, TouchableOpacity} from 'react-native';


const Sample = ()=>{
  return(

<View style={{backgroundColor: "#FFD834",flex:1}}>

<StatusBar backgroundColor={"#FFD834"}/>

  <View style={{
    flexDirection: 'row',}}>
   <View style={{backgroundColor: 'white',margin:20,width:50,height:50,justifyContent: "center", alignItems:"center",borderRadius: 100, }}>

     <Image source={require('../sample/assets/images/CaretLeft.png')} />
   </View>

   <View style={{ flex:1,justifyContent:"center", alignItems:"center", marginRight:90}}>
   <Image source={require('../sample/assets/images/logo.png')} />
   </View>
  
  </View > 


  <View style={{flexDirection: 'column'}}>
  <View
          style={ {
            alignSelf:'center',
          
          
            justifyContent:"center",
            alignItems:"center",
            
          }}
        >
<Image style={{marginRight:50,
            marginTop: 50,}} 
            source={require('../sample/assets/images/logo2.png')} />
<Text style={{ fontSize: 20, color: "#304D95", fontFamily: "bold",justifyContent:"center", alignItems:"center",marginBottom:30, fontWeight:"bold" }}>Login to Labbit</Text>

        </View>
<View>

<View style={{flexDirection:'row',marginBottom:20, alignItems:"center",marginLeft:30,backgroundColor:"white", marginRight:30,borderRadius:40,borderColor:"#304D95", borderWidth:1}}>
<Image style={{marginLeft:10}} source={require('../sample/assets/images/icon-L.png')} />
      <TextInput
     
      style={{backgroundColor: "white",marginRight:20, borderRadius:20}}
      placeholder="Email"
      />

    
</View>
<View style={{flexDirection:'row',marginBottom:20, alignItems:"center",marginLeft:30,backgroundColor:"white", marginRight:30,borderRadius:40}}>
<Image style={{marginLeft:10}} source={require('../sample/assets/images/Vector.png')} />
      <TextInput
     
      style={{backgroundColor: "white",marginRight:20, borderRadius:20,flex:3}}
      placeholder="Password"
      />
  <Image style={{marginLeft:10, marginRight:20 }} source={require('../sample/assets/images/logo3.png')} />  
</View>



   </View>
  <TouchableOpacity style={{backgroundColor: "#FF6D03", borderRadius:100, width:'auto',height:40, justifyContent:"center", alignItems:"center", marginLeft:30,marginRight:30 }}>
  <Text style={{color:"white"}}>Login

    
  </Text>
  

  </TouchableOpacity>

  <View style={{
    flexDirection: 'row',}}>
    <Text style={{ fontSize: 13, color: "#333333", fontFamily: "bold",justifyContent:"center", alignItems:"center",marginBottom:40,marginTop:30, marginLeft:130  }}>Forgot Password?</Text>
  <Text style={{ fontSize: 13, color: "black",fontWeight:"bold", fontFamily: "bold",justifyContent:"center", alignItems:"center",marginBottom:40,marginTop:30   }}> Click Here</Text>
  
  </View>

  </View>

  

</View>

  )
}

export default Sample 