# 🤖 Construir asistentes y agentes de IA para desarrollo

**Presentador:** Pineda | **Fecha:** Viernes 31 julio 2026 | **Audiencia:** Devs | **Tier:** 4 · TI / Dev track | **Duración:** 90 min

---

## 🎯 Objetivos de la clase

1. **Construir un asistente funcional con Claude API** implementando el ciclo completo: definición de herramientas, agentic loop y manejo de `tool_result`.
2. **Implementar tool use / function calling** con esquemas JSON reales, incluyendo llamadas paralelas y programmatic tool calling para flujos multi-paso.
3. **Crear agentes con memoria persistente** usando el Memory Tool de Anthropic y patrones de contexto multi-sesión sin depender de bases de datos vectoriales.
4. **Orquestar agentes con LangGraph** modelando flujos como grafos de nodos y aristas con estado compartido, persistencia y reanudación ante fallos.
5. **Comparar los ecosistemas principales** (Claude API, OpenAI Assistants, LangChain/LangGraph, Flowise, Botpress) para elegir la herramienta adecuada según el caso de uso.
6. **Desplegar un agente a producción** con observabilidad básica, manejo de errores y estrategias para reducir latencia y consumo de tokens.

---

## 🔑 Conceptos clave

| Término | Definición |
|---|---|
| **Asistente de IA (AI Assistant)** | Sistema basado en LLM que mantiene contexto conversacional y puede ejecutar acciones (herramientas) para completar tareas del usuario. |
| **Agente de IA (AI Agent)** | IA capaz de planificar y ejecutar secuencias de acciones de forma autónoma: buscar datos, escribir código, llamar APIs, tomar decisiones y corregir errores en un loop. |
| **Tool Use / Function Calling** | Mecanismo por el que el LLM declara intención de llamar una función: devuelve `stop_reason: "tool_use"` con nombre, `id` y parámetros estructurados en JSON. Tu código ejecuta la función y devuelve el resultado en un bloque `tool_result`. |
| **Agentic Loop** | Ciclo de razonamiento-acción: el agente llama una herramienta → recibe resultado → razona → llama otra herramienta → ... → responde al usuario cuando `stop_reason == "end_turn"`. |
| **Programmatic Tool Calling** | Patrón avanzado donde Claude escribe código Python que invoca herramientas en un contenedor de ejecución. Reduce de N round-trips a 1, filtra datos antes de entrar al contexto y disminuye tokens consumidos hasta 10×. |
| **Parallel Tool Calling** | Capacidad de Claude 4+ para invocar múltiples herramientas en una sola respuesta (bloques `tool_use` simultáneos), reduciendo latencia total en flujos independientes. |
| **Memory Tool** | Herramienta nativa de Anthropic que permite al agente crear, leer, actualizar y eliminar archivos en un directorio `/memories` persistente entre sesiones. Funciona en el lado cliente: tú controlas el almacenamiento. |
| **Multi-turn Conversation** | Conversación con historial completo enviado en cada request (la API es stateless). El modelo razona sobre todas las interacciones anteriores de la sesión para mantener coherencia. |
| **RAG (Retrieval-Augmented Generation)** | Técnica para enriquecer el contexto del LLM con información externa: se genera un embedding de la consulta, se buscan chunks similares en una base vectorial (Pinecone, Supabase pgvector) y se inyectan en el prompt. |
| **Contexto ventana (Context Window)** | Máximo de tokens que el modelo procesa en un request. Claude maneja hasta 200K tokens — un 56% más que GPT-4o (128K) —, crucial para flujos con grandes documentos. |
| **Compaction** | Función de Anthropic que resume automáticamente conversaciones largas del lado servidor cuando el contexto se acerca al límite. Puede combinarse con el Memory Tool: la memoria persiste información crítica que la compresión podría eliminar. |
| **LangGraph** | Framework de orquestación de LangChain que modela flujos de agentes como grafos dirigidos (nodos = pasos/agentes, aristas = transiciones). Ofrece ejecución duradera, human-in-the-loop y persistencia de estado entre sesiones. |
| **Nodo / Arista / Estado** | Primitivas de LangGraph: los nodos son funciones de procesamiento, las aristas definen el flujo condicional y el estado es el objeto compartido que persiste y evoluciona durante todo el workflow. |
| **Orchestrator / Subagent** | Patrón multi-agente donde un agente orquestador descompone tareas complejas y delega a subagentes especializados que trabajan en paralelo, optimizando tiempo y calidad. |
| **MCP (Model Context Protocol)** | Protocolo abierto de Anthropic para conectar LLMs con fuentes de datos y herramientas externas de forma estandarizada, evitando vendor lock-in y permitiendo interoperabilidad entre plataformas. |

---

## 🛠️ Stack tecnológico

| Herramienta | Categoría | Uso principal | Precio | URL |
|---|---|---|---|---|
| **Claude API (Anthropic)** | LLM + Agentes | Motor de razonamiento, tool use, memory tool, programmatic calling | Freemium | [platform.claude.com](https://platform.claude.com) |
| **Claude Agent SDK** | SDK | Abstracción de alto nivel sobre la API para construir agentes con loops, sub-agentes y MCP | Freemium | [docs.anthropic.com](https://platform.claude.com/docs/en/agents-and-tools/tool-use/build-a-tool-using-agent) |
| **LangChain** | Framework | Cadenas de LLM, integraciones con 200+ modelos y fuentes de datos, componentes reutilizables | Open Source | [langchain.com/langchain](https://www.langchain.com/langchain) |
| **LangGraph** | Orquestación | Agentes stateful con grafos dirigidos, persistencia, human-in-the-loop, LangSmith integrado | Open Source | [langchain.com/langgraph](https://www.langchain.com/langgraph) |
| **OpenAI Assistants API** | LLM + Agentes | Alternativa hosted con Threads, Vector Stores y Code Interpreter administrados por OpenAI | Pago | [platform.openai.com/docs/assistants](https://platform.openai.com/docs/assistants) |
| **Flowise** | No-code | Constructor visual drag-and-drop de agentes sobre LangChain; SOC 2 compliant, on-premises | Freemium | [flowiseai.com](https://flowiseai.com) |
| **Botpress** | Low-code | Plataforma de agentes conversacionales para producción a escala; runtime autónomo con memoria y herramientas | Freemium | [botpress.com](https://botpress.com) |
| **Pinecone** | Vector DB | Base de datos vectorial para RAG: indexado, búsqueda semántica, filtros híbridos (denso + disperso) | Freemium | [pinecone.io](https://www.pinecone.io) |
| **Supabase (pgvector)** | Base de datos | PostgreSQL con extensión pgvector para RAG; alternativa open source a Pinecone con SQL nativo | Freemium | [supabase.com](https://supabase.com) |
| **LangSmith** | Observabilidad | Tracing, evaluación y monitoreo de agentes LangChain/LangGraph en producción | Freemium | [smith.langchain.com](https://smith.langchain.com) |
| **Anthropic Python SDK** | SDK | Cliente oficial para Python con helpers para memory tool, streaming y tool use | Open Source | [github.com/anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) |
| **n8n** | Automatización | Automatización de flujos con nodos de IA; alternativa a Flowise para casos de integración con sistemas legacy | Freemium | [n8n.io](https://n8n.io) |

---

## 📋 Contenido de la clase

### Módulo 1 · Fundamentos de asistentes con Claude API (20 min)

**¿Qué diferencia un chatbot de un asistente de un agente?**

Un chatbot responde texto sin acciones externas. Un asistente mantiene contexto multi-turn y puede acceder a herramientas definidas. Un agente planifica, ejecuta herramientas en secuencia y corrige errores en un loop autónomo hasta completar objetivos complejos.

**El ciclo básico de tool use:**

1. El desarrollador define herramientas con nombre, descripción y `input_schema` (JSON Schema)
2. El usuario envía un mensaje junto al array `tools`
3. Claude decide si llamar una herramienta → devuelve `stop_reason: "tool_use"` + bloque `tool_use` con `id`, nombre y parámetros
4. Tu código ejecuta la función con los parámetros recibidos
5. Envías el resultado en un bloque `tool_result` con el `tool_use_id` correspondiente
6. Claude razona sobre el resultado y continúa (repite desde 3) o finaliza con `end_turn`

**Estructura mínima en Python:**

```python
import anthropic

client = anthropic.Anthropic()

tools = [{
    "name": "buscar_propiedad",
    "description": "Busca propiedades en la base de datos por criterios específicos.",
    "input_schema": {
        "type": "object",
        "properties": {
            "ciudad": {"type": "string", "description": "Ciudad donde buscar"},
            "precio_max": {"type": "number", "description": "Precio máximo en pesos"},
            "habitaciones": {"type": "integer", "description": "Número de habitaciones"}
        },
        "required": ["ciudad"]
    }
}]

messages = [{"role": "user", "content": "Busca departamentos en CDMX con máximo 3 recámaras"}]

response = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=2048,
    tools=tools,
    messages=messages
)
# Si stop_reason == "tool_use" → ejecutar herramienta y continuar el loop
```

**Puntos clave del Módulo 1:**
- La API es stateless: siempre envías el historial completo
- `tool_choice: {"type": "auto"}` deja que Claude decida; `"any"` fuerza que use alguna herramienta
- Agregar `strict: true` a la definición garantiza que los parámetros sigan el schema exactamente
- Los tokens de herramientas se suman al costo: cada definición de tool añade ~290-675 tokens según el modelo

---

### Módulo 2 · Tool Use avanzado: paralelo y programático (25 min)

**Parallel Tool Calling (Claude 4+):**

En una sola respuesta el modelo puede emitir múltiples bloques `tool_use` simultáneos. Tu código debe ejecutar todas las herramientas y devolver todos los `tool_result` antes de la siguiente llamada. Ideal para consultas independientes (ej.: verificar disponibilidad en 5 ciudades al mismo tiempo).

**Programmatic Tool Calling — el cambio de paradigma:**

En lugar de N round-trips (una llamada por herramienta), Claude escribe código Python que invoca las herramientas en un contenedor sandboxed. Solo el resultado final regresa al contexto del modelo:

- Procesar 20 empleados: 20 round-trips tradicionales → 1 con programmatic calling
- Tokens reducidos hasta 10× al filtrar/agregar datos antes de que lleguen al modelo
- Requiere `code_execution_20260120` habilitado y `"allowed_callers": ["code_execution_20260120"]` en la definición de la herramienta
- Compatible con: Claude Opus/Sonnet 4.5, 4.6, 4.7, 4.8

**Patrones avanzados con programmatic calling:**
- **Batch processing**: loops que procesan N items en una sola ejecución
- **Early termination**: detener el loop al encontrar el primer resultado válido
- **Conditional tool selection**: elegir herramienta según tamaño del resultado (ej.: leer archivo completo si < 10KB, resumen si es mayor)
- **Data filtering**: filtrar logs/resultados antes de que lleguen al modelo

**Herramientas server-side de Anthropic (Anthropic ejecuta el código, no tú):**
- `web_search_20260209` — búsqueda web en tiempo real
- `code_execution_20260120` — ejecución de Python en sandbox
- `memory_20250818` — gestión de memoria persistente

---

### Módulo 3 · Memoria, contexto y conversaciones multi-sesión (20 min)

**El problema del contexto:**

Los LLMs son stateless: cada request parte desde cero. Para agentes de larga duración necesitamos estrategias para persistir información relevante sin saturar el contexto.

**Las 4 estrategias de memoria:**

| Estrategia | Mecanismo | Cuándo usar |
|---|---|---|
| **In-context** | Historial completo en cada request | Conversaciones cortas (< 50 turnos) |
| **Memory Tool** | Archivos en `/memories` leídos bajo demanda | Proyectos multi-sesión, preferencias de usuario |
| **RAG** | Embeddings en base vectorial + búsqueda semántica | Bases de conocimiento grandes (docs, manuales) |
| **Compaction** | Resumen automático del servidor | Conversaciones muy largas sin control manual |

**Memory Tool — detalles de implementación:**

```python
# Habilitar el Memory Tool en el request
tools=[{"type": "memory_20250818", "name": "memory"}]
```

Claude chequea automáticamente `/memories` antes de cualquier tarea. Puede crear, leer, actualizar, renombrar y eliminar archivos. El protocolo de prompting instruye al modelo:

```
IMPORTANTE: SIEMPRE REVISA TU DIRECTORIO DE MEMORIA ANTES DE HACER CUALQUIER COSA.
```

**Consideraciones de seguridad críticas:**
- Validar que todas las rutas empiecen con `/memories` (protección contra path traversal)
- Rechazar secuencias `../`, `..\\` o URL-encoded (`%2e%2e%2f`)
- Implementar límite de tamaño de archivos y expiración de memorias antiguas
- Claude generalmente rechaza escribir información sensible, pero implementar validación adicional

**Combinar Memory Tool + Compaction:**
- Compaction resume el contexto activo automáticamente cuando se acerca al límite
- Memory Tool persiste información crítica que la compresión podría eliminar
- Úsalos juntos en workflows de larga duración: compaction para el contexto activo, memoria para decisiones y preferencias importantes

**Claude Dreaming:**
Función experimental de consolidación de memoria programada: el agente actualiza y reorganiza sus archivos de memoria de forma automática, análoga a cómo el cerebro humano consolida información durante el sueño.

**RAG básico con Pinecone:**

```python
# Flujo simplificado de RAG
# 1. Ingesta: chunk → embedding → upsert en Pinecone
# 2. Retrieval: query → embedding → query(top_k=5) → chunks relevantes
# 3. Augmentation: f"Contexto:\n{chunks}\n\nPregunta: {query}"
# 4. Generation: Claude responde con el contexto enriquecido
```

El estándar 2026 evoluciona hacia **GraphRAG** (Vectores + Grafos de Conocimiento) y **búsqueda híbrida** (densa + dispersa), con semantic chunking en lugar de chunking por tamaño fijo.

---

### Módulo 4 · LangGraph y despliegue a producción (25 min)

**¿Por qué LangGraph?**

LangGraph es la capa de orquestación stateful de LangChain (v0.3, +90K estrellas en GitHub). A diferencia de LangChain Chains (secuenciales y sin estado), LangGraph modela flujos como grafos dirigidos, permitiendo:
- Loops de razonamiento complejos con ciclos
- Persistencia de estado entre ejecuciones (reanudación ante fallos)
- Human-in-the-loop: pausar, inspeccionar y modificar el estado antes de continuar
- Multi-agente: nodos que son agentes completos coordinados por un orquestador

**Primitivas de LangGraph:**

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

# Estado compartido entre todos los nodos
class AgentState(TypedDict):
    messages: list
    herramientas_usadas: list
    resultado_final: str

# Definir el grafo
grafo = StateGraph(AgentState)

# Nodos (funciones de procesamiento)
grafo.add_node("agente_principal", fn_agente_principal)
grafo.add_node("buscador", fn_buscador)
grafo.add_node("validador", fn_validador)

# Aristas (flujo condicional)
grafo.add_conditional_edges(
    "agente_principal",
    decidir_siguiente_paso,  # función que retorna nombre del siguiente nodo
    {"buscar": "buscador", "validar": "validador", "fin": END}
)
grafo.set_entry_point("agente_principal")

app = grafo.compile()
resultado = app.invoke({"messages": [HumanMessage(content="Analiza el mercado inmobiliario")]})
```

**Instalación del stack completo:**
```bash
pip install langchain langgraph langchain-anthropic langchain-community
# Variables de entorno:
# ANTHROPIC_API_KEY, LANGCHAIN_API_KEY (para LangSmith)
```

**Patrón Orchestrator/Subagent:**

El agente orquestador recibe la tarea, la descompone en subtareas y delega a subagentes especializados que trabajan en paralelo. El orquestador consolida resultados. Este patrón fue documentado por Anthropic en su sistema de investigación multi-agente, logrando mejoras significativas de rendimiento vs. un agente único.

**Comparativa de plataformas para producción:**

| Plataforma | Fortaleza | Debilidad | Ideal para |
|---|---|---|---|
| **Claude API directo** | Control total, menor latencia, programmatic tool calling | Más código a escribir | Equipos con devs; casos con lógica compleja |
| **LangGraph** | Flujos stateful complejos, observabilidad con LangSmith | Curva de aprendizaje | Agentes multi-paso con human-in-the-loop |
| **Flowise** | Prototipado rápido visual, drag-and-drop, SOC 2 | Menos flexible para lógica personalizada | MVPs, demos, equipos mixtos |
| **Botpress** | Producción a escala, runtime autónomo, empresarial | Costo más alto | Chatbots conversacionales enterprise |
| **OpenAI Assistants** | Infraestructura administrada (Threads, Vector Stores) | Vendor lock-in fuerte | Equipos ya invertidos en ecosistema OpenAI |

**Estrategias de optimización para producción:**
- **Prompt caching**: reducir costos en system prompts repetidos (cache automático en conversaciones multi-turn)
- **Container reuse**: en programmatic tool calling, reutilizar el mismo container para múltiples requests (hasta 30 días de vida)
- **Diseño de herramientas**: retornar JSON estructurado con descripción clara del formato de salida para que Claude lo procese mejor
- **Logging**: registrar todos los `tool_use` y `tool_result` para depuración y observabilidad

---

## 💪 Ejercicio práctico

**Construir un Asistente Inmobiliario con Claude API y 2+ herramientas**

**Objetivo:** Implementar el agentic loop completo con al menos 2 herramientas funcionales y memoria entre sesiones.

**Pasos:**

1. **Setup** (5 min)
   ```bash
   pip install anthropic
   export ANTHROPIC_API_KEY="tu-clave"
   ```

2. **Definir 2 herramientas** (10 min):
   - `buscar_propiedades(ciudad, precio_max, habitaciones)` — busca en un diccionario local de propiedades de ejemplo
   - `calcular_credito(precio, enganche_porcentaje, tasa_anual, plazo_años)` — calcula mensualidad hipotecaria

3. **Implementar el agentic loop** (15 min):
   ```python
   def ejecutar_herramienta(nombre, params):
       if nombre == "buscar_propiedades":
           return buscar_propiedades(**params)
       elif nombre == "calcular_credito":
           return calcular_credito(**params)

   def agente(pregunta_usuario):
       messages = [{"role": "user", "content": pregunta_usuario}]
       while True:
           resp = client.messages.create(
               model="claude-opus-4-6",
               max_tokens=2048,
               tools=tools,
               messages=messages
           )
           if resp.stop_reason == "end_turn":
               return resp.content[0].text
           # Ejecutar todas las herramientas solicitadas
           tool_results = []
           for block in resp.content:
               if block.type == "tool_use":
                   resultado = ejecutar_herramienta(block.name, block.input)
                   tool_results.append({
                       "type": "tool_result",
                       "tool_use_id": block.id,
                       "content": str(resultado)
                   })
           messages.append({"role": "assistant", "content": resp.content})
           messages.append({"role": "user", "content": tool_results})
   ```

4. **Agregar Memory Tool** (10 min): habilitar `memory_20250818` y crear el directorio `/memories`; el agente recordará las búsquedas previas del usuario entre sesiones.

5. **Prueba final**: preguntar "¿Cuánto pagaría mensualmente por un departamento de 2 recámaras en Monterrey con presupuesto de $3M MXN y 20% de enganche a 20 años?" — el agente debe usar ambas herramientas en secuencia.

**Reto extra:** Convertir una de las herramientas a programmatic tool calling con `code_execution_20260120` y comparar el número de tokens usados.

---

## 📚 Recursos recomendados

### Documentación oficial
- [Tool Use Overview — Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
- [Tutorial: Build a Tool-Using Agent — Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/build-a-tool-using-agent)
- [Programmatic Tool Calling — Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling)
- [Memory Tool — Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool)
- [LangGraph GitHub](https://github.com/langchain-ai/langgraph)

### Tutoriales y guías
- [Claude API Tool Use: The Complete Developer Guide](https://shawncharles.com/blog/claude-api/claude-api-tool-use-the-complete-2025-developer-guide.html)
- [Build AI Apps with Claude API + LangChain: Complete Guide](https://www.claudeapi.com/en/blog/dev-guides/langchain-claude-api-tutorial/)
- [LangGraph Tutorial 2026: Beginner's Guide to AI Agents](https://langchain-tutorials.github.io/langgraph-tutorial-2026-beginners-guide/)
- [Build an AI Agent with the Claude Agent SDK](https://serpapi.com/blog/build-an-ai-agent-with-claude-agent-sdk/)
- [Function Calling & Tool Use: Complete Guide (GPT, Claude, Gemini)](https://ofox.ai/blog/function-calling-tool-use-complete-guide-2026/)

### RAG y bases vectoriales
- [Pinecone: Build a RAG Chatbot](https://docs.pinecone.io/guides/get-started/build-a-rag-chatbot)
- [Building an AI Agent with RAG (Vector DBs + Embeddings)](https://dev.to/hargun_singh/-building-an-ai-agent-with-rag-a-simple-guide-to-vector-databases-and-embeddings-2ch4)

### Comparativas y arquitectura
- [Claude Agent SDK vs OpenAI Agents SDK vs Google ADK](https://composio.dev/content/claude-agents-sdk-vs-openai-agents-sdk-vs-google-adk)
- [Anthropic: How We Built Our Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system)
- [Flowise vs LangGraph vs n8n: Agent Framework Comparison 2026](https://www.index.dev/skill-vs-skill/ai-langgraph-vs-n8n-vs-flowise)

### Cursos
- [Agentic AI with LangChain and LangGraph — Coursera](https://www.coursera.org/learn/agentic-ai-with-langchain-and-langgraph)
- [LangChain: Agentic AI Engineering — Udemy](https://www.udemy.com/course/langchain/)

---

## 🔗 Acciones post-clase

- [ ] Crear cuenta en [Anthropic Console](https://console.anthropic.com) y generar una API key
- [ ] Completar el ejercicio del asistente inmobiliario con 2 herramientas funcionales
- [ ] Leer el tutorial oficial "Build a Tool-Using Agent" (5 anillos concéntricos) en la docs de Anthropic
- [ ] Explorar el Memory Tool con el ejemplo de Python en el repositorio del SDK
- [ ] Instalar LangGraph (`pip install langgraph`) y replicar el grafo básico del módulo 4
- [ ] Crear un índice gratuito en Pinecone e indexar al menos 10 documentos de prueba
- [ ] Comparar tokens usados entre tool use tradicional vs. programmatic tool calling en un mismo flujo
- [ ] Explorar Flowise: clonar el repo y ejecutar localmente para ver el constructor visual
- [ ] Unirse al servidor de Discord de LangChain y al canal de Anthropic para developers
