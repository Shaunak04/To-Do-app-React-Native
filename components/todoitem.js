import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, ScrollView, TextInput } from 'react-native';
import { Text, CheckBox, Button } from 'react-native-elements';


export default function ToDoitem({ item, pressHandler }) {
    return (
        <View>
            <CheckBox iconLeft onIconPress={() => pressHandler(item.key)} checkedColor="red" size={35} checked={true} title={item.name} textStyle={styles.text} containerStyle={styles.task} iconType='material' checkedIcon='clear' />
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        width: "90%",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'lightgreen',
        borderRadius: 12,
        marginTop: 20,
    },
    text: {
        marginLeft: 5,
        fontSize: 21,
    }
})