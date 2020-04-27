// import my firestore functions
import {
  addToCollection,
  updateDocumnet,
  getCollection,
  deleteFromCollection
} from "@/firebase/functions/firestore.js";

// import collection name for products in firebase
import { PRODUCTS } from "@/firebase/collections/firestore.js";

import { uploadToStorage } from "@/firebase/functions/storage.js";

export default {
	submitProductForm({ commit, state }, { product, imageFile }) {
    return uploadToStorage(imageFile).then(imageUrl => {
      const productObj = { ...product, imageUrl };
      return addToCollection(PRODUCTS, productObj).then(doc => {
        commit(
          "updateProducts",
          state.products.concat(Object.assign({}, productObj, { id: doc.id }))
        );
      });
    });
  },

  submitEditProductForm({ commit, state }, { product, id, imageFile }) {
    const uploadImage = imageFile ? uploadToStorage(imageFile) : Promise.resolve(null);
    return uploadImage.then(imageUrl => {
      const productObj = { ...product };
      if(imageUrl) productObj['imageUrl'] = imageUrl;
      return updateDocumnet(PRODUCTS, id, productObj).then(() => {
        commit(
          "updateProducts",
          state.products.map( product => {
            if(product.id == id){
              return Object.assign({}, product, productObj)
            }
            return product;
          })
        );
      });
    });
  },

  getProducts({commit}) {
		getCollection(PRODUCTS).then(querySnapshot => {
			let products = querySnapshot.docs.map(queryDoc => Object.assign({}, queryDoc.data(), {id: queryDoc.id}));
			commit("updateProducts", products);
		});
  },

  deleteProduct({commit, state}, productId) {
    return deleteFromCollection(PRODUCTS, productId).then(() => {
      commit("updateProducts", state.products.filter(product => product.id != productId));
    });
  }
};