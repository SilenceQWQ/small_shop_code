<template>
  <div>
    <div class="nav-bar-shopcar">
      <van-nav-bar title="购物车" />
    </div>
    <div class="content shopcar-content">
      <div class="shopcar-content-item" v-for="(item,index) in shopList">
        <van-row>
          <van-col span="2">
            <div class="content-checkbox">
              <van-checkbox
                class="content-checkbox-item"
                @change="itemChange()"
                v-model="item.checked"
              ></van-checkbox>
            </div>
          </van-col>
          <van-col span="22">
            <van-card
              :num="item.num"
              :price="item.price"
              :desc="item.desc"
              :title="item.name"
              :thumb="item.img"
            >
              <template #footer>
                <van-button @click="add(item,index)" size="mini">+</van-button>
                <van-button @click="sub(item,index)" size="mini">-</van-button>
              </template>
            </van-card>
          </van-col>
        </van-row>
      </div>
      <van-submit-bar :price="totalPrice" button-text="提交订单">
        <van-checkbox @click="totalChange()" v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  created() {
    this.checked = this.$store.getters.getTotalChecked ? true : false;
  },
  computed: {
    shopList() {
      return this.$store.state.shopList;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
    TotalChecked() {
      return this.$store.getters.getTotalChecked;
    }
  },
  methods: {
    itemChange() {
      this.checked = this.$store.getters.getTotalChecked ? true : false;
    },
    totalChange() {
      this.$store.commit("toAllChecked", this.checked);
    },
    add(item,index) {
      this.$store.commit("numAdd", index);
    },
    sub(item,index) {
      if (item.num < 1) return false;
      this.$store.commit("numSub", index);
    }
  }
};
</script>
<style >
.nav-bar-shopcar {
  z-index: 999;
  width: 10rem;
  position: fixed;
  height: 1.22667rem;
  background-color: #fff;
}
.shopcar-content {
  padding-top: 1.22667rem;
  padding-bottom: 2.666666rem;
}
.shopcar-content .van-submit-bar {
  bottom: 1.333333rem;
}
.van-card .van-button {
  width: 0.8rem;
  font-size: 0.32rem;
}
.shopcar-content-item {
  box-sizing: border-box;
  margin-top: 0.266667rem;
  border: 0.013333rem solid rgb(237, 237, 237);
  background-color: #fafafa;
}
.shopcar-content-item:nth-child(1) {
  margin-top: 0;
}
.content-checkbox {
  width: 100%;
  height: 3.413333rem;
  position: relative;
}
.content-checkbox-item {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  padding-left: 0.133333rem;
  box-sizing: border-box;
}
.van-card {
  height: 3.413333rem;
}
</style>