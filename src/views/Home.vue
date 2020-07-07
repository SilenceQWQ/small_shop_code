<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active" inactive-color="#000" route>
      <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/cates">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/home/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/home/usercenter">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
