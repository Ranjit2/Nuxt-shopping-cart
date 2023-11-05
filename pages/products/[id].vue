<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card mt-5">
                    <div class="card-body">
                        <img :src="product.image" class="img-responsive" width="150" height="200">
                        <p>{{ product.title }}</p>
                    </div>
                    <button class="btn btn-primary" @click.prevent="addToCart(product.id, product)">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();

const { data: product } = await useFetch('https://fakestoreapi.com/products/' + route.params.id)

const cart = cartItems();

const addToCart = (id, product) => {
    let item = cart.value.find(product => product.id == id)

    if (!item) {
        cart.value.push({
            id: id,
            title: product.title,
            price: product.price,
            image: product.image,
            qty: 1
        })
    } else {
        item.qty = item.qty + 1
    }
}

</script>