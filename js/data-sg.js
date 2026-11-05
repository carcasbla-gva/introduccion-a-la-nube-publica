/* Tema: Security Groups (SG) */
QUESTIONS.push(
  Q(T_SG,
    { ca: "Què és un Security Group?", es: "¿Qué es un Security Group?" },
    [
      { ca: "Una llista de regles a nivell de subxarxa", es: "Una lista de reglas a nivel de subred" },
      { ca: "Un tallafoc virtual que controla el trànsit a nivell d'instància", es: "Un firewall virtual que controla el tráfico a nivel de instancia" },
      { ca: "Un servei d'identitats d'AWS", es: "Un servicio de identidades de AWS" },
      { ca: "Un disc virtual EBS", es: "Un disco virtual EBS" }
    ], 1,
    { ca: "Un Security Group és un tallafoc virtual associat a recursos de xarxa (com una instància EC2) que controla el trànsit d'entrada i eixida.", es: "Un Security Group es un firewall virtual asociado a recursos de red (como una instancia EC2) que controla el tráfico de entrada y salida." }),

  Q(T_SG,
    { ca: "A quin nivell s'aplica un Security Group?", es: "¿A qué nivel se aplica un Security Group?" },
    [
      { ca: "A la subxarxa (subnet)", es: "A la subred (subnet)" },
      { ca: "Al recurs o a la interfície de xarxa", es: "Al recurso o a la interfaz de red" },
      { ca: "A tota la VPC", es: "A toda la VPC" },
      { ca: "A Internet", es: "A Internet" }
    ], 1,
    { ca: "El SG s'associa a la interfície de xarxa de la instància (nivell del recurs); la NACL s'aplica a la subnet.", es: "El SG se asocia a la interfaz de red de la instancia (nivel del recurso); la NACL se aplica a la subnet." }),

  Q(T_SG,
    { ca: "Un Security Group és stateful. Què significa això?", es: "Un Security Group es stateful. ¿Qué significa esto?" },
    [
      { ca: "Que no recorda l'estat de les connexions", es: "Que no recuerda el estado de las conexiones" },
      { ca: "Que si permites una connexió d'entrada, la resposta automàticament està permesa", es: "Que si permites una conexión de entrada, la respuesta automáticamente está permitida" },
      { ca: "Que només té regles DENY", es: "Que solo tiene reglas DENY" },
      { ca: "Que s'avaluen per ordre numèric ascendent", es: "Que se evalúan por orden numérico ascendente" }
    ], 1,
    { ca: "És stateful: té en compte l'estat de les connexions. Si permetes una connexió d'entrada, la resposta torna automàticament, encara que no hi haja una regla d'eixida específica.", es: "Es stateful: tiene en cuenta el estado de las conexiones. Si permites una conexión de entrada, la respuesta regresa automáticamente, aunque no haya una regla de salida específica." }),

  Q(T_SG,
    { ca: "Quins tipus de regles tenen els Security Groups?", es: "¿Qué tipos de reglas tienen los Security Groups?" },
    [
      { ca: "Només regles DENY", es: "Solo reglas DENY" },
      { ca: "Només regles d'autorització (ALLOW)", es: "Solo reglas de autorización (ALLOW)" },
      { ca: "Només regles d'entrada", es: "Solo reglas de entrada" },
      { ca: "Només regles de sortida", es: "Solo reglas de salida" }
    ], 1,
    { ca: "Els Security Groups només tenen regles per autoritzar trànsit; no tenen regles explícites de tipus Deny. El trànsit no autoritzat no passa.", es: "Los Security Groups solo tienen reglas para autorizar tráfico; no tienen reglas explícitas de tipo Deny. El tráfico no autorizado no pasa." }),

  Q(T_SG,
    { ca: "Què passa quan hi ha diversos Security Groups associats a una mateixa interfície de xarxa?", es: "¿Qué pasa cuando hay varios Security Groups asociados a una misma interfaz de red?" },
    [
      { ca: "S'avaluen conjuntament les regles d'autorització", es: "Se evalúan conjuntamente las reglas de autorización" },
      { ca: "Un SG pot anular un altre amb una regla Deny", es: "Un SG puede anular a otro con una regla Deny" },
      { ca: "Només s'aplica el primer SG", es: "Solo se aplica el primer SG" },
      { ca: "No es permet associar diversos SGs", es: "No se permite asociar varios SGs" }
    ], 0,
    { ca: "Quan hi ha diversos SGs associats, s'avaluen conjuntament les seues regles d'autorització. No es pot anul·lar una autorització amb una regla Deny.", es: "Cuando hay varios SGs asociados, se evalúan conjuntamente sus reglas de autorización. No se puede anular una autorización con una regla Deny." }),

  Q(T_SG,
    { ca: "Què és el principi de mínim privilegi aplicat als Security Groups?", es: "¿Qué es el principio de mínimo privilegio aplicado a los Security Groups?" },
    [
      { ca: "Obrir tots els ports a Internet", es: "Abrir todos los puertos a Internet" },
      { ca: "Crear un SG per funció i obrir només els ports necessaris", es: "Crear un SG por función y abrir solo los puertos necesarios" },
      { ca: "Usar un sol SG per a totes les instàncies", es: "Usar un solo SG para todas las instancias" },
      { ca: "Obrir SSH per 0.0.0.0/0", es: "Abrir SSH por 0.0.0.0/0" }
    ], 1,
    { ca: "Cada recurs hauria de rebre només les comunicacions que necessita: SG-Web, SG-App, SG-Database, etc.", es: "Cada recurso debería recibir solo las comunicaciones que necesita: SG-Web, SG-App, SG-Database, etc." }),

  Q(T_SG,
    { ca: "Què defineixen les regles inbound (d'entrada)?", es: "¿Qué definen las reglas inbound (de entrada)?" },
    [
      { ca: "El trànsit que pot arribar al recurs", es: "El tráfico que puede llegar al recurso" },
      { ca: "El trànsit que ix del recurs", es: "El tráfico que sale del recurso" },
      { ca: "Les rutes d'Internet", es: "Las rutas de Internet" },
      { ca: "Els usuaris d'IAM", es: "Los usuarios de IAM" }
    ], 0,
    { ca: "Les regles inbound defineixen quin trànsit pot arribar al recurs (per exemple, HTTP pel port 80 des d'Internet).", es: "Las reglas inbound definen qué tráfico puede llegar al recurso (por ejemplo, HTTP por el puerto 80 desde Internet)." }),

  Q(T_SG,
    { ca: "Què defineixen les regles outbound (d'eixida)?", es: "¿Qué definen las reglas outbound (de salida)?" },
    [
      { ca: "El trànsit que pot eixir del recurs", es: "El tráfico que puede salir del recurso" },
      { ca: "El trànsit que arriba al recurs", es: "El tráfico que llega al recurso" },
      { ca: "Les regles de la NACL", es: "Las reglas de la NACL" },
      { ca: "Els grups d'IAM", es: "Los grupos de IAM" }
    ], 0,
    { ca: "Les regles outbound defineixen quin trànsit pot eixir del recurs (per exemple, connectar-se a repositoris per descarregar actualitzacions).", es: "Las reglas outbound definen qué tráfico puede salir del recurso (por ejemplo, conectarse a repositorios para descargar actualizaciones)." }),

  Q(T_SG,
    { ca: "Per defecte, què permet un Security Group nou?", es: "Por defecto, ¿qué permite un Security Group nuevo?" },
    [
      { ca: "Tot el trànsit d'entrada", es: "Todo el tráfico de entrada" },
      { ca: "No permet trànsit d'entrada fins que afegim les regles corresponents", es: "No permite tráfico de entrada hasta que añadimos las reglas correspondientes" },
      { ca: "Només SSH", es: "Solo SSH" },
      { ca: "Només HTTP", es: "Solo HTTP" }
    ], 1,
    { ca: "Per defecte, un Security Group nou no permet trànsit d'entrada fins que afegim les regles corresponents.", es: "Por defecto, un Security Group nuevo no permite tráfico de entrada hasta que añadimos las reglas correspondientes." }),

  Q(T_SG,
    { ca: "Què solen permetre per defecte les regles d'eixida d'un Security Group?", es: "¿Qué suelen permitir por defecto las reglas de salida de un Security Group?" },
    [
      { ca: "Cap trànsit", es: "Ningún tráfico" },
      { ca: "Habitualment, tot el trànsit d'eixida", es: "Habitualmente, todo el tráfico de salida" },
      { ca: "Només el port 22", es: "Solo el puerto 22" },
      { ca: "Només el port 80", es: "Solo el puerto 80" }
    ], 1,
    { ca: "Habitualment, les regles d'eixida del SG predeterminat permeten tot el trànsit d'eixida, però es poden modificar.", es: "Habitualmente, las reglas de salida del SG predeterminado permiten todo el tráfico de salida, pero se pueden modificar." }),

  Q(T_SG,
    { ca: "Per a un servidor web, quina configuració de SG és recomanable?", es: "Para un servidor web, ¿qué configuración de SG es recomendable?" },
    [
      { ca: "Obrir tots els ports a 0.0.0.0/0", es: "Abrir todos los puertos a 0.0.0.0/0" },
      { ca: "Permetre HTTP (80) a qualsevol IPv4 i SSH (22) només a la teua IP", es: "Permitir HTTP (80) a cualquier IPv4 y SSH (22) solo a tu IP" },
      { ca: "Permetre només SSH a 0.0.0.0/0", es: "Permitir solo SSH a 0.0.0.0/0" },
      { ca: "No configurar cap regla", es: "No configurar ninguna regla" }
    ], 1,
    { ca: "El recomanable és permetre HTTP (port 80) a qualsevol IPv4 (0.0.0.0/0) i SSH (port 22) només a la teua IP pública.", es: "Lo recomendable es permitir HTTP (puerto 80) a cualquier IPv4 (0.0.0.0/0) y SSH (puerto 22) solo a tu IP pública." }),

  Q(T_SG,
    { ca: "És recomanable obrir SSH a 0.0.0.0/0?", es: "¿Es recomendable abrir SSH a 0.0.0.0/0?" },
    [
      { ca: "Sí, sempre", es: "Sí, siempre" },
      { ca: "No; és millor limitar-lo a una IP de confiança o usar un mecanisme més segur", es: "No; es mejor limitarlo a una IP de confianza o usar un mecanismo más seguro" },
      { ca: "Només en producció", es: "Solo en producción" },
      { ca: "És obligatori", es: "Es obligatorio" }
    ], 1,
    { ca: "No és recomanable obrir SSH al món sencer (0.0.0.0/0) si es pot limitar l'accés a una IP de confiança o usar un mecanisme d'administració més segur.", es: "No es recomendable abrir SSH al mundo entero (0.0.0.0/0) si se puede limitar el acceso a una IP de confianza o usar un mecanismo de administración más seguro." }),

  Q(T_SG,
    { ca: "Pot un mateix Security Group protegir diverses instàncies?", es: "¿Puede un mismo Security Group proteger varias instancias?" },
    [
      { ca: "No, cada instància necessita un SG únic", es: "No, cada instancia necesita un SG único" },
      { ca: "Sí, per exemple SG-Web associat a diverses instàncies EC2", es: "Sí, por ejemplo SG-Web asociado a varias instancias EC2" },
      { ca: "Només si són a la mateixa subnet", es: "Solo si están en la misma subnet" },
      { ca: "Només si són Windows", es: "Solo si son Windows" }
    ], 1,
    { ca: "Un mateix SG pot protegir diverses instàncies; totes les instàncies associades tindrien la mateixa política de xarxa.", es: "Un mismo SG puede proteger varias instancias; todas las instancias asociadas tendrían la misma política de red." }),

  Q(T_SG,
    { ca: "En una connexió HTTP, per què la resposta pot tornar sense una regla d'eixida específica?", es: "En una conexión HTTP, ¿por qué la respuesta puede regresar sin una regla de salida específica?" },
    [
      { ca: "Perquè el SG és stateless", es: "Porque el SG es stateless" },
      { ca: "Perquè el SG és stateful i recorda la connexió autoritzada", es: "Porque el SG es stateful y recuerda la conexión autorizada" },
      { ca: "Perquè la NACL ho permet sempre", es: "Porque la NACL lo permite siempre" },
      { ca: "Perquè HTTP no necessita resposta", es: "Porque HTTP no necesita respuesta" }
    ], 1,
    { ca: "Com que és stateful, la resposta associada a una connexió autoritzada es permet automàticament, encara que no hi haja una regla d'eixida específica.", es: "Como es stateful, la respuesta asociada a una conexión autorizada se permite automáticamente, aunque no haya una regla de salida específica." }),

  Q(T_SG,
    { ca: "Les connexions noves que inicia el servidor, a què estan subjectes?", es: "Las conexiones nuevas que inicia el servidor, ¿a qué están sujetas?" },
    [
      { ca: "A les regles d'eixida", es: "A las reglas de salida" },
      { ca: "A res", es: "A nada" },
      { ca: "A les regles d'entrada", es: "A las reglas de entrada" },
      { ca: "A la NACL únicament", es: "A la NACL únicamente" }
    ], 0,
    { ca: "Les connexions noves que inicie el servidor continuen subjectes a les regles d'eixida del SG.", es: "Las conexiones nuevas que inicie el servidor continúan sujetas a las reglas de salida del SG." }),

  Q(T_SG,
    { ca: "Què passa amb el trànsit que no queda autoritzat per les regles d'un Security Group?", es: "¿Qué pasa con el tráfico que no queda autorizado por las reglas de un Security Group?" },
    [
      { ca: "Passa igualment", es: "Pasa igualmente" },
      { ca: "No passa", es: "No pasa" },
      { ca: "Es redirigeix a una altra instància", es: "Se redirige a otra instancia" },
      { ca: "Es registra i es permet", es: "Se registra y se permite" }
    ], 1,
    { ca: "El trànsit que no queda autoritzat per les regles aplicables no passa.", es: "El tráfico que no queda autorizado por las reglas aplicables no pasa." }),

  Q(T_SG,
    { ca: "Quin és un exemple de separació de Security Groups per funció?", es: "¿Cuál es un ejemplo de separación de Security Groups por función?" },
    [
      { ca: "SG-Web, SG-App i SG-Database", es: "SG-Web, SG-App y SG-Database" },
      { ca: "NACL-1 i NACL-2", es: "NACL-1 y NACL-2" },
      { ca: "IAM-Admin i IAM-User", es: "IAM-Admin y IAM-User" },
      { ca: "EBS-1 i EBS-2", es: "EBS-1 y EBS-2" }
    ], 0,
    { ca: "Crear SGs diferents per funció (SG-Web, SG-App, SG-Database) permet aplicar el principi de mínim privilegi.", es: "Crear SGs diferentes por función (SG-Web, SG-App, SG-Database) permite aplicar el principio de mínimo privilegio." })
);
