/* Tema: VPC i subxarxes */
QUESTIONS.push(
  Q(T_VPC,
    { ca: "Què és una VPC (Virtual Private Cloud) a AWS?", es: "¿Qué es una VPC (Virtual Private Cloud) en AWS?" },
    [
      { ca: "Un servei d'emmagatzematge d'objectes", es: "Un servicio de almacenamiento de objetos" },
      { ca: "Una xarxa virtual aïllada dins del núvol on definim IPs, subxarxes, rutes i seguretat", es: "Una red virtual aislada dentro de la nube donde definimos IPs, subredes, rutas y seguridad" },
      { ca: "Un tipus d'instància EC2", es: "Un tipo de instancia EC2" },
      { ca: "Una base de dades gestionada", es: "Una base de datos gestionada" }
    ], 1,
    { ca: "Una VPC és una xarxa virtual aïllada dins del núvol on podem definir rangs d'adreces IP, subxarxes, rutes i polítiques de seguretat.", es: "Una VPC es una red virtual aislada dentro de la nube donde podemos definir rangos de direcciones IP, subredes, rutas y políticas de seguridad." }),

  Q(T_VPC,
    { ca: "Amb quin element del món tradicional es pot comparar una VPC?", es: "¿Con qué elemento del mundo tradicional se puede comparar una VPC?" },
    [
      { ca: "Amb un centre de dades virtual", es: "Con un centro de datos virtual" },
      { ca: "Amb un disc dur extern", es: "Con un disco duro externo" },
      { ca: "Amb un navegador web", es: "Con un navegador web" },
      { ca: "Amb una base de dades relacional", es: "Con una base de datos relacional" }
    ], 0,
    { ca: "La VPC és l'equivalent d'un centre de dades virtual, però amb la flexibilitat d'escala, integració i gestió que ofereix el núvol.", es: "La VPC es el equivalente de un centro de datos virtual, pero con la flexibilidad de escala, integración y gestión que ofrece la nube." }),

  Q(T_VPC,
    { ca: "Quins elements podem definir dins d'una VPC?", es: "¿Qué elementos podemos definir dentro de una VPC?" },
    [
      { ca: "Només el nom de la xarxa", es: "Solo el nombre de la red" },
      { ca: "Rangs d'adreces IP, subxarxes, rutes i polítiques de seguretat", es: "Rangos de direcciones IP, subredes, rutas y políticas de seguridad" },
      { ca: "Només usuaris i contrasenyes", es: "Solo usuarios y contraseñas" },
      { ca: "Només regles de facturació", es: "Solo reglas de facturación" }
    ], 1,
    { ca: "La VPC permet definir rangs d'adreces IP (CIDR), subxarxes, taules de rutes i polítiques de seguretat.", es: "La VPC permite definir rangos de direcciones IP (CIDR), subredes, tablas de rutas y políticas de seguridad." }),

  Q(T_VPC,
    { ca: "Per a què serveixen les VPC? (senyala la resposta completa)", es: "¿Para qué sirven las VPC? (señala la respuesta completa)" },
    [
      { ca: "Només per facturar menys", es: "Solo para facturar menos" },
      { ca: "Per aïllar recursos, controlar el tràfic i aplicar polítiques de seguretat", es: "Para aislar recursos, controlar el tráfico y aplicar políticas de seguridad" },
      { ca: "Només per guardar fitxers", es: "Solo para guardar archivos" },
      { ca: "Per crear usuaris IAM", es: "Para crear usuarios IAM" }
    ], 1,
    { ca: "Les VPC serveixen per aïllar recursos en capes, controlar el tràfic entre recursos i vers Internet i aplicar polítiques de seguretat (SG, NACL).", es: "Las VPC sirven para aislar recursos en capas, controlar el tráfico entre recursos y hacia Internet y aplicar políticas de seguridad (SG, NACL)." }),

  Q(T_VPC,
    { ca: "Què representa el rang CIDR 10.0.0.0/16 en una VPC?", es: "¿Qué representa el rango CIDR 10.0.0.0/16 en una VPC?" },
    [
      { ca: "Una única adreça IP", es: "Una única dirección IP" },
      { ca: "El rang d'adreces IP que pot utilitzar la VPC", es: "El rango de direcciones IP que puede utilizar la VPC" },
      { ca: "El nom del Internet Gateway", es: "El nombre del Internet Gateway" },
      { ca: "El tipus d'instància EC2", es: "El tipo de instancia EC2" }
    ], 1,
    { ca: "El CIDR (per exemple 10.0.0.0/16) defineix el rang d'adreces IP disponible per a la VPC, que després es pot subdividir en subxarxes.", es: "El CIDR (por ejemplo 10.0.0.0/16) define el rango de direcciones IP disponible para la VPC, que después se puede subdividir en subredes." }),

  Q(T_VPC,
    { ca: "Què és una subxarxa (subnet)?", es: "¿Qué es una subred (subnet)?" },
    [
      { ca: "Una VPC independent", es: "Una VPC independiente" },
      { ca: "Una subdivisió del rang CIDR d'una VPC", es: "Una subdivisión del rango CIDR de una VPC" },
      { ca: "Un tipus d'Elastic IP", es: "Un tipo de Elastic IP" },
      { ca: "Una regla d'un Security Group", es: "Una regla de un Security Group" }
    ], 1,
    { ca: "Una vegada definida la VPC amb un rang CIDR, aquesta es pot subdividir en subxarxes (subnets).", es: "Una vez definida la VPC con un rango CIDR, esta se puede subdividir en subredes (subnets)." }),

  Q(T_VPC,
    { ca: "Què defineix una subxarxa pública?", es: "¿Qué define una subred pública?" },
    [
      { ca: "Que totes les instàncies tenen IP elàstica", es: "Que todas las instancias tienen IP elástica" },
      { ca: "Que està associada a una ruta que passa per un Internet Gateway", es: "Que está asociada a una ruta que pasa por un Internet Gateway" },
      { ca: "Que no té accés a Internet", es: "Que no tiene acceso a Internet" },
      { ca: "Que només admet bases de dades", es: "Que solo admite bases de datos" }
    ], 1,
    { ca: "Una subxarxa és pública quan està associada a una ruta que passa per un Internet Gateway, de manera que les instàncies amb IP pública poden comunicar-se amb Internet.", es: "Una subred es pública cuando está asociada a una ruta que pasa por un Internet Gateway, de manera que las instancias con IP pública pueden comunicarse con Internet." }),

  Q(T_VPC,
    { ca: "Què caracteritza una subxarxa privada?", es: "¿Qué caracteriza a una subred privada?" },
    [
      { ca: "Té una ruta directa a Internet Gateway", es: "Tiene una ruta directa a Internet Gateway" },
      { ca: "No té ruta directa a Internet (o només surt via NAT)", es: "No tiene ruta directa a Internet (o solo sale vía NAT)" },
      { ca: "No pot tindre instàncies EC2", es: "No puede tener instancias EC2" },
      { ca: "Sempre és accessible des de fora", es: "Siempre es accesible desde fuera" }
    ], 1,
    { ca: "Una subxarxa privada no té ruta directa a Internet, o només pot eixir a través d'un NAT. És ideal per a recursos que no han d'estar exposats públicament.", es: "Una subred privada no tiene ruta directa a Internet, o solo puede salir a través de un NAT. Es ideal para recursos que no deben estar expuestos públicamente." }),

  Q(T_VPC,
    { ca: "On és recomanable ubicar una base de dades?", es: "¿Dónde es recomendable ubicar una base de datos?" },
    [
      { ca: "En una subxarxa pública", es: "En una subred pública" },
      { ca: "En una subxarxa privada", es: "En una subred privada" },
      { ca: "Fora de la VPC sempre", es: "Fuera de la VPC siempre" },
      { ca: "En un Internet Gateway", es: "En un Internet Gateway" }
    ], 1,
    { ca: "Les bases de dades i la lògica de backend solen anar en subxarxes privades perquè no han d'estar exposades directament a Internet.", es: "Las bases de datos y la lógica de backend suelen ir en subredes privadas porque no deben estar expuestas directamente a Internet." }),

  Q(T_VPC,
    { ca: "Per a què cal decidir quantes subxarxes crear en una VPC?", es: "¿Para qué hay que decidir cuántas subredes crear en una VPC?" },
    [
      { ca: "Per repartir-les segons la funció (web, app, base de dades, etc.) i reservar rangs adequats", es: "Para repartirlas según la función (web, app, base de datos, etc.) y reservar rangos adecuados" },
      { ca: "Perquè AWS obliga a crear exactament tres", es: "Porque AWS obliga a crear exactamente tres" },
      { ca: "Per augmentar el preu del servei", es: "Para aumentar el precio del servicio" },
      { ca: "No cal decidir-ho mai", es: "Nunca hay que decidirlo" }
    ], 0,
    { ca: "Cal decidir quantes subxarxes i quins rangs reservar per a cada funció (web, app, base de dades, etc.) segons les necessitats de seguretat i accés.", es: "Hay que decidir cuántas subredes y qué rangos reservar para cada función (web, app, base de datos, etc.) según las necesidades de seguridad y acceso." }),

  Q(T_VPC,
    { ca: "La VPC per defecte d'AWS, té accés a Internet?", es: "La VPC por defecto de AWS, ¿tiene acceso a Internet?" },
    [
      { ca: "No, mai", es: "No, nunca" },
      { ca: "Sí, perquè ja té un Internet Gateway adjunt", es: "Sí, porque ya tiene un Internet Gateway adjunto" },
      { ca: "Només si creem una Elastic IP", es: "Solo si creamos una Elastic IP" },
      { ca: "Només si creem una NACL", es: "Solo si creamos una NACL" }
    ], 1,
    { ca: "La VPC per defecte sí permet accés a Internet perquè ja té un Internet Gateway adjunt, encara que no l'hagem creat explícitament.", es: "La VPC por defecto sí permite acceso a Internet porque ya tiene un Internet Gateway adjunto, aunque no lo hayamos creado explícitamente." }),

  Q(T_VPC,
    { ca: "Quin és el primer pas per dissenyar una xarxa a AWS?", es: "¿Cuál es el primer paso para diseñar una red en AWS?" },
    [
      { ca: "Crear una instància EC2", es: "Crear una instancia EC2" },
      { ca: "Crear la VPC i definir-ne el rang CIDR", es: "Crear la VPC y definir su rango CIDR" },
      { ca: "Crear un usuari IAM", es: "Crear un usuario IAM" },
      { ca: "Crear una funció Lambda", es: "Crear una función Lambda" }
    ], 1,
    { ca: "Primer es crea la VPC amb un rang CIDR i després es subdivideix en subxarxes públiques i privades segons les necessitats.", es: "Primero se crea la VPC con un rango CIDR y después se subdivide en subredes públicas y privadas según las necesidades." }),

  Q(T_VPC,
    { ca: "Una subxarxa pública pot contenir una instància sense IP pública?", es: "¿Una subred pública puede contener una instancia sin IP pública?" },
    [
      { ca: "No, és impossible", es: "No, es imposible" },
      { ca: "Sí, però no podrà comunicar-se directament amb Internet", es: "Sí, pero no podrá comunicarse directamente con Internet" },
      { ca: "Sí, i sempre tindrà accés a Internet igualment", es: "Sí, y siempre tendrá acceso a Internet igualmente" },
      { ca: "Només si és una base de dades", es: "Solo si es una base de datos" }
    ], 1,
    { ca: "La subxarxa pública té ruta a l'IGW, però perquè una instància accedisca a Internet necessita també una IP pública (o un NAT). La ruta sola no basta.", es: "La subred pública tiene ruta al IGW, pero para que una instancia acceda a Internet necesita también una IP pública (o un NAT). La ruta sola no basta." }),

  Q(T_VPC,
    { ca: "Quina és la diferència principal entre subxarxa pública i privada?", es: "¿Cuál es la diferencia principal entre subred pública y privada?" },
    [
      { ca: "El nombre d'instàncies que admeten", es: "El número de instancias que admiten" },
      { ca: "La ruta cap a Internet (IGW directe o no)", es: "La ruta hacia Internet (IGW directo o no)" },
      { ca: "El sistema operatiu de les instàncies", es: "El sistema operativo de las instancias" },
      { ca: "El tipus de disc EBS", es: "El tipo de disco EBS" }
    ], 1,
    { ca: "La diferència és l'enrutament: la pública té una ruta cap a l'Internet Gateway; la privada no (o només surt via NAT).", es: "La diferencia es el enrutamiento: la pública tiene una ruta hacia el Internet Gateway; la privada no (o solo sale vía NAT)." }),

  Q(T_VPC,
    { ca: "Què passaria si unim dues subxarxes amb rangs CIDR solapats dins la mateixa VPC?", es: "¿Qué pasaría si unimos dos subredes con rangos CIDR solapados dentro de la misma VPC?" },
    [
      { ca: "Funcionaria perfectament", es: "Funcionaría perfectamente" },
      { ca: "No és possible: els rangs de les subxarxes no es poden solapar", es: "No es posible: los rangos de las subredes no se pueden solapar" },
      { ca: "Es fusionarien automàticament", es: "Se fusionarían automáticamente" },
      { ca: "AWS crearia una tercera subxarxa", es: "AWS crearía una tercera subred" }
    ], 1,
    { ca: "Cada subxarxa ha de tindre un rang CIDR dins del rang de la VPC i sense solapar-se amb les altres.", es: "Cada subred debe tener un rango CIDR dentro del rango de la VPC y sin solaparse con las demás." }),

  Q(T_VPC,
    { ca: "Quin component s'encarrega de decidir per on ix el tràfic d'una subxarxa?", es: "¿Qué componente se encarga de decidir por dónde sale el tráfico de una subred?" },
    [
      { ca: "La taula de rutes (route table)", es: "La tabla de rutas (route table)" },
      { ca: "El Security Group", es: "El Security Group" },
      { ca: "La Elastic IP", es: "La Elastic IP" },
      { ca: "Lambda", es: "Lambda" }
    ], 0,
    { ca: "Cada subxarxa té associada una taula de rutes que determina com ix el tràfic cap als diferents destins.", es: "Cada subred tiene asociada una tabla de rutas que determina cómo sale el tráfico hacia los distintos destinos." }),

  Q(T_VPC,
    { ca: "Una VPC pot contindre diverses subxarxes?", es: "¿Una VPC puede contener varias subredes?" },
    [
      { ca: "No, només una", es: "No, solo una" },
      { ca: "Sí, tantes com calguen dins del rang CIDR", es: "Sí, tantas como sean necesarias dentro del rango CIDR" },
      { ca: "Només dues: una pública i una privada", es: "Solo dos: una pública y una privada" },
      { ca: "Només si són de la mateixa mida", es: "Solo si son del mismo tamaño" }
    ], 1,
    { ca: "Una VPC es pot subdividir en múltiples subxarxes, cadascuna amb el seu rang i la seua funció (web, app, BD, etc.).", es: "Una VPC se puede subdividir en múltiples subredes, cada una con su rango y su función (web, app, BD, etc.)." }),

  Q(T_VPC,
    { ca: "Quin avantatge aporta separar web, aplicació i base de dades en subxarxes distintes?", es: "¿Qué ventaja aporta separar web, aplicación y base de datos en subredes distintas?" },
    [
      { ca: "Cap, només complica la xarxa", es: "Ninguna, solo complica la red" },
      { ca: "Permet aplicar seguretat en capes i limitar el tràfic entre nivells", es: "Permite aplicar seguridad en capas y limitar el tráfico entre niveles" },
      { ca: "Augmenta automàticament la velocitat d'Internet", es: "Aumenta automáticamente la velocidad de Internet" },
      { ca: "Evita haver de crear SGs", es: "Evita tener que crear SGs" }
    ], 1,
    { ca: "Separar per capes permet aïllar recursos, aplicar SGs i NACLs específics i limitar el tràfic només als fluxos necessaris.", es: "Separar por capas permite aislar recursos, aplicar SGs y NACLs específicos y limitar el tráfico solo a los flujos necesarios." }),

  Q(T_VPC,
    { ca: "Què significa que una VPC és una xarxa \"aïllada\"?", es: "¿Qué significa que una VPC es una red \"aislada\"?" },
    [
      { ca: "Que no pot tindre Internet mai", es: "Que no puede tener Internet nunca" },
      { ca: "Que per defecte els seus recursos no són accessibles des de fora sense configurar rutes i seguretat", es: "Que por defecto sus recursos no son accesibles desde fuera sin configurar rutas y seguridad" },
      { ca: "Que està físicament separada d'AWS", es: "Que está físicamente separada de AWS" },
      { ca: "Que no comparteix res amb el compte", es: "Que no comparte nada con la cuenta" }
    ], 1,
    { ca: "És aïllada perquè la xarxa és pròpia del compte i només s'obre a Internet quan configures IGW, rutes, IPs públiques i regles de seguretat.", es: "Es aislada porque la red es propia de la cuenta y solo se abre a Internet cuando configuras IGW, rutas, IPs públicas y reglas de seguridad." }),

  Q(T_VPC,
    { ca: "Quin és el rang CIDR d'exemple que apareix a la teoria per a una VPC?", es: "¿Cuál es el rango CIDR de ejemplo que aparece en la teoría para una VPC?" },
    [
      { ca: "192.168.1.0/24", es: "192.168.1.0/24" },
      { ca: "10.0.0.0/16", es: "10.0.0.0/16" },
      { ca: "8.8.8.8/32", es: "8.8.8.8/32" },
      { ca: "127.0.0.1/8", es: "127.0.0.1/8" }
    ], 1,
    { ca: "La teoria posa com a exemple una VPC amb el rang 10.0.0.0/16, que després es pot subdividir en subxarxes.", es: "La teoría pone como ejemplo una VPC con el rango 10.0.0.0/16, que después se puede subdividir en subredes." }),

  Q(T_VPC,
    { ca: "Una subxarxa privada pot eixir a Internet?", es: "¿Una subred privada puede salir a Internet?" },
    [
      { ca: "No, de cap manera", es: "No, de ninguna manera" },
      { ca: "Sí, a través d'un NAT Gateway, però no pot rebre connexions iniciades des de fora", es: "Sí, a través de un NAT Gateway, pero no puede recibir conexiones iniciadas desde fuera" },
      { ca: "Sí, directament per l'IGW", es: "Sí, directamente por el IGW" },
      { ca: "Només si té una NACL", es: "Solo si tiene una NACL" }
    ], 1,
    { ca: "Pot eixir a Internet mitjançant una NAT Gateway, que fa la traducció d'adreces. El tràfic és unidireccional: Internet no pot iniciar connexions cap a la instància privada.", es: "Puede salir a Internet mediante una NAT Gateway, que hace la traducción de direcciones. El tráfico es unidireccional: Internet no puede iniciar conexiones hacia la instancia privada." })
);
