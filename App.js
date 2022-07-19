import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location"
import {Alert} from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '10b02d8bbee5c06028dafdc9da201997'

export default class extends React.Component {

    state = {
        isLoading: true
    }

    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: { temp },
                weather,
                name,
            }
        } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        this.setState({
            temp,
            isLoading: false,
            condition: weather[0].main,
            city: name
        })
    }

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync()
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
            await this.getWeather(latitude, longitude)
        } catch (e) {
            Alert.alert("Не могу определить местоположение", "Очень грустно ")
        }

    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {isLoading, temp, condition, city} = this.state
        return (
            isLoading
                ? <Loading/>
                : <Weather temp={Math.round(temp)} condition={condition} city={city}/>
        );
    }
}
