<template>
<div class="alert" id="alert">
  <slot class="closebtn" name="closebtn"><span class="closebtn" @click="$emit('close')">&#10008;</span></slot>
  <slot name="mesgErr"><span>Message error</span></slot>
</div>
</template>
<script>
</script>
<style  lang="scss">
.alert {
  padding: 20px;
  background-color: #f44336; /* Red */
  color: white;
  margin-bottom: 15px;
  text-align: center;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
