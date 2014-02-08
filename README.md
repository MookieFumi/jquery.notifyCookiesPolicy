##jquery.notifyCookiesPolicy

Es un plugin de jQuery para notificar el uso de cookies y procesar su aceptación. El plugin tiene dependencias con jQuery >= 1.9.1 y con jQuery.cookie >= 1.4

Incluye únicamente una hoja de estilo y un archivo js.
<ul>
  <li>jquery.notifyCookiesPolicy.css</li>
  <li>jquery.notifyCookiesPolicy.js</li>
</ul>

Para usarlo sólo hay que incluir las referencias a los archivos anteriores y para usarlo con los parámetros por defecto:

> $.notifyCookiesPolicy();

<hr>

### Valores por defecto
- defaultText: 'Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa navegando, consideramos que acepta su uso. Para obtener más información, o bien conocer cómo cambiar la configuración vea la política de cookies.'
- defaultScroll: 20
- cssClass: "notify-cookies-policy-container"
- cookieName: "notifyCookiesPolicy_accepted"
- callbackToEnableGoogleAnalytics: null
- cookiePolicy.show: true
- cookiePolicy.defaultText: "Ver Política de cookies"
- cookiePolicy.callbackToShowCookiePolicy: null
    
<hr>

### Callbacks
Existen 2 callbacks en el plugin, el primero es _**callbackToEnableGoogleAnalytics**_ y será llamado una vez que el usuario ha aceptado las cookies, y el segundo es _**callbackToShowCookiePolicy**_ que será la acción que realize en el enlace a la política de cookies.


[Enlace al paquete en nuget](https://www.nuget.org/packages/jquery.notifyCookiesPolicy/)
