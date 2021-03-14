import React from 'react';
import { TGState } from './types/TGState'
import { TAction } from './types/TAction'

const initialState: TGState = { currentCoin: 'ETH', errorMsg: '' }

export const Store = React.createContext<TGState | any>(initialState)


const reducer = (gState: TGState, action: TAction): TGState => {
    switch (action.type) {
        case 'UPDATE_CURRENT_COIN':
            return { ...gState, currentCoin: action.payload }
        case 'SET_ERROR_MSG':
            return { ...gState, errorMsg: action.payload }
        default:
            return gState
    }
}

export const StoreProvider = (props: any): JSX.Element => {
    const [gState, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{ gState, dispatch }}>{props.children}</Store.Provider>
} 