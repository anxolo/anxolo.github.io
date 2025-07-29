---
layout: default
use_math: true
---


# T2: Acondicionamiento de Señal y Conversión Analógico-Digital
*APS - 1.º Grado en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escuela Superior de Ingeniería Informática - Universidade de Vigo*

---

### Aplicación de Filtrado
El filtrado consiste en limitar las frecuencias de una señal a un umbral establecido.

**Tipos de Filtros:**
* **Paso bajo:** Permiten pasar las frecuencias más bajas que un límite establecido (frecuencia de corte).
* **Paso alto:** Contrario al anterior, permite pasar las frecuencias que sobrepasan un umbral.
* **Paso banda:** Permiten que pase un rango determinado de frecuencias.
* **Rechazo de banda:** Contrario al anterior, no permite que pase un rango determinado de frecuencias.

![Tipos Filtrados](https://raw.githubusercontent.com/anxolo/anxolo.github.io/refs/heads/main/apuntes/1GRIA/APS/FILTRADOS%20-%20T2%20APS.png)

**Aplicaciones del filtrado:**

* **Industria Musical:** Modifica y mejora la calidad del sonido.
* **Telecomunicaciones:** En la transmisión y recepción de señales.
* **Instrumentación y control:** Obtención de lecturas precisas de los sensores.
* **Medicina:** En electrocardiogramas (ECG) y electroencefalogramas (EEG) para eliminar ruido.
* **Señales Financieras y Económicas:** Para analizar series temporales de datos financieros.
* **Procesamiento de imagen y visión por computador:** Mejoran la calidad visual, eliminan ruido y realzan bordes.
* **Astronomía y Física:** En telescopios para mejorar la visualización y en sondas experimentales para extraer información relevante.
* **Automoción y transporte:** En sensores de sistemas de navegación, mejorando la seguridad y eficiencia.
* **Investigación científica:** Para separar la información útil del ruido de fondo.

***

### Acondicionamiento de Señales

#### Amplificación de Señales

Consiste en aumentar la amplitud de una señal, haciendo mas notoria la relación señal-ruido y adecuándola para su procesamiento posterior. Se utilizan **amplificadores operacionales**, que son componentes esenciales en muchos circuitos electrónicos y presentan diversas configuraciones (inversor, no inversor, seguidor de voltaje, sumador, etc.).

#### Aislamiento de Señales

Protege los componentes sensibles de otras partes del sistema, evitando interferencias. Los dos tipos principales son los **optoacopladores** y los **transformadores**.

***

### Conversión Analógico-Digital (A/D)

Es el proceso que permite el tratamiento digital de las señales analógicas.

**Fases de la conversión A/D:**

1.  **Muestreo:** Una señal continua se convierte en una serie de valores discretos. La frecuencia de muestreo ($f_s$) debe ser, como mínimo, el doble de la frecuencia máxima de la señal ($f_{max}$), según el Teorema de Nyquist-Shannon: $f_s \ge 2 \cdot f_{max}$

2.  **Cuantización:** Cada valor muestreado se aproxima a un valor discreto dentro de un rango definido. El tamaño del paso de cuantización (Q), o resolución, se calcula como:
    $Q  = \frac{V_{max} - V_{min}}{2^n}$ 
    donde *n* es el número de bits del conversor, y $V_{max} - V_{min}$ es el rango de voltaje de la señal. El error máximo de cuantización es la mitad de este paso, es decir, $\pm \frac{Q}{2}$.
3.  **Codificación:** Los valores cuantizados se convierten a formato binario.

#### Impacto en la Inteligencia Artificial

La conversión A/D permite que la IA interprete y analice señales del mundo real (sonido, imágenes). Una conversión de alta calidad es esencial para el aprendizaje automático, ya que los modelos necesitan captar cada detalle en su etapa de entrenamiento.

**Aplicaciones en IA:**

* **Reconocimiento de voz:** La conversión A/D transforma la voz en datos digitales, permitiendo que las redes neuronales identifiquen tonos, palabras y acentos.
* **Procesamiento de imágenes y visión por computadora:** Las cámaras convierten las imágenes en señales digitales mediante A/D, lo que permite reconocer patrones, rostros u objetos.
* **Sensores y robótica:** Los robots traducen señales físicas a datos digitales para interactuar con el entorno y trabajar de forma autónoma.
* **Medicina y diagnóstico:** Los equipos médicos usan A/D para crear imágenes digitales (resonancias, tomografías), que son esenciales para el diagnóstico y tratamiento de enfermedades.

***

### Ejemplos y Casos Prácticos

#### Electrocardiogramas (ECG)

Un ECG mide la actividad eléctrica del corazón. El acondicionamiento de la señal es vital para filtrar el ruido y mejorar su calidad. Debido a que son señales débiles, se amplifican y se aíslan para proteger tanto al paciente como al equipo de posibles descargas eléctricas.

![Esquema](https://raw.githubusercontent.com/anxolo/anxolo.github.io/acfba18c49db4ce8658eea25699671a4257a123b/apuntes/1GRIA/APS/T2%20ESQUEMA%20ELECTRO.svg)

#### Electroencefalogramas (EEG)

Registran la actividad eléctrica del cerebro. El acondicionamiento es esencial para obtener lecturas claras, ya que las señales cerebrales son muy sutiles. Se debe filtrar el ruido ambiental, amplificar la señal y aislarla para reducir interferencias y garantizar la seguridad del paciente.

***

### Teoría de Señales
#### Aplicaciones

La teoria de señales se puede aplicar en numerosos ámbitos:
- Comunicación: Esencial desde la trasmisión de voz hasta la transefencia de datos mediante redes
- Procesamiento de imagenes: Las señales representan intensidades de píxeles y se usan para mejorar imagenes y detectar objetos
- Análisis de datos científicos: Permite analizar datos desde señales sísmicas hasta señales neuronales
#### Transformada de Fourrier

* **Transformada de Fourier:** Es una herramienta matemática que descompone una señal en las frecuencias que la constituyen. Esencial para entender cómo contribuyen los diferentes componentes de frecuencia a la señal general.
    * **Espectro de frecuencia:** Es la representación gráfica de la transformada de Fourier. Muestra la amplitud de cada frecuencia presente en la señal.
* **Tipos de Transformada de Fourier:**
    * **Continua (FT):** Para señales continuas y no periódicas.
    * **Discreta (DFT):** Para señales discretas. Es la base para algoritmos computacionales, especialmente la FFT.
* **Transformada Rápida de Fourier (FFT):** Es un algoritmo muy eficiente para calcular la DFT. Mientras que un cálculo directo tiene una complejidad computacional de $O(N^2)$, la FFT la reduce a $O(N \log N)$, siendo mucho más rápida para conjuntos de datos grandes.
* **Transformada de Fourier de Tiempo Corto (STFT):** Una extensión que permite analizar la variación del contenido espectral a lo largo del tiempo, aplicando la transformada de Fourier a pequeños segmentos de la señal.
#### Principios básicos del DSP
- Digitalización de señales: Conversión de señal analógica a digital mediante muestreo y cuantificación
- Algoritmos DSP: Conjunto de instrucciones matemáticas y lógicas para transformar señales digitales