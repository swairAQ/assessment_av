import AsyncStorage from '@react-native-async-storage/async-storage';


export async function setValue(sKey: string, value: any) {

    try {
        if (sKey == null || sKey == '') return false;

        const sValue = JSON.stringify(value);
        await AsyncStorage.setItem(sKey, sValue);

        return true;
    } catch (sError) {
        return false;
    }
}

export async function getValue(sKey: string) {
    try {
        if (sKey == null || sKey == '') return '';

        const sValue = await AsyncStorage.getItem(sKey);
        return JSON.parse(sValue != null ? sValue : '');
    } catch (sError) {
        return '';
    }
}

export async function removeItemValue(sKey: string) {
    try {
        if (sKey == null || sKey == '') return false;

        await AsyncStorage.removeItem(sKey);
        return true;
    } catch (sError) {
        log(`Storage removeItemValue >> Key: ${sKey} Error: ${sError}`);
        return false;
    }
}

export async function clearValues() {
    try {
        console.log("Log === await AsyncStorage.clear();")
        await AsyncStorage.clear();
        return true;
    } catch (sError) {
        log(`Storage clearValues >> Error: ${sError}`);
        return false;
    }
}
