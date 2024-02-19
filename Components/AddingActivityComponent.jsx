import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

// Get the device width to set the component width dynamically
const { width } = Dimensions.get('window');

export const AddingActivityComponent = ({ addActivityFunction }) => {
    const [activityName, setActivityName] = useState('');

    const handleAddActivity = () => {
        if (!activityName) {
        } else {
            addActivityFunction({ name: activityName, completed: false });
            setActivityName('');
        }
    };

    const handleClear = () => setActivityName('');

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Activity"
                    value={activityName}
                    onChangeText={setActivityName}
                    placeholderTextColor="#999"
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAddActivity}>
                        <Text style={styles.buttonText}>Add Activity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
                        <Text style={styles.buttonText}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        width: width * 0.9, // 90% of the screen width
        alignSelf: 'center', // Center the component on the screen
        backgroundColor: '#f5f5f5', // Light grey background
        borderRadius: 10, // Rounded corners for the container
        shadowColor: '#000', // Shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom:10,
        marginTop:30,
        elevation: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#333',
        width: '100%', // Make the input stretch to the container width
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', // Make the buttons container stretch to the container width
    },
    button: {
        paddingVertical: 12,
        borderRadius: 8,
        flex: 1, // Equal width to both buttons, with some space in between
        marginHorizontal: 5, // Space between buttons
    },
    addButton: {
        backgroundColor: '#4CAF50', // A more vibrant color for adding
    },
    clearButton: {
        backgroundColor: '#f44336', // A contrasting color for clearing
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
    },
});
