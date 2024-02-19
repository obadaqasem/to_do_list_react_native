import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const ListTile = ({ activity, index, removeFromList, toggleComplete }) => {


    return (
        <>
            <View style={styles.listTile}>
                <Text style={styles.activityName}>{activity.name}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.iconButton} onPress={()=>{
                        toggleComplete(index);
                    }}>
                        {activity.completed
                            ? <FontAwesome name="check-square-o" size={24} color="green" />
                            : <FontAwesome name="square-o" size={24} color="grey" />}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} onPress={()=>{
                        removeFromList(index);
                    }}>
                        <FontAwesome name="trash" size={24} color="red" />
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    listTile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    activityName: {
        flex: 1,
        fontSize: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 10,
    },
});
