import { FlatList, Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import logo from '../../../assets/logo.png';
import { styles } from "./styles";
import { useState } from "react";
import { TaskType } from "../../shared/Task";
import { Task } from "../../components/Task";
import { Empty } from "../../components/Empty";
import { PlusCircle } from "phosphor-react-native";


export function Home() {
    const [onfocus, setOnFocus] = useState(false);
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [taskText, setTaskText] = useState('');

    function handleTaskAdd() {
        if(tasks.filter(element => element.text === taskText).length === 0 && taskText !== ''){
            const newTask: TaskType = {text: taskText.trim(), concluded: false};
            setTasks(prevState => [...prevState, newTask]);
            setTaskText('');
        }
    }

    function handleTaskRemove(item: TaskType) {
        Alert.alert("Excluir Tarefa", "Desejar excluir essa tarefa?", [
            {
                text: "Sim",
                style: "default",
                onPress: () => setTasks(prevState => prevState.filter(task => task.text !== item.text))
            },

            {
                text: "Não",
                style: "cancel"
            }
        ]);
    }

    function handleTaskCheck(item: TaskType) {
        setTasks((prevState) =>
			prevState.map((task) => {
				task.text === item.text ? (task.concluded = !task.concluded) : null
				return task
			}),
		)
    }

    return (
        <View style={ styles.container }> 

            <View style={ styles.logoContainer}>
                <Image source={ logo } />
            </View>

            <View style={ styles.contentContainer}>
                <View style={ styles.form }>
                    <TextInput
                        style={ onfocus ? styles.inputOnFocus : styles.input }
                        placeholder="Adicione uma nova tarefa"
                        onFocus={() => setOnFocus(true)}
                        onBlur={() => setOnFocus(false)}
                        cursorColor="#F2F2F2"
                        onChangeText={setTaskText}
                        value={taskText}   
                    />

                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <PlusCircle size={16} />
                    </TouchableOpacity>
                </View>

                <View style={styles.status}>
                    <View style={styles.countContainer}>
                        <Text style={{color: '#4EA8DE', fontWeight: 'bold'}}>Criadas</Text> 
                        <Text style={styles.count}>{ tasks.length }</Text>
                    </View>

                    <View style={styles.countContainer}>
                        <Text style={{color: '#8284FA', fontWeight: 'bold'}}>Concluídas</Text>
                        <Text style={styles.count}>{ tasks.filter(item => item?.concluded === true).length }</Text>
                    </View>
                </View>

                <FlatList
                    style={ tasks.length > 0 ? styles.list : null}
                    data={tasks}
                    keyExtractor={(item) => item.text}
                    renderItem={({ item }) => (
                        <Task 
                            task={item} 
                            onRemove={()=> handleTaskRemove(item)} 
                            onChecked={() => handleTaskCheck(item)}></Task>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Empty></Empty>
                    }
                />
            </View>           
        </View>
    )
}