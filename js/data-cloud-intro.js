/* Tema: Què és el núvol i el model on-premise */
QUESTIONS.push(
  Q(T_CLOUD_INTRO,
    { ca: "Què és la computació al núvol (cloud computing)?", es: "¿Qué es la computación en la nube (cloud computing)?" },
    [
      { ca: "La distribució de serveis informàtics a través d'Internet", es: "La distribución de servicios informáticos a través de Internet" },
      { ca: "Un model d'infraestructura propietat de l'empresa", es: "Un modelo de infraestructura propiedad de la empresa" },
      { ca: "Un tipus de programari d'ofimàtica", es: "Un tipo de software de ofimática" },
      { ca: "Una base de dades instal·lada localment", es: "Una base de datos instalada localmente" }
    ], 0,
    { ca: "El cloud computing és la distribució de serveis informàtics a través d'Internet: servidors, emmagatzematge, bases de dades, xarxes, programari, anàlisi i molt més.", es: "El cloud computing es la distribución de servicios informáticos a través de Internet: servidores, almacenamiento, bases de datos, redes, software, análisis y mucho más." }),

  Q(T_CLOUD_INTRO,
    { ca: "Com es paga al núvol segons el material del curs?", es: "¿Cómo se paga en la nube según el material del curso?" },
    [
      { ca: "Pagant una llicència anual fixa", es: "Pagando una licencia anual fija" },
      { ca: "Només per allò que s'utilitza, com una factura d'aigua o electricitat", es: "Solo por lo que se utiliza, como una factura de agua o electricidad" },
      { ca: "Pagant una quota una única vegada", es: "Pagando una cuota una única vez" },
      { ca: "No es paga res mai", es: "No se paga nada nunca" }
    ], 1,
    { ca: "Permet accedir als recursos de manera remota, sota demanda i pagant només pel que s'utilitza.", es: "Permite acceder a los recursos de manera remota, bajo demanda y pagando solo por lo que se utiliza." }),

  Q(T_CLOUD_INTRO,
    { ca: "Què ha de fer una empresa en un model tradicional (on-premise)?", es: "¿Qué debe hacer una empresa en un modelo tradicional (on-premise)?" },
    [
      { ca: "Comprar maquinari i llicències de programari", es: "Comprar hardware y licencias de software" },
      { ca: "Només pagar quan consumeix serveis", es: "Solo pagar cuando consume servicios" },
      { ca: " subcontractar tot a terceres empreses", es: "Contratar todo a terceras empresas" },
      { ca: "No gestionar manteniment", es: "No gestionar mantenimiento" }
    ], 0,
    { ca: "En el model tradicional, l'empresa ha de comprar maquinari i llicències, instal·lar i configurar servidors, gestionar el manteniment físic i assumir costos inicials elevats.", es: "En el modelo tradicional, la empresa debe comprar hardware y licencias, instalar y configurar servidores, gestionar el mantenimiento físico y asumir costos iniciales elevados." }),

  Q(T_CLOUD_INTRO,
    { ca: "Com s'utilitzen els recursos al núvol?", es: "¿Cómo se utilizan los recursos en la nube?" },
    [
      { ca: "Com un servei, com si foren llogats", es: "Como un servicio, como si fueran alquilados" },
      { ca: "Como recursos propietat exclusiva", es: "Como recursos propiedad exclusiva" },
      { ca: "Només presencialment", es: "Solo presencialmente" },
      { ca: "Mitjançant xarxes locals privades", es: "Mediante redes locales privadas" }
    ], 0,
    { ca: "Amb el núvol, els recursos s'utilitzen com un servei, com si foren llogats.", es: "Con la nube, los recursos se utilizan como un servicio, como si fueran alquilados." }),

  Q(T_CLOUD_INTRO,
    { ca: "Quina necessitat s'elimina amb el núvol?", es: "¿Qué necesidad se elimina con la nube?" },
    [
      { ca: "La necessitat de manteniment físic", es: "La necesidad de mantenimiento físico" },
      { ca: "La necessitat de seguretat", es: "La necesidad de seguridad" },
      { ca: "La necessitat de programari", es: "La necesidad de software" },
      { ca: "La necessitat de connexió a Internet", es: "La necesidad de conexión a Internet" }
    ], 0,
    { ca: "Amb el núvol s'elimina la necessitat de manteniment físic.", es: "Con la nube se elimina la necesidad de mantenimiento físico." }),

  Q(T_CLOUD_INTRO,
    { ca: "Quina és una característica dels costos en el model on-premise?", es: "¿Cuál es una característica de los costos en el modelo on-premise?" },
    [
      { ca: "Costos inicials elevats", es: "Costos iniciales elevados" },
      { ca: "Es paga només per l'ús", es: "Se paga solo por el uso" },
      { ca: "Cap cost inicial", es: "Ningún costo inicial" },
      { ca: "Costos sempre variables", es: "Costos siempre variables" }
    ], 0,
    { ca: "El model on-premise implica assumir costos inicials elevats.", es: "El modelo on-premise implica asumir costos iniciales elevados." }),

  Q(T_CLOUD_INTRO,
    { ca: "En el model on-premise, de què s'encarrega l'empresa?", es: "En el modelo on-premise, ¿de qué se encarga la empresa?" },
    [
      { ca: "Gestionar el manteniment físic i actualitzacions", es: "Gestionar el mantenimiento físico y actualizaciones" },
      { ca: "Només dels usuaris", es: "Solo de los usuarios" },
      { ca: "Res, tot el gestiona AWS", es: "Nada, todo lo gestiona AWS" },
      { ca: "Només de la connexió a Internet", es: "Solo de la conexión a Internet" }
    ], 0,
    { ca: "En el model tradicional, l'empresa gestiona el manteniment físic i les actualitzacions.", es: "En el modelo tradicional, la empresa gestiona el mantenimiento físico y las actualizaciones." }),

  Q(T_CLOUD_INTRO,
    { ca: "Què va canviar la tecnologia cloud a les empreses?", es: "¿Qué cambió la tecnología cloud en las empresas?" },
    [
      { ca: "Rés, continua igual que abans", es: "Nada, continúa igual que antes" },
      { ca: "La manera com desenvolupen, despleguen i mantenen les seues aplicacions", es: "La manera como desarrollan, despliegan y mantienen sus aplicaciones" },
      { ca: "El preu de l'electricitat", es: "El precio de la electricidad" },
      { ca: "Només el disseny gràfic", es: "Solo el diseño gráfico" }
    ], 1,
    { ca: "El cloud ha canviat la manera com les empreses desenvolupen, despleguen i mantenen les seues aplicacions.", es: "El cloud ha cambiado la manera como las empresas desarrollan, despliegan y mantienen sus aplicaciones." }),

  Q(T_CLOUD_INTRO,
    { ca: "Com s'utilitzen els recursos al núvol pel que fa a la disponibilitat?", es: "¿Cómo se utilizan los recursos en la nube en cuanto a disponibilidad?" },
    [
      { ca: "De manera remota i sota demanda", es: "De manera remota y bajo demanda" },
      { ca: "Només cada vegada factura anual", es: "Solo cada vez una factura anual" },
      { ca: "Els recursos no es paquen", es: "Los recursos no se pagan" },
      { ca: "Sempre preinstal·lats al PC", es: "Siempre preinstalados en el PC" }
    ], 0,
    { ca: "El cloud permet accedir als recursos de manera remota i sota demanda.", es: "El cloud permite acceder a los recursos de manera remota y bajo demanda." }),

  Q(T_CLOUD_INTRO,
    { ca: "Què ofereix el núvol respecte a la infraestructura física?", es: "¿Qué ofrece la nube respecto a la infraestructura física?" },
    [
      { ca: "Infraestructura sense manteniment del proveïdor", es: "Infraestructura sin mantenimiento del proveedor" },
      { ca: "Serveis informàtics distribuïts via Internet", es: "Servicios informáticos distribuidos vía Internet" },
      { ca: "Servidors sempre físics a l'oficina", es: "Servidores siempre físicos en la oficina" },
      { ca: "Només servidor web", es: "Solo servidor web" }
    ], 1,
    { ca: "El cloud computing ofereix serveis informàtics (servidors, emmagatzematge, bases de dades, xarxes, programari) a través d'Internet.", es: "El cloud computing ofrece servicios informáticos (servidores, almacenamiento, bases de datos, redes, software) a través de Internet." })
);
