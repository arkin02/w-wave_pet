window.addEventListener('DOMContentLoaded', function () {

    const modal = new GraphModal();

    $(".accordion__list").accordion({
      heightStyle: "content",
      active: true,
      collapsible: true,
      icons: false
    });

    const element = document.querySelector('select');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
    $(".burger").click(() => {
      $(".hidden_mob").toggle("slow");

    })
    $(".header__bottom-mobbtn").click(() => {
      $(".hidden_play").toggle("slow");

    })
    document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('.burger').classList.toggle('burger__block-active')
      document.querySelector('.header__nav').classList.toggle('header__nav-active')
      document.querySelector('.header').classList.toggle('header-active')
      document.querySelector('.header__bottom-nav').classList.toggle('header__bottom-nav-active')
    });

    
   

    document.querySelector('.bottom-players__btnarchiv').addEventListener('click', function () {
      document.querySelector('.bottom-players__btnarchiv .pause').classList.toggle('btn-active')
    });

    document.querySelector('.bottom-players__btnnow').addEventListener('click', function () {
      document.querySelector('.bottom-players__btnnow .pause').classList.toggle('btn-active')
    });

    let btnPlay = document.querySelectorAll('.card-content__btnplay');
      btnPlay.forEach(function(el) {
        el.addEventListener('click', function(ev) {
          ev.stopPropagation();
            btnPlay.forEach(el => { if (el != this) { el.classList.remove('btn-active') }; });
              this.classList.toggle('btn-active');
      });
    });

    document.querySelector('.header__bottom-mobbtn').addEventListener('click', function () {
      document.querySelector('.bottom-players').classList.toggle('header__bottom-players_active')
      document.querySelector('.header__bottom-mobbtn').classList.toggle('header__bottom-mobbtn_active')
      document.querySelector('.header__bottom').classList.toggle('header__bottom_active')
    });


    document.querySelector('.podcasts__more-btn').addEventListener('click', function () {
      var elements = document.getElementsByClassName('podcasts__item');
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("podcasts__item_active");
      }
    });

    const btnClose = document.querySelector('.podcasts__more-btn');
    btnClose.addEventListener('click', function() {
      btnClose.innerHTML =
        (btnClose.innerHTML === 'Скрыть') ? btnClose.innerHTML = 'Ещё подкасты' : btnClose.innerHTML = 'Скрыть';
    })

    const anchors = document.querySelectorAll('.header__nav-link, .footer__nav-link')
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }

    document.querySelectorAll('.guests-list__btn').forEach(function(guestsBtn){
      guestsBtn.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.guests-list__btn').forEach(function(btn){
    btn.classList.remove('guests-list__btn--active')});
        e.currentTarget.classList.add('guests-list__btn--active');
    document.querySelectorAll('.guests__cards').forEach(function(guestsBtn){
    guestsBtn.classList.remove('guests__cards--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__cards--active');
     });
    });

    const swiper = new Swiper('.my-swiper', {
      direction: 'horizontal',
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      slidesPerView: 4,
      spaceBetween: 30,
      breakpointsBase: '.swiper-container',
      breakpoints: {
          256: {
              slidesPerView: 2.9,
              spaceBetween: 85,
              grabCursor: true
          },
          370: {
              slidesPerView: 2,
              spaceBetween: 30,
              grabCursor: true
          },
          539: {
              slidesPerView: 2,
              spaceBetween: 30,
              grabCursor: true
          },
          540: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          825: {
              slidesPerView: 4,
              spaceBetween: 30
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 30
          },
      }
  })
    


    new JustValidate('.about__form', {
      colorWrong: 'var(--color-error)',

      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 35
        },
        mail: {
          required: true,
          email: true
        },
      },
      messages: {
        name: {
          required: 'Ошибка',
          minLength: 'Ошибка',
          maxLength: 'Ошибка'
        },
        mail: {
          required: 'Ошибка',
          email: 'Ошибка'
        },
      },
    });

});