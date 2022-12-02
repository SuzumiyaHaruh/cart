<template>
  <tr>
    <th scope="row">{{ item.name }}</th>
    <td>{{ item.category }}</td>
    <td>
      <button @click="min(index)" :disabled="item.qty <= 0 ">-</button>
      {{ item.qty }}
      <button @click="plu(index)">+</button>
    </td>
    <td>{{ item.price }}</td>
    <td>{{ item.qty * item.price }}</td>
    <td>
      <button @click="deleteGood(index)">删除</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: `cart`,
  props:{
    item:Object,
    index:Number,
  },
  methods: {
    // 删除商品
    deleteGood(index) {
      this.$emit('deleteGood', index)
      // 删除 1 个数组位置 index 起始的元素
      // this.goods.splice(index, 1);
    },
    // 减少数量
    min(index) {
      this.$emit('min', index)
      // this.goods[index].qty--;
    },
    // 增加数量
    plu(index) {
      this.$emit('plu', index)
      // this.goods[index].qty++;
    }
  }
}
</script>

<style scoped>

</style>