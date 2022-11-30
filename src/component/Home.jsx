import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Covid/covidSlice';


export default function Home() {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}
