import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Header from './components/header'
import ToDoitem from './components/todoitem'

export default function App() {

  const [list, SetList] = useState([
    { name: 'wake up', desc: 'get up from sleep', key: '1', done: false },
    { name: 'bath', desc: 'thande pani se naha le', key: '2', done: false },
    { name: 'lunch', desc: 'pet bhar le', key: '3', done: false },
    { name: 'study', desc: 'career bana le', key: '4', done: false },
    { name: 'dinner', desc: 'firse mota ho', key: '5', done: false }
  ]);
  const pressHandler = (key) => {
    SetList((prevTodos) => {
      return prevTodos.filter(SetList => SetList.key != key)
    });
  }

  const submitHandler = (text) => {

    SetList((prevTodos) => {
      if (text.length > 0) {
        return [
          { name: text, key: (list.length + 1).toString() },
          ...prevTodos
        ]
      }

      else {
        return [...prevTodos]
      }
    })
  }

  return (
    < View style={styles.container} >
      <LinearGradient colors={['#2d3337', '#24282c', '#1b1e21', '#121416', '#090a0b']} style={styles.linearGradient}>
        <Header submitHandler={submitHandler} list={list} />
        <Text style={{ color: 'white', fontSize: 20 }}>{list.length} Pending Tasks</Text>
        <FlatList
          data={list}
          style={styles.list}
          renderItem={({ item }) => (
            <ToDoitem item={item} pressHandler={pressHandler} />

          )}

        />
        <StatusBar style="light" />
        <Text style={{ color: 'white' }}> Made by Shaunak_04</Text>
      </LinearGradient>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: '#222831',
  },
  list: {
    width: "95%",
    marginLeft: "2.5%",
  },

  task: {
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'olive',
    borderRadius: 12,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
});

