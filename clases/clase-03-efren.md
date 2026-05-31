# ⚡ Habilidad para hacer prompt

**Presentador:** Efren | **Fecha:** Viernes 5 junio 2026 | **Audiencia:** Todos | **Tier:** 1 · Fundamentos | **Duración:** 90 min

---

## 🎯 Objetivos

Al finalizar esta clase, el participante será capaz de:

1. **Distinguir y aplicar** las técnicas fundamentales de prompting: zero-shot, few-shot y chain-of-thought, eligiendo la más adecuada según el tipo de tarea.
2. **Dominar el role prompting** para obtener respuestas especializadas asignando roles, contexto y perspectiva al modelo de IA.
3. **Construir prompts estructurados** usando separadores, etiquetas XML, formatos de salida y cadenas de prompts para tareas complejas.
4. **Evitar los errores más comunes** de prompting (prompts vagos, sin contexto, sin formato definido) y transformar prompts mediocres en prompts de alto rendimiento.
5. **Aplicar técnicas avanzadas** (self-criticism, decomposition, prompt chaining) en casos de uso reales de negocios: marketing, atención al cliente, análisis de datos y creación de contenido.

---

## 🔑 Conceptos clave

### 1. Zero-Shot Prompting
Pedirle al modelo que realice una tarea **sin proporcionar ejemplos previos**. El modelo se apoya en su entrenamiento previo para inferir la respuesta correcta. Funciona bien para tareas simples y directas.

**Ejemplo:**
```
Clasifica la emoción del siguiente texto: "Este producto es increíble, lo recomiendo a todos."
```
**Respuesta esperada:** Positiva

**Cuándo usarlo:** Traducciones simples, resúmenes directos, preguntas factoriales, clasificaciones obvias.

---

### 2. Few-Shot Prompting
Proporcionar **2 a 5 ejemplos** del formato de entrada-salida deseado antes de la tarea real. El modelo aprende el patrón por demostración (aprendizaje en contexto).

**Ejemplo:**
```
Clasifica la emoción de los siguientes textos:

Texto: "El servicio fue terrible, nunca volvería." → Negativa
Texto: "No estuvo mal, cumplió lo esperado." → Neutral
Texto: "¡Absolutamente maravilloso, superó mis expectativas!" → Positiva
Texto: "Me tardé 2 horas esperando y nadie me atendió." → ?
```
**Respuesta esperada:** Negativa

**Cuándo usarlo:** Clasificación personalizada, generación de contenido con formato específico, tareas donde el estilo importa.

---

### 3. Chain-of-Thought (CoT) — Cadena de pensamiento
Instruir al modelo para que **explique su razonamiento paso a paso** antes de dar la respuesta final. Reduce errores en tareas de razonamiento complejo, matemáticas, lógica y análisis.

**Forma zero-shot CoT:** Simplemente agregar "Piensa paso a paso" o "Let's think step by step" al final del prompt.

**Ejemplo:**
```
Un agente inmobiliario vende 3 propiedades en enero por $180,000, $245,000 y $310,000.
Su comisión es del 3% sobre el total. ¿Cuánto gana en total?
Piensa paso a paso.
```
**Respuesta esperada (con razonamiento):**
- Total ventas: $180,000 + $245,000 + $310,000 = $735,000
- Comisión: $735,000 × 3% = $22,050

**Cuándo usarlo:** Problemas matemáticos, decisiones de negocio, análisis de escenarios, debugging de procesos.

---

### 4. Role Prompting — Asignación de roles
Asignar al modelo un **rol, personalidad o expertise específico** para obtener respuestas alineadas con esa perspectiva. Funciona especialmente bien en el system prompt o al inicio de la conversación.

**Ejemplo básico:**
```
Actúa como un experto en marketing inmobiliario con 15 años de experiencia en el mercado latinoamericano. Tu comunicación es clara, orientada a resultados y empática con los clientes.
```

**Ejemplo avanzado (con restricciones):**
```
Eres María, agente de atención al cliente de InmoPlus. Tu tono es amable y profesional.
Respondes SOLO preguntas relacionadas con propiedades en venta o renta.
Si el cliente pregunta algo fuera de tu área, di: "Para eso te conectaré con el especialista correcto."
```

**Cuándo usarlo:** Chatbots, generación de contenido especializado, análisis desde perspectivas específicas (jurídica, financiera, técnica).

---

### 5. Prompt Estructurado con Etiquetas XML
Usar **etiquetas o delimitadores** para separar instrucciones, contexto y datos de entrada. Esto reduce ambigüedad y mejora la consistencia.

**Ejemplo:**
```xml
<rol>Eres un agente de bienes raíces experto en propiedades comerciales.</rol>

<tarea>Escribe un correo de seguimiento para un cliente que visitó una propiedad ayer.</tarea>

<contexto>
- Cliente: Carlos Méndez
- Propiedad: Oficina 302, Torre Reforma, 85 m²
- Precio: $1,200,000 MXN
- El cliente mostró interés pero quiere tiempo para decidir
</contexto>

<formato>Correo profesional, máximo 150 palabras, tono cálido y sin presión.</formato>
```

---

### 6. Self-Criticism & Auto-revisión
Pedirle al modelo que **evalúe y mejore su propia respuesta** usando rúbricas o criterios definidos.

**Ejemplo:**
```
Escribe un anuncio para una propiedad en renta. Luego revísalo y mejóralo considerando:
- ¿Incluye los beneficios principales?
- ¿El lenguaje es atractivo y claro?
- ¿Tiene un llamado a la acción?
```

---

### 7. Decomposition — Descomposición de tareas
Dividir **tareas complejas** en subtareas más pequeñas y manejables. Cada subtarea produce un resultado que alimenta la siguiente.

**Ejemplo:**
```
Necesito preparar una presentación de ventas para una propiedad. Ayúdame con:
1. Primero: 5 puntos fuertes de la propiedad basándote en estos datos: [datos]
2. Luego: Convierte esos puntos en frases de venta persuasivas
3. Finalmente: Organízalos en un orden lógico de presentación
```

---

### 8. Prompt Chaining — Cadena de prompts
Usar la salida de un prompt como entrada del siguiente, construyendo **flujos de trabajo multi-paso** para tareas complejas y largas.

**Ejemplo de flujo:**
```
Prompt 1 → Investigar el mercado de una zona
Prompt 2 → Analizar competencia basándose en los resultados del Prompt 1
Prompt 3 → Generar estrategia de precio basada en el análisis anterior
Prompt 4 → Redactar reporte ejecutivo con toda la información acumulada
```

---

## 🛠️ Stack tecnológico

| Herramienta | Descripción | Precio | URL |
|---|---|---|---|
| **Claude** (Anthropic) | Modelo avanzado, excelente para razonamiento complejo y prompts estructurados. Context window de 200K tokens. | Freemium | [claude.ai](https://claude.ai) |
| **ChatGPT** (OpenAI) | El más conocido, ideal para tareas generales y código. GPT-4o incluye visión y memoria. | Freemium | [chatgpt.com](https://chatgpt.com) |
| **Gemini** (Google) | Integrado con Google Workspace; excelente para búsqueda web en tiempo real y documentos. | Freemium | [gemini.google.com](https://gemini.google.com) |
| **Perplexity AI** | Motor de búsqueda con IA, ideal para investigación con fuentes citadas y prompts de consulta. | Freemium | [perplexity.ai](https://www.perplexity.ai) |
| **PromptHero** | Biblioteca de prompts para imágenes (Midjourney, DALL-E, Stable Diffusion) y texto. | Freemium | [prompthero.com](https://prompthero.com) |
| **PromptLayer** | Plataforma para registrar, versionar, probar y optimizar prompts en producción. | Freemium | [promptlayer.com](https://promptlayer.com) |
| **LangChain** | Framework open-source para construir aplicaciones con LLMs: cadenas, agentes y RAG. | Gratis | [langchain.com](https://www.langchain.com) |

---

## 📋 Contenido de la clase

### Módulo 1 · Técnicas básicas (20 min)
**De cero a prompts que funcionan**

- ¿Qué es un prompt y por qué importa su estructura?
- Los 4 elementos de un buen prompt: **Rol + Tarea + Contexto + Formato**
- Zero-shot vs. Few-shot: cuándo usar cada uno
- Demostración en vivo: mismo prompt en Claude, ChatGPT y Gemini
- Ejercicio rápido: reformular 3 prompts vagos con la estructura RTCF

**Conceptos cubiertos:** Zero-shot, Few-shot, estructura básica, claridad e intención

---

### Módulo 2 · Técnicas avanzadas (25 min)
**Haciendo que la IA razone como experto**

- Chain-of-Thought: activa el "modo razonamiento" del modelo
- Role prompting avanzado: roles + restricciones + tono + fallbacks
- Prompts estructurados con XML/delimitadores
- Self-criticism: hacer que el modelo revise su propio trabajo
- Decomposition: dividir tareas complejas en partes manejables
- Prompt chaining: flujos de trabajo multi-paso automatizados

**Demostración:** Análisis de mercado inmobiliario en 4 prompts encadenados

---

### Módulo 3 · Práctica guiada (25 min)
**Taller: transforma tus prompts**

- Cada participante comparte un prompt que usa regularmente en su trabajo
- En vivo: diagnóstico del prompt (¿qué le falta? ¿qué sobra?)
- Aplicar técnicas: añadir rol, contexto, cadena de pensamiento, formato
- Comparar resultado del prompt original vs. el prompt mejorado
- Feedback grupal y variaciones adicionales

**Herramientas:** Claude Sonnet, ChatGPT-4o (se prueban en paralelo)

---

### Módulo 4 · Casos de uso reales (20 min)
**Aplicaciones concretas para inmobiliaria y negocios**

- **Marketing:** Generación de anuncios de propiedades con diferentes tonos y plataformas (Instagram, email, WhatsApp)
- **Ventas:** Seguimiento personalizado a clientes según etapa del embudo
- **Operaciones:** Análisis de contratos, extracción de datos clave, resúmenes ejecutivos
- **Atención al cliente:** Respuestas estándar sin perder el toque humano
- **Análisis de mercado:** Research de zonas, competencia y tendencias de precio

**Recurso:** Biblioteca de 20 prompts listos para usar en InmoPlus

---

## 💪 Ejercicio práctico

### "Del prompt malo al prompt poderoso"

**Instrucciones:** Transforma el siguiente prompt mediocre aplicando las técnicas de la clase.

**Prompt original (malo):**
```
Escríbeme algo sobre esta propiedad para publicarla.
```

**Paso 1 — Añadir Rol:**
```
Eres un copywriter especializado en bienes raíces de lujo...
```

**Paso 2 — Añadir Tarea específica:**
```
...Escribe 3 versiones de un anuncio para la siguiente propiedad:
una para Instagram (máx 150 caracteres), una para email marketing (300 palabras)
y una para WhatsApp (máx 100 caracteres con emoji).
```

**Paso 3 — Añadir Contexto:**
```
Propiedad: Departamento 2 recámaras, 85 m², piso 12, vista al parque,
amenidades (gym, alberca, seguridad 24/7), Col. Polanco CDMX, precio $4,200,000 MXN.
El cliente objetivo es profesional de 30-45 años, familia joven.
```

**Paso 4 — Añadir Formato y restricciones:**
```
Formato: Enumera las 3 versiones claramente. Usa lenguaje aspiracional pero honesto.
Incluye un llamado a la acción en cada versión. No uses clichés como "no te pierdas esta oportunidad".
```

**Prompt final completo:**
```
Eres un copywriter especializado en bienes raíces de lujo con experiencia en
marketing digital para el mercado mexicano.

Escribe 3 versiones de un anuncio para la siguiente propiedad:
- Versión Instagram: máximo 150 caracteres, incluye 2-3 emojis relevantes
- Versión Email marketing: 300 palabras, tono elegante y detallado
- Versión WhatsApp: máximo 100 caracteres, directo y con llamado a la acción

PROPIEDAD:
- Tipo: Departamento, 2 recámaras, 2 baños
- Superficie: 85 m², piso 12 con balcón y vista al parque
- Amenidades: Gym, alberca, seguridad 24/7, área de coworking
- Ubicación: Col. Polanco, CDMX
- Precio: $4,200,000 MXN
- Público objetivo: Profesionales de 30-45 años, familias jóvenes

Usa lenguaje aspiracional pero honesto. Incluye un llamado a la acción en
cada versión. Evita clichés como "no te pierdas esta oportunidad".
Enumera claramente las 3 versiones.
```

**Resultado esperado:** Comparar en vivo la calidad de la respuesta del prompt original vs. el prompt mejorado.

---

## 📚 Recursos

| Recurso | Descripción | URL |
|---|---|---|
| **Anthropic Prompt Engineering Overview** | Guía oficial de Anthropic para construir prompts efectivos con Claude. Incluye técnicas avanzadas y mejores prácticas. | [docs.anthropic.com](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) |
| **Tutorial Interactivo de Anthropic** | Curso de 9 capítulos de Anthropic: desde prompts básicos hasta casos de uso empresariales avanzados. Incluido en GitHub. | [github.com/anthropics/prompt-eng-interactive-tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) |
| **OpenAI Prompt Engineering Guide** | Guía oficial de OpenAI con 6 estrategias y 20+ tácticas concretas para ChatGPT y GPT-4o. | [platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering) |
| **OpenAI Cookbook** | Repositorio de ejemplos prácticos y recetas de prompts para casos de uso reales. Código Python incluido. | [cookbook.openai.com](https://cookbook.openai.com) |
| **The Prompt Report (2025)** | Paper académico con 58 técnicas de prompting clasificadas y evaluadas. La referencia científica más completa. | [arxiv.org/pdf/2509.11295](https://arxiv.org/pdf/2509.11295) |
| **IBM Prompt Engineering Techniques** | Artículo técnico de IBM que explica las principales técnicas con ejemplos claros y comparaciones. | [ibm.com/think/topics/prompt-engineering-techniques](https://www.ibm.com/think/topics/prompt-engineering-techniques) |
| **Lakera Prompt Engineering Guide 2026** | Guía actualizada que cubre técnicas avanzadas, prompt injection, y tendencias emergentes en agentes. | [lakera.ai/blog/prompt-engineering-guide](https://www.lakera.ai/blog/prompt-engineering-guide) |
| **PromptLayer Blog** | Artículos prácticos sobre optimización de prompts en producción, versionado y evaluación de calidad. | [promptlayer.com/blog](https://blog.promptlayer.com) |

---

## 🔗 Acciones post-clase

- [ ] **Instalar y configurar** Claude, ChatGPT y Gemini en tu navegador (extensiones o bookmarks)
- [ ] **Aplicar la estructura RTCF** (Rol + Tarea + Contexto + Formato) en el próximo prompt que uses en tu trabajo
- [ ] **Crear tu biblioteca personal** de 5 prompts útiles para tus tareas diarias, con al menos una de las técnicas avanzadas
- [ ] **Probar Chain-of-Thought** en un análisis de mercado o reporte de tu área
- [ ] **Explorar el tutorial interactivo** de Anthropic (GitHub): completar al menos los capítulos 1-6
- [ ] **Compartir en el grupo** un prompt transformado (antes/después) y el resultado obtenido
- [ ] **Revisar el OpenAI Cookbook** y elegir 1 receta aplicable a tu área de trabajo

---

*Clase 03 · Serie IA Aplicada · InmoPlus 2026*
