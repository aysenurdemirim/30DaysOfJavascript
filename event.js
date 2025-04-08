

$(document).on('click', '[data-id=0903640"]', function () {
        dataLayer.push({
            'event': 'menu_tiklama_eventi',
            'fbEventName': 'menu_tiklama_eventi'
        });
});




$(document).on('submit', 'elementor-search-form__input', function () {
    let keyword = jQuery('#elementor-search-form-8db1a88').val();

    if (keyword.length) {
        dataLayer.push({
            'event': 'searched',
            'fbEventName': 'searched',
            'fbEventParams': {
                "keyword": keyword
            }
        });
    }
});


$(document).on('click', '[data-id="46af94bd"] .elementor-button', function () {
    let sanalTur = $(this)
        .find('span.elementor-button-text')
        .text()
        .toLowerCase()
        .replaceAll(' ', '_');

    let klinikAdi = $(this).closest('h2').first().text().trim();

    let eventName = klinikAdi + "_" + sanalTur;
    // dataLayer'a gönder
    dataLayer.push({
        'event': 'searched',
        'conversionValue': eventName
    });
});




$(document).on('click', '.elementor-element-2cdbc235', function () {
    dataLayer.push({
        'event': 'trustpilot',
        'fbEventName': 'trustpilot'
    });
});


$(document).on('click', '.elementor-element-68080441', function () {
    dataLayer.push({
        'event': 'randevu_al',
        'fbEventName': 'randevu_al'
    });
});

$(document).on('click', '[data-id="5d95dd6"]', function () {
    dataLayer.push({
        'event': 'banner_randevu_al',
        'fbEventName': 'banner_randevu_al'
    });
});

