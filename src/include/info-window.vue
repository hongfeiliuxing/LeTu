<template>
<div class="info-win">
  <image class="cover" :src="src"/>
  <text class="desc">{{title}}</text>
  <text class="address">{{location}}</text>
</div>
</template>

<style>
  .info-win{
    width: 500;
    padding: 5;
    background-color: #fff;
    border-width: 1;
    border-color: rgba(0,0,0,.1);
    border-bottom-width: 2;
    border-bottom-color: rgba(0,0,0,.25);
  }
  .cover{
    flex: 1;
    height: 180;
  }
  .desc{
    font-size: 20;
    background-color: #fff;
    padding: 5;
  }
  .address{
    font-size: 16;
    color: #999;
    background-color: #fff;
    padding: 5;
    padding-bottom: 10;
  }
</style>

<script>
  export default {
      props: ['src','title','location'],
  };
</script>