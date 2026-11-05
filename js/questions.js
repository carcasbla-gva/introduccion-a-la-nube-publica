/* Preguntes del Tema 2 - Introducció a la núvol pública (bilingüe ca/es)
   Contingut basat en la teòria del Tema 2 (U2): infraestructura global,
   model de responsabilitat compartida, IAM, EC2, Security Groups i NACLs. */

const QUESTIONS = [
  // ========================================================================
  // TEMA: Infraestructura global (Regions i AZs)
  // ========================================================================
  {
    topic: { ca: "Infraestructura global (Regions i AZs)", es: "Infraestructura global (Regiones y AZs)" },
    question: {
      ca: "Què és una Regió d'AWS?",
      es: "¿Qué es una Región de AWS?"
    },
    options:[
      { ca: "Un centre de dades únic i independent", es: "Un centro de datos único e independiente" },
      { ca: "Una zona geogràfica gran que conté múltiples centres de dades", es: "Una zona geográfica grande que contiene múltiples centros de datos" },
      { ca: "Un servei d'emmagatzematge d'objectes", es: "Un servicio de almacenamiento de objetos" },
      { ca: "Un tallafoc virtual per a instàncies EC2", es: "Un firewall virtual para instancias EC2" }
    ],
    correct:1,
    explanation: {
      ca: "Una Regió d'AWS és una zona geogràfica gran (per exemple, eu-west-1 a Irlanda) que conté múltiples centres de dades.",
      es: "Una Región de AWS es una zona geográfica grande (por ejemplo, eu-west-1 en Irlanda) que contiene múltiples centros de datos."
    }
  },
  {
    topic: { ca: "Infraestructura global (Regions i AZs)", es: "Infraestructura global (Regiones y AZs)" },
    question: {
      ca: "Què són les Zones de Disponibilitat (AZs)?",
      es: "¿Qué son las Zonas de Disponibilidad (AZs)?"
    },
    options:[
      { ca: "Regions geogràfiques diferents", es: "Regiones geográficas diferentes" },
      { ca: "Centres de dades independents però interconnectats dins d'una mateixa Regió", es: "Centros de datos independientes pero interconectados dentro de una misma Región" },
      { ca: "Serveis de base de dades gestionats", es: "Servicios de base de datos gestionados" },
      { ca: "Polítiques de permís d'IAM", es: "Políticas de permiso de IAM" }
    ],
    correct:1,
    explanation: {
      ca: "Cada Regió té entre 2 i 6 AZs, que són centres de dades independents amb el seu propi subministrament elèctric, xarxa redundant i refrigeració, però interconnectats.",
      es: "Cada Región tiene entre 2 y 6 AZ, que son centros de datos independientes con su propio suministro eléctrico, red redundante y refrigeración, pero interconectados."
    }
  },
  {
    topic: { ca: "Infraestructura global (Regions i AZs)", es: "Infraestructura global (Regiones y AZs)" },
    question: {
      ca: "Quantes Zones de Disponibilitat hi ha com a mínim per Regió?",
      es: "¿Cuántas Zonas de Disponibilidad hay como mínimo por Región?"
    },
    options:["1","Entre 2 i 6","Entre 2 y 6","Exactament 3","Exactamente 3","Entre 10 i 20","Entre 10 y 20"],
    correct:1,
    explanation: {
      ca: "Dins de cada Regió hi ha entre 2 i 6 Zones de Disponibilitat.",
      es: "Dentro de cada Región hay entre 2 y 6 Zonas de Disponibilidad."
    }
  },
  {
    topic: { ca: "Infraestructura global (Regions i AZs)", es: "Infraestructura global (Regiones y AZs)" },
    question: {
      ca: "Quina és la Regió d'AWS a Irlanda?",
      es: "¿Cuál es la Región de AWS en Irlanda?"
    },
    options:["us-east-1","eu-west-1","eu-south-2","southeast-1"],
    correct:1,
    explanation: {
      ca: "eu-west-1 és la Regió d'AWS a Irlanda. us-east-1 és Virgínia del Nord i eu-south-2 és Madrid.",
      es: "eu-west-1 es la Región de AWS en Irlanda. us-east-1 es Virginia del Norte y eu-south-2 es Madrid."
    }
  },
  {
    topic: { ca: "Infraestructura global (Regions i AZs)", es: "Infraestructura global (Regiones y AZs)" },
    question: {
      ca: "Quins factors s'han de considerar per triar una Regió d'AWS?",
      es: "¿Qué factores se deben considerar al elegir una Región de AWS?"
    },
    options:[
      { ca: "Nomé el preu", es: "Solo el precio" },
      { ca: "Latència, cumpliment normatiu, costos, disponibilitat de serveis i estratègia de negoci", es: "Latencia, cumplimiento normativo, costos, disponibilidad de servicios y estrategia de negocio" },
      { ca: "Nomé la proximitat als usuaris", es: "Solo la proximidad a los usuarios" },
      { ca: "Nomé la disponibilitat de serveis nous", es: "Solo la disponibilidad de servicios nuevos" }
    ],
    correct:1,
    explanation: {
      ca: "Quan es despleguen serveis a AWS cal considerar la latència prop als usuaris, el cumpliment normatiu (per exemple GDPR), els costos, la disponibilitat de serveis i l'estratègia de negoci.",
      es: "Cuando se despliegan servicios en AWS hay que considerar la latencia cercana a los usuarios, el cumplimiento normativo (por ejemplo GDPR), los costos, la disponibilidad de servicios y la estrategia de negocio."
    }
  },
  {
    topic: { ca: "Infraestructura global (Regions i AZs)", es: "Infraestructura global (Regiones y AZs)" },
    question: {
      ca: "Quina és la principal avantatge de desplegar instàncies en diferents AZs d'una mateixa Regió?",
      es: "¿Cuál es la principal ventaja de desplegar instancias en diferentes AZs de una misma Región?"
    },
    options:[
      { ca: "Reduir el cost de les instàncies", es: "Reducir el costo de las instancias" },
      { ca: "Alta disponibilitat i tolerància a fallades", es: "Alta disponibilidad y tolerancia a fallos" },
      { ca: "Evitar pagar per transferència de dades", es: "Evitar pagar por transferencia de datos" },
      { ca: "No necessitar Security Groups", es: "No necesitar Security Groups" }
    ],
    correct:1,
    explanation: {
      ca: "Si una AZ cau per manteniment o desastre, les altres AZs continuen actives, cosa que permet arquitectures d'alta disponibilitat i disaster recovery.",
      es: "Si una AZ cae por mantenimiento o desastre, las otras AZ continúan activas, lo que permite arquitecturas de alta disponibilidad y recuperación ante desastres."
    }
  },

  // ========================================================================
  // TEMA: Model de responsabilitat compartida
  // ========================================================================
  {
    topic: { ca: "Model de responsabilitat compartida", es: "Modelo de responsabilidad compartida" },
    question: {
      ca: "Dintre del model de responsabilitat compartida, qui és responsable de la seguretat dels centres de dades físics i del maquinari?",
      es: "Dentro del modelo de responsabilidad compartida, ¿quién es responsable de la seguridad de los centros de datos físicos y el hardware?"
    },
    options:[
      { ca: "El client d'AWS", es: "El cliente de AWS" },
      { ca: "AWS", es: "AWS" },
      { ca: "Ambas parts", es: "Ambas partes" },
      { ca: "Cap dels dos", es: "Ninguno de los dos" }
    ],
    correct:1,
    explanation: {
      ca: "AWS s'encarrega de la seguretat de la infraestructura (datacenters, maquinari, xarxa física, hipervisor, etc.). El client és responsable de la seguretat del que crea i configura dins del núvol.",
      es: "AWS se encarga de la seguridad de la infraestructura (datacenters, hardware, red física, hipervisor, etc.). El cliente es responsable de la seguridad de lo que crea y configura dentro de la nube."
    }
  },
  {
    topic: { ca: "Model de responsabilitat compartida", es: "Modelo de responsabilidad compartida" },
    question: {
      ca: "Qui és responsable de la configuració dels firewalls (Security Groups)?",
      es: "¿Quién es responsable de la configuración de los firewalls (Security Groups)?"
    },
    options:[
      { ca: "AWS", es: "AWS" },
      { ca: "El client", es: "El cliente" },
      { ca: "Ambas parts", es: "Ambas partes" },
      { ca: "Cap dels dos", es: "Ninguno de los dos" }
    ],
    correct:1,
    explanation: {
      ca: "La configuració de firewalls (Security Groups), la gestió d'usuaris (IAM), el xifrat de dades i la instal·lació de programari són responsabilitat del client.",
      es: "La configuración de firewalls (Security Groups), la gestión de usuarios (IAM), el cifrado de datos y la instalación de software son responsabilidad del cliente."
    }
  },
  {
    topic: { ca: "Model de responsabilitat compartida", es: "Modelo de responsabilidad compartida" },
    question: {
      ca: "Qui és responsable de la gestió d'usuaris amb IAM?",
      es: "¿Quién es responsable de la gestión de usuarios con IAM?"
    },
    options:[
      { ca: "AWS", es: "AWS" },
      { ca: "El client", es: "El cliente" },
      { ca: "Ambas parts", es: "Ambas partes" },
      { ca: "Cap dels dos", es: "Ninguno de los dos" }
    ],
    correct:1,
    explanation: {
      ca: "La gestió d'usuaris (IAM) és responsabilitat del client; AWS assegura la infraestructura física i del núvol.",
      es: "La gestión de usuarios (IAM) es responsabilidad del cliente; AWS asegura la infraestructura física y de la nube."
    }
  },
  {
    topic: { ca: "Model de responsabilitat compartida", es: "Modelo de responsabilidad compartida" },
    question: {
      ca: "Per què va patir Capital One una filtració de dades a AWS?",
      es: "¿Por qué sufrió Capital One una filtración de datos en AWS?"
    },
    options:[
      { ca: "Per un fall AWS en els datacenters", es: "Por una falla de AWS en los datacenters" },
      { ca: "Per una configuració errònia d'un Security Group, que és responsabilitat del client", es: "Por una configuración errónea de un Security Group, que es responsabilidad del cliente" },
      { ca: "Per una pèrdua de claus de AWS", es: "Por una pérdida de claves de AWS" },
      { ca: "Per un atac als servidors físics d'AWS", es: "Por un ataque a los servidores físicos de AWS" }
    ],
    correct:1,
    explanation: {
      ca: "La filtració de dades de Capital One va ser causada per una configuració errònia d'un Security Group en AWS. AWS no va ser el culpable: era responsabilitat del client.",
      es: "La filtración de datos de Capital One fue causada por una configuración errónea de un Security Group en AWS. AWS no fue el culpable: era responsabilidad del cliente."
    }
  },
  {
    topic: { ca: "Model de responsabilitat compartida", es: "Modelo de responsabilidad compartida" },
    question: {
      ca: "Quina és una obligació del client segons el model de responsabilitat compartida?",
      es: "¿Cuál es una obligación del cliente según el modelo de responsabilidad compartida?"
    },
    options:[
      { ca: "Mantenir els datacenters físics", es: "Mantener los centros de datos físicos" },
      { ca: "Gestionar usuaris i permisos amb IAM", es: "Gestionar usuarios y permisos con IAM" },
      { ca: "Gestionar el hipervisor", es: "Gestionar el hipervisor" },
      { ca: "Mantenir la xarxa física global", es: "Mantener la red física global" }
    ],
    correct:1,
    explanation: {
      ca: "El client és responsable de la configuració i l'ús correcte: gestió d'usuaris (IAM), configuració de firewalls, xifrat de dades, claus i instal·lació de programari i parches.",
      es: "El cliente es responsable de la configuración y el uso correcto: gestión de usuarios (IAM), configuración de firewalls, cifrado de datos, claves e instalación de software y parches."
    }
  },

  // ========================================================================
  // TEMA: IAM
  // ========================================================================
  {
    topic: { ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" },
    question: {
      ca: "Què significa l'acrònim IAM?",
      es: "¿Qué significa el acrónimo IAM?"
    },
    options:[
      { ca: "Identity and Access Management", es: "Gestión de Identidad y Acceso" },
      { ca: "Instance and Access Monitor", es: "Instancia y Monitor de Acceso" },
      { ca: "Internet Access Management", es: "Gestión de Acceso a Internet" },
      { ca: "Identity Authorization Module", es: "Módulo de Autorización de Identidad" }
    ],
    correct:0,
    explanation: {
      ca: "IAM significa Identity and Access Management (Gestió d'identitats i accés).",
      es: "IAM significa Identity and Access Management (Gestión de Identidad y Acceso)."
    }
  },
  {
    topic: { ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" },
    question: {
      ca: "Què és un usuari a IAM?",
      es: "¿Qué es un usuario en IAM?"
    },
    options:[
      { ca: "Una aplicació que necessita credencials temporals", es: "Una aplicación que necesita credenciales temporales" },
      { ca: "Una identitat individual que accedeix al sistema (administrador, desenvolupador, etc.)", es: "Una identidad individual que accede al sistema (administrador, desarrollador, etc.)" },
      { ca: "Una política JSON de permisos", es: "Una política JSON de permisos" },
      { ca: "Una regla de xarxa per a subnets", es: "Una regla de red para subnets" }
    ],
    correct:1,
    explanation: {
      ca: "Un usuari és una identitat individual dins d'AWS que pot tenir credencials d'accés a la consola o claus d'accés per a la CLI/SDK.",
      es: "Un usuario es una identidad individual dentro de AWS que puede tener credenciales de acceso a la consola o claves de acceso para la CLI/SDK."
    }
  },
  {
    topic: { ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" },
    question: {
      ca: "Què és un rol d'IAM?",
      es: "¿Qué es un rol de IAM?"
    },
    options:[
      { ca: "Una identitat per a persones amb contrasenya permanente", es: "Una identidad para personas con contraseña permanente" },
      { ca: "Una identitat per a serveis o aplicacions (per exemple, una instància EC2) que genera credencials temporals", es: "Una identidad para servicios o aplicaciones (por ejemplo, una instancia EC2) que genera credenciales temporales" },
      { ca: "Una política gestionada per AWS", es: "Una política gestionada por AWS" },
      { ca: "Un grup d'usuaris amb permís d'administrador", es: "Un grupo de usuarios con permiso de administrador" }
    ],
    correct:1,
    explanation: {
      ca: "Els rols són identitats pensades per a serveis, no per a persones. Per exemple, una instància EC2 pot usar un rol per llegir un bucket S3 sense emmagatzemar claus permanents a la màquina.",
      es: "Los roles son identidades pensadas para servicios, no para personas. Por ejemplo, una instancia EC2 puede usar un rol para leer un bucket S3 sin almacenar claves permanentes en la máquina."
    }
  },
  {
    topic: { ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" },
    question: {
      ca: "Què és el principi de mínim privilegi?",
      es: "¿Qué es el principio de mínimo privilegio?"
    },
    options:[
      { ca: "Donar tots els permisos a tots els usuaris", es: "Dar todos los permisos a todos los usuarios" },
      { ca: "Donar a cada entitat només els permisos estrictament necessaris", es: "Dar a cada entidad solo los permisos estrictamente necesarios" },
      { ca: "Usar sempre el compte root", es: "Usar siempre la cuenta root" },
      { ca: "No activar l'MFA mai", es: "No activar el MFA nunca" }
    ],
    correct:1,
    explanation: {
      ca: "El principi de mínim privileix consisteix en donar a cada entitat només els permisos estrictament necessaris, redueixen el risc d'errors i atacs.",
      es: "El principio de mínimo privilegio consiste en dar a cada entidad solo los permisos estrictamente necesarios, reduciendo el riesgo de errores y ataques."
    }
  },
  {
    topic: { ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" },
    question: {
      ca: "Què són les polítiques d'IAM?",
      es: "¿Qué son las políticas de IAM?"
    },
    options:[
      { ca: "Regles de xarxa per a subnets", es: "Reglas de red para subnets" },
      { ca: "Documents JSON que especifiquen quines accions estan permeses o denegades sobre quins recursos", es: "Documentos JSON que especifican qué acciones están permitidas o denegadas sobre qué recursos" },
      { ca: "Centres de dades d'AWS", es: "Centros de datos de AWS" },
      { ca: "Tipus d'instàncies EC2", es: "Tipos de instancias EC2" }
    ],
    correct:1,
    explanation: {
      ca: "Les polítiques defineixen quins permisos té un usuari, grup o rol. Són documents en format JSON que especifiquen accions permeses o denegades, recursos i condicions.",
      es: "Las políticas definen qué permisos tiene un usuario, grupo o rol. Son documentos en formato JSON que especifican acciones permitidas o denegadas, recursos y condiciones."
    }
  },
  {
    topic: { ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" },
    question: {
      ca: "Quines són les dues classes de polítiques d'IAM?",
      es: "¿Cuáles son las dos clases de políticas de IAM?"
    },
    options:[
      { ca: "Públices i privades", es: "Públicas y privadas" },
      { ca: "AWS managed policies i Customer managed policies", es: "Políticas gestionadas por AWS y políticas gestionadas por el cliente" },
      { ca: "Entrada i sortida", es: "Entrada y salida" },
      { ca: "Stateful i stateless", es: "Stateful y stateless" }
    ],
    correct:1,
    explanation: {
      ca: "AWS ofereix polítiques ja preparades (AWS managed policies) i polítiques personalitzades que creem nosaltres (Customer managed policies).",
      es: "AWS ofrece políticas ya preparadas (AWS managed policies) y políticas personalizadas que creamos nosotros (Customer managed policies)."
    }
  },
  {
    topic: { ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" },
    question: {
      ca: "Quina és una bona pràctica important d'IAM?",
      es: "¿Cuál es una buena práctica importante de IAM?"
    },
    options:[
      { ca: "Usar el compte root per al dia a dia", es: "Usar la cuenta root para el día a día" },
      { ca: "No activar mai l'MFA", es: "No activar nunca el MFA" },
      { ca: "No usar el compte root per al dia a dia i activar l'MFA", es: "No usar la cuenta root para el día a día y activar el MFA" },
      { ca: "No revisar mai les claus d'accés", es: "No revisar nunca las claves de acceso" }
    ],
    correct:2,
    explanation: {
      ca: "Bones pràctiques: no usar el compte root per al dia a dia, activar MFA (Multi-Factor Authentication) i revisar/rotar les claus d'accés periòdicament.",
      es: "Buenas prácticas: no usar la cuenta root para el día a día, activar MFA (Autenticación de Múltiple Factor) y revisar/rotar las claves de acceso periódicamente."
    }
  },

  // ========================================================================
  // TEMA: Introducció a EC2
  // ========================================================================
  {
    topic: { ca: "Introducció a EC2", es: "Introducción a EC2" },
    question: {
      ca: "Què és Amazon EC2?",
      es: "¿Qué es Amazon EC2?"
    },
    options:[
      { ca: "Un servei d'emmagatzematge d'objectes", es: "Un servicio de almacenamiento de objetos" },
      { ca: "Un servei que permet llogar màquines virtuals a la carta (instàncies)", es: "Un servicio que permite alquilar máquinas virtuales bajo demanda (instancias)" },
      { ca: "Un servei de gestió d'identitats", es: "Un servicio de gestión de identidades" },
      { ca: "Un tallafoc per a subnets", es: "Un firewall para subnets" }
    ],
    correct:1,
    explanation: {
      ca: "Amazon Elastic Compute Cloud (EC2) permet llogar màquines virtuals a la carta (instàncies) per executar aplicacions, pàgines web o entorns de desenvolupament.",
      es: "Amazon Elastic Compute Cloud (EC2) permite alquilar máquinas virtuales bajo demanda (instancias) para ejecutar aplicaciones, páginas web o entornos de desarrollo."
    }
  },
  {
    topic: { ca: "Introducció a EC2", es: "Introducción a EC2" },
    question: {
      ca: "Per què s'anomena EC2 'elastic'?",
      es: "¿Por qué se llama EC2 'elastic'?"
    },
    options:[
      { ca: "Perque només funciona amb Linux", es: "Porque solo funciona con Linux" },
      { ca: "Perque es poden crear, aturar, eliminar o redimensionar instàncies ràpidament segons les necessitats", es: "Porque se pueden crear, apagar, eliminar o redimensionar instancias rápidamente según las necesidades" },
      { ca: "Perque té preu fix", es: "Porque tiene precio fijo" },
      { ca: "Perque no es pot escalar", es: "Porque no se puede escalar" }
    ],
    correct:1,
    explanation: {
      ca: "Es diu elastic perquè podem crear, aturar, eliminar o redimensionar les instàncies de manera ràpida segons les necessitats, passant d'una instància a centenars en minuts.",
      es: "Se dice elástico porque podemos crear, apagar, eliminar o redimensionar las instancias de manera rápida según las necesidades, pasando de una instancia a centenares en minutos."
    }
  },
  {
    topic: { ca: "Introducció a EC2", es: "Introducción a EC2" },
    question: {
      ca: "Què és una AMI (Amazon Machine Image)?",
      es: "¿Qué es una AMI (Amazon Machine Image)?"
    },
    options:[
      { ca: "Un disc virtual associat a la instància", es: "Un disco virtual asociado a la instancia" },
      { ca: "Una plantilla que defineix el sistema operatiu i el programari inicial de la instància", es: "Una plantilla que defineye el sistema operativo y el software inicial de la instancia" },
      { ca: "Una clau per connectar per SSH", es: "Una clave para conectar por SSH" },
      { ca: "Un tipus d'instància", es: "Un tipo de instancia" }
    ],
    correct:1,
    explanation: {
      ca: "L'AMI és la plantilla que defineix el sistema operatiu i el programari inicial de la instància (per exemple, Ubuntu, Amazon Linux, Windows Server).",
      es: "La AMI es la plantilla que defineye el sistema operativo y el software inicial de la instancia (por ejemplo, Ubuntu, Amazon Linux, Windows Server)."
    }
  },
  {
    topic: { ca: "Introducció a EC2", es: "Introducción a EC2" },
    question: {
      ca: "Quins elements es necessiten per connectar-se a una instància EC2 Linux?",
      es: "¿Qué elementos se necesitan para conectarse a una instancia EC2 Linux?"
    },
    options:[
      { ca: "Nomé una IP pública", es: "Solo una IP pública" },
      { ca: "Un parell de claus (key pairs) basat en criptografia asimètrica", es: "Un par de claves (key pairs) basado en criptografía asimétrica" },
      { ca: "Nomé un Security Group", es: "Solo un Security Group" },
      { ca: "Nomé una AMI", es: "Solo una AMI" }
    ],
    correct:1,
    explanation: {
      ca: "Per connectar-se via SSH a Linux (o RDP a Windows) es necessiten parells de claus: la clau pública es guarda a la instància i la clau privada només la té l'usuari.",
      es: "Para conectarse vía SSH a Linux (o RDP a Windows) se necesitan pares de claves: la clave pública se guarda en la instancia y la clave privada solo la tiene el usuario."
    }
  },
  {
    topic: { ca: "Introducció a EC2", es: "Introducción a EC2" },
    question: {
      ca: "Què és un volum EBS?",
      es: "¿Qué es un volumen EBS?"
    },
    options:[
      { ca: "Una imatge del sistema operatiu", es: "Una imagen del sistema operativo" },
      { ca: "Un disc virtual que s'associa a la instància per emmagatzemar dades", es: "Un disco virtual que se asocia a la instancia para almacenar datos" },
      { ca: "Una clau d'accés SSH", es: "Una clave de acceso SSH" },
      { ca: "Un tipus d'instància optimitzada per GPU", es: "Un tipo de instancia optimizada para GPU" }
    ],
    correct:1,
    explanation: {
      ca: "Els volumens EBS són discs virtuals que s'associen a la instància per emmagatzemar dades.",
      es: "Los volúmenes EBS son discos virtuales que se asocian a la instancia para almacenar datos."
    }
  },
  {
    topic: { ca: "Introducció a EC2", es: "Introducción a EC2" },
    question: {
      ca: "Quina és una bona pràctica de seguretat en l'accés a instàncies EC2?",
      es: "¿Cuál es una buena práctica de seguridad en el acceso a instancias EC2?"
    },
    options:[
      { ca: "Usar sempre contrasenyes tradicionals", es: "Usar siempre contraseñas tradicionales" },
      { ca: "Perder la clau privada és sense problema", es: "Perder la clave privada no es problema" },
      { ca: "No obrir SSH al món sencer (0.0.0.0/0); limitar l'accés a una IP de confiança", es: "No abrir SSH al mundo entero (0.0.0.0/0); limitar el acceso a una IP de confianza" },
      { ca: "Usar el compte root per al dia a dia", es: "Usar la cuenta root para el día a día" }
    ],
    correct:2,
    explanation: {
      ca: "No és recomanable obrir SSH al món sencer (0.0.0.0/0); és millor limitar l'accés a una IP de confiança o usar un mecanisme d'administració més segur. Si es perd la clau privada, no hi ha manera senzilla d'accedir a la instància.",
      es: "No es recomendable abrir SSH al mundo entero (0.0.0.0/0); es mejor limitar el acceso a una IP de confianza o usar un mecanismo de administración más seguro. Si se pierde la clave privada, no hay manera sencilla de acceder a la instancia."
    }
  },

  // ========================================================================
  // TEMA: Security Groups (SG)
  // ========================================================================
  {
    topic: { ca: "Security Groups (SG)", es: "Security Groups (SG)" },
    question: {
      ca: "Què és un Security Group?",
      es: "¿Qué es un Security Group?"
    },
    options:[
      { ca: "Una llista de regles a nivell de subxarxa", es: "Una lista de reglas a nivel de subred" },
      { ca: "Un tallafoc virtual que controla el trànsit a nivell d'instància", es: "Un firewall virtual que controla el tráfico a nivel de instancia" },
      { ca: "Un servei d'identitats d'AWS", es: "Un servicio de identidades de AWS" },
      { ca: "Un disc virtual EBS", es: "Un disco virtual EBS" }
    ],
    correct:1,
    explanation: {
      ca: "Un Security Group és un tallafoc virtual associat a recursos de xarxa (com una instància EC2) que permet definir quin trànsit està autoritzat a entrar i eixir.",
      es: "Un Security Group es un firewall virtual asociado a recursos de red (como una instancia EC2) que permite definir qué tráfico está autorizado a entrar y salir."
    }
  },
  {
    topic: { ca: "Security Groups (SG)", es: "Security Groups (SG)" },
    question: {
      ca: "A quin nivell s'aplica un Security Group?",
      es: "¿A qué nivel se aplica un Security Group?"
    },
    options:[
      { ca: "A la subxarxa (subnet)", es: "A la subred (subnet)" },
      { ca: "Al recurs o a la interfície de xarxa", es: "Al recurso o a la interfaz de red" },
      { ca: "A tota la VPC", es: "A toda la VPC" },
      { ca: "A Internet", es: "A Internet" }
    ],
    correct:1,
    explanation: {
      ca: "El Security Group s'associa a la interfície de xarxa de la instància (a nivell del recurs), mentre que la NACL s'aplica a la subnet.",
      es: "El Security Group se asocia a la interfaz de red de la instancia (a nivel del recurso), mientras que la NACL se aplica a la subnet."
    }
  },
  {
    topic: { ca: "Security Groups (SG)", es: "Security Groups (SG)" },
    question: {
      ca: "Un Security Group és stateful. Què significa això?",
      es: "Un Security Group es stateful. ¿Qué significa esto?"
    },
    options:[
      { ca: "Que no recorda l'estat de les connexions", es: "Que no recuerda el estado de las conexiones" },
      { ca: "Que si permetes una connexió d'entrada, la resposta automàticament està permesa sense regla d'eixida específica", es: "Que si permites una conexión de entrada, la respuesta automáticamente está permitida sin regla de salida específica" },
      { ca: "Que només té regles DENY", es: "Que solo tiene reglas DENY" },
      { ca: "Que s'avaluen per ordre numèric ascendent", es: "Que se evalúan por orden numérico ascendente" }
    ],
    correct:1,
    explanation: {
      ca: "És stateful: té en compte l'estat de les connexions. Si permetes una connexió d'entrada, la resposta torna automàticament, encara que no hi hagi una regla d'eixida específica per a ella.",
      es: "Es stateful: tiene en cuenta el estado de las conexiones. Si permites una conexión de entrada, la respuesta regresa automáticamente, aunque no haya una regla de salida específica para ella."
    }
  },
  {
    topic: { ca: "Security Groups (SG)", es: "Security Groups (SG)" },
    question: {
      ca: "Quins tipus de regles tenen els Security Groups?",
      es: "¿Qué tipos de reglas tienen los Security Groups?"
    },
    options:[
      { ca: "Nomé regles DENY", es: "Solo reglas DENY" },
      { ca: "Nomé regles d'autorització (ALLOW), no tenen regles Deny explícites", es: "Solo reglas de autorización (ALLOW), no tienen reglas Deny explícitas" },
      { ca: "Nomé regles d'entrada", es: "Solo reglas de entrada" },
      { ca: "Nomé regles de sortida", es: "Solo reglas de salida" }
    ],
    correct:1,
    explanation: {
      ca: "Els Security Groups només tenen regles per autoritzar trànsit; no tenen regles explícites de tipus Deny. El trànsit no autoritzat no passa.",
      es: "Los Security Groups solo tienen reglas para autorizar tráfico; no tienen reglas explícitas de tipo Deny. El tráfico no autorizado no pasa."
    }
  },
  {
    topic: { ca: "Security Groups (SG)", es: "Security Groups (SG)" },
    question: {
      ca: "Què passa quan hi ha diversos Security Groups associats a una mateixa interfície de xarxa?",
      es: "¿Qué pasa cuando hay varios Security Groups asociados a una misma interfaz de red?"
    },
    options:[
      { ca: "S'avaluen conjuntament les regles d'autorització", es: "Se evalúan conjuntamente las reglas de autorización" },
      { ca: "Un SG pot anular un altre amb una regla Deny", es: "Un SG puede anular a otro con una regla Deny" },
      { ca: "Nomé s'aplica el primer SG", es: "Solo se aplica el primer SG" },
      { ca: "No es permet associar diversos SGs", es: "No se permite asociar varios SGs" }
    ],
    correct:0,
    explanation: {
      ca: "Quan hi ha diversos Security Groups associats, s'avaluen conjuntament les seues regles d'autorització. No es pot utilitzar un SG per anul·lar una autorització d'un altre mitjançant una regla Deny.",
      es: "Cuando hay varios Security Groups asociados, se evalúan conjuntamente sus reglas de autorización. No se puede usar un SG para anular una autorización de otro mediante una regla Deny."
    }
  },
  {
    topic: { ca: "Security Groups (SG)", es: "Security Groups (SG)" },
    question: {
      ca: "Què és el principi de mínim privilegi aplicat als Security Groups?",
      es: "¿Qué es el principio de mínimo privilegio aplicado a los Security Groups?"
    },
    options:[
      { ca: "Obrir tots els ports a Internet", es: "Abrir todos los puertos a Internet" },
      { ca: "Crear un SG per funció (SG-Web, SG-App, SG-Database) i obrir només els ports necessaris", es: "Crear un SG por función (SG-Web, SG-App, SG-Database) y abrir solo los puertos necesarios" },
      { ca: "Usar un sol SG per a totes les instàncies", es: "Usar un solo SG para todas las instancias" },
      { ca: "Obrir SSH per 0.0.0.0/0", es: "Abrir SSH por 0.0.0.0/0" }
    ],
    correct:1,
    explanation: {
      ca: "Cada recurs hauria de rebre només les comunicacions que necessita. Per exemple, SG-Web per servidors web, SG-App per servidors d'aplicacions i SG-Database per bases de dades.",
      es: "Cada recurso debería recibir solo las comunicaciones que necesita. Por ejemplo, SG-Web para servidores web, SG-App para servidores de aplicaciones y SG-Database para bases de datos."
    }
  },

  // ========================================================================
  // TEMA: Network ACLs (NACL)
  // ========================================================================
  {
    topic: { ca: "Network ACLs (NACL)", es: "Network ACLs (NACL)" },
    question: {
      ca: "Què és una Network ACL (NACL)?",
      es: "¿Qué es una Network ACL (NACL)?"
    },
    options:[
      { ca: "Un tallafoc virtual per a una instància concreta", es: "Un firewall virtual para una instancia concreta" },
      { ca: "Una llista de regles que controla el trànsit que entra i eix d'una subxarxa (subnet) de la VPC", es: "Una lista de reglas que controla el tráfico que entra y sale de una subred (subnet) de la VPC" },
      { ca: "Un servei de bases de dades", es: "Un servicio de bases de datos" },
      { ca: "Una política d'IAM en format JSON", es: "Una política de IAM en formato JSON" }
    ],
    correct:1,
    explanation: {
      ca: "Una Network ACL és una llista de regles que controla el trànsit d'entrada i eixida d'una subnet de la VPC. No s'associa directament a una instància, sinó a la subnet.",
      es: "Una Network ACL es una lista de reglas que controla el tráfico de entrada y salida de una subnet de la VPC. No se asocia directamente a una instancia, sino a la subnet."
    }
  },
  {
    topic: { ca: "Network ACLs (NACL)", es: "Network ACLs (NACL)" },
    question: {
      ca: "Una NACL és stateless. Què implica això?",
      es: "Una NACL es stateless. ¿Qué implica esto?"
    },
    options:[
      { ca: "Recorda l'estat de les connexions i permet respostes automàticament", es: "Recuerda el estado de las conexiones y permite respuestas automáticamente" },
      { ca: "No recorda l'estat de les connexions; cal configurar tant el trànsit d'entrada com el d'eixida", es: "No recuerda el estado de las conexiones; hay que configurar tanto el tráfico de entrada como el de salida" },
      { ca: "Nomé té regles ALLOW", es: "Solo tiene reglas ALLOW" },
      { ca: "S'avaluen les regles en ordre ascendent", es: "Se evalúan las reglas en orden ascendente" }
    ],
    correct:1,
    explanation: {
      ca: "És stateless: no recorda que una petició haja entrat ni autoritza automàticament la resposta. Per això cal configurar les dues direccions del trànsit.",
      es: "Es stateless: no recuerda que una petición haya entrado ni autoriza automáticamente la respuesta. Por eso hay configurar ambas direcciones del tráfico."
    }
  },
  {
    topic: { ca: "Network ACLs (NACL)", es: "Network ACLs (NACL)" },
    question: {
      ca: "Quins tipus d'accions permeten les NACLs?",
      es: "¿Qué tipos de acciones permiten las NACLs?"
    },
    options:[
      { ca: "Nomé ALLOW", es: "Solo ALLOW" },
      { ca: "Nomé DENY", es: "Solo DENY" },
      { ca: "ALLOW i DENY", es: "ALLOW y DENY" },
      { ca: "Cap acció", es: "Ninguna acción" }
    ],
    correct:2,
    explanation: {
      ca: "Les Network ACLs permeten tant accions ALLOW com DENY, cosa que els Security Groups no fan (els SG només tenen autorització).",
      es: "Las Network ACLs permiten tanto acciones ALLOW como DENY, algo que los Security Groups no hacen (los SG solo tienen autorización)."
    }
  },
  {
    topic: { ca: "Network ACLs (NACL)", es: "Network ACLs (NACL)" },
    question: {
      ca: "Com s'avaluen les regles d'una NACL?",
      es: "¿Cómo se evalúan las reglas de una NACL?"
    },
    options:[
      { ca: "En ordre ascendent, primer la regla amb el número més baix", es: "En orden ascendente, primero la regla con el número más bajo" },
      { ca: "En ordre descendent", es: "En orden descendente" },
      { ca: "A l'atzar", es: "Al azar" },
      { ca: "Nomé la primera regla s'avalua sempre", es: "Solo se evalúa siempre la primera regla" }
    ],
    correct:0,
    explanation: {
      ca: "Les regles d'una NACL tenen números i s'avaluen en ordre ascendent. Quan una regla coincideix amb el trànsit, s'aplica la seua acció i no es continuen examinant les posteriors.",
      es: "Las reglas de una NACL tienen números y se evalúan en orden ascendente. Cuando una regla coincide con el tráfico, se aplica su acción y no se continúan examinando las posteriores."
    }
  },
  {
    topic: { ca: "Network ACLs (NACL)", es: "Network ACLs (NACL)" },
    question: {
      ca: "Què són els ports efímers en el contexto d'una NACL?",
      es: "¿Qué son los puertos efímeros en el contexto de una NACL?"
    },
    options:[
      { ca: "Ports oberts permanentment al servidor", es: "Puertos abiertos permanentmente en el servidor" },
      { ca: "Ports temporals que el sistema del client utilitza per establir connexions de retorn", es: "Puertos temporales que el sistema del cliente utiliza para establecer conexiones de retorno" },
      { ca: "Ports dels Security Groups", es: "Puertos de los Security Groups" },
      { ca: "Ports de les instàncies EC2", es: "Puertos de las instancias EC2" }
    ],
    correct:1,
    explanation: {
      ca: "Els ports efímers són ports temporals del client. En una NACL stateless, la regla d'eixida ha de permetre el trànsit de retorn cap a aquests ports, altrament la comunicació pot fallar.",
      es: "Los puertos efímeros son puertos temporales del cliente. En una NACL stateless, la regla de salida debe permitir el tráfico de retorno hacia estos puertos, de lo contrario la comunicación puede fallar."
    }
  },
  {
    topic: { ca: "Network ACLs (NACL)", es: "Network ACLs (NACL)" },
    question: {
      ca: "Quina afirmació és certa sobre la associació de NACLs a subnets?",
      es: "¿Qué afirmación es cierta sobre la asociación de NACLs a subnets?"
    },
    options:[
      { ca: "Una subnet pot estar associada a diverses NACLs alhora", es: "Una subnet puede estar asociada a varias NACLs a la vez" },
      { ca: "Una mateixa NACL pot associar-se a diverses subnets, però cada subnet només pot tenir una NACL alhora", es: "Una misma NACL puede asociarse a varias subnets, pero cada subnet solo puede tener una NACL a la vez" },
      { ca: "Les NACLs no s'associen a cap subnet", es: "Las NACLs no se asocian a ninguna subnet" },
      { ca: "Cada instància té la seua pròpia NACL", es: "Cada instancia tiene su propia NACL" }
    ],
    correct:1,
    explanation: {
      ca: "Cada subnet ha d'estar associada a una Network ACL. Una mateixa NACL pot associar-se a diverses subnets, però cada subnet només pot estar associada a una NACL alhora.",
      es: "Cada subnet debe estar asociada a una Network ACL. Una misma NACL puede asociarse a varias subnets, pero cada subnet solo puede estar asociada a una NACL a la vez."
    }
  },

  // ========================================================================
  // TEMA: Seguretat de xarxa (SG vs NACL)
  // ========================================================================
  {
    topic: { ca: "Seguretat de xarxa (SG vs NACL)", es: "Seguridad de red (SG vs NACL)" },
    question: {
      ca: "Quina és la diferència principal entre un Security Group i una NACL?",
      es: "¿Cuál es la diferencia principal entre un Security Group y una NACL?"
    },
    options:[
      { ca: "Nomé la NACL és stateful", es: "Solo la NACL es stateful" },
      { ca: "El SG protegeix el recurs (stateful, només ALLOW) i la NACL filtra a escala de subnet (stateless, ALLOW i DENY)", es: "El SG protege el recurso (stateful, solo ALLOW) y la NACL filtra a escala de subnet (stateless, ALLOW y DENY)" },
      { ca: "Nomé el SG pot bloquejar IPs explícitament", es: "Solo el SG puede bloquejar IPs explícitamente" },
      { ca: "Els dos són el mateix però amb noms diferents", es: "Ambos son lo mismo pero con nombres diferentes" }
    ],
    correct:1,
    explanation: {
      ca: "El Security Group aplica-se al recurs, és stateful i només té regles ALLOW. La NACL aplica-se a la subnet, és stateless i permet ALLOW i DENY. Es compleixen com a capes complementàries.",
      es: "El Security Group se aplica al recurso, es stateful y solo tiene reglas ALLOW. La NACL se aplica a la subnet, es stateless y permite ALLOW y DENY. Se complementan como capas de seguridad."
    }
  },
  {
    topic: { ca: "Seguretat de xarxa (SG vs NACL)", es: "Seguridad de red (SG vs NACL)" },
    question: {
      ca: "Si el Security Group permet HTTP però la NACL bloqueja el trànsit, què passa?",
      es: "Si el Security Group permite HTTP pero la NACL bloqueja el tráfico, ¿qué pasa?"
    },
    options:[
      { ca: "La web és accessible perquè el SG és l'únic que importa", es: "La web es accesible porque el SG es lo único que importa" },
      { ca: "La web no serà accessible; cal superar els dos controls", es: "La web no será accesible; hay superar los dos controles" },
      { ca: "La NACL s'ignore perquè el SG té prioritat", es: "La NACL se ignora porque el SG tiene prioridad" },
      { ca: "Nomé funcione el SSH", es: "Solo funciona el SSH" }
    ],
    correct:1,
    explanation: {
      ca: "Els dos mecanismes actuen simultàniament. Per arribar a l'aplicació, la petició ha de superar tant el SG com la NACL. Si algun dels dos ho bloqueja, la petició no arriba.",
      es: "Los dos mecanismos actúan simultáneamente. Para llegar a la aplicación, la petición debe superar tanto el SG como la NACL. Si alguno de los dos lo bloqueja, la petición no llega."
    }
  },
  {
    topic: { ca: "Seguretat de xarxa (SG vs NACL)", es: "Seguridad de red (SG vs NACL)" },
    question: {
      ca: "Quin mecanisme recomana AWS utilitzar com a control principal per a l'accés als recursos?",
      es: "¿Qué mecanismo recomienda AWS usar como control principal para el acceso a los recursos?"
    },
    options:[
      { ca: "Nomé les NACLs", es: "Solo las NACLs" },
      { ca: "Nomé els Security Groups", es: "Solo los Security Groups" },
      { ca: "Security Groups com a mecanisme principal i NACLs com a capa addició de xarla", es: "Security Groups como mecanismo principal y NACLs como capa adicional de red" },
      { ca: "Cap dels dos", es: "Ninguno de los dos" }
    ],
    correct:2,
    explanation: {
      ca: "AWS recomana utilitzar els Security Groups com a mecanisme principal per controlar l'accés als recursos i les NACLs quan calgui un control addició de xarxa a escala de subnet.",
      es: "AWS recomienda utilizar los Security Groups como mecanismo principal para controlar el acceso a los recursos y las NACLs cuando se necesite un control adicional de red a escala de subnet."
    }
  },
  {
    topic: { ca: "Seguretat de xarxa (SG vs NACL)", es: "Seguridad de red (SG vs NACL)" },
    question: {
      ca: "Què cal perquè una petició web arriba a un servidor Apache a EC2?",
      es: "¿Qué se necesita para que una petición web llegue a un servidor Apache en EC2?"
    },
    options:[
      { ca: "Nomé que el SG permet HTTP", es: "Solo que el SG permita HTTP" },
      { ca: "Nomé que la NACL permet HTTP", es: "Solo que la NACL permita HTTP" },
      { ca: "Que el SG i la NACL permetgin el trànsit, i que hi hagi connectivitat de xarxa (IP pública, rutes, Internet Gateway si cal)", es: "Que el SG y la NACL permitan el tráfico, y que haya conectividad de red (IP pública, rutas, Internet Gateway si es necesario)" },
      { ca: "Nomé una IP pública", es: "Solo una IP pública" }
    ],
    correct:2,
    explanation: {
      ca: "Perque una petició web arribi a Apache, ha de superar els controls de xarxa aplicables (SG i NACL) i necessita connectivitat: IP pública, rutes adequades i un Internet Gateway quan correspongui.",
      es: "Para que una petición web llegue a Apache, debe superar los controles de red aplicables (SG y NACL) y necesita conectividad: IP pública, rutas adecuadas y un Internet Gateway cuando corresponda."
    }
  }
];

// Arreglar l'objecte malformat (estructura defensiva)
QUESTIONS.forEach(q => {
  if (!Array.isArray(q.options)) q.options = [];
  if (typeof q.correct !== "number" || q.correct < 0 || q.correct >= q.options.length) q.correct = 0;
});

const TOPICS = [...new Set(QUESTIONS.map(q => q.topic.ca))];
