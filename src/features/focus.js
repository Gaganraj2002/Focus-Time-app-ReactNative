import React, {useState} from "react"
import { View,StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import { colors } from "../utils/colors"
import { RoundedButton } from "../components/roundedButton"
export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null)

    return (
    <View style={styles.container}>
        <View>
            <View style={styles.inp}>

                <TextInput
                label="What would you like to focus on?"
                value={subject}
                style={{width: 280, height: 50, marginRight: 10,}}
                onChangeText={subject => setSubject(subject)}/>
                
                <View style={styles.button}>
                    <RoundedButton
                    title="+"
                    onPress={() => { addSubject(subject) }}
                    size={50}
                    />
                </View>
            </View>
        </View>
    </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:0.2,
    },
    button:{
        justifyContent: 'center',
    }
    ,
    inp:{
        padding: 25,
        justifyContent: 'top',
        alignItems: 'center',
        flexDirection: 'row',

      },
    textinput:{
        flex: 0.8,
        marginRight: 10,
    }
})