// addFav
function addFavorite(sUrl, sTitle) {
    sUrl = encodeURL(sUrl);
    try {
        window.external.addFavorite(sUrl, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sUrl, "");
        } catch (e) {
            alert("Sorry,Add to Favorite failed!");
        }
    }
}
// setHome
function setHome(url) {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(url);
    } else {
        alert("Set HomePage Failed!");
    }
}