import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';

export default function Header({ submitHandler, list }) {

    const [colored, setColor] = useState('red');
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View style={{
            borderBottomWidth: 3,
            borderBottomColor: { colored },
            width: "100%",
            marginBottom: 10,
        }}>
            <Text style={styles.intro}>To Do List</Text>
            <View style={styles.input}>
                <Input
                    onChangeText={changeHandler}
                    inputContainerStyle={styles.hold}
                    inputStyle={styles.container}
                    placeholder='Add new task'
                    rightIcon={
                        <TouchableOpacity onPress={() => submitHandler(text)}>
                            <Icon
                                name='plus'
                                size={36}
                                color='red'
                            />
                        </TouchableOpacity>
                    }

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    intro: {
        marginTop: "6%",
        color: '#ffffff',
        textAlign: 'center',
        padding: 15,
        fontSize: 50,
        fontWeight: 'bold',
    },
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