<template>
  <div>
    <header-section @addModalEvent="showModalHandler">
      <template #title>Categories List</template>
      <template #actionName>New Category</template>
    </header-section>

    <div class="page">
      <ve-loader class="page-loader" position="center" v-if="loading"></ve-loader>
      <div class="container" v-else>
        <div class="row">
          <div class="col-xs-12">
            <category-table 
              :categories="categories"
              @deleteCategory="showDeleteModalHandler"
              @editCategory="showModalHandler"
            >
            </category-table>
          </div>
        </div>
      </div>
    </div>

    <ve-modal :show="showModal" @close="hideModalHandler" :width="800">
      <category-form @cancelForm="hideModalHandler"></category-form>
      <!-- <category-form @cancelForm="hideModalHandler" :selected-category="selectedCategory"></category-form> -->
    </ve-modal>
    <delete-modal
      :show="showDeleteModal"
      @close="hideModalHandler"
      :loading="deleteLoading"
      @deleteCategory="deleteCategory"
    >
      <template #ConfirmationModalTitle>Are U sure ?</template>
    </delete-modal>
  </div>
</template>






<script>
import CategoryForm from "@/components/Admin/Categories/CategoryForm";
import DeleteModal from "@/components/Admin/Categories/DeleteModal";
import CategoryTable from "@/components/Admin/Categories/CategoryTable";
import HeaderSection from "@/components/Admin/HeaderSection.vue";
export default {
  components: {
    HeaderSection,
    CategoryForm,
    DeleteModal,
    CategoryTable
  },
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      selectedCategoryToDelete: null,
      deleteLoading: false,
      loading: false,
      // selectedCategory: null,
    };
  },
  computed: {
    categories() {
      return this.$store.state.admin.categories;
    }
  },
  mounted() {
    this.loading = true;
    this.$store.dispatch("admin/getCategories").finally( () => {
      this.loading = false;
    });
  },
  methods: {
    showModalHandler() {
      this.showModal = true;
      // this.selectedCategory = category;
    },
    hideModalHandler() {
      this.showModal = false;
      this.showDeleteModal = false;
    },
    showDeleteModalHandler(id) {
      this.showDeleteModal = true;
      this.selectedCategoryToDelete = id;
    },

    deleteCategory() {
      this.deleteLoading = true;
      this.$store
        .dispatch("admin/deleteCategory", this.selectedCategoryToDelete)
        .then(() => {
          this.hideModalHandler();
          this.selectedCategoryToDelete = null;
          this.deleteLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>