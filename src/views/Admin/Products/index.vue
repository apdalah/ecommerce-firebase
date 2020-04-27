<template>
  <div>
    <header-section @addModalEvent="showModalHandler">
      <template #title>Products List</template>
      <template #actionName>New Product</template>
    </header-section>

    <div class="page">
      <ve-loader class="page-loader" position="center" v-if="loading"></ve-loader>
      <div class="container" v-else>
        <div class="row">
          <div class="col-xs-12">
            <product-table 
              :products="products"
              @deleteProduct="showDeleteModalHandler"
              @editProduct="showModalHandler"
            >
            </product-table>
          </div>
        </div>
      </div>
    </div>

    <ve-modal :show="showModal" @close="hideModalHandler" :width="800">
      <product-form @cancelForm="hideModalHandler" :product="selectedProduct"></product-form>
    </ve-modal>
    <delete-modal
      :show="showDeleteModal"
      @close="hideModalHandler"
      :loading="deleteLoading"
      @deleteItem="deleteProduct"
    >
      <template #ConfirmationModalTitle>Are U sure ?</template>
    </delete-modal>
  </div>
</template>






<script>
import ProductForm from "@/components/Admin/Products/ProductForm";
import DeleteModal from "@/components/Admin/DeleteModal";
import ProductTable from "@/components/Admin/Products/ProductTable";
import HeaderSection from "@/components/Admin/HeaderSection.vue";
export default {
  components: {
    HeaderSection,
    ProductForm,
    DeleteModal,
    ProductTable
  },
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      selectedProductToDelete: null,
      deleteLoading: false,
      loading: false,
      selectedProduct: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.ProductStore.products;
    }
  },
  mounted() {
    this.loading = true;
    this.$store.dispatch("ProductStore/getProducts").finally( () => {
      this.loading = false;
    });
  },
  methods: {
    showModalHandler(product) {
      this.showModal = true;
      this.selectedProduct = product;
    },
    hideModalHandler() {
      this.showModal = false;
      this.showDeleteModal = false;
    },
    showDeleteModalHandler(id) {
      this.showDeleteModal = true;
      this.selectedProductToDelete = id;
    },

    deleteProduct() {
      this.deleteLoading = true;
      this.$store
        .dispatch("ProductStore/deleteProduct", this.selectedProductToDelete)
        .then(() => {
          this.hideModalHandler();
          this.selectedProductToDelete = null;
          this.deleteLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>