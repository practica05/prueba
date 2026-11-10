// EPA ACADEMIA — motor de práctica interactiva
const QUESTIONS = [
  {
    "q": "¿Qué significa EPA?",
    "a": "Electricidad, Plomería y Albañilería",
    "o": [
      "Electricidad, Pintura y Acabados",
      "Electricidad, Plomería y Albañilería",
      "Equipo, Precio y Atención",
      "Empresa de Productos Americanos"
    ]
  },
  {
    "q": "¿Qué representa el escorpión en EPA?",
    "a": "Resistencia y adaptación. Sus pinzas de agarre son llaves inglesas, que representan el trabajo manual de los clientes para mejorar sus hogares y la frase «Háganlo por ustedes mismos».",
    "o": [
      "Fuerza, velocidad y competencia",
      "Resistencia y adaptación. Sus pinzas de agarre son llaves inglesas, que representan el trabajo manual de los clientes para mejorar sus hogares y la frase «Háganlo por ustedes mismos».",
      "Protección, seguridad y liderazgo",
      "Trabajo en equipo y responsabilidad"
    ]
  },
  {
    "q": "¿Cuáles son los parámetros del surtido?",
    "a": "Pongo y repongo; de frente y al frente; ordeno lo ordenado; todo tiene su anaquel; garantizo el libre tránsito.",
    "o": [
      "Pongo y repongo; limpio y despacho; reviso y cobro.",
      "Pongo y repongo; de frente y al frente; ordeno lo ordenado; todo tiene su anaquel; garantizo el libre tránsito.",
      "Ordeno, vendo, cobro y despacho.",
      "Reviso precios, recibo productos y limpio."
    ]
  },
  {
    "q": "¿Cuáles son los 6 pasos para la venta?",
    "a": "Saludo al cliente; exploro sus necesidades; muestro los atributos del producto; vendo proyectos; cierro la venta; me despido.",
    "o": [
      "Saludo, cobro, facturo, despacho, limpio y me despido.",
      "Saludo al cliente; exploro sus necesidades; muestro los atributos del producto; vendo proyectos; cierro la venta; me despido.",
      "Recibo, ordeno, facturo, cobro, entrego y despido.",
      "Saludo, ofrezco descuentos, cobro, empaco, despacho y agradezco."
    ]
  },
  {
    "q": "¿Cuáles son los pilares de la cultura EPA?",
    "a": "Sonreímos, somos anfitriones y cuidamos nuestra presentación personal.",
    "o": [
      "Honradez, igualdad y constancia.",
      "Responsabilidad, puntualidad y compromiso.",
      "Sonreímos, somos anfitriones y cuidamos nuestra presentación personal.",
      "Servicio, precio y calidad."
    ]
  },
  {
    "q": "¿Cuáles son los 3 tipos de tarimas?",
    "a": "EPA, Origen y Cerámica.",
    "o": [
      "Madera, plástico y metal.",
      "EPA, Origen y Cerámica.",
      "Regular, oferta y liquidación.",
      "Construcción, decoración y ferretería."
    ]
  },
  {
    "q": "¿La tarima EPA se coloca en bodega aérea?",
    "a": "Verdadero",
    "o": [
      "Falso",
      "Verdadero"
    ]
  },
  {
    "q": "¿Qué es barrido?",
    "a": "Reporte que sale del AS400 o inventario, para saneamiento de área y comparar el kardex con el reporte.",
    "o": [
      "Un proceso de limpieza de los pasillos.",
      "Reporte que sale del AS400 o inventario, para saneamiento de área y comparar el kardex con el reporte.",
      "Un documento para solicitar mercancía.",
      "Un conteo de las ventas diarias."
    ]
  },
  {
    "q": "¿Qué es merma?",
    "a": "Es la diferencia entre el inventario lógico y físico, determinada por medio de toma física de inventario.",
    "o": [
      "La cantidad de productos vendidos en un día.",
      "Es la diferencia entre el inventario lógico y físico, determinada por medio de toma física de inventario.",
      "La mercancía que llega a bodega.",
      "El descuento aplicado a los productos."
    ]
  },
  {
    "q": "¿Qué significa UFI?",
    "a": "Unidad Financiera Institucional.",
    "o": [
      "Unidad Física de Inventario.",
      "Unidad Financiera Institucional.",
      "Unidad de Facturación Interna.",
      "Unidad de Flujo Industrial."
    ]
  },
  {
    "q": "¿Cuánto vale 1 UFI según el material?",
    "a": "$15",
    "o": [
      "$10",
      "$12",
      "$15",
      "$20"
    ]
  },
  {
    "q": "¿Cómo se describen los artículos de impulso?",
    "a": "Son artículos de impulso y venta no programada, preferiblemente artículos de dinámica.",
    "o": [
      "Son productos de alto costo y venta programada.",
      "Son artículos de impulso y venta no programada, preferiblemente artículos de dinámica.",
      "Son productos exclusivos de liquidación.",
      "Son artículos que siempre superan los $15."
    ]
  },
  {
    "q": "¿Cuánto debe valer un producto de impulso?",
    "a": "Menos de un UFI o igual.",
    "o": [
      "Más de dos UFI.",
      "Exactamente $20.",
      "Menos de un UFI o igual.",
      "No importa su precio."
    ]
  },
  {
    "q": "¿Cuáles son los tipos de anaqueles?",
    "a": "Oportunidad, Liquidación y Regular.",
    "o": [
      "EPA, Origen y Cerámica.",
      "Oportunidad, Liquidación y Regular.",
      "Ferretería, Construcción y Decoración.",
      "Amarillo, azul y blanco."
    ]
  },
  {
    "q": "¿Qué colores identifican los anaqueles de oportunidad, liquidación y regular, respectivamente?",
    "a": "Oportunidad: amarillo y azul; Liquidación: rojo y blanco; Regular: blanco.",
    "o": [
      "Oportunidad: rojo y blanco; Liquidación: amarillo y azul; Regular: verde.",
      "Oportunidad: amarillo y azul; Liquidación: rojo y blanco; Regular: blanco.",
      "Oportunidad: verde; Liquidación: azul; Regular: amarillo.",
      "Todos son de color blanco."
    ]
  },
  {
    "q": "¿Cuáles son los valores de EPA?",
    "a": "Honradez, Igualdad y Constancia.",
    "o": [
      "Respeto, responsabilidad y puntualidad.",
      "Honradez, Igualdad y Constancia.",
      "Servicio, calidad y precio.",
      "Liderazgo, compromiso y disciplina."
    ]
  },
  {
    "q": "¿Cuál es la misión de EPA?",
    "a": "Ofrecer la mejor opción a nuestros clientes en surtido, precio y servicio en el mercado de la construcción, decoración y remodelación del hogar.",
    "o": [
      "Ser la red de súper ferreterías líder en Centroamérica.",
      "Ofrecer la mejor opción a nuestros clientes en surtido, precio y servicio en el mercado de la construcción, decoración y remodelación del hogar.",
      "Mejorar cualquier cotización en cualquier forma de pago.",
      "Servir al cliente conectado desde cualquier lugar."
    ]
  },
  {
    "q": "¿Cuál es la visión de EPA?",
    "a": "Ser la red de súper ferreterías líder en satisfacción de los clientes, colaboradores, accionistas, proveedores y comunidades donde operamos.",
    "o": [
      "Ofrecer los mejores precios del mercado.",
      "Ser la red de súper ferreterías líder en satisfacción de los clientes, colaboradores, accionistas, proveedores y comunidades donde operamos.",
      "Mejores hogares para mejores ciudadanos.",
      "Servir al cliente de manera que nos prefiera."
    ]
  },
  {
    "q": "¿Qué es una rebaja a cero?",
    "a": "Proceso por el cual se elimina físicamente y del sistema toda mercancía averiada en tienda no apta para la venta.",
    "o": [
      "Un descuento del 100% para los clientes.",
      "Proceso por el cual se elimina físicamente y del sistema toda mercancía averiada en tienda no apta para la venta.",
      "Un procedimiento para devolver mercancía al proveedor.",
      "Un ajuste de precios de los productos."
    ]
  },
  {
    "q": "¿Qué es un kardex?",
    "a": "Es un suministro de inventario que se utiliza para el conteo de la mercancía en el área de almacenaje, en el cual se coloca el código interno del producto y su respectiva cantidad.",
    "o": [
      "Un reporte de las ventas realizadas.",
      "Es un suministro de inventario que se utiliza para el conteo de la mercancía en el área de almacenaje, en el cual se coloca el código interno del producto y su respectiva cantidad.",
      "Una hoja para solicitar vacaciones.",
      "Un documento para realizar compras."
    ]
  },
  {
    "q": "¿Cuál es el orden para llenar un kardex?",
    "a": "Código del producto; ficha del empleado; cantidad existente; nombre del colaborador; fecha de modificación.",
    "o": [
      "Nombre, precio, código, fecha y firma del cliente.",
      "Código del producto; ficha del empleado; cantidad existente; nombre del colaborador; fecha de modificación.",
      "Fecha, precio, firma y cantidad.",
      "Solo código y cantidad."
    ]
  },
  {
    "q": "¿Qué elementos componen un código de producto EPA?",
    "a": "14 (Categoría) + 25 (Línea o familia) + 016 (Consecutivo del artículo).",
    "o": [
      "14 (Consecutivo) + 25 (Categoría) + 016 (Proveedor).",
      "14 (Categoría) + 25 (Línea o familia) + 016 (Consecutivo del artículo).",
      "14 (Proveedor) + 25 (Precio) + 016 (Categoría).",
      "14 (Tienda) + 25 (Pasillo) + 016 (Anaquel)."
    ]
  },
  {
    "q": "¿Cómo se llama la hoja de uso interno?",
    "a": "Predefinitivo",
    "o": [
      "Kardex",
      "Predefinitivo",
      "Barrido",
      "Comanda"
    ]
  },
  {
    "q": "¿Qué colores corresponden al kardex de cada área?",
    "a": "Ferretería: rosado; Construcción: blanco; Remodelación: celeste; Decoración: verde.",
    "o": [
      "Ferretería: blanco; Construcción: rosado; Remodelación: verde; Decoración: celeste.",
      "Ferretería: rosado; Construcción: blanco; Remodelación: celeste; Decoración: verde.",
      "Ferretería: verde; Construcción: amarillo; Remodelación: blanco; Decoración: rojo.",
      "Todas las áreas utilizan el mismo color."
    ]
  },
  {
    "q": "¿Qué significa AST?",
    "a": "Análisis de Seguridad de Trabajo.",
    "o": [
      "Área de Servicio Técnico.",
      "Análisis de Seguridad de Trabajo.",
      "Asistencia y Soporte Técnico.",
      "Administración de Seguridad y Tienda."
    ]
  },
  {
    "q": "¿Qué información identifica el anaquel de precio oferta u oportunidad?",
    "a": "Precio anterior; fecha de inicio y finalización de la oferta; rótulo con fondo amarillo, franja azul y leyenda respectiva.",
    "o": [
      "Precio anterior; leyenda «Hasta agotar existencia»; rótulo rojo y blanco.",
      "Precio anterior; fecha de inicio y finalización de la oferta; rótulo con fondo amarillo, franja azul y leyenda respectiva.",
      "Incluye IVA, código EPA y precio en dólares.",
      "Únicamente muestra el precio actual."
    ]
  },
  {
    "q": "¿Qué características tiene el anaquel de precio liquidación?",
    "a": "Precio anterior; rótulo blanco y rojo con la leyenda de liquidación; texto «Hasta agotar existencia».",
    "o": [
      "Fondo amarillo y franja azul con fechas de oferta.",
      "Precio anterior; rótulo blanco y rojo con la leyenda de liquidación; texto «Hasta agotar existencia».",
      "Solo incluye el precio en dólares.",
      "Incluye IVA y unidad de venta."
    ]
  },
  {
    "q": "¿Qué información contiene el anaquel de precio regular o común?",
    "a": "Incluye IVA, unidad de venta, precio en dólar, descripción del producto, referencia del proveedor, fecha de emisión, última actualización, código EPA y código externo.",
    "o": [
      "Precio anterior, fechas de oferta y franja azul.",
      "Incluye IVA, unidad de venta, precio en dólar, descripción del producto, referencia del proveedor, fecha de emisión, última actualización, código EPA y código externo.",
      "Precio anterior y leyenda «Hasta agotar existencia».",
      "Solamente el nombre y precio del producto."
    ]
  },
  {
    "q": "¿Cuál es la razón de ser de EPA?",
    "a": "Mejores hogares para mejores ciudadanos.",
    "o": [
      "Mejores precios para mejores clientes.",
      "Mejores hogares para mejores ciudadanos.",
      "Mejoramos cualquier cotización.",
      "Servir al cliente de manera que nos prefiera."
    ]
  },
  {
    "q": "¿Cuál es la misión de ventas?",
    "a": "Servir al cliente de manera que nos prefiera.",
    "o": [
      "Ofrecer el mejor precio del mercado.",
      "Servir al cliente de manera que nos prefiera.",
      "Vender la mayor cantidad de productos.",
      "Mejores hogares para mejores ciudadanos."
    ]
  },
  {
    "q": "¿Cuál es la misión de ventas en línea?",
    "a": "Servir al cliente conectado desde cualquier lugar de manera que nos prefiera.",
    "o": [
      "Vender productos únicamente por internet.",
      "Servir al cliente conectado desde cualquier lugar de manera que nos prefiera.",
      "Ofrecer descuentos a todos los clientes.",
      "Entregar productos únicamente a domicilio."
    ]
  },
  {
    "q": "¿Qué categorías pertenecen al Área 1: Ferretería?",
    "a": "6 Jardinería; 10 Automotriz; 12 Herramientas Manuales; 14 Herramientas Eléctricas; 16 Electricidad; 18 Ferretería; 19 Cerrajería; 27 Seguridad.",
    "o": [
      "20 Madera; 21 Puertas; 26 Plomería; 30 Construcción.",
      "6 Jardinería; 10 Automotriz; 12 Herramientas Manuales; 14 Herramientas Eléctricas; 16 Electricidad; 18 Ferretería; 19 Cerrajería; 27 Seguridad.",
      "7 Hogar; 9 Muebles; 22 Pisos; 24 Baños.",
      "2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación."
    ]
  },
  {
    "q": "¿Qué categorías pertenecen al Área 2: Construcción?",
    "a": "20 Madera; 21 Puertas; 26 Plomería; 28 Materiales Eléctricos; 30 Construcción.",
    "o": [
      "6 Jardinería; 10 Automotriz; 18 Ferretería.",
      "20 Madera; 21 Puertas; 26 Plomería; 28 Materiales Eléctricos; 30 Construcción.",
      "7 Hogar; 9 Muebles; 22 Pisos.",
      "2 Pintura; 4 Decoración; 8 Vivero."
    ]
  },
  {
    "q": "¿Qué categorías pertenecen al Área 3: Remodelación?",
    "a": "7 Hogar; 9 Muebles; 11 Recipientes; 22 Pisos; 23 Electrodomésticos; 24 Baños; 25 Cocinas.",
    "o": [
      "2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.",
      "7 Hogar; 9 Muebles; 11 Recipientes; 22 Pisos; 23 Electrodomésticos; 24 Baños; 25 Cocinas.",
      "20 Madera; 21 Puertas; 26 Plomería.",
      "6 Jardinería; 10 Automotriz; 19 Cerrajería."
    ]
  },
  {
    "q": "¿Qué categorías pertenecen al Área 4: Decoración?",
    "a": "2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.",
    "o": [
      "7 Hogar; 9 Muebles; 22 Pisos; 24 Baños.",
      "2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.",
      "20 Madera; 21 Puertas; 30 Construcción.",
      "6 Jardinería; 10 Automotriz; 18 Ferretería."
    ]
  },
  {
    "q": "¿Qué es merchandising?",
    "a": "Una estrategia de promoción de ventas que, mediante técnicas visuales, pone al cliente en contacto con el producto y su precio, facilitando la compra.",
    "o": [
      "Un sistema para controlar el inventario.",
      "Una estrategia de promoción de ventas que, mediante técnicas visuales, pone al cliente en contacto con el producto y su precio, facilitando la compra.",
      "Un proceso para trasladar mercancía.",
      "Un documento para realizar cotizaciones."
    ]
  },
  {
    "q": "¿Qué es una venta entre tiendas?",
    "a": "Es el proceso en que se traslada mercancía de una tienda a otra con el propósito de cumplir con las necesidades de compra del cliente.",
    "o": [
      "Una venta realizada a los empleados.",
      "Es el proceso en que se traslada mercancía de una tienda a otra con el propósito de cumplir con las necesidades de compra del cliente.",
      "Una venta de productos por internet.",
      "Una compra realizada a un proveedor."
    ]
  },
  {
    "q": "¿Qué es un pedido especial?",
    "a": "Es todo producto cuya existencia física y punto de pedido es cero, y cuya solicitud está sujeta a un catálogo donde se especifican sus dimensiones, colores y formas.",
    "o": [
      "Un producto que siempre está disponible en tienda.",
      "Es todo producto cuya existencia física y punto de pedido es cero, y cuya solicitud está sujeta a un catálogo donde se especifican sus dimensiones, colores y formas.",
      "Un producto que se encuentra en liquidación.",
      "Una compra realizada por un colaborador."
    ]
  },
  {
    "q": "¿Cuáles son las condiciones para una venta por volumen?",
    "a": "Monto total de la venta mayor a 100 UFI y cantidad pedida mayor o igual a dos veces el punto de pedido.",
    "o": [
      "Monto mayor a 50 UFI y cantidad de un producto.",
      "Monto total de la venta mayor a 100 UFI y cantidad pedida mayor o igual a dos veces el punto de pedido.",
      "Monto menor a 15 UFI y cualquier cantidad.",
      "Monto mayor a 200 UFI sin importar la cantidad."
    ]
  },
  {
    "q": "¿Qué son los usos internos?",
    "a": "Es el proceso a través del cual se solicita mercancía para trabajos de mantenimiento, instalación y mejora en las unidades operativas y oficina central.",
    "o": [
      "Productos que se venden a los colaboradores.",
      "Es el proceso a través del cual se solicita mercancía para trabajos de mantenimiento, instalación y mejora en las unidades operativas y oficina central.",
      "Mercancía que se traslada entre tiendas.",
      "Productos que se envían a domicilio."
    ]
  },
  {
    "q": "¿Qué es la elaboración de cotizaciones?",
    "a": "Es un documento en el que se detalla el precio de un bien o servicio para el proceso de compra o negociación, solicitado por el cliente para conocer el valor de un pedido de mercancía.",
    "o": [
      "Un documento para registrar las horas laborales.",
      "Es un documento en el que se detalla el precio de un bien o servicio para el proceso de compra o negociación, solicitado por el cliente para conocer el valor de un pedido de mercancía.",
      "Un reporte de inventario.",
      "Una factura de productos vendidos."
    ]
  },
  {
    "q": "¿Qué es Retail?",
    "a": "Consiste en todas las actividades que se relacionan directamente con la comercialización de productos o servicios uniformes a grandes cantidades de clientes.",
    "o": [
      "Un sistema de almacenamiento.",
      "Consiste en todas las actividades que se relacionan directamente con la comercialización de productos o servicios uniformes a grandes cantidades de clientes.",
      "Un documento de ventas especiales.",
      "Una estrategia de decoración."
    ]
  },
  {
    "q": "¿Qué es un planograma?",
    "a": "Es el esquema de exhibición de la mercancía o acomodo; especifica cómo exhibir el surtido, mobiliario necesario, iluminación y apoyos visuales.",
    "o": [
      "Un reporte de mercancía dañada.",
      "Es el esquema de exhibición de la mercancía o acomodo; especifica cómo exhibir el surtido, mobiliario necesario, iluminación y apoyos visuales.",
      "Una lista de precios de productos.",
      "Un documento para trasladar productos."
    ]
  },
  {
    "q": "¿Al mobiliario de exhibición se le llama Rack?",
    "a": "Verdadero",
    "o": [
      "Falso",
      "Verdadero"
    ]
  },
  {
    "q": "¿Cuándo se debe elaborar una comanda?",
    "a": "Cuando el producto no tiene código de barras o viñeta; necesita corte; es pintura preparada; es pesado; es para domicilio; o es poliducto para cliente retira.",
    "o": [
      "Únicamente cuando el cliente paga en efectivo.",
      "Cuando el producto no tiene código de barras o viñeta; necesita corte; es pintura preparada; es pesado; es para domicilio; o es poliducto para cliente retira.",
      "Solamente cuando el producto está en oferta.",
      "Cuando el cliente solicita una factura."
    ]
  },
  {
    "q": "¿Cuáles son los tipos de entrega de productos?",
    "a": "Despacho por caja, despacho por Construcción, domicilio y cliente retira.",
    "o": [
      "Despacho por pasillo, bodega, caja y tienda.",
      "Despacho por caja, despacho por Construcción, domicilio y cliente retira.",
      "Venta directa, venta especial y venta en línea.",
      "Domicilio, proveedor y liquidación."
    ]
  },
  {
    "q": "¿Cuáles son los 3 saberes que componen la competencia?",
    "a": "El saber, el saber hacer y el saber ser.",
    "o": [
      "El saber, el saber hacer y el saber ser.",
      "Saber vender, saber comprar y saber cobrar.",
      "Conocimiento, precio y servicio.",
      "Experiencia, liderazgo y puntualidad."
    ]
  },
  {
    "q": "¿Cuándo se vocea el código Adam?",
    "a": "Cuando un menor de edad está perdido o existe indicio de que haya sido sustraído.",
    "o": [
      "Cuando ocurre un incendio.",
      "Cuando un menor de edad está perdido o existe indicio de que haya sido sustraído.",
      "Cuando una persona necesita primeros auxilios.",
      "Cuando se detecta mercancía dañada."
    ]
  },
  {
    "q": "¿Qué significa el código blanco?",
    "a": "Es cuando una persona necesita primeros auxilios.",
    "o": [
      "Cuando hay un incendio.",
      "Cuando un menor está perdido.",
      "Es cuando una persona necesita primeros auxilios.",
      "Cuando se detecta un robo."
    ]
  },
  {
    "q": "¿Qué significa el código rojo?",
    "a": "Contra incendios.",
    "o": [
      "Primeros auxilios.",
      "Menor de edad perdido.",
      "Contra incendios.",
      "Mercancía dañada."
    ]
  },
  {
    "q": "¿Qué es una garantía en EPA?",
    "a": "Es el servicio que ofrecemos al cliente cuando uno o varios de sus productos facturados presenta fallo en sus condiciones físicas y que impide el uso del producto.",
    "o": [
      "Un descuento que se ofrece al cliente.",
      "Es el servicio que ofrecemos al cliente cuando uno o varios de sus productos facturados presenta fallo en sus condiciones físicas y que impide el uso del producto.",
      "Un proceso para eliminar mercancía averiada.",
      "Un documento para trasladar mercancía."
    ]
  },
  {
    "q": "¿Cuál es el emblema de EPA?",
    "a": "Mejoramos cualquier cotización en cualquier forma de pago.",
    "o": [
      "Mejores hogares para mejores ciudadanos.",
      "Servir al cliente conectado desde cualquier lugar.",
      "Mejoramos cualquier cotización en cualquier forma de pago.",
      "La mejor opción en construcción y decoración."
    ]
  }
];

const $ = (id) => document.getElementById(id);
const state = { mode: "study", questions: [], index: 0, answers: [], startedAt: 0, elapsed: 0, timerId: null, examSeconds: 0, selected: false, sound: true, lastRun: null };
const letters = ["A", "B", "C", "D"];
let audioCtx = null;

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.max(0, seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
function beep(type) {
  if (!state.sound) return;
  try {
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.type = "sine";
    osc.frequency.value = type === "good" ? 660 : type === "bad" ? 190 : 480;
    gain.gain.setValueAtTime(.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.12, audioCtx.currentTime + .015);
    gain.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + .22);
    osc.start(); osc.stop(audioCtx.currentTime + .23);
  } catch (_) {}
}
function showToast(message) {
  const toast = $("toast"); toast.textContent = message; toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}
function setMode(mode) {
  state.mode = mode;
  $("studyMode").classList.toggle("active", mode === "study");
  $("examMode").classList.toggle("active", mode === "exam");
  $("timerField").style.opacity = mode === "exam" ? "1" : ".45";
}
function startSession() {
  const limit = $("questionLimit").value;
  let pool = $("questionOrder").value === "random" ? shuffle(QUESTIONS) : [...QUESTIONS];
  if (limit !== "all") pool = pool.slice(0, Number(limit));
  state.questions = pool.map(q => ({...q, options: shuffle(q.o)}));
  state.index = 0; state.answers = []; state.selected = false; state.elapsed = 0;
  state.startedAt = Date.now();
  state.examSeconds = state.mode === "exam" ? Number($("examMinutes").value) * 60 : 0;
  $("dashboard").classList.add("hidden");
  $("quizPanel").classList.remove("hidden"); $("resultPanel").classList.add("hidden");
  $("quizModeLabel").textContent = state.mode === "study" ? "MODO ESTUDIO" : "MODO EXAMEN";
  $("timerPill").classList.toggle("hidden", state.mode === "study");
  $("nextBtn").textContent = "Siguiente →";
  renderQuestion(); updateTimer();
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
    updateTimer();
    if (state.mode === "exam") {
      state.examSeconds--;
      $("timerText").textContent = formatTime(state.examSeconds);
      if (state.examSeconds <= 0) finishSession(true);
    }
  }, 1000);
}
function updateTimer() {
  $("statTime").textContent = formatTime(state.elapsed);
  if (state.mode === "exam") $("timerText").textContent = formatTime(state.examSeconds);
}
function renderQuestion() {
  const q = state.questions[state.index];
  state.selected = false;
  $("questionNumber").textContent = `PREGUNTA ${String(state.index + 1).padStart(2, "0")}`;
  $("questionText").textContent = q.q;
  $("progressText").textContent = `Pregunta ${state.index + 1} de ${state.questions.length}`;
  const pct = Math.round(state.index / state.questions.length * 100);
  $("progressPercent").textContent = `${pct}%`; $("progressFill").style.width = `${pct}%`;
  $("answerList").innerHTML = "";
  $("feedback").className = "feedback hidden"; $("feedback").textContent = "";
  $("nextBtn").disabled = true;
  $("nextBtn").innerHTML = state.index === state.questions.length - 1 ? 'Finalizar <span>✓</span>' : 'Siguiente <span>→</span>';
  q.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    const letter = document.createElement("span"); letter.className = "answer-letter"; letter.textContent = letters[i];
    const text = document.createElement("span"); text.textContent = option;
    button.append(letter, text); button.addEventListener("click", () => chooseAnswer(option, button));
    $("answerList").appendChild(button);
  });
}
function chooseAnswer(option, button) {
  if (state.selected) return;
  state.selected = true;
  const q = state.questions[state.index], correct = option === q.a;
  state.answers[state.index] = { question: q.q, chosen: option, correct: q.a, isCorrect: correct };
  const buttons = [...$("answerList").querySelectorAll("button")];
  buttons.forEach(b => {
    b.disabled = true;
    if (b.querySelector("span:last-child").textContent === q.a) b.classList.add("correct");
  });
  if (!correct) button.classList.add("incorrect");
  $("statQuestions").textContent = state.questions.length;
  $("statCorrect").textContent = state.answers.filter(a => a && a.isCorrect).length;
  document.body.classList.remove("flash-good", "flash-bad");
  void document.body.offsetWidth;
  document.body.classList.add(correct ? "flash-good" : "flash-bad");
  setTimeout(() => document.body.classList.remove("flash-good", "flash-bad"), 600);
  beep(correct ? "good" : "bad");
  if (state.mode === "study") {
    const feedback = $("feedback");
    feedback.className = `feedback ${correct ? "good" : "bad"}`;
    feedback.textContent = correct ? "¡Correcto! Muy bien, sigue así." : `No es correcto. La respuesta correcta es: ${q.a}`;
    if (!correct) $("questionText").classList.add("shake");
    setTimeout(() => $("questionText").classList.remove("shake"), 400);
  }
  $("nextBtn").disabled = false;
  if (state.mode === "exam") $("feedback").classList.add("hidden");
}
function nextQuestion() {
  if (!state.selected) return;
  if (state.index < state.questions.length - 1) {
    state.index++; renderQuestion();
  } else finishSession(false);
}
function finishSession(timeUp = false) {
  clearInterval(state.timerId);
  state.elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  const correct = state.answers.filter(a => a && a.isCorrect).length;
  const total = state.questions.length, wrong = total - correct, pct = Math.round(correct / total * 100);
  $("quizPanel").classList.add("hidden"); $("resultPanel").classList.remove("hidden");
  $("resultIcon").textContent = pct >= 80 ? "🏆" : pct >= 60 ? "🌟" : "💪";
  $("resultTitle").textContent = pct >= 80 ? "¡Excelente trabajo!" : pct >= 60 ? "¡Vas por buen camino!" : "¡Sigue practicando!";
  $("resultMessage").textContent = timeUp ? "El tiempo terminó. Aquí tienes el resumen de tu examen." : "Has completado tu sesión de estudio.";
  $("scoreValue").textContent = `${pct}%`;
  $("scoreRing").style.background = `conic-gradient(var(--green) ${pct * 3.6}deg, #26354a 0deg)`;
  $("resultCorrect").textContent = correct; $("resultWrong").textContent = wrong; $("resultTime").textContent = formatTime(state.elapsed);
  $("reviewCount").textContent = `${total} preguntas`;
  $("reviewList").innerHTML = "";
  state.questions.forEach((q, i) => {
    const a = state.answers[i];
    const item = document.createElement("div"); item.className = "review-item";
    const title = document.createElement("strong"); title.textContent = `${i + 1}. ${q.q}`;
    const answer = document.createElement("div"); answer.className = "review-answer"; answer.textContent = `Correcta: ${q.a}`;
    item.append(title, answer);
    if (a && !a.isCorrect) {
      const chosen = document.createElement("div"); chosen.className = "review-user"; chosen.textContent = `Tu respuesta: ${a.chosen}`;
      item.appendChild(chosen);
    } else if (!a) {
      const missed = document.createElement("div"); missed.className = "review-user"; missed.textContent = "Sin responder"; item.appendChild(missed);
    }
    $("reviewList").appendChild(item);
  });
  $("statQuestions").textContent = total; $("statCorrect").textContent = correct; $("statTime").textContent = formatTime(state.elapsed);
  state.lastRun = {correct, total};
}
function returnHome() {
  clearInterval(state.timerId);
  $("quizPanel").classList.add("hidden"); $("resultPanel").classList.add("hidden"); $("dashboard").classList.remove("hidden");
}
$("studyMode").addEventListener("click", () => setMode("study"));
$("examMode").addEventListener("click", () => setMode("exam"));
$("startBtn").addEventListener("click", startSession);
$("nextBtn").addEventListener("click", nextQuestion);
$("exitBtn").addEventListener("click", () => { if (confirm("¿Quieres salir de esta práctica? Se perderá el avance de esta sesión.")) returnHome(); });
$("homeBtn").addEventListener("click", returnHome);
$("retryBtn").addEventListener("click", startSession);
$("soundToggle").addEventListener("click", () => {
  state.sound = !state.sound; $("soundIcon").textContent = state.sound ? "♫" : "♪";
  $("soundToggle").style.opacity = state.sound ? "1" : ".5";
  showToast(state.sound ? "Sonidos activados" : "Sonidos desactivados");
  if (state.sound) beep("tap");
});
$("statQuestions").textContent = "—";
$("totalBadge").textContent = `${QUESTIONS.length} preguntas disponibles`;
setMode("study");
