import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AddingActivityComponent} from "../Components/AddingActivityComponent";
import {ListTile} from "../Components/ListTile";

export const List = () => {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        const fetchToDoList = async () => {
            const savedList = await AsyncStorage.getItem('toDoList');
            if (savedList) setToDoList(JSON.parse(savedList));
        };

        fetchToDoList();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem('toDoList', JSON.stringify(toDoList));
    }, [toDoList]);

    const addActivityFunction = (activity) => {
        setToDoList([...toDoList, activity]);
    };

    const removeFromList = (index) => {
        const newList = toDoList.filter((_, i) => i !== index);
        setToDoList(newList);
    };

    const toggleComplete = (index) => {
        console.log(toDoList[index]);
        const newList = [...toDoList];

        // Update the completed status of the activity at the given index
        newList[index].completed = !newList[index].completed;

        // Set the new list as the new state
        setToDoList(newList);
    };

    return (
        <View style={styles.container}>
            <AddingActivityComponent addActivityFunction={addActivityFunction} />
            <FlatList
                data={toDoList}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item, index}) => (
                    <ListTile
                        activity={item}
                        index={index}
                        removeFromList={removeFromList}
                        toggleComplete={toggleComplete}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
