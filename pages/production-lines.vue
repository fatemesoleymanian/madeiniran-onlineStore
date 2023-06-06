<template>
  <div class="shop-page-wrapper">
    <HeaderWithTopbar containerClass="container" />
    <Breadcrumb pageTitle="لیست خطوط تولید" />

    <!-- product items wrapper -->
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-9">
            <!-- shop top bar -->
            <div class="shop-top-bar">
              <div class="select-showing-wrap">
                <div class="shop-select">
                  <select v-model="selectedPrice">
                    <option value="new" label="جدید ترین">جدید ترین</option>
                    <option value="old" label="قدیمی ترین">قدیمی ترین</option>
                    <option value="expensive" label="گران ترین">
                      گران ترین
                    </option>
                    <option value="cheap" label="ارزانترین">ارزانترین</option>
                  </select>
                </div>
                <p>
                  مشاهده {{ perPage * currentPage - perPage + 1 }} تا
                  {{
                    perPage * currentPage > filterItems.length
                      ? filterItems.length
                      : perPage * currentPage
                  }}
                  از {{ filterItems.length }} نتیجه
                </p>
              </div>
              <div class="shop-tab">
                <button
                  @click="layout = 'twoColumn'"
                  :class="{ active: layout === 'twoColumn' }"
                >
                  <i class="fa fa-th-large"></i>
                </button>
                <button
                  @click="layout = 'threeColumn'"
                  :class="{ active: layout === 'threeColumn' }"
                >
                  <i class="fa fa-th"></i>
                </button>
                <button
                  @click="layout = 'list'"
                  :class="{ active: layout === 'list' }"
                >
                  <i class="fa fa-list-ul"></i>
                </button>
              </div>
            </div>
            <!-- end shop top bar -->
            <div id="loading" v-if="loader"></div>

            <!-- shop product -->
            <div class="shop-bottom-area mt-35" v-if="!loader">
              <div
                class="row product-layout"
                :class="{
                  list: layout === 'list',
                  'grid three-column': layout === 'threeColumn',
                  'grid two-column': layout === 'twoColumn',
                }"
              >
                <div
                  class="col-xl-4 col-sm-6"
                  v-for="(product, index) in getItems"
                  :key="index"
                >
                  <ProductGridItem :product="product" :layout="layout" />
                </div>
              </div>
            </div>
            <!-- end shop product -->

            <div v-if="getPaginateCount > 1">
              <pagination
                class="pro-pagination-style shop-pagination mt-30"
                v-model="currentPage"
                :per-page="perPage"
                :records="filterItems.length"
                @paginate="paginateClickCallback"
                :page-count="getPaginateCount"
              />
            </div>

            <div class="row pt-4 rounded">
              <div
                  class="col-12 shadow px-4 py-3 rounded w-100 overflow-hidden d-none d-md-block"
                :class="hid_or_show ? 'view-more-2' :''">
                <p>
                  <strong
                    >دنبال آن هستی که کسب&zwnj;و&zwnj;کار برای خودت با حداقل
                    سرمایه&zwnj;ای که در دست داری راه بیاندازی؟ علاقمند هستی که
                    اصطلاحا هم آقای خودت شوی هم خانم خودت؟ به این فکر
                    می&zwnj;کنی که چگونه توانایی&zwnj;هایت را با نام و برند خودت
                    در بازار عرضه کنی؟ پس چرا نشسته&zwnj;ای؟ بلند شو و خط تولید
                    خودت را راه بیانداز</strong
                  ><strong>!</strong>
                </p>
                <h2>لیست خط تولید</h2>
                <p>
                  طی سالهای اخیر، خطوط تولید بسیاری توسط شرکت ساخت ایران راه
                  اندازی شده است. لیست خطوط تولید در شرکت ساخت ایران بسیار
                  گسترده و متنوع است و شامل خطوط تولید محصولات مختلف و سودآوری
                  از جمله عطر و ادکلن، لیوان کاغذی، آب معدنی، کیسه زباله، کیسه
                  فریزر، نایلون و نایلکس، سفره یکبارمصرف، دستمال کاغذی دلسی
                  (توالت)، دستمال کاغذی رومیزی و... می&zwnj;شود. در کنار این
                  لیست، بسیاری از خطوط تولید دیگر نیز قابلیت عملیاتی شدن دارند.
                </p>
                <p><strong>مزایای خط تولید</strong></p>
                <p>
                  خط تولید مزایای فراوانی دارد. دستگاه&zwnj;های خط تولید برای
                  تولیدات در تعداد بالا طراحی شده&zwnj;اند. با استفاده از خط
                  تولید، کیفیت و دقت تولید بهبود می&zwnj;یابد زیرا
                  دستگاه&zwnj;های خط تولید به صورت خودکار و با دخالت حداقلی
                  انسان روی محصول کار می&zwnj;کنند. همچنین، استفاده از خط تولید،
                  <strong>زمان تولید و هزینه محصولات</strong> را کاهش
                  می&zwnj;دهد زیرا فرایند تولید در خطوط تولید، سریع&zwnj;تر و
                  هزینه کمتر انجام&zwnj; می&zwnj;شود.
                </p>
                <p><strong>هزینه تولید</strong></p>
                <p>
                  خط تولید به شرکت&zwnj;ها کمک می&zwnj;کند که کیفیت و تعداد
                  محصول تولیدی خود را ارتقا داده و بر روی هزینه&zwnj;های تولید
                  صرفه&zwnj;جویی کنند. استفاده از خطوط تولید، در کاهش هزینه
                  تولید به شدت مؤثر است.
                </p>
                <p><strong>ظرفیت تولید</strong></p>
                <p>
                  در خط تولید، ظرفیت تولید بسته به نوع و تعداد دستگاهها به شدت
                  افزایش می&zwnj;یابد. بدین صورت، تعداد محصولات تولیدی در کمترین
                  زمان ممکن و با بهترین کیفیت و سرعت، افزایش پیدا می&zwnj;کند.
                </p>
                <h2>راه اندازی خط تولید</h2>
                <p>
                  خط تولید متشکل از تجهیزات و دستگاه هایی است که برای تولید کالا
                  و خدمات در صنایع مختلف مورد استفاده قرار می گیرد. هر گونه خط
                  تولید، بسته به نیازمندی های مشتری، نوع کالا یا خدمات و دیگر
                  متغیرهایی که ممکن است تاثیر داشته باشند، باید با فناوری های
                  روز دنیا اجرا شود.
                </p>
                <p>
                  راه اندازی و شروع خط تولید می تواند به تحقق رویاهای صاحبان کسب
                  و کار بیانجامد. دانستن مراحل لازم برای راه اندازی خط تولید در
                  کشورایران، می تواند به پیشرفت شما به عنوان صاحب کسب و کار کمک
                  کند. هر گونه شکست در راه اندازی خط تولید نیازمند صرف زمان و
                  هزینه بسیار بالایی است. لذا، خرید تجهیزات بدون دریافت مشاوره
                  از متخصصان و دریافت تکنولوژی مورد نیاز، ممکن است به یک شکست
                  تبدیل شود.
                </p>
                <p>
                  <strong
                    ><a href="https://madein-iran.com/contact/"
                      >تیم مشاوره و پشتیبانی ما در ساخت ایران</a
                    ></strong
                  ><strong>، </strong>بهترین راهنمایی&zwnj;ها را در این زمینه به
                  شما ارائه می&zwnj;دهند تا از مسیری درست، از حداقل سرمایه خود
                  سرمایه&zwnj;های بزرگتر بیافرینید.
                </p>
                <div
                  class="videowrapper"
                  style="margin: 50px auto; max-width: 800px"
                >
                  <div class="h_iframe-aparat_embed_frame">
                    <span style="display: block; padding-top: 57%"></span
                    ><iframe
                      src="https://www.aparat.com/video/video/embed/videohash/8409D/vt/frame"
                      allowfullscreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                    ></iframe>
                  </div>
                </div>
                <h3>خرید خط تولید</h3>
                <p>
                  برای خرید خط تولید، بهتر است ابتدا نیازمندی های خود را به دقت
                  معین کنید. بسته به نیازمندی های مورد نظر، بهتر است که بازارهای
                  مختلف را بررسی کرده و از فناوری های روز دنیا استفاده کنید.
                  عواملی که باید در خرید خط تولید در نظر گرفته شوند عبارتند از:
                </p>
                <ol>
                  <li>
                    <strong>تکنولوژی: </strong>خرید خط تولید باید بر اساس
                    تکنولوژی های جدید و روز دنیا صورت گیرد. پیشرفت های فناوری در
                    دنیای امروز بسیار زیاد است و باید به هنگام خرید خط تولید از
                    آن استفاده شود.
                  </li>
                  <li>
                    <strong>کیفیت ماشین آلات: </strong>باید اطمینان حاصل کرد که
                    محصولات تولیدی توسط خط تولید به کیفیت بالایی می&zwnj;رسند.
                    برای این منظور، ماشین آلات خط تولید باید مطابق با
                    استانداردهای جهانی باشند.
                  </li>
                  <li>
                    <strong>هزینه&zwnj;های خط تولید: </strong>هزینه های خط تولید
                    عامل مهمی در هنگام خرید خط تولید است. بسته به اندازه و نوع
                    خط تولید، نوع ماشین آلات و هزینه های مربوط به نگهداری و
                    تعمیر آن، هزینه&zwnj;های خط تولید متفاوت خواهد بود.
                  </li>
                  <li>
                    <strong>خدمات پس از فروش: </strong>خدمات پس از فروش از جمله
                    مهمترین عواملی است که باید در خرید خط تولید در نظر گرفته
                    شود. اگر خدمات پس از فروش نامناسب باشد، ممکن است ماشین آلات
                    خط تولید به زودی خراب شوند و هزینه های بیشتری در بلند مدت
                    برای تعمیر آنها بپردازید.
                  </li>
                </ol>
                <p>
                  در خرید خط تولید در ایران، برخی چالش ها و ملاحظات خاص وجود
                  دارد که باید در نظر گرفته شوند. اما با توجه به کیفیت ماشین
                  آلات تولیدی در ایران و همچنین اساساً هزینه پایین تولید، ایران
                  به عنوان یکی از بزرگترین بازارهای کالا و خدمات داخلی و خارجی
                  برای خرید خط تولید شناخته شده است.
                </p>
                <p>
                  بنابراین، شما می&zwnj;توانید از طریق
                  <strong>مشورت با متخصصین شرکت ساخت ایران</strong> در زمینه را
                  اندازی خط تولید، هم استارت یک کسب و کار پررونق را برای خود
                  بزنید و هم از چالش&zwnj;ها و مشکلات موجود، به&zwnj;راحتی عبور
                  کنید.
                  <a href="https://madein-iran.com/contact/"
                    >این متخصصین همین جا نزدیک شما هستند! کافیست با ما تماس
                    بگیرید</a
                  >.
                </p>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/perfume-production-line/"
                    >راه اندازی خط تولید عطر و ادکلن</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/paper-cup-production-line/"
                    >راه اندازی خط تولید لیوان کاغذی</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/bottled-water-production-line/"
                    >راه اندازی خط تولید آب معدنی</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/garbage-bag-production-line/"
                    >راه اندازی خط تولید کیسه زباله</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/freezer-bag-production-line/"
                    >راه اندازی خط تولید کیسه فریزر</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/plastic-nylex-bag-production-line/"
                    >راه اندازی خط تولید انواع نایلون و نایلکس</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/disposable-tablecloth-production-line/"
                    >راه اندازی خط تولید سفره یکبارمصرف</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/toilet-paper-production-line/"
                    >راه اندازی خط تولید دستمال کاغذی دلسی (توالت)</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/tissue-production-line/"
                    >راه اندازی خط تولید دستمال کاغذی رومیزی</a
                  >
                </h3>
                <h4>خرید خط تولید خانگی در ایران</h4>
                <p>
                  <strong
                    >خط تولید خانگی، به نوعی تجهیزات و دستگاه هایی اطلاق می شود
                    که برای تولید کالا و خدمات در فضاهای بسیار کوچک و در سطح
                    خانگی مورد استفاده قرار می گیرند. خطوط تولید خانگی، به دلیل
                    کم جا بودن و کارایی بالا، برای بسیاری از افراد جذاب هستند.
                  </strong>
                </p>
                <p>
                  <strong
                    >شما می توانید یک خط تولید با کیفیت بالا، بازدهی عالی و
                    به&zwnj;روز و برخوردار از تکنولوژی روز دنیا را همین جا در
                    ساخت ایران تهیه کنید</strong
                  ><strong
                    >.
                    <a href="https://madein-iran.com/contact/"
                      >تماس با مشاوران و تیم پشتبانی ساخت ایران</a
                    ></strong
                  ><strong>، شما را سریع&zwnj;تر به هدفتان می&zwnj;رساند</strong
                  ><strong>.</strong>
                </p>
                <p><strong>&nbsp;</strong></p>
                <h2>قیمت خط تولید در ایران</h2>
                <p>
                  خط تولید، به عنوان یکی از ارکان اساسی صنعت، از اهمیت بسیاری
                  برخوردار است. هدف اصلی استفاده از خط تولید در صنایع مختلف،
                  افزایش تولیدات و کاهش هزینه&zwnj;ها است. اما نکته قابل توجه در
                  مورد استفاده از خط تولید، تاثیر آن در قیمت محصولات تولیدی است.
                  <strong
                    >در اینجا به بحث درباره قیمت و هزینه های استفاده از خط تولید
                    در ایران پرداخته خواهد شد</strong
                  ><strong>.</strong>
                </p>
                <p>
                  هزینه راه اندازی یک خط تولید به مسائل متفاوتی چون مشخصات فنی و
                  نیازمندی&zwnj;های شما بستگی دارد. قیمت خطوط تولید
                  می&zwnj;تواند بین چند میلیون تا چند صد میلیون و یا چند میلیارد
                  تومان متغیر باشد.
                </p>
                <h3>هزینه تعمیر و نگهداری خط تولید</h3>
                <p>
                  به طور کلی، صنعتگران باید از ابتدا تحلیل کاملی از
                  نیازمندی&zwnj;های خود و برآورد هزینه&zwnj;های مربوط به تثبیت،
                  راه&zwnj;اندازی، نگهداری و تعمیر تجهیزات خود به&zwnj;ویژه خط
                  تولید داشته باشند. <strong>برای مثال،</strong> هزینه نصب و
                  راه&zwnj;اندازی خط تولید در هر شرکت، به دلیل تفاوت در
                  نیاز&zwnj;های اساسی، متفاوت است. علاوه بر این، تکنولوژی و
                  نیازمندی&zwnj;ها، بسته به نوع کالا و خدمات، تفاوت&zwnj;هایی در
                  هزینه&zwnj;های نگهداری و تعمیر با خود به دنبال دارد. همچنین،
                  زمان و فرصتی که شرکت&zwnj;ها برای انجام تعمیرات دارند، هم در
                  هزینه نگهداری تجهیزات تاثیر دارد.
                </p>
                <p>
                  <strong
                    >شما می&zwnj;توانید با دریافت مشاوره رایگان از طریق
                    <a href="https://madein-iran.com/contact/"
                      >تماس با شرکت ساخت ایران</a
                    >
                    به&zwnj;صورت دقیق قیمت خط تولید موردنظر خود را برآورد
                    کنید</strong
                  ><strong>.</strong>
                </p>
                <p>
                  <strong
                    >تیم مشاوره و پشتیبانی قوی ساخت ایران می&zwnj;توانند تمامی
                    اطلاعات مربوط به هزینه&zwnj;های راه اندازی خط تولید را به
                    متقاضیان بدهند و راهنمای خوب شما در این زمینه باشند</strong
                  ><strong>.</strong>
                </p>
                <p>
                  ما در <a href="https://madein-iran.com">شرکت ساخت ایران</a> به
                  شما کمک می&zwnj;کنیم تا با کمترین هزینه و سرمایه، بهترین و
                  پردرآمدترین خط تولید مورد نظر خود را راه اندازی کنید و
                  محصولاتی با تعداد بالا و با کیفیت به بازار ارائه دهید و البته
                  در این مسیر، برند خود را هم به تمام کشور معرفی کنید.
                </p>
                <h3>خط تولید ارزان و پردرآمد</h3>
                <p>
                  خرید خط تولید ارزان و پردرآمد یکی از راه&zwnj;های اصلی برای
                  تولید محصولات با قیمت مناسب و کسب سود بیشتر است. این خطوط
                  تولید، در حوزه صنعت همه گیر و گسترده ای مانند آرایشی و
                  بهداشتی، بسته&zwnj;بندی مواد غذایی، بهداشتی-سلولزی و...
                  استفاده می شوند.
                </p>
                <p>
                  از جمله کشورهای پیشرو در تولید ارزان،
                  <strong>کشورهای آسیایی مانند چین، هند، ویتنام</strong> و...
                  می&zwnj;باشند. این کشورها به دلیل هزینه&zwnj;های پایین تولید،
                  بازار خوبی برای محصولات تولیدی خود در داخل و خارج از کشور
                  دارند.
                </p>
                <p>
                  با استفاده از آخرین تکنولوژی&zwnj;ها و تجهیزات به همراه کاهش
                  هزینه&zwnj;های تولیدی، ایران نیز می&zwnj;تواند خطوط تولیدی
                  ارزان و پردرآمدی را راه اندازی نموده و به رقابت با کشورهای
                  دیگر بپردازد. با افزایش کارایی و سودآوری خطوط تولید، می توان
                  با محصولاتی با قیمت مناسب تر به تقاضای بازار پاسخ گفته و باعث
                  رونق صنعت کشور شد.
                </p>
                <h3>خطوط تولید با درآمد تضمینی</h3>
                <p>
                  خرید و راه اندازی خطوط تولید با درآمد تضمینی یکی از راهبردهای
                  مورد استقبال صنعتگران برای
                  <strong>کاهش خطرات مالی </strong>است. اکثر فعالان در حوزه صنعت
                  به دنبال خطوط تولید با درآمد تضمینی برای
                  <strong>ضمانت دوام آوری و پیشرفت</strong> کسب و کار خود هستند.
                  در این میان شرکت های کارآفرینی و ارائه دهنده خطوط تولید با
                  ارائه تضمین درآمد به مشتریان، باعث افزایش اعتماد و رضایت آنها
                  می&zwnj;شوند.
                </p>
                <p>
                  <strong
                    >متخصصین ما در ساخت ایران با ارائه باکیفیت&zwnj;ترین و
                    به&zwnj;صرفه&zwnj;ترین تجهیزات و دستگاه&zwnj;های مورد نیاز
                    در خط تولید، و از همه مهمتر با ارائه آموزشهای نحوه فروش و
                    بازاریابی برای محصولات تولیدی، افزایش درآمد روزافزون
                    متقاضیان را تضمین می&zwnj;کنند.</strong
                  >
                </p>
                <p>
                  <strong>کافیست با ما </strong
                  ><a href="tel:+982172418400">تماس بگیرید</a
                  ><strong> تا روی خط تولید قرار بگیرید</strong
                  ><strong>!</strong>
                </p>
              </div>
              <p class="w-100 text-center fw-bold click-to-more" style="cursor: pointer"
                 v-if="hid_or_show" @click="hid_or_show =! hid_or_show">
                مشاهده بیشتر
              </p>
            </div>
          </div>

          <div class="col-lg-3">
            <ShopSidebar classes="mr-30" />
            <div class="row pt-4">
              <div
                class="col-12 shadow px-4 py-3 rounded w-100 overflow-hidden d-block d-lg-none "
                :class="hid_or_show ? 'view-more-2' :''"
              >
                <p>
                  <strong
                    >دنبال آن هستی که کسب&zwnj;و&zwnj;کار برای خودت با حداقل
                    سرمایه&zwnj;ای که در دست داری راه بیاندازی؟ علاقمند هستی که
                    اصطلاحا هم آقای خودت شوی هم خانم خودت؟ به این فکر
                    می&zwnj;کنی که چگونه توانایی&zwnj;هایت را با نام و برند خودت
                    در بازار عرضه کنی؟ پس چرا نشسته&zwnj;ای؟ بلند شو و خط تولید
                    خودت را راه بیانداز</strong
                  ><strong>!</strong>
                </p>
                <h2>لیست خط تولید</h2>
                <p>
                  طی سالهای اخیر، خطوط تولید بسیاری توسط شرکت ساخت ایران راه
                  اندازی شده است. لیست خطوط تولید در شرکت ساخت ایران بسیار
                  گسترده و متنوع است و شامل خطوط تولید محصولات مختلف و سودآوری
                  از جمله عطر و ادکلن، لیوان کاغذی، آب معدنی، کیسه زباله، کیسه
                  فریزر، نایلون و نایلکس، سفره یکبارمصرف، دستمال کاغذی دلسی
                  (توالت)، دستمال کاغذی رومیزی و... می&zwnj;شود. در کنار این
                  لیست، بسیاری از خطوط تولید دیگر نیز قابلیت عملیاتی شدن دارند.
                </p>
                <p><strong>مزایای خط تولید</strong></p>
                <p>
                  خط تولید مزایای فراوانی دارد. دستگاه&zwnj;های خط تولید برای
                  تولیدات در تعداد بالا طراحی شده&zwnj;اند. با استفاده از خط
                  تولید، کیفیت و دقت تولید بهبود می&zwnj;یابد زیرا
                  دستگاه&zwnj;های خط تولید به صورت خودکار و با دخالت حداقلی
                  انسان روی محصول کار می&zwnj;کنند. همچنین، استفاده از خط تولید،
                  <strong>زمان تولید و هزینه محصولات</strong> را کاهش
                  می&zwnj;دهد زیرا فرایند تولید در خطوط تولید، سریع&zwnj;تر و
                  هزینه کمتر انجام&zwnj; می&zwnj;شود.
                </p>
                <p><strong>هزینه تولید</strong></p>
                <p>
                  خط تولید به شرکت&zwnj;ها کمک می&zwnj;کند که کیفیت و تعداد
                  محصول تولیدی خود را ارتقا داده و بر روی هزینه&zwnj;های تولید
                  صرفه&zwnj;جویی کنند. استفاده از خطوط تولید، در کاهش هزینه
                  تولید به شدت مؤثر است.
                </p>
                <p><strong>ظرفیت تولید</strong></p>
                <p>
                  در خط تولید، ظرفیت تولید بسته به نوع و تعداد دستگاهها به شدت
                  افزایش می&zwnj;یابد. بدین صورت، تعداد محصولات تولیدی در کمترین
                  زمان ممکن و با بهترین کیفیت و سرعت، افزایش پیدا می&zwnj;کند.
                </p>
                <h2>راه اندازی خط تولید</h2>
                <p>
                  خط تولید متشکل از تجهیزات و دستگاه هایی است که برای تولید کالا
                  و خدمات در صنایع مختلف مورد استفاده قرار می گیرد. هر گونه خط
                  تولید، بسته به نیازمندی های مشتری، نوع کالا یا خدمات و دیگر
                  متغیرهایی که ممکن است تاثیر داشته باشند، باید با فناوری های
                  روز دنیا اجرا شود.
                </p>
                <p>
                  راه اندازی و شروع خط تولید می تواند به تحقق رویاهای صاحبان کسب
                  و کار بیانجامد. دانستن مراحل لازم برای راه اندازی خط تولید در
                  کشورایران، می تواند به پیشرفت شما به عنوان صاحب کسب و کار کمک
                  کند. هر گونه شکست در راه اندازی خط تولید نیازمند صرف زمان و
                  هزینه بسیار بالایی است. لذا، خرید تجهیزات بدون دریافت مشاوره
                  از متخصصان و دریافت تکنولوژی مورد نیاز، ممکن است به یک شکست
                  تبدیل شود.
                </p>
                <p>
                  <strong
                    ><a href="https://madein-iran.com/contact/"
                      >تیم مشاوره و پشتیبانی ما در ساخت ایران</a
                    ></strong
                  ><strong>، </strong>بهترین راهنمایی&zwnj;ها را در این زمینه به
                  شما ارائه می&zwnj;دهند تا از مسیری درست، از حداقل سرمایه خود
                  سرمایه&zwnj;های بزرگتر بیافرینید.
                </p>
                <div
                  class="videowrapper"
                  style="margin: 50px auto; max-width: 800px"
                >
                  <div class="h_iframe-aparat_embed_frame">
                    <span style="display: block; padding-top: 57%"></span
                    ><iframe
                      src="https://www.aparat.com/video/video/embed/videohash/8409D/vt/frame"
                      allowfullscreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                    ></iframe>
                  </div>
                </div>
                <h3>خرید خط تولید</h3>
                <p>
                  برای خرید خط تولید، بهتر است ابتدا نیازمندی های خود را به دقت
                  معین کنید. بسته به نیازمندی های مورد نظر، بهتر است که بازارهای
                  مختلف را بررسی کرده و از فناوری های روز دنیا استفاده کنید.
                  عواملی که باید در خرید خط تولید در نظر گرفته شوند عبارتند از:
                </p>
                <ol>
                  <li>
                    <strong>تکنولوژی: </strong>خرید خط تولید باید بر اساس
                    تکنولوژی های جدید و روز دنیا صورت گیرد. پیشرفت های فناوری در
                    دنیای امروز بسیار زیاد است و باید به هنگام خرید خط تولید از
                    آن استفاده شود.
                  </li>
                  <li>
                    <strong>کیفیت ماشین آلات: </strong>باید اطمینان حاصل کرد که
                    محصولات تولیدی توسط خط تولید به کیفیت بالایی می&zwnj;رسند.
                    برای این منظور، ماشین آلات خط تولید باید مطابق با
                    استانداردهای جهانی باشند.
                  </li>
                  <li>
                    <strong>هزینه&zwnj;های خط تولید: </strong>هزینه های خط تولید
                    عامل مهمی در هنگام خرید خط تولید است. بسته به اندازه و نوع
                    خط تولید، نوع ماشین آلات و هزینه های مربوط به نگهداری و
                    تعمیر آن، هزینه&zwnj;های خط تولید متفاوت خواهد بود.
                  </li>
                  <li>
                    <strong>خدمات پس از فروش: </strong>خدمات پس از فروش از جمله
                    مهمترین عواملی است که باید در خرید خط تولید در نظر گرفته
                    شود. اگر خدمات پس از فروش نامناسب باشد، ممکن است ماشین آلات
                    خط تولید به زودی خراب شوند و هزینه های بیشتری در بلند مدت
                    برای تعمیر آنها بپردازید.
                  </li>
                </ol>
                <p>
                  در خرید خط تولید در ایران، برخی چالش ها و ملاحظات خاص وجود
                  دارد که باید در نظر گرفته شوند. اما با توجه به کیفیت ماشین
                  آلات تولیدی در ایران و همچنین اساساً هزینه پایین تولید، ایران
                  به عنوان یکی از بزرگترین بازارهای کالا و خدمات داخلی و خارجی
                  برای خرید خط تولید شناخته شده است.
                </p>
                <p>
                  بنابراین، شما می&zwnj;توانید از طریق
                  <strong>مشورت با متخصصین شرکت ساخت ایران</strong> در زمینه را
                  اندازی خط تولید، هم استارت یک کسب و کار پررونق را برای خود
                  بزنید و هم از چالش&zwnj;ها و مشکلات موجود، به&zwnj;راحتی عبور
                  کنید.
                  <a href="https://madein-iran.com/contact/"
                    >این متخصصین همین جا نزدیک شما هستند! کافیست با ما تماس
                    بگیرید</a
                  >.
                </p>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/perfume-production-line/"
                    >راه اندازی خط تولید عطر و ادکلن</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/paper-cup-production-line/"
                    >راه اندازی خط تولید لیوان کاغذی</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/bottled-water-production-line/"
                    >راه اندازی خط تولید آب معدنی</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/garbage-bag-production-line/"
                    >راه اندازی خط تولید کیسه زباله</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/freezer-bag-production-line/"
                    >راه اندازی خط تولید کیسه فریزر</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/plastic-nylex-bag-production-line/"
                    >راه اندازی خط تولید انواع نایلون و نایلکس</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/disposable-tablecloth-production-line/"
                    >راه اندازی خط تولید سفره یکبارمصرف</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/toilet-paper-production-line/"
                    >راه اندازی خط تولید دستمال کاغذی دلسی (توالت)</a
                  >
                </h3>
                <h3>
                  &middot;
                  <a
                    href="https://madein-iran.com/product/tissue-production-line/"
                    >راه اندازی خط تولید دستمال کاغذی رومیزی</a
                  >
                </h3>
                <h4>خرید خط تولید خانگی در ایران</h4>
                <p>
                  <strong
                    >خط تولید خانگی، به نوعی تجهیزات و دستگاه هایی اطلاق می شود
                    که برای تولید کالا و خدمات در فضاهای بسیار کوچک و در سطح
                    خانگی مورد استفاده قرار می گیرند. خطوط تولید خانگی، به دلیل
                    کم جا بودن و کارایی بالا، برای بسیاری از افراد جذاب هستند.
                  </strong>
                </p>
                <p>
                  <strong
                    >شما می توانید یک خط تولید با کیفیت بالا، بازدهی عالی و
                    به&zwnj;روز و برخوردار از تکنولوژی روز دنیا را همین جا در
                    ساخت ایران تهیه کنید</strong
                  ><strong
                    >.
                    <a href="https://madein-iran.com/contact/"
                      >تماس با مشاوران و تیم پشتبانی ساخت ایران</a
                    ></strong
                  ><strong>، شما را سریع&zwnj;تر به هدفتان می&zwnj;رساند</strong
                  ><strong>.</strong>
                </p>
                <p><strong>&nbsp;</strong></p>
                <h2>قیمت خط تولید در ایران</h2>
                <p>
                  خط تولید، به عنوان یکی از ارکان اساسی صنعت، از اهمیت بسیاری
                  برخوردار است. هدف اصلی استفاده از خط تولید در صنایع مختلف،
                  افزایش تولیدات و کاهش هزینه&zwnj;ها است. اما نکته قابل توجه در
                  مورد استفاده از خط تولید، تاثیر آن در قیمت محصولات تولیدی است.
                  <strong
                    >در اینجا به بحث درباره قیمت و هزینه های استفاده از خط تولید
                    در ایران پرداخته خواهد شد</strong
                  ><strong>.</strong>
                </p>
                <p>
                  هزینه راه اندازی یک خط تولید به مسائل متفاوتی چون مشخصات فنی و
                  نیازمندی&zwnj;های شما بستگی دارد. قیمت خطوط تولید
                  می&zwnj;تواند بین چند میلیون تا چند صد میلیون و یا چند میلیارد
                  تومان متغیر باشد.
                </p>
                <h3>هزینه تعمیر و نگهداری خط تولید</h3>
                <p>
                  به طور کلی، صنعتگران باید از ابتدا تحلیل کاملی از
                  نیازمندی&zwnj;های خود و برآورد هزینه&zwnj;های مربوط به تثبیت،
                  راه&zwnj;اندازی، نگهداری و تعمیر تجهیزات خود به&zwnj;ویژه خط
                  تولید داشته باشند. <strong>برای مثال،</strong> هزینه نصب و
                  راه&zwnj;اندازی خط تولید در هر شرکت، به دلیل تفاوت در
                  نیاز&zwnj;های اساسی، متفاوت است. علاوه بر این، تکنولوژی و
                  نیازمندی&zwnj;ها، بسته به نوع کالا و خدمات، تفاوت&zwnj;هایی در
                  هزینه&zwnj;های نگهداری و تعمیر با خود به دنبال دارد. همچنین،
                  زمان و فرصتی که شرکت&zwnj;ها برای انجام تعمیرات دارند، هم در
                  هزینه نگهداری تجهیزات تاثیر دارد.
                </p>
                <p>
                  <strong
                    >شما می&zwnj;توانید با دریافت مشاوره رایگان از طریق
                    <a href="https://madein-iran.com/contact/"
                      >تماس با شرکت ساخت ایران</a
                    >
                    به&zwnj;صورت دقیق قیمت خط تولید موردنظر خود را برآورد
                    کنید</strong
                  ><strong>.</strong>
                </p>
                <p>
                  <strong
                    >تیم مشاوره و پشتیبانی قوی ساخت ایران می&zwnj;توانند تمامی
                    اطلاعات مربوط به هزینه&zwnj;های راه اندازی خط تولید را به
                    متقاضیان بدهند و راهنمای خوب شما در این زمینه باشند</strong
                  ><strong>.</strong>
                </p>
                <p>
                  ما در <a href="https://madein-iran.com">شرکت ساخت ایران</a> به
                  شما کمک می&zwnj;کنیم تا با کمترین هزینه و سرمایه، بهترین و
                  پردرآمدترین خط تولید مورد نظر خود را راه اندازی کنید و
                  محصولاتی با تعداد بالا و با کیفیت به بازار ارائه دهید و البته
                  در این مسیر، برند خود را هم به تمام کشور معرفی کنید.
                </p>
                <h3>خط تولید ارزان و پردرآمد</h3>
                <p>
                  خرید خط تولید ارزان و پردرآمد یکی از راه&zwnj;های اصلی برای
                  تولید محصولات با قیمت مناسب و کسب سود بیشتر است. این خطوط
                  تولید، در حوزه صنعت همه گیر و گسترده ای مانند آرایشی و
                  بهداشتی، بسته&zwnj;بندی مواد غذایی، بهداشتی-سلولزی و...
                  استفاده می شوند.
                </p>
                <p>
                  از جمله کشورهای پیشرو در تولید ارزان،
                  <strong>کشورهای آسیایی مانند چین، هند، ویتنام</strong> و...
                  می&zwnj;باشند. این کشورها به دلیل هزینه&zwnj;های پایین تولید،
                  بازار خوبی برای محصولات تولیدی خود در داخل و خارج از کشور
                  دارند.
                </p>
                <p>
                  با استفاده از آخرین تکنولوژی&zwnj;ها و تجهیزات به همراه کاهش
                  هزینه&zwnj;های تولیدی، ایران نیز می&zwnj;تواند خطوط تولیدی
                  ارزان و پردرآمدی را راه اندازی نموده و به رقابت با کشورهای
                  دیگر بپردازد. با افزایش کارایی و سودآوری خطوط تولید، می توان
                  با محصولاتی با قیمت مناسب تر به تقاضای بازار پاسخ گفته و باعث
                  رونق صنعت کشور شد.
                </p>
                <h3>خطوط تولید با درآمد تضمینی</h3>
                <p>
                  خرید و راه اندازی خطوط تولید با درآمد تضمینی یکی از راهبردهای
                  مورد استقبال صنعتگران برای
                  <strong>کاهش خطرات مالی </strong>است. اکثر فعالان در حوزه صنعت
                  به دنبال خطوط تولید با درآمد تضمینی برای
                  <strong>ضمانت دوام آوری و پیشرفت</strong> کسب و کار خود هستند.
                  در این میان شرکت های کارآفرینی و ارائه دهنده خطوط تولید با
                  ارائه تضمین درآمد به مشتریان، باعث افزایش اعتماد و رضایت آنها
                  می&zwnj;شوند.
                </p>
                <p>
                  <strong
                    >متخصصین ما در ساخت ایران با ارائه باکیفیت&zwnj;ترین و
                    به&zwnj;صرفه&zwnj;ترین تجهیزات و دستگاه&zwnj;های مورد نیاز
                    در خط تولید، و از همه مهمتر با ارائه آموزشهای نحوه فروش و
                    بازاریابی برای محصولات تولیدی، افزایش درآمد روزافزون
                    متقاضیان را تضمین می&zwnj;کنند.</strong
                  >
                </p>
                <p>
                  <strong>کافیست با ما </strong
                  ><a href="tel:+982172418400">تماس بگیرید</a
                  ><strong> تا روی خط تولید قرار بگیرید</strong
                  ><strong>!</strong>
                </p>
              </div>
              <p class="w-100 text-center fw-bold click-to-more" style="cursor: pointer"
                 v-if="hid_or_show" @click="hid_or_show =! hid_or_show">
                مشاهده بیشتر
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end product items wrapper -->

    <QuickView />
    <TheFooter />
  </div>
</template>

<script>
export default {
  components: {
    HeaderWithTopbar: () => import("@/components/TheHeader"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    ProductGridItem: () => import("@/components/product/ProductGridItem"),
    QuickView: () => import("@/components/QuickView"),
    TheFooter: () => import("@/components/TheFooter"),
  },

  data() {
    return {
      hid_or_show: true,
      loader: true,
      layout: "threeColumn",
      filterItems: [],
      prevSelectedCategoryName: "",
      prevSelectedTagName: "",
      prevSelectedSizeName: "",
      prevSelectedColorName: "",
      currentPage: 1,
      perPage: 9,
      selectedPrice: "new",
    };
  },

  computed: {
    products() {
      return this.$store.getters.getProducts;
    },

    getItems() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.filterItems.slice(start, end);
    },
    getPaginateCount() {
      return Math.ceil(this.filterItems.length / this.perPage);
    },
  },

  async mounted() {
    this.loader = true;
    const [products, categories, tags] = await Promise.all([
      this.$axios.get("/products"),
      this.$axios.get("/categories"),
      this.$axios.get("/tags_with_product"),
    ]);
    this.$store.dispatch("setProduct", products.data);
    this.$store.dispatch("setCategory", categories.data);
    this.$store.dispatch("setTags", tags.data);
    let states = [];
    for (let s in products.data) {
      for (let t in products.data[s].state) {
        if (!states.includes(products.data[s].state[t].type))
          states.push(products.data[s].state[t].type);
      }
    }
    this.$store.dispatch("setState", states);
    this.updateProductData();
    this.loader = false;
  },

  methods: {
    paginateClickCallback(page) {
      this.currentPage = Number(page);
    },

    updateProductData() {
      this.paginateClickCallback(1);

      const categoryName = this.$route.query.category;
      const stateName = this.$route.query.state;
      const tagName = this.$route.query.tag;

      if (Object.keys(this.$route.query).length === 0) {
        this.filterItems = [...this.products];
      }

      if (categoryName && this.prevSelectedCategoryName !== categoryName) {
        if (Boolean(categoryName) === false || categoryName === "all") {
          this.filterItems = [...this.products];
        } else {
          const resultData = this.products.filter(
            (item) => item.category.id == categoryName
          );
          this.filterItems = [];
          this.filterItems.push(...resultData);
        }
      }

      if (stateName && this.prevSelectedColorName !== stateName) {
        if (Boolean(stateName) === false || stateName === "all") {
          this.filterItems = [...this.products];
        } else {
          const resultData = this.products.filter((item) => {
            return item.state.some((n) => {
              return n.type.includes(stateName);
            });
          });
          this.filterItems = [];
          this.filterItems.push(...resultData);
        }
      }
      if (tagName && this.prevSelectedTagName !== tagName) {
        if (tagName) {
          const resultData = this.products.filter((item) => {
            return item.tag.some((n) => {
              return n.id == tagName;
            });
          });
          this.filterItems = [];
          this.filterItems.push(...resultData);
        }
        if (Boolean(tagName) === false || tagName === "all") {
          this.filterItems = [...this.products];
        }
      }

      this.prevSelectedCategoryName = categoryName;
      this.prevSelectedStateName = stateName;
      this.prevSelectedTagName = tagName;
    },

    discountedPrice(product) {
      return product.state[0].price;
    },

    id(product) {
      return product.id;
    },
  },

  watch: {
    $route() {
      this.updateProductData();
    },

    selectedPrice() {
      console.log(this.selectedPrice);
      switch (this.selectedPrice) {
        case "new":
          this.filterItems = [...this.products];
          break;
        case "old":
          this.filterItems = this.filterItems.sort(
            (a, b) => this.id(a) - this.id(b)
          );
          break;
        case "expensive":
          this.filterItems = this.filterItems.sort(
            (a, b) => this.discountedPrice(b) - this.discountedPrice(a)
          );
          break;
        case "cheap":
          this.filterItems = this.filterItems.sort(
            (a, b) => this.discountedPrice(a) - this.discountedPrice(b)
          );
          break;
        default:
          this.filterItems = [...this.products];
      }
    },
  },

  head() {
    return {
      title: "لیست خطوط تولید",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "لیست خطوط تولید شرکت ساخت ایران مانند دستمال کاغذی رومیزی و توالت، نایلون، کیسه فریزر و زباله، آب معدنی، لیوان کاغذی، عطر و سفره یکبارمصرف با تصاویر و قیمت.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://madein-iran.com/production-lines/",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "خانه",
                item: "https://madein-iran.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "لیست خطوط تولید",
                item: "https://madein-iran.com/production-lines/",
              },
            ],
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100);
.click-to-more {
  color: #0b4dfc !important;
  position: relative;
  z-index: 99;
  margin-top: -50px;
  background: linear-gradient(
    0deg,
    #fff,
    hsla(0, 0%, 100%, 0.86),
    hsla(0, 0%, 100%, 0.9),
    hsla(0, 0%, 100%, 0.36)
  );
}
.view-more-2 {
  max-height: 450px;
}
@media screen and (max-width: 767px) {
  .view-more-2 {
    max-height: 220px;
    -webkit-box-shadow: inset 0px -31px 59px -8px rgba(66, 68, 90, 0.4);
    -moz-box-shadow: inset 0px -31px 59px -8px rgba(66, 68, 90, 0.4);
    box-shadow: inset 0px -31px 59px -8px rgba(66, 68, 90, 0.4);
  }
}
#loading {
  margin: 100px auto;
  width: 80px;
  height: 80px;
  border: 3px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
.h_iframe-aparat_embed_frame {
  position: relative;
}

.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}

.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 25px !important;
}
p,
strong {
  color: #333333 !important;
  font-size: 1em !important;
}
h3 a {
  font-size: 19px !important;
}
</style>
