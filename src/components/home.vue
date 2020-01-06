<template>
<div id="home">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-swipe :autoplay="3000" indicator-color="white" height="300" >
            <van-swipe-item class="swipe-item"><img src="" alt=""></van-swipe-item>
            <van-swipe-item class="swipe-item"><img src="" alt=""></van-swipe-item>
            <van-swipe-item class="swipe-item"><img src="" alt=""></van-swipe-item>
    </van-swipe>
    <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">个人中心</van-tabbar-item>
</van-tabbar>
</div>
 
</template>

<script>
export default {
data(){
    return {


    }
}
}
</script>

<style>
.swipe-item{
    background-color: red;
}
img{
    height: 300px;
    width: 100%;
    background-color: blue;
}

</style>