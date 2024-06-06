import React from "react";
import { View,StyleSheet,Text,FlatList } from "react-native";
import { colors } from "../utils/colors";
import { spacing,fontSizes } from "../utils/sizes";
export const FocusHistory = ({history}) => {
    if (!history || history.length === 0){
        return <Text style={styles.title}>We haven't Focused on anything yet</Text>
    }
    const renderItem = ({item}) =><Text style={styles.item}>✅ - {item}</Text>
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Things we've focused on:</Text>
            <FlatList 
                data={history}
                renderItem={renderItem}
            />
        </View>

    )}

const styles = StyleSheet.create({
    container:{
        padding: spacing.md,
        flex: 1,
    },
    title:{
        color: colors.white,
        fontSize: fontSizes.md,
        padding: spacing.md,
        fontWeight: 'bold',
    },
    item:{
        color: colors.white,
        fontSize: fontSizes.md,
        paddingTop: spacing.md,
    }
})