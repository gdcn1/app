import axios from "axios";
import Context from '../utils/context';

export default axios.create({
    baseURL: Context.apiUrl,
});
