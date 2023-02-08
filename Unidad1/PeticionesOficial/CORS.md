# CORS
**Cross-Origin Resource Sharing** (CORS) _es un mecanismo de seguridad que permite o restringe la accesibilidad de un recurso en un servidor web desde un dominio diferente._

## ¿Por qué CORS es necesario?
_CORS es necesario debido a la política de mismo origen de los navegadores web, la cual limita las solicitudes HTTP realizadas desde un dominio a solo los recursos en ese mismo dominio. Esta política protege la privacidad y la seguridad de los usuarios al prevenir acceso no autorizado a los recursos._

## Configuración de CORS en el servidor
_La configuración de CORS en el servidor se realiza mediante el uso de encabezados HTTP, como Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, entre otros. Estos encabezados permiten especificar qué recursos pueden ser compartidos y desde qué orígenes._

_Por ejemplo, para permitir solicitudes de cualquier origen, se puede configurar el servidor de la siguiente manera:_

```makefile
Access-Control-Allow-Origin: *
```
_Para permitir solo solicitudes desde un origen específico, se puede configurar el servidor de la siguiente manera:_

```javascript
Access-Control-Allow-Origin: https://example.com
```


## Solicitudes preflight
_Las solicitudes preflight son solicitudes HTTP OPTIONS realizadas antes de las solicitudes reales (GET, POST, etc.). Estas solicitudes se utilizan para determinar si una solicitud real es segura y si cumple con los requisitos de CORS._

## Limitaciones de CORS
_Aunque CORS es una herramienta importante para la seguridad y privacidad en la web, también tiene algunas limitaciones. Por ejemplo, CORS solo se aplica a solicitudes HTTP y no a otras tecnologías como WebSockets. Además, algunos navegadores pueden ignorar o no cumplir con las reglas de CORS en ciertas circunstancias, lo que puede resultar en vulnerabilidades de seguridad._

## Cabeceras de CORS de respuesta
_CORS es un protocolo de seguridad que realizan los navegadores cuando una petición web tiene como url un origen diferente al actual. Si este es el caso, el navegador buscará las siguientes cabeceras en la respuesta del servidor web y detendrá la llamada si algo no es correcto._

1. **Access-Control-Allow-Origin**  
_El navegador busca esta cabecera en la respuesta y comprueba si la información que contiene dicha cabecera coincide con el origen actual (la web que estás visitando). En caso de coincidencia no hay problema; pero si no, detendrá la llamada y no la finalizará. Esto significa que es como si no se hubiese hecho._
  
2. **Access-Control-Allow-Methods**  
_Esta cabecera de respuesta indica qué métodos están permitidos. Por ejemplo, podemos indicar que solo podrán efectuarse llamadas usando GET y POST a un recurso en concreto (pero nunca PUT o PATCH). El navegador compara si el método HTTP que empleamos para llamar es uno de los que aquí figuran. De nuevo, si el método no está en la lista, la llamada será bloqueada._

3. **Access-Control-Allow-Headers**
_Esta cabecera de respuesta indica qué cabeceras puede incluir la petición que originalmente hemos realizado. Si las cabeceras que hemos adjuntado en la petición no están presentes en Access-Control-Allow-Headers, la llamada será cancelada y no podrá ser procesada._

    _Hemos de notar que, además de las cabeceras que los navegadores automáticamente añaden, también se permiten las siguientes siempre (no es necesarias añadirlas a Access-Control-Allow-Headers):_  
- _Accept_  
- _Accept-Language_    
- _Content-Language_
- _Content-Type_

_Es decir, si no declaramos ningún Access-Control-Allow-Headers y añadimos, por necesidad de nuestra plataforma la cabecera X-USER: 1, la conexión será interrumpida. Deberemos añadir en el servidor web la cabecera de respuesta "Access-Control-Allow-Headers: x-user"._