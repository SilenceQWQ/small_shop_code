<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <van-row>
        <van-col span="3">登录</van-col>
        <van-col span="18">
          <van-search shape="round" placeholder="请输入搜索关键词" />
        </van-col>
        <van-col span="3">搜索</van-col>
      </van-row>
    </div>
    <div class="content index-content">
      <!-- 轮播图 -->
      <div class="swipe">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width:100%;height:4.8rem;" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content-shops">
        <div class="hot-title">热门推荐</div>
        <ShopCard @onClick="fatherMethod" :data="shopsData"></ShopCard>
      </div>
    </div>
  </div>
</template>

<script>
import ShopCard from "../../components/ShopCard.vue";
export default {
  components: {
    ShopCard
  },
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg"
      ],
      shopsData: [
        {
          id: "01",
          name: "张小盒儿童男女28寸万向轮拉杆箱啊啊啊啊啊啊啊啊啊啊啊",
          img:
            "https://gw.alicdn.com/bao/uploaded/i3/899554810/O1CN01pZLAj61lP1eSHinz4_!!899554810.jpg_290x10000Q75.jpg_.webp",
          price: "229"
        },
        {
          id: "01",
          name: "张小盒儿童男女28寸万向轮拉杆箱",
          img:
            "https://gw.alicdn.com/bao/uploaded/i3/899554810/O1CN01pZLAj61lP1eSHinz4_!!899554810.jpg_290x10000Q75.jpg_.webp",
          price: "229"
        },
        {
          id: "01",
          name: "张小盒儿童男女28寸万向轮拉杆箱",
          img:
            "https://gw.alicdn.com/bao/uploaded/i3/899554810/O1CN01pZLAj61lP1eSHinz4_!!899554810.jpg_290x10000Q75.jpg_.webp",
          price: "229"
        }
      ]
    };
  },
  methods: {
    onSearch() {},
    fatherMethod(item) {
      console.log(item.id);
    }
  }
};
</script>
<style>
.my-swipe {
  height: 4.8rem;
}
.search {
  z-index: 999;
  width: 10rem;
  position: fixed;
  height: 1.44rem;
  background-color: #fff;
}
.search .van-col {
  height: 1.44rem;
  line-height: 1.44rem;
  color: #323233;
  font-size: 0.373333rem;
  text-align: center;
}
.index-content {
  padding-top: 1.44rem;
}
.content-shops {
  box-sizing: border-box;
  padding: 0 0.266667rem 0 0.32rem;
}
.hot-title {
  font-size: 0.48rem;
  font-weight: bold;
  margin-top: .266667rem;
  color: rgb(51, 51, 51);
}
</style>