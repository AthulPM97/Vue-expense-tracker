<template>
    <div>
        {{ expenses }}
    </div>
</template>

<script>
    // import { mapState } from 'vuex';
    // console.log(this)
    export default {
        name: 'ExpenseView',
        computed: {
            expenses() {
                return this.$store.state.expense.expenses
            }
        }
    }
</script>