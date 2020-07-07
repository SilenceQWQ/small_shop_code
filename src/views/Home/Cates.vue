<template>
  <div class="cates">
    <div class="nav-bar-cates">
      <van-nav-bar title="商品分类" />
    </div>
    <div class="content cates-content">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item @click="ClickSidebar" v-for="(item) in catesData" :title="item.title" />
        </van-sidebar>
      </div>
      <div class="right">
        <div v-for="(item ,index) in secondCate.children" class="cates-content-shop">
          <van-row>
            <van-col class="cates-title" span="24" style="text-align:center;">{{item.title}}</van-col>
          </van-row>
          <van-row gutter="5">
            <van-col v-for="(item1 ,index1) in item.children" class="cell" span="8" style="text-align:center;">
              <img
                class="cates-image"
                :src="item1.img"
              />
              <div class="cates-text">{{item1.title}}</div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      catesData: [
        {
          title: "手机1",
          id: "0001",
          children: [
            {
              title: "手机分类1",
              id: "001",
              children: [
                {
                  title: "小米1",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "01"
                },
                {
                  title: "小米2",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "02"
                },
                {
                  title: "小米3",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "03"
                },
                {
                  title: "小米4",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "04"
                },
                {
                  title: "小米5",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "05"
                }
              ]
            },
            {
              title: "手机分类2",
              id: "002",
              children: [
                {
                  title: "华为1",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "06"
                },
                {
                  title: "华为2",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "07"
                },
                {
                  title: "华为3",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "08"
                },
                {
                  title: "华为4",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "09"
                },
                {
                  title: "华为5",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "010"
                }
              ]
            },
            {
              title: "手机分类2",
              id: "002",
              children: [
                {
                  title: "华为1",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "06"
                },
                {
                  title: "华为2",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "07"
                },
                {
                  title: "华为3",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "08"
                },
                {
                  title: "华为4",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "09"
                },
                {
                  title: "华为5",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "010"
                }
              ]
            },
            {
              title: "手机分类3",
              id: "003",
              children: [
                {
                  title: "华为1",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "06"
                },
                {
                  title: "华为2",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "07"
                },
                {
                  title: "华为3",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "08"
                },
                {
                  title: "华为4",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "09"
                },
                {
                  title: "华为5",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "010"
                }
              ]
            },
            {
              title: "手机分类4",
              id: "004",
              children: [
                {
                  title: "华为1",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "06"
                },
                {
                  title: "华为2",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "07"
                },
                {
                  title: "华为3",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "08"
                },
                {
                  title: "华为4",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "09"
                },
                {
                  title: "华为5",
                  img:
                    "https://img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "010"
                }
              ]
            }
          ]
        },
        {
          title: "家电",
          id: "0002",
          children: [
            {
              title: "家电影音",
              id: "003",
              children: [
                {
                  title: "小米1",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "01"
                },
                {
                  title: "小米2",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "02"
                },
                {
                  title: "小米3",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "03"
                },
                {
                  title: "小米4",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "04"
                },
                {
                  title: "小米5",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "05"
                }
              ]
            },
            {
              title: "手机分类1",
              id: "004",
              children: [
                {
                  title: "华为1",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "06"
                },
                {
                  title: "华为2",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "07"
                },
                {
                  title: "华为3",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "08"
                },
                {
                  title: "华为4",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "09"
                },
                {
                  title: "华为5",
                  img:
                    "//img.alicdn.com/tfs/TB1RNvfCVT7gK0jSZFpXXaTkpXa-442-565.png_130x130Q90s50.jpg_.webp",
                  id: "010"
                }
              ]
            }
          ]
        },
        {
          title: "手机3"
        },
        {
          title: "手机4"
        },
        {
          title: "手机5"
        },
        {
          title: "手机6"
        },
        {
          title: "手机7"
        },
        {
          title: "手机8"
        },
        {
          title: "手机9"
        },
        {
          title: "手机10"
        },
        {
          title: "手机11"
        },
        {
          title: "手机12"
        }
      ],
      secondCate: []
    };
  },
  created() {
    this.secondCate = this.catesData[0];
  },
  methods: {
    ClickSidebar(index) {
      this.secondCate = this.catesData[index];
    }
  }
};
</script>
<style>
.demo {
  height: 20rem;
  width: 100%;
}
.cates-content {
  padding-top: 1.22667rem;
  position: fixed;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.left {
  width: 2.26667rem;
  overflow: auto;
  float: left;
}
.right {
  float: left;
  width: 7.706667rem;
  box-sizing: border-box;
  padding-top: 0.266667rem;
  overflow: auto;
}
.left,
.right {
  height: 86vh;
}
.nav-bar-cates {
  z-index: 999;
  width: 10rem;
  position: fixed;
  height: 1.22667rem;
  background-color: #fff;
}
.cates-content-shop {
}
.cates {
}
.cates-title {
  font-size: 0.48rem;
  color: #333;
  text-align: center;
  font-weight: bolder;
}
.cell {
  text-align: center;
  box-sizing: border-box;
  padding: 0.266667rem 0;
}
.cates-image {
  width: 1.706667rem;
  height: 1.706667rem;
}
.cates-text {
  color: #333;
  font-size: 0.32rem;
}
</style>