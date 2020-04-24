// import my firestore functions
import {
  addToCollection,
  // updateDocumnet,
  getCollection,
  deleteFromCollection
} from "@/firebase/functions/firestore.js";

// import collection name for categories in firebase
import { CATEGORIES } from "@/firebase/collections/firestore.js";

export default {
	submitCategoryForm({commit, state}, category){
  		return addToCollection(CATEGORIES, category).then((queryDoc) => {
        commit("updateCategories", state.categories.concat(Object.assign({}, category, {id: queryDoc.id})));
      });
  	},

  	getCategories({commit}) {
  		getCollection(CATEGORIES).then(querySnapshot => {
  			let categories = querySnapshot.docs.map(queryDoc => Object.assign({}, queryDoc.data(), {id: queryDoc.id}));
  			commit("updateCategories", categories);
  		});
  	},

    deleteCategory({commit, state}, categoryId) {
      return deleteFromCollection(CATEGORIES, categoryId).then(() => {
        commit("updateCategories", state.categories.filter(category => category.id != categoryId));
      });
    }
};