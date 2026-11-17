/* Tema: AWS Lambda (serverless) */
QUESTIONS.push(
  Q(T_LAMBDA,
    { ca: "Què és AWS Lambda?", es: "¿Qué es AWS Lambda?" },
    [
      { ca: "Un tipus d'instància EC2", es: "Un tipo de instancia EC2" },
      { ca: "Un servei serverless per executar funcions en resposta a esdeveniments", es: "Un servicio serverless para ejecutar funciones en respuesta a eventos" },
      { ca: "Un servei d'emmagatzematge de fitxers", es: "Un servicio de almacenamiento de archivos" },
      { ca: "Una base de dades NoSQL", es: "Una base de datos NoSQL" }
    ], 1,
    { ca: "Lambda és la porta d'entrada al món serverless: definim funcions —trossets de codi— que s'executen en resposta a esdeveniments, sense gestionar servidors.", es: "Lambda es la puerta de entrada al mundo serverless: definimos funciones —trozos de código— que se ejecutan en respuesta a eventos, sin gestionar servidores." }),

  Q(T_LAMBDA,
    { ca: "Què significa \"serverless\" en el context de Lambda?", es: "¿Qué significa \"serverless\" en el contexto de Lambda?" },
    [
      { ca: "Que no existixen servidors físics a AWS", es: "Que no existen servidores físicos en AWS" },
      { ca: "Que nosaltres no gestionem els servidors; AWS s'encarrega de l'escalat i la infraestructura", es: "Que nosotros no gestionamos los servidores; AWS se encarga del escalado y la infraestructura" },
      { ca: "Que el codi s'executa al navegador", es: "Que el código se ejecuta en el navegador" },
      { ca: "Que no cal pagar mai", es: "Que no hay que pagar nunca" }
    ], 1,
    { ca: "Serverless no vol dir que no hi haja servidors, sinó que AWS s'encarrega automàticament de l'escalat, la gestió de la infraestructura i el pagament per ús.", es: "Serverless no significa que no haya servidores, sino que AWS se encarga automáticamente del escalado, la gestión de la infraestructura y el pago por uso." }),

  Q(T_LAMBDA,
    { ca: "Què és un esdeveniment (event) per a Lambda?", es: "¿Qué es un evento para Lambda?" },
    [
      { ca: "Un fitxer de configuració de xarxa", es: "Un archivo de configuración de red" },
      { ca: "Una acció o succés que provoca l'execució de la funció", es: "Una acción o suceso que provoca la ejecución de la función" },
      { ca: "Una regla de Security Group", es: "Una regla de Security Group" },
      { ca: "Un tipus d'IP elàstica", es: "Un tipo de IP elástica" }
    ], 1,
    { ca: "Un esdeveniment és qualsevol succés que dispara la funció: pujar un fitxer a S3, una crida HTTP, una programació cron, una notificació d'un altre servei, etc.", es: "Un evento es cualquier suceso que dispara la función: subir un archivo a S3, una llamada HTTP, una programación cron, una notificación de otro servicio, etc." }),

  Q(T_LAMBDA,
    { ca: "Quin d'aquests pot ser un esdeveniment que active Lambda?", es: "¿Cuál de estos puede ser un evento que active Lambda?" },
    [
      { ca: "La pujada d'un fitxer a S3", es: "La subida de un archivo a S3" },
      { ca: "Una crida d'una API mitjançant API Gateway", es: "Una llamada de una API mediante API Gateway" },
      { ca: "Un esdeveniment programat amb EventBridge", es: "Un evento programado con EventBridge" },
      { ca: "Totes les anteriors són correctes", es: "Todas las anteriores son correctas" }
    ], 3,
    { ca: "Lambda es pot activar per la pujada d'un fitxer a S3, per una crida d'API Gateway, per un esdeveniment programat amb EventBridge o per una notificació d'un altre servei.", es: "Lambda se puede activar por la subida de un archivo a S3, por una llamada de API Gateway, por un evento programado con EventBridge o por una notificación de otro servicio." }),

  Q(T_LAMBDA,
    { ca: "Quin és un punt fort de Lambda?", es: "¿Cuál es un punto fuerte de Lambda?" },
    [
      { ca: "Cal gestionar manualment els servidors", es: "Hay que gestionar manualmente los servidores" },
      { ca: "No cal gestionar servidors i escala de forma automàtica", es: "No hay que gestionar servidores y escala de forma automática" },
      { ca: "Només funciona en horari laboral", es: "Solo funciona en horario laboral" },
      { ca: "Requereix una instància EC2 engegada sempre", es: "Requiere una instancia EC2 encendida siempre" }
    ], 1,
    { ca: "Els punts forts de Lambda són: no cal gestionar servidors, escala automàticament, pagues només pel temps d'execució i s'integra fàcilment amb molts serveis AWS.", es: "Los puntos fuertes de Lambda son: no hay que gestionar servidores, escala automáticamente, pagas solo por el tiempo de ejecución y se integra fácilmente con muchos servicios AWS." }),

  Q(T_LAMBDA,
    { ca: "Com es paga Lambda?", es: "¿Cómo se paga Lambda?" },
    [
      { ca: "Una quota fixa mensual", es: "Una cuota fija mensual" },
      { ca: "Només pel temps d'execució (i peticions)", es: "Solo por el tiempo de ejecución (y peticiones)" },
      { ca: "Per cada servidor encès", es: "Por cada servidor encendido" },
      { ca: "Per cada usuari IAM creat", es: "Por cada usuario IAM creado" }
    ], 1,
    { ca: "Amb Lambda es paga només pel temps d'execució (i pel nombre de peticions), no per servidors engegats, cosa que encaixa amb el model de pagament per ús.", es: "Con Lambda se paga solo por el tiempo de ejecución (y por el número de peticiones), no por servidores encendidos, lo que encaja con el modelo de pago por uso." }),

  Q(T_LAMBDA,
    { ca: "Què vol dir que les funcions Lambda són estateless (sense estat)?", es: "¿Qué significa que las funciones Lambda son stateless (sin estado)?" },
    [
      { ca: "Que no poden accedir a cap base de dades", es: "Que no pueden acceder a ninguna base de datos" },
      { ca: "Que l'estat no es garantix entre invocacions", es: "Que el estado no se garantiza entre invocaciones" },
      { ca: "Que no tenen codi", es: "Que no tienen código" },
      { ca: "Que només s'executen una vegada", es: "Que solo se ejecutan una vez" }
    ], 1,
    { ca: "L'estat no es garantix entre invocacions. Si necessites estat, has d'utilitzar serveis externs com S3, DynamoDB o RDS.", es: "El estado no se garantiza entre invocaciones. Si necesitas estado, debes utilizar servicios externos como S3, DynamoDB o RDS." }),

  Q(T_LAMBDA,
    { ca: "Si una funció Lambda necessita guardar estat, què hauria de fer?", es: "Si una función Lambda necesita guardar estado, ¿qué debería hacer?" },
    [
      { ca: "Guardar-lo en una variable global per sempre", es: "Guardarlo en una variable global para siempre" },
      { ca: "Utilitzar un servei extern com S3, DynamoDB o RDS", es: "Utilizar un servicio externo como S3, DynamoDB o RDS" },
      { ca: "No es pot fer", es: "No se puede hacer" },
      { ca: "Crear una altra funció Lambda", es: "Crear otra función Lambda" }
    ], 1,
    { ca: "Com que les funcions són efímeres i estateless, l'estat s'ha de guardar en serveis externs com S3, DynamoDB o RDS.", es: "Como las funciones son efímeras y stateless, el estado se debe guardar en servicios externos como S3, DynamoDB o RDS." }),

  Q(T_LAMBDA,
    { ca: "Quina limitació important tenen les funcions Lambda?", es: "¿Qué limitación importante tienen las funciones Lambda?" },
    [
      { ca: "No poden rebre paràmetres", es: "No pueden recibir parámetros" },
      { ca: "Tenen un temps d'execució limitat", es: "Tienen un tiempo de ejecución limitado" },
      { ca: "No poden accedir a Internet", es: "No pueden acceder a Internet" },
      { ca: "Només funcionen amb Python", es: "Solo funcionan con Python" }
    ], 1,
    { ca: "El temps d'execució és limitat: cal pensar les funcions com a tasques curtes i dividir els problemes en tasques menudes amb responsabilitats clares.", es: "El tiempo de ejecución es limitado: hay que pensar las funciones como tareas cortas y dividir los problemas en tareas pequeñas con responsabilidades claras." }),

  Q(T_LAMBDA,
    { ca: "Què és el cold start en Lambda?", es: "¿Qué es el cold start en Lambda?" },
    [
      { ca: "Un error de configuració de la VPC", es: "Un error de configuración de la VPC" },
      { ca: "El temps extra que pot tardar la primera invocació en arrancar l'entorn", es: "El tiempo extra que puede tardar la primera invocación en arrancar el entorno" },
      { ca: "Un tipus de descompte", es: "Un tipo de descuento" },
      { ca: "Una regla de la NACL", es: "Una regla de la NACL" }
    ], 1,
    { ca: "El cold start és el temps addicional de la primera invocació, que pot tardar una mica més, especialment amb runtimes grans o segons l'arquitectura (ARM vs x86).", es: "El cold start es el tiempo adicional de la primera invocación, que puede tardar algo más, especialmente con runtimes grandes o según la arquitectura (ARM vs x86)." }),

  Q(T_LAMBDA,
    { ca: "Amb quin servei es pot exposar una funció Lambda com a endpoint HTTP/REST?", es: "¿Con qué servicio se puede exponer una función Lambda como endpoint HTTP/REST?" },
    [
      { ca: "API Gateway", es: "API Gateway" },
      { ca: "CloudWatch", es: "CloudWatch" },
      { ca: "EventBridge", es: "EventBridge" },
      { ca: "S3", es: "S3" }
    ], 0,
    { ca: "API Gateway servix per exposar una funció Lambda com a endpoint HTTP/REST o HTTP API, creant APIs sense servidor.", es: "API Gateway sirve para exponer una función Lambda como endpoint HTTP/REST o HTTP API, creando APIs sin servidor." }),

  Q(T_LAMBDA,
    { ca: "Amb quin servei es poden executar funcions Lambda en horaris programats?", es: "¿Con qué servicio se pueden ejecutar funciones Lambda en horarios programados?" },
    [
      { ca: "EventBridge", es: "EventBridge" },
      { ca: "S3", es: "S3" },
      { ca: "IAM", es: "IAM" },
      { ca: "VPC", es: "VPC" }
    ], 0,
    { ca: "EventBridge permet executar funcions en horaris programats (cron) o en reacció a esdeveniments del sistema.", es: "EventBridge permite ejecutar funciones en horarios programados (cron) o en reacción a eventos del sistema." }),

  Q(T_LAMBDA,
    { ca: "Quin servei guarda els logs de les funcions Lambda i pot activar alarmes?", es: "¿Qué servicio guarda los logs de las funciones Lambda y puede activar alarmas?" },
    [
      { ca: "CloudWatch", es: "CloudWatch" },
      { ca: "API Gateway", es: "API Gateway" },
      { ca: "S3", es: "S3" },
      { ca: "EventBridge", es: "EventBridge" }
    ], 0,
    { ca: "CloudWatch guarda els logs de la funció i pot activar alarmes si cal, cosa que ajuda a monitorar i depurar les execucions.", es: "CloudWatch guarda los logs de la función y puede activar alarmas si es necesario, lo que ayuda a monitorizar y depurar las ejecuciones." }),

  Q(T_LAMBDA,
    { ca: "Quin servei pot activar Lambda quan es puja un objecte a un bucket?", es: "¿Qué servicio puede activar Lambda cuando se sube un objeto a un bucket?" },
    [
      { ca: "S3", es: "S3" },
      { ca: "IAM", es: "IAM" },
      { ca: "VPC", es: "VPC" },
      { ca: "NACL", es: "NACL" }
    ], 0,
    { ca: "S3 pot cridar Lambda quan es puja un objecte a un bucket; és útil per processar imatges, generar miniatures o indexar fitxers.", es: "S3 puede llamar a Lambda cuando se sube un objeto a un bucket; es útil para procesar imágenes, generar miniaturas o indexar archivos." }),

  Q(T_LAMBDA,
    { ca: "Com accedix Lambda a altres serveis AWS (S3, CloudWatch, Secrets Manager)?", es: "¿Cómo accede Lambda a otros servicios AWS (S3, CloudWatch, Secrets Manager)?" },
    [
      { ca: "Amb usuari i contrasenya escrita al codi", es: "Con usuario y contraseña escrita en el código" },
      { ca: "Mitjançant un rol d'execució (execution role) d'IAM", es: "Mediante un rol de ejecución (execution role) de IAM" },
      { ca: "Amb una NACL", es: "Con una NACL" },
      { ca: "Amb una Elastic IP", es: "Con una Elastic IP" }
    ], 1,
    { ca: "Lambda ho fa en nom seu mitjançant un rol d'execució: una identitat IAM que atorga permisos perquè la funció puga fer accions concretes.", es: "Lambda lo hace en su nombre mediante un rol de ejecución: una identidad IAM que otorga permisos para que la función pueda realizar acciones concretas." }),

  Q(T_LAMBDA,
    { ca: "Per què a AWS Academy no es poden crear rols IAM per a Lambda?", es: "¿Por qué en AWS Academy no se pueden crear roles IAM para Lambda?" },
    [
      { ca: "Perquè Lambda no usa rols", es: "Porque Lambda no usa roles" },
      { ca: "Perquè el laboratori no ho permet; s'usen els rols per defecte que ja porta", es: "Porque el laboratorio no lo permite; se usan los roles por defecto que ya trae" },
      { ca: "Perquè cal pagar un extra", es: "Porque hay que pagar un extra" },
      { ca: "Perquè els rols són de pagament", es: "Porque los roles son de pago" }
    ], 1,
    { ca: "Com que AWS Academy no permet crear nous rols IAM, es gasten els rols que el laboratori du per defecte.", es: "Como AWS Academy no permite crear nuevos roles IAM, se usan los roles que el laboratorio trae por defecto." }),

  Q(T_LAMBDA,
    { ca: "Quin tipus de tasques és ideal per a Lambda?", es: "¿Qué tipo de tareas es ideal para Lambda?" },
    [
      { ca: "Servidors permanents amb càrrega constant", es: "Servidores permanentes con carga constante" },
      { ca: "Microtasques, processament asincrònic i lògica de backend puntual", es: "Microtareas, procesamiento asíncrono y lógica de backend puntual" },
      { ca: "Bases de dades molt grans", es: "Bases de datos muy grandes" },
      { ca: "Emmagatzematge massiu de fitxers", es: "Almacenamiento masivo de archivos" }
    ], 1,
    { ca: "Lambda és ideal per a microtasques, processament asincrònic, pipelines de dades lleugeres i lògica de backend puntual.", es: "Lambda es ideal para microtareas, procesamiento asíncrono, pipelines de datos ligeros y lógica de backend puntual." }),

  Q(T_LAMBDA,
    { ca: "Quina diferència hi ha entre Lambda i EC2 pel que fa a l'escalat?", es: "¿Qué diferencia hay entre Lambda y EC2 en cuanto al escalado?" },
    [
      { ca: "Lambda escala manualment i EC2 automàticament", es: "Lambda escala manualmente y EC2 automáticamente" },
      { ca: "Lambda escala automàticament; en EC2 normalment ho has de gestionar tu", es: "Lambda escala automáticamente; en EC2 normalmente lo tienes que gestionar tú" },
      { ca: "Cap de les dues escala", es: "Ninguna de las dos escala" },
      { ca: "Són iguals", es: "Son iguales" }
    ], 1,
    { ca: "Lambda s'encarrega automàticament de l'escalat i de la infraestructura; amb EC2 has de triar i gestionar les instàncies (o configurar auto scaling).", es: "Lambda se encarga automáticamente del escalado y de la infraestructura; con EC2 tienes que elegir y gestionar las instancias (o configurar auto scaling)." }),

  Q(T_LAMBDA,
    { ca: "Per què cal dividir els problemes en funcions menudes amb Lambda?", es: "¿Por qué hay que dividir los problemas en funciones pequeñas con Lambda?" },
    [
      { ca: "Perquè les funcions són efímeres i tenen límits de temps i recursos", es: "Porque las funciones son efímeras y tienen límites de tiempo y recursos" },
      { ca: "Perquè no es poden fer funcions grans", es: "Porque no se pueden hacer funciones grandes" },
      { ca: "Perquè és més car", es: "Porque es más caro" },
      { ca: "Perquè ho exigix la VPC", es: "Porque lo exige la VPC" }
    ], 0,
    { ca: "Com que les funcions són efímeres i hi ha limitacions de temps i recursos, convé dividir els problemes en tasques menudes i amb responsabilitats clares.", es: "Como las funciones son efímeras y hay limitaciones de tiempo y recursos, conviene dividir los problemas en tareas pequeñas y con responsabilidades claras." }),

  Q(T_LAMBDA,
    { ca: "Quina relació té Lambda amb els servidors?", es: "¿Qué relación tiene Lambda con los servidores?" },
    [
      { ca: "Cal crear una EC2 abans d'usar Lambda", es: "Hay que crear una EC2 antes de usar Lambda" },
      { ca: "No cal pensar en servidors que cal encendre, configurar i mantenir", es: "No hay que pensar en servidores que hay que encender, configurar y mantener" },
      { ca: "Lambda usa el mateix servidor que S3", es: "Lambda usa el mismo servidor que S3" },
      { ca: "Cal una IP elàstica per a cada funció", es: "Hay que tener una IP elástica para cada función" }
    ], 1,
    { ca: "Amb Lambda no cal pensar en servidors que cal encendre, configurar i mantenir: AWS gestiona tota la infraestructura subjacent.", es: "Con Lambda no hay que pensar en servidores que hay que encender, configurar y mantener: AWS gestiona toda la infraestructura subyacente." }),

  Q(T_LAMBDA,
    { ca: "Quin d'aquests NO és un servei que s'integre habitualment amb Lambda?", es: "¿Cuál de estos NO es un servicio que se integre habitualmente con Lambda?" },
    [
      { ca: "S3", es: "S3" },
      { ca: "API Gateway", es: "API Gateway" },
      { ca: "CloudWatch", es: "CloudWatch" },
      { ca: "Una NACL", es: "Una NACL" }
    ], 3,
    { ca: "Les integracions habituals són S3, API Gateway, EventBridge i CloudWatch. Una NACL és un component de seguretat de xarxa, no un servei que active funcions.", es: "Las integraciones habituales son S3, API Gateway, EventBridge y CloudWatch. Una NACL es un componente de seguridad de red, no un servicio que active funciones." }),

  Q(T_LAMBDA,
    { ca: "Què permet fer Lambda amb un fitxer pujat a S3?", es: "¿Qué permite hacer Lambda con un archivo subido a S3?" },
    [
      { ca: "Res, S3 no es pot integrar", es: "Nada, S3 no se puede integrar" },
      { ca: "Processar-lo, per exemple generar miniatures o indexar fitxers", es: "Procesarlo, por ejemplo generar miniaturas o indexar archivos" },
      { ca: "Convertir-lo en una instància EC2", es: "Convertirlo en una instancia EC2" },
      { ca: "Assignar-li una Elastic IP", es: "Asignarle una Elastic IP" }
    ], 1,
    { ca: "Lambda pot ser cridat quan es puja un objecte a un bucket i processar-lo: generar miniatures d'imatges, indexar fitxers, etc.", es: "Lambda puede ser llamado cuando se sube un objeto a un bucket y procesarlo: generar miniaturas de imágenes, indexar archivos, etc." })
);
