<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="product in products">
                <div class="card mt-5">
                    <div class="card-body">
                        <img :src="product.image" class="img-responsive" width="150" height="200">
                        <p>{{ product.title }}</p>
                        <p>${{ product.price }}</p>
                    </div>
                    <NuxtLink :to="`products/${product.id}`" class="text-center mb-2 btn btn-primary">View</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { pending, error, data: products } = await useFetch('https://fakestoreapi.com/products')

</script>