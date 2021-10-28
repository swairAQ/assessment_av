import { Platform, NativeModules } from 'react-native'
import LocalizedStrings from 'react-native-localization';

export const locale =
    Platform.OS === 'ios' ?
        (NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0])
        : NativeModules.I18nManager.localeIdentifier;
export var DEFAULT_LANGUAGE = locale.split("-")[0];
const Strings = new LocalizedStrings({
    en: {
        Employee: "Employee",
        Weather: 'Weather',
        Home_welcome: "Hello,\nWhat would you like to check today?",
        Morning: 'Good morning!',
        Afternoon: 'Good afternoon!',
        Evening: 'Good evening!',
        Edit: 'Edit',
        Delete: 'Delete',
        Name: 'Name',
        Age: 'Age',
        AddEmployee: 'Add Employee',
        UpdateEmployee: 'Update Employee',
        tempPostfix: '°C',
        Login: 'Login',
        Username: 'Username',
        Password: 'Password',
    },
    sv: {
        Employee: "Employee",
        Weather: 'Weather',
        Home_welcome: "Hello,\nWhat would you like to check today?",
        Morning: 'Good morning!',
        Afternoon: 'Good afternoon!',
        Evening: 'Good evening!',
        Edit: 'Edit',
        Delete: 'Delete',
        Name: 'Name',
        Age: 'Age',
        AddEmployee: 'Add Employee',
        UpdateEmployee: 'Update Employee',
        tempPostfix: '°C',
        Login: 'Login',
        Username: 'Username',
        Password: 'Password',


    },
});

Strings.setLanguage(DEFAULT_LANGUAGE);


export function changeLanugae(lang: string) {
    Strings.setLanguage(lang);
    DEFAULT_LANGUAGE = lang
}
export default Strings;
