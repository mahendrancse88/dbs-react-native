import Axios from "axios"

import {ACTIONS} from '../reducers/SearchReducer';

export const fetchData = async (query, dispatch) => {

    dispatch({ type: ACTIONS.SET_LOADING, payload: true })

    try {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                q: query,
                limit: 16,
                page: 1
            }
        })
        if (res.data) {

            dispatch({ type:ACTIONS.SET_DATA, payload: res.data })

        } else if (res.data.error) {

            alert("error")
            dispatch({ type: ACTIONS.SET_ERROR, payload: "something went wrong" })

        }
        dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        dispatch({ type: ACTIONS.SET_LOADING_MORE, payload: false })
        dispatch({ type: ACTIONS.SET_ERROR, payload: null })
    } catch (error) {

        console.log(error);
        dispatch({ type: ACTIONS.SET_ERROR, payload: error })
        dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        dispatch({ type: ACTIONS.SET_LOADING_MORE, payload: false })

    }


}

export const fetchNextPage = async (query, page, DATA, dispatch) => {


    try {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                q: query,
                limit: 16,
                page: page
            }
        })
      
        if (res.data.length > 0) {
            if (res.data.length == 0) {

                alert("no more results found")

                return

            }
            console.log(res.data);
            dispatch({ type: ACTIONS.SET_DATA, payload: [...DATA, ...res.data] })

        } else if (res.data.error) {
            alert("try again")
        }

        dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        dispatch({ type: ACTIONS.SET_LOADING_MORE, payload: false })
    } catch (error) {

        console.log(error);

        dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        dispatch({ type: ACTIONS.SET_LOADING_MORE, payload: false })

    }

}