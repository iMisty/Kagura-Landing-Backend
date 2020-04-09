<template>
  <div class="weather" @mouseleave="closeFrame()">
    <div class="weather-wrap wrap" @mouseover="openFrame()">
      <span>{{data.city}}</span>
      <img
        :src="'https://www.tianqiapi.com/static/skin/sogou/'+data.wea_img+'.png'"
        :alt="data.wea_img"
        class="weather-img"
      />
      <span>{{data.wea}}</span>
      <span>{{data.tem}}℃</span>
      <span>{{data.win}}</span>
      <div
        class="weather-frame"
        v-if="frame === true"
        style="width: 566px;height: 264px;"
        :class="{dark: 'isDark === true'}"
      >
        <div class="frame-wrap">
          <article class="frame-wrap-top">
            <div class="frame-temp">{{data.tem2}}℃</div>
            <div class="frame-wea">{{data.wea}}</div>
            <div class="frame-local">
              <img src="../assets/imgs/local.png" alt />
              <div class="frame-local-city">{{data.city}}</div>
            </div>
          </article>
          <article class="frame-wrap-medium">
            <div class="frame-date">{{data.date}}</div>
            <div class="frame-week">{{data.week}}</div>
            <div class="frame-wind">{{data.win}}</div>
            <div class="frame-wind-speed">{{data.win_speed}}</div>
          </article>
          <article class="frame-wrap-bottom">
            <div class="frame-air">空气指数:{{data.air}} {{data.air_level}}</div>
            <div class="frame-air-tips">{{data.air_tips}}</div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isDark: true,
      isLight: false,
      data: {
        date: '2020-03-07',
        week: '星期六',
        city: '北京',
        wea: '晴',
        wea_img: 'qing',
        tem: '21',
        tem1: '21',
        tem2: '20',
        win: '东南风 ',
        win_speed: '3级',
        humidity: '64%',
        air: '68',
        air_pm25: '68',
        air_level: '良'
      },
      frame: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    weather() {
      const _this = this.$data;
      this.$axios
        //.get('/api/api?version=v6&appid=57284886&appsecret=1SGOVAjr&vue=1')
        .get('/weather/api', {
          params: {
            version: 'v6',
            appid: '57284886',
            appsecret: '1SGOVAjr',
            vue: '1'
          }
        })
        .then(function(response) {
          console.log(response);
          _this.data = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    openFrame() {
      this.$data.frame = true;
    },
    getTime() {
      const date = new Date();
      const hours = date.getHours();
      const _this = this.$data;
      console.log(hours);
      if (hours < 6 || hours >= 19) {
        console.log('dark');
        _this.isDark === true;
        _this.isLight === false;
        console.log(this.$data.isDark);
        console.log(this.$data.isLight);
      } else {
        _this.isDark === false;
        _this.isLight === true;
        console.log('light');
        console.log(_this.isLight);
      }
    },
    closeFrame() {
      this.$data.frame = false;
    }
  },
  created() {},
  mounted() {
    this.getTime();
    //this.weather();
  }
};
</script>
<style lang='less' scoped>
.weather {
  display: flex;
  align-items: center;
}
.weather-wrap {
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  span {
    padding: 0 4px;
  }
}
.weather-img {
  max-width: 24px;
}
.weather-frame {
  position: absolute;
  top: 48px;
  border-radius: 12px;
}
.frame-wrap {
  box-sizing: border-box;
  padding: 4%;
  height: 100%;
  color: #fff;
}
.dark {
  background-image: url('../assets/imgs/wea_dark.jpg');
}
.light {
  background-image: url('../assets/imgs/wea_light.jpg');
}
</style>