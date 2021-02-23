<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import { products } from "../fake-data";
import ProductsGrid from "../components/ProductsGrid";

export default {
  name: "ProductsPage",
  data() {
    return {
      products,
    };
  },
  components: {
    ProductsGrid,
  },
};
</script>
