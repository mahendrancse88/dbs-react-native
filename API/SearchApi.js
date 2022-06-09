import Axios from "axios"

import {ACTIONS} from '../reducers/SearchReducer';

export const fetchData = async (query, dispatch, data) => {
    
    dispatch({ type: ACTIONS.SET_LOADING, payload: true })
    let arrySet =[];
    if(query.length < 2) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: null }) 
    }
    try {
       
        data.filter(item => {
            if(item.body.toString().toLowerCase().indexOf(query.toLowerCase()) > -1) {
                arrySet.push(item)
            }
        })


        if (arrySet.length > 0) {
           
            dispatch({ type:ACTIONS.SET_DATA, payload: arrySet })
       

        } 
        dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        dispatch({ type: ACTIONS.SET_LOADING_MORE, payload: false })
        dispatch({ type: ACTIONS.SET_ERROR, payload: null })
    } catch (error) {

        console.log(error);
        dispatch({ type: ACTIONS.SET_ERROR, payload: error })
        dispatch({ type: ACTIONS.SET_LOADING_MORE, payload: false })
        dispatch({ type: ACTIONS.SET_LOADING, payload: false })

    }


}

export const fetchDataAll = async ( dispatch) => {

    dispatch({ type: ACTIONS.SET_LOADING, payload: true })
    let arrySet =[];
    try {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
        if (res.data) {
            for (var j =0; j < 30; j++) {
                for (var i =0; i < 100; i++) {
                    let randm = Math.floor(Math.random() * (9000000000-1000000000+1)) + 1000000000;
                    arrySet.push({
                        id:res.data[i].id,
                        title:res.data[i].title,
                        body:res.data[i].body,
                        userId:res.data[i].userId,
                        random:randm
                    })
                }
            }
            dispatch({ type:ACTIONS.SET_DATA, payload: arrySet })
       

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
        dispatch({ type: ACTIONS.SET_LOADING_MORE, payload: false })
        dispatch({ type: ACTIONS.SET_LOADING, payload: false })
      

    }


}
