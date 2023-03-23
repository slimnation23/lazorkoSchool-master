Vue.component("menu-item", {
  props: ["href", "name"],
  template: `<li class="nav-item ml-2">
    <a class="nav-link" v-bind:class="{ 'nav-item--active': isActive }" 
    :href="getHref">{{ name }}</a>
</li>`,

  computed: {
    // якщо ми знаходимось на сторінці 'href', тоді повертає true
    isActive: function() {
      return this.href === document.location.pathname;
    },
    // якщо ми знаходимось на сторінці 'href', тоді повертає #, щоб не переходити сюди ж
    getHref: function() {
      if (this.href === document.location.pathname) {
        return "#";
      } else {
        return this.href;
      }
    }
  }
});

Vue.component("main-menu", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top headerBG">
    <div class="container">
        <a class="navbar-brand" href="index.html"><img src="image/logoSvg.svg"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
         aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNav" class="collapse navbar-collapse align-items-end justify-content-around flex-column">
            <ul class="navbar-nav social">
    
                <li class="nav-item phoneButton align-self-center mr-2">
                    <a href="tel:+380986330282" style="color: #f25f61; font-weight: 600">+38 098 633 02 82</a>
                </li>

                <li class="nav-item ml-1 ml-2">
                    <a class="nav-link" target="new" href="https://www.facebook.com/LazorkoSchool/">
                        <img src="image/facebookSvg.svg" alt="fb">
                    </a>
                </li>

                <li class="nav-item ml-1 ml-2">
                    <a class="nav-link" target="new1" href="https://www.instagram.com/lazorkoschool/">
                        <img src="image/instagramSvg.svg" alt="instagram">
                    </a>
                </li>

                <li class="nav-item ml-1 ml-2">
                    <a class="nav-link" target="new2" href="https://t.me/LazorkoSchool">
                        <img src="image/telegramSvg.svg" alt="telegram">
                    </a>
                </li>
               
            </ul>

            <ul class="navbar-nav social2">
    
               
                <menu-item href="index.html" name="Головна"></menu-item>

                <li class="nav-item dropdown ml-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Курси
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                    <menu-item href="businessCourses.html" name="Бізнес курси"></menu-item>
                    <menu-item href="individualCourses.html" name="Індивідуальний курс"></menu-item>
                    <menu-item href="groupCourses.html" name="Групові курси"></menu-item>
                    </div>
                </li>

                <li class="nav-item dropdown ml-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Онлайн
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <menu-item href="businessCourse.html" name="Бізнес курси"></menu-item>
                    <menu-item href="individualCourse.html" name="Індивідуальний курс"></menu-item>
                    </div>
                </li>

                <menu-item href="disconts.html" name="Дисконти"></menu-item>


                <menu-item href="about-us.html" name="Про нас"></menu-item>
    
            </ul>

        </div>
        </div>
    </nav>

`
});

var header = new Vue({
  el: "#header",
  data: {}
});

Vue.component("footer-vue", {
  template: `<div class="container-fluid pt-5 footerBG">
    <div class="row justify-content-center ml-0 mr-0">

        <div class="col-lg-4 col-sm-6 mb-4">
            <div id="map" class="mapApiCont"></div>
        </div>

        <div class="col-lg-2 col-sm-4 mb-sm-4 flex-column">
            <ul>
                <h5><strong>Адреса</strong></h5>
                <li>м. Тернопіль</li>
                <li>вул. Танцорова</li>
                <li>51, каб. 705</li>
            </ul>
        </div>

        <div class="col-lg-3 col-sm-4 mb-sm-4 flex-column">
            <ul>
                <h5><strong>Контакти</strong></h5>
                <a href="tel:+380986330282" style="color: #212529">+38 098 633 02 82</a>
                <li>lazorkoschool@gmail.com</li>
                <li>Skype: Lazorko School</li>
            </ul>

            <ul class="row flex-wrap mt-4 justify-content-around w-75">
                <li class="nav-item mt-md-1">
                    <a class="nav-link p-0" target="new" href="https://www.facebook.com/LazorkoSchool/">
                        <img src="image/facebookSvg.svg" alt="fb">
                    </a>
                </li>

                <li class="nav-item mt-md-1">
                    <a class="nav-link p-0" target="new1" href="https://www.instagram.com/lazorkoschool/">
                        <img src="image/instagramSvg.svg" alt="instagram">
                    </a>
                </li>

                <li class="nav-item mt-md-1">
                    <a class="nav-link p-0" target="new2" href="https://t.me/LazorkoSchool">
                        <img src="image/telegramSvg.svg" alt="telegram">
                    </a>
                </li>

            </ul>

        </div>

        <div class="col-lg-2 col-sm-4 mb-sm-4 flex-column">
            <h5><strong>Про нас</strong></h5>
            <p>Наша школа вакансій</p>
        </div>

    </div>

</div>`
});

var footer = new Vue({
  el: "#footer",
  data: {}
});


  $(document).ready(function () {
       $(".first_div").hide();
            $(".btn1").click(function () {
                $(".first_div").hide();
                $(".second_div").show()
            });
          $(".btn2").click(function () {
                $(".second_div").hide();
                $(".first_div").show()
        });
     });