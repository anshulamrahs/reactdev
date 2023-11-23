import { useEffect ,useState} from "react";
import { MENU_API_URL } from '../utils/constants';


const useResMenu = (resId) => {

    const [resMenu,setResMenu] = useState(null); 

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResMenu(json.data);
    };
    return resMenu;
}

export default useResMenu;