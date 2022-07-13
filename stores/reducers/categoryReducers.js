import {INSERT_CATEGORY} from "../actions/categoryAction";
import Category from "./../../models/Category";


const initialState = {
    categories: [
        new Category(1, "Hat"),new Category("2","Shoes")
    ],
};

export default (state = initialState, action) => {
    const {type, category} = action;

    switch(type) {
        case INSERT_CATEGORY:
            return {...state, categories: [...state.categories, category ]};
        default:
            return state;
    }
}