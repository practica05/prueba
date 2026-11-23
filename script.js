
const QUESTIONS = [
["¿Qué significa EPA?","Electricidad, Plomería y Albañilería","Electricidad, Pintura y Acabados","Equipo, Precio y Atención","Empresa de Productos Americanos"],
["¿Qué representa el escorpión en EPA?","Resistencia y adaptación. Sus pinzas de agarre son llaves inglesas, que representan el trabajo manual de los clientes para mejorar sus hogares y la frase «Háganlo por ustedes mismos».","Fuerza, velocidad y competencia","Protección, seguridad y liderazgo","Trabajo en equipo y responsabilidad"],
["¿Cuáles son los parámetros del surtido?","Pongo y repongo; de frente y al frente; ordeno lo ordenado; todo tiene su anaquel; garantizo el libre tránsito.","Pongo y repongo; limpio y despacho; reviso y cobro.","Ordeno, vendo, cobro y despacho.","Reviso precios, recibo productos y limpio."],
["¿Cuáles son los 6 pasos para la venta?","Saludo al cliente; exploro sus necesidades; muestro los atributos del producto; vendo proyectos; cierro la venta; me despido.","Saludo, cobro, facturo, despacho, limpio y me despido.","Recibo, ordeno, facturo, cobro, entrego y despido.","Saludo, ofrezco descuentos, cobro, empaco, despacho y agradezco."],
["¿Cuáles son los pilares de la cultura EPA?","Sonreímos, somos anfitriones y cuidamos nuestra presentación personal.","Honradez, igualdad y constancia.","Responsabilidad, puntualidad y compromiso.","Servicio, precio y calidad."],
["¿Cuáles son los 3 tipos de tarimas?","EPA, Origen y Cerámica.","Madera, plástico y metal.","Regular, oferta y liquidación.","Construcción, decoración y ferretería."],
["¿La tarima EPA se coloca en bodega aérea?","Verdadero","Falso","No aplica","Solo algunas veces"],
["¿Qué es barrido?","Reporte que sale del AS400 o inventario, para saneamiento de área y comparar el kardex con el reporte.","Un proceso de limpieza de los pasillos.","Un documento para solicitar mercancía.","Un conteo de las ventas diarias."],
["¿Qué es merma?","Es la diferencia entre el inventario lógico y físico, determinada por medio de toma física de inventario.","La cantidad de productos vendidos en un día.","La mercancía que llega a bodega.","El descuento aplicado a los productos."],
["¿Qué significa UFI?","Unidad Financiera Institucional.","Unidad Física de Inventario.","Unidad de Facturación Interna.","Unidad de Flujo Industrial."],
["¿Cuánto vale 1 UFI según el material?","$15","$10","$12","$20"],
["¿Cómo se describen los artículos de impulso?","Son artículos de impulso y venta no programada, preferiblemente artículos de dinámica.","Son productos de alto costo y venta programada.","Son productos exclusivos de liquidación.","Son artículos que siempre superan los $15."],
["¿Cuánto debe valer un producto de impulso?","Menos de un UFI o igual.","Más de dos UFI.","Exactamente $20.","No importa su precio."],
["¿Cuáles son los tipos de anaqueles?","Oportunidad, Liquidación y Regular.","EPA, Origen y Cerámica.","Ferretería, Construcción y Decoración.","Amarillo, azul y blanco."],
["¿Qué colores identifican los anaqueles de oportunidad, liquidación y regular, respectivamente?","Oportunidad: amarillo y azul; Liquidación: rojo y blanco; Regular: blanco.","Oportunidad: rojo y blanco; Liquidación: amarillo y azul; Regular: verde.","Oportunidad: verde; Liquidación: azul; Regular: amarillo.","Todos son de color blanco."],
["¿Cuáles son los valores de EPA?","Honradez, Igualdad y Constancia.","Respeto, responsabilidad y puntualidad.","Servicio, calidad y precio.","Liderazgo, compromiso y disciplina."],
["¿Cuál es la misión de EPA?","Ofrecer la mejor opción a nuestros clientes en surtido, precio y servicio en el mercado de la construcción, decoración y remodelación del hogar.","Ofrecer la mejor opción a nuestros clientes en calidad, variedad y atención en el mercado de la construcción, decoración y remodelación del hogar.","Ser la mejor opción para nuestros colaboradores, proveedores y comunidades en el mercado de la construcción y remodelación.","Ofrecer a nuestros clientes el mejor surtido, precio y servicio en el mercado de la ferretería, electricidad y plomería."],
["¿Cuál es la visión de EPA?","Ser la red de súper ferreterías líder en satisfacción de los clientes, colaboradores, accionistas, proveedores y comunidades donde operamos.","Ser la red de súper ferreterías líder en ventas y precios para clientes, colaboradores, accionistas, proveedores y comunidades donde operamos.","Ser la red de súper ferreterías líder en satisfacción de clientes y colaboradores en todos los países donde operamos.","Ser la red de súper ferreterías líder en servicio y calidad para clientes, proveedores y comunidades donde operamos."],
["¿Qué es una rebaja a cero?","Proceso por el cual se elimina físicamente y del sistema toda mercancía averiada en tienda no apta para la venta.","Un descuento del 100% para los clientes.","Un procedimiento para devolver mercancía al proveedor.","Un ajuste de precios de los productos."],
["¿Qué es un kardex?","Es un suministro de inventario que se utiliza para el conteo de la mercancía en el área de almacenaje, en el cual se coloca el código interno del producto y su respectiva cantidad.","Un reporte de las ventas realizadas.","Una hoja para solicitar vacaciones.","Un documento para realizar compras."],
["¿Cuál es el orden para llenar un kardex?","Código del producto; ficha del empleado; cantidad existente; nombre del colaborador; fecha de modificación.","Nombre, precio, código, fecha y firma del cliente.","Fecha, precio, firma y cantidad.","Solo código y cantidad."],
["¿Qué elementos componen un código de producto EPA?","14 (Categoría) + 25 (Línea o familia) + 016 (Consecutivo del artículo).","14 (Consecutivo) + 25 (Categoría) + 016 (Proveedor).","14 (Proveedor) + 25 (Precio) + 016 (Categoría).","14 (Tienda) + 25 (Pasillo) + 016 (Anaquel)."],
["¿Qué colores corresponden al kardex de cada área?","Ferretería: rosado; Construcción: blanco; Remodelación: celeste; Decoración: verde.","Ferretería: blanco; Construcción: rosado; Remodelación: verde; Decoración: celeste.","Ferretería: verde; Construcción: amarillo; Remodelación: blanco; Decoración: rojo.","Todas las áreas utilizan el mismo color."],
["¿Qué significa AST?","Análisis de Seguridad de Trabajo.","Área de Servicio Técnico.","Asistencia y Soporte Técnico.","Administración de Seguridad y Tienda."],
["¿Qué información identifica el anaquel de precio oferta u oportunidad?","Precio anterior; fecha de inicio y finalización de la oferta; rótulo con fondo amarillo, franja azul y leyenda respectiva.","Precio anterior; leyenda «Hasta agotar existencia»; rótulo rojo y blanco.","Incluye IVA, código EPA y precio en dólares.","Únicamente muestra el precio actual."],
["¿Qué características tiene el anaquel de precio liquidación?","Precio anterior; rótulo blanco y rojo con la leyenda de liquidación; texto «Hasta agotar existencia».","Fondo amarillo y franja azul con fechas de oferta.","Solo incluye el precio en dólares.","Incluye IVA y unidad de venta."],
["¿Qué información contiene el anaquel de precio regular o común?","Incluye IVA, unidad de venta, precio en dólar, descripción del producto, referencia del proveedor, fecha de emisión, última actualización, código EPA y código externo.","Precio anterior, fechas de oferta y franja azul.","Precio anterior y leyenda «Hasta agotar existencia».","Solamente el nombre y precio del producto."],
["¿Cuál es la razón de ser de EPA?","Mejores hogares para mejores ciudadanos.","Mejores precios para mejores clientes.","Mejoramos cualquier cotización.","Servir al cliente de manera que nos prefiera."],
["¿Cuál es la misión de ventas?","Servir al cliente de manera que nos prefiera.","Ofrecer el mejor precio del mercado.","Vender la mayor cantidad de productos.","Mejores hogares para mejores ciudadanos."],
["¿Cuál es la misión de ventas en línea?","Servir al cliente conectado desde cualquier lugar de manera que nos prefiera.","Vender productos únicamente por internet.","Ofrecer descuentos a todos los clientes.","Entregar productos únicamente a domicilio."],
["¿Qué categorías pertenecen al Área 1: Ferretería?","6 Jardinería; 10 Automotriz; 12 Herramientas Manuales; 14 Herramientas Eléctricas; 16 Electricidad; 18 Ferretería; 19 Cerrajería; 27 Seguridad.","20 Madera; 21 Puertas; 26 Plomería; 30 Construcción.","7 Hogar; 9 Muebles; 22 Pisos; 24 Baños.","2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación."],
["¿Qué categorías pertenecen al Área 2: Construcción?","20 Madera; 21 Puertas; 26 Plomería; 28 Materiales Eléctricos; 30 Construcción.","6 Jardinería; 10 Automotriz; 18 Ferretería.","7 Hogar; 9 Muebles; 22 Pisos.","2 Pintura; 4 Decoración; 8 Vivero."],
["¿Qué categorías pertenecen al Área 3: Remodelación?","7 Hogar; 9 Muebles; 11 Recipientes; 22 Pisos; 23 Electrodomésticos; 24 Baños; 25 Cocinas.","2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.","20 Madera; 21 Puertas; 26 Plomería.","6 Jardinería; 10 Automotriz; 19 Cerrajería."],
["¿Qué categorías pertenecen al Área 4: Decoración?","2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.","7 Hogar; 9 Muebles; 22 Pisos; 24 Baños.","20 Madera; 21 Puertas; 30 Construcción.","6 Jardinería; 10 Automotriz; 18 Ferretería."],
["¿Qué es merchandising?","Una estrategia de promoción de ventas que, mediante técnicas visuales, pone al cliente en contacto con el producto y su precio, facilitando la compra.","Un sistema para controlar el inventario.","Un proceso para trasladar mercancía.","Un documento para realizar cotizaciones."],
["¿Qué es una venta entre tiendas?","Es el proceso en que se traslada mercancía de una tienda a otra con el propósito de cumplir con las necesidades de compra del cliente.","Una venta realizada a los empleados.","Una venta de productos por internet.","Una compra realizada a un proveedor."],
["¿Qué es un pedido especial?","Es todo producto cuya existencia física y punto de pedido es cero, y cuya solicitud está sujeta a un catálogo donde se especifican sus dimensiones, colores y formas.","Un producto que siempre está disponible en tienda.","Un producto que se encuentra en liquidación.","Una compra realizada por un colaborador."],
["¿Cuáles son las condiciones para una venta por volumen?","Monto total de la venta mayor a 100 UFI y cantidad pedida mayor o igual a dos veces el punto de pedido.","Monto mayor a 50 UFI y cantidad de un producto.","Monto menor a 15 UFI y cualquier cantidad.","Monto mayor a 200 UFI sin importar la cantidad."],
["¿Qué son los usos internos?","Es el proceso a través del cual se solicita mercancía para trabajos de mantenimiento, instalación y mejora en las unidades operativas y oficina central.","Productos que se venden a los colaboradores.","Mercancía que se traslada entre tiendas.","Productos que se envían a domicilio."],
["¿Qué es la elaboración de cotizaciones?","Es un documento en el que se detalla el precio de un bien o servicio para el proceso de compra o negociación, solicitado por el cliente para conocer el valor de un pedido de mercancía.","Un documento para registrar las horas laborales.","Un reporte de inventario.","Una factura de productos vendidos."],
["¿Qué es Retail?","Consiste en todas las actividades que se relacionan directamente con la comercialización de productos o servicios uniformes a grandes cantidades de clientes.","Un sistema de almacenamiento.","Un documento de ventas especiales.","Una estrategia de decoración."],
["¿Qué es un planograma?","Es el esquema de exhibición de la mercancía o acomodo; especifica cómo exhibir el surtido, mobiliario necesario, iluminación y apoyos visuales.","Un reporte de mercancía dañada.","Una lista de precios de productos.","Un documento para trasladar productos."],
["¿Al mobiliario de exhibición se le llama Rack?","Verdadero","Falso","Solo en bodega","No aplica"],
["¿Cuándo se debe elaborar una comanda?","Cuando el producto no tiene código de barras o viñeta; necesita corte; es pintura preparada; es pesado; es para domicilio; o es poliducto para cliente retira.","Únicamente cuando el cliente paga en efectivo.","Solamente cuando el producto está en oferta.","Cuando el cliente solicita una factura."],
["¿Cuáles son los tipos de entrega de productos?","Despacho por caja, despacho por Construcción, domicilio y cliente retira.","Despacho por pasillo, bodega, caja y tienda.","Venta directa, venta especial y venta en línea.","Domicilio, proveedor y liquidación."],
["¿Cuáles son los 3 saberes que componen la competencia?","El saber, el saber hacer y el saber ser.","Saber vender, saber comprar y saber cobrar.","Conocimiento, precio y servicio.","Experiencia, liderazgo y puntualidad."],
["¿Cuándo se vocea el código Adam?","Cuando un menor de edad está perdido o existe indicio de que haya sido sustraído.","Cuando ocurre un incendio.","Cuando una persona necesita primeros auxilios.","Cuando se detecta mercancía dañada."],
["¿Qué significa el código blanco?","Es cuando una persona necesita primeros auxilios.","Cuando hay un incendio.","Cuando un menor está perdido.","Cuando se detecta un robo."],
["¿Qué significa el código rojo?","Contra incendios.","Primeros auxilios.","Menor de edad perdido.","Mercancía dañada."],
["¿Qué es una garantía en EPA?","Es el servicio que ofrecemos al cliente cuando uno o varios de sus productos facturados presenta fallo en sus condiciones físicas y que impide el uso del producto.","Un descuento que se ofrece al cliente.","Un proceso para eliminar mercancía averiada.","Un documento para trasladar mercancía."],
["¿Cuál es el emblema de EPA?","Mejoramos cualquier cotización en cualquier forma de pago.","Mejores hogares para mejores ciudadanos.","Servir al cliente conectado desde cualquier lugar.","La mejor opción en construcción y decoración."],
["¿Qué son las acreencias?","Saldo a favor del cliente.","Saldo pendiente que el cliente debe pagar.","Descuento aplicado a una compra.","Dinero retenido por una devolución."],
["¿Cómo se llama la zona donde se colocan artículos cerca de Atención al Cliente?","Furgonazo.","Pórtico.","Zona de liquidación.","Anaquel de oportunidad."],
["¿Cómo se llama la zona donde está la entrada de EPA y que va de la mano con merchandising?","Pórtico.","Furgonazo.","Zona de cajas.","Área de despacho."],
["¿Cuáles son los procesos que modifican el inventario?","Notas de Recibo; Notas de Traspaso; Uso Interno; Rebaja a Cero; Ajustes de Pre-Inventario (API); Ventas; Anulación/Devolución.","Notas de Compra; Notas de Venta; Devoluciones; Descuentos; Cotizaciones; Despachos.","Recepción; Almacenamiento; Exhibición; Reposición; Limpieza; Facturación.","Inventario Lógico; Inventario Comercial; Inventario Contable; Kardex; Planograma."],
["¿Cuáles son los tipos de inventario?","Inventario Lógico; Inventario Comercial (Compra Venta); Inventario Contable.","Inventario Físico; Inventario Digital; Inventario Financiero.","Inventario de Bodega; Inventario de Tienda; Inventario de Caja.","Inventario Inicial; Inventario Final; Inventario de Seguridad."],
["¿Qué es un inventario?","El inventario es el conjunto de mercancías o artículos el cual se administra con exactitud para comerciar, permitiendo su compra y venta, en un periodo económico determinado.","Es el conjunto de mercancías o artículos que se exhiben en tienda para facilitar su venta, sin importar el periodo económico.","Es el registro de las ventas realizadas y de los pagos recibidos durante un periodo económico.","Es el conjunto de productos que se reciben y almacenan únicamente para uso interno de la empresa."],
["¿Qué son los Ajustes de Pre-Inventario (API)?","Son todas aquellas correcciones en el sistema que se hacen al Inventario Compra-Venta, a partir de Conteos y/o hallazgos repentinos y casuales.","Son cambios en los precios de venta que se realizan antes de iniciar un periodo económico.","Son correcciones al Inventario Contable realizadas únicamente después de una auditoría programada.","Son registros de mercancía recibida mediante notas de traspaso y notas de recibo."],
["¿A qué se refiere un negativo?","Se refiere a un determinado producto que pasó por el área de caja generando un margen falso, es decir un código sin existencia previa. Esto a su vez el sistema no puede generar órdenes de compra si existe el negativo.","Se refiere a un producto que pasó por el área de caja generando un margen falso, es decir un código con existencia previa.","Se refiere a un producto agotado en tienda que genera automáticamente una orden de compra.","Se refiere a una diferencia de precio entre el inventario lógico y el inventario contable."],
["¿Cuáles son las causas de un negativo?","APIS, cruce de códigos por barras o mal enviñetado, malos ingresos de recepción, producto pendiente de ingreso, traspasos pendiente, mala digitación, etc.","Ventas altas, promociones, cambios de precio, productos de temporada y falta de espacio.","Notas de recibo, notas de traspaso, uso interno, rebaja a cero y devoluciones.","Errores de caja, descuentos autorizados, cotizaciones y pedidos especiales únicamente."],
["¿Cuáles son las desventajas de un mal inventario?","Mala información entre departamentos: Compras, reposición, inventario, venta; consecuencias fiscales. Pago de Impuestos por inventario perdido; mayor dificultad para obtener utilidades a la empresa; pérdida de tiempo buscando productos; mayor probabilidad de hurto.","Mejor comunicación entre departamentos; reducción de impuestos; mayor facilidad para obtener utilidades y menos pérdidas.","Aumento de ventas; mejor reposición; menos tiempo buscando productos y menor probabilidad de hurto.","Dificultad para exhibir productos; exceso de cotizaciones; aumento de pedidos especiales y descuentos."],
["¿Qué es la cultura organizacional?","Son valores y normas claras que promueven conductas positivas que se traducen en una mayor productividad dentro de la empresa y en una adecuada proyección de la organización fuera de ella.","Son reglas y procedimientos de trabajo que se enfocan únicamente en controlar horarios y tareas dentro de la empresa.","Es el conjunto de estrategias comerciales que buscan aumentar las ventas y mejorar la exhibición de productos.","Son actividades de integración que se realizan para mejorar la comunicación entre colaboradores fuera de la empresa."]
];

let questions = [];
let index = 0;
let correct = 0;
let wrong = 0;
let answered = false;
let exam = false;
let seconds = 0;
let timerInterval = null;
let sound = true;
let mistakes = [];
let reviewOnly = false;

const $ = id => document.getElementById(id);

$("totalQuestions").textContent = QUESTIONS.length;

function shuffle(array) {
  const arr = [...array];
  for(let i = arr.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function startStudy(){
  exam = false;
  reviewOnly = false;
  questions = shuffle(QUESTIONS);
  begin();
}

function startExam(){
  exam = true;
  reviewOnly = false;
  questions = shuffle(QUESTIONS);
  begin();
}

function begin(){
  index = 0;
  correct = 0;
  wrong = 0;
  seconds = 0;
  mistakes = [];
  clearInterval(timerInterval);
  $("home").classList.remove("active");
  $("results").classList.remove("active");
  $("quiz").classList.add("active");
  timerInterval = setInterval(updateTimer,1000);
  renderQuestion();
}

function updateTimer(){
  seconds++;
  $("timer").textContent = formatTime(seconds);
}

function formatTime(n){
  const m = Math.floor(n/60).toString().padStart(2,"0");
  const s = (n%60).toString().padStart(2,"0");
  return m+":"+s;
}

function renderQuestion(){
  answered = false;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("nextBtn").disabled = true;

  const item = questions[index];
  $("questionText").textContent = item[0];
  $("questionNumber").textContent = `Pregunta ${index+1} de ${questions.length}`;
  $("progressText").textContent = Math.round((index/questions.length)*100)+"%";
  $("progress").style.width = (index/questions.length*100)+"%";
  $("modeLabel").textContent = exam ? "MODO EXAMEN" : "MODO ESTUDIO";

  const opts = shuffle(item.slice(1));
  const letters = ["A","B","C","D"];
  $("options").innerHTML = "";

  opts.forEach((option,i)=>{
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="letter">${letters[i]}</span><span class="option-text"></span>`;
    btn.querySelector(".option-text").textContent = option;
    btn.onclick = ()=>selectOption(btn,option,item);
    $("options").appendChild(btn);
  });

  $("correctCount").textContent = correct;
  $("wrongCount").textContent = wrong;
}

function selectOption(btn,option,item){
  if(answered) return;

  if(exam){
    answered = true;
    document.querySelectorAll(".option").forEach(b=>b.classList.add("disabled"));
    const isCorrect = option === item[1];
    btn.classList.add(isCorrect ? "correct" : "wrong");

    if(isCorrect){
      correct++;
    }else{
      wrong++;
      mistakes.push({q:item[0],your:option,right:item[1]});
    }

    $("correctCount").textContent = correct;
    $("wrongCount").textContent = wrong;
    $("feedback").textContent = isCorrect ? "Respuesta registrada." : "Respuesta registrada.";
    $("nextBtn").disabled = false;
    return;
  }

  answered = true;
  document.querySelectorAll(".option").forEach(b=>b.classList.add("disabled"));

  if(option === item[1]){
    correct++;
    btn.classList.add("correct");
    $("feedback").textContent = "¡Correcto! Excelente trabajo.";
    $("feedback").className = "feedback success";
    flash("green");
    playSound(true);
  }else{
    wrong++;
    btn.classList.add("wrong");
    $("feedback").textContent = "Incorrecto. Respuesta correcta: "+item[1];
    $("feedback").className = "feedback error";
    flash("red");
    playSound(false);
    document.querySelectorAll(".option").forEach(b=>{
      if(b.querySelector(".option-text").textContent === item[1]){
        b.classList.add("correct");
      }
    });
    mistakes.push({q:item[0],your:option,right:item[1]});
  }

  $("correctCount").textContent = correct;
  $("wrongCount").textContent = wrong;
  $("nextBtn").disabled = false;
}

function flash(type){
  const f = $("flash");
  f.className = "flash "+type;
  document.body.classList.remove("shake");
  if(type==="red"){
    void document.body.offsetWidth;
    document.body.classList.add("shake");
  }
  setTimeout(()=>f.className="flash",400);
}

function playSound(isCorrect){
  if(!sound) return;
  try{
    const audio = new AudioContext();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.type = "sine";
    oscillator.frequency.value = isCorrect ? 750 : 220;
    gain.gain.value = .1;
    oscillator.start();
    oscillator.stop(audio.currentTime+.15);
  }catch(e){}
}

function nextQuestion(){
  if(index < questions.length-1){
    index++;
    renderQuestion();
  }else{
    finish();
  }
}

function finish(){
  clearInterval(timerInterval);
  $("quiz").classList.remove("active");
  $("results").classList.add("active");

  const total = questions.length;
  const percent = Math.round((correct/total)*100);

  $("scorePercent").textContent = percent+"%";
  $("finalCorrect").textContent = correct;
  $("finalWrong").textContent = wrong;
  $("finalTime").textContent = formatTime(seconds);
  $("resultTitle").textContent = percent>=90 ? "¡Excelente!" : percent>=70 ? "¡Muy bien!" : percent>=50 ? "¡Buen esfuerzo!" : "¡A seguir practicando!";
  $("resultIcon").textContent = percent>=90 ? "🏆" : percent>=70 ? "🎉" : percent>=50 ? "💪" : "📚";
  $("resultMessage").textContent = `Has acertado ${correct} de ${total} preguntas. Tu resultado es ${percent}%.`;
  $("scoreCircle").style.borderColor = percent>=70 ? "#16a34a" : "#ffdc00";
  $("mistakesList").classList.remove("show");
  $("mistakesList").innerHTML = "";
}

function reviewMistakes(){
  const list = $("mistakesList");
  list.innerHTML = "";

  if(mistakes.length===0){
    list.innerHTML="<div class='mistake-item'><h3>¡No tienes errores!</h3><p>Has respondido correctamente todas las preguntas.</p></div>";
  }else{
    mistakes.forEach((m,i)=>{
      const div = document.createElement("div");
      div.className="mistake-item";
      div.innerHTML=`<h3>${i+1}. ${escapeHtml(m.q)}</h3>
      <p class="your-answer"><strong>Tu respuesta:</strong> ${escapeHtml(m.your)}</p>
      <p class="right-answer"><strong>Correcta:</strong> ${escapeHtml(m.right)}</p>`;
      list.appendChild(div);
    });
  }

  list.classList.add("show");
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g,c=>({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
  }[c]));
}

function restartQuiz(){
  if(exam) startExam();
  else startStudy();
}

function goHome(){
  clearInterval(timerInterval);
  $("quiz").classList.remove("active");
  $("results").classList.remove("active");
  $("home").classList.add("active");
}

$("soundToggle").onclick=()=>{
  sound=!sound;
  $("soundToggle").textContent=sound?"🔊":"🔇";
};
