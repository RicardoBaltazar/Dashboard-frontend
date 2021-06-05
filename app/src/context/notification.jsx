import React from 'react';

export const NotificationContext = React.createContext();

export const NotificationProvider = (props) => {
    const [ notification, setNotification ] = React.useState(false);

    return (
        <NotificationContext.Provider value={{ notification, setNotification }}>
            {props.children}
        </NotificationContext.Provider>
    )
};
export const useNotification = () => React.useContext(NotificationContext);