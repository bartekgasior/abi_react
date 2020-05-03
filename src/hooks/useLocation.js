import { useDispatch, useSelector } from 'react-redux';
import locationActions from '../redux/location/duck/action';
import { useState } from 'react';

export const useLocation = () => {
    const currentLocation = useSelector(state => state.locations.currentLocation);
    const [location, setNextLocation] = useState(currentLocation);
    const dispatch = useDispatch();

    const setLocation = loc => {
        dispatch(locationActions.set(loc));
        setNextLocation(loc);
    }

    //const [currentLocation, setCurrentLocation] = useSelector(state => state.locations.currentLocation);
    return { location, setLocation };
}