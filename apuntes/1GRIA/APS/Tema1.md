
# T1: Adquisición y Procesamiento de la Señal
*1.º Grado en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escuela Superior de Ingeniería Informática - Universidade de Vigo*

---

## Digitalización de Señales
Es el proceso de convertir señales analógicas (continuas) a digitales (discretas) mediante **muestreo** y **cuantificación**. Este proceso es fundamental para que un ordenador pueda interpretar y trabajar con información del mundo real.

Generalmente, se compone de 3 fases:
1.  **Conversión de señal analógica a digital (CAD):** Se toma la señal del mundo real y se transforma en datos binarios.
2.  **Procesamiento de la señal digital (DSP):** Se aplican algoritmos (conjuntos de instrucciones matemáticas y lógicas) para transformar, filtrar o analizar estas señales digitales.
3.  **Conversión de la señal procesada a una forma analógica (CDA):** Si es necesario, la señal digital se vuelve a convertir a una forma analógica (por ejemplo, para producir sonido a través de un altavoz).

---

## Los Sensores
Un **sensor** es un dispositivo que capta eventos o cambios en su entorno físico (como la temperatura, la luz o el movimiento) y envía dicha información a un dispositivo electrónico. La **sensorización** es el proceso de usar sensores para obtener datos del entorno, transformando una entrada física en una señal eléctrica medible y analizable.

### Tipos de Sensores (según su energía)
* **Pasivos:** Responden al entorno sin necesidad de una fuente de energía externa (ej: un termómetro de mercurio).
* **Activos:** Requieren energía para funcionar y activar su respuesta (ej: un sensor ultrasónico que emite un pulso de sonido).

### Tipos de Señales
* **Analógicas:** Señales continuas que pueden tener un número infinito de valores dentro de un rango (ej: el voltaje que genera un micrófono).
* **Digitales:** Señales discretas y binarias, que solo pueden tomar un número finito de valores (generalmente 0 y 1).

### Características de un Sensor
* **Sensibilidad:** Capacidad para detectar pequeños cambios en la magnitud que se está midiendo.
* **Rango:** El intervalo de valores en el que un sensor puede medir con una precisión aceptable.
* **Exactitud:** Cuán cercanas están las mediciones del sensor al valor real o de referencia.
* **Linealidad:** Capacidad de mantener una relación proporcional entre la entrada (magnitud física) y la salida (señal eléctrica). Los sensores lineales son más fáciles de calibrar.
* **Resolución:** La menor diferencia en una señal que un sensor puede detectar. Una alta resolución permite detectar cambios muy sutiles.

### Parámetros Críticos en Aplicaciones Dinámicas
* **Tiempo de Respuesta:** El tiempo que tarda un sensor en reaccionar a un cambio en el medio.
* **Frecuencia de Operación:** La rapidez con la que un sensor puede realizar mediciones sucesivas.

---

## Tipos de Sensores Comunes

### Termopar y Termistor 
* **Termopar:** Unión de dos metales diferentes que generan un voltaje proporcional a la temperatura. Son duraderos y funcionan en un rango de temperaturas muy amplio (uso industrial y científico).
* **Termistor:** Una resistencia que cambia su valor con la temperatura (NTC o PTC). Son muy sensibles y precisos en rangos de temperatura limitados (uso en electrónica de consumo y medicina).

### Sensores de Proximidad 
* **Por Infrarrojos (IR):** Emite luz infrarroja y detecta su reflejo en un objeto cercano. Son para distancias cortas y pueden ser afectados por la luz ambiental o superficies reflectantes. Se usan en electrónica y sistemas de seguridad.
* **Por Ultrasonidos:** Emite ondas de sonido de alta frecuencia y mide el tiempo que tarda en regresar el eco. Tienen mayor rango que los IR y detectan todo tipo de materiales. Se usan en automoción (aparcamiento), robótica y manufactura.

### Sensores Biométricos
* **Sensor de Huella Digital:** Captura la imagen de las crestas y valles de una huella dactilar usando tecnologías ópticas, capacitivas o ultrasónicas. Ofrece un alto nivel de seguridad en móviles y controles de acceso.
* **Sensor de Reconocimiento Facial:** Usa algoritmos de visión por computador para identificar a una persona por su rostro. Es versátil, poco invasivo y se aplica en seguridad, vigilancia y sistemas de pago.

---

## Procesamiento y Análisis de Datos

Una vez que los sensores han capturado los datos, estos deben ser procesados para que sean útiles. Esto incluye varias técnicas.

### Mecanismos de Transducción
Un **transductor** es el componente del sensor que realiza la conversión de una forma de energía a otra.
* **Mecánicos:** Convierten energía mecánica (presión, vibración) en señales eléctricas. Ejemplo: un micrófono.
* **Térmicos:** Convierten cambios de temperatura en señales eléctricas. Ejemplo: un termistor.
* **Fotónicos:** Convierten energía luminosa en una señal eléctrica. Ejemplo: un fotodiodo.
* **Químicos:** Reaccionan a sustancias químicas para generar una señal eléctrica. Ejemplo: un sensor de pH.

### Filtrado de Datos
Proceso para eliminar el **ruido** y los componentes no deseados de los datos del sensor.
* **Filtro Digital:** Un filtro paso bajo, por ejemplo, elimina las altas frecuencias para suavizar la señal y reducir el ruido.
* **Filtro de Media Móvil:** Calcula el promedio de los datos en una ventana deslizante para suavizar fluctuaciones bruscas.

### Normalización de Datos
Proceso de ajustar rangos de datos a una escala común (ej. 0 a 1) para facilitar su comparación y análisis.
* **Normalización Mín-Máx:** Escala los datos a un rango definido, generalmente [0, 1].
* **Estandarización (Z-Score):** Ajusta los datos para que tengan una media de 0 y una desviación estándar de 1.

### Análisis Estadístico
Permite identificar tendencias, patrones y anomalías en los datos.
* **Estadísticas Descriptivas:** Media, mediana, desviación estándar, etc.
* **Análisis de Series Temporales:** Estudio de datos que cambian con el tiempo para predecir tendencias.
* **Detección de Anomalías:** Identificación de datos que se desvían del comportamiento normal.

### Visualización de Datos
Facilita la interpretación y comprensión de datos complejos mediante representaciones gráficas.
* **Gráficos y Diagramas:** Gráficos de líneas, barras, mapas de calor, etc.
* **Herramientas Interactivas:** Software que permite una exploración dinámica de los datos.

### Integración y Fusión de Datos
* **Fusión de Datos:** Proceso de combinar datos de múltiples sensores para obtener una visión más completa y precisa de la situación.
* **Análisis Multivariable:** Exploración de las relaciones que existen entre las diferentes variables medidas por los sensores.
