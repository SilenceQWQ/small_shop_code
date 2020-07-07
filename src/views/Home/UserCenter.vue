<template>
  <div>
    <div class="user-center-top">
      <div class="user-center-title">个人中心</div>
      <div class="user-center-info">
        <van-image class="user-center-img" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="user-center-name">Hi~</div>
      </div>
      <div class="user-center-shopinfo">
        <van-row>
          <van-col span="6" class="shopinfo-item">
            <div class="shopinfo-title">收藏夹</div>
            <div class="shopinfo-num">24</div>
          </van-col>
          <van-col span="6" class="shopinfo-item">
            <div class="shopinfo-title">关注店铺</div>
            <div class="shopinfo-num">0</div>
          </van-col>
          <van-col span="6" class="shopinfo-item">
            <div class="shopinfo-title">足迹</div>
            <div class="shopinfo-num">2</div>
          </van-col>
          <van-col span="6" class="shopinfo-item">
            <div class="shopinfo-title">红包卡券</div>
            <div class="shopinfo-num">24</div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="user-center-content">
        <div class="user-center-order"></div>
    </div>
  </div>
</template>
<style >
.user-center-top {
  position: relative;
  width: 100%;
  height: 7.133333rem;
  background-color: rgb(255, 0, 54);
  overflow: hidden;
}
.user-center-title {
  padding: 0.533333rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.48rem;
  font-weight: bold;
  color: #fff;
}
.user-center-info {
  position: relative;
}
.shopinfo-item{
    box-sizing: border-box;
    padding-top: .4rem
}
.shopinfo-title {
    font-size: .373333rem;
}
.shopinfo-num {
    font-size: .32rem
}
.shopinfo-title,
.shopinfo-num {
  color: rgb(255, 255, 255);
  text-align: center;
}
.user-center-img {
  position: absolute;
  width: 2.666667rem;
  height: 2.666667rem;
  top: 0.266667rem;
  left: 1.066667rem;
}
.user-center-name {
  position: absolute;
  font-weight: bold;
  color: #fff;
  font-size: 0.48rem;
  top: 1.2rem;
  left: 4.3rem;
}
.user-center-shopinfo {
  height: 2rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 0.533333rem;
}
.user-center-content{
    box-sizing: border-box;
    width: 100%;
    padding: 0.266667rem 0.266667rem 0 0.32rem;
    background-color: rgba(0, 0, 0, 0.03)
}
.user-center-order{
    border-radius: .266667rem;
    height: 1.333333rem;
    width: 100%;
    background-color: #fff;
}
</style>