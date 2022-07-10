// import mixpanel, { people } from "mixpanel-browser";
// import { types } from "util";
import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

const Mixpanel = {
    identify:(id) =>{
        mixpanel.identify(id);
    },
    alias:(id)=>{
        mixpanel.alias(id);
    },
    track:(name,props) => {
        mixpanel.track(name, props);
    },
    people: {
        set:(props)=>{
            mixpanel.people.set(props);
        }
    },
    TYPES:{
        TRY_LOGIN: "TRY_LOGIN",
        GO_TO_LOGIN: "GO_TO_LOGIN",
        CREATE_ACOUNT: "CREATE_ACCOUNT",
        VIEW_RECIPE: "VIEW_RECIPE",
        TRY_LOGIN:  "TRY_LOGIN"
    }  

};

export default Mixpanel