Tiene dependencias con jQuery >= 1.9.1 y con jQuery.cookie >= 1.4

Incluye en la solución una hoja de estilo y un archivo js.

<ul>
  <li>jquery.notifyCookiesPolicy.css</li>
  <li>jquery.notifyCookiesPolicy.js</li>
</ul>

Para usarlo sólo hay que incluir.

<link rel="stylesheet" type="text/css" href="css/jquery.notifyCookiesPolicy.css"/>
<script type ="text/javascript" src="scripts/jquery.notifyCookiesPolicy.js"></script>

$.notifyCookiesPolicy();


<hr>

Valores por defecto:´

{
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
}
