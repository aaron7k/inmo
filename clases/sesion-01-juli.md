# 🔬 Entrenamiento adecuado de la IA para investigación

**Participante:** Juli | **Tipo:** Asesoría 1-on-1 | **Duración:** 90 min | **Formato:** Sesión individual personalizada

---

## 🎯 Objetivos de la sesión

1. **Personalizar una IA para tu área de investigación específica** mediante system prompts avanzados que la conviertan en un asistente experto en tu dominio.
2. **Crear flujos de research reproducibles** que combinen múltiples herramientas de IA para acelerar la revisión de literatura, extracción de datos y síntesis de hallazgos.
3. **Dominar la diferencia entre system prompts, RAG y fine-tuning** para elegir la estrategia correcta según el tamaño y tipo de tu base de conocimiento.
4. **Configurar NotebookLM como base de datos documental** para consultar tus fuentes primarias sin alucinaciones.
5. **Integrar Elicit o Consensus** en tu flujo de revisión sistemática para ahorrar hasta un 80% del tiempo de screening.

---

## 🔑 Conceptos clave

| Término | Definición |
|---|---|
| **System Prompt** | Instrucción de configuración que se da a la IA antes de la conversación, definiendo su rol, expertise, tono, restricciones y formato de respuesta. Es la forma más rápida de "entrenar" una IA para investigación. |
| **RAG (Retrieval-Augmented Generation)** | Técnica donde la IA busca información en una base de datos propia (tus papers, notas, documentos) antes de responder. Logra 94–98% de precisión en preguntas de dominio específico cuando la base de datos está bien estructurada. |
| **Fine-Tuning** | Reentrenamiento de un modelo con datos propios para modificar su comportamiento. Costoso (5.000+ USD de inversión inicial), lento de iterar y frecuentemente sobre-aplicado. Solo vale la pena cuando se necesita un estilo o razonamiento muy específico a escala. |
| **Context Window** | Cantidad de texto que la IA puede procesar en una sola conversación. Claude maneja hasta 200K tokens (~150.000 palabras o 10-15 papers completos). NotebookLM ahora soporta 1 millón de tokens. |
| **NotebookLM** | Herramienta de Google que analiza hasta 50 fuentes (PDFs, URLs, videos, audio) y responde con citas ancladas en esos documentos. Ideal para investigación libre de alucinaciones. |
| **Prompt Engineering para investigación** | Uso de estructura XML (`<rol>`, `<contexto>`, `<tarea>`, `<restricciones>`) para obtener análisis académico de alta precisión. Claude está entrenado para parsear estas etiquetas como input estructurado. |
| **Claude Projects** | Espacio de trabajo persistente dentro de Claude donde se cargan papers base, notas metodológicas y se configuran skills específicas. Se convierte en un laboratorio de investigación completo. |
| **Perplexity Deep Research** | Función que realiza docenas de búsquedas automáticas y lee cientos de fuentes, entregando reportes comprehensivos en 2-4 minutos con citas verificables. |
| **Elicit** | Asistente de investigación científica que extrae datos estructurados de hasta 125 millones de papers. Logra 95% de recall en búsquedas y 99% en screening de texto completo sobre revisiones Cochrane. |
| **Consensus** | Motor de búsqueda académica que sintetiza evidencia de estudios revisados por pares y muestra el nivel de acuerdo científico sobre una pregunta. |
| **Zotero** | Gestor de referencias gratuito y de código abierto que soporta 9.000+ estilos de cita e integra con Word, Google Docs y Overleaf. |
| **Fuentes primarias vs. fuentes secundarias** | Las fuentes primarias (papers originales, datos crudos) son la base de cualquier investigación rigurosa. La IA debe siempre anclarse a ellas, no generarlas. |

---

## 🛠️ Stack tecnológico para investigación con IA

| Herramienta | Función principal | Precio | URL |
|---|---|---|---|
| **Claude.ai** | Asistente principal de investigación — análisis de papers, síntesis, redacción académica, 200K contexto | Gratis / Pro $20/mes | [claude.ai](https://claude.ai) |
| **NotebookLM** | Base de conocimiento documental — 50 fuentes, 1M tokens, Audio/Video Overviews, citas verificadas | Gratis / Plus $19.99/mes | [notebooklm.google.com](https://notebooklm.google.com) |
| **Perplexity** | Búsqueda académica con citas — Deep Research automático, modo Academic, 45M usuarios | Gratis / Pro $20/mes | [perplexity.ai](https://perplexity.ai) |
| **Elicit** | Revisión sistemática — 125M papers, extracción estructurada, PRISMA 2020, 80% ahorro de tiempo | Gratis / Plus $12/mes / Pro $49/mes | [elicit.com](https://elicit.com) |
| **Consensus** | Evidencia científica consolidada — síntesis de estudios, nivel de acuerdo científico | Gratis / Premium $11.99/mes | [consensus.app](https://consensus.app) |
| **Zotero** | Gestión de referencias — 9.000+ estilos, integración Word/Docs/Overleaf, captura web | Gratis (open source) | [zotero.org](https://zotero.org) |
| **Semantic Scholar** | Descubrimiento de papers — red de citas, papers relacionados, alertas | Gratis | [semanticscholar.org](https://semanticscholar.org) |
| **ResearchRabbit** | Mapeo de redes de citas — visualización de literatura relacionada | Gratis | [researchrabbit.ai](https://researchrabbit.ai) |

---

## 📋 Plan de la sesión (4 bloques de 20 minutos)

### Bloque 1 — Diagnóstico y fundamentos (min 0–20)
- **Diagnóstico personalizado:** ¿Qué tipo de investigación hace Juli? ¿Cuál es su flujo actual? ¿Dónde pierde más tiempo?
- Revisión de los 3 enfoques: system prompts vs. RAG vs. fine-tuning y cuándo aplica cada uno
- Demostración en vivo: el mismo query en Google Scholar, Perplexity Academic y Elicit — diferencias en calidad y velocidad

### Bloque 2 — Construcción del asistente personal (min 20–40)
- Diseño del system prompt específico para el área de Juli (estructura XML completa)
- Configuración de Claude Project: carga de papers base + instrucciones metodológicas
- Prueba de flujo completo: pregunta de investigación → búsqueda → extracción → síntesis

### Bloque 3 — NotebookLM como base documental (min 40–60)
- Importación de las fuentes primarias de Juli (PDFs, URLs, notas)
- Uso de consultas estructuradas para extraer datos sin alucinaciones
- Generación de Audio Overview y Mind Map para revisión rápida de literatura
- Integración NotebookLM + Claude: usar NotebookLM para hechos, Claude para análisis

### Bloque 4 — Flujo completo y plan de implementación (min 60–90)
- Flujo de research integrado: Elicit/Semantic Scholar → Zotero → NotebookLM → Claude
- Plantilla de system prompt personalizada que Juli se lleva lista para usar
- Estrategia de mantenimiento: cómo actualizar la base de conocimiento periódicamente
- Q&A y definición de las 3 acciones concretas post-sesión

---

## 💪 Ejercicio personalizado: Asistente de investigación propio

**Objetivo:** Construir en vivo un asistente de investigación con system prompt específico para el área de Juli.

### Plantilla de System Prompt base (personalizar durante la sesión)

```xml
<rol>
Eres un asistente de investigación experto en [ÁREA ESPECÍFICA DE JULI].
Tienes experiencia en metodología [CUANTITATIVA / CUALITATIVA / MIXTA].
Conoces los principales journals, metodologías y debates actuales del campo.
</rol>

<comportamiento>
- Siempre cita fuentes específicas. Si no tienes certeza, dilo explícitamente.
- Usa lenguaje académico riguroso pero claro.
- Cuando analices papers, extrae: objetivo, metodología, muestra, hallazgos clave y limitaciones.
- Si encuentras contradicciones entre fuentes, señálalas y explica el debate.
- Nunca inventes datos, estadísticas o referencias bibliográficas.
</comportamiento>

<formato_de_respuesta>
Para síntesis de literatura: usa estructura IMRAD adaptada.
Para comparación de estudios: usa tabla con columnas: Autor/Año | Muestra | Metodología | Hallazgo principal | Limitación.
Para brechas de investigación: lista numerada con nivel de evidencia disponible.
</formato_de_respuesta>

<restricciones>
- Solo trabaja con información que yo te proporcione o que puedas verificar.
- Si la pregunta está fuera de mi área, indícalo y sugiere quién podría responderla mejor.
- Longitud de respuesta: concisa por defecto, extensa solo si lo solicito explícitamente.
</restricciones>
```

### Pasos del ejercicio (durante la sesión)
1. **Identificar** el área específica de investigación de Juli y sus preguntas de investigación activas
2. **Completar** la plantilla de system prompt con los datos reales del área
3. **Cargar** 3-5 papers clave de Juli en NotebookLM
4. **Ejecutar** una búsqueda real en Elicit sobre el tema principal de Juli
5. **Comparar** los resultados: NotebookLM (fuentes propias) vs. Elicit (125M papers) vs. Claude con system prompt
6. **Documentar** el flujo que mejor funcionó para usarlo desde mañana

---

## 📚 Recursos específicos para investigación

### Guías y tutoriales
- [Claude for Research — Beginners in AI](https://beginnersinai.org/claude-for-research/) — Workflow de 8 pasos con Claude para revisiones sistemáticas
- [Perplexity AI Features 2026](https://www.secondtalent.com/resources/perplexity-ai-features-capabilities-2026/) — Guía completa de Deep Research y modo Academic
- [NotebookLM Guide 2026](https://ucstrategies.com/news/notebooklm-guide-how-to-use-googles-free-ai-research-tool-2026/) — Cómo aprovechar las funciones avanzadas
- [Elicit vs Consensus Comparison](https://paperguide.ai/blog/elicit-vs-consensus/) — Cuándo usar cada herramienta para research académico

### Lectura técnica (para ir más profundo)
- [RAG vs Fine-Tuning vs Prompt Engineering — Hyperleap AI](https://hyperleap.ai/blog/rag-vs-fine-tuning-vs-prompt-engineering-business-guide) — Framework de decisión para elegir el enfoque correcto
- [The Fine-Tuning Landscape 2025 — Medium](https://medium.com/@pradeepdas/the-fine-tuning-landscape-in-2025-a-comprehensive-analysis-d650d24bed97) — Análisis comprehensivo de técnicas (LoRA, SFT, RLHF)
- [Anthropic: Accelerating Scientific Research](https://www.anthropic.com/news/accelerating-scientific-research) — Casos reales de científicos usando Claude

### Herramientas de descubrimiento adicionales
- [Semantic Scholar](https://semanticscholar.org) — 200M+ papers con red de citas
- [ResearchRabbit](https://researchrabbit.ai) — Visualización de redes de literatura relacionada
- [Connected Papers](https://connectedpapers.com) — Mapa visual de papers relacionados
- [Scite.ai](https://scite.ai) — Validación de citas con contexto de cómo se cita cada paper

---

## 🔗 Acciones post-sesión

### Esta semana (próximos 7 días)
- [ ] Copiar y personalizar el system prompt creado en la sesión en Claude.ai como Project nuevo
- [ ] Cargar los 10 papers más importantes de tu área en NotebookLM
- [ ] Crear cuenta en Elicit y hacer una búsqueda piloto sobre tu pregunta de investigación principal
- [ ] Instalar Zotero y capturar las referencias que ya tienes en un gestor organizado

### Este mes
- [ ] Ejecutar tu primer flujo completo de research: Elicit → Zotero → NotebookLM → Claude
- [ ] Probar Perplexity Deep Research con una pregunta de tu área y evaluar la calidad de las citas
- [ ] Crear una plantilla reutilizable de prompts específicos para tu metodología de investigación
- [ ] Revisar si Consensus tiene coverage suficiente en tu área específica

### A largo plazo
- [ ] Evaluar si conviene implementar RAG con tu biblioteca de papers (más de 500 documentos)
- [ ] Considerar integración con Overleaf para redacción académica con referencias automáticas
- [ ] Explorar APIs de Semantic Scholar o PubMed para automatización avanzada

---

*Sesión diseñada específicamente para Juli | Asesoría 1-on-1 de 90 minutos*
*Fuentes: Anthropic (2026), Google NotebookLM (2026), Elicit (2026), Perplexity AI (2026), PapersFlow (2026), Second Talent (2026)*
