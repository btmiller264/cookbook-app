import React, { useState } from "react";
import { View, Text, Pressable } from 'react-native';
import { AddButton, TextModal } from "../../../../components";
import styles from './styles';

export const AddData = ({ data, setData, title, addTitle, editTitle, placeholder }) => {
    const [currentData, setCurrentData] = useState('');
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const addData = (newData) => {
        if (newData != '') {
            setData([...data, newData]);
        }
        setAddModalOpen(false);
    }

    const editData = (editedData) => {
        if (editedData != '') {
            data[data.indexOf(currentData)] = editedData;
            setData(data);
        }
        setEditModalOpen(false);
    }

    const deleteData = () => {
        data.splice(data.indexOf(currentData), 1);
        setData(data);
        setEditModalOpen(false);
    }

    return (
    <View style={styles.sectionView}>
        <Text style={data.length === 0 ? styles.sectionTitleEmpty : styles.sectionTitle}>{title}</Text>
        {data.map((entry, index) => {
            const render = (title === 'Ingredients' ? 
            <Text style={styles.entry}>{entry}</Text> : 
            <Text style={styles.entry}>{`${index + 1}. ${entry}`}</Text>);
            return (
                <Pressable style={styles.entryContainer} key={entry} onPress={() => {
                    setCurrentData(entry);
                    setEditModalOpen(true);
                }}>
                    {render}
                </Pressable>
            )
        })}
        <AddButton customStyles={{ width: '100%', marginTop: 10 }} label={placeholder} onPress={() => setAddModalOpen(true)} /> 
        <TextModal 
            isOpen={addModalOpen}
            label={addTitle}
            placeholder={placeholder}
            setModalOpen={setAddModalOpen}
            onDone={addData}
            showDelete={false}
            inputStyles={title === 'Instructions' ? { height: 80 } : null}
            textStyles={title === 'Instructions' ? { height: 80 } : null}
        />
        <TextModal 
            isOpen={editModalOpen}
            label={editTitle}
            initialValue={currentData}
            setModalOpen={setEditModalOpen}
            onDone={editData}
            showDelete={true}
            onDelete={deleteData}
            inputStyles={title === 'Instructions' ? { height: 80 } : null}
            textStyles={title === 'Instructions' ? { height: 80 } : null}
        />
    </View>
    )
}