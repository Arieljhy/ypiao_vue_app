<template>
    <div>
        <video src="../../../public/res/x.mp4" controls loop preload="auto" ></video>
        <!-- preload 预加载  auto：自动   none 不预加载  metadata 至预加载元数据
            muted 静音播放
            loop 循环播放
            control 显示控件
            autoplay 自动播放//几乎不用 适配很差

            poster: 播放视频之前 显示的一张图片

         -->
    </div>
</template>
<style lang="scss" scoped>
video{
    width:100%;
    height:200px;
}
    
</style>