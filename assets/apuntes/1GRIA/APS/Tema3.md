---
layout: apuntes
use_math: true
---

# T3: Muestreo, Cuantización y Reconstrucción
*APS - 1.º Grado en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escuela Superior de Ingeniería Informática - Universidade de Vigo*

---

## 1. Muestreo
* **Muestreo**: Proceso esencial en el que una señal continua o analógica se convierte en valores discretos o digitales.
* **Reconstrucción o Interpolación**: Es el proceso contrario al muestreo.

---

## 2. Teorema de Nyquist-Shannon
Es el principio fundamental que define las condiciones bajo las cuales una señal puede ser muestreada y reconstruida sin pérdida de información.

* **Frecuencia de Muestreo**: Tasa a la que se toman muestras, medida en Hertz (Hz) (Muestras por segundo).
* **Frecuencia Máxima de la Señal**: Es la frecuencia más alta presente en la señal analógica.
* **Regla del Muestreo**: La frecuencia de muestreo debe ser, al menos, el doble que la frecuencia máxima de la señal. A esta frecuencia mínima se le conoce como **Frecuencia de Nyquist**.
* **Aliasing**: Ocurre cuando se muestrea a una tasa inferior a la Frecuencia de Nyquist. Como resultado, diferentes señales se vuelven indistinguibles una vez muestreadas. Se produce una perdida de información.

### Técnicas de Muestreo
* **Sobremuestreo**: Muestrear a una frecuencia mucho más alta que la Frecuencia de Nyquist.
* **Submuestreo**: Muestrear a una frecuencia mucho más baja que la Frecuencia de Nyquist.
* **Uniforme**: Las muestras se toman a intervalos de tiempo regulares. Es muy empleado en sistemas de audio y video porque simplifica la reconstrucción y el diseño de hardware y software. Sin embargo, no es eficiente para señales que varían poco y que, por tanto, estarían sobremuestreadas.
* **No Uniforme**: Las muestras se toman en intervalos no uniformes, usualmente debido a variaciones en la propia señal. Es útil para señales con cambios espontáneos (ej. sismos), ya que ofrece una mayor eficiencia en la captura de información, aunque complica la reconstrucción y el diseño de los sistemas de precisión.

---

## 3. Cuantización
* **Resolución o Profundidad de bits**: Es el número de niveles discretos que se pueden usar para representar una muestra.
    * A mayor profundidad, se obtiene una mejor aproximación de la señal y se reduce el error.
    * A menor profundidad, hay una mayor distorsión o **ruido de cuantización**.
* **Impacto de la resolución**:
    * **Calidad de la Señal**: Una alta resolución mejora la fidelidad de la señal, pero a costa de aumentar el tamaño de los datos.
    * **Ruido de cuantización**: Es la diferencia entre el valor real de la muestra y el valor cuantizado. A mayor resolución, menor es este ruido.

### Relación Señal a Ruido (SNR)
* **Definición**: Es una medida crítica en el procesamiento de señales que compara el nivel de la señal deseada con el nivel del ruido de fondo (incluyendo el ruido de cuantización).
* **Importancia**: Una SNR alta indica una señal clara con poco ruido y alta fidelidad. Por el contrario, una SNR baja indica una señal degradada por el ruido.
* **Cálculo**: $SNR = 6.02 * N + 1.76$ (donde **N** es el número de bits de la cuantización).
* **Aplicación práctica**: En sistemas de audio, una SNR alta es crucial para mantener la calidad y la fidelidad de la señal.

---

## 4. Técnicas de Conversión

### Conversión Digital-Analógica (DA)
* Se utilizan **resistencias ponderadas** y redes **R-2R** para generar una salida analógica.
* Se emplean **amplificadores operacionales** para sumar las contribuciones de los bits individuales. Las configuraciones básicas incluyen el modo inversor, no inversor y diferencial.

### Conversión Analógica-Digital (A/D)
* Se basan en métodos de **muestreo y retención** para capturar señales continuas.
* **Tipos de convertidores**:
    * **Destello (Flash)**: Utiliza comparadores en paralelo para una conversión de muy alta rapidez.
    * **Escalera**: Usa un convertidor DA y un contador para aproximar el valor de la señal.
    * **Aproximación Sucesiva**: Realiza una comparación iterativa para lograr mayor eficiencia.

---

## 5. Aplicaciones en Inteligencia Artificial

* **Muestreo y cuantización**: Son fundamentales para la precisión y eficiencia de los algoritmos y sistemas.
* **Procesamiento de señales**:
    * Transformación de datos para alimentar modelos de IA - Convertidores A/D
    * El número de bits y la velocidad de muestreo tienen un impacto directo en la precisión de los modelos.
    * Eficiencia computacional.
* **Reducción de dimensionalidad**: Consiste en disminuir el número de variables a considerar en un problema para obtener un conjunto de características principales.
* **PCA (Análisis de Componentes Principales)**: Técnica de análisis multivariante usada para reducir la dimensionalidad de un conjunto de datos, manteniendo a su vez la mayor cantidad posible de información.