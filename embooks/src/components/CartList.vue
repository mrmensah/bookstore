<template>
  <div v-if="products.length > 0">
    <CartListItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <p v-else>You have not added any item to your cart</p>
</template>

<script>
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  props: ["products"],
};
</script>
