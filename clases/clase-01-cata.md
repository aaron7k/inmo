# 🌐 Alcance y capacidad de IA para integrarla a tareas diarias

**Presentador:** Catalina (Cata) | **Fecha:** Viernes 29 mayo 2026 | **Audiencia:** Todos | **Tier:** 1 · Fundamentos | **Duración:** 90 min

---

## 🎯 Objetivos de la clase

1. **Comprender qué puede y qué no puede hacer la IA** en el contexto laboral actual, diferenciando tareas donde agrega valor real de aquellas donde aún falla.
2. **Identificar al menos 3 tareas propias del día a día** que podrían delegarse o acelerarse con herramientas de IA disponibles hoy.
3. **Distinguir las diferencias prácticas** entre los principales asistentes de IA (Claude, ChatGPT, Gemini) y saber cuándo usar cada uno.
4. **Escribir un prompt efectivo** siguiendo la estructura Rol + Contexto + Tarea + Formato para obtener resultados concretos.
5. **Completar un ejercicio práctico en vivo** usando al menos una herramienta de IA para resolver una tarea real del equipo.

---

## 🔑 Conceptos clave

| Término | Definición |
|---|---|
| **IA Generativa** | Sistemas de inteligencia artificial capaces de crear contenido nuevo (texto, imágenes, código, audio) a partir de patrones aprendidos durante su entrenamiento. |
| **LLM (Large Language Model)** | Modelo de lenguaje de gran escala; el motor detrás de ChatGPT, Claude, Gemini. Predice texto estadísticamente basado en contexto. |
| **Prompt** | Instrucción o entrada de texto que se le da a una IA para obtener una respuesta. La calidad del prompt determina en gran medida la calidad de la salida. |
| **Prompt Engineering** | Arte y técnica de redactar instrucciones claras, específicas y estructuradas para obtener mejores resultados de la IA. |
| **Alucinación (Hallucination)** | Fenómeno donde la IA genera información falsa o inventada con aparente seguridad. Requiere verificación humana siempre. |
| **Contexto (Context Window)** | Cantidad máxima de texto que un modelo puede "leer" y recordar en una sola conversación. Claude maneja hasta 200K tokens. |
| **Agente de IA (AI Agent)** | IA que puede planificar y ejecutar secuencias de acciones de forma autónoma: buscar en la web, escribir código, leer archivos, etc. |
| **RAG (Retrieval-Augmented Generation)** | Técnica que combina búsqueda en bases de datos propias con generación de texto, para que la IA responda con información actualizada y específica. |
| **Multimodalidad** | Capacidad de un modelo para procesar y generar diferentes tipos de datos: texto, imágenes, audio, video y código. |
| **Token** | Unidad básica de procesamiento de un LLM. Aproximadamente 1 token ≈ 4 caracteres en inglés o 3 en español. |

---

## 🛠️ Stack tecnológico

| Herramienta | Para qué sirve | Plan | URL |
|---|---|---|---|
| **Claude (Anthropic)** | Redacción avanzada, análisis de documentos largos, código, razonamiento complejo. Mejor para seguir instrucciones detalladas y escritura matizada. | Free / Pro $20/mes | [claude.ai](https://claude.ai) |
| **ChatGPT (OpenAI)** | Asistente general: correos, resúmenes, brainstorming, explicaciones. Excelente para conversaciones cotidianas y búsqueda con GPT-4o. | Free / Plus $20/mes | [chatgpt.com](https://chatgpt.com) |
| **Gemini (Google)** | Búsqueda en tiempo real, integración nativa con Gmail, Drive y Docs. Ideal para tareas que requieren información actual. | Free / Advanced $20/mes | [gemini.google.com](https://gemini.google.com) |
| **Microsoft Copilot** | IA integrada en Word, Excel, PowerPoint, Outlook y Teams. Automatiza tareas dentro del ecosistema Office 365. | Incluido en M365 Business / $30/usuario/mes | [copilot.microsoft.com](https://copilot.microsoft.com) |
| **Notion AI** | Resumen de notas, generación de contenido estructurado, bases de conocimiento inteligentes, creación de documentos. | Gratis con límites / $10/mes adicional | [notion.so](https://www.notion.so) |
| **Perplexity AI** | Motor de búsqueda potenciado con IA: responde preguntas citando fuentes verificables en tiempo real. Ideal para investigación. | Free / Pro $20/mes | [perplexity.ai](https://www.perplexity.ai) |
| **Grammarly** | Corrección gramatical, mejora de tono y claridad en escritura profesional. Se integra con Gmail, Slack, Docs y más. | Free / Premium $12/mes | [grammarly.com](https://www.grammarly.com) |
| **Otter.ai** | Transcripción y resumen automático de reuniones. Se conecta a Zoom, Teams y Google Meet. Genera actas en segundos. | Free / Pro $16.99/mes | [otter.ai](https://otter.ai) |
| **Gamma** | Crea presentaciones, documentos y sitios web desde un prompt o texto. Alternativa rápida a PowerPoint con IA generativa. | Free / Pro $10/mes | [gamma.app](https://gamma.app) |
| **Canva AI** | Diseño gráfico asistido por IA: imágenes, presentaciones, videos, posts para redes sociales. Interfaz muy intuitiva. | Free / Pro $14.99/mes | [canva.com](https://www.canva.com) |

---

## 📋 Contenido de la clase

### Módulo 1: ¿Qué puede hacer la IA hoy? (~20 min)

**Desmitificando la IA — de la fantasía a la herramienta**

- **El estado actual:** En 2026, el 91% de las empresas usan IA en alguna capacidad. Los empleados que la usan diariamente reportan hasta un 40% de mejora en productividad y algunos power users recuperan más de 9 horas por semana.
- **Lo que SÍ hace bien hoy:**
  - Redactar y editar textos (correos, reportes, propuestas)
  - Resumir documentos largos en segundos
  - Generar ideas y hacer lluvia de conceptos
  - Escribir y depurar código
  - Responder preguntas y explicar conceptos complejos
  - Traducir y adaptar tono de comunicación
  - Analizar datos y crear visualizaciones básicas
- **Lo que NO hace bien (aún):**
  - Recordar conversaciones pasadas (sin herramientas específicas)
  - Razonar matemáticamente con precisión total
  - Acceder a información en tiempo real (sin plugins)
  - Verificar datos propios — puede "alucinar"
  - Reemplazar el juicio humano en decisiones críticas

**Actividad rápida (5 min):** Cada persona escribe en un post-it (o en el chat) 1 tarea de su semana que podría potencialmente delegarse a IA.

---

### Módulo 2: Las herramientas principales y cuándo usarlas (~25 min)

**Claude vs ChatGPT vs Gemini — guía práctica**

| Situación | Herramienta recomendada | Por qué |
|---|---|---|
| Redactar un informe o propuesta larga | Claude | Sigue instrucciones detalladas, mejor coherencia en textos largos |
| Responder correos rápidos | ChatGPT o Gemini en Gmail | Rápido, integrado, contexto de conversación fluido |
| Buscar información reciente | Gemini o Perplexity | Acceso en tiempo real a la web con citas |
| Preparar una presentación | Gamma + ChatGPT | Genera estructura y slides desde un prompt |
| Transcribir reuniones | Otter.ai | Especializado en voz, crea actas automáticamente |
| Corregir ortografía y tono | Grammarly | Integrado en cualquier app de escritura |
| Analizar un contrato o documento PDF | Claude | Ventana de contexto de 200K tokens |
| Escribir código o scripts | Claude o ChatGPT | Ambos excelentes, Claude más preciso en instrucciones largas |

**Demo en vivo (10 min):** Cata hace una demostración abriendo Claude y ChatGPT en paralelo con el mismo prompt para mostrar diferencias de respuesta.

**La anatomía de un buen prompt:**
```
ROL: "Actúa como un experto en marketing inmobiliario..."
CONTEXTO: "Tenemos una nueva propiedad en Polanco, 3 recámaras..."
TAREA: "Escribe una descripción de 150 palabras para MLS..."
FORMATO: "Usa viñetas para los amenities. Tono profesional pero cálido."
```

---

### Módulo 3: Integración práctica en el trabajo diario (~25 min)

**Casos de uso por área**

**Ventas y atención a clientes:**
- Redactar seguimientos personalizados post-visita
- Generar respuestas a objeciones frecuentes
- Crear scripts de llamada adaptados al perfil del cliente
- Resumir notas de reuniones con compradores

**Marketing y comunicación:**
- Crear variaciones de copy para anuncios en Meta/Google
- Escribir descripciones de propiedades en múltiples formatos
- Generar ideas de contenido para redes sociales
- Traducir materiales al inglés o portugués

**Operaciones y administración:**
- Redactar políticas internas o procedimientos
- Crear plantillas de correo para comunicaciones frecuentes
- Resumir reportes extensos en puntos accionables
- Generar agendas estructuradas para reuniones

**Estrategia y análisis:**
- Analizar tendencias del mercado inmobiliario
- Comparar opciones y estructurar pros/contras
- Generar preguntas para investigación de mercado
- Sintetizar feedback de clientes en insights

**El flujo ideal de trabajo con IA:**
1. Identifica la tarea repetitiva o que consume tiempo
2. Elige la herramienta adecuada
3. Escribe un prompt con contexto específico
4. Revisa y ajusta la salida (siempre)
5. Guarda los prompts que funcionan bien (crea tu biblioteca)

**Datos que importan:**
- Los equipos con IA completan tareas un **77% más rápido**
- El ahorro promedio es de **5.4% del tiempo laboral semanal**
- El 96% de organizaciones que invirtieron en IA reportan ganancias de productividad
- EY reporta que las empresas pierden hasta **40% de las ganancias potenciales** por falta de capacitación

---

### Cierre y Q&A (~20 min)

**Reflexión final: La IA como amplificador, no como reemplazo**

- La IA no reemplaza el criterio, la experiencia ni las relaciones humanas
- El mayor riesgo hoy no es que la IA te quite el trabajo — es que alguien que sabe usarla sea más competitivo que tú
- El 72% de los managers teme que sus equipos vean la IA como amenaza; la realidad es que es la herramienta más democratizadora de la última década
- Curva de aprendizaje real: 2-3 semanas de uso diario para sentirse cómodo, 2-3 meses para ser power user

**Preguntas guía para Q&A:**
- ¿Qué barreras sienten para empezar a usar IA hoy?
- ¿Qué tarea de su área les gustaría automatizar primero?
- ¿Tienen preocupaciones sobre privacidad o confidencialidad?

---

## 💪 Ejercicio práctico

**"Mi primer prompt de trabajo"** — 15 minutos

**Instrucciones:**

1. **Elige una tarea real** de tu semana actual (un correo pendiente, una descripción de propiedad, un resumen de reunión, una respuesta a un cliente).

2. **Abre Claude o ChatGPT** (cualquiera funciona).

3. **Escribe un prompt usando la estructura:**
   - *Rol:* "Actúa como [experto en X]..."
   - *Contexto:* Explica brevemente la situación
   - *Tarea:* Describe exactamente qué necesitas
   - *Formato:* Especifica largo, tono, estructura

4. **Evalúa la respuesta:**
   - ¿Resolvió tu necesidad en el primer intento?
   - ¿Qué ajustarías del prompt?
   - ¿Cuánto tiempo te tomó vs. hacerlo sin IA?

5. **Comparte** con el equipo: muestra tu prompt, la respuesta obtenida y tu evaluación.

**Ejemplo de prompt para arrancar:**
> "Actúa como un agente inmobiliario experto con 10 años de experiencia en el mercado mexicano de lujo. Necesito escribir un correo de seguimiento para un cliente que visitó ayer el departamento en Reforma 180, piso 12, 2 recámaras, 120 m², precio $8.5 MDP. El cliente mostró interés pero mencionó que le parece caro. Escribe un correo de máximo 150 palabras, tono cálido y profesional, que refuerce el valor de la propiedad sin presionar. Termina con una llamada a la acción clara."

---

## 📚 Recursos y lecturas

1. **[Superagency in the Workplace — McKinsey 2025](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work)**
   Reporte anual de McKinsey sobre el estado de la IA en el trabajo. Datos duros sobre adopción, productividad y brechas de habilidades.

2. **[Anthropic — Cómo usar Claude efectivamente](https://www.anthropic.com/)**
   Guías oficiales, ejemplos de prompts y actualizaciones del modelo Claude. Referencia directa de los creadores.

3. **[OpenAI — Guía de prompting para ChatGPT](https://platform.openai.com/docs/guides/prompt-engineering)**
   Guía oficial de OpenAI con principios y tácticas de prompt engineering, con ejemplos prácticos.

4. **[Work Trend Index 2026 — Microsoft](https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization)**
   Investigación anual de Microsoft sobre el futuro del trabajo con IA. Incluye datos de más de 30,000 trabajadores globales.

5. **[AI Productivity Statistics 2026 — AutoFaceless](https://autofaceless.ai/blog/ai-productivity-statistics-2026)**
   Compilación actualizada de estadísticas sobre ganancias de productividad con IA por industria y tipo de tarea.

6. **[Perplexity AI — para investigación rápida](https://www.perplexity.ai/)**
   Herramienta directa para empezar a buscar con IA y ver cómo se citan fuentes reales. Ideal para practicar.

7. **[Gamma.app — crea tu primera presentación con IA](https://gamma.app/)**
   Prueba directa: en menos de 5 minutos puedes tener una presentación generada desde un párrafo de texto.

8. **[Learn Prompting — Guía gratuita de prompt engineering](https://learnprompting.org/)**
   Recurso educativo gratuito y de código abierto para aprender prompt engineering de cero a avanzado, en múltiples idiomas.

---

## 🔗 Acciones post-clase

1. **Esta semana:** Abre Claude o ChatGPT y completa una tarea real de trabajo usando la estructura de prompt aprendida hoy. Guarda el resultado.

2. **Esta semana:** Instala la extensión de Grammarly en tu navegador y úsala para pulir al menos un correo o documento importante.

3. **Próximos 15 días:** Identifica 3 tareas repetitivas de tu rol y documenta un prompt que funcione bien para cada una. Comparte tus mejores prompts con el equipo en el canal de Slack/WhatsApp.

4. **Próximos 30 días:** Crea tu "biblioteca de prompts" personal: un documento (puede ser en Notion o Google Docs) donde guardes los prompts que funcionan para tus tareas frecuentes.

5. **Feedback:** Completa el formulario de retroalimentación de la clase antes del lunes para que podamos personalizar los temas de las próximas sesiones según tus necesidades reales.

---

*Clase 01 · Programa de IA para el equipo · Tier 1 Fundamentos · Viernes 29 mayo 2026*
