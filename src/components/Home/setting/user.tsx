import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class UserSetting extends Vue {
  @Prop() private name: string | undefined;
  @Prop() private avatar: string | undefined;
  @Prop() private sex: string | undefined;
  @Prop() private introduce: string | undefined;

  private logout() {
    this.$emit('logout');
  }

  private render() {
    return (
      <section class="setting__wrap setting--user">
        <article class="setting__wrap--avatar">
          {/* 当自定义头像为空时使用默认头像 */}
          {this.sex === 'male' && this.avatar === '' ? (
            <section class="setting__wrap--avatar--male">
              <svg
                t="1592386301906"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1809"
              >
                <path
                  d="M512 0C229.25 0 0 229.129167 0 511.883333c0 174.229167 86.991667 328.041667 219.870833 420.5125 25.1625-87.6125 87.65-154.141667 172.783334-186.329166-16.641667 19.533333 1.808333 162.5 29.1125 143.291666l45.116666-31.654166 45-31.770834-2.966666-2.0875-42.029167-29.566666-65.3125-48.541667a10.058333 10.058333 0 0 0-2.9375-1.566667c-0.179167-0.0625-0.354167-0.095833-0.529167-0.1375l-1.2625 0.445834a299.279167 299.279167 0 0 1 13.1875-4.429167c1.25-0.391667 2.4875-0.795833 3.745834-1.175a328.775 328.775 0 0 1 26.116666-6.641667c1.320833-0.279167 2.658333-0.529167 3.991667-0.791666a352.2375 352.2375 0 0 1 14.229167-2.529167c3.233333-0.5 6.491667-0.954167 9.7625-1.366667 1.404167-0.175 2.795833-0.370833 4.208333-0.533333a364.775 364.775 0 0 1 14.054167-1.354167H537.991667c4.716667 0.354167 9.379167 0.820833 14.0125 1.35 1.458333 0.166667 2.8875 0.366667 4.3375 0.554167a356.125 356.125 0 0 1 14.379166 2.120833c3.1375 0.533333 6.25 1.1125 9.345834 1.725 1.4125 0.279167 2.833333 0.545833 4.2375 0.841667 4.316667 0.9125 8.604167 1.8875 12.8375 2.9625l0.341666 0.083333c4.308333 1.1 8.558333 2.295833 12.770834 3.558334 1.341667 0.4 2.670833 0.833333 4.008333 1.254166 2.920833 0.916667 5.820833 1.858333 8.695833 2.85 1.466667 0.508333 2.916667 1.020833 4.366667 1.545834-0.5375-0.195833-1.083333-0.383333-1.625-0.575-0.0875 0.0125-0.179167 0.05-0.266667 0.070833-1.1125 0.2375-2.304167 0.7875-3.5875 1.745833l-64.841666 48.541667-42.15 29.570833-2.966667 2.083334 45.116667 31.770833 45 31.654167c27.483333 19.333333 45.7125-125.695833 28.441666-143.675 85.6375 32.029167 148.5125 98.716667 173.7875 186.65 132.820833-92.479167 219.770833-246.2625 219.770834-420.445834C1024 229.129167 794.75 0 512 0z m0 725.541667c-130.433333 0-236.6-103.608333-240.858333-233.008334-0.145833-0.091667-0.291667-0.166667-0.4375-0.258333-4.945833-92.4375 42.85-163.65 103.758333-205.725 1.129167-0.7875 2.245833-1.6 3.3875-2.366667 1.15-0.770833 2.320833-1.483333 3.479167-2.229166 2.1625-1.395833 4.320833-2.8 6.529166-4.129167 2.166667-1.308333 4.358333-2.529167 6.545834-3.7625 0.966667-0.541667 1.908333-1.120833 2.883333-1.65 34.6875-19.008333 71.841667-29.0375 105.045833-28.745833 3.208333-0.125 6.420833-0.245833 9.658334-0.245834 3.1 0 6.175 0.116667 9.25 0.233334 26.55-0.183333 55.6 6.191667 83.895833 18.4375a241 241 0 0 1 68.141667 43.266666c48.941667 43.083333 84.0375 107.104167 79.770833 186.916667l-0.2 0.116667c-4.175 129.4625-110.375 233.15-240.85 233.15z"
                  fill="#F7B970"
                  p-id="1810"
                />
                <path
                  d="M394.408333 274.058333c0.9625-0.545833 1.916667-1.116667 2.883334-1.65-0.970833 0.533333-1.9125 1.1125-2.883334 1.65zM521.25 243.654167a243.183333 243.183333 0 0 0-9.25-0.233334c-3.2375 0-6.45 0.116667-9.658333 0.245834 3.1375 0.029167 6.245833 0.133333 9.304166 0.345833a151.845833 151.845833 0 0 1 9.604167-0.358333zM381.333333 281.954167c2.166667-1.4 4.333333-2.804167 6.529167-4.129167-2.208333 1.329167-4.366667 2.729167-6.529167 4.129167zM374.4625 286.55c1.133333-0.783333 2.25-1.604167 3.3875-2.366667-1.141667 0.770833-2.254167 1.579167-3.3875 2.366667zM605.141667 262.091667a259.9875 259.9875 0 0 1 68.141666 43.266666 241.095833 241.095833 0 0 0-68.141666-43.266666zM472.25 386.820833c-46.3125 81.295833-124.7875 153.329167-201.108333 105.7125 4.254167 129.4 110.425 233.008333 240.858333 233.008334 130.475 0 236.675-103.6875 240.858333-233.15-63.745833 39.783333-230.979167-17.845833-280.608333-105.570834z"
                  fill="#FCE9EA"
                  p-id="1811"
                />
                <path
                  d="M597.1375 735.208333l0.341667 0.083334-0.341667-0.083334zM625.429167 743.991667c0.0875-0.020833 0.183333-0.058333 0.266666-0.070834 0.541667 0.191667 1.0875 0.379167 1.625 0.575a336.225 336.225 0 0 0-4.366666-1.545833c0.845833 0.291667 1.683333 0.6 2.525 0.895833-0.020833 0.045833-0.029167 0.095833-0.05 0.145834zM565.920833 728.904167zM580.0625 731.404167c1.4125 0.279167 2.833333 0.545833 4.2375 0.841666-1.404167-0.295833-2.825-0.5625-4.2375-0.841666zM630.441667 745.679167c17.270833 17.979167-0.958333 163.008333-28.441667 143.675l-45-31.654167-45.116667-31.770833-45 31.770833-45.116666 31.654167c-27.308333 19.208333-45.754167-123.758333-29.1125-143.291667-85.133333 32.1875-147.620833 98.7125-172.783334 186.329167 82.854167 57.6625 183.5375 91.4875 292.129167 91.4875 108.6375 0 209.354167-33.854167 292.229167-91.554167-25.279167-87.929167-88.154167-154.620833-173.7875-186.645833zM401.079167 742.979167c-1.420833 0.4875-2.833333 0.9875-4.241667 1.495833l1.2625-0.445833c0.175 0.041667 0.35 0.079167 0.529167 0.1375l-0.095834-0.2875c0.85-0.3 1.691667-0.604167 2.545834-0.9z"
                  fill="#D5E270"
                  p-id="1812"
                />
                <path
                  d="M512 823.920833c-1.0375 0-2.058333-0.054167-3.0875-0.079166l2.966667 2.0875 2.966666-2.083334c-0.945833 0.025-1.891667 0.075-2.845833 0.075zM610.25 738.845833c1.341667 0.4 2.670833 0.833333 4.008333 1.254167-1.3375-0.420833-2.666667-0.854167-4.008333-1.254167zM453.483333 729.6625zM439.8875 732.229167c1.320833-0.279167 2.658333-0.529167 3.991667-0.791667-1.329167 0.2625-2.666667 0.5125-3.991667 0.791667zM552 727.004167c1.454167 0.166667 2.8875 0.370833 4.3375 0.554166-1.45-0.1875-2.883333-0.3875-4.3375-0.554166zM410.025 740.045833c1.25-0.391667 2.491667-0.795833 3.745833-1.175-1.258333 0.379167-2.495833 0.7875-3.745833 1.175zM467.875 727.541667c1.404167-0.175 2.795833-0.370833 4.208333-0.533334-1.4125 0.1625-2.804167 0.358333-4.208333 0.533334z"
                  fill="#D5E270"
                  p-id="1813"
                />
                <path
                  d="M514.85 823.85l42.15-29.570833 64.841667-48.541667c1.2875-0.954167 2.479167-1.508333 3.5875-1.745833l0.054166-0.145834c-0.841667-0.295833-1.679167-0.604167-2.525-0.895833a336.795833 336.795833 0 0 0-8.695833-2.85c-1.3375-0.420833-2.666667-0.854167-4.008333-1.254167a323.458333 323.458333 0 0 0-12.770834-3.558333l-0.341666-0.083333a326.779167 326.779167 0 0 0-12.8375-2.9625c-1.404167-0.295833-2.825-0.5625-4.2375-0.841667a352.491667 352.491667 0 0 0-14.1375-2.504167 338 338 0 0 0-9.5875-1.341666c-1.45-0.183333-2.883333-0.3875-4.3375-0.554167a362.616667 362.616667 0 0 0-14.0125-1.35H486.141667a365.575 365.575 0 0 0-14.054167 1.354167c-1.408333 0.1625-2.804167 0.358333-4.208333 0.533333-3.275 0.416667-6.529167 0.866667-9.7625 1.366667a336.945833 336.945833 0 0 0-14.229167 2.529166c-1.329167 0.2625-2.666667 0.5125-3.991667 0.791667a326.9875 326.9875 0 0 0-26.116666 6.641667c-1.258333 0.379167-2.5 0.783333-3.745834 1.175-3.008333 0.941667-5.991667 1.908333-8.945833 2.933333-0.854167 0.291667-1.695833 0.6-2.545833 0.9l0.095833 0.2875c0.925 0.291667 1.9 0.795833 2.9375 1.566667l65.3125 48.541666 42.029167 29.566667c1.029167 0.025 2.05 0.079167 3.0875 0.079167 0.95 0.004167 1.895833-0.045833 2.845833-0.066667z"
                  fill="#FEFEFE"
                  p-id="1814"
                />
                <path
                  d="M472.25 386.820833c49.629167 87.725 216.8625 145.354167 280.608333 105.570834l0.2-0.116667c4.266667-79.8125-30.825-143.833333-79.770833-186.916667a260.054167 260.054167 0 0 0-68.141667-43.266666c-28.295833-12.245833-57.345833-18.625-83.895833-18.4375-3.2375 0.020833-6.441667 0.1375-9.604167 0.358333 8.2875 29.516667-8.3125 88.245833-39.395833 142.808333z"
                  fill="#ED7667"
                  p-id="1815"
                />
                <path
                  d="M472.25 386.820833c31.083333-54.5625 47.683333-113.2875 39.395833-142.808333a151.9875 151.9875 0 0 0-9.304166-0.345833c-33.204167-0.291667-70.358333 9.7375-105.045834 28.745833-0.966667 0.529167-1.920833 1.104167-2.883333 1.65-2.1875 1.233333-4.379167 2.454167-6.545833 3.7625-2.195833 1.325-4.3625 2.729167-6.529167 4.129167-1.158333 0.745833-2.329167 1.4625-3.479167 2.229166-1.141667 0.7625-2.258333 1.583333-3.3875 2.366667-60.916667 42.075-108.7125 113.2875-103.766666 205.725 0.145833 0.091667 0.291667 0.166667 0.4375 0.258333 76.320833 47.616667 154.795833-24.416667 201.108333-105.7125z"
                  fill="#F08E83"
                  p-id="1816"
                />
              </svg>
            </section>
          ) : (
            <section class="setting__wrap--avatar--female">
              <svg
                t="1592386222301"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1418"
              >
                <path
                  d="M512.172895 0.116652C229.337738 0.116652 0.23747 229.337738 0.23747 512.052077c0 174.128036 86.930701 327.933635 219.772278 420.417802v-0.004166l-0.004166-0.004166 0.091655-0.299963a292.496438 292.496438 0 0 1 10.948619-31.266889l0.191643-0.470774c1.162353-2.778816 2.387199-5.520137 3.632875-8.244793a274.444548 274.444548 0 0 1 5.057695-10.544503c0.633253-1.249842 1.291504-2.487186 1.941422-3.724531a266.21642 266.21642 0 0 1 3.707865-6.894963c0.716576-1.279005 1.47898-2.520515 2.216387-3.787023a280.252149 280.252149 0 0 1 6.595002-10.736145c1.13319-1.758112 2.258049-3.524555 3.4329-5.249338 1.108194-1.637293 2.258049-3.232926 3.395405-4.841056a284.851569 284.851569 0 0 1 7.282415-9.807096c0.829062-1.0582 1.649792-2.120566 2.491352-3.170434l0.266633-341.448596h0.066659c-0.074991-2.437193-0.18331-4.861887-0.183311-7.31991 0-0.437445 0.029163-0.866557 0.03333-1.304003-2.807979-153.751439 140.894728-246.531403 241.052927-239.728094 102.149615-6.928293 249.82682 89.430386 241.323726 248.352007l-0.233304 0.12915 0.262467 341.527753c0.645752 0.808231 1.287338 1.628961 1.924757 2.445525 1.383159 1.762278 2.741321 3.545386 4.078652 5.340993 1.104027 1.474814 2.178892 2.978791 3.253757 4.478602 1.29567 1.808105 2.587174 3.612044 3.837016 5.457645 1.116526 1.645626 2.183058 3.328747 3.27042 5.003535a277.964938 277.964938 0 0 1 5.611793 9.048859c1.162353 1.958086 2.333039 3.903674 3.445398 5.890923 0.987375 1.762278 1.928923 3.557885 2.878804 5.340993 1.024871 1.924757 2.041409 3.853681 3.028784 5.811767a290.063412 290.063412 0 0 1 5.599294 11.836007c0.720742 1.60813 1.449817 3.207929 2.137231 4.832724 1.37066 3.228759 2.682995 6.503346 3.941169 9.80293 0.23747 0.620755 0.495771 1.229012 0.733241 1.849767 1.499811 4.020326 2.899634 8.098978 4.236965 12.219292 0.333291 1.029037 0.63742 2.070572 0.958213 3.103775 0.649918 2.083071 1.324833 4.14531 1.933089 6.253378a0.570761 0.570761 0 0 1-0.083322 0.05416v0.004166c132.799915-92.488334 219.734783-246.26477 219.734782-420.351144C1024.104154 229.337738 794.887233 0.116652 512.172895 0.116652z"
                  fill="#F4B3B3"
                  p-id="1419"
                />
                <path
                  d="M276.206826 827.129a277.489998 277.489998 0 0 1 8.065649-9.061357c0.229138-0.249968 0.470774-0.479106 0.699912-0.724909a278.123251 278.123251 0 0 1 8.073982-8.219796c0.837394-0.812398 1.695619-1.612297 2.541346-2.416362a264.970743 264.970743 0 0 1 9.540463-8.686404c0.404116-0.349956 0.795733-0.708244 1.204015-1.0582v0.05416c23.551196-20.184954 50.689439-36.628713 80.789809-48.689692a313.4063 313.4063 0 0 1 24.221945-8.557254c0.716576-0.220805 1.42482-0.449943 2.145562-0.666583a326.458821 326.458821 0 0 1 26.884109-6.832471c0.995708-0.212473 2.003914-0.395783 3.007954-0.595758a344.402391 344.402391 0 0 1 14.63982-2.608005c3.416236-0.5291 6.857468-1.00404 10.323698-1.437318 1.270673-0.158313 2.533014-0.337457 3.816185-0.483273a361.529397 361.529397 0 0 1 14.148216-1.353996H512.343707v-0.116652l-0.174978 0.004167c-130.662685 0-236.961776-103.986883-240.84462-233.712187h-0.066659l-0.266633 341.448597c0.737407-0.916551 1.499811-1.812271 2.249717-2.716324 0.987375-1.183184 1.962252-2.391365 2.966292-3.570383z"
                  fill="#FECF77"
                  p-id="1420"
                />
                <path
                  d="M512.172895 725.687629l0.174978-0.004166c130.479375-0.091655 236.624319-103.878563 240.66131-233.399726-64.012759 39.253382-230.504258-18.197705-280.189657-105.620011-46.423311 81.356404-125.063391 153.359822-201.437091 105.315883-0.158313-2.912133-0.149981-5.753441-0.204141-8.623912 0 0.433279-0.033329 0.866557-0.033329 1.304002 0 2.453857 0.112486 4.882717 0.18331 7.31991 3.878677 129.721137 110.181935 233.70802 240.84462 233.70802z"
                  fill="#FCE9EA"
                  p-id="1421"
                />
                <path
                  d="M472.815359 386.663726c49.685399 87.422306 216.176898 144.869226 280.189657 105.620011-4.036991 129.525328-110.177769 233.308071-240.661309 233.399726v0.116652h25.688426c4.753567 0.354122 9.452974 0.82073 14.123218 1.349829 1.328999 0.154147 2.6455 0.337457 3.966167 0.499937 3.387073 0.429113 6.753315 0.891554 10.09456 1.408156a335.599334 335.599334 0 0 1 14.381519 2.549678c1.191516 0.23747 2.387199 0.454109 3.570383 0.708244a326.417159 326.417159 0 0 1 26.342511 6.682491c1.154021 0.34579 2.291378 0.720742 3.437066 1.07903a313.335476 313.335476 0 0 1 13.314987 4.461938c2.949628 1.066532 5.865927 2.174726 8.761395 3.320414 30.025379 11.873502 57.126127 28.079791 80.685656 48.006445v-0.070825c0.541598 0.454109 1.054034 0.937382 1.591466 1.395658 1.574801 1.353996 3.137104 2.724656 4.682742 4.111981 1.483146 1.337331 2.945462 2.695493 4.403612 4.066154 1.545638 1.449817 3.091277 2.887136 4.599419 4.370282 1.441485 1.416488 2.837142 2.870471 4.245298 4.320288a272.390641 272.390641 0 0 1 7.711527 8.253126c1.29567 1.441485 2.599672 2.866305 3.862013 4.336953 1.449817 1.687287 2.853807 3.416236 4.261963 5.141018 0.499937 0.612423 1.020705 1.216513 1.520641 1.837268l-0.262467-341.527753 0.233304-0.129151c8.503094-158.92162-139.174111-255.280299-241.323726-248.352006h0.058326c8.348947 29.562938-8.303119 88.409681-39.478354 143.044456z"
                  fill="#FCBA6F"
                  p-id="1422"
                />
                <path
                  d="M784.913492 882.447022zM790.512785 894.287195c0.720742 1.60813 1.445651 3.207929 2.137231 4.832724-0.687413-1.624795-1.416488-3.224593-2.137231-4.832724zM769.952879 856.358646zM265.154054 840.989751zM762.841276 845.897466c1.29567 1.808105 2.587174 3.612044 3.837016 5.457645-1.245676-1.845601-2.541346-3.64954-3.837016-5.457645zM779.005903 871.298428c0.987375 1.762278 1.928923 3.557885 2.878804 5.340993-0.94988-1.787275-1.887262-3.578715-2.878804-5.340993zM796.591185 908.922849c0.23747 0.620755 0.495771 1.229012 0.733241 1.849767-0.23747-0.620755-0.495771-1.229012-0.733241-1.849767zM716.709595 795.86211c-23.559528-19.926653-50.660276-36.137108-80.685656-48.006444l0.737407 0.287464v134.016428h-251.301634V748.988856c0.549931-0.224972 1.11236-0.437445 1.666456-0.65825-30.104536 12.060979-57.238613 28.504738-80.789809 48.689692v183.81848a512.10207 512.10207 0 0 1-86.322445-48.368899v0.004166c82.843717 57.671892 183.52685 91.517623 292.158981 91.517623 81.456392 0 158.44668-19.060096 226.817223-52.909993a509.352417 509.352417 0 0 1-22.280523 10.294535v-185.5141zM257.821645 851.242625c1.108194-1.637293 2.258049-3.232926 3.395405-4.841056-1.137357 1.60813-2.287211 3.207929-3.395405 4.841056zM739.198425 970.973355a511.393826 511.393826 0 0 0 65.175112-38.570134v-0.004167a512.293713 512.293713 0 0 1-65.175112 38.574301zM801.557225 922.991908c0.333291 1.029037 0.63742 2.070572 0.958213 3.103775-0.316627-1.033203-0.620755-2.074738-0.958213-3.103775zM755.508867 836.077871zM220.101403 932.161584zM236.336855 889.004528zM247.79791 867.228108zM231.241665 900.423921zM241.873657 877.91426c1.216513-2.316374 2.433026-4.624417 3.707866-6.894963-1.279005 2.266381-2.491352 4.578589-3.707866 6.894963zM284.972387 817.3469c-0.229138 0.245802-0.470774 0.47494-0.699912 0.724909 0.229138-0.249968 0.470774-0.483272 0.699912-0.724909zM293.046369 809.127104c0.837394-0.812398 1.695619-1.612297 2.541346-2.416362-0.845727 0.804065-1.703952 1.603964-2.541346 2.416362zM397.795656 744.281117zM276.206826 827.129c-1.00404 1.179018-1.978917 2.387199-2.962126 3.578715 0.983209-1.191516 1.958086-2.399697 2.962126-3.578715zM440.377784 732.278464c0.995708-0.212473 2.003914-0.395783 3.007954-0.595758-0.999874 0.199975-2.012246 0.383285-3.007954 0.595758zM468.34509 727.637383c1.270673-0.158313 2.533014-0.337457 3.816185-0.483272-1.283171 0.145815-2.545512 0.324959-3.816185 0.483272zM411.348113 739.773352c0.716576-0.220805 1.42482-0.449943 2.145563-0.666582-0.720742 0.216639-1.428986 0.449943-2.145563 0.666582zM453.971903 729.728786zM305.128178 798.024338zM727.387415 805.369245c1.541472 1.449817 3.091277 2.887136 4.599419 4.370282-1.508143-1.483146-3.053781-2.924631-4.599419-4.370282zM610.514657 738.99845c1.154021 0.34579 2.295544 0.720742 3.437066 1.07903-1.145689-0.358288-2.283045-0.733241-3.437066-1.07903zM623.225553 743.106265zM722.983803 801.303091zM552.155351 727.149944c1.328999 0.154147 2.6455 0.337457 3.966167 0.499937-1.320667-0.16248-2.633001-0.34579-3.966167-0.499937zM580.597597 731.607715c1.191516 0.23747 2.387199 0.454109 3.570383 0.708244-1.179018-0.249968-2.378867-0.470774-3.570383-0.708244zM743.935327 822.312941zM566.216078 729.058037zM752.063469 831.790912c-1.412322-1.724782-2.816311-3.453731-4.261963-5.141018 1.445651 1.687287 2.849641 3.416236 4.261963 5.141018z"
                  fill="#A0D9F6"
                  p-id="1423"
                />
                <path
                  d="M623.225553 743.106265a321.796909 321.796909 0 0 0-9.27383-3.032951c-1.141523-0.358288-2.283045-0.733241-3.437066-1.07903a330.404156 330.404156 0 0 0-26.342511-6.682491c-1.183184-0.254135-2.378867-0.470774-3.570383-0.708244a322.884272 322.884272 0 0 0-14.381519-2.549678 372.432188 372.432188 0 0 0-10.09456-1.408156c-1.320667-0.16248-2.637167-0.34579-3.966166-0.499937a368.461856 368.461856 0 0 0-14.123219-1.349829H486.313657a361.529397 361.529397 0 0 0-14.148216 1.353995c-1.279005 0.145815-2.541346 0.324959-3.816185 0.483273a355.763458 355.763458 0 0 0-14.373187 2.091403c-3.557885 0.599924-7.086606 1.249842-10.590331 1.95392-0.999874 0.199975-2.00808 0.383285-3.007954 0.595758a326.458821 326.458821 0 0 0-26.884108 6.832472c-0.720742 0.216639-1.428986 0.445777-2.145563 0.666582a322.276015 322.276015 0 0 0-13.548291 4.507765c-3.599546 1.291504-7.15743 2.641333-10.673654 4.049489-0.554097 0.220805-1.116526 0.433279-1.666456 0.65825v133.170702h251.301634v-134.016428l-0.737407-0.287464a322.31351 322.31351 0 0 0-12.798386-4.749401z m-111.173476 105.986631a15.231412 15.231412 0 1 1-0.004166-30.46699 15.231412 15.231412 0 0 1 0.004166 30.46699z m0-55.151377a15.235578 15.235578 0 1 1 0-30.475322 15.235578 15.235578 0 0 1 0 30.475322zM306.332193 797.020298v-0.05416c-0.408282 0.349956-0.799899 0.708244-1.204015 1.0582a272.032353 272.032353 0 0 0-9.540463 8.686404c-0.845727 0.804065-1.703952 1.603964-2.541346 2.416362a278.123251 278.123251 0 0 0-8.073982 8.219796c-0.229138 0.245802-0.470774 0.47494-0.699912 0.724909a277.489998 277.489998 0 0 0-8.065649 9.061357c-1.00404 1.179018-1.978917 2.387199-2.962126 3.578715-0.749905 0.908219-1.512309 1.803939-2.249716 2.716324-0.841561 1.049868-1.66229 2.112234-2.491353 3.170434a284.851569 284.851569 0 0 0-7.282415 9.807096c-1.141523 1.60813-2.291378 3.207929-3.395405 4.841056-1.174852 1.724782-2.295544 3.491226-3.4329 5.249338a278.235737 278.235737 0 0 0-6.595001 10.736146c-0.737407 1.266507-1.495645 2.512183-2.216387 3.787022-1.274839 2.270547-2.491352 4.582755-3.707866 6.894963-0.649918 1.237344-1.304002 2.474688-1.941422 3.724531a280.181325 280.181325 0 0 0-3.59538 7.369903c-0.495771 1.054034-0.974877 2.112234-1.462315 3.1746a287.030461 287.030461 0 0 0-3.632875 8.244793l-0.191643 0.470774a291.584053 291.584053 0 0 0-10.948619 31.26689c-0.029163 0.099987-0.066658 0.199975-0.091655 0.299962l0.004166 0.004166a511.810441 511.810441 0 0 0 86.322445 48.368899v-183.81848zM804.452694 932.349061c-0.608257-2.108067-1.283171-4.170307-1.93309-6.253378-0.320793-1.033203-0.624921-2.074738-0.958212-3.103775a289.25518 289.25518 0 0 0-4.236966-12.219292c-0.23747-0.620755-0.495771-1.229012-0.733241-1.849767a296.833391 296.833391 0 0 0-3.941169-9.80293c-0.691579-1.628961-1.416488-3.224593-2.137231-4.832724a265.354028 265.354028 0 0 0-8.628078-17.647774c-0.954046-1.787275-1.891428-3.578715-2.878804-5.340993-1.116526-1.991415-2.283045-3.932837-3.445398-5.890923a277.964938 277.964938 0 0 0-5.611792-9.048859c-1.087363-1.674789-2.158061-3.362076-3.270421-5.003535-1.249842-1.841434-2.541346-3.64954-3.837016-5.457645a254.392911 254.392911 0 0 0-7.332409-9.819595 275.915196 275.915196 0 0 0-1.924757-2.445525c-0.499937-0.620755-1.020705-1.224845-1.520641-1.837268-1.412322-1.724782-2.816311-3.453731-4.261963-5.141018-1.262341-1.470648-2.566343-2.895468-3.862013-4.336953a267.516256 267.516256 0 0 0-7.711527-8.253126c-1.408156-1.449817-2.803813-2.9038-4.245298-4.320288-1.503977-1.47898-3.053781-2.920465-4.59942-4.370282-1.458149-1.366494-2.916299-2.724656-4.403611-4.066154a292.32146 292.32146 0 0 0-4.682742-4.111981c-0.537432-0.458276-1.049868-0.941548-1.591466-1.395658V981.37621a509.352417 509.352417 0 0 0 22.48883-10.394522 512.493688 512.493688 0 0 0 65.175112-38.574301l0.083323-0.058326z"
                  fill="#FEFEFE"
                  p-id="1424"
                />
                <path
                  d="M512.052077 778.710107m-15.235578 0a15.235578 15.235578 0 1 0 30.471156 0 15.235578 15.235578 0 1 0-30.471156 0Z"
                  fill="#A0D9F6"
                  p-id="1425"
                />
                <path
                  d="M512.052077 833.857318m-15.231412 0a15.231412 15.231412 0 1 0 30.462824 0 15.231412 15.231412 0 1 0-30.462824 0Z"
                  fill="#A0D9F6"
                  p-id="1426"
                />
                <path
                  d="M271.378269 491.975443c76.3737 48.04394 155.01378-23.959478 201.43709-105.315883 31.171068-54.630609 47.823134-113.477353 39.474188-143.036124h-0.058326c-100.162366-6.799142-243.865072 85.980821-241.052927 239.728094 0.049994 2.870471 0.045828 5.715946 0.199975 8.623913z"
                  fill="#FECF77"
                  p-id="1427"
                />
              </svg>
            </section>
          )}
          {/* 当自定义头像不为空时使用自定义头像 */}
          {this.avatar ? (
            <section class="setting__wrap--avatar--custom">
              <i style="width: 80px;height: 80px;background-color: #444;border-radius: 64%;"></i>
            </section>
          ) : (
            ''
          )}
        </article>

        <article class="setting__wrap--information">
          <h3 class="setting__wrap--information-title">{this.name}</h3>
          <p class="setting__wrap--information-text">{this.introduce}</p>
          <button
            class="setting__wrap--information--logout"
            onClick={this.logout}
          >
            Logout
          </button>
        </article>
      </section>
    );
  }
}