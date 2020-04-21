<template>
	
	<header class="admin-header">
    <button type="button" class="nav-toggle-button" @click="toggleNav">
      <span class="icon">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </span>
    </button>
    <nav>
      <ul>
        <li :class="{'active': $route.name == 'admin'}">
          <router-link to="/admin">Home</router-link>
        </li>
        <li :class="{'active': $route.name == 'products'}">
          <router-link to="/admin/products">Products</router-link>
        </li>
        <li :class="{'active': $route.name == 'categories'}">
          <router-link to="/admin/categories">Categories</router-link>
        </li>
      </ul>
    </nav>
  </header>

</template>

<script>
	
	export default {

    data() {
      return {}
    },

    methods: {
      toggleNav() {
        this.$store.commit("updateNaveVisibilty", !this.showNave);
      }
    },

    computed: {
      showNave() {
        return this.$store.state.admin.showNave;
      },
    },


	};

</script>

<style lang="scss">

$adminHeaderWidth: 200px;

// start admin content body style
#admin-content-body {
  transition: padding-left 0.5s;
  padding: 50px 20px 0;
  &.show-nav {
    padding-left: $adminHeaderWidth + 20;
  }
}
// end admin content body style

// start admin header style
.admin-header {
  width: $adminHeaderWidth;
  position: fixed;
  top: 0;
  left: 0;
  left: -$adminHeaderWidth;
  transition: left 0.5s;
  bottom: 0;
  background-color: #333;
  color: #fff;

  // start admin header nav toggle button style
  .nav-toggle-button {
    position: absolute;
    left: 100%;
    width: 40px;
    height: 40px;
    background: #333;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  
    // start admin header icons style
    .icon {
      position: relative;
      display: block;
      width: 100%;
      .line {
        position: absolute;
        width: 100%;
        display: block;
        height: 3px;
        background-color: #fff;
        transition: 0.5s;
        &.line-1 {
          transform: translateY(-8px);
        }
        &.line-3 {
          transform: translateY(8px);
        }
        .show-nav & {
          transform-origin: center;
          &.line-2 {
            opacity: 0;
          }
          &.line-1 {
            transform: translateY(0) rotate(45deg);
          }
          &.line-3 {
            transform: translateY(0) rotate(-45deg);
          }
        }
      }
    }
    // end admin header icons style

  }
  // end admin header nav toggle button style

  .show-nav & {
    left: 0;
  }

  nav {}
  
  // start admin header UL style
  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    // start admin header LI style
    li {
      font-size: 16px;
      &:hover {
        color: #ccc;
      }
      &.active {
        background-color: #000;
      }

      // start admin header router links style
      a {
        display: block;
        color: inherit;
        padding: 15px 20px;
        text-decoration: none;
      }
      // end admin header router links style

    }
    // start admin header LI style

  }

  // start admin header UL style
  
}
// end admin header style
</style>