<template>
    <router-link tag="li" :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props:["to"],
}
</script>
