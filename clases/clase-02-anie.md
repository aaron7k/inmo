# Aprendizaje para la realización de solicitudes de prompt

**Presentador:** Anie | **Fecha:** Viernes 5 junio 2026 | **Audiencia:** Todos | **Tier:** 1 · Fundamentos | **Duración:** 90 min

---

## Objetivos

Al finalizar esta clase serás capaz de:

1. Comprender qué es el prompt engineering y por qué es una habilidad esencial en el trabajo con IA.
2. Identificar los componentes anatómicos de un prompt bien estructurado (rol, contexto, instrucción, ejemplos y formato).
3. Aplicar las técnicas fundamentales de prompting: zero-shot, few-shot y chain-of-thought.
4. Reescribir prompts vagos en prompts claros, específicos y efectivos usando un proceso de iteración.
5. Seleccionar la herramienta de IA adecuada según el tipo de tarea y experimentar con diferentes plataformas.

---

## Conceptos clave

### Anatomía del prompt

Un prompt de alta calidad se construye combinando estos elementos:

| Componente | Descripción | Ejemplo |
|---|---|---|
| **Rol** | Define quién es la IA para esta tarea. Da perspectiva y voz. | "Actúa como un redactor experto en marketing digital..." |
| **Contexto** | Información de fondo que el modelo necesita para entender la situación. | "...estoy lanzando una app de bienes raíces para el mercado latinoamericano..." |
| **Instrucción** | La tarea concreta, clara y sin ambigüedad. | "...escribe 3 variantes de asunto para un correo de bienvenida." |
| **Ejemplos** | Muestras del output esperado (few-shot). Encuadran el tono y formato. | "Ejemplo: 'Bienvenido a tu nuevo hogar digital'" |
| **Formato de salida** | Especificación del tipo de respuesta esperada. | "Devuelve una lista numerada, máximo 10 palabras por línea." |

### Tipos de prompting

- **Zero-shot:** Se le pide al modelo una tarea sin proporcionar ejemplos previos. Depende completamente del conocimiento preentrenado del modelo. Ideal para tareas simples.
- **One-shot:** Se proporciona exactamente un ejemplo antes de la tarea. Útil para establecer el tono o formato esperado.
- **Few-shot:** Se incluyen entre 3 y 5 ejemplos para guiar al modelo. Aumenta significativamente la consistencia del output para tareas más complejas.
- **Chain-of-Thought (CoT):** Se instruye al modelo para que muestre su razonamiento paso a paso antes de dar la respuesta final. Se activa con frases como "Piensa paso a paso" o "Explica tu razonamiento."
- **Role prompting:** Se asigna un rol o persona al modelo para obtener respuestas con perspectiva experta y tono apropiado.

### El principio central

> La calidad del output es directamente proporcional a la calidad del input. Un prompt vago produce una respuesta vaga. Un prompt específico produce una respuesta específica.

### Errores comunes en prompts

- Instrucciones ambiguas ("hazlo mejor", "algo creativo")
- Ausencia de contexto (el modelo no sabe para quién o para qué)
- Sin especificación de formato (la IA elige uno por defecto, que puede no ser el útil)
- Prompts demasiado largos sin estructura (el modelo puede perderse en el texto)
- No iterar: tratar el primer resultado como definitivo

---

## Stack tecnológico

| Herramienta | Tipo | Plan | Mejor para | URL |
|---|---|---|---|---|
| Claude.ai | Asistente IA | Freemium | Razonamiento complejo, redacción larga, análisis | https://claude.ai |
| ChatGPT | Asistente IA | Freemium | Uso general, brainstorming, código | https://chat.openai.com |
| Gemini | Asistente IA | Freemium | Integración con Google Workspace, multimodal | https://gemini.google.com |
| PromptBase | Marketplace de prompts | Pago | Comprar y vender prompts optimizados | https://promptbase.com |
| PromptHero | Comunidad de prompts | Freemium | Prompts para imágenes (Midjourney, DALL-E) | https://prompthero.com |
| Notion AI | IA integrada | Freemium | Redacción y resumen dentro del flujo de trabajo | https://notion.so |
| Perplexity AI | Búsqueda con IA | Freemium | Investigación con fuentes citadas | https://www.perplexity.ai |
| Poe | Multi-modelo | Freemium | Comparar respuestas de distintos modelos | https://poe.com |

---

## Contenido

### Módulo 1 — Qué es el prompt engineering (0–20 min)

- Definición: el prompt engineering es el puente entre la intención humana y el output de la IA. Consiste en traducir objetivos en instrucciones precisas que el modelo puede interpretar con exactitud.
- Evolución: de novelty a habilidad profesional crítica. En 2025–2026 se catalogaron más de 58 técnicas de prompting en texto.
- Por qué importa: el mismo modelo, con prompts distintos, produce resultados radicalmente diferentes.
- Demo en vivo: comparación de un prompt vago vs. un prompt estructurado en Claude.ai.

### Módulo 2 — Anatomía del prompt: los 5 componentes (20–45 min)

- Desglose detallado de cada componente: Rol, Contexto, Instrucción, Ejemplos, Formato.
- Regla práctica: "Tratar el prompt como un contrato. Define qué quieres, qué información puede usar el modelo, qué restricciones aplican, el formato exacto del output."
- Ejercicio guiado: construir un prompt completo desde cero para un caso de uso del equipo (ej. redactar un email de seguimiento a un lead de propiedad).
- Uso de etiquetas XML para prompts complejos: encerrar contexto, instrucciones y ejemplos en secciones delimitadas mejora la interpretación del modelo.

### Módulo 3 — Técnicas de prompting (45–65 min)

- **Zero-shot:** cuándo usarlo, limitaciones, casos ideales.
- **Few-shot:** incluir 3–5 ejemplos para anclar formato y tono. Envolverlos en etiquetas para que el modelo los distinga.
- **Chain-of-Thought:** uso de "Piensa paso a paso" para tareas de razonamiento, análisis o toma de decisiones. Mejora demostrada en tareas multi-paso.
- **Role prompting:** asignar personas expertas ("Eres un agente inmobiliario con 15 años de experiencia...").
- Comparativa en vivo: la misma tarea con las 4 técnicas para ver diferencias de output.

### Módulo 4 — Iteración y mejora continua (65–90 min)

- El proceso de iteración: evaluar el output, identificar qué funcionó y qué no, ajustar el wording.
- Pequeños ajustes (tono, longitud, restricciones) producen grandes mejoras.
- Prompts como documentos vivos: guardar, versionar y reutilizar los mejores prompts del equipo.
- Adaptive prompting: los sistemas modernos incorporan feedback en tiempo real para auto-optimizar prompts.
- Cierre: práctica del ejercicio final + Q&A.

---

## Ejercicio práctico

### Reescritura de prompts: de vago a efectivo

**Objetivo:** Transformar prompts pobremente estructurados en prompts claros y completos aplicando la anatomía de los 5 componentes.

**Instrucciones:**

1. Observa el prompt original (vago).
2. Identifica qué componentes faltan: rol, contexto, instrucción, ejemplos, formato.
3. Reescribe el prompt incorporando todos los elementos.
4. Prueba ambas versiones en Claude.ai o ChatGPT.
5. Compara los outputs y discute en equipo: ¿qué cambió? ¿qué mejoró?

---

**Caso A — Bienes raíces**

Prompt original:
> "Escribe algo sobre una propiedad."

Prompt mejorado:
> "Actúa como un agente inmobiliario experto en propiedades de lujo en Ciudad de México. Tengo una casa en Polanco de 350 m², 4 recámaras, alberca y jardín, precio: $8,500,000 MXN. Escribe una descripción de venta para portal inmobiliario de máximo 120 palabras, en tono profesional pero cercano, destacando los 3 beneficios principales. Formato: un párrafo continuo sin bullet points."

---

**Caso B — Atención a clientes**

Prompt original:
> "Responde al cliente enojado."

Prompt mejorado:
> "Eres un especialista en atención al cliente de una empresa inmobiliaria. El cliente Juan García dice que lleva 3 semanas sin recibir actualizaciones sobre su trámite de escrituración. Está frustrado y considera cancelar. Escribe un correo de respuesta empático, que reconozca la espera, explique los próximos pasos concretos con fechas aproximadas, y ofrezca una llamada de seguimiento. Tono: profesional y cálido. Extensión: máximo 150 palabras."

---

**Caso C — Contenido de redes sociales**

Prompt original:
> "Haz un post de Instagram."

Prompt mejorado:
> "Actúa como community manager especializado en real estate. Crea un post de Instagram para anunciar una nueva propiedad en venta: departamento de 2 recámaras en Guadalajara, zona Zapopan, $2,800,000 MXN. Audiencia: parejas jóvenes de 28–40 años. Incluye: gancho inicial impactante, 3 beneficios clave como bullet points, llamada a la acción, y 5 hashtags relevantes. Tono: aspiracional y accesible."

---

**Reflexión grupal:**
- ¿Cuánto tiempo tardaste en mejorar el prompt?
- ¿Cuál fue la diferencia de calidad en el output?
- ¿Qué elemento tuvo mayor impacto en el resultado?

---

## Recursos

1. **Prompt Engineering Guide** — Guía de referencia completa con técnicas, ejemplos y casos de uso.
   URL: https://www.promptingguide.ai

2. **LearnPrompting.org** — Curso gratuito y open-source sobre prompt engineering, desde fundamentos hasta técnicas avanzadas.
   URL: https://learnprompting.org

3. **OpenAI Prompt Engineering Guide** — Estrategias oficiales de OpenAI para mejorar los resultados con GPT-4 y GPT-4o.
   URL: https://platform.openai.com/docs/guides/prompt-engineering

4. **Claude Prompting Best Practices** — Documentación oficial de Anthropic con las mejores prácticas para Claude.
   URL: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices

5. **The Prompt Report (2025)** — Investigación académica que cataloga 58 técnicas de prompting en texto con evidencia empírica.
   URL: https://arxiv.org/pdf/2509.11295

6. **IBM: What is Prompt Engineering?** — Guía empresarial de IBM sobre técnicas, herramientas y casos de uso en producción.
   URL: https://www.ibm.com/think/prompt-engineering

7. **Google's Prompt Design Guide** — Recomendaciones de Google para diseño de prompts en Gemini y Vertex AI.
   URL: https://ai.google.dev/gemini-api/docs/prompting-intro

8. **Lakera Prompt Engineering Guide** — Guía comprensiva que cubre desde fundamentos hasta técnicas avanzadas y consideraciones de seguridad.
   URL: https://www.lakera.ai/blog/prompt-engineering-guide

---

## Acciones post-clase

- [ ] Guardar tus mejores prompts de hoy en un documento compartido del equipo (Google Docs / Notion).
- [ ] Practicar la reescritura de al menos 3 prompts que uses actualmente en tu trabajo.
- [ ] Explorar al menos 2 herramientas del stack tecnológico que no hayas usado antes.
- [ ] Aplicar la técnica chain-of-thought en una tarea real esta semana y compartir el resultado en el canal del equipo.
- [ ] Revisar el recurso de LearnPrompting.org (módulo de fundamentos) antes de la próxima clase.
- [ ] Proponer un caso de uso propio del equipo para analizar en la siguiente sesión.

---

*Clase 02 · Tier 1 · Fundamentos · Presentado por Anie · 5 junio 2026*
