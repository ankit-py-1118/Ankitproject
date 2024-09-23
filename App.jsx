import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PostScreen from './src/Compnent/PostScreen';

export default function App() {

  const contentArray = [
    {
      type: 'postwithimage',
      content: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSJF0CpduMlzlGSFHLH4oKwIygdedvoh1tw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlwFfp7vmrnOcCs8QcV_SPE33FIBEY_W7H03oTWYGWWMQP2wKCVFr0_xg1LiYjwFVu0g&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJvqNoZn2IqswjxyP5kDvBr5HS9Zz4CjrkyoCDTk1Sv2QUyn4zpVjR-bsYHcgmMPcDDc&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrImU8seb6kU4dcp4r_GxwUCiatn1rSY3A2z-VNHvYWb-joOreLQD-pd0Mh4_6AeOAZiA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrImU8seb6kU4dcp4r_GxwUCiatn1rSY3A2z-VNHvYWb-joOreLQD-pd0Mh4_6AeOAZiA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrImU8seb6kU4dcp4r_GxwUCiatn1rSY3A2z-VNHvYWb-joOreLQD-pd0Mh4_6AeOAZiA&usqp=CAU',
      ],
    },
    {
      type: 'postwithImageVideo',
      content: [
        {
          type: 'image',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSJF0CpduMlzlGSFHLH4oKwIygdedvoh1tw&s'
        },
        {
          type: 'image',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlwFfp7vmrnOcCs8QcV_SPE33FIBEY_W7H03oTWYGWWMQP2wKCVFr0_xg1LiYjwFVu0g&usqp=CAU'
        },
        {
          type: 'image',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJvqNoZn2IqswjxyP5kDvBr5HS9Zz4CjrkyoCDTk1Sv2QUyn4zpVjR-bsYHcgmMPcDDc&usqp=CAU'
        },
        {
          type: 'video', 
          url: ''
        },
        {
          type: 'video', 
          url: ''
        }
      ]
      
    },
    {
      type: 'postwithTextImage',
      content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnjGEflqUSYdeyF2ZKp4x4pTSpmayaS32qg&s",
      text: 'Hello this my Text',
    },
    {
      type: 'textonlypost',
      text: 'Hello this my Text',
    },
    {
      type: 'videopostonly',
      content: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSJF0CpduMlzlGSFHLH4oKwIygdedvoh1tw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlwFfp7vmrnOcCs8QcV_SPE33FIBEY_W7H03oTWYGWWMQP2wKCVFr0_xg1LiYjwFVu0g&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJvqNoZn2IqswjxyP5kDvBr5HS9Zz4CjrkyoCDTk1Sv2QUyn4zpVjR-bsYHcgmMPcDDc&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrImU8seb6kU4dcp4r_GxwUCiatn1rSY3A2z-VNHvYWb-joOreLQD-pd0Mh4_6AeOAZiA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrImU8seb6kU4dcp4r_GxwUCiatn1rSY3A2z-VNHvYWb-joOreLQD-pd0Mh4_6AeOAZiA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrImU8seb6kU4dcp4r_GxwUCiatn1rSY3A2z-VNHvYWb-joOreLQD-pd0Mh4_6AeOAZiA&usqp=CAU',
      ],
      text: 'Hello this my Text',
    },
  ];

  return (
    <SafeAreaView style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <FlatList
      data={contentArray}

      renderItem={({item}) => <PostScreen item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
