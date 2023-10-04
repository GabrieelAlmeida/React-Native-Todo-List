import { Image, Text, View } from "react-native";
import { styles } from './styles';
import clipBoard from '../../../assets/clipboard.png';

export function Empty() {
    return(
        <View style={styles.container}>
            <Image source={clipBoard} />

            <View>
                <Text style={styles.firstLine}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.secondLine}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    )
}