/* Tema: Característiques del núvol */
QUESTIONS.push(
  Q(T_CLOUD_FEAT,
    { ca: "Què significa escalabilitat al núvol?", es: "¿Qué significa escalabilidad en la nube?" },
    [
      { ca: "Els recursos poden créixer o reduir-se automàticament segons les necessitats", es: "Los recursos pueden crecer o reducirse automáticamente según las necesidades" },
      { ca: "Els recursos no poden canviar mai", es: "Los recursos no pueden cambiar nunca" },
      { ca: "Pagar sempre el mateix", es: "Pagar siempre lo mismo" },
      { ca: "Tenir un únic servidor permanent", es: "Tener un único servidor permanente" }
    ], 0,
    { ca: "L'escalabilitat permet que els recursos creixen o es reduïsquen automàticament (per exemple, més servidors si augmenta el trànsit web).", es: "La escalabilidad permite que los recursos crezcan o se reduzcan automáticamente (por ejemplo, más servidores si aumenta el tráfico web)." }),

  Q(T_CLOUD_FEAT,
    { ca: "Quina és la diferència entre escalabilitat vertical i horitzontal?", es: "¿Cuál es la diferencia entre escalabilidad vertical y horizontal?" },
    [
      { ca: "Vertical: afegir més màquines; horitzontal: millorar una màquina", es: "Vertical: añadir más máquinas; horizontal: mejorar una máquina" },
      { ca: "Vertical: millorar una màquina; horitzontal: afegir més màquines", es: "Vertical: mejorar una máquina; horizontal: añadir más máquinas" },
      { ca: "Són exactament igual de diferents", es: "Son exactamente iguales" },
      { ca: "No es poden combinar", es: "No se pueden combinar" }
    ], 1,
    { ca: "Vertical: millorar una màquina; horitzontal: afegir més màquines.", es: "Vertical: mejorar una máquina; horizontal: añadir más máquinas." }),

  Q(T_CLOUD_FEAT,
    { ca: "Què és l'elasticitat al núvol?", es: "¿Qué es la elasticidad en la nube?" },
    [
      { ca: "Capacitat per adaptar-se en temps real a canvis de demanda; sol ser temporal i automàtica", es: "Capacidad para adaptarse en tiempo real a cambios de demanda; suele ser temporal y automática" },
      { ca: "Pagar sempre el mateix", es: "Pagar siempre lo mismo" },
      { ca: "Estar sempre actiu les 24h", es: "Estar siempre activo las 24h" },
      { ca: "Augmentar el preu automàticament", es: "Aumentar el precio automáticamente" }
    ], 0,
    { ca: "L'elasticitat és la capacitat d'adaptar-se en temps real a canvis de demanda; sol ser temporal i automàtica.", es: "La elasticidad es la capacidad de adaptarse en tiempo real a cambios de demanda; suele ser temporal y automática." }),

  Q(T_CLOUD_FEAT,
    { ca: "Què garanteix l'alta disponibilitat?", es: "¿Qué garantiza la alta disponibilidad?" },
    [
      { ca: "Que els serveis es distribueixen entre múltiples ubicacions físiques i continuen funcionant si hi ha fallades", es: "Que los servicios se distribuyen entre múltiples ubicaciones físicas y continúan funcionando si hay fallos" },
      { ca: "Que no hi ha mai errors de programari", es: "Que no hay nunca errores de software" },
      { ca: "Que no cal manteniment", es: "Que no hace falta mantenimiento" },
      { ca: "Que el preu sempre és el mateix", es: "Que el precio siempre es el mismo" }
    ], 0,
    { ca: "L'alta disponibilitat distribueix els serveis entre múltiples ubicacions per garantir que continuen funcionant si hi ha fallades.", es: "La alta disponibilidad distribuye los servicios entre múltiples ubicaciones para garantizar que continúan funcionando si hay fallos." }),

  Q(T_CLOUD_FEAT,
    { ca: "El model de pagament per ús paga per...", es: "El modelo de pago por uso paga por..." },
    [
      { ca: "hores de computació, GB d'emmagatzematge, transferència de dades, etc.", es: "horas de computación, GB de almacenamiento, transferencia de datos, etc." },
      { ca: "Pagant només una quota fixa anual", es: "Pagando solo una cuota fija anual" },
      { ca: "Pagant només quan s'instal·la", es: "Pagando solo cuando se instala" },
      { ca: "Res, sempre és gratis", es: "Nada, siempre es gratis" }
    ], 0,
    { ca: "En el pagament per ús, l'usuari només paga pels recursos utilitzats: hores de computació, GB d'emmagatzematge, transferència de dades, etc.", es: "En el pago por uso, el usuario solo paga por los recursos utilizados: horas de computación, GB de almacenamiento, transferencia de datos, etc." }),

  Q(T_CLOUD_FEAT,
    { ca: "Què significa accés global?", es: "¿Qué significa acceso global?" },
    [
      { ca: "Es pot accedir des de qualsevol lloc del món amb connexió a Internet", es: "Se puede acceder desde cualquier lugar del mundo con conexión a Internet" },
      { ca: "Només es pot accedir des de l'empresa", es: "Solo se puede acceder desde la empresa" },
      { ca: "Només des de dispositius fixos", es: "Solo desde dispositivos fijos" },
      { ca: "Només des d'una regió concreta", es: "Solo desde una región concreta" }
    ], 0,
    { ca: "L'accés global permet usar els recursos des de qualsevol lloc del món amb connexió a Internet.", es: "El acceso global permite usar los recursos desde cualquier lugar del mundo con conexión a Internet." }),

  Q(T_CLOUD_FEAT,
    { ca: "Què implica la gestió delegada al núvol?", es: "¿Qué implica la gestión delegada en la nube?" },
    [
      { ca: "El proveïdor s'encarrega de manteniment, seguretat física, actualitzacions i monitoratge", es: "El proveedor se encarga de mantenimiento, seguridad física, actualizaciones y monitorización" },
      { ca: "L'empresa final gestiona tot", es: "La empresa final gestiona todo" },
      { ca: "Cap proveïdor ho fa", es: "Ningún proveedor lo hace" },
      { ca: "Només es delega la facturació", es: "Solo se delega la facturación" }
    ], 0,
    { ca: "En la gestió delegada, el proveïdor del núvol s'encarrega del manteniment, seguretat física, actualitzacions i monitoratge.", es: "En la gestión delegada, el proveedor de la nube se encarga del mantenimiento, seguridad física, actualizaciones y monitorización." }),

  Q(T_CLOUD_FEAT,
    { ca: "Segons l'exemple de venta d'entrades (Bad Bunny), què va permetre el núvol?", es: "Según el ejemplo de venta de entradas (Bad Bunny), ¿qué permitió la nube?" },
    [
      { ca: "Reducir el tràfic web permanentment", es: "Reducir el tráfico web permanentemente" },
      { ca: "Contractar més capacitat de còmput durant unes hores o dies i després tornar a la normalitat", es: "Contratar más capacidad de cómputo durante unas horas o días y después volver a la normalidad" },
      { ca: "Eliminar les bases de dades", es: "Eliminar las bases de datos" },
      { ca: "No necessitar cap servidor", es: "No necesitar ningún servidor" }
    ], 1,
    { ca: "L'exemple il·lustra que gràcies al núvol es pot contractar més capacitat temporalment quan la demanda creix i tornar després a la normalitat.", es: "El ejemplo ilustra que gracias a la nube se puede contratar más capacidad temporalmente cuando la demanda crece y volver después a la normalidad." }),

  Q(T_CLOUD_FEAT,
    { ca: "Pels altes càrregues temporals, quina característica és més important al núvol?", es: "Para altas cargas temporales, ¿qué característica es más importante en la nube?" },
    [
      { ca: "Escriptori de suport", es: "Escritorio de soporte" },
      { ca: "Elasticitat", es: "Elasticidad" },
      { ca: "Xifrat del disc dur local", es: "Cifrado del disco duro local" },
      { ca: "Maquinari propietat", es: "Hardware propietario" }
    ], 1,
    { ca: "L'elasticitat permet adaptar-se en temps real a canvis de demanda, ideal per a càrregues temporals.", es: "La elasticidad permite adaptarse en tiempo real a cambios de demanda, ideal para cargas temporales." }),

  Q(T_CLOUD_FEAT,
    { ca: "En l'exemple d'una app mòbil, què permet el núvol a l'inici?", es: "En el ejemplo de una app móvil, ¿qué permite la nube al inicio?" },
    [
      { ca: "Començar amb pocs recursos i escalar automàticament si creix el nombre d'usuaris", es: "Comenzar con pocos recursos y escalar automáticamente si crece el número de usuarios" },
      { ca: "Instal·lar tots els servidors en el datacenter propi", es: "Instalar todos los servidores en el datacenter propio" },
      { ca: "Pagar gairebé res sempre", es: "Pagar casi nada siempre" },
      { ca: "Evitar crear cap servidor mai", es: "Evitar crear ningún servidor nunca" }
    ], 0,
    { ca: "En el núvol, es pot començar amb pocs recursos, escalar automàticament si creix l'us dels usuaris i reduir costos automàticament quan acabe la campanya.", es: "En la nube, se puede comenzar con pocos recursos, escalar automáticamente si crece el uso de los usuarios y reducir costos automáticamente cuando acabe la campaña." }),

  Q(T_CLOUD_FEAT,
    { ca: "Una plana web de 2000 persones simultànies pot augmentar la seua capacitat a banda i banda mitjançant què?", es: "Una web de 2000 personas simultáneas puede aumentar su capacidad mediante qué?" },
    [
      { ca: "Buying maquinari personalitzat cada vegada", es: "Comprar hardware personalizado cada vez" },
      { ca: "Escalant el núvol (major o menor capacitat baix demanda)", es: "Escalando en la nube (mayor o menor capacidad bajo demanda)" },
      { ca: "Mirar de contractar més personal", es: "Mirar de contratar más personal" },
      { ca: "Reduir el nombre d'usuaris", es: "Reducir el número de usuarios" }
    ], 1,
    { ca: "El núvol permet augmentar o reduir capacitat segons demanda, gràcies a escalabilitat i elasticitat.", es: "La nube permite aumentar o reducir capacidad según demanda, gracias a escalabilidad y elasticidad." })
);
