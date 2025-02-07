import React, { useEffect } from "react";

export const AnalyticsContext = React.createContext<AnalyticsContextType>({
    hoverEvents: 0,
    clicks: 0,
    logHover: () => {},
    logClick: () => {}
});

export default function AnalyticsProvider({children}: {children: React.ReactNode}) {
   const [state, dispatch] = React.useReducer(reducer, initialState);

   useEffect(() => {
         console.log("Hover events: ", state.hoverEvents);
   }, [state]);

 

    return (
        <AnalyticsContext.Provider value={{
            hoverEvents: state.hoverEvents,
            clicks: state.clicks,
            logHover: () => dispatch({type: "HOVER"}),
            logClick: () => dispatch({type: "CLICK"})
        }} >
            {children}
        </AnalyticsContext.Provider>
    )

}

interface AnalyticsContextType {
    hoverEvents: number;
    clicks: number;
    logHover: () => void;
    logClick: () => void;
}

const initialState = {
    hoverEvents: 0,
    clicks: 0
};

const reducer = (state: typeof initialState, action: {type: string}) => {
    switch (action.type) {
        case "HOVER":
            return {
                ...state,
                hoverEvents: state.hoverEvents + 1
            };
        case "CLICK":
            return {
                ...state,
                clicks: state.clicks + 1
            };
        default:
            return state;
    }
};