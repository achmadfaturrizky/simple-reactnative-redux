const initialState = {
    number: 100,
    data: [],
    results: [],
    isLoading: false,
}

// this.setState({
//     notes: {
//         number
//     }
// })
export default notes = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NOTES_PENDING':
            return {
                isLoading: true
            }
        case 'GET_NOTES_REJECTED':
            return {
                isLoading: false
            }
        case 'GET_NOTES_FULFILLED':
            return {
                isLoading: false,
                data: action.payload.data.results
            }
        case 'INC_NUMBER':
            return { number: action.payload }

        case 'DEC_NUMBER':
            return { number: action.payload }

        default:
            return state;
    }

}