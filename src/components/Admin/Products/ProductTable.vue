<template>
  <div class="table-content">
    <table class="table table-borderd">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Control</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>{{ index + 1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td><img style="width:100px; height:50px;" :src="product.imageUrl" alt=""></td>
          <td>
            <ve-button color="info" size="small" @click="$emit('editProduct', product)" >
            Edit
            </ve-button>
            <ve-button color="error" size="small" @click="$emit('deleteProduct', product.id)" >
            Delete
            </ve-button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style scoped>
/*@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous");
*/
.table-content {
  margin-top: 15px;
}

table {
  border-collapse: collapse;
  background-color: #ccc;
  border-radius: 10px;
}

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}

.table .thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

th {
    text-align: inherit;
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: -internal-center;
}

td {
    display: table-cell;
    vertical-align: inherit;
}


@media only screen and (max-width: 600px) {
  th, td {
    font-family: sans-serif;
    text-align: left;
    font-size: 12px;
  }
}

</style>