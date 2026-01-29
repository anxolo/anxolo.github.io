---
layout: apuntes
use_math: true
---


# Fundamentos del proc. de señales
*APS - 1.º Grado en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escuela Superior de Enxeñaría Informática - Universidade de Vigo*

---
# Fundamentos del procesamiento digital de señales

## Procesamiento Digital de Señales (DSP)
Manipulación y análisis de señales de forma digital. Conversión de señales analógicas a digital, proc. mediante algor. matemáticos y técnicas computacionales. Es crucial en telecomunicación, proc. de Audio y Video, instrumentación médica.

## Transformada de Fourier Continua
Herramienta matemática usada para descomponer una función de tiempo continuo en sus componentes de frecuencia. A diferencia de la Trans. de Fou. Discreta (DFT), se aplica a señales continuas en el tiempo.

* **Fórmula:**
    $$X(w) = \int_{-\infty}^{\infty} x(t)e^{-iwt} dt$$
* **Inversa:**
    $$x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(w)e^{-iwt} dw$$

## Transformada de Fourier Discreta (DFT)
Herramienta esencial en el proc. de señales, permitiendo la transf. de valores num. en el dominio del tiempo a una rep. en el dominio de la frecuencia.

* **Propiedades:**
    * Periodicidad
    * Simetría
    * Linealidad
    * Inversión (IDFT)
* **Fórmula:**
    $$X[k] = \sum_{n=0}^{N-1} x[n]e^{-i2\pi kn/N}$$
* **Inversa (IDFT):**
    $$x[n] = (\frac{1}{N}) \sum_{k=0}^{N-1} X[k]e^{-i2\pi kn/N}$$

***

## Introducción al análisis espectral
El espectro de una señal proporciona una representación de la variación de su amplitud y f., esencial para entender la naturaleza de la señal.

* **Fundamentos de la transf. de Fourier:**
    * **Continua / Discreta:** Versión adaptada para señales y sist. digitales.
    * **Rápida (FFT):** Implementación eficiente de la DFT, menos compleja computacionalmente.
* **Amplitud vs Frecuencia:** Muestra las intensidades de las dif. frecuencias presentes en la señal.
* **Análisis espectral en Tiempo Real:** Permite identificar y responder a cambios dinámicos en señales.
* **Espectrogramas:** Herramienta visual que muestra cómo el espectro varía con el tiempo, mediante una visión tridimensional.

### Ventanas temporales
Selección de un segmento específico de tiempo de una señal para analizar su contenido de frecuencia.

* **Compromisos:**
    * Resolución de Frecuencia vs Pendiente de lóbulo espectral
    * Ventana de compresión vs Compromiso entre Tiempo y Frecuencia
* **Tipos de ventanas:**
    * Rectangular (Boxcar)
    * Hanning, Hamming
    * Gauss

***

## Aspectos clave de sistemas discretos

### -> Representación y Análisis de Sistemas Lineales e Invariantes en el tiempo

* **Linealidad:** Se cumple con el principio de Superposición. Si la salida del sist. para una combi. lineal de entradas es igual a la combi. lineal de las salidas corresp.
* **Invarianza en el tiempo:** Un sist. desplazado en el tiempo produce una salida desplazada en el mismo grado.
* **Representación:** Los sist. LTI se representan por su resp. al impulso.

### -> Convolución y Respuesta en Frecuencia

* **Convolución:** Operación matemática fundamental en sist. LTI que describe como se combina la entrada con la resp. al impulso del sist. para producir la salida.
    * **Convolución discreta:** La salida y[n] es la convolución de la entrada x[n] con la respuesta al impulso h[n].
* **Respuesta en Frecuencia:** Describe como el sist. modifica las frec. de una señal de entrada. Se calcula aplicando la T. de Fourier a la respuesta al imp. del sist.

***

## -> Técnicas avanzadas de análisis espectral

### Transformada de Fourier de tiempo corto (STFT)
Combinación de elementos del dominio del tiempo y de la frec. para analizar la evolución temporal de la frecuencia. Útil para señales no estacionarias.

* **Principio de Funcionamiento:** La STFT divide la señal en segmentos cortos de distintos tiempos y aplica la transformada de Fourier a cada segmento.
* **Ventanas Temporales:** Una ventana más estrecha ofrece mejor resolución en tiempo y una más ancha una mejor resolución en frecuencia.
* **Aplicación:** Análisis de señales de audio, procesamiento voz…

### Análisis Wavelet
Proporciona una alternativa a la STFT para analizar señales temporales que varían. El análisis wavelet utiliza ventanas que varían en tamaño, permitiendo una mejor representación de las caract. de alta y baja frecuencia.

* **Wavelets:** Funciones que se concentran en el tiempo y frecuencia, conocidas por ser de duración limitada y media cero.
* **Escalado y Traslación:** Se pueden escalar y trasladar, brindando un análisis detallado a diferentes escalas de tiempo y frec.
* **Aplicación:** Útil en campos como proces. de imágenes, detección de sismos y análisis de señales biomédicas.

### Análisis Multirresolución
Descompone una señal en comp. a diferentes escalas. Útil si se requiere un análisis detallado a varias escalas.

* **Descomposición multinivel:** Descomposición en aproximación y detalle, útil en diferentes bandas de frec. y niveles de detalle.
* **Reconstrucción:** Es posible reconstruir la señal original, útil en reducción de ruido y compresión de datos.
* **Aplicaciones:** Aplicaciones en áreas como la reducción de ruido en señales, compresión y codificación de imágenes/video…