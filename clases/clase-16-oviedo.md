# 🦾 Agentes autónomos a la medida sin gestor externo

**Presentador:** Oviedo | **Fecha:** Viernes 7 agosto 2026 | **Audiencia:** Devs | **Tier:** 4 · TI / Dev track | **Duración:** 90 min

---

## 🎯 Objetivos

Al finalizar esta clase, los participantes podrán:

- **Diseñar e implementar agentes autónomos propios** desde cero usando Python, sin depender de plataformas gestionadas como AutoGPT Platform, LangSmith Cloud o servicios SaaS de orquestación.
- **Implementar el ciclo ReAct (Reasoning + Acting)** para que el agente razone antes de actuar, evalúe resultados y se autocorrija sin intervención humana en cada paso.
- **Integrar la API de Claude y LangGraph** como base de orquestación stateful, controlando el flujo del agente mediante grafos de estado sin necesidad de un manager externo.
- **Construir sistemas multi-step** capaces de planificar tareas complejas, invocar herramientas (tool calling), manejar errores y persistir estado entre ejecuciones.
- **Desplegar agentes en infraestructura propia** usando FastAPI como capa HTTP y Docker como contenedor, con PostgreSQL para persistencia de estado y sin dependencia de servicios cloud externos.
- **Orquestar agentes multi-rol** al estilo CrewAI o AutoGen, donde cada agente tiene un rol especializado y se coordinan entre sí sin un gestor centralizado externo.

---

## 🔑 Conceptos clave

### Agente Autónomo (Autonomous Agent)
Un agente autónomo es un sistema de software que percibe su entorno, toma decisiones y ejecuta acciones de manera independiente para alcanzar un objetivo definido, sin requerir supervisión humana en cada paso. A diferencia de un chatbot (reactivo, sin memoria de acción), un agente autónomo mantiene estado, planifica, actúa sobre el mundo real mediante herramientas y evalúa si sus acciones lo acercan al objetivo. La autonomía no significa ausencia de control: el dev define los límites, las herramientas disponibles y los criterios de éxito.

### ReAct Loop (Reasoning + Acting)
El paradigma ReAct es el corazón de la mayoría de los agentes modernos. En cada iteración, el agente: (1) **Piensa** (Thought) — genera un razonamiento sobre qué necesita hacer; (2) **Actúa** (Action) — invoca una herramienta o toma una decisión concreta; (3) **Observa** (Observation) — recibe el resultado de la acción y lo integra al contexto. Este ciclo se repite hasta alcanzar el objetivo o agotar los intentos. La clave es que la observación alimenta el próximo pensamiento, permitiendo **autocorrección en tiempo real**: si una búsqueda retorna resultados irrelevantes, el agente razona por qué y reformula la consulta. Investigaciones muestran que ReAct supera al Chain-of-Thought puro porque los resultados reales de las herramientas corrigen las suposiciones del modelo en tiempo real.

### Planning (Planificación)
La planificación es la capacidad del agente de descomponer un objetivo complejo en subpasos antes de ejecutar. Existen dos enfoques principales: **Plan-and-Execute** (genera un plan completo al inicio y lo ejecuta secuencialmente — eficiente pero rígido ante sorpresas) y **ReAct dinámico** (re-evalúa en cada paso — más robusto en entornos cambiantes). Los agentes modernos combinan ambos: planifican en alto nivel y adaptan tácticamente. LangGraph permite modelar esta distinción explícitamente como nodos y aristas en el grafo de estado.

### Tool Calling (Invocación de herramientas)
El tool calling es el mecanismo que permite al agente "salir" del espacio del lenguaje hacia el mundo real. A través de funciones definidas en el código, el agente puede buscar en la web, leer/escribir archivos, consultar bases de datos, llamar APIs externas, ejecutar código, enviar emails y mucho más. La API de Anthropic (Claude) y las APIs de OpenAI exponen tool calling nativamente: el modelo genera un JSON estructurado con el nombre de la herramienta y sus argumentos, el código Python ejecuta la herramienta y devuelve el resultado como nueva observación. Sin herramientas, el agente es solo un generador de texto; con herramientas, es un actor en el mundo.

### Self-Correction (Autocorrección)
La autocorrección es lo que distingue a un agente robusto de uno frágil. Cuando una acción falla (error de API, resultado inesperado, respuesta vacía), el agente no se detiene: razona sobre el fallo, ajusta su estrategia y reintenta con una aproximación diferente. Esto se implementa mediante el ciclo ReAct (cada observación incluye el error), pero también puede reforzarse con lógica explícita de reintentos, validación de esquemas de salida y detección de bucles infinitos (máximo N iteraciones).

### Orquestación sin gestor externo
La orquestación es el conjunto de mecanismos que coordinan múltiples agentes o múltiples pasos de un agente: cuál corre primero, qué datos pasan entre pasos, cómo se maneja el estado. La tendencia en 2025-2026 es reemplazar plataformas SaaS de orquestación (que cobran por ejecución, tienen latencia de red y crean dependencia de proveedor) por orquestadores propios desplegados en infraestructura controlada. LangGraph modela la orquestación como un **grafo dirigido con estado compartido**: los nodos son funciones Python y las aristas son condiciones lógicas, todo ejecutándose localmente. No se necesita ningún servicio externo para correr el grafo.

### Agentes Multi-rol (Multi-Agent Systems)
En sistemas complejos, un solo agente puede ser insuficiente. Los sistemas multi-agente dividen el problema en roles especializados: un agente Investigador que busca información, un agente Analista que la procesa, un agente Redactor que genera el output final. CrewAI usa exactamente este patrón: cada agente tiene un `role`, `goal` y `backstory` que definen su comportamiento. La coordinación entre agentes se hace mediante paso de mensajes (AutoGen) o mediante un grafo de orquestación (LangGraph), sin necesitar un gestor externo centralizado.

### Estado y Persistencia
Un agente sin persistencia olvida todo entre ejecuciones. La persistencia de estado permite pausar, reanudar y hacer debug de agentes de larga duración. LangGraph usa **checkpointers** nativos que guardan el estado del grafo en PostgreSQL o SQLite tras cada paso. Aegra (alternativa open-source a LangSmith Platform) implementa exactamente esto: FastAPI + PostgreSQL + Redis para persistencia, colas y crash recovery, sin dependencia de ningún servicio de Anthropic o LangChain Cloud.

---

## 🛠️ Stack tecnológico

| Herramienta | Función principal | Precio | URL |
|---|---|---|---|
| **Claude API (Anthropic)** | LLM principal del agente: razonamiento, tool calling nativo, generación de planes y outputs estructurados | Pago (por token) | [anthropic.com/api](https://www.anthropic.com/api) |
| **LangGraph** | Orquestación del agente como grafo de estado: nodos, aristas condicionales, estado compartido, checkpointers, soporte multi-agente | Gratis (OSS) | [langchain-ai.github.io/langgraph](https://langchain-ai.github.io/langgraph/) |
| **CrewAI** | Framework para agentes con roles especializados: define Crew, Agents y Tasks con ejecución secuencial/paralela/condicional | Gratis (OSS) | [docs.crewai.com](https://docs.crewai.com/) |
| **AutoGen (Microsoft)** | Framework de conversación multi-agente asíncrona: agentes que se comunican mediante mensajes sin manager centralizado | Gratis (OSS) | [microsoft.github.io/autogen](https://microsoft.github.io/autogen/stable/) |
| **Python 3.11+** | Lenguaje base del stack: soporte nativo de async/await, type hints, y ecosistema de IA maduro | Gratis | [python.org](https://www.python.org) |
| **FastAPI** | Capa HTTP para exponer el agente como API REST: endpoints async, validación Pydantic, docs automáticas con Swagger | Gratis (OSS) | [fastapi.tiangolo.com](https://fastapi.tiangolo.com) |
| **SQLite / PostgreSQL** | Persistencia de estado del agente: SQLite para desarrollo local, PostgreSQL para producción con checkpointers de LangGraph | Gratis (OSS) | [postgresql.org](https://www.postgresql.org) |
| **Docker + Docker Compose** | Containerización del agente y sus dependencias: consistencia entre entornos, deploy reproducible sin gestor externo | Gratis (OSS) | [docker.com](https://www.docker.com) |
| **Aegra** | Backend self-hosted alternativo a LangSmith Platform: FastAPI + PostgreSQL + Redis, compatible con LangGraph SDK y Agent Protocol | Gratis (Apache 2.0) | [github.com/ibbybuilds/aegra](https://github.com/ibbybuilds/aegra) |
| **Ollama** | Servidor local de LLMs open-source (Qwen3, Mistral, Llama): permite agentes 100% offline sin APIs externas | Gratis (OSS) | [ollama.com](https://ollama.com) |

---

## 📋 Contenido — Módulos de la clase

### Módulo 1: Arquitectura de agentes autónomos sin gestor externo (20 min)

**El problema con las plataformas gestionadas:** AutoGPT Platform, LangSmith Cloud y otros SaaS de orquestación cobran por ejecución, introducen latencia de red, crean dependencia de proveedor y exponen datos de negocio a terceros. Para compliance (GDPR, HIPAA, datos confidenciales de clientes) o para control total de costos, la alternativa es construir la infraestructura propia.

**Los tres componentes de todo agente autónomo:**
1. **El cerebro (LLM):** Claude API o un modelo local via Ollama. Recibe el contexto completo (objetivo, historial, resultados de herramientas) y genera la próxima acción o respuesta final.
2. **Las manos (Tools):** funciones Python que el LLM puede invocar: búsqueda web, lectura de archivos, llamadas a APIs, ejecución de código, escritura en base de datos.
3. **La memoria (State):** el contexto acumulado de cada iteración. Sin persistencia, el agente olvida entre ejecuciones. LangGraph guarda el estado completo del grafo en PostgreSQL tras cada nodo.

**Arquitectura de referencia sin gestor externo:**
```
Usuario → FastAPI (endpoint) → LangGraph (StateGraph) → Claude API
                                        ↓
                              Tool Executor (Python fns)
                                        ↓
                              PostgreSQL (state checkpoint)
                                        ↑
                              Docker Compose (toda la infra local)
```

**Por qué LangGraph:** A diferencia de LangChain AgentExecutor (monolítico, difícil de debuggear), LangGraph modela el agente como un grafo dirigido explícito. Cada nodo es una función Python, cada arista es una condición lógica. Puedes pausar, inspeccionar el estado en cualquier punto, hacer "time-travel debugging" y reanudar desde un checkpoint. Benchmark 2026: LangGraph logra 76% de éxito en tareas medianas vs CrewAI 71% vs AutoGen 68%.

---

### Módulo 2: El ciclo ReAct — Razón, Actúa, Observa, Corrige (25 min)

**La anatomía de una iteración ReAct:**
```
THOUGHT: "Necesito buscar el precio del cobre en el mercado actual para 
          calcular el ROI del proyecto."
ACTION:  search_web(query="precio cobre LME junio 2026")
OBSERVATION: "Precio LME Cobre: $9,847 USD/tonelada (31 mayo 2026)"
THOUGHT: "Tengo el precio. Ahora necesito el volumen del proyecto del 
          documento que me pasaron."
ACTION:  read_file(path="proyecto_minero.pdf", extract="volumen toneladas")
OBSERVATION: "Volumen estimado: 450 toneladas métricas"
THOUGHT: "Con estos datos puedo calcular el ROI."
ACTION:  calculate(formula="(450 * 9847 * 0.15) / 2500000")
OBSERVATION: "ROI = 26.6%"
FINAL:   "El proyecto tiene un ROI estimado de 26.6% basado en precio 
           LME actual de $9,847/ton y volumen de 450 t."
```

**Implementación mínima en Python con Claude API:**
```python
import anthropic
import json

client = anthropic.Anthropic()

tools = [
    {
        "name": "search_web",
        "description": "Busca información en internet",
        "input_schema": {
            "type": "object",
            "properties": {"query": {"type": "string"}},
            "required": ["query"]
        }
    }
]

def run_agent(objective: str, max_iterations: int = 10):
    messages = [{"role": "user", "content": objective}]
    
    for i in range(max_iterations):
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=4096,
            tools=tools,
            messages=messages
        )
        
        if response.stop_reason == "end_turn":
            return response.content[0].text  # Respuesta final
        
        # Procesar tool calls
        tool_uses = [b for b in response.content if b.type == "tool_use"]
        messages.append({"role": "assistant", "content": response.content})
        
        tool_results = []
        for tool_use in tool_uses:
            result = execute_tool(tool_use.name, tool_use.input)
            tool_results.append({
                "type": "tool_result",
                "tool_use_id": tool_use.id,
                "content": result
            })
        
        messages.append({"role": "user", "content": tool_results})
```

**Autocorrección:** Si `execute_tool` lanza una excepción, se captura y se devuelve como `content` del tool_result con el mensaje de error. Claude recibe el error como Observación, razona sobre qué salió mal y reformula la Action en la siguiente iteración. Este mecanismo hace que agentes bien implementados sean notablemente resilientes.

**Detección de bucles:** Implementar un contador de iteraciones (max 10-15 por defecto) y un detector de acciones repetidas (si el agente invoca la misma herramienta con los mismos argumentos dos veces seguidas, probablemente está atascado).

---

### Módulo 3: Agentes multi-step con LangGraph — De objetivo a entrega (25 min)

**StateGraph: el agente como máquina de estados explícita:**
```python
from langgraph.graph import StateGraph, END
from typing import TypedDict, List

class AgentState(TypedDict):
    objective: str
    plan: List[str]
    current_step: int
    results: List[str]
    final_report: str

def plan_node(state: AgentState) -> AgentState:
    """Claude genera un plan de pasos para alcanzar el objetivo."""
    plan = generate_plan(state["objective"])
    return {**state, "plan": plan, "current_step": 0}

def execute_node(state: AgentState) -> AgentState:
    """Ejecuta el paso actual del plan usando herramientas."""
    step = state["plan"][state["current_step"]]
    result = execute_with_tools(step)
    results = state["results"] + [result]
    return {**state, "results": results, "current_step": state["current_step"] + 1}

def should_continue(state: AgentState) -> str:
    """Decide si continuar ejecutando o pasar a generar el reporte final."""
    if state["current_step"] >= len(state["plan"]):
        return "report"
    return "execute"

# Construir el grafo
graph = StateGraph(AgentState)
graph.add_node("plan", plan_node)
graph.add_node("execute", execute_node)
graph.add_node("report", report_node)

graph.set_entry_point("plan")
graph.add_edge("plan", "execute")
graph.add_conditional_edges("execute", should_continue, {"execute": "execute", "report": "report"})
graph.add_edge("report", END)

# Persistencia con PostgreSQL (sin gestor externo)
from langgraph.checkpoint.postgres import PostgresSaver
checkpointer = PostgresSaver.from_conn_string("postgresql://localhost/agentdb")
agent = graph.compile(checkpointer=checkpointer)
```

**Agentes multi-rol con CrewAI (autocontenido, sin cloud):**
```python
from crewai import Agent, Task, Crew

researcher = Agent(
    role="Investigador Web",
    goal="Encontrar información precisa y actualizada",
    backstory="Experto en búsqueda y síntesis de información",
    tools=[search_tool, scraper_tool],
    llm="claude-opus-4-5"  # Usa Claude directamente
)

analyst = Agent(
    role="Analista de Datos",
    goal="Procesar y estructurar la información recolectada",
    backstory="Especialista en análisis crítico y estructuración de datos",
    tools=[calculator_tool, chart_tool],
    llm="claude-opus-4-5"
)

writer = Agent(
    role="Redactor de Reportes",
    goal="Generar reportes ejecutivos claros y accionables",
    backstory="Experto en comunicación técnica para audiencias de negocio",
    llm="claude-opus-4-5"
)

crew = Crew(
    agents=[researcher, analyst, writer],
    tasks=[research_task, analysis_task, report_task],
    process="sequential"  # Sin manager externo; coordinación interna
)

result = crew.kickoff(inputs={"topic": "mercado inmobiliario CDMX Q3 2026"})
```

**Persistencia de estado entre sesiones:** LangGraph guarda el estado completo del grafo tras cada nodo. Si el agente falla en el paso 7 de 10, se puede reanudar desde el checkpoint sin perder el trabajo previo. Aegra extiende esto con soporte para 30 ejecuciones concurrentes, lease-based crash recovery y escalado horizontal.

---

### Módulo 4: Deploy self-hosted — De local a producción sin SaaS (20 min)

**Stack de producción completo:**
```yaml
# docker-compose.yml
version: "3.9"
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - DATABASE_URL=postgresql://agent:secret@postgres:5432/agentdb
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: agentdb
      POSTGRES_USER: agent
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    # Para colas de tareas y pub/sub entre workers

volumes:
  postgres_data:
```

**FastAPI como capa HTTP del agente:**
```python
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel

app = FastAPI(title="Agent API", version="1.0")

class AgentRequest(BaseModel):
    objective: str
    thread_id: str | None = None  # Para reanudar sesiones

class AgentResponse(BaseModel):
    thread_id: str
    status: str
    result: str | None = None

@app.post("/agent/run", response_model=AgentResponse)
async def run_agent(request: AgentRequest, background_tasks: BackgroundTasks):
    thread_id = request.thread_id or generate_thread_id()
    # Ejecutar en background para no bloquear HTTP
    background_tasks.add_task(execute_agent, request.objective, thread_id)
    return AgentResponse(thread_id=thread_id, status="running")

@app.get("/agent/{thread_id}/status")
async def get_status(thread_id: str):
    state = get_checkpoint(thread_id)
    return {"thread_id": thread_id, "state": state}
```

**Monitoreo sin LangSmith:** Para observabilidad sin SaaS externo, usar OpenTelemetry (integrado nativamente en Aegra) con Prometheus + Grafana auto-hospedados. Cada llamada al LLM, cada tool call y cada transición de estado queda registrada localmente.

**Escalado:** Un solo worker de FastAPI maneja múltiples ejecuciones de agentes concurrentes con async/await. Para mayor throughput, Aegra soporta múltiples instancias de worker coordinadas via Redis, con PostgreSQL como fuente de verdad del estado.

---

## 💪 Ejercicio práctico

### Construir un agente investigador autónomo de principio a fin

**Objetivo del ejercicio:** Construir un agente que, dado un tema de investigación, busca información en la web, la procesa, la analiza y genera un reporte ejecutivo en Markdown, **completamente sin intervención humana** y **sin depender de ninguna plataforma externa**.

**Especificaciones:**
- Input: `{"topic": "tendencias del mercado inmobiliario en Guadalajara 2026"}`
- Output: Archivo `reporte_[topic].md` con estructura: resumen ejecutivo, hallazgos principales, datos cuantitativos, fuentes
- Herramientas disponibles para el agente: búsqueda web, extracción de contenido de URLs, escritura de archivos
- El agente debe ejecutar al menos 3-5 búsquedas diferentes, sintetizar los resultados y autocorregirse si alguna búsqueda falla

**Pasos:**

1. **Setup del entorno (10 min):**
   ```bash
   pip install anthropic langgraph fastapi uvicorn psycopg2-binary
   cp .env.example .env  # Agregar ANTHROPIC_API_KEY
   ```

2. **Definir las herramientas (15 min):**
   - `search_web(query: str) -> str`: usa DuckDuckGo API (gratuita, sin cuenta)
   - `fetch_url(url: str) -> str`: extrae texto limpio de una URL
   - `write_file(filename: str, content: str) -> str`: guarda el reporte localmente

3. **Construir el grafo ReAct en LangGraph (20 min):**
   - Nodo `research`: el agente busca y recopila información (ciclo ReAct)
   - Nodo `analyze`: procesa y estructura los hallazgos
   - Nodo `write`: genera el reporte final en Markdown
   - Aristas condicionales: reintentar si la información es insuficiente

4. **Wrap con FastAPI (10 min):**
   - `POST /research` → lanza el agente en background
   - `GET /research/{id}` → consulta el estado y el reporte

5. **Dockerizar y testear (10 min):**
   ```bash
   docker-compose up --build
   curl -X POST http://localhost:8000/research \
     -H "Content-Type: application/json" \
     -d '{"topic": "mercado inmobiliario Guadalajara 2026"}'
   ```

**Criterio de éxito:** El agente genera un reporte de al menos 500 palabras con 3+ fuentes distintas, manejando automáticamente al menos un error (URL inaccesible, búsqueda sin resultados) y sin intervención manual.

**Variante avanzada:** Convertir el agente en un sistema multi-rol con CrewAI: Agente Investigador + Agente Crítico (verifica las fuentes) + Agente Redactor. El Crítico rechaza información no verificada y hace que el Investigador busque nuevamente.

---

## 📚 Recursos

### Documentación oficial
- [Anthropic Tool Use Guide](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) — Tool calling con Claude API
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/) — Orquestación de agentes con grafos de estado
- [CrewAI Documentation](https://docs.crewai.com/) — Framework de agentes con roles
- [AutoGen (Microsoft)](https://microsoft.github.io/autogen/stable/) — Multi-agent conversation framework
- [FastAPI Documentation](https://fastapi.tiangolo.com) — API async en Python

### Repositorios de referencia
- [github.com/ibbybuilds/aegra](https://github.com/ibbybuilds/aegra) — Backend self-hosted alternativo a LangSmith Platform (FastAPI + PostgreSQL + Redis)
- [github.com/crewAIInc/crewAI](https://github.com/crewaiinc/crewai) — CrewAI open-source (MIT)
- [github.com/microsoft/autogen](https://github.com/microsoft/autogen) — AutoGen open-source
- [github.com/agno-agi/agent-api](https://github.com/agno-agi/agent-api) — Setup minimalista FastAPI + PostgreSQL para agentes

### Artículos clave
- [ReAct: Build an AI Agent in 50 Lines of Python](https://medium.com/data-science-collective/build-an-ai-agent-that-plans-before-it-acts-react-in-50-lines-of-python-b2f325b38e5b) — Implementación práctica del ciclo ReAct
- [LangGraph Multi-Agent Orchestration Guide 2025](https://latenode.com/blog/ai-frameworks-technical-infrastructure/langgraph-multi-agent-orchestration/) — Arquitectura completa con análisis técnico
- [Building Production-Ready Agentic AI with Docker and FastAPI](https://medium.com/@er.rajkumaar/building-production-ready-agentic-ai-systems-with-docker-and-fastapi-b4c2231b3945) — Deploy en producción sin SaaS
- [CrewAI Framework 2025: Complete Review](https://latenode.com/blog/ai-frameworks-technical-infrastructure/crewai-framework/crewai-framework-2025-complete-review-of-the-open-source-multi-agent-ai-platform) — Análisis profundo del framework
- [Self-Hosted AI Agents 2026](https://wgall.com/blog/self-hosted-ai-agents-2026.html) — Tendencias de autonomía e infraestructura propia
- [Best Multi-Agent Frameworks 2026](https://gurusup.com/blog/best-multi-agent-frameworks-2026) — Comparativa actualizada LangGraph vs CrewAI vs AutoGen

### Papers y research
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) — Paper original del paradigma ReAct (Yao et al., 2022)
- [AutoGen: Enabling Next-Gen LLM Applications](https://www.microsoft.com/en-us/research/publication/autogen-enabling-next-gen-llm-applications-via-multi-agent-conversation-framework/) — Paper original de Microsoft Research

---

## 🔗 Acciones post-clase

### Esta semana (acción inmediata)
- [ ] Implementar el ejercicio básico: agente ReAct con Claude API + 3 herramientas en Python puro (sin framework) — objetivo: entender el loop desde cero antes de abstraerlo
- [ ] Leer la documentación de LangGraph StateGraph e implementar el mismo agente como grafo — comparar la legibilidad y el control

### Próximas 2 semanas (consolidación)
- [ ] Agregar persistencia con SQLite checkpointer de LangGraph y verificar que el agente puede reanudar tras un fallo simulado
- [ ] Dockerizar el agente con FastAPI y probarlo como servicio HTTP local
- [ ] Explorar Aegra como backend: sustituir LangSmith Platform con Aegra self-hosted (`aegra init` + `docker compose up`)
- [ ] Construir una versión multi-rol con CrewAI: mínimo 2 agentes con roles diferentes coordinados sin manager externo

### Mes siguiente (aplicación real)
- [ ] Identificar un proceso repetitivo real en tu proyecto/empresa que se pueda automatizar con un agente (reporte semanal, análisis de datos, procesamiento de documentos)
- [ ] Construir el agente para ese caso real, con herramientas conectadas a tus sistemas internos
- [ ] Medir: tiempo ahorrado, tasa de éxito del agente, costo en tokens vs valor generado
- [ ] Presentar el caso de uso al equipo con métricas concretas

### Recursos de comunidad
- Discord de CrewAI: comunidad activa de devs construyendo agentes en producción
- LangGraph GitHub Discussions: preguntas técnicas respondidas por el equipo de LangChain
- Discord de Aegra: soporte para despliegue self-hosted

---

*Clase 16 · Tier 4 · TI / Dev track · Serie IA Práctica 2026*
