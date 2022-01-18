$(function(){
  const appendNews = (json) => {
    let appendHtml = "";
    json.forEach(element => {
      const newsDateSplit = element.newsDate.split("-");
      let newsHtml = `<li class="news_list__item">
        <a class="news_list__link href="">
          <div class="news_list__inner">
            <div class="news_list__imageWrapper">
              <img src="${element.newsImage}" alt="${element.newsAlt}" class="news_list__image">
            </div>
            <div class="news_list__textWrapper">
              <p class="news_list__date"><time datatime="${element.newsDate}">${newsDateSplit[0]}年${newsDateSplit[1]}月${newsDateSplit[2]}日</time></p>
              <h3 class="news_list__title">${element.newsTitle}</h3>
              <p class="news_list__description">${element.newsDescription}</p>
            </div>
          </div>
        </a>
      </li>`;
      appendHtml += newsHtml;
    });
    $(".js-news_list").append(appendHtml);
  }
  $.ajax({ // json読み込み開始
    type: 'GET',
    url: 'js/news.json',
    dataType: 'json'
  })
  .then(
    function(json) { // jsonの読み込みに成功した時
      appendNews(json);
    },
    function() { //jsonの読み込みに失敗した時

    }
  );
  $(".js-contact_form__corporation").on("click", function() {
    $(".js-contact_form__radioButtonLabel").removeClass("contact_form__radioButtonLabel--checked");
    const checkedFlg = $(this).is(":checked");
    if(checkedFlg) {
      $(".js-contact_form__corporationLabel").addClass("contact_form__radioButtonLabel--checked");
    }
  });
  $(".js-contact_form__individual").on("click", function() {
    $(".js-contact_form__radioButtonLabel").removeClass("contact_form__radioButtonLabel--checked");
    const checkedFlg = $(this).is(":checked");
    if(checkedFlg) {
      $(".js-contact_form__individualLabel").addClass("contact_form__radioButtonLabel--checked");
    }
  });
});