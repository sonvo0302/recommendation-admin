import Category from '../components/Category';
import ApiService from '../utils/api';

const apiBase = process.env.ROOT_API;
const client = new ApiService({ baseURL: apiBase });

const category = {};

category.getCategories = () => client.get('/category');

category.getFilmByCategory = (category_id) => client.get(`/category/${category_id}`);

export default category;
