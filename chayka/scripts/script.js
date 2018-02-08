window.addEventListener('load', ()=>{
  let productsPage = document.querySelector('.products_page');


  // Attach products.json with AJAX
  productsPage.innerHTML = "";
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'products.json');
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = ()=>{
    let products = xhr.response;

    // Parse json to variables    
    products.forEach((item, i, arr)=>{

      let productId = item.productId;
      let code = parseInt(item.code);
      let title = item.title;
      let description = item.description;
      let primaryImageUrl = item.primaryImageUrl.slice(0, -4);
      let assocProducts = item.assocProducts.split(';\n');
      let weight = parseInt(item.weight);
      let unit = item.unit;
      let unitFull = item.unitFull;
      let unitRatio = item.unitRatio;
      let unitAlt = item.unitAlt;
      let unitRatioAlt = item.unitRatioAlt.toFixed(4);
      let unitFullAlt = item.unitFullAlt;
      let priceRetail = item.priceRetail;
      let priceRetailAlt = item.priceRetailAlt.toFixed(2);
      let priceGold = item.priceGold;
      let priceGoldAlt = item.priceGoldAlt.toFixed(2);
      let bonusAmount = item.bonusAmount;
      let hasAlternateUnit = item.hasAlternateUnit;
      let isActive = item.isActive;
      let modified = item.modified;

      // Interpolate template
      let prodTag = document.querySelector('.product_tags');
      let product = document.createElement('div');
      product.classList = "product product_horizontal";
      product.innerHTML = `
            <span class="product_code">Код: ${code}</span>
            <div class="product_status_tooltip_container">
                <span class="product_status">Наличие</span>
            </div>                                
            <div class="product_photo">
                <a href="${primaryImageUrl}.jpg" class="url--link product__link">
                    <img src="${primaryImageUrl}_220x220_1.jpg">
                </a>                                    
            </div>
            <div class="product_description">
                <a href="#" class="product__link">${title}</a>
            </div>
            <div class="product_tags hidden-sm">
                <p>Могут понадобиться:</p>
                ${assocProducts.map(assPro => `<a href="#" class="url--link"> ${assPro}</a>`)}
            </div>
            <div class="product_units">
                <div class="unit--wrapper">
                    <div class="unit--select unit--active">
                        <p class="ng-binding">За м. кв.</p>
                    </div>
                    <div class="unit--select">
                        <p class="ng-binding">За упаковку</p>
                    </div>
                </div>
            </div>
            <p class="product_price_club_card">
                <span class="product_price_club_card_text">По карте<br>клуба</span>
                <span class="goldPrice goldPrice--gen">${priceGold}</span>
                <span class="goldPrice goldPrice--alt" style="display:none">${priceGoldAlt}</span>
                <span class="rouble__i black__i">
                    <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                    </svg>
                  </span>
            </p>
            <p class="product_price_default">
                <span class="retailPrice retailPrice--gen">${priceRetail}</span>
                <span class="retailPrice retailPrice--alt" style="display:none">${priceRetailAlt}</span>
                <span class="rouble__i black__i">
                    <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                    </svg>
                  </span>
            </p>
            <div class="product_price_points">
                <p class="ng-binding">Можно купить за ${priceRetail} балла</p>
            </div>
            <div class="list--unit-padd"></div>
            <div class="list--unit-desc">
                <div class="unit--info">
                    <div class="unit--desc-i"></div>
                    <div class="unit--desc-t">
                        <p>
                            <span class="ng-binding">Продается ${unitFull}ми:</span>
                            <span class="unit--infoInn">${unitRatio} ${unit} = ${unitRatioAlt} ${unitAlt} </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="product__wrapper">
                <div class="product_count_wrapper">
                    <div class="stepper">
                        <input class="product__count stepper-input" type="text" value="1">
                        <span class="stepper-arrow up"></span>
                        <span class="stepper-arrow down"></span>                                            
                    </div>
                </div>
                <span class="btn btn_cart" data-url="/cart/" data-product-id="${productId}">
                    <svg class="ic ic_cart">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                    </svg>
                    <span class="ng-binding">В корзину</span>
                </span>
            </div>
      `;

      // Append each product to DOM
      productsPage.appendChild(product);
    });
  }

  // Make numbers change by click
  productsPage.addEventListener('click', (e)=>{
    let currentInput = e.target.parentElement.firstElementChild;
    let currentValue = currentInput.getAttribute('value');
    let goldPriceGen = document.querySelector('.goldPrice--gen');
    let goldPriceAlt = document.querySelector('.goldPrice--alt');
    let retPriceGen = document.querySelector('.goldPrice--gen');
    let retPriceAlt = document.querySelector('.goldPrice--alt');

    if (e.target.classList.contains('up')) {
      currentInput.setAttribute('value', ++currentValue);
    } else if (e.target.classList.contains('down') && currentValue > 1) {
      currentInput.setAttribute('value', --currentValue);
    } else if (e.target.classList.contains('ng-binding') && !e.target.parentElement.classList.contains('unit--active')){
      let unit = e.target.parentElement;
      let unitParent = unit.parentNode.parentNode.parentNode;
      let goldPrice = unitParent.querySelector('.goldPrice--gen');
      let goldPriceAlt = unitParent.querySelector('.goldPrice--alt');
      let retPrice = unitParent.querySelector('.retailPrice--gen');
      let retPriceAlt = unitParent.querySelector('.retailPrice--alt');
      unit.classList.add('unit--active');
      if (unit.nextElementSibling){
        unit.nextElementSibling.classList.remove('unit--active');
        goldPrice.style.display = 'inline';
        goldPriceAlt.style.display = 'none';
        retPrice.style.display = 'inline';
        retPriceAlt.style.display = 'none';
      } else {
        unit.previousElementSibling.classList.remove('unit--active');
        goldPrice.style.display = 'none';
        goldPriceAlt.style.display = 'inline';
        retPrice.style.display = 'none';
        retPriceAlt.style.display = 'inline';
      };
    };
  });


});