import axios from '../config/axios.instance';

async function fetchTree(path) {
    const pathQuery = path ? `?path=${path}` : '';

    const { data } = await axios.get(`tree-map${pathQuery}`);

    return data;
}

export default fetchTree; 