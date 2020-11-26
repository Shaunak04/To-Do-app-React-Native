import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';

export default function Header({ submitHandler, list }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    var red = 'red';
    var green = 'green';
    function colorHandler() {
        if (list.length == 0) {
            return green;
        }
        else {
            return red;
        }
    }
    return (
        <View style={{
            borderBottomColor: colorHandler(),
            borderBottomWidth: 3,
            width: "100%",
            marginBottom: 10,
        }}>
            <Text style={styles.intro}>To Do List</Text>
            <View style={styles.input}>
                <Input
                    clearButtonMode="always"
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