/* Tema: IAM (Usuaris, grups i rols) */
QUESTIONS.push(
  Q(T_IAM,
    { ca: "Què significa l'acrònim IAM?", es: "¿Qué significa el acrónimo IAM?" },
    [
      { ca: "Identity and Access Management", es: "Gestión de Identidad y Acceso" },
      { ca: "Instance and Access Monitor", es: "Instancia y Monitor de Acceso" },
      { ca: "Internet Access Management", es: "Gestión de Acceso a Internet" },
      { ca: "Identity Authorization Module", es: "Módulo de Autorización de Identidad" }
    ], 0,
    { ca: "IAM significa Identity and Access Management (Gestió d'identitats i accés).", es: "IAM significa Identity and Access Management (Gestión de Identidad y Acceso)." }),

  Q(T_IAM,
    { ca: "Què és un usuari a IAM?", es: "¿Qué es un usuario en IAM?" },
    [
      { ca: "Una aplicació que necessita credencials temporals", es: "Una aplicación que necesita credenciales temporales" },
      { ca: "Una identitat individual que accedeix al sistema", es: "Una identidad individual que accede al sistema" },
      { ca: "Una política JSON de permisos", es: "Una política JSON de permisos" },
      { ca: "Una regla de xarxa per a subnets", es: "Una regla de red para subnets" }
    ], 1,
    { ca: "Un usuari és una identitat individual dins d'AWS (administrador, desenvolupador, estudiant, etc.).", es: "Un usuario es una identidad individual dentro de AWS (administrador, desarrollador, estudiante, etc.)." }),

  Q(T_IAM,
    { ca: "Què és un rol d'IAM?", es: "¿Qué es un rol de IAM?" },
    [
      { ca: "Una identitat per a persones amb contrasenya permanent", es: "Una identidad para personas con contraseña permanente" },
      { ca: "Una identitat per a serveis o aplicacions que genera credencials temporals", es: "Una identidad para servicios o aplicaciones que genera credenciales temporales" },
      { ca: "Una política gestionada per AWS", es: "Una política gestionada por AWS" },
      { ca: "Un grup d'usuaris amb permís d'administrador", es: "Un grupo de usuarios con permiso de administrador" }
    ], 1,
    { ca: "Els rols són identitats pensades per a serveis o aplicacions (com una instància EC2) i generen credencials temporals.", es: "Los roles son identidades pensadas para servicios o aplicaciones (como una instancia EC2) y generan credenciales temporales." }),

  Q(T_IAM,
    { ca: "Què és el principi de mínim privilegi?", es: "¿Qué es el principio de mínimo privilegio?" },
    [
      { ca: "Donar tots els permisos a tots els usuaris", es: "Dar todos los permisos a todos los usuarios" },
      { ca: "Donar a cada entitat només els permisos estrictament necessaris", es: "Dar a cada entidad solo los permisos estrictamente necesarios" },
      { ca: "Usar sempre el compte root", es: "Usar siempre la cuenta root" },
      { ca: "No activar mai l'MFA", es: "No activar nunca el MFA" }
    ], 1,
    { ca: "El mínim privilegi consisteix en donar a cada entitat només els permisos estrictament necessaris, reduint el risc d'errors i atacs.", es: "El mínimo privilegio consiste en dar a cada entidad solo los permisos estrictamente necesarios, reduciendo el riesgo de errores y ataques." }),

  Q(T_IAM,
    { ca: "Què són les polítiques d'IAM?", es: "¿Qué son las políticas de IAM?" },
    [
      { ca: "Regles de xarxa per a subnets", es: "Reglas de red para subnets" },
      { ca: "Documents JSON que especifiquen accions permeses o denegades sobre recursos", es: "Documentos JSON que especifican acciones permitidas o denegadas sobre recursos" },
      { ca: "Centres de dades d'AWS", es: "Centros de datos de AWS" },
      { ca: "Tipus d'instàncies EC2", es: "Tipos de instancias EC2" }
    ], 1,
    { ca: "Les polítiques són documents JSON que especifiquen quines accions estan permeses o denegades, sobre quins recursos i amb quines condicions.", es: "Las políticas son documentos JSON que especifican qué acciones están permitidas o denegadas, sobre qué recursos y con qué condiciones." }),

  Q(T_IAM,
    { ca: "Quines són les dues classes de polítiques d'IAM?", es: "¿Cuáles son las dos clases de políticas de IAM?" },
    [
      { ca: "Públiques i privades", es: "Públicas y privadas" },
      { ca: "AWS managed policies i Customer managed policies", es: "Políticas gestionadas por AWS y políticas gestionadas por el cliente" },
      { ca: "D'entrada i de sortida", es: "De entrada y de salida" },
      { ca: "Stateful i stateless", es: "Stateful y stateless" }
    ], 1,
    { ca: "AWS ofereix polítiques ja preparades (AWS managed policies) i polítiques personalitzades (Customer managed policies).", es: "AWS ofrece políticas ya preparadas (AWS managed policies) y políticas personalizadas (Customer managed policies)." }),

  Q(T_IAM,
    { ca: "Quina és una bona pràctica important d'IAM?", es: "¿Cuál es una buena práctica importante de IAM?" },
    [
      { ca: "Usar el compte root per al dia a dia", es: "Usar la cuenta root para el día a día" },
      { ca: "No activar mai l'MFA", es: "No activar nunca el MFA" },
      { ca: "No usar el compte root per al dia a dia i activar l'MFA", es: "No usar la cuenta root para el día a día y activar el MFA" },
      { ca: "No revisar mai les claus d'accés", es: "No revisar nunca las claves de acceso" }
    ], 2,
    { ca: "Bones pràctiques: no usar el root per al dia a dia, activar MFA i revisar/rotar les claus d'accés periòdicament.", es: "Buenas prácticas: no usar el root para el día a día, activar MFA y revisar/rotar las claves de acceso periódicamente." }),

  Q(T_IAM,
    { ca: "Què és un grup a IAM?", es: "¿Qué es un grupo en IAM?" },
    [
      { ca: "Una identitat individual", es: "Una identidad individual" },
      { ca: "Una manera d'agrupar usuaris i assignar-los permisos de manera col·lectiva", es: "Una manera de agrupar usuarios y asignarles permisos de manera colectiva" },
      { ca: "Un tipus d'instància EC2", es: "Un tipo de instancia EC2" },
      { ca: "Una regla d'una NACL", es: "Una regla de una NACL" }
    ], 1,
    { ca: "Un grup agrupa usuaris per assignar-los permisos de manera col·lectiva; amb assignar la política al grup és suficient.", es: "Un grupo agrupa usuarios para asignarles permisos de manera colectiva; con asignar la política al grupo es suficiente." }),

  Q(T_IAM,
    { ca: "Si creem un grup s3-readonly amb els estudiants, què aconseguim?", es: "Si creamos un grupo s3-readonly con los estudiantes, ¿qué conseguimos?" },
    [
      { ca: "Assignar permisos d'escriptura a tots", es: "Asignar permisos de escritura a todos" },
      { ca: "Assignar permisos de només lectura d'S3 de manera col·lectiva", es: "Asignar permisos de solo lectura de S3 de manera colectiva" },
      { ca: "Eliminar els usuaris", es: "Eliminar a los usuarios" },
      { ca: "Crear instàncies EC2", es: "Crear instancias EC2" }
    ], 1,
    { ca: "El grup s3-readonly permet donar permisos de només lectura d'S3 a tots els estudiants sense assignar permisos un a un.", es: "El grupo s3-readonly permite dar permisos de solo lectura de S3 a todos los estudiantes sin asignar permisos uno a uno." }),

  Q(T_IAM,
    { ca: "Quines credencials pot tindre un usuari d'IAM?", es: "¿Qué credenciales puede tener un usuario de IAM?" },
    [
      { ca: "Només contrasenya", es: "Solo contraseña" },
      { ca: "Credencials de consola (usuari i contrasenya) o claus d'accés per a CLI/SDK", es: "Credenciales de consola (usuario y contraseña) o claves de acceso para CLI/SDK" },
      { ca: "Només claus SSH", es: "Solo claves SSH" },
      { ca: "Només certificats SSL", es: "Solo certificados SSL" }
    ], 1,
    { ca: "Un usuari pot tenir credencials d'accés a la consola (usuari i contrasenya) o claus d'accés per a la CLI o el SDK.", es: "Un usuario puede tener credenciales de acceso a la consola (usuario y contraseña) o claves de acceso para la CLI o el SDK." }),

  Q(T_IAM,
    { ca: "Quin tipus de credencials generen els rols d'IAM?", es: "¿Qué tipo de credenciales generan los roles de IAM?" },
    [
      { ca: "Credencials permanents", es: "Credenciales permanentes" },
      { ca: "Credencials temporals", es: "Credenciales temporales" },
      { ca: "Contrasenyes de root", es: "Contraseñas de root" },
      { ca: "Cap credencial", es: "Ninguna credencial" }
    ], 1,
    { ca: "Els rols generen credencials temporals i les gestionen automàticament, sense escriure res en cap fitxer de configuració.", es: "Los roles generan credenciales temporales y las gestionan automáticamente, sin escribir nada en ningún archivo de configuración." }),

  Q(T_IAM,
    { ca: "Per què és més segur usar un rol que claus permanents en una instància EC2?", es: "¿Por qué es más seguro usar un rol que claves permanentes en una instancia EC2?" },
    [
      { ca: "Perquè el rol no caduca mai", es: "Porque el rol no caduca nunca" },
      { ca: "Perquè si algú accedeix a la instància no troba claus permanents reutilitzables", es: "Porque si alguien accede a la instancia no encuentra claves permanentes reutilizables" },
      { ca: "Perquè és més barat", es: "Porque es más barato" },
      { ca: "Perquè no necessita permisos", es: "Porque no necesita permisos" }
    ], 1,
    { ca: "Amb un rol, si algú accedeix a la instància no trobaria claus permanents reutilitzables; les credencials són temporals.", es: "Con un rol, si alguien accede a la instancia no encontraría claves permanentes reutilizables; las credenciales son temporales." }),

  Q(T_IAM,
    { ca: "Quin és un ús típic dels rols d'IAM?", es: "¿Cuál es un uso típico de los roles de IAM?" },
    [
      { ca: "Permetre que una instància EC2 accedisca a S3", es: "Permitir que una instancia EC2 acceda a S3" },
      { ca: "Configurar una NACL", es: "Configurar una NACL" },
      { ca: "Crear una AMI", es: "Crear una AMI" },
      { ca: "Assignar una IP pública", es: "Asignar una IP pública" }
    ], 0,
    { ca: "Un ús típic és donar a una instància EC2 permisos per accedir a S3 mitjançant un rol, sense claus permanents.", es: "Un uso típico es dar a una instancia EC2 permisos para acceder a S3 mediante un rol, sin claves permanentes." }),

  Q(T_IAM,
    { ca: "Quin servei s'usa per monitoritzar i on les aplicacions poden enviar mètriques gràcies a un rol?", es: "¿Qué servicio se usa para monitorizar y donde las aplicaciones pueden enviar métricas gracias a un rol?" },
    ["CloudWatch", "S3", "EC2", "IAM"], 0,
    { ca: "Un ús típic dels rols és que les aplicacions enviïn mètriques a CloudWatch, el servei de monitorització.", es: "Un uso típico de los roles es que las aplicaciones envíen métricas a CloudWatch, el servicio de monitorización." }),

  Q(T_IAM,
    { ca: "Quin servei emmagatzema secrets com contrasenyes i pot ser llegit per un rol?", es: "¿Qué servicio almacena secretos como contraseñas y puede ser leído por un rol?" },
    ["Secrets Manager", "CloudWatch", "EC2", "VPC"], 0,
    { ca: "Els rols permeten que els serveis lligen secrets des de Secrets Manager, el servei d'emmagatzematge de secrets.", es: "Los roles permiten que los servicios lean secretos desde Secrets Manager, el servicio de almacenamiento de secretos." }),

  Q(T_IAM,
    { ca: "Els rols d'IAM també serveixen per a què?", es: "¿Para qué más sirven los roles de IAM?" },
    [
      { ca: "Compartir recursos entre comptes d'AWS diferents", es: "Compartir recursos entre cuentas de AWS diferentes" },
      { ca: "Crear subnets", es: "Crear subnets" },
      { ca: "Definir el preu de les instàncies", es: "Definir el precio de las instancias" },
      { ca: "Eliminar la VPC", es: "Eliminar la VPC" }
    ], 0,
    { ca: "Els rols també permeten compartir recursos entre comptes d'AWS diferents.", es: "Los roles también permiten compartir recursos entre cuentas de AWS diferentes." }),

  Q(T_IAM,
    { ca: "Què significa MFA?", es: "¿Qué significa MFA?" },
    [
      { ca: "Multi-Factor Authentication", es: "Autenticación de Múltiple Factor" },
      { ca: "Managed Firewall Access", es: "Acceso de Firewall Gestionado" },
      { ca: "Main Frame Access", es: "Acceso a Main Frame" },
      { ca: "Multi-File Access", es: "Acceso Multi-Archivo" }
    ], 0,
    { ca: "MFA és Multi-Factor Authentication (autenticació multifactor) i és una bona pràctica activar-la per als usuaris importants.", es: "MFA es Autenticación de Múltiple Factor y es una buena práctica activarla para los usuarios importantes." }),

  Q(T_IAM,
    { ca: "Amb quina periodicitat s'han de revisar i rotar les claus d'accés?", es: "¿Con qué periodicidad se deben revisar y rotar las claves de acceso?" },
    [
      { ca: "Mai", es: "Nunca" },
      { ca: "De manera periòdica", es: "De manera periódica" },
      { ca: "Només quan es perden", es: "Solo cuando se pierden" },
      { ca: "Cada hora", es: "Cada hora" }
    ], 1,
    { ca: "És una bona pràctica revisar i rotar les claus d'accés de manera periòdica.", es: "Es una buena práctica revisar y rotar las claves de acceso de manera periódica." })
);
