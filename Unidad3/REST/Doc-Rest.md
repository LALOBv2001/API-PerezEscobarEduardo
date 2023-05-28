# _Restricciones REST_

REST (Representational State Transfer) es un estilo de arquitectura para diseñar servicios web. Para garantizar su uniformidad y escalabilidad, REST impone una serie de restricciones fundamentales. Estas restricciones ayudan a crear servicios web que son flexibles, mantenibles y altamente interoperables.

A continuación, se presentan las principales restricciones de REST:

## 1. Cliente-Servidor

REST establece una clara separación entre el cliente y el servidor. El cliente y el servidor son entidades independientes que se comunican a través de solicitudes y respuestas. Esta separación permite que cada componente evolucione de forma independiente sin afectar al otro. Además, promueve una mayor modularidad y reutilización del código.

## 2. Sin Estado

REST es un protocolo sin estado, lo que significa que cada solicitud del cliente al servidor debe contener toda la información necesaria para comprender y procesar la solicitud. El servidor no debe almacenar información sobre el estado de las solicitudes anteriores del cliente. Cada solicitud se trata de forma aislada, lo que facilita la escalabilidad y la tolerancia a fallos.

## 3. Interfaz Uniforme

Las aplicaciones REST utilizan una interfaz uniforme que consta de varias restricciones:

### Identificación de Recursos

Los recursos en un sistema REST se identifican mediante URLs (Uniform Resource Locators). Cada recurso debe tener una URL única que permita acceder a él.

### Manipulación de Recursos a través de Representaciones

Los clientes pueden obtener, crear, modificar o eliminar recursos a través de representaciones. Estas representaciones pueden ser en formatos como JSON (JavaScript Object Notation) o XML (eXtensible Markup Language). Los clientes pueden utilizar métodos HTTP como GET, POST, PUT y DELETE para interactuar con los recursos.

### Mensajes Auto-descriptivos

Cada mensaje enviado entre el cliente y el servidor debe contener suficiente información para describir cómo procesarlo. Los mensajes deben incluir metadatos como encabezados HTTP que brinden información adicional sobre el mensaje y su contenido.

### Hipermedia como Motor del Estado de la Aplicación (HATEOAS)

Las respuestas del servidor deben incluir enlaces a otros recursos relacionados. Esto permite a los clientes descubrir y navegar por la aplicación de forma dinámica. Los clientes pueden seguir enlaces y acceder a recursos relacionados sin la necesidad de conocer todas las rutas de antemano. HATEOAS facilita la evolución de la aplicación y mejora su mantenibilidad.

## 4. Sistema en Capas

La arquitectura REST puede tener múltiples capas de servidores, donde cada capa tiene una funcionalidad específica. Esto permite la escalabilidad y la mejora del rendimiento. Las capas pueden implementar funciones como la seguridad, el almacenamiento en caché y la autenticación, sin que el cliente o el servidor tengan conocimiento directo de ellas.

## 5. Cacheable

REST permite que las respuestas del servidor sean almacenadas en caché en el cliente o en servidores intermedios. Almacenar en caché las respuestas puede mejorar el rendimiento y reducir la carga en el servidor, ya que se pueden reutilizar respuestas previas para solicitudes similares.

__*Estas restricciones fundamentales de REST son clave para crear servicios web eficientes, escalables y altamente interoperables. Al seguir estas restricciones, los desarrolladores pueden aprovechar al máximo las ventajas de la arquitectura REST y construir aplicaciones modernas y robustas.*__
