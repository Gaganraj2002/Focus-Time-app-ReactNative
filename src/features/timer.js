import React,{useState} from "react";
import { View,StyleSheet,Text,Platform,Vibration } from "react-native";
import {  ProgressBar } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/roundedButton";
import { Countdown } from "../components/countdown";
import { fontSizes, spacing } from "../utils/sizes";
import { Timing } from "./timing";
import KeepAwake from 'react-native-keep-awake';
const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

export const Timer = ({focusSubject,clearSubject,onTimerEnd}) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);
    const onEnd = (reset)=>{
        Vibration.vibrate(PATTERN);
        setProgress(1);
        setIsStarted(false);
        reset();
        onTimerEnd(focusSubject);
    }
    return(
        <View style={styles.container}>
            <View style={styles.countdown}>

            <Countdown 
            minutes={minutes}
            isPaused={!isStarted}
            onProgress={(progress)=>setProgress(progress)}
            onEnd={onEnd}
            />
            <View style={{paddingTop: spacing.xxl}}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            </View>
            <View style={{paddingTop: spacing.xxl}}>
                <ProgressBar progress={progress} color={colors.progressBar} style={{height: spacing.sm}}/>
            </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={(time)=>setMinutes(time)}/>
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted ? <RoundedButton title="Start" onPress={()=>{setIsStarted(true)}}/> : <RoundedButton title="pause" onPress={()=>{setIsStarted(false)}}/>}
                
            </View>
            <View style={styles.clearSubject}>
                <RoundedButton title="-" size={50} onPress={clearSubject}/>
            </View>
            <KeepAwake />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
    },
    title:{
        color: colors.white,
        textAlign: 'center',
    },
    task:{
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    countdown:{
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper:{
        flex: 0.3,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    clearSubject:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})