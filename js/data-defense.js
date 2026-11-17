/* Tema: SG i NACL a la VPC (defensa en capes) */
QUESTIONS.push(
  Q(T_DEF,
    { ca: "A quin nivell actua un Security Group?", es: "¿A qué nivel actúa un Security Group?" },
    [
      { ca: "A nivell de subxarxa", es: "A nivel de subred" },
      { ca: "A nivell d'instància o interfície de xarxa", es: "A nivel de instancia o interfaz de red" },
      { ca: "A nivell de VPC sencera", es: "A nivel de VPC entera" },
      { ca: "A nivell de regió", es: "A nivel de región" }
    ], 1,
    { ca: "Els Security Groups funcionen com un tallafoc virtual a nivell d'instància (NIC/ENI), mentre que les NACLs actuen a nivell de subxarxa.", es: "Los Security Groups funcionan como un firewall virtual a nivel de instancia (NIC/ENI), mientras que las NACLs actúan a nivel de subred." }),

  Q(T_DEF,
    { ca: "A quin nivell actua una Network ACL?", es: "¿A qué nivel actúa una Network ACL?" },
    [
      { ca: "A nivell d'instància", es: "A nivel de instancia" },
      { ca: "A nivell de subxarxa sencera", es: "A nivel de subred entera" },
      { ca: "A nivell d'usuari IAM", es: "A nivel de usuario IAM" },
      { ca: "A nivell de funció Lambda", es: "A nivel de función Lambda" }
    ], 1,
    { ca: "Les NACLs s'apliquen a subxarxes senceres, no a instàncies concretes. Això permet aplicar polítiques generals a tota la subxarxa.", es: "Las NACLs se aplican a subredes enteras, no a instancias concretas. Eso permite aplicar políticas generales a toda la subred." }),

  Q(T_DEF,
    { ca: "Un Security Group és stateful. Què implica?", es: "Un Security Group es stateful. ¿Qué implica?" },
    [
      { ca: "Que cal definir explícitament la regla d'eixida de cada resposta", es: "Que hay que definir explícitamente la regla de salida de cada respuesta" },
      { ca: "Que si es permet una connexió d'entrada, la resposta d'eixida està permesa implícitament", es: "Que si se permite una conexión de entrada, la respuesta de salida está permitida implícitamente" },
      { ca: "Que només té regles DENY", es: "Que solo tiene reglas DENY" },
      { ca: "Que no recorda l'estat de les connexions", es: "Que no recuerda el estado de las conexiones" }
    ], 1,
    { ca: "Stateful vol dir que el SG recorda l'estat de la connexió: si permet l'entrada, la resposta d'eixida es permet automàticament.", es: "Stateful significa que el SG recuerda el estado de la conexión: si permite la entrada, la respuesta de salida se permite automáticamente." }),

  Q(T_DEF,
    { ca: "Una NACL és stateless. Què implica?", es: "Una NACL es stateless. ¿Qué implica?" },
    [
      { ca: "Que la resposta d'eixida es permet automàticament", es: "Que la respuesta de salida se permite automáticamente" },
      { ca: "Que cal definir explícitament tant les regles d'entrada com les d'eixida", es: "Que hay que definir explícitamente tanto las reglas de entrada como las de salida" },
      { ca: "Que només té regles ALLOW", es: "Que solo tiene reglas ALLOW" },
      { ca: "Que s'avalua sense ordre", es: "Que se evalúa sin orden" }
    ], 1,
    { ca: "Com que és stateless, no recorda l'estat de la connexió: cal configurar de manera explícita les regles d'entrada i les d'eixida.", es: "Como es stateless, no recuerda el estado de la conexión: hay que configurar de forma explícita las reglas de entrada y las de salida." }),

  Q(T_DEF,
    { ca: "Quins tipus de regles permet una NACL?", es: "¿Qué tipos de reglas permite una NACL?" },
    [
      { ca: "Només ALLOW", es: "Solo ALLOW" },
      { ca: "Només DENY", es: "Solo DENY" },
      { ca: "ALLOW i DENY", es: "ALLOW y DENY" },
      { ca: "Només regles d'entrada", es: "Solo reglas de entrada" }
    ], 2,
    { ca: "Les NACLs permeten regles ALLOW i DENY, a diferència dels SGs, que només permeten autoritzacions (ALLOW).", es: "Las NACLs permiten reglas ALLOW y DENY, a diferencia de los SGs, que solo permiten autorizaciones (ALLOW)." }),

  Q(T_DEF,
    { ca: "Com s'avaluen les regles d'una NACL?", es: "¿Cómo se evalúan las reglas de una NACL?" },
    [
      { ca: "Totes alhora, sense ordre", es: "Todas a la vez, sin orden" },
      { ca: "En ordre numèric, de menor a major, i s'aplica la primera coincident", es: "En orden numérico, de menor a mayor, y se aplica la primera coincidente" },
      { ca: "En ordre alfabètic", es: "En orden alfabético" },
      { ca: "A l'atzar", es: "Al azar" }
    ], 1,
    { ca: "Les regles de la NACL tenen un número de prioritat i es processen en ordre numèric (de menor a major); s'aplica la primera regla que coincidix.", es: "Las reglas de la NACL tienen un número de prioridad y se procesan en orden numérico (de menor a mayor); se aplica la primera regla que coincide." }),

  Q(T_DEF,
    { ca: "Quin tipus de bloqueig permet una NACL que un Security Group no permet?", es: "¿Qué tipo de bloqueo permite una NACL que un Security Group no permite?" },
    [
      { ca: "Bloqueig explícit d'una IP concreta", es: "Bloqueo explícito de una IP concreta" },
      { ca: "Permetre el port 80", es: "Permitir el puerto 80" },
      { ca: "Permetre SSH", es: "Permitir SSH" },
      { ca: "Permetre HTTP i HTTPS", es: "Permitir HTTP y HTTPS" }
    ], 0,
    { ca: "Els NACLs permeten fer bloqueig explícit d'una IP (regla DENY), mentre que els SGs només permeten autoritzar i no tenen regles de denegació.", es: "Las NACLs permiten hacer bloqueo explícito de una IP (regla DENY), mientras que los SGs solo permiten autorizar y no tienen reglas de denegación." }),

  Q(T_DEF,
    { ca: "Per defecte, com tracta una NACL el tràfic?", es: "Por defecto, ¿cómo trata una NACL el tráfico?" },
    [
      { ca: "Tot denegat fins que s'afigen regles", es: "Todo denegado hasta que se añadan reglas" },
      { ca: "Tot permés, però es pot denegar", es: "Todo permitido, pero se puede denegar" },
      { ca: "Només permet SSH", es: "Solo permite SSH" },
      { ca: "No permet res mai", es: "No permite nada nunca" }
    ], 1,
    { ca: "Segons la taula de la teoria, la NACL permet tot el tràfic per defecte, però es pot denegar. El SG, en canvi, denega tot fins que s'afigen regles.", es: "Según la tabla de la teoría, la NACL permite todo el tráfico por defecto, pero se puede denegar. El SG, en cambio, deniega todo hasta que se añaden reglas." }),

  Q(T_DEF,
    { ca: "Per defecte, com tracta un Security Group el tràfic?", es: "Por defecto, ¿cómo trata un Security Group el tráfico?" },
    [
      { ca: "Tot permés", es: "Todo permitido" },
      { ca: "Tot denegat fins que s'afigen regles", es: "Todo denegado hasta que se añadan reglas" },
      { ca: "Només permet ICMP", es: "Solo permite ICMP" },
      { ca: "Depén de la VPC", es: "Depende de la VPC" }
    ], 1,
    { ca: "El SG denega tot el tràfic per defecte; només passa el que està autoritzat per alguna regla, ja que no té regles DENY.", es: "El SG deniega todo el tráfico por defecto; solo pasa el que está autorizado por alguna regla, ya que no tiene reglas DENY." }),

  Q(T_DEF,
    { ca: "Què és la defensa en capes (defense in depth)?", es: "¿Qué es la defensa en capas (defense in depth)?" },
    [
      { ca: "Usar només SGs", es: "Usar solo SGs" },
      { ca: "Combinar SG a nivell d'instància i NACL a nivell de subxarxa", es: "Combinar SG a nivel de instancia y NACL a nivel de subred" },
      { ca: "Usar només NACLs", es: "Usar solo NACLs" },
      { ca: "Desactivar tots els filtres", es: "Desactivar todos los filtros" }
    ], 1,
    { ca: "El més recomanable és utilitzar ambdós mecanismes: SG per protegir cada instància i NACL per filtrar a nivell de subxarxa. Si una capa falla, encara tens l'altra.", es: "Lo más recomendable es utilizar ambos mecanismos: SG para proteger cada instancia y NACL para filtrar a nivel de subred. Si una capa falla, todavía tienes la otra." }),

  Q(T_DEF,
    { ca: "En una arquitectura de 3 capes (Web-App-DB), on va la capa Web?", es: "En una arquitectura de 3 capas (Web-App-DB), ¿dónde va la capa Web?" },
    [
      { ca: "En una subxarxa privada", es: "En una subred privada" },
      { ca: "En una subxarxa pública", es: "En una subred pública" },
      { ca: "Fora de la VPC", es: "Fuera de la VPC" },
      { ca: "Dins de Lambda", es: "Dentro de Lambda" }
    ], 1,
    { ca: "La capa Web va en una subxarxa pública perquè ha de rebre tràfic d'Internet, normalment HTTP/HTTPS.", es: "La capa Web va en una subred pública porque debe recibir tráfico de Internet, normalmente HTTP/HTTPS." }),

  Q(T_DEF,
    { ca: "Què hauria de permetre el SG-Web?", es: "¿Qué debería permitir el SG-Web?" },
    [
      { ca: "Tots els ports des de qualsevol lloc", es: "Todos los puertos desde cualquier lugar" },
      { ca: "HTTP/HTTPS des de qualsevol lloc i SSH només des d'una IP concreta d'administració", es: "HTTP/HTTPS desde cualquier lugar y SSH solo desde una IP concreta de administración" },
      { ca: "Només MySQL", es: "Solo MySQL" },
      { ca: "Res", es: "Nada" }
    ], 1,
    { ca: "El SG-Web permet només HTTP/HTTPS (80, 443) des de qualsevol lloc i SSH (22) només des d'una IP concreta del professor o administrador.", es: "El SG-Web permite solo HTTP/HTTPS (80, 443) desde cualquier lugar y SSH (22) solo desde una IP concreta del profesor o administrador." }),

  Q(T_DEF,
    { ca: "Què hauria de permetre el SG-App?", es: "¿Qué debería permitir el SG-App?" },
    [
      { ca: "Tràfic des de qualsevol IP al port 22", es: "Tráfico desde cualquier IP al puerto 22" },
      { ca: "Tràfic només des del SG-Web al port 8080", es: "Tráfico solo desde el SG-Web al puerto 8080" },
      { ca: "Tot el tràfic d'Internet", es: "Todo el tráfico de Internet" },
      { ca: "Només MySQL al 3306", es: "Solo MySQL al 3306" }
    ], 1,
    { ca: "El SG-App permet tràfic només des del SG-Web al port 8080, que és la comunicació web → app.", es: "El SG-App permite tráfico solo desde el SG-Web al puerto 8080, que es la comunicación web → app." }),

  Q(T_DEF,
    { ca: "Què hauria de permetre el SG-DB?", es: "¿Qué debería permitir el SG-DB?" },
    [
      { ca: "MySQL (3306) des de qualsevol lloc", es: "MySQL (3306) desde cualquier lugar" },
      { ca: "MySQL (3306) només des del SG-App", es: "MySQL (3306) solo desde el SG-App" },
      { ca: "HTTP i HTTPS des de tot arreu", es: "HTTP y HTTPS desde todas partes" },
      { ca: "SSH des de qualsevol IP", es: "SSH desde cualquier IP" }
    ], 1,
    { ca: "El SG-DB només permet MySQL (3306) des del SG-App, de manera que la base de dades no és accessible ni des de la capa web ni des d'Internet.", es: "El SG-DB solo permite MySQL (3306) desde el SG-App, de manera que la base de datos no es accesible ni desde la capa web ni desde Internet." }),

  Q(T_DEF,
    { ca: "Què pot fer la NACL pública en l'arquitectura de 3 capes?", es: "¿Qué puede hacer la NACL pública en la arquitectura de 3 capas?" },
    [
      { ca: "Permetre només SSH", es: "Permitir solo SSH" },
      { ca: "Denegar tràfic de certes IPs sospitoses o blocs de països, independentment del SG", es: "Denegar tráfico de ciertas IPs sospechosas o bloques de países, independientemente del SG" },
      { ca: "Substituir el SG-Web", es: "Sustituir el SG-Web" },
      { ca: "Crear la VPC", es: "Crear la VPC" }
    ], 1,
    { ca: "La NACL pública pot denegar tràfic de certes IPs sospitoses o blocs de països, independentment del que permeta el Security Group.", es: "La NACL pública puede denegar tráfico de ciertas IPs sospechosas o bloques de países, independientemente de lo que permita el Security Group." }),

  Q(T_DEF,
    { ca: "Què bloqueja la NACL privada de la capa DB?", es: "¿Qué bloquea la NACL privada de la capa DB?" },
    [
      { ca: "Tot el tràfic, sense excepcions", es: "Todo el tráfico, sin excepciones" },
      { ca: "Qualsevol cosa que no siga 3306 des de la subxarxa d'aplicació", es: "Cualquier cosa que no sea 3306 desde la subred de aplicación" },
      { ca: "Només HTTP", es: "Solo HTTP" },
      { ca: "Res, no té regles", es: "Nada, no tiene reglas" }
    ], 1,
    { ca: "La NACL de la capa DB actua com a segona capa i bloqueja qualsevol tràfic que no siga MySQL (3306) provinent de la subxarxa d'aplicació.", es: "La NACL de la capa DB actúa como segunda capa y bloquea cualquier tráfico que no sea MySQL (3306) proveniente de la subred de aplicación." }),

  Q(T_DEF,
    { ca: "Una subxarxa pot tindre més d'una NACL activa alhora?", es: "¿Una subred puede tener más de una NACL activa a la vez?" },
    [
      { ca: "Sí, sempre", es: "Sí, siempre" },
      { ca: "No, una subxarxa només pot tindre una NACL activa", es: "No, una subred solo puede tener una NACL activa" },
      { ca: "Només si són públiques", es: "Solo si son públicas" },
      { ca: "Només si tenen Lambda", es: "Solo si tienen Lambda" }
    ], 1,
    { ca: "Segons la taula comparativa, una subxarxa només pot tindre una NACL activa; en canvi, un mateix SG es pot assignar a moltes instàncies.", es: "Según la tabla comparativa, una subred solo puede tener una NACL activa; en cambio, un mismo SG se puede asignar a muchas instancias." }),

  Q(T_DEF,
    { ca: "Quin és un cas d'ús típic d'un Security Group?", es: "¿Cuál es un caso de uso típico de un Security Group?" },
    [
      { ca: "Bloquejar una IP sospitosa a tota la subxarxa", es: "Bloquear una IP sospechosa a toda la subred" },
      { ca: "Definir accessos de serveis (Web 80/443, SSH restringit)", es: "Definir accesos de servicios (Web 80/443, SSH restringido)" },
      { ca: "Filtrar ICMP a tota la VPC", es: "Filtrar ICMP a toda la VPC" },
      { ca: "Crear usuaris IAM", es: "Crear usuarios IAM" }
    ], 1,
    { ca: "Els SGs són ideals per definir accessos de serveis a nivell d'instància, com Web 80/443 o SSH restringit a una IP concreta.", es: "Los SGs son ideales para definir accesos de servicios a nivel de instancia, como Web 80/443 o SSH restringido a una IP concreta." })
);
