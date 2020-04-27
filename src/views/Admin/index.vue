<template>
  <div id="admin-content-body" :class="{'show-nav': showNave}">
  	<link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
      rel="stylesheet"
    />
    <admin-header></admin-header>
    <router-view />
  </div>
</template>

<script>

	import AdminHeader from "@/components/Admin/AdminHeader";

	export default {

		components: {

			AdminHeader
		},

    computed: {
      showNave() {
        return this.$store.state.AdminStore.showNave;
      }
    },


	};

</script>

<style>
  body{
    font-family: 'Lato', sans-serif;
  }
</style>
