<template>
    <div class="list">
        <table>
            <thead>
                <td>#</td>
            </thead>
        </table>
        <div>idx</div><div>date</div><div>category</div><div>value</div>
        <div class="item" 
            v-for="(item, idx) in items" 
            :key="idx">
            {{ idx + 1 }} - {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        items: {
            type: Array,
            default: ()=>[],
        }
    }
}
</script>