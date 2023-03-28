// Add your custom JavaScript for storefront pages here.
$('.tabs').click((e) => {
    console.log('just click')
    console.log(e)
    if (e.target && e.target.dataset && e.target.dataset.tab) {
        const league = e.target.dataset.tab
        const tabs = $('.tabs-container .tabs .tab')
        for (tabO in tabs) {
            let tab = tabs[tabO]
            if (tab.childNodes) {
                const dataTab = tab.childNodes[0] && tab.childNodes[0].dataset && tab.childNodes[0].dataset.tab
                if (tab.classList) {
                if (dataTab === league) {
                    tab.classList.add('active')
                } else {
                    tab.classList.remove('active')
                }
              }
            }
        }
        if (league === 'ligue-1') {
            $('.ligue-1').show()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').hide()

        } else if (league === 'premier-league') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').show()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').hide()
        } else if (league === 'bundesliga') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').show()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').hide()
        } else if (league === 'serie-a') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').show()
            $('.other-clubs').hide()
            $('.international').hide()

        } else if (league === 'other-clubs') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').show()
            $('.international').hide()

        } else if (league === 'international') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').show()
        } else if (league === 'la-liga') {
            $('.ligue-1').hide()
            $('.la-liga').show()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').hide()
        }
    }
})
$('#col-leagues .stamps').click((e) => {
    console.log('clink na stamp')
    if (e.target && e.target.dataset && e.target.dataset.liga) {
        const league = e.target.dataset.liga
        const tabs = $('.tabs-container .tabs .tab')
        console.log(tabs)
        for (tabO in tabs) {
            let tab = tabs[tabO]
            if (tab.childNodes) {
                const dataTab = tab.childNodes[0] && tab.childNodes[0].dataset && tab.childNodes[0].dataset.tab
                console.log(dataTab)
                if (tab.classList) {
                if (dataTab === league) {
                    tab.classList.add('active')
                } else {
                    tab.classList.remove('active')
                }
              }
            }
        }
        console.log(league)
        if (league === 'ligue-1') {
            $('.ligue-1').show()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').hide()

        } else if (league === 'premier-league') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').show()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').hide()
        } else if (league === 'bundesliga') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').show()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').hide()
        } else if (league === 'serie-a') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').show()
            $('.other-clubs').hide()
            $('.international').hide()

        } else if (league === 'other-clubs') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').show()
            $('.international').hide()

        } else if (league === 'international') {
            $('.ligue-1').hide()
            $('.la-liga').hide()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').show()
        } else if (league === 'la-liga') {
            $('.ligue-1').hide()
            $('.la-liga').show()
            $('.premier-league').hide()
            $('.bundesliga').hide()
            $('.serie-a').hide()
            $('.other-clubs').hide()
            $('.international').hide()
        }
    }
});