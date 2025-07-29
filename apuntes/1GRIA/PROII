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

[cite\_start]É representada cunha O maiúscula (Big-Oh) e representa o límite superior dunha función (o peor dos casos). [cite: 3] É unha asíntota superior que garante un límite para o peor caso. [cite\_start]Nunca será superado (agás por unha constante multiplicativa). [cite: 7]

[cite\_start]As súas propiedades son: [cite: 4]

  * [cite\_start]$O(f(x)) + k = O(f(x))$ [cite: 4]
  * [cite\_start]$O(k \\cdot f(x)) = O(f(x))$ [cite: 4]
  * [cite\_start]$O(f(x)) \\cdot O(g(x)) = O(f(x) \\cdot g(x))$ [cite: 4]
  * [cite\_start]$O(f(x)) + O(g(x)) = O(\\max(f(x), g(x)))$ [cite: 4]

[cite\_start]A orde é a potencia de maior grado, por exemplo: $P(n) = 5n^3 + 2n^2 + 9n + 1$ é $O(n^3)$. [cite: 4]

[cite\_start]Os tipos de notacións O son: [cite: 5]

| Función | Notación O |
| :--- | :--- |
| Constante | $O(1)$ |
| Logarítmica | $O(\\log n)$ |
| Lineal | $O(n)$ |
| Logarítmica x Lineal | $O(n \\log n)$ |
| Cuadrática | $O(n^2)$ |
| Cúbica | $O(n^3)$ |
| Exponencial | $O(a^n)$ |

-----

[cite\_start]Os máis habituais son: [cite: 6]

  * [cite\_start]**$O(1)$** - Operacións básicas. [cite: 7]
      * [cite\_start]Asignar variable a obxecto [cite: 7]
      * [cite\_start]Operación Aritmética [cite: 7]
      * [cite\_start]Comparación de 2 números [cite: 7]
      * [cite\_start]Acceder a un elemento [cite: 7]
  * **$O(n^2)$**; [cite\_start]$O(n \\log n)$ ou $O(n)$ é eficiente. [cite: 8]
  * [cite\_start]**$O(2^n)$** non é eficiente. [cite: 8]

[cite\_start]**Exemplo** [cite: 6]

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
```

[cite\_start]**Complexidade total:** $O(1) + O(1) + O(n^2) = O(n^2)$ [cite: 7]

-----

#### 2\. Elección do Algoritmo óptimo

[cite\_start]Ás veces podemos ter varios algoritmos da mesma complexidade para resolver un problema, non obstante cómpre observar factores coma o caso medio ou constantes. [cite: 10]

[cite\_start]Por exemplo, se temos $f(n) = 10^{100}n$ e $g(n) = 10n \\log n$, a pesar de ser $O(n)$ e $O(n \\log n)$ respectivamente, $g(n)$ é máis eficiente para $n$ non moi grandes debido ao alto coeficiente da primeira. [cite: 8]

[cite\_start]Normalmente $O(n \\log n)$ ou $O(n)$ é eficiente, $O(n^2)$ (nalgúns casos) e $O(2^n)$ non. [cite: 8]

-----

### 3\. Eficiencias en estruturas de datos de Python

[cite\_start]Sobre listas: `len` custa $O(1)$, noutras non. [cite: 11]

| Operación | Tempo | Operación | Tempo/complexidade |
| :--- | :--- | :--- | :--- |
| `len(data)` | $O(1)$ | `data[i] = val` | $O(1)$ |
| `data.append(value)` | $O(1)^*$ | `data.insert(k, value)` | $O(n-k+1)^*$ |
| `data.count(value)` | $O(n)$ | `del data[k]` | $O(n-k)^*$ |
| `data.index(value)` | $O(k)$ | `data.pop()` | $O(1)^*$ |
| `value in data` | $O(k)$ | `data.pop(k)` | $O(n-k)^*$ |
| `data1 == data2` | $O(\\min(n\_1, n\_2))$ | `data.remove(value)` | $O(n)^*$ |
| `data[j:k]` | $O(k-j+1)$ | `data.extend(list2)` | $O(k\_2)^*$ |
| `data1 + data2` | $O(n\_1+n\_2)$ | `data1 += data2` | $O(k\_2)^*$ |
| `c * data` | $O(c \\cdot n)$ | `data.reverse()` | $O(n)$ |
| | | `data.sort()` | $O(n \\log n)$ |

[cite\_start]\* (tempo medio) [cite: 13]

-----

### 4\. Deque VS Listas

En python podemos considerar a estrutura `collections.deque` coma optimizada para insercións ou eliminacións eficientes ao principio ou final da lista. [cite\_start]Unha comparativa sería: [cite: 13]

| Operación | Lista | Deque |
| :--- | :--- | :--- |
| Acceso por índice (`D[k]`) | $O(1)$ | $O(1)$ |
| Engadir ao final / `append` | $O(1)^*$ | $O(1)$ |
| Engadir ao inicio / `appendleft` / `insert` | $O(n)$ | $O(1)$ |
| Eliminar ao final / `pop` | $O(1)^*$ | $O(1)$ |
| Eliminar ao inicio / `pop(0)` / `popleft` | $O(n)$ | $O(1)$ |
| Engadir/eliminar no medio / `insert` / `del` | $O(n)$ | $O(n)$ |

-----
