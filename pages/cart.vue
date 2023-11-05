<template>
  <div class="container mt-5">
    <table class="table">
      <thead>
        <th>Name</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total price</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td><img :src="item.image" width="80"> {{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.qty }}</td>
          <td>{{ (item.qty * item.price).toFixed(2) }}</td>
          <td>
            <span><button class="btn btn-primary btn-sm" @click.prevent="increaseQty(item.id)">+</button>
              <button class="btn btn-danger btn-sm" @click.prevent="decreaseQty(item.id)">-</button></span>
          </td>
        </tr>
      </tbody>
      <div class="d-flex justify-content-between">
        <div></div>
        <div>Total price:${{ totalQty }}</div>
      </div>

    </table>
  </div>
</template>

<script setup>

const items = cartItems();

const totalQty = computed(() => {
  let sum = 0;
  items.value.forEach((item) => {
    sum += item.qty * item.price
  });

  return sum.toFixed(2);
})

const increaseQty = (id) => {
  let item = items.value.find(product => product.id == id);
  if (item) {
    item.qty++;
  }
}

const decreaseQty = (id) => {
  let item = items.value.find(product => product.id == id);
  if (item) {
    item.qty--;

    if (item.qty < 1) {
      const index = items.value.indexOf(item)
      items.value.splice(index, 1)
    }
  }
}
</script>
