(window.webpackJsonp=window.webpackJsonp||[]).push([[47,15,32],{308:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},309:function(t,e,n){"use strict";var l=n(3),r=n(311).trim;l({target:"String",proto:!0,forced:n(312)("trim")},{trim:function(){return r(this)}})},310:function(t,e,n){},311:function(t,e,n){var l=n(4),r=n(25),o=n(13),c=n(308),d=l("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),_=RegExp(v+v+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,_,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},312:function(t,e,n){var l=n(82).PROPER,r=n(5),o=n(308);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||l&&o[t].name!==t}))}},313:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"whatsapp"},[e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=989902121048",target:"_blank"}},[e("h5",[e("i",{staticClass:"fa fa-whatsapp fa-2x",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"pt-5"},[t._v("© 2022 "),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("ساخت ایران")]),t._v("."),n("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row pt-3"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"d-flex align-content-between justify-content-between"},[l("div",{staticClass:"copyright mb-30 "},[l("div",{staticClass:"footer-logo"},[l("a",{attrs:{referrerpolicy:"origin",target:"_blank",href:"https://trustseal.enamad.ir/?id=293199&Code=G6w73PAJDl7irj1t0umR"}},[l("img",{staticStyle:{cursor:"pointer"},attrs:{width:"75",height:"75",referrerpolicy:"origin",src:"https://Trustseal.eNamad.ir/logo.aspx?id=293199&Code=G6w73PAJDl7irj1t0umR",alt:"",id:"G6w73PAJDl7irj1t0umR"}})])])]),t._v(" "),l("div",{staticClass:"copyright mb-30 "},[l("div",{staticClass:"footer-logo"},[l("a",{attrs:{href:"https://logo.samandehi.ir/Verify.aspx?id=317050&p=xlaorfthjyoeobpddshwobpd",target:"_blank",rel:"noopener"}},[l("picture",{attrs:{alt:"Samandehi"}},[l("source",{attrs:{type:"image/webp","data-lazy-srcset":"",srcset:"https://madein-iran.com/Samandehi.png?x-img=v1/format, type_webp, lossless_true"}}),t._v(" "),l("img",{attrs:{alt:"Samandehi","data-lazy-src":"https://madein-iran.com/Samandehi.png",src:n(314),width:"108",height:"118",loading:"lazy"}})])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",{staticStyle:{"font-weight":"700"}},[t._v("نقشه سایت")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://www.madein-iran.com/blog/"}},[t._v("وبلاگ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4 col-sm-4"},[n("div",{staticClass:"footer-widget mb-30 ml-50"},[n("div",{staticClass:"footer-title"},[n("h3",{staticStyle:{"font-weight":"700"}},[t._v("راه های تماس")])]),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("p",{staticStyle:{"font-family":"persianNumber"}},[t._v("تلفن : "),n("br"),t._v("021-72418400 | 021-72418401 "),n("br"),t._v("021-72418402 |\n                  021-72418403")])]),t._v(" "),n("li",[n("p",{staticStyle:{"font-family":"persianNumber"}},[t._v("واتس اپ : "),n("br"),t._v("09902121045 | 09902121046\n                  "),n("br"),t._v("09902121047 | 09902121048\n                  "),n("br"),t._v("09190808506 | 09190808507 "),n("br")])]),t._v(" "),n("li",[n("p",[t._v("آدرس : تهران - خیابان ولیعصر - روبروی پارک ملت - برج سایه - طبقه چهاردهم.")])]),t._v(" "),n("li",[n("p",[t._v("شبکه‌های اجتماعی: "),n("a",{attrs:{href:"https://www.instagram.com/madein_ir.ir/",target:"_blank"}},[t._v("اینستاگرام")]),t._v(" - "),n("a",{attrs:{href:"https://www.aparat.com/madein_ir.ir",target:"_blank"}},[t._v("آپارات")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[n("b",[t._v(" ثبت نام در خبرنامه")])])])}],r=n(9),o=(n(49),n(309),{data:function(){return{informationObj:{full_name:"",phone_number:""},makeButtonLoading:!1}},methods:{checkAndRegisterInNewsletter:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==e.informationObj.full_name.trim()){n.next=3;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا نام و نام خانوادگی خود را وارد کنید.",type:"error"}));case 3:if(""!==e.informationObj.phone_number.trim()){n.next=5;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود را وارد کنید.",type:"error"}));case 5:if(11===e.informationObj.phone_number.length){n.next=7;break}return n.abrupt("return",e.$notify({title:"خطا!",text:"لطفا شماره تلفن همراه خود رابه درستی وارد کنید.",type:"error"}));case 7:return e.makeButtonLoading=!0,document.getElementById("news_letter_btn").style.opacity=0,n.next=11,e.$axios.post("/add_new_receiver",e.informationObj).then((function(t){return e.makeButtonLoading=!1,e.$notify({title:"سپاس از مشارکت شما!",text:t.data.msg,type:"success"})})).catch((function(){return e.makeButtonLoading=!1,document.getElementById("news_letter_btn").style.opacity=1,e.$notify({title:"عملیات ناموفق!",text:"خطایی در ثبت اطلاعات رخ داد.",type:"error"})}));case 11:case"end":return n.stop()}}),n)})))()}}}),c=(n(315),n(34)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row px-1"},[n("div",{staticClass:"col-lg-2 col-sm-4 "},[n("div",{staticClass:"copyright mb-30"},[n("div",{staticClass:"footer-logo mt-0 pt-0 text-center"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo-sm.png",alt:"logo",id:"logo-footer-sm"}}),t._v(" "),n("img",{attrs:{src:"/img/logo/logo-md.png",alt:"logo",id:"logo-footer-md"}})])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-sm-4 "},[n("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(3),t._v(" "),n("div",{staticClass:"footer-list"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/shop"}},[t._v("خطوط تولید")])],1),t._v(" "),t._m(4),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("درباره ما")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact"}},[t._v("تماس با ما")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/terms-conditions"}},[t._v("قوانین و مقررات")])],1)])])])]),t._v(" "),t._m(5),t._v(" "),n("div",{staticClass:"col-lg-4 col-sm-6 border rounded-3 pt-3"},[n("div",{staticClass:"footer-widget mb-30 ml-10"},[t._m(6),t._v(" "),n("div",{staticClass:"subscribe-style"},[n("p",[t._v("با ثبت‌نام در خبرنامه هر دو ماه یک بار با ارائه خطوط تولید جدید، شما می‌‌توانید از طریق دریافت پیامک،\n              در جریان جزئیات قرار بگیرید.")]),t._v(" "),n("div",{staticClass:"subscribe-form"},[n("form",{staticClass:"mc-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.full_name,expression:"informationObj.full_name"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"نام و نام خانوادگی:",name:"email"},domProps:{value:t.informationObj.full_name},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"full_name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.informationObj.phone_number,expression:"informationObj.phone_number"}],staticClass:"email",attrs:{type:"text",required:"",placeholder:"شماره تلفن همراه:",name:"email"},domProps:{value:t.informationObj.phone_number},on:{input:function(e){e.target.composing||t.$set(t.informationObj,"phone_number",e.target.value)}}}),t._v(" "),n("button",{staticClass:"button float-start fw-bolder",staticStyle:{"font-size":"18px"},attrs:{name:"subscribe",disabled:t.makeButtonLoading,loading:t.makeButtonLoading,id:"news_letter_btn"},on:{click:t.checkAndRegisterInNewsletter}},[t._v("\n                  "+t._s(t.makeButtonLoading?"کمی صبر کنید...":"ثبت نام")+"\n                ")])])])])])])])])])}),l,!1,null,null,null);e.default=component.exports},314:function(t,e,n){t.exports=n.p+"img/Samandehi.73de332.webp"},315:function(t,e,n){"use strict";n(310)},316:function(t,e,n){"use strict";n.r(e);var l={props:["pageTitle"]},r=n(34),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb-content text-center"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("خانه")])],1),t._v(" "),n("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,n){},371:function(t,e,n){"use strict";n(348)},388:function(t,e,n){"use strict";n.r(e);n(14),n(35),n(36);var l={components:{HeaderWithTopbar:function(){return n.e(0).then(n.bind(null,322))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,316))},TheFooter:function(){return Promise.resolve().then(n.bind(null,313))}},head:function(){return{title:"قوانین و مقررات"}}},r=(n(371),n(34)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"terms-conditions-wrapper"},[n("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),n("Breadcrumb",{attrs:{pageTitle:"قوانین و مقررات"}}),t._v(" "),t._m(0),t._v(" "),n("TheFooter")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"terms-conditions-inner"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"ms-auto me-auto col-lg-9"},[n("div",{staticClass:"my-account-wrapper"},[n("div",{staticClass:"panel-group",attrs:{id:"public_rules"}},[n("div",{staticClass:"panel panel-default single-my-account"},[n("div",{staticClass:"panel-heading my-account-title"},[n("h3",{staticClass:"panel-title"},[n("a",{attrs:{"data-bs-toggle":"collapse",href:"#public_rules_"}},[t._v("\n                      قوانین عمومی\n                    ")])])]),t._v(" "),n("div",{staticClass:"panel-collapse collapse show",attrs:{id:"public_rules_","data-bs-parent":"#public_rules"}},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"terms-content-wrapper"},[n("div",{staticClass:"account-info-wrapper"},[n("h4")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"px-3 py-2"},[t._v("\n                            توجه داشته باشید کلیه اصول و رویه‏‌های وب‌سایت ساخت ایران منطبق با قوانین جمهوری اسلامی\n                            ایران، قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده است و متعاقبا کاربر نیز موظف\n                            به رعایت قوانین مرتبط با کاربر است. در صورتی که در قوانین مندرج، رویه‏‌ها و سرویس‏‌های\n                            وب‌سایت ساخت ایران تغییراتی در آینده ایجاد شود، در همین صفحه منتشر و به روز رسانی می‌شود و\n                            شما توافق می‏‌کنید که استفاده مستمر شما از سایت به معنی پذیرش هرگونه تغییر است.\n                          ")])])])])])])]),t._v(" "),n("div",{staticClass:"panel panel-default single-my-account"},[n("div",{staticClass:"panel-heading my-account-title"},[n("h3",{staticClass:"panel-title"},[n("a",{attrs:{"data-bs-toggle":"collapse",href:"#user_meaning"}},[t._v("\n                      تعریف مشتری، خریدار یا کاربر\n                    ")])])]),t._v(" "),n("div",{staticClass:"panel-collapse collapse show",attrs:{id:"user_meaning","data-bs-parent":"#public_rules"}},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"terms-content-wrapper"},[n("div",{staticClass:"account-info-wrapper"},[n("h4")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"px-3 py-2"},[t._v("\n                            مشتری، خریدار یا کاربر به شخصی گفته می‌شود که با اطلاعات کاربری خود که در فرم ثبت نام درج\n                            کرده است، به ثبت سفارش یا هرگونه استفاده از خدمات وب‌سایت ساخت ایران اقدام کند و یا از طرق\n                            دیگر اقداد به عقد قرارداد با شرکت ساخت ایران نماید.\n                          ")])])])])])])]),t._v(" "),n("div",{staticClass:"panel panel-default single-my-account"},[n("div",{staticClass:"panel-heading my-account-title"},[n("h3",{staticClass:"panel-title"},[n("a",{attrs:{"data-bs-toggle":"collapse",href:"#electronic_communication"}},[t._v("\n                      ارتباطات الکترونیکی\n                    ")])])]),t._v(" "),n("div",{staticClass:"panel-collapse collapse show",attrs:{id:"electronic_communication","data-bs-parent":"#public_rules"}},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"terms-content-wrapper"},[n("div",{staticClass:"account-info-wrapper"},[n("h4")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"px-3 py-2"},[t._v("\n                            هنگامی که شما از سرویس‌‏ها و خدمات وب‌سایت ایران استفاده می‏‌کنید، سفارش اینترنتی خود را\n                            ثبت یا خرید می‏‌کنید و یا به وب‌سایت ساخت ایران ایمیل می‏‌زنید، این ارتباطات به صورت\n                            الکترونیکی انجام می‏‌شود و در صورتی که درخواست شما با رعایت کلیه اصول و رویه‏‌ها باشد، شما\n                            موافقت می‌‏کنید که وب‌سایت ساخت ایران به صورت الکترونیکی (از طریق پست الکترونیکی، سرویس\n                            پیام کوتاه و سایر سرویس‌های الکترونیکی) به درخواست شما پاسخ دهد همچنین آدرس ایمیل و\n                            تلفن‌هایی که مشتری در پروفایل خود ثبت می‌کند، تنها آدرس ایمیل و تلفن‌های رسمی و مورد تایید\n                            مشتری است و تمام مکاتبات و پاسخ‌های شرکت از طریق آنها صورت می‌گیرد.\n\n                            نحوه اطلاع از رویدادها، خدمات و سرویس‌های ویژه ساخت ایران:\n                            جهت اطلاع رسانی رویدادها، خدمات و سرویس‌های جدید یا ویژه و پروموشن‌ها، امکان دارد وب‌سایت\n                            ساخت ایران برای اعضای وب‌سایت ایمیل یا پیامک ارسال نماید. در صورتی که کاربران تمایل به\n                            دریافت اینگونه ایمیل و پیامک‌ها نداشته باشند، می‌توانند عضویت دریافت خبرنامه وب‌سایت ساخت\n                            ایران را در پروفایل خود لغو کنند.\n                          ")])])])])])])]),t._v(" "),n("div",{staticClass:"panel panel-default single-my-account"},[n("div",{staticClass:"panel-heading my-account-title"},[n("h3",{staticClass:"panel-title"},[n("a",{attrs:{"data-bs-toggle":"collapse",href:"#events"}},[t._v("\n                      نحوه اطلاع از رویدادها، خدمات و سرویس‌های ویژه ساخت ایران\n                    ")])])]),t._v(" "),n("div",{staticClass:"panel-collapse collapse show",attrs:{id:"events","data-bs-parent":"#public_rules"}},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"terms-content-wrapper"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"px-3 py-2"},[t._v("\n                            جهت اطلاع رسانی رویدادها، خدمات و سرویس‌های جدید یا ویژه و پروموشن‌ها، امکان دارد وب‌سایت\n                            ساخت ایران برای اعضای وب‌سایت ایمیل یا پیامک ارسال نماید. در صورتی که کاربران تمایل به\n                            دریافت اینگونه ایمیل و پیامک‌ها نداشته باشند، می‌توانند عضویت دریافت خبرنامه وب‌سایت ساخت\n                            ایران را در پروفایل خود لغو کنند.\n                          ")])])])])])])]),t._v(" "),n("div",{staticClass:"panel panel-default single-my-account"},[n("div",{staticClass:"panel-heading my-account-title"},[n("h3",{staticClass:"panel-title"},[n("a",{attrs:{"data-bs-toggle":"collapse",href:"#privacy"}},[t._v("\n                      سیاست‏‌های رعایت حریم شخصی\n                    ")])])]),t._v(" "),n("div",{staticClass:"panel-collapse collapse show",attrs:{id:"privacy","data-bs-parent":"#public_rules"}},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"terms-content-wrapper"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"px-3 py-2"},[t._v("\n                            وب‌سایت ساخت ایران به اطلاعات خصوصی اشخاصى که از خدمات سایت استفاده می‏‌کنند، احترام\n                            گذاشته و از آن محافظت می‏‌کند.\n                          ")])])])])])])]),t._v(" "),n("div",{staticClass:"panel panel-default single-my-account"},[n("div",{staticClass:"panel-heading my-account-title"},[n("h3",{staticClass:"panel-title"},[n("a",{attrs:{"data-bs-toggle":"collapse",href:"#ordering"}},[t._v("\n                      روند ثبت سفارش و دریافت کالا\n                    ")])])]),t._v(" "),n("div",{staticClass:"panel-collapse collapse show",attrs:{id:"ordering","data-bs-parent":"#public_rules"}},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"terms-content-wrapper"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"px-3 py-2"},[t._v("\n                            ورود کاربران به وب‏‌سایت ساخت ایران هنگام استفاده از پروفایل شخصی، طرح‏‌های تشویقی،\n                            ویدئوهای رسانه تصویری و سایر خدمات ارائه شده توسط وب‌سایت به معنای آگاه بودن و پذیرفتن\n                            شرایط و قوانین و همچنین نحوه استفاده از سرویس‌‏ها و خدمات وب‌سایت ساخت ایران است. توجه\n                            داشته باشید که ثبت سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و قوانین وب‌سایت\n                            ساخت ایران از سوی کاربر است.\n                            فلذا نهایی شدن سفارش منوط به انعقاد قرارداد فروش بین طرفین خواهد بود، که شرایط و نحوه\n                            پرداخت وجه، شیوه حمل، مدت زمان تحویل کالا، روند مرجوعی، نحوه پشتیبانی و خدمات پس از فروش،\n                            فسخ قرارداد و... مفصلا در متن قرارداد شرح داده است کل مبلغ قرارداد توسط خریدار پرداخت.\n                            امضای قرارداد به منزله قبول شروط قید شده توسط طرفین است.\n                          ")])])])])])])]),t._v(" "),n("div",{staticClass:"panel panel-default single-my-account"},[n("div",{staticClass:"panel-heading my-account-title"},[n("h3",{staticClass:"panel-title"},[n("a",{attrs:{"data-bs-toggle":"collapse",href:"#copyright"}},[t._v("\n                      حق پیگرد قانونی ساخت ایران در صورت کپی بدون کسب مجوز کتبی\n                    ")])])]),t._v(" "),n("div",{staticClass:"panel-collapse collapse show",attrs:{id:"copyright","data-bs-parent":"#public_rules"}},[n("div",{staticClass:"panel-body"},[n("div",{staticClass:"terms-content-wrapper"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",{staticClass:"px-3 py-2"},[t._v("\n                            همه مطالب در دسترس از طریق هر یک از خدمات وب‌سایت ساخت ایران، مانند متن، گرافیک، آرم،\n                            آیکون دکمه، تصاویر، ویدئوهای تصویری، موارد قابل دانلود و کپی، داده‌ها و کلیه محتوای تولید\n                            شده توسط وب‌سایت ساخت ایران جزئی از اموال وب‌سایت ساخت ایران محسوب می‏‌شود و حق استفاده و\n                            نشر تمامی مطالب موجود و در دسترس در انحصار وب‌سایت ساخت ایران است و هرگونه استفاده بدون\n                            کسب مجوز کتبی، حق پیگرد قانونی را برای ساخت ایران محفوظ می‏‌دارد. علاوه بر این،\n                            اسکریپت‌ها، و اسامی خدمات قابل ارائه از طریق هر یک از خدمات ایجاد شده توسط وب‌سایت ساخت\n                            ایران و علائم تجاری ثبت شده نیز در انحصار وب‌سایت ساخت ایران است و هر گونه استفاده با\n                            مقاصد تجاری پیگرد قانونی دارد. کاربران مجاز به بهره‌‏برداری و استفاده از لیست محصولات،\n                            مشخصات فنی، قیمت و هر گونه استفاده از مشتقات وب‏‌سایت ساخت ایران و یا هر یک از خدمات و یا\n                            مطالب، دانلود یا کپی کردن اطلاعات با مقاصد تجاری، هر گونه استفاده از داده کاوی، روبات، یا\n                            روش‌‏های مشابه مانند جمع آوری داده‌‏ها و ابزارهای استخراج نیستند و کلیه این حقوق به صراحت\n                            برای وب‌سایت ساخت ایران محفوظ است. در صورت استفاده از هر یک از خدمات وب‌سایت ساخت ایران\n                            کاربران مسئول حفظ محرمانه بودن حساب و رمز عبور خود هستند و تمامی مسئولیت فعالیت‌‏هایی که\n                            تحت حساب کاربری و یا رمز ورود انجام می‏‌پذیرد به عهده کاربران است.\n                          ")])])])])])])])])])])])])])}],!1,null,"3b9fc6b6",null);e.default=component.exports;installComponents(component,{Breadcrumb:n(316).default,TheFooter:n(313).default})}}]);