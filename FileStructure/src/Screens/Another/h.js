import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, FlatList } from 'react-native';


const YourApp = () => {
    
    DATA = [
            {
                id:1,
                image:  source={uri: '/Users/harryvataliya/Downloads/logo.png'},
                title: 'Ronald Richards',
                subtitle: 'Gurgaon,india'
            },
            {   id:2,
                image:  source={uri: '/Users/harryvataliya/Downloads/logo.png'},
                title: 'Floyd Miles',
                subtitle: 'san Fransisco,CA'
            },
            {   id:3,
                image:  source={uri: '/Users/harryvataliya/Downloads/logo.png'},
                title: 'Marvin Mckinney',
                subtitle: 'Dhaka,Bangladesh'
            },
            {   id:4,
                image:  source={uri: '/Users/harryvataliya/Downloads/logo.png'},
                title: 'Dianne Russell',
                subtitle: 'Suiropl,Nepal'
            },
            {   id:5,
                image:  source={uri: '/Users/harryvataliya/Downloads/logo.png'},
                title: 'Devon Lane',
                subtitle: 'Delhi,india'
            },
            {   id:6,
                image:  source={uri: '/Users/harryvataliya/Downloads/logo.png'},
                title: 'Marvin Mckinney',
                subtitle: 'Dhaka,Bangladesh'
            },
    ]

    return (
        <SafeAreaView style={{ marginVertical: 3 }}>
            <Text style={{ fontWeight: "700", marginLeft: 15, marginTop: -10 }}>BACK</Text>
            <View>
                <Image style={{ width: 100, height: 100, marginBottom: -10, alignSelf: "center", marginTop: 5, borderRadius: 400 / 2 }}
                    source={{
                        uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
                    }} />
            </View>
            <View style={{ flex: 0, alignItems: "center", marginTop: 30 }}>
                <Text style={{ fontWeight: "600", fontSize: 24, color: "black", alignSelf: "center", marginTop: 0, marginBottom: 10 }}>Group Members</Text>
            </View>

            <View>
                <Text style={{ fontSize: 15, marginLeft: 20 }}>GROUP ADMIN</Text>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Image source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQzg2-modiBeSBIckt_NcpipPPGQfZA_dbQ&usqp=CAU'
                    }} style={{ width: 70, height: 70, marginLeft: 20, borderRadius: 400 / 2 }} />
                    <Text style={{ color: 'black', marginTop: 12, marginLeft: 10, fontWeight: 'bold' }}>Esther Howarsds{"\n"}<Text style={{ color: 'black', fontWeight: '400' }}>Sylhet,Bangladesh</Text></Text>

                    
                </View>
            </View>

            
            <Text style={{ fontSize: 15, marginLeft: 20, paddingTop: 10, marginBottom: 10 }}>MEMBERS</Text>

            <FlatList

      data = {[
            {
                id:1,
                image:
        { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
                title: 'Ronald Richards',
                subtitle: 'Gurgaon,india'
            },
            {   id:2,
              image:
              { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
                title: 'Floyd Miles',
                subtitle: 'san Fransisco,CA'
            },
            {   id:3,
              image:
              { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
                title: 'Marvin Mckinney',
                subtitle: 'Dhaka,Bangladesh'
            },
            {   id:4,
              image:
              { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
                title: 'Dianne Russell',
                subtitle: 'Suiropl,Nepal'
            },
            {
              id:5,
              image:
      { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
              title: 'Ronald Richards',
              subtitle: 'Gurgaon,india'
          },
          {   id:6,
            image:
            { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
              title: 'Floyd Miles',
              subtitle: 'san Fransisco,CA'
          },
          {   id:7,
            image:
            { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
              title: 'Marvin Mckinney',
              subtitle: 'Dhaka,Bangladesh'
          },
          {   id:8,
            image:
            { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' },
              title: 'Dianne Russell',
              subtitle: 'Suiropl,Nepal'
          },
           
    ]}
   //render
   //The renderItem is a callback function
   // that will accept the individual item from the data prop and render a component for it.

   //KeyExtractor
   //The default extractor checks item.key,then item.id,and then falls back to using the index, like React does.
    renderItem={({item}) => 
    
     <View style={{ flexDirection:"row"}}>
      <Image style={{
        height:20,width:50}} source={item.image}/>
           <View style={{ flexDirection:"column"}}>

    <Text style= {{fontSize:20,color:"red",marginHorizontal:10,marginVertical:5}}>{item.title}</Text>
    <Text style= {{fontSize:15,color:"red",marginHorizontal:15}}>{item.subtitle}</Text>
    </View>
    </View>
    }
    keyExtractor ={item => item.id}
  
    />



        </SafeAreaView>

    );
};


const Members = StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingTop: 20
    },
    item: {

        padding: 10,
        fontSize: 20,
        height: 60,
        marginVertical: 3,
        marginHorizontal: 2,

    },
})
const Menuitems = StyleSheet.create({
    
    item: {
        backgroundColor: 'rgb()',
        padding: 10,
        marginVertical: 10,
    },
    header: {
        fontSize: 15,
        fontStyle: "normal",
        marginTop: 25,
        marginBottom: 25,
        color: 'black',
        fontWeight: "400",
        marginLeft: 10,
    },
   
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        // flex:1, 
        // flexDirection: 'row',
        fontSize: 17,
    },
    subtitle:{
        // flex:1,
        // flexDirection: 'row',
    },
    Image: {
        width: 70,
        height: 70,
        marginLeft: 20,
        borderRadius: 400 / 2

    }
});


export default YourApp;


//////






