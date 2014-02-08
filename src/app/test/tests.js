test("plugin defaults", function () {
    var defaults = $.notifyCookiesPolicy.defaults;
    ok(defaults.cookieName == "notifyCookiesPolicy_accepted", "Default cookie name");
    ok(defaults.defaultScroll == 20, "Default scroll");
    ok(defaults.cssClass == "notify-cookies-policy-container", "Default css class");
});
