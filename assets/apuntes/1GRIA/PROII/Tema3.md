---
layout: default
use_math: true
---


# Tema 3 - Eficiencia
*Programación II - 1º Grao en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escola Superior de Enxeñaría Informática - Universidade de Vigo*

-----

### Tema 3: Análise da eficiencia de algoritmos

#### 1\. Notación asintótica

É representada cunha O maiúscula (Big-Oh) e representa o límite superior dunha función (o peor dos casos). É unha asíntota superior que garante un límite para o peor caso. Nunca será superado (agás por unha constante multiplicativa).

As súas propiedades son:

  * $O(f(x)) + k = O(f(x))$
  * $O(k \cdot f(x)) = O(f(x))$
  * $O(f(x)) \cdot O(g(x)) = O(f(x) \cdot g(x))$
  * $O(f(x)) + O(g(x)) = O(\max(f(x), g(x)))$

A orde é a potencia de maior grado, por exemplo: $P(n) = 5n^3 + 2n^2 + 9n + 1$ é $O(n^3)$.

Os tipos de notacións O son:

| Función | Notación O |
| :--- | :--- |
| Constante | $O(1)$ |
| Logarítmica | $O(\log n)$ |
| Lineal | $O(n)$ |
| Logarítmica x Lineal | $O(n \log n)$ |
| Cuadrática | $O(n^2)$ |
| Cúbica | $O(n^3)$ |
| Exponencial | $O(a^n)$ |

-----

Os máis habituais son:

  * **$O(1)$** - Operacións básicas.
      * Asignar variable a obxecto
      * Operación Aritmética
      * Comparación de 2 números
      * Acceder a un elemento
  * **$O(n^2)$**; $O(n \log n)$ ou $O(n)$ é eficiente.
  * **$O(2^n)$** non é eficiente.

**Exemplo**

```python
list1 = [0, 1, 2]
list2 = [10, 11, 12]
list3 = []

# O bucle externo execútase n veces (len(list2))
for i in range(0, len(list2)):
    # O bucle interno execútase m veces (len(list1))
    for j in range(0, len(list1)):
        # As operacións internas son O(1)
        list3.append(list1[j] + list2[i]) 

print("Added:", list3[len(list3) - 1])