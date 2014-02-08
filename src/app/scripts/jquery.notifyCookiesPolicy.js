; (function ($) {
    var pluginName = 'notifyCookiesPolicy';

    $.notifyCookiesPolicy = function (options) {
        $.notifyCookiesPolicy.methods.init.apply(this, arguments);
    };
    
    $.notifyCookiesPolicy.methods = {
        init: function (options) {

            if ($.cookie == undefined) {
                throw "Se necesita el plugin $.cookie. https://github.com/carhartl/jquery-cookie";
                return false;
            }

            var defaults = $.notifyCookiesPolicy.defaults;

            if ($.cookie(defaults.cookieName) == null) {
                var $cookieAdvise = $("<div data-plugin-name = '" + pluginName + "'/>");

                var settings = $.extend(defaults, options);
                $cookieAdvise.data(pluginName, {
                    target: $cookieAdvise,
                    settings: settings
                });

                $cookieAdvise.addClass(settings.cssClass).html(settings.defaultText);
                $('body').append($cookieAdvise);

                if (settings.cookiePolicy.show) {
                    appendCookiePolicyLink($cookieAdvise, settings);
                }

                handlerEvents();
            }
        }
    };

    function appendCookiePolicyLink($cookieAdvise, settings) {
        var $cookiePolicyLink = $(" <a href='#'>" + settings.cookiePolicy.defaultText + "</a>");
        $cookiePolicyLink.on("click", function (e) {
            e.stopPropagation();

            if (typeof settings.cookiePolicy.callbackToShowCookiePolicy == 'function') {
                settings.cookiePolicy.callbackToShowCookiePolicy();
            }
        });

        $cookieAdvise.append("&nbsp;").append($cookiePolicyLink);
    }

    function accept() {
        var $cookieAdvise = $("[data-plugin-name='" + pluginName + "']");
        var settings = $cookieAdvise.data(pluginName).settings;

        if ($.cookie(settings.cookieName) == null) {
            $.cookie(settings.cookieName, settings.cookieName, {
                expires: 365,
                path: '/'
            });


            var callback = settings.callbackToEnableGoogleAnalytics;
            if (typeof callback == 'function') {
                callback($cookieAdvise);
            }

            $cookieAdvise.remove();

            unhandlerEvents();
        }
    }

    function handlerEvents() {
        handlerClickOnDocument();
        handlerScrollOnWindow();
    }

    function handlerClickOnDocument() {
        $(document).click(function (e) {
            if (e.button != undefined && e.button == 0) {
                accept();
            }
        });
    }

    function handlerScrollOnWindow() {
        $(window).scroll(function (e) {
            var $cookieAdvise = $("[data-plugin-name='" + pluginName + "']");
            var settings = $cookieAdvise.data(pluginName).settings;
            if ($(window).scrollTop() >= settings.defaultScroll) {
                accept();
            }
        });
    }

    function unhandlerEvents() {
        $(document).off('click');
        $(window).off('scroll');
    }
    
    $.notifyCookiesPolicy.defaults = {
        defaultText: 'Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa navegando, consideramos que acepta su uso. Para obtener más información, o bien conocer cómo cambiar la configuración vea la política de cookies.',
        defaultScroll: 20,
        cssClass: "notify-cookies-policy-container",
        cookieName: "notifyCookiesPolicy_accepted",
        callbackToEnableGoogleAnalytics: null,
        cookiePolicy: {
            show: true,
            defaultText: "Ver Política de cookies",
            callbackToShowCookiePolicy: null
        }
    };

})(jQuery);