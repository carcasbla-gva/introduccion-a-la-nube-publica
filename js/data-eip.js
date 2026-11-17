/* Tema: IP elàstica (Elastic IP) */
QUESTIONS.push(
  Q(T_EIP,
    { ca: "Què és una Elastic IP (EIP)?", es: "¿Qué es una Elastic IP (EIP)?" },
    [
      { ca: "Una IP privada dinàmica", es: "Una IP privada dinámica" },
      { ca: "Una IP pública estàtica reservada al teu compte", es: "Una IP pública estática reservada en tu cuenta" },
      { ca: "Un rang CIDR de la VPC", es: "Un rango CIDR de la VPC" },
      { ca: "Una regla de la NACL", es: "Una regla de la NACL" }
    ], 1,
    { ca: "Una Elastic IP és una adreça IP pública estàtica assignada al teu compte d'AWS. Es manté constant fins que tu l'alliberes manualment.", es: "Una Elastic IP es una dirección IP pública estática asignada a tu cuenta de AWS. Se mantiene constante hasta que tú la liberas manualmente." }),

  Q(T_EIP,
    { ca: "Quina diferència hi ha entre una IP pública automàtica i una Elastic IP?", es: "¿Qué diferencia hay entre una IP pública automática y una Elastic IP?" },
    [
      { ca: "Cap, són idèntiques", es: "Ninguna, son idénticas" },
      { ca: "La automàtica canvia en parar/eliminar la instància; l'elàstica es manté fins que l'alliberes", es: "La automática cambia al parar/eliminar la instancia; la elástica se mantiene hasta que la liberas" },
      { ca: "L'elàstica és privada i la automàtica pública", es: "La elástica es privada y la automática pública" },
      { ca: "L'elàstica només funciona amb Lambda", es: "La elástica solo funciona con Lambda" }
    ], 1,
    { ca: "Les IPs públiques automàtiques canvien quan pares o elimines la instància; una Elastic IP es manté constant fins que la desassocies o l'alliberes.", es: "Las IPs públicas automáticas cambian cuando paras o eliminas la instancia; una Elastic IP se mantiene constante hasta que la desasocias o la liberas." }),

  Q(T_EIP,
    { ca: "Una IP elàstica es pot reassignar a una altra instància?", es: "¿Una IP elástica se puede reasignar a otra instancia?" },
    [
      { ca: "No, mai", es: "No, nunca" },
      { ca: "Sí, desassociant-la d'una i associant-la a una altra", es: "Sí, desasociándola de una y asociándola a otra" },
      { ca: "Només si és una instància Windows", es: "Solo si es una instancia Windows" },
      { ca: "Només reiniciant la VPC", es: "Solo reiniciando la VPC" }
    ], 1,
    { ca: "Pots substituir una instància sense canviar l'adreça pública: desassocies l'EIP d'una instància i l'associes a una altra.", es: "Puedes sustituir una instancia sin cambiar la dirección pública: desasocias la EIP de una instancia y la asocias a otra." }),

  Q(T_EIP,
    { ca: "Per a quin servei és necessària una Elastic IP de manera habitual?", es: "¿Para qué servicio es necesaria una Elastic IP de forma habitual?" },
    [
      { ca: "Per a una NAT Gateway", es: "Para una NAT Gateway" },
      { ca: "Per a un bucket S3", es: "Para un bucket S3" },
      { ca: "Per a una funció Lambda", es: "Para una función Lambda" },
      { ca: "Per a una taula de rutes", es: "Para una tabla de rutas" }
    ], 0,
    { ca: "La NAT Gateway necessita una IP pública estàtica per a identificar-se i eixir a Internet; per això s'hi associa una Elastic IP.", es: "La NAT Gateway necesita una IP pública estática para identificarse y salir a Internet; por eso se le asocia una Elastic IP." }),

  Q(T_EIP,
    { ca: "Una Elastic IP genera cost si està creada però no associada?", es: "¿Una Elastic IP genera coste si está creada pero no asociada?" },
    [
      { ca: "No, mai", es: "No, nunca" },
      { ca: "Sí, consumix diners pel fet d'existir encara que no estiga associada", es: "Sí, consume dinero por el hecho de existir aunque no esté asociada" },
      { ca: "Només si és IPv6", es: "Solo si es IPv6" },
      { ca: "Només el primer dia", es: "Solo el primer día" }
    ], 1,
    { ca: "La IP elàstica consumix diners soles pel fet d'existir, encara que no estiga associada a cap recurs. Cal alliberar les que no s'usen.", es: "La IP elástica consume dinero por el hecho de existir, aunque no esté asociada a ningún recurso. Hay que liberar las que no se usen." }),

  Q(T_EIP,
    { ca: "Una IP pública automàtica canvia al reiniciar o parar una instància EC2?", es: "¿Una IP pública automática cambia al reiniciar o parar una instancia EC2?" },
    [
      { ca: "No, es manté sempre", es: "No, se mantiene siempre" },
      { ca: "Sí, pot canviar", es: "Sí, puede cambiar" },
      { ca: "Només canvia si és Elastic", es: "Solo cambia si es Elastic" },
      { ca: "Depén de la NACL", es: "Depende de la NACL" }
    ], 1,
    { ca: "Segons la taula de la teoria, la IP pública automàtica canvia al reiniciar/parar l'EC2, no es pot reassignar i no té cost si està inactiva.", es: "Según la tabla de la teoría, la IP pública automática cambia al reiniciar/parar la EC2, no se puede reasignar y no tiene coste si está inactiva." }),

  Q(T_EIP,
    { ca: "Una Elastic IP es pot associar a quins recursos?", es: "¿A qué recursos se puede asociar una Elastic IP?" },
    [
      { ca: "Només a buckets S3", es: "Solo a buckets S3" },
      { ca: "A una instància EC2, a una NAT Gateway o a altres serveis", es: "A una instancia EC2, a una NAT Gateway o a otros servicios" },
      { ca: "Només a funcions Lambda", es: "Solo a funciones Lambda" },
      { ca: "Només a usuaris IAM", es: "Solo a usuarios IAM" }
    ], 1,
    { ca: "Una Elastic IP es pot associar a una instància EC2, a una NAT Gateway o a altres serveis, i es manté associada fins que la desassocies o l'alliberes.", es: "Una Elastic IP se puede asociar a una instancia EC2, a una NAT Gateway o a otros servicios, y se mantiene asociada hasta que la desasocias o la liberas." }),

  Q(T_EIP,
    { ca: "Per què és útil una Elastic IP si tens un domini apuntant a una IP?", es: "¿Por qué es útil una Elastic IP si tienes un dominio apuntando a una IP?" },
    [
      { ca: "Perquè el domini canvia de nom", es: "Porque el dominio cambia de nombre" },
      { ca: "Perquè la IP es manté fixa i no cal actualitzar el DNS", es: "Porque la IP se mantiene fija y no hay que actualizar el DNS" },
      { ca: "Perquè és més barata que qualsevol altra IP", es: "Porque es más barata que cualquier otra IP" },
      { ca: "Perquè evita usar HTTPS", es: "Porque evita usar HTTPS" }
    ], 1,
    { ca: "Mantindre una IP pública fixa evita haver d'actualitzar el DNS quan es recrea o substitueix la instància, i dona connectivitat externa estable.", es: "Mantener una IP pública fija evita tener que actualizar el DNS cuando se recrea o sustituye la instancia, y da conectividad externa estable." }),

  Q(T_EIP,
    { ca: "Des de quins serveis es pot crear una Elastic IP?", es: "¿Desde qué servicios se puede crear una Elastic IP?" },
    [
      { ca: "Només des de IAM", es: "Solo desde IAM" },
      { ca: "Des d'EC2 o des de VPC", es: "Desde EC2 o desde VPC" },
      { ca: "Només des de Lambda", es: "Solo desde Lambda" },
      { ca: "Només des de S3", es: "Solo desde S3" }
    ], 1,
    { ca: "Podem crear la IP elàstica tant des d'EC2 com des de VPC, i també durant la creació de serveis com la NAT Gateway.", es: "Podemos crear la IP elástica tanto desde EC2 como desde VPC, y también durante la creación de servicios como la NAT Gateway." }),

  Q(T_EIP,
    { ca: "Quina opció d'EC2 s'usa per crear una Elastic IP?", es: "¿Qué opción de EC2 se usa para crear una Elastic IP?" },
    [
      { ca: "Create Snapshot", es: "Create Snapshot" },
      { ca: "Allocate Elastic IP", es: "Allocate Elastic IP" },
      { ca: "Launch Instance", es: "Launch Instance" },
      { ca: "Attach Volume", es: "Attach Volume" }
    ], 1,
    { ca: "Es selecciona l'opció Allocate Elastic IP, es deixen els valors per defecte i es crea. Després es pot associar a un recurs.", es: "Se selecciona la opción Allocate Elastic IP, se dejan los valores por defecto y se crea. Después se puede asociar a un recurso." }),

  Q(T_EIP,
    { ca: "Quina acció permet associar una Elastic IP a una instància?", es: "¿Qué acción permite asociar una Elastic IP a una instancia?" },
    [
      { ca: "Actions → Associate Elastic IP Address", es: "Actions → Associate Elastic IP Address" },
      { ca: "Actions → Terminate Instance", es: "Actions → Terminate Instance" },
      { ca: "Actions → Create Image", es: "Actions → Create Image" },
      { ca: "Actions → Attach IAM Role", es: "Actions → Attach IAM Role" }
    ], 0,
    { ca: "Des de la secció de les IP elàstiques se selecciona la IP i es tria Actions → Associate Elastic IP Address per assignar-la a una instància o interfície de xarxa.", es: "Desde la sección de las IP elásticas se selecciona la IP y se elige Actions → Associate Elastic IP Address para asignarla a una instancia o interfaz de red." }),

  Q(T_EIP,
    { ca: "Quan associem una Elastic IP, quina adreça privada es deixa?", es: "Cuando asociamos una Elastic IP, ¿qué dirección privada se deja?" },
    [
      { ca: "Una inventada", es: "Una inventada" },
      { ca: "La que ve per defecte", es: "La que viene por defecto" },
      { ca: "Cap, cal esborrar-la", es: "Ninguna, hay que borrarla" },
      { ca: "La de l'IGW", es: "La del IGW" }
    ], 1,
    { ca: "En associar l'EIP es deixa l'adreça privada que apareix per defecte, corresponent a la instància o interfície de xarxa seleccionada.", es: "Al asociar la EIP se deja la dirección privada que aparece por defecto, correspondiente a la instancia o interfaz de red seleccionada." }),

  Q(T_EIP,
    { ca: "Què cal fer amb una Elastic IP que ja no s'utilitza?", es: "¿Qué hay que hacer con una Elastic IP que ya no se utiliza?" },
    [
      { ca: "Res, no costa res", es: "Nada, no cuesta nada" },
      { ca: "Alliberar-la per a evitar costos innecessaris", es: "Liberarla para evitar costes innecesarios" },
      { ca: "Canviar-li el nom", es: "Cambiarle el nombre" },
      { ca: "Associar-la a un S3", es: "Asociarla a un S3" }
    ], 1,
    { ca: "Com que l'EIP genera cost encara que estiga inactiva, el més recomanable és alliberar-la quan ja no es necessita.", es: "Como la EIP genera coste aunque esté inactiva, lo más recomendable es liberarla cuando ya no se necesita." }),

  Q(T_EIP,
    { ca: "Una IP elàstica pot ser reassociada a un altre recurs si...", es: "¿Una IP elástica puede ser reasociada a otro recurso si..." },
    [
      { ca: "Sempre, sense cap condició", es: "Siempre, sin ninguna condición" },
      { ca: "S'ha marcat l'opció de reassociació en associar-la", es: "Se ha marcado la opción de reasociación al asociarla" },
      { ca: "És una IP privada", es: "Es una IP privada" },
      { ca: "La instància està aturada", es: "La instancia está detenida" }
    ], 1,
    { ca: "En associar la IP es pot marcar l'opció perquè després puga ser reassociada a un altre recurs. Això facilita substituir instàncies mantenint la IP.", es: "Al asociar la IP se puede marcar la opción para que después pueda ser reasociada a otro recurso. Eso facilita sustituir instancias manteniendo la IP." })
);
