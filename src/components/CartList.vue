<template>
  <!--  商品列表-->
  <div>
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th style="cursor: pointer" @click="handleSortBy(flag)" scope="col">Name↑↓</th>
        <th scope="col">Category</th>
        <th scope="col">Quantity</th>
        <th scope="col">(Standard) Price (USD)</th>
        <th scope="col">Sub-total(USD)</th>
        <th scope="col">Delete</th>
      </tr>
      </thead>
      <tbody>
      <!--    商品-->
      <template v-if="isShow">
        <cart @plu="plu" @min="min" @deleteGood="deleteGood" v-for="(item,index) in goods" :key="item.id" :item="item"
              :index="index"></cart>
      </template>
      <!--    按钮和总金额-->
      </tbody>
      <tr class="table-striped">
        <td></td>
        <td></td>
        <td></td>
        <td>Total</td>
        <td>{{ getTotal }}</td>
      </tr>
    </table>
    <div class="d-flex" style="justify-content: flex-end">
      <button type="button" class="mr-5 btn btn-outline-primary">Reset</button>
      <button type="button" class="mr-5 btn btn-primary">Checkout</button>
    </div>
  </div>
</template>

<script>
import Cart from "@/components/Cart";

export default {
  name: "CartList",
  components: {Cart},
  data() {
    return {
      flag: 0,//标记排序规则
      goods: this.$store.state.goods
    }
  },
  computed: {
    // 计算总价
    getTotal() {
      let total = 0;
      this.goods.map((item) => {
        total += item.price * item.qty;
      })
      return total
    },
    // 商品删除完后的显示控制
    isShow() {
      return this.goods.length > 0 ? true : false;
    }
  },
  methods: {
    /* 正序排列 从小到大 */
    handleSortBy() {
      this.flag = !this.flag //取放
      /* 对表身数组进行正序排列 */
      if (this.flag === 0) {
        this.goods.sort((a, b) => {
          return a[!this.goods.Name] > b[this.goods.Name] ? 1 : -1;
        })
      } else {
        /* 对表身数组进行倒序排列 */
        this.goods.sort((a, b) => {
          return a[this.goods.Name] < b[this.goods.Name] ? 1 : -1;
        })
      }
    },
    // 删除商品
    deleteGood(i) {
      // 删除 1 个数组位置 index 起始的元素
      this.goods.splice(i, 1);

    },
    // 减少数量
    min(i) {
      this.goods[i].qty--;
    },
    // 增加数量
    plu(i) {
      this.goods[i].qty++;
    }
  }
}
</script>

<style scoped>

</style>