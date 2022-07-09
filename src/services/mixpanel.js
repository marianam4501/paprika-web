import mixpanel, { people } from "mixpanel-browser";
import { types } from "util";

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
        GO_TO_LOGIN: "GO_TO_LOGIN",
        CREATE_ACOUNT: "CREATE_ACCOUNT",
        VIEW_RECIPE: "VIEW_RECIPE",
    }  

};

export default Mixpanel