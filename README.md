Tiene dependencias con jQuery >= 1.9.1 y con jQuery.cookie >= 1.4

Incluye en la solución una hoja de estilo y un archivo js.

<ul>
  <li>jquery.notifyCookiesPolicy.css</li>
  <li>jquery.notifyCookiesPolicy.js</li>
</ul>

Para usarlo sólo hay que incluir las referencias a los archivos anteriores y para usarlo con los parámetros por defecto:

$.notifyCookiesPolicy();


<hr>

Valores por defecto:

    <ul>
        <li>defaultText: 'Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa navegando, consideramos que acepta su uso. Para obtener más información, o bien conocer cómo cambiar la configuración vea la política de cookies.'</li>
        <li>defaultScroll: 20</li>
        <li>cssClass: "notify-cookies-policy-container"</li>
        <li>cookieName: "notifyCookiesPolicy_accepted"</li>
        <li>callbackToEnableGoogleAnalytics: null</li>
        <li>cookiePolicy
            <ul>
                <li>show: true</li>
                <li>defaultText: "Ver Política de cookies"</li>
                <li>callbackToShowCookiePolicy: null</li>
            </ul>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

<hr>

Callbacks

Existen 2 callbacks en el plugin, el primero es callbackToEnableGoogleAnalytics y será llamado una vez que el usuario ha aceptado las cookies, y el segundo es callbackToShowCookiePolicy que será la acción que realize en el enlace a la política de cookies.
