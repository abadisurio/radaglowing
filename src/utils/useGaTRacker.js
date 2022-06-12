import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const useGaTRacker = (category = "Blog category") => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize("UA-155000208-1");
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);


    // console.log('event')
    const eventTracker = (action = "test action", label = "test label") => {
        console.log('event', action)
        ReactGA.event({ category, action, label });
    }
    return eventTracker;
}

export default useGaTRacker