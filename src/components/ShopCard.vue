<template>
  <div class="shop-card">
    <div v-for="(item,index) in shopData" class="shop-item" @click="DemoClick(item)">
      <div class="img-shop-item">
        <img class="img-shop" :src="item.img" alt />
      </div>
      <div class="name-shop-item">{{item.name}}</div>
      <div class="price-shop-item">￥{{item.price}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array
  },
  data() {
    return {
      shopData: []
    };
  },
  created() {
    this.shopData = this.data;
    console.log(this.shopData);
  },
  methods: {
    DemoClick(item) {
      this.$emit("onClick",item);
    }
  }
};
</script>
<style>
.shop-card {
  display: inline-block;
  box-sizing: border-box;
}
.img-shop {
  width: 3.68rem;
  height: 3.68rem;
}
.shop-item {
  display: inline-block;
  width: 4.48rem;
  box-sizing: border-box;
  border: 0.013333rem solid rgb(237, 237, 237);
}
.shop-card .shop-item {
  margin-top: 0.133333rem;
  margin-bottom: 0.133333rem;
}
.shop-card .shop-item:nth-child(odd) {
  margin-right: 0.106667rem;
}
.shop-card .shop-item:nth-child(even) {
  margin-left: 0.106667rem;
}
.img-shop-item {
  box-sizing: border-box;
  padding: 0.4rem;
  background-color: rgba(0, 0, 0, 0.03);
}
.price-shop-item {
  font-size: 0.426667rem;
  text-align: left;
  font-weight: 600;
  color: rgb(255, 0, 0);
  padding-left: 0.266667rem;
}
.name-shop-item {
  width: 100%;
  color: rgb(62, 62, 62);
  font-size: 14px;
  text-align: left;
  box-sizing: border-box;
  padding: 0.266667rem 0.266667rem 0 0.266667rem;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>