import axios from 'axios';

export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get('https://randomuser.me/api?results=10')
    }
}



export const incNumber = (number) => {
    return {
        type: 'INC_NUMBER',
        payload: number
    }
}

export const decNumber = () => {
    return {
        type: 'DEC_NUMBER',
        payload: 1
    }
}