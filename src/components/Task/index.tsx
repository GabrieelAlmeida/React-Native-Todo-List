import { View, TouchableOpacity } from 'react-native';
import { TaskType } from '../../shared/Task';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles';
import { useState } from 'react';
import { Trash } from 'phosphor-react-native';

type Props = {
    task: TaskType,
    onRemove?: () => void,
    onChecked: () => void
}

export function Task({ task, onRemove, onChecked }: Props) {
    const [checked, setChecked] = useState(task.concluded);

    return (
        <View style={ styles.container }>
            <BouncyCheckbox
                style={styles.item}
                size={25}
                fillColor={ checked ? '#5E60CE' : "#4EA8DE"}
                unfillColor="#262626"
                textStyle={!checked ? {color: '#F2F2F2'} : {}}
                text={ task.text }
                innerIconStyle={{ borderWidth: 1 }}
                isChecked={ checked }
                onPress={(value) => { setChecked(value), onChecked()}}
            />

            <TouchableOpacity onPress={onRemove}>
                <Trash color='#808080'/>
            </TouchableOpacity>
        </View>
    )
}