import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import { Icon, CheckBox, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function AddToDo({ submitHandler }) {

    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val);
    }


    return (
        <View>
            <View style={styles.input}>
                <TextInput
                    onChangeText={changeHandler}
                    inputContainerStyle={styles.hold}
                    inputStyle={styles.container}
                    placeholder='Add new task'
                // rightIcon={
                //     <TouchableOpacity onPress={() => console.log('hello')}>
                //         <Icon
                //             name='plus'
                //             size={24}
                //             color='white'

                //         />
                //     </TouchableOpacity>

                // }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hold: {
        borderBottomColor: 'red'
    },
    container: {
        padding: 10,
        color: 'white',
    },
    input: {
        width: "85%",
        marginHorizontal: "7.5%",
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        marginBottom: 20,
        color: 'white',
        padding: 0,
    },
})