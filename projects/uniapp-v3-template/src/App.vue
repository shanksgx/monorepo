<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {});
onShow(() => {
  const version = '1.0.0'
  console.log(`\n %c goduer-uni-app V${version} %c https://github.com/shanksgx/monorepo/tree/master/projects/uniapp-v3-template \n\n`, 'color: #ffffff; background: #ff9900; padding:5px 0;', 'color: #ff9900;background: #ffffff; padding:5px 0;')
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
  @import "uview-plus/index.scss";
</style>
