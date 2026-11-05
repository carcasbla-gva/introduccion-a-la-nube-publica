/* Tema: Network ACLs (NACL) */
QUESTIONS.push(
  Q(T_NACL,
    { ca: "Què és una Network ACL (NACL)?", es: "¿Qué es una Network ACL (NACL)?" },
    [
      { ca: "Un tallafoc virtual per a una instància concreta", es: "Un firewall virtual para una instancia concreta" },
      { ca: "Una llista de regles que controla el trànsit que entra i eix d'una subxarxa de la VPC", es: "Una lista de reglas que controla el tráfico que entra y sale de una subred de la VPC" },
      { ca: "Un servei de bases de dades", es: "Un servicio de bases de datos" },
      { ca: "Una política d'IAM en format JSON", es: "Una política de IAM en formato JSON" }
    ], 1,
    { ca: "Una NACL controla el trànsit d'entrada i eixida d'una subnet de la VPC; no s'associa directament a una instància.", es: "Una NACL controla el tráfico de entrada y salida de una subnet de la VPC; no se asocia directamente a una instancia." }),

  Q(T_NACL,
    { ca: "Una NACL és stateless. Què implica això?", es: "Una NACL es stateless. ¿Qué implica esto?" },
    [
      { ca: "Recorda l'estat de les connexions i permet respostes automàticament", es: "Recuerda el estado de las conexiones y permite respuestas automáticamente" },
      { ca: "No recorda l'estat de les connexions; cal configurar entrada i eixida", es: "No recuerda el estado de las conexiones; hay que configurar entrada y salida" },
      { ca: "Només té regles ALLOW", es: "Solo tiene reglas ALLOW" },
      { ca: "S'avaluen les regles en ordre ascendent", es: "Se evalúan las reglas en orden ascendente" }
    ], 1,
    { ca: "És stateless: no recorda que una petició haja entrat ni autoritza automàticament la resposta; cal configurar les dues direccions.", es: "Es stateless: no recuerda que una petición haya entrado ni autoriza automáticamente la respuesta; hay que configurar ambas direcciones." }),

  Q(T_NACL,
    { ca: "Quins tipus d'accions permeten les NACLs?", es: "¿Qué tipos de acciones permiten las NACLs?" },
    [
      { ca: "Només ALLOW", es: "Solo ALLOW" },
      { ca: "Només DENY", es: "Solo DENY" },
      { ca: "ALLOW i DENY", es: "ALLOW y DENY" },
      { ca: "Cap acció", es: "Ninguna acción" }
    ], 2,
    { ca: "Les NACLs permeten tant accions ALLOW com DENY, a diferència dels Security Groups.", es: "Las NACLs permiten tanto acciones ALLOW como DENY, a diferencia de los Security Groups." }),

  Q(T_NACL,
    { ca: "Com s'avaluen les regles d'una NACL?", es: "¿Cómo se evalúan las reglas de una NACL?" },
    [
      { ca: "En ordre ascendent, primer la regla amb el número més baix", es: "En orden ascendente, primero la regla con el número más bajo" },
      { ca: "En ordre descendent", es: "En orden descendente" },
      { ca: "A l'atzar", es: "Al azar" },
      { ca: "Només la primera regla s'avalua sempre", es: "Solo se evalúa siempre la primera regla" }
    ], 0,
    { ca: "Les regles tenen números i s'avaluen en ordre ascendent. Quan una regla coincideix, s'aplica la seua acció i no es continuen examinant les posteriors.", es: "Las reglas tienen números y se evalúan en orden ascendente. Cuando una regla coincide, se aplica su acción y no se continúan examinando las posteriores." }),

  Q(T_NACL,
    { ca: "Què són els ports efímers en el context d'una NACL?", es: "¿Qué son los puertos efímeros en el contexto de una NACL?" },
    [
      { ca: "Ports oberts permanentment al servidor", es: "Puertos abiertos permanentemente en el servidor" },
      { ca: "Ports temporals que el sistema del client utilitza per establir connexions de retorn", es: "Puertos temporales que el sistema del cliente utiliza para establecer conexiones de retorno" },
      { ca: "Ports dels Security Groups", es: "Puertos de los Security Groups" },
      { ca: "Ports de les instàncies EC2", es: "Puertos de las instancias EC2" }
    ], 1,
    { ca: "Els ports efímers són ports temporals del client. En una NACL stateless, la regla d'eixida ha de permetre el trànsit de retorn cap a aquests ports.", es: "Los puertos efímeros son puertos temporales del cliente. En una NACL stateless, la regla de salida debe permitir el tráfico de retorno hacia estos puertos." }),

  Q(T_NACL,
    { ca: "Quina afirmació és certa sobre l'associació de NACLs a subnets?", es: "¿Qué afirmación es cierta sobre la asociación de NACLs a subnets?" },
    [
      { ca: "Una subnet pot estar associada a diverses NACLs alhora", es: "Una subnet puede estar asociada a varias NACLs a la vez" },
      { ca: "Una NACL pot associar-se a diverses subnets, però cada subnet només pot tenir una NACL alhora", es: "Una NACL puede asociarse a varias subnets, pero cada subnet solo puede tener una NACL a la vez" },
      { ca: "Les NACLs no s'associen a cap subnet", es: "Las NACLs no se asocian a ninguna subnet" },
      { ca: "Cada instància té la seua pròpia NACL", es: "Cada instancia tiene su propia NACL" }
    ], 1,
    { ca: "Cada subnet ha d'estar associada a una NACL. Una mateixa NACL pot associar-se a diverses subnets, però cada subnet només pot tenir-ne una alhora.", es: "Cada subnet debe estar asociada a una NACL. Una misma NACL puede asociarse a varias subnets, pero cada subnet solo puede tener una a la vez." }),

  Q(T_NACL,
    { ca: "A quin nivell actua una NACL?", es: "¿A qué nivel actúa una NACL?" },
    [
      { ca: "A la instància", es: "A la instancia" },
      { ca: "A la subxarxa (subnet)", es: "A la subred (subnet)" },
      { ca: "A la regió", es: "A la región" },
      { ca: "A Internet", es: "A Internet" }
    ], 1,
    { ca: "Les NACLs actuen a escala de subnet, no d'instància.", es: "Las NACLs actúan a escala de subnet, no de instancia." }),

  Q(T_NACL,
    { ca: "Si una subnet té tres instàncies, a quantes aplica les seues regles la NACL de la subnet?", es: "Si una subnet tiene tres instancias, ¿a cuántas aplica sus reglas la NACL de la subnet?" },
    [
      { ca: "Només a la primera", es: "Solo a la primera" },
      { ca: "A les tres", es: "A las tres" },
      { ca: "A cap", es: "A ninguna" },
      { ca: "Només a les instàncies Windows", es: "Solo a las instancias Windows" }
    ], 1,
    { ca: "La NACL associada a la subnet aplica les seues regles al trànsit de totes les instàncies de la subnet.", es: "La NACL asociada a la subnet aplica sus reglas al tráfico de todas las instancias de la subnet." }),

  Q(T_NACL,
    { ca: "Cada instància d'una subnet pot tindre Security Groups diferents?", es: "¿Cada instancia de una subnet puede tener Security Groups diferentes?" },
    [
      { ca: "No, totes han de tindre el mateix", es: "No, todas deben tener el mismo" },
      { ca: "Sí, cada instància pot tindre SGs diferents", es: "Sí, cada instancia puede tener SGs diferentes" },
      { ca: "Només si són a la mateixa AZ", es: "Solo si están en la misma AZ" },
      { ca: "Només si no hi ha NACL", es: "Solo si no hay NACL" }
    ], 1,
    { ca: "La NACL és comuna a la subnet, però cada instància pot tindre Security Groups diferents.", es: "La NACL es común a la subnet, pero cada instancia puede tener Security Groups diferentes." }),

  Q(T_NACL,
    { ca: "Les regles d'entrada i eixida d'una NACL són independents?", es: "¿Las reglas de entrada y salida de una NACL son independientes?" },
    [
      { ca: "Sí, són independents", es: "Sí, son independientes" },
      { ca: "No, són les mateixes", es: "No, son las mismas" },
      { ca: "Només les d'entrada existeixen", es: "Solo existen las de entrada" },
      { ca: "Només les d'eixida existeixen", es: "Solo existen las de salida" }
    ], 0,
    { ca: "Les NACLs tenen regles d'entrada i regles d'eixida independents.", es: "Las NACLs tienen reglas de entrada y reglas de salida independientes." }),

  Q(T_NACL,
    { ca: "Si no associem una NACL personalitzada a una subnet, quina s'utilitza?", es: "Si no asociamos una NACL personalizada a una subnet, ¿cuál se utiliza?" },
    [
      { ca: "Cap", es: "Ninguna" },
      { ca: "La NACL predeterminada de la VPC", es: "La NACL predeterminada de la VPC" },
      { ca: "La NACL de la instància", es: "La NACL de la instancia" },
      { ca: "Un Security Group", es: "Un Security Group" }
    ], 1,
    { ca: "Cada subnet ha d'estar associada a una NACL. Si no n'associem una de personalitzada, s'utilitza la NACL predeterminada de la VPC.", es: "Cada subnet debe estar asociada a una NACL. Si no asociamos una personalizada, se utiliza la NACL predeterminada de la VPC." }),

  Q(T_NACL,
    { ca: "Amb regles 100 ALLOW SSH, 110 DENY SSH 0.0.0.0/0 i 120 ALLOW HTTP, què passa amb una connexió SSH des d'una IP no permesa?", es: "Con reglas 100 ALLOW SSH, 110 DENY SSH 0.0.0.0/0 y 120 ALLOW HTTP, ¿qué pasa con una conexión SSH desde una IP no permitida?" },
    [
      { ca: "Es permet per la regla 100", es: "Se permite por la regla 100" },
      { ca: "Es denega per la regla 110", es: "Se deniega por la regla 110" },
      { ca: "Es permet per la regla 120", es: "Se permite por la regla 120" },
      { ca: "S'ignoren totes", es: "Se ignoran todas" }
    ], 1,
    { ca: "La regla 100 permet SSH des de l'adreça indicada; la 110 denega altres connexions SSH; la 120 permet HTTP. S'avaluen per ordre ascendent.", es: "La regla 100 permite SSH desde la dirección indicada; la 110 deniega otras conexiones SSH; la 120 permite HTTP. Se evalúan por orden ascendente." }),

  Q(T_NACL,
    { ca: "Poden les NACLs bloquejar explícitament una IP?", es: "¿Pueden las NACLs bloquear explícitamente una IP?" },
    [
      { ca: "No, només permetre", es: "No, solo permitir" },
      { ca: "Sí, amb una regla DENY", es: "Sí, con una regla DENY" },
      { ca: "Només amb un Security Group", es: "Solo con un Security Group" },
      { ca: "Només des d'IAM", es: "Solo desde IAM" }
    ], 1,
    { ca: "A diferència dels SG, les NACLs poden bloquejar explícitament una IP o un rang d'adreces amb una regla DENY.", es: "A diferencia de los SG, las NACLs pueden bloquear explícitamente una IP o un rango de direcciones con una regla DENY." }),

  Q(T_NACL,
    { ca: "Per què cal configurar el trànsit de retorn en una NACL?", es: "¿Por qué hay que configurar el tráfico de retorno en una NACL?" },
    [
      { ca: "Perquè és stateful", es: "Porque es stateful" },
      { ca: "Perquè és stateless i no recorda les connexions", es: "Porque es stateless y no recuerda las conexiones" },
      { ca: "Perquè és un Security Group", es: "Porque es un Security Group" },
      { ca: "Perquè no té regles", es: "Porque no tiene reglas" }
    ], 1,
    { ca: "Com que és stateless, no autoritza automàticament la resposta; cal permetre també el trànsit de retorn.", es: "Como es stateless, no autoriza automáticamente la respuesta; hay que permitir también el tráfico de retorno." }),

  Q(T_NACL,
    { ca: "En una connexió HTTP típica, quina regla d'entrada sol permetre's a la NACL?", es: "En una conexión HTTP típica, ¿qué regla de entrada suele permitirse en la NACL?" },
    [
      { ca: "El port de destinació 80", es: "El puerto de destino 80" },
      { ca: "El port de destinació 22", es: "El puerto de destino 22" },
      { ca: "Un port efímer", es: "Un puerto efímero" },
      { ca: "Cap port", es: "Ningún puerto" }
    ], 0,
    { ca: "Per a una connexió HTTP típica, la regla d'entrada permet el port de destinació 80; la resposta sol tindre com a destinació un port efímer del client.", es: "Para una conexión HTTP típica, la regla de entrada permite el puerto de destino 80; la respuesta suele tener como destino un puerto efímero del cliente." }),

  Q(T_NACL,
    { ca: "Què pot passar si les regles d'eixida d'una NACL no permeten el trànsit de retorn?", es: "¿Qué puede pasar si las reglas de salida de una NACL no permiten el tráfico de retorno?" },
    [
      { ca: "Res, tot funciona igual", es: "Nada, todo funciona igual" },
      { ca: "La comunicació pot fallar encara que la petició haja entrat correctament", es: "La comunicación puede fallar aunque la petición haya entrado correctamente" },
      { ca: "El SG ho permet automàticament", es: "El SG lo permite automáticamente" },
      { ca: "S'obre el port 80 sol", es: "Se abre el puerto 80 solo" }
    ], 1,
    { ca: "Si les regles d'eixida no permeten el trànsit de retorn, la comunicació pot fallar encara que la petició haja entrat correctament.", es: "Si las reglas de salida no permiten el tráfico de retorno, la comunicación puede fallar aunque la petición haya entrado correctamente." }),

  Q(T_NACL,
    { ca: "Una mateixa NACL es pot associar a diverses subnets?", es: "¿Una misma NACL se puede asociar a varias subnets?" },
    [
      { ca: "No, només a una", es: "No, solo a una" },
      { ca: "Sí, però cada subnet només pot tenir una NACL alhora", es: "Sí, pero cada subnet solo puede tener una NACL a la vez" },
      { ca: "Només si són a regions diferents", es: "Solo si están en regiones diferentes" },
      { ca: "No existeixen les NACLs", es: "No existen las NACLs" }
    ], 1,
    { ca: "Una mateixa NACL pot associar-se a diverses subnets, però cada subnet només pot estar associada a una NACL alhora.", es: "Una misma NACL puede asociarse a varias subnets, pero cada subnet solo puede estar asociada a una NACL a la vez." })
);
