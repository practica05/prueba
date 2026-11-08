
// ========================================
// EPA ACADEMY - SISTEMA DE ESTUDIO
// ========================================

const questions = [
{
q:"¿Qué significa EPA?",
a:"Electricidad, Plomería y Albañilería",
o:["Estructura, Pintura y Acabados","Electricidad, Plomería y Albañilería","Empresa de Productos Americanos","Equipo, Precio y Atención"]
},
{
q:"¿Qué significa el escorpión en EPA?",
a:"Resistencia y adaptación. Sus pinzas representan llaves inglesas y el trabajo manual de los clientes para mejorar sus hogares, junto con la frase «Háganlo por ustedes mismos».",
o:["Fuerza, velocidad y competencia","Resistencia y adaptación. Sus pinzas representan llaves inglesas y el trabajo manual de los clientes para mejorar sus hogares, junto con la frase «Háganlo por ustedes mismos».","Protección, seguridad y liderazgo","Trabajo en equipo y responsabilidad"]
},
{
q:"¿Cuáles son los parámetros del surtido?",
a:"Pongo y repongo; de frente y al frente; ordeno lo ordenado; todo tiene su anaquel; garantizo el libre tránsito.",
o:["Pongo y repongo; limpio y despacho; reviso y cobro.","Pongo y repongo; de frente y al frente; ordeno lo ordenado; todo tiene su anaquel; garantizo el libre tránsito.","Ordeno, vendo, cobro y despacho.","Reviso precios, recibo productos y limpio."]
},
{
q:"¿Cuáles son los 6 pasos para la venta?",
a:"Saludo al cliente, exploro sus necesidades, muestro los atributos del producto, vendo proyectos, cierro la venta y me despido.",
o:["Saludo, cobro, facturo, despacho, limpio y me despido.","Saludo al cliente, exploro sus necesidades, muestro los atributos del producto, vendo proyectos, cierro la venta y me despido.","Recibo, ordeno, facturo, cobro, entrego y despido.","Saludo, ofrezco descuentos, cobro, empaco, despacho y agradezco."]
},
{
q:"¿Cuáles son los pilares de la cultura EPA?",
a:"Sonreímos, somos anfitriones y cuidamos nuestra presentación personal.",
o:["Honestidad, igualdad y constancia.","Responsabilidad, puntualidad y compromiso.","Sonreímos, somos anfitriones y cuidamos nuestra presentación personal.","Servicio, precio y calidad."]
},
{
q:"¿Cuáles son los 3 tipos de tarimas?",
a:"EPA, Origen y Cerámica.",
o:["Madera, plástico y metal.","EPA, Origen y Cerámica.","Regular, oferta y liquidación.","Construcción, decoración y ferretería."]
},
{
q:"¿La tarima EPA se coloca en bodega aérea?",
a:"Verdadero",
o:["Falso","Verdadero"]
},
{
q:"¿Qué es barrido?",
a:"Reporte que sale del AS400 o inventario, para saneamiento de área y comparar el kardex con el reporte.",
o:["Un proceso de limpieza de los pasillos.","Reporte que sale del AS400 o inventario, para saneamiento de área y comparar el kardex con el reporte.","Un documento para solicitar mercancía.","Un conteo de las ventas diarias."]
},
{
q:"¿Qué es merma?",
a:"Es la diferencia entre el inventario lógico y físico, determinada por medio de toma física de inventario.",
o:["La cantidad de productos vendidos en un día.","Es la diferencia entre el inventario lógico y físico, determinada por medio de toma física de inventario.","La mercancía que llega a bodega.","El descuento aplicado a los productos."]
},
{
q:"¿Qué significa UFI?",
a:"Unidad Financiera Institucional.",
o:["Unidad Física de Inventario.","Unidad Financiera Institucional.","Unidad de Facturación Interna.","Unidad de Flujo Industrial."]
},
{
q:"¿Cuánto vale 1 UFI en EPA?",
a:"$15",
o:["$10","$12","$15","$20"]
},
{
q:"¿Qué características tienen los artículos de impulso?",
a:"Son artículos de impulso y venta no programada, preferiblemente de dinámica. Deben valer menos de un UFI o igual.",
o:["Son productos de alto costo y venta programada.","Son artículos de impulso y venta no programada, preferiblemente de dinámica. Deben valer menos de un UFI o igual.","Son productos exclusivos de liquidación.","Son artículos cuyo precio siempre supera los $15."]
},
{
q:"¿Cuáles son los tipos de anaqueles?",
a:"Oportunidad, Liquidación y Regular.",
o:["EPA, Origen y Cerámica.","Oportunidad, Liquidación y Regular.","Ferretería, Construcción y Decoración.","Amarillo, azul y blanco."]
},
{
q:"¿Cuáles son los colores de los anaqueles?",
a:"Oportunidad: amarillo y azul. Liquidación: rojo y blanco. Regular: blanco.",
o:["Oportunidad: rojo y blanco. Liquidación: amarillo y azul. Regular: verde.","Oportunidad: amarillo y azul. Liquidación: rojo y blanco. Regular: blanco.","Oportunidad: verde. Liquidación: azul. Regular: amarillo.","Todos son de color blanco."]
},
{
q:"¿Cuáles son los valores de EPA?",
a:"Honestidad, Igualdad y Constancia.",
o:["Respeto, responsabilidad y puntualidad.","Honestidad, Igualdad y Constancia.","Servicio, calidad y precio.","Liderazgo, compromiso y disciplina."]
},
{
q:"¿Cuál es la misión de EPA?",
a:"Ofrecer la mejor opción a nuestros clientes en surtido, precio y servicio en el mercado de la construcción, decoración y remodelación del hogar.",
o:["Ser la red de súper ferreterías líder en Centroamérica.","Ofrecer la mejor opción a nuestros clientes en surtido, precio y servicio en el mercado de la construcción, decoración y remodelación del hogar.","Mejorar cualquier cotización en cualquier forma de pago.","Servir al cliente conectado desde cualquier lugar."]
},
{
q:"¿Cuál es la visión de EPA?",
a:"Ser la red de súper ferreterías líder en satisfacción de los clientes, colaboradores, accionistas, proveedores y comunidades donde operamos.",
o:["Ofrecer los mejores precios del mercado.","Ser la red de súper ferreterías líder en satisfacción de los clientes, colaboradores, accionistas, proveedores y comunidades donde operamos.","Mejores hogares para mejores ciudadanos.","Servir al cliente de manera que nos prefiera."]
},
{
q:"¿Qué es rebaja a cero?",
a:"Proceso por el cual se elimina físicamente y del sistema toda mercancía averiada en tienda no apta para la venta.",
o:["Un descuento del 100% para los clientes.","Proceso por el cual se elimina físicamente y del sistema toda mercancía averiada en tienda no apta para la venta.","Un procedimiento para devolver mercancía al proveedor.","Un ajuste de precios de los productos."]
},
{
q:"¿Qué es un kardex?",
a:"Es un suministro de inventario que se utiliza para el conteo de la mercancía en el área de almacenaje, en el cual se coloca el código interno del producto y su respectiva cantidad.",
o:["Un reporte de las ventas realizadas.","Es un suministro de inventario que se utiliza para el conteo de la mercancía en el área de almacenaje, en el cual se coloca el código interno del producto y su respectiva cantidad.","Una hoja para solicitar vacaciones.","Un documento para realizar compras."]
},
{
q:"¿Cómo se llena un kardex?",
a:"Primero el código del producto, luego la ficha del empleado, después la cantidad existente, nombre del colaborador y fecha de modificación.",
o:["Primero el nombre, luego el precio y finalmente el código.","Primero el código del producto, luego la ficha del empleado, después la cantidad existente, nombre del colaborador y fecha de modificación.","Primero la fecha, luego el precio y la firma del cliente.","Solo se coloca el código y la cantidad."]
},
{
q:"¿Cuáles son los elementos que componen un código de producto EPA?",
a:"14 (Categoría) + 25 (Línea o familia) + 016 (Consecutivo del artículo).",
o:["14 (Consecutivo) + 25 (Categoría) + 016 (Proveedor).","14 (Categoría) + 25 (Línea o familia) + 016 (Consecutivo del artículo).","14 (Proveedor) + 25 (Precio) + 016 (Categoría).","14 (Tienda) + 25 (Pasillo) + 016 (Anaquel)."]
},
{
q:"¿Cómo se llama la hoja de uso interno?",
a:"Predefinitivo",
o:["Kardex","Predefinitivo","Barrido","Comanda"]
},
{
q:"¿Cuáles son los colores del kardex según el área?",
a:"Ferretería: rosado. Construcción: blanco. Remodelación: celeste. Decoración: verde.",
o:["Ferretería: blanco. Construcción: rosado. Remodelación: verde. Decoración: celeste.","Ferretería: rosado. Construcción: blanco. Remodelación: celeste. Decoración: verde.","Ferretería: verde. Construcción: amarillo. Remodelación: blanco. Decoración: rojo.","Todas las áreas utilizan el mismo color."]
},
{
q:"¿Qué significa AST?",
a:"Análisis de Seguridad de Trabajo.",
o:["Área de Servicio Técnico.","Análisis de Seguridad de Trabajo.","Asistencia y Soporte Técnico.","Administración de Seguridad y Tienda."]
},
{
q:"¿Qué características tiene el anaquel de oportunidad?",
a:"Precio anterior, fecha de inicio y finalización de la oferta, y rótulo con fondo amarillo, franja azul y leyenda respectiva.",
o:["Precio anterior, leyenda hasta agotar existencia y colores rojo y blanco.","Precio anterior, fecha de inicio y finalización de la oferta, y rótulo con fondo amarillo, franja azul y leyenda respectiva.","Incluye IVA, código EPA y precio en dólares.","Únicamente muestra el precio actual."]
},
{
q:"¿Qué características tiene el anaquel de liquidación?",
a:"Precio anterior, rótulo blanco y rojo con la leyenda de liquidación y el texto «Hasta agotar existencia».",
o:["Fondo amarillo y franja azul con fecha de inicio y finalización.","Precio anterior, rótulo blanco y rojo con la leyenda de liquidación y el texto «Hasta agotar existencia».","Solo incluye el precio en dólares.","Incluye IVA y unidad de venta."]
},
{
q:"¿Qué información contiene el anaquel de precio regular?",
a:"Incluye IVA, unidad de venta, precio en dólares, descripción del producto, referencia del proveedor, fecha de emisión, última actualización, código EPA y código externo.",
o:["Precio anterior, fechas de oferta y franja azul.","Incluye IVA, unidad de venta, precio en dólares, descripción del producto, referencia del proveedor, fecha de emisión, última actualización, código EPA y código externo.","Precio anterior y leyenda hasta agotar existencia.","Solamente el nombre y precio del producto."]
},
{
q:"¿Cuál es la razón de ser de EPA?",
a:"Mejores hogares para mejores ciudadanos.",
o:["Mejores precios para mejores clientes.","Mejores hogares para mejores ciudadanos.","Mejoramos cualquier cotización.","Servir al cliente de manera que nos prefiera."]
},
{
q:"¿Cuál es la misión de ventas?",
a:"Servir al cliente de manera que nos prefiera.",
o:["Ofrecer el mejor precio del mercado.","Servir al cliente de manera que nos prefiera.","Vender la mayor cantidad de productos.","Mejores hogares para mejores ciudadanos."]
},
{
q:"¿Cuál es la misión de ventas en línea?",
a:"Servir al cliente conectado desde cualquier lugar de manera que nos prefiera.",
o:["Vender productos únicamente por internet.","Servir al cliente conectado desde cualquier lugar de manera que nos prefiera.","Ofrecer descuentos a todos los clientes.","Entregar productos únicamente a domicilio."]
},
{
q:"¿Qué categorías pertenecen al Área 1: Ferretería?",
a:"6 Jardinería, 10 Automotriz, 12 Herramientas Manuales, 14 Herramientas Eléctricas, 16 Electricidad, 18 Ferretería, 19 Cerrajería y 27 Seguridad.",
o:["20 Madera, 21 Puertas, 26 Plomería y 30 Construcción.","6 Jardinería, 10 Automotriz, 12 Herramientas Manuales, 14 Herramientas Eléctricas, 16 Electricidad, 18 Ferretería, 19 Cerrajería y 27 Seguridad.","7 Hogar, 9 Muebles, 22 Pisos y 24 Baños.","2 Pintura, 4 Decoración, 8 Vivero y 15 Iluminación."]
},
{
q:"¿Qué categorías pertenecen al Área 2: Construcción?",
a:"20 Madera, 21 Puertas, 26 Plomería, 28 Materiales Eléctricos y 30 Construcción.",
o:["6 Jardinería, 10 Automotriz y 18 Ferretería.","20 Madera, 21 Puertas, 26 Plomería, 28 Materiales Eléctricos y 30 Construcción.","7 Hogar, 9 Muebles y 22 Pisos.","2 Pintura, 4 Decoración y 8 Vivero."]
},
{
q:"¿Qué categorías pertenecen al Área 3: Remodelación?",
a:"7 Hogar, 9 Muebles, 11 Recipientes, 22 Pisos, 23 Electrodomésticos, 24 Baños y 25 Cocinas.",
o:["2 Pintura, 4 Decoración, 8 Vivero y 15 Iluminación.","7 Hogar, 9 Muebles, 11 Recipientes, 22 Pisos, 23 Electrodomésticos, 24 Baños y 25 Cocinas.","20 Madera, 21 Puertas y 26 Plomería.","6 Jardinería, 10 Automotriz y 19 Cerrajería."]
},
{
q:"¿Qué categorías pertenecen al Área 4: Decoración?",
a:"2 Pintura, 4 Decoración, 8 Vivero y 15 Iluminación.",
o:["7 Hogar, 9 Muebles, 22 Pisos y 24 Baños.","2 Pintura, 4 Decoración, 8 Vivero y 15 Iluminación.","20 Madera, 21 Puertas y 30 Construcción.","6 Jardinería, 10 Automotriz y 18 Ferretería."]
},
{
q:"¿Qué es merchandising?",
a:"Una estrategia de promoción de ventas que, mediante técnicas visuales, pone al cliente en contacto con el producto y su precio, facilitando la compra.",
o:["Un sistema para controlar el inventario.","Una estrategia de promoción de ventas que, mediante técnicas visuales, pone al cliente en contacto con el producto y su precio, facilitando la compra.","Un proceso para trasladar mercancía.","Un documento para realizar cotizaciones."]
},
{
q:"¿Qué es una venta entre tiendas?",
a:"Es el proceso en que se traslada mercancía de una tienda a otra con el propósito de cumplir con las necesidades de compra del cliente.",
o:["Una venta realizada a los empleados.","Es el proceso en que se traslada mercancía de una tienda a otra con el propósito de cumplir con las necesidades de compra del cliente.","Una venta de productos por internet.","Una compra realizada a un proveedor."]
},
{
q:"¿Qué es un pedido especial?",
a:"Es todo producto cuya existencia física y punto de pedido es cero, y cuya solicitud está sujeta a un catálogo donde se especifican sus dimensiones, colores y formas.",
o:["Un producto que siempre está disponible en tienda.","Es todo producto cuya existencia física y punto de pedido es cero, y cuya solicitud está sujeta a un catálogo donde se especifican sus dimensiones, colores y formas.","Un producto que se encuentra en liquidación.","Una compra realizada por un colaborador."]
},
{
q:"¿Cuáles son las condiciones para una venta por volumen?",
a:"Monto total de la venta mayor a 100 UFI y cantidad pedida mayor o igual a dos veces el punto de pedido.",
o:["Monto mayor a 50 UFI y cantidad de un producto.","Monto total de la venta mayor a 100 UFI y cantidad pedida mayor o igual a dos veces el punto de pedido.","Monto menor a 15 UFI y cualquier cantidad.","Monto mayor a 200 UFI sin importar la cantidad."]
},
{
q:"¿Qué son los usos internos?",
a:"Es el proceso a través del cual se solicita mercancía para trabajos de mantenimiento, instalación y mejora en las unidades operativas y oficina central.",
o:["Productos que se venden a los colaboradores.","Es el proceso a través del cual se solicita mercancía para trabajos de mantenimiento, instalación y mejora en las unidades operativas y oficina central.","Mercancía que se traslada entre tiendas.","Productos que se envían a domicilio."]
},
{
q:"¿Qué es la elaboración de cotizaciones?",
a:"Es un documento en el que se detalla el precio de un bien o servicio para el proceso de compra o negociación, solicitado por el cliente para conocer el valor de un pedido.",
o:["Un documento para registrar las horas laborales.","Es un documento en el que se detalla el precio de un bien o servicio para el proceso de compra o negociación, solicitado por el cliente para conocer el valor de un pedido.","Un reporte de inventario.","Una factura de productos vendidos."]
},
{
q:"¿Qué es Retail?",
a:"Consiste en todas las actividades que se relacionan directamente con la comercialización de productos o servicios uniformes a grandes cantidades de clientes.",
o:["Un sistema de almacenamiento.","Consiste en todas las actividades que se relacionan directamente con la comercialización de productos o servicios uniformes a grandes cantidades de clientes.","Un documento de ventas especiales.","Una estrategia de decoración."]
},
{
q:"¿Qué es un planograma?",
a:"Es el esquema de exhibición de la mercancía o acomodo, donde se especifica cómo exhibir el surtido, mobiliario necesario, iluminación y apoyos visuales.",
o:["Un reporte de mercancía dañada.","Es el esquema de exhibición de la mercancía o acomodo, donde se especifica cómo exhibir el surtido, mobiliario necesario, iluminación y apoyos visuales.","Una lista de precios de productos.","Un documento para trasladar productos."]
},
{
q:"¿Al mobiliario se le llama Rack?",
a:"Verdadero",
o:["Falso","Verdadero"]
},
{
q:"¿Cuándo debo elaborar una comanda?",
a:"Cuando el producto no tiene código de barras o viñeta; necesita corte; es pintura preparada; es pesado; es para domicilio o es poliducto para cliente retira.",
o:["Únicamente cuando el cliente paga en efectivo.","Cuando el producto no tiene código de barras o viñeta; necesita corte; es pintura preparada; es pesado; es para domicilio o es poliducto para cliente retira.","Solamente cuando el producto está en oferta.","Cuando el cliente solicita una factura."]
},
{
q:"¿Cuáles son los tipos de entrega de productos?",
a:"Despacho por caja, despacho por construcción, domicilio y cliente retira.",
o:["Despacho por pasillo, bodega, caja y tienda.","Despacho por caja, despacho por construcción, domicilio y cliente retira.","Venta directa, venta especial y venta en línea.","Domicilio, proveedor y liquidación."]
},
{
q:"¿Cuáles son los 3 saberes que componen la competencia?",
a:"El saber, el saber hacer y el saber ser.",
o:["El saber, el saber hacer y el saber ser.","Saber vender, saber comprar y saber cobrar.","Conocimiento, precio y servicio.","Experiencia, liderazgo y puntualidad."]
},
{
q:"¿Cuándo se activa el código Adam?",
a:"Se vocea cuando un menor de edad está perdido o existe indicio de que haya sido sustraído.",
o:["Cuando ocurre un incendio.","Se vocea cuando un menor de edad está perdido o existe indicio de que haya sido sustraído.","Cuando una persona necesita primeros auxilios.","Cuando se detecta mercancía dañada."]
},
{
q:"¿Qué significa el código blanco?",
a:"Es cuando una persona necesita primeros auxilios.",
o:["Cuando hay un incendio.","Cuando un menor está perdido.","Es cuando una persona necesita primeros auxilios.","Cuando se detecta un robo."]
},
{
q:"¿Qué significa el código rojo?",
a:"Contra incendios.",
o:["Primeros auxilios.","Menor de edad perdido.","Contra incendios.","Mercancía dañada."]
},
{
q:"¿Qué es una garantía en EPA?",
a:"Es el servicio que ofrecemos al cliente cuando uno o varios de sus productos facturados presenta fallo en sus condiciones físicas y que impide el uso del producto.",
o:["Un descuento que se ofrece al cliente.","Es el servicio que ofrecemos al cliente cuando uno o varios de sus productos facturados presenta fallo en sus condiciones físicas y que impide el uso del producto.","Un proceso para eliminar mercancía averiada.","Un documento para trasladar mercancía."]
},
{
q:"¿Cuál es el emblema de EPA?",
a:"Mejoramos cualquier cotización en cualquier forma de pago.",
o:["Mejores hogares para mejores ciudadanos.","Servir al cliente conectado desde cualquier lugar.","Mejoramos cualquier cotización en cualquier forma de pago.","La mejor opción en construcción y decoración."]
}
];

// ========================================
// VARIABLES DEL SISTEMA
// ========================================

let currentQuestion = 0;
let currentMode = "study";
let score = 0;
let answers = [];
let seconds = 0;
let timerInterval = null;
let soundEnabled = true;
let finished = false;

const $ = id => document.getElementById(id);

$("totalQuestions").textContent = questions.length;

// ========================================
// SONIDOS
// ========================================

let audioContext;

function playSound(type) {
    if (!soundEnabled) return;

    try {
        audioContext ??= new (window.AudioContext || window.webkitAudioContext)();

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const notes = type === "good"
            ? [523, 659, 784]
            : type === "bad"
            ? [220, 165]
            : type === "finish"
            ? [523, 659, 784, 1046]
            : [440];

        notes.forEach((frequency, index) => {
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();

            oscillator.type = "sine";
            oscillator.frequency.value = frequency;
            gain.gain.setValueAtTime(0.0
