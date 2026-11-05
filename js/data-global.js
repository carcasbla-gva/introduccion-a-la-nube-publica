/* Tema: Infraestructura global (Regions i AZs) */
QUESTIONS.push(
  Q(T_GLOBAL,
    { ca: "Què és una Regió d'AWS?", es: "¿Qué es una Región de AWS?" },
    [
      { ca: "Un centre de dades únic i independent", es: "Un centro de datos único e independiente" },
      { ca: "Una zona geogràfica gran que conté múltiples centres de dades", es: "Una zona geográfica grande que contiene múltiples centros de datos" },
      { ca: "Un servei d'emmagatzematge d'objectes", es: "Un servicio de almacenamiento de objetos" },
      { ca: "Un tallafoc virtual per a instàncies EC2", es: "Un firewall virtual para instancias EC2" }
    ], 1,
    { ca: "Una Regió d'AWS és una zona geogràfica gran (per exemple, eu-west-1 a Irlanda) que conté múltiples centres de dades.", es: "Una Región de AWS es una zona geográfica grande (por ejemplo, eu-west-1 en Irlanda) que contiene múltiples centros de datos." }),

  Q(T_GLOBAL,
    { ca: "Què són les Zones de Disponibilitat (AZs)?", es: "¿Qué son las Zonas de Disponibilidad (AZs)?" },
    [
      { ca: "Regions geogràfiques diferents", es: "Regiones geográficas diferentes" },
      { ca: "Centres de dades independents però interconnectats dins d'una mateixa Regió", es: "Centros de datos independientes pero interconectados dentro de una misma Región" },
      { ca: "Serveis de base de dades gestionats", es: "Servicios de base de datos gestionados" },
      { ca: "Polítiques de permís d'IAM", es: "Políticas de permiso de IAM" }
    ], 1,
    { ca: "Cada Regió té entre 2 i 6 AZs, que són centres de dades independents amb el seu propi subministrament elèctric, xarxa redundant i refrigeració, però interconnectats.", es: "Cada Región tiene entre 2 y 6 AZ, que son centros de datos independientes con su propio suministro eléctrico, red redundante y refrigeración, pero interconectados." }),

  Q(T_GLOBAL,
    { ca: "Quantes Zones de Disponibilitat hi ha com a mínim per Regió?", es: "¿Cuántas Zonas de Disponibilidad hay como mínimo por Región?" },
    [
      { ca: "Una", es: "Una" },
      { ca: "Entre 2 i 6", es: "Entre 2 y 6" },
      { ca: "Exactament 3", es: "Exactamente 3" },
      { ca: "Entre 10 i 20", es: "Entre 10 y 20" }
    ], 1,
    { ca: "Dins de cada Regió hi ha entre 2 i 6 Zones de Disponibilitat.", es: "Dentro de cada Región hay entre 2 y 6 Zonas de Disponibilidad." }),

  Q(T_GLOBAL,
    { ca: "Quina és la Regió d'AWS a Irlanda?", es: "¿Cuál es la Región de AWS en Irlanda?" },
    ["us-east-1", "eu-west-1", "eu-south-2", "southeast-1"], 1,
    { ca: "eu-west-1 és la Regió d'AWS a Irlanda. us-east-1 és Virgínia del Nord i eu-south-2 és Madrid.", es: "eu-west-1 es la Región de AWS en Irlanda. us-east-1 es Virginia del Norte y eu-south-2 es Madrid." }),

  Q(T_GLOBAL,
    { ca: "Quins factors s'han de considerar per triar una Regió d'AWS?", es: "¿Qué factores se deben considerar al elegir una Región de AWS?" },
    [
      { ca: "Només el preu", es: "Solo el precio" },
      { ca: "Latència, cumpliment normatiu, costos, disponibilitat de serveis i estratègia de negoci", es: "Latencia, cumplimiento normativo, costos, disponibilidad de servicios y estrategia de negocio" },
      { ca: "Només la proximitat als usuaris", es: "Solo la proximidad a los usuarios" },
      { ca: "Només la disponibilitat de serveis nous", es: "Solo la disponibilidad de servicios nuevos" }
    ], 1,
    { ca: "Cal considerar la latència prop als usuaris, el cumpliment normatiu (per exemple GDPR), els costos, la disponibilitat de serveis i l'estratègia de negoci.", es: "Hay que considerar la latencia cercana a los usuarios, el cumplimiento normativo (por ejemplo GDPR), los costos, la disponibilidad de servicios y la estrategia de negocio." }),

  Q(T_GLOBAL,
    { ca: "Quina és la principal avantatge de desplegar instàncies en diferents AZs d'una mateixa Regió?", es: "¿Cuál es la principal ventaja de desplegar instancias en diferentes AZs de una misma Región?" },
    [
      { ca: "Reduir el cost de les instàncies", es: "Reducir el costo de las instancias" },
      { ca: "Alta disponibilitat i tolerància a fallades", es: "Alta disponibilidad y tolerancia a fallos" },
      { ca: "Evitar pagar per transferència de dades", es: "Evitar pagar por transferencia de datos" },
      { ca: "No necessitar Security Groups", es: "No necesitar Security Groups" }
    ], 1,
    { ca: "Si una AZ cau per manteniment o desastre, les altres AZs continuen actives, cosa que permet arquitectures d'alta disponibilitat i disaster recovery.", es: "Si una AZ cae por mantenimiento o desastre, las otras AZ continúan activas, lo que permite arquitecturas de alta disponibilidad y recuperación ante desastres." }),

  Q(T_GLOBAL,
    { ca: "Quin codi identifica la Regió de Virgínia del Nord?", es: "¿Qué código identifica la Región de Virginia del Norte?" },
    ["eu-west-1", "us-east-1", "eu-south-2", "southeast-1"], 1,
    { ca: "us-east-1 correspon a Virgínia del Nord.", es: "us-east-1 corresponde a Virginia del Norte." }),

  Q(T_GLOBAL,
    { ca: "Quin codi identifica la Regió de Singapur segons el material?", es: "¿Qué código identifica la Región de Singapur según el material?" },
    ["eu-west-1", "us-east-1", "southeast-1", "eu-south-2"], 2,
    { ca: "southeast-1 correspon a Singapur segons el material del curs.", es: "southeast-1 corresponde a Singapur según el material del curso." }),

  Q(T_GLOBAL,
    { ca: "Quin codi identifica la Regió de Madrid?", es: "¿Qué código identifica la Región de Madrid?" },
    ["eu-west-1", "us-east-1", "eu-south-2", "southeast-1"], 2,
    { ca: "eu-south-2 és la Regió de Madrid, útil per minimitzar la latència a Espanya.", es: "eu-south-2 es la Región de Madrid, útil para minimizar la latencia en España." }),

  Q(T_GLOBAL,
    { ca: "Què conté una Regió d'AWS?", es: "¿Qué contiene una Región de AWS?" },
    [
      { ca: "Un únic centre de dades", es: "Un único centro de datos" },
      { ca: "Múltiples centres de dades (Zones de Disponibilitat)", es: "Múltiples centros de datos (Zonas de Disponibilidad)" },
      { ca: "Només serveis d'emmagatzematge", es: "Solo servicios de almacenamiento" },
      { ca: "Només usuaris d'IAM", es: "Solo usuarios de IAM" }
    ], 1,
    { ca: "Una Regió conté múltiples centres de dades repartits en Zones de Disponibilitat.", es: "Una Región contiene múltiples centros de datos repartidos en Zonas de Disponibilidad." }),

  Q(T_GLOBAL,
    { ca: "Què té una Zona de Disponibilitat de manera independent?", es: "¿Qué tiene una Zona de Disponibilidad de manera independiente?" },
    [
      { ca: "Subministrament elèctric, xarxa i refrigeració propis", es: "Suministro eléctrico, red y refrigeración propios" },
      { ca: "Només el subministrament elèctric", es: "Solo el suministro eléctrico" },
      { ca: "Només la refrigeració", es: "Solo la refrigeración" },
      { ca: "Res, tot és compartit", es: "Nada, todo es compartido" }
    ], 0,
    { ca: "Cada AZ té subministrament elèctric propi, xarxa i connectivitat redundants, i sistemes de refrigeració i seguretat física independents.", es: "Cada AZ tiene suministro eléctrico propio, red y conectividad redundantes, y sistemas de refrigeración y seguridad física independientes." }),

  Q(T_GLOBAL,
    { ca: "Per què és important tindre diverses Zones de Disponibilitat?", es: "¿Por qué es importante tener varias Zonas de Disponibilidad?" },
    [
      { ca: "Per reduir el preu de les instàncies", es: "Para reducir el precio de las instancias" },
      { ca: "Per alta disponibilitat, replicació i disaster recovery", es: "Para alta disponibilidad, replicación y recuperación ante desastres" },
      { ca: "Per no necessitar IAM", es: "Para no necesitar IAM" },
      { ca: "Per evitar l'ús de Security Groups", es: "Para evitar el uso de Security Groups" }
    ], 1,
    { ca: "Permeten alta disponibilitat si una AZ cau, replicar bases de dades i aplicacions, i dissenyar arquitectures tolerants a fallades.", es: "Permiten alta disponibilidad si una AZ cae, replicar bases de datos y aplicaciones, y diseñar arquitecturas tolerantes a fallos." }),

  Q(T_GLOBAL,
    { ca: "Segons el material, quina Regió sol ser més barata?", es: "Según el material, ¿qué Región suele ser más barata?" },
    [
      { ca: "eu-west-1 (Irlanda)", es: "eu-west-1 (Irlanda)" },
      { ca: "us-east-1 (Virgínia del Nord)", es: "us-east-1 (Virginia del Norte)" },
      { ca: "eu-south-2 (Madrid)", es: "eu-south-2 (Madrid)" },
      { ca: "Totes costen exactament el mateix", es: "Todas cuestan exactamente lo mismo" }
    ], 1,
    { ca: "No totes les regions costen igual: segons el material, us-east-1 és més barata que eu-west-1.", es: "No todas las regiones cuestan igual: según el material, us-east-1 es más barata que eu-west-1." }),

  Q(T_GLOBAL,
    { ca: "Què passa si una Regió d'AWS falla (molt poc probable)?", es: "¿Qué pasa si una Región de AWS falla (muy poco probable)?" },
    [
      { ca: "Tots els serveis del món s'aturen", es: "Todos los servicios del mundo se detienen" },
      { ca: "Altres regions poden assumir la càrrega", es: "Otras regiones pueden asumir la carga" },
      { ca: "Es perden totes les dades automàticament", es: "Se pierden todos los datos automáticamente" },
      { ca: "AWS no té redundància entre regions", es: "AWS no tiene redundancia entre regiones" }
    ], 1,
    { ca: "Les regions aporten redundància: si una falla, altres regions poden assumir la càrrega.", es: "Las regiones aportan redundancia: si una falla, otras regiones pueden asumir la carga." }),

  Q(T_GLOBAL,
    { ca: "Aproximadament quantes regions té AWS a nivell mundial segons el material?", es: "¿Aproximadamente cuántas regiones tiene AWS a nivel mundial según el material?" },
    ["Més de 30", "Exactament 5", "Només 2", "Més de 500"], 0,
    { ca: "El material indica més de 30 regions a nivell mundial, repartides en diferents àrees geogràfiques.", es: "El material indica más de 30 regiones a nivel mundial, repartidas en diferentes áreas geográficas." }),

  Q(T_GLOBAL,
    { ca: "Com afecta la latència a l'elecció de Regió?", es: "¿Cómo afecta la latencia a la elección de Región?" },
    [
      { ca: "Com més prop estiga la regió dels usuaris finals, més ràpida serà la resposta", es: "Cuanto más cerca esté la región de los usuarios finales, más rápida será la respuesta" },
      { ca: "La latència no importa", es: "La latencia no importa" },
      { ca: "Com més lluny, millor", es: "Cuanto más lejos, mejor" },
      { ca: "Només importa el preu", es: "Solo importa el precio" }
    ], 0,
    { ca: "Com més prop estiga la regió dels usuaris finals, més ràpida serà la resposta.", es: "Cuanto más cerca esté la región de los usuarios finales, más rápida será la respuesta." })
);
