/* Tema: AWS Academy i Learner Lab */
QUESTIONS.push(
  Q(T_AWS_ACADEMY,
    { ca: "Quina plataforma utilitza AWS Academy per gestionar l'autenticació?", es: "¿Qué plataforma utiliza AWS Academy para gestionar la autenticación?" },
    [
      { ca: "Moodle", es: "Moodle" },
      { ca: "Canvas", es: "Canvas" },
      { ca: "Google Classroom", es: "Google Classroom" },
      { ca: "Blackboard", es: "Blackboard" }
    ], 1,
    { ca: "AWS Academy utilitza la plataforma Canvas per gestionar l'autenticació.", es: "AWS Academy utiliza la plataforma Canvas para gestionar la autenticación." }),

  Q(T_AWS_ACADEMY,
    { ca: "Quina URL fem servir per a les pròximes connexions a AWS Academy?", es: "¿Qué URL usamos para las próximas conexiones a AWS Academy?" },
    [
      { ca: "https://aws.amazon.com", es: "https://aws.amazon.com" },
      { ca: "https://awsacademy.instructure.com", es: "https://awsacademy.instructure.com" },
      { ca: "https://academy.aws.com", es: "https://academy.aws.com" },
      { ca: "https://canvas.aws.com", es: "https://canvas.aws.com" }
    ], 1,
    { ca: "Per a les pròximes connexions hem d'entrar a https://awsacademy.instructure.com i seleccionar Student Login.", es: "Para las próximas conexiones hay que entrar en https://awsacademy.instructure.com y seleccionar Student Login." }),

  Q(T_AWS_ACADEMY,
    { ca: "Quin curs d'AWS Academy utilitzarem per començar?", es: "¿Qué curso de AWS Academy utilizaremos para empezar?" },
    [
      { ca: "AWS Academy Cloud Foundations", es: "AWS Academy Cloud Foundations" },
      { ca: "AWS Academy Machine Learning", es: "AWS Academy Machine Learning" },
      { ca: "AWS Academy Data Engineer", es: "AWS Academy Data Engineer" },
      { ca: "AWS Certified Solutions Architect", es: "AWS Certified Solutions Architect" }
    ], 0,
    { ca: "El curs que utilitzarem per començar és AWS Academy Cloud Foundations.", es: "El curso que utilizaremos para empezar es AWS Academy Cloud Foundations." }),

  Q(T_AWS_ACADEMY,
    { ca: "Amb quins mòduls hem de començar el curs Cloud Foundations?", es: "¿Con qué módulos hay que empezar el curso Cloud Foundations?" },
    [
      { ca: "Mòduls 1 i 2", es: "Módulos 1 y 2" },
      { ca: "Mòduls 9 i 10", es: "Módulos 9 y 10" },
      { ca: "Només el mòdul 1", es: "Solo el módulo 1" },
      { ca: "Tots alhora", es: "Todos a la vez" }
    ], 0,
    { ca: "Per començar cal realitzar els primers 2 mòduls: 1) Informació general sobre els conceptes del núvol i 2) Facturació i economia del núvol.", es: "Para empezar hay que realizar los primeros 2 módulos: 1) Información general sobre los conceptos de la nube y 2) Facturación y economía de la nube." }),

  Q(T_AWS_ACADEMY,
    { ca: "Què és l'AWS Academy Learner Lab?", es: "¿Qué es el AWS Academy Learner Lab?" },
    [
      { ca: "Un entorn de pràctiques dins d'AWS pensat específicament per a l'aprenentatge", es: "Un entorno de prácticas dentro de AWS pensado específicamente para el aprendizaje" },
      { ca: "Un compte d'AWS per a empreses", es: "Una cuenta de AWS para empresas" },
      { ca: "Un videojoc d'Amazon", es: "Un videojuego de Amazon" },
      { ca: "Un sistema de pagament", es: "Un sistema de pago" }
    ], 0,
    { ca: "L'AWS Academy Learner Lab és un entorn de pràctiques dins d'AWS pensat per aprendre, sense haver d'utilitzar diners reals.", es: "El AWS Academy Learner Lab es un entorno de prácticas dentro de AWS pensado para aprender, sin tener que usar dinero real." }),

  Q(T_AWS_ACADEMY,
    { ca: "Quant de crèdit virtual disposa cada alumne al Learner Lab?", es: "¿Cuánto crédito virtual dispone cada alumno en el Learner Lab?" },
    [
      { ca: "10 $", es: "10 $" },
      { ca: "25 $", es: "25 $" },
      { ca: "50 $", es: "50 $" },
      { ca: "100 $", es: "100 $" }
    ], 2,
    { ca: "Cada alumne disposa d'un crèdit de 50 $ per utilitzar els serveis d'AWS durant tot el curs.", es: "Cada alumno dispone de un crédito de 50 $ para utilizar los servicios de AWS durante todo el curso." }),

  Q(T_AWS_ACADEMY,
    { ca: "Quant dura cada sessió de treball quan inicies el Learner Lab amb Start Lab?", es: "¿Cuánto dura cada sesión de trabajo cuando inicias el Learner Lab con Start Lab?" },
    [
      { ca: "30 minuts", es: "30 minutos" },
      { ca: "1 hora", es: "1 hora" },
      { ca: "4 hores", es: "4 horas" },
      { ca: "24 hores", es: "24 horas" }
    ], 2,
    { ca: "Cada vegada que iniciem el Learner Lab amb Start Lab, disposem d'una sessió de treball de 4 hores.", es: "Cada vez que iniciamos el Learner Lab con Start Lab, disponemos de una sesión de trabajo de 4 horas." }),

  Q(T_AWS_ACADEMY,
    { ca: "Quan s'esgota el temps de sessió al Learner Lab, què passa amb els recursos creats?", es: "Cuando se agota el tiempo de sesión en el Learner Lab, ¿qué pasa con los recursos creados?" },
    [
      { ca: "S'eliminen automàticament", es: "Se eliminan automáticamente" },
      { ca: "No s'eliminen automàticament, tot i que alguns poden quedar aturats", es: "No se eliminan automáticamente, aunque algunos pueden quedar detenidos" },
      { ca: "Es converteixen en pagaments", es: "Se convierten en pagos" },
      { ca: "Es guarden per sempre actius", es: "Se quedan activos para siempre" }
    ], 1,
    { ca: "Quan la sessió finalitza, els recursos no s'eliminen automàticament (alguns poden quedar aturats). Si cal continuar, es prem Start Lab de nou.", es: "Cuando la sesión finaliza, los recursos no se eliminan automáticamente (algunos pueden quedar detenidos). Si hay que continuar, se pulsa Start Lab de nuevo." }),

  Q(T_AWS_ACADEMY,
    { ca: "Quines regions d'AWS estan disponibles al Learner Lab?", es: "¿Qué regiones de AWS están disponibles en el Learner Lab?" },
    [
      { ca: "eu-west-1 i eu-central-1", es: "eu-west-1 y eu-central-1" },
      { ca: "us-east-1 i us-west-2", es: "us-east-1 y us-west-2" },
      { ca: "Totes les regions del món", es: "Todas las regiones del mundo" },
      { ca: "Només ap-southeast-1", es: "Solo ap-southeast-1" }
    ], 1,
    { ca: "Al Learner Lab només podrem treballar amb les regions us-east-1 i us-west-2.", es: "En el Learner Lab solo podremos trabajar con las regiones us-east-1 y us-west-2." }),

  Q(T_AWS_ACADEMY,
    { ca: "Què passa amb les AMI al Learner Lab?", es: "¿Qué pasa con las AMI en el Learner Lab?" },
    [
      { ca: "Podem usar qualsevol imatge del AWS Marketplace", es: "Podemos usar cualquier imagen del AWS Marketplace" },
      { ca: "Estan limitades: no podrem seleccionar lliurement imatges de pagament del Marketplace", es: "Están limitadas: no podremos seleccionar libremente imágenes de pago del Marketplace" },
      { ca: "No hi ha cap imatge disponible", es: "No hay ninguna imagen disponible" },
      { ca: "Totes són de pagament", es: "Todas son de pago" }
    ], 1,
    { ca: "Les AMI (Amazon Machine Images) que podem utilitzar estan limitades; no podrem seleccionar lliurement imatges de pagament del Marketplace.", es: "Las AMI (Amazon Machine Images) que podemos utilizar están limitadas; no podremos seleccionar libremente imágenes de pago del Marketplace." }),

  Q(T_AWS_ACADEMY,
    { ca: "Què pot generar un cost al Learner Lab per mantenir una IP fixa?", es: "¿Qué puede generar un coste en el Learner Lab para mantener una IP fija?" },
    [
      { ca: "L'IP elàstica", es: "La IP elástica" },
      { ca: "L'usuari IAM", es: "El usuario IAM" },
      { ca: "El Security Group", es: "El Security Group" },
      { ca: "Res, és sempre gratis", es: "Nada, es siempre gratis" }
    ], 0,
    { ca: "Si volem mantenir una IP fixa hem d'utilitzar una IP elàstica, i aquest recurs pot generar un cost.", es: "Si queremos mantener una IP fija hay que usar una IP elástica, y este recurso puede generar un coste." }),

  Q(T_AWS_ACADEMY,
    { ca: "Quants instàncies actives poden fer que el compte es desactive?", es: "¿Cuántas instancias activas pueden hacer que la cuenta se desactive?" },
    [
      { ca: "5 o més", es: "5 o más" },
      { ca: "10 o més", es: "10 o más" },
      { ca: "20 o més", es: "20 o más" },
      { ca: "50 o més", es: "50 o más" }
    ], 2,
    { ca: "Si intentem tenir 20 o més instàncies iniciades, el compte pot ser desactivat i els recursos eliminats, amb pèrdua del treball fet.", es: "Si intentamos tener 20 o más instancias iniciadas, la cuenta puede ser desactivada y los recursos eliminados, con pérdida del trabajo hecho." }),

  Q(T_AWS_ACADEMY,
    { ca: "Què cal fer sempre quan acabem de treballar amb el laboratori?", es: "¿Qué hay que hacer siempre cuando terminamos de trabajar con el laboratorio?" },
    [
      { ca: "Res especialment", es: "Nada especial" },
      { ca: "Fer un Reset Lab", es: "Hacer un Reset Lab" },
      { ca: "Aturar-lo amb Stop Lab", es: "Detenerlo con Stop Lab" },
      { ca: "Eliminar totes les instàncies manualment", es: "Eliminar todas las instancias manualmente" }
    ], 2,
    { ca: "Quan acabem de treballar, és obligatori aturar el laboratori amb Stop Lab per evitar que serveis continuen consumint el crèdit.", es: "Cuando terminamos de trabajar, es obligatorio detener el laboratorio con Stop Lab para evitar que servicios sigan consumiendo el crédito." }),

  Q(T_AWS_ACADEMY,
    { ca: "Què fa l'opció Stop Lab?", es: "¿Qué hace la opción Stop Lab?" },
    [
      { ca: "Elimina tot el treball fait", es: "Elimina todo el trabajo hecho" },
      { ca: "Finalitza la sessió i canvia l'estat del Lab a apagat, sense eliminar els recursos", es: "Finaliza la sesión y cambia el estado del Lab a apagado, sin eliminar los recursos" },
      { ca: "Inicia el laboratori", es: "Inicia el laboratorio" },
      { ca: "Puja el crèdit disponible", es: "Sube el crédito disponible" }
    ], 1,
    { ca: "Stop Lab finalitza la sessió i posa el Lab en apagat, aturar-lo no elimina els recursos ni el treball fet.", es: "Stop Lab finaliza la sesión y pone el Lab en apagado; detenerlo no elimina los recursos ni el trabajo hecho." }),

  Q(T_AWS_ACADEMY,
    { ca: "Què fa l'opció Reset Lab?", es: "¿Qué hace la opción Reset Lab?" },
    [
      { ca: "Reinicia la sessió de 4 hores", es: "Reinicia la sesión de 4 horas" },
      { ca: "Apaga el laboratori temporalment", es: "Apaga el laboratorio temporalmente" },
      { ca: "Elimina tot el que hàgem creat o configurat dins del laboratori", es: "Elimina todo lo que hayamos creado o configurado en el laboratorio" },
      { ca: "Canvia la regió d'AWS", es: "Cambia la región de AWS" }
    ], 2,
    { ca: "Reset Lab elimina tot el creat al laboratori; només l'utilitzarem quan estiguem segurs de no necessitar els recursos per a activitats posteriors.", es: "Reset Lab elimina todo lo creado en el laboratorio; solo lo utilizaremos cuando estemos seguros de no necesitar los recursos para actividades posteriores." }),

  Q(T_AWS_ACADEMY,
    { ca: "Què permet consultar l'apartat AWS details?", es: "¿Qué permite consultar el apartado AWS details?" },
    [
      { ca: "Les notes del curs", es: "Las notas del curso" },
      { ca: "Les dades necessàries per connectar-se al Lab des d'una terminal remota", es: "Los datos necesarios para conectarse al Lab desde una terminal remota" },
      { ca: "El correu del professor", es: "El correo del profesor" },
      { ca: "El preu dels serveis", es: "El precio de los servicios" }
    ], 1,
    { ca: "AWS details conté les dades per connectar-nos al Lab des d'una terminal remota (tot i que utilitzarem la terminal integrada).", es: "AWS details contiene los datos para conectarnos al Lab desde una terminal remota (aunque usaremos la terminal integrada)." }),

  Q(T_AWS_ACADEMY,
    { ca: "Per accedir al Learner Lab, què rebem primer per correu?", es: "Para acceder al Learner Lab, ¿qué recibimos primero por correo?" },
    [
      { ca: "Una factura", es: "Una factura" },
      { ca: "Una invitació al Learner Lab", es: "Una invitación al Learner Lab" },
      { ca: "El certificat d'AWS", es: "El certificado de AWS" },
      { ca: "Res, s'hi accedeix lliurament", es: "Nada, se accede libremente" }
    ], 1,
    { ca: "Rebem un correu indicant que hem estat convidats a un Learner Lab; en acceptar la invitació, el laboratori apareix al Dashboard.", es: "Recibimos un correo indicando que hemos sido invitados a un Learner Lab; al aceptar la invitación, el laboratorio aparece en el Dashboard." }),

  Q(T_AWS_ACADEMY,
    { ca: "Quan l'estat del Lab apareix en color verd, com accedim a l'entorn de treball d'AWS?", es: "Cuando el estado del Lab aparece en color verde, ¿cómo accedemos al entorno de trabajo de AWS?" },
    [
      { ca: "Prémer el botó AWS", es: "Pulsando el botón AWS" },
      { ca: "Reiniciant l'ordinador", es: "Reiniciando el ordenador" },
      { ca: "No es pot accedir mai", es: "No se puede acceder nunca" },
      { ca: "Escrivint la contrasenya", es: "Escribiendo la contraseña" }
    ], 0,
    { ca: "Una vegada iniciat el Lab amb Start Lab i en ver l'estat en verd, premem el botó AWS per anar a l'entorn de treball d'AWS.", es: "Una vez iniciado el Lab con Start Lab y al ver el estado en verde, pulsamos el botón AWS para ir al entorno de trabajo de AWS." })
);
