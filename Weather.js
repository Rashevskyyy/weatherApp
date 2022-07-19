import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ["#141E30", "#243B55"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ["#3a7bd5", "#3a6073"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ["#000046", "#1CB5E0"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ["#83a4d4", "#b6fbff"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ["#B79891", "#94716B"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ["#56CCF2", "#2F80ED"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ["#3E5151", "#DECBA4"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ["#606c88", "#3f4c6b"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ["#56CCF2", "#2F80ED"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ["#757F9A", "#D7DDE8"],
        title: 'Заголовок',
        subTitle: 'Подзаголовок'
    },
}

const Weather = ({temp, condition, city}) => {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.city}>{city}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    city: {
        fontSize: 24,
        color: "white",
    }
})

export default Weather;
