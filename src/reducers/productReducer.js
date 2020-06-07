export const initState = [
    {
        id: 1,
        value: 'Tuyen'
    },
    {
        id: 2,
        value: 'Ngoc'
    },
    {
        id: 3,
        value: 'Ha'
    },
]
const productReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}
export default productReducer;
