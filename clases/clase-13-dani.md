# 💰 Optimizar consumo de créditos en Claude para código

**Presentador:** Dani | **Fecha:** Viernes 24 julio 2026 | **Audiencia:** Devs | **Tier:** 4 · TI / Dev track | **Duración:** 90 min

---

## 🎯 Objetivos

Al finalizar esta clase, los participantes podrán:

- **Reducir el costo por token en producción** hasta un 90% aplicando prompt caching correctamente en sus aplicaciones, eliminando el reprocesamiento de contextos repetidos en cada llamada a la API.
- **Implementar prompt caching** con breakpoints explícitos y automáticos en Python y TypeScript, verificando que el caché está activo mediante los campos `cache_read_input_tokens` y `cache_creation_input_tokens` en la respuesta.
- **Elegir el modelo correcto para cada tarea:** Haiku 4.5 para clasificación y extracción de alta frecuencia, Sonnet 4.6 como default de producción, Opus 4.7 solo para razonamiento complejo, evitando pagar por capacidad innecesaria.
- **Batchear requests no urgentes** con el Message Batches API para obtener un 50% de descuento automático en input y output de todas las tareas que toleran latencia (revisiones de código, análisis de logs, generación de documentación).
- **Monitorear el gasto real en tiempo real** con herramientas como Helicone, LangSmith y LiteLLM para detectar endpoints costosos, establecer presupuestos por equipo o feature, y actuar antes de que la factura sorprenda.

---

## 🔑 Conceptos clave

### Tokens: la unidad de costo real
Un token equivale aproximadamente a 4 caracteres o 0.75 palabras en inglés. Todo lo que envías a la API —instrucciones, contexto, código, historial de conversación— se convierte en tokens de input; todo lo que Claude responde son tokens de output. **Los tokens de output cuestan 5 veces más que los de input** en todos los modelos actuales de Claude. Un prompt de 10,000 tokens enviado 100 veces al día sin caching puede representar miles de dólares al mes; el mismo flujo con caching puede costar centavos.

**Atención:** A partir de Opus 4.7, Anthropic introdujo un nuevo tokenizador que puede consumir hasta un **35% más de tokens** para el mismo texto fijo. Es fundamental re-calcular estimaciones de costo al migrar de modelos anteriores.

### Prompt Caching: la palanca más poderosa
El prompt caching permite que la API almacene y reutilice porciones procesadas de tu prompt —system prompts, documentos de contexto, definiciones de tools, historial de conversación— en lugar de reprocesarlas desde cero en cada llamada. El resultado: los **cache hits cuestan solo el 10% del precio estándar de input**, una reducción del 90%. Hay dos durations de caché:
- **5 minutos (default):** write = 1.25× el precio base; hit = 0.10× el precio base. Amortiza desde la primera lectura.
- **1 hora:** write = 2× el precio base; hit = 0.10× el precio base. Amortiza a partir de la segunda lectura. Ideal para workflows agénticos con pasos espaciados.

El mínimo de tokens cacheables varía por modelo: **1,024 tokens** para Sonnet 4.6 y Opus 4.8; **4,096 tokens** para Haiku 4.5 y Opus 4.7. Prompts más cortos simplemente no se cachean (sin error, pero sin ahorro).

### Context Windows y gestión del contexto
Claude Sonnet 4.6 y Opus 4.6+ ofrecen ventanas de contexto de hasta **1 millón de tokens** al mismo precio por token que ventanas pequeñas. Sin embargo, cada token enviado —incluyendo el historial completo de la conversación— se cobra. Las conversaciones largas sin caching acumulan costos rápidamente. Truncar contexto innecesario, limpiar historial antiguo y estructurar el prompt para maximizar el área cacheada son prácticas esenciales.

### Selección de modelos: pagar por lo que se necesita
La diferencia de precio entre modelos es drástica. En 2026:
- **Claude Haiku 4.5:** $1.00/$5.00 por millón de tokens (input/output). Excelente para clasificación, routing, extracción, moderación.
- **Claude Sonnet 4.6:** $3.00/$15.00 por millón de tokens. El default recomendado para la mayoría de tareas de producción.
- **Claude Opus 4.7:** $5.00/$25.00 por millón de tokens. Reservar para razonamiento complejo y decisiones de arquitectura.

Usar Opus donde Haiku sería suficiente puede costar **5× más** por la misma salida. El routing inteligente —evaluar la complejidad de cada request y asignar el modelo apropiado— es una de las optimizaciones con mayor ROI.

### Message Batches API: 50% de descuento para trabajo asíncrono
El Batches API procesa solicitudes de manera asíncrona, típicamente en menos de 1 hora y hasta 24 horas, a cambio de un **descuento fijo del 50% en todos los modelos**, tanto en input como en output. No hay umbral de volumen mínimo. Cada batch puede contener hasta **100,000 requests o 256 MB**, lo que sea menor. Los descuentos de caching y batch se **acumulan**: un token cacheado dentro de un batch cuesta el 10% × 50% = **5% del precio original**.

### Streaming vs. respuesta completa
El streaming devuelve tokens a medida que se generan, mejorando la experiencia del usuario en interfaces interactivas. Sin embargo, no reduce el costo: se pagan los mismos tokens. Para pipelines internos donde el usuario no ve la respuesta en tiempo real (generación de tests, análisis de código, documentación), omitir streaming simplifica la integración sin impacto en el costo.

### Monitoreo de costos: de reactivo a proactivo
Sin instrumentación, los equipos se enteran del sobrecosto cuando llega la factura. Las herramientas de observabilidad para LLMs permiten ver el gasto por endpoint, por usuario, por feature y por modelo en tiempo real, establecer alertas y presupuestos automáticos, y detectar qué llamadas específicas están consumiendo la mayor parte del presupuesto.

---

## 🛠️ Stack tecnológico

| Herramienta | Función principal | Precio | URL |
|---|---|---|---|
| **Claude API (Anthropic)** | API principal para acceder a los modelos Claude (Haiku, Sonnet, Opus) con soporte para caching, batching y streaming | Pago por uso | [platform.claude.com](https://platform.claude.com) |
| **Anthropic SDK Python** | SDK oficial de Python para integrar Claude API: manejo de mensajes, prompt caching, batch processing y streaming | Gratis (open source) | [github.com/anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) |
| **Anthropic SDK TypeScript** | SDK oficial de TypeScript/Node.js para integrar Claude API con tipado completo, soporte streaming y herramientas | Gratis (open source) | [github.com/anthropics/anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript) |
| **LangChain** | Framework de orquestación para construir aplicaciones LLM: chains, agentes, RAG, con soporte para múltiples modelos | Freemium | [langchain.com](https://www.langchain.com) |
| **LangSmith** | Plataforma de observabilidad para LLM: trazabilidad de llamadas, tracking de costos, evaluación y debugging dentro del ecosistema LangChain | Freemium | [smith.langchain.com](https://smith.langchain.com) |
| **Helicone** | Proxy de observabilidad open source: una línea de integración, tracking de costos por modelo/usuario/feature, alertas de presupuesto y análisis de latencia | Freemium | [helicone.ai](https://www.helicone.ai) |
| **LiteLLM** | Proxy unificado open source para 100+ LLMs: presupuestos por clave API o equipo, routing inteligente entre modelos, tracking automático de costos | Gratis (open source) | [litellm.ai](https://www.litellm.ai) |
| **Langfuse** | Plataforma de observabilidad open source para LLMs: tracking de tokens y costos, trazas de conversación, evaluaciones con etiquetado personalizado | Freemium | [langfuse.com](https://langfuse.com) |
| **tiktoken** | Librería oficial de OpenAI para contar tokens (compatible con estimaciones para Claude): útil para calcular costos antes de hacer la llamada | Gratis | [github.com/openai/tiktoken](https://github.com/openai/tiktoken) |
| **Anthropic Console** | Dashboard oficial de Anthropic: monitoreo de uso y costos en tiempo real, gestión de claves API, límites de tasa por tier | Gratis (con cuenta) | [console.anthropic.com](https://console.anthropic.com) |

---

## 📋 Contenido — Módulos de la clase

### Módulo 1: Entender los tokens y su costo real (20 min)

Antes de optimizar, hay que medir. La mayoría de los devs subestiman su consumo porque no instrumentan sus llamadas desde el inicio.

**¿Dónde van los tokens?**
Cada llamada a la API consume tokens en múltiples lugares que no siempre son obvios:
- El **system prompt** se envía completo en cada request si no hay caching.
- El **historial de conversación** crece con cada turno: en el mensaje 20 de una conversación, todos los 19 mensajes anteriores se reenvían.
- Las **definiciones de tools** (funciones que puede llamar Claude) pueden sumar cientos de tokens por request.
- El **overhead del sistema** varía por modelo: por ejemplo, habilitar tool use en Sonnet 4.6 con `auto` agrega 497 tokens automáticamente al system prompt.

**Cómo leer el campo `usage` en la respuesta:**
```python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="Eres un experto en Python.",
    messages=[{"role": "user", "content": "Explica los decoradores"}]
)

# Inspeccionar el costo de cada llamada
print(f"Input tokens:  {response.usage.input_tokens}")
print(f"Output tokens: {response.usage.output_tokens}")
print(f"Cache writes:  {response.usage.cache_creation_input_tokens}")
print(f"Cache reads:   {response.usage.cache_read_input_tokens}")

# Calcular el costo en USD (Sonnet 4.6)
input_cost  = response.usage.input_tokens  * 3.00 / 1_000_000
output_cost = response.usage.output_tokens * 15.00 / 1_000_000
print(f"Costo estimado: ${input_cost + output_cost:.6f}")
```

**Regla de oro:** Los tokens de output cuestan 5× más que los de input. Prompts más precisos y cortos, respuestas más enfocadas = ahorro doble.

---

### Módulo 2: Prompt Caching — de la teoría al código (25 min)

El prompt caching es la optimización con mayor impacto para la mayoría de aplicaciones. Si tienes un system prompt largo, documentos de contexto, o una base de código que Claude necesita analizar, el caching puede reducir tu factura un 90% en esas porciones.

**¿Cuándo tiene sentido cachear?**
- System prompts de más de 1,024 tokens (Sonnet 4.6) que se repiten en cada llamada.
- Documentos, código fuente o bases de conocimiento que no cambian entre requests.
- Definiciones de tools cuando tienes muchas funciones disponibles.
- Historial de conversación en aplicaciones multi-turno.

**Implementación básica con cache explícito (Python):**
```python
import anthropic

client = anthropic.Anthropic()

# Sistema de análisis de código — el prompt es el mismo para todos los usuarios
SYSTEM_PROMPT = """Eres un experto en revisión de código Python.
Tu tarea es analizar código, detectar bugs, antipatrones y oportunidades
de optimización. Devuelve siempre:
1. Un resumen ejecutivo
2. Lista de issues ordenados por severidad
3. Sugerencias de mejora con ejemplos de código
[... prompt extenso de 2000+ tokens ...]
"""

def analizar_codigo(codigo_usuario: str) -> str:
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=2048,
        system=[
            {
                "type": "text",
                "text": SYSTEM_PROMPT,
                "cache_control": {"type": "ephemeral"}  # Cachear este bloque
            }
        ],
        messages=[
            {"role": "user", "content": f"Analiza este código:\n\n{codigo_usuario}"}
        ]
    )

    # Verificar que el caché funcionó
    usage = response.usage
    if usage.cache_read_input_tokens > 0:
        ahorro = usage.cache_read_input_tokens * 3.00 * 0.90 / 1_000_000
        print(f"Caché activo: {usage.cache_read_input_tokens} tokens ahorrados (${ahorro:.4f})")
    elif usage.cache_creation_input_tokens > 0:
        print(f"Caché creado: {usage.cache_creation_input_tokens} tokens escritos")

    return response.content[0].text
```

**Caché automático para conversaciones multi-turno:**
```python
# Más simple: dejar que Anthropic gestione los breakpoints automáticamente
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},  # A nivel de request
    system="Eres un asistente de programación...",
    messages=conversation_history  # El historial crece pero se cachea automáticamente
)
```

**Caché de 1 hora para workflows agénticos:**
```python
# Para agentes con pasos espaciados (> 5 minutos entre llamadas)
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=2048,
    system=[
        {
            "type": "text",
            "text": BASE_DE_CODIGO_COMPLETA,  # Miles de tokens de contexto
            "cache_control": {"type": "ephemeral", "ttl": "1h"}  # TTL de 1 hora
        }
    ],
    messages=[{"role": "user", "content": pregunta}]
)
```

**Errores comunes a evitar:**
- Colocar el breakpoint de caché en contenido que cambia en cada request (timestamps, IDs dinámicos) → cache miss garantizado en cada llamada.
- No verificar `cache_read_input_tokens` → no sabes si el caché está activo.
- Usar caché de 1 hora en flujos de alta frecuencia → el costo de write es mayor y se amortiza menos rápido.

---

### Módulo 3: Selección de modelos y Message Batches API (25 min)

**Routing inteligente entre modelos:**

No todas las tareas requieren la misma potencia. Un sistema de routing simple puede reducir costos dramáticamente:

```python
def elegir_modelo(tarea: str, longitud_input: int) -> str:
    """Elige el modelo más económico adecuado para la tarea."""

    # Haiku para tareas simples de alta frecuencia
    tareas_simples = ["clasificar", "extraer", "filtrar", "categorizar", "moderar"]
    if any(t in tarea.lower() for t in tareas_simples) and longitud_input < 5000:
        return "claude-haiku-4-5"  # $1/$5 por MTok — 3× más barato que Sonnet

    # Opus solo para razonamiento complejo
    tareas_complejas = ["arquitectura", "refactorizar sistema", "diseñar", "optimizar algoritmo"]
    if any(t in tarea.lower() for t in tareas_complejas):
        return "claude-opus-4-7"  # $5/$25 por MTok — solo cuando se justifica

    # Sonnet como default para producción
    return "claude-sonnet-4-6"  # $3/$15 por MTok — el equilibrio óptimo


# Ejemplo de ahorro con routing
# Sin routing: 10,000 clasificaciones/día con Sonnet
costo_sin_routing = 10_000 * 500 * 3.00 / 1_000_000  # ~$15/día
# Con routing: las mismas clasificaciones con Haiku
costo_con_routing = 10_000 * 500 * 1.00 / 1_000_000  # ~$5/día
print(f"Ahorro con routing: ${costo_sin_routing - costo_con_routing:.2f}/día")
# → $10/día de ahorro = $300/mes solo por elegir el modelo correcto
```

**Message Batches API — 50% de descuento sin configuración extra:**

El Batches API es ideal para: revisiones de código en CI/CD, generación de docstrings, análisis de PRs, clasificación de issues, pruebas de regresión con LLM.

```python
import anthropic
import json

client = anthropic.Anthropic()

# Preparar un batch de revisiones de código
archivos_a_revisar = [
    {"id": "auth.py", "codigo": "..."},
    {"id": "api.py", "codigo": "..."},
    {"id": "models.py", "codigo": "..."},
    # ... hasta 100,000 archivos
]

requests = [
    {
        "custom_id": archivo["id"],
        "params": {
            "model": "claude-sonnet-4-6",
            "max_tokens": 1024,
            "messages": [
                {
                    "role": "user",
                    "content": f"Revisa este código Python:\n\n{archivo['codigo']}"
                }
            ]
        }
    }
    for archivo in archivos_a_revisar
]

# Crear el batch — precio automático: $1.50/MTok input (vs $3.00 estándar)
batch = client.messages.batches.create(requests=requests)
print(f"Batch ID: {batch.id}")
print(f"Requests en batch: {batch.request_counts.processing}")

# Polling del estado (o usar webhooks)
import time
while True:
    batch = client.messages.batches.retrieve(batch.id)
    if batch.processing_status == "ended":
        break
    print(f"Estado: {batch.processing_status} — esperando...")
    time.sleep(60)

# Procesar resultados
for resultado in client.messages.batches.results(batch.id):
    if resultado.result.type == "succeeded":
        print(f"{resultado.custom_id}: {resultado.result.message.content[0].text[:100]}...")
    else:
        print(f"{resultado.custom_id}: ERROR — {resultado.result.error.type}")
```

**Stacking caching + batching = hasta 95% de ahorro:**
Cuando usas ambas técnicas juntas, el sistema prompt cacheado dentro de un batch se cobra al 10% × 50% = **5% del precio original de input**. Para pipelines de análisis masivo con contexto compartido (misma base de código, mismas instrucciones), el ahorro combinado puede ser transformador.

---

### Módulo 4: Monitoreo de costos en producción (20 min)

El monitoreo es lo que convierte las optimizaciones de teoría en práctica sostenible. Sin visibilidad, el equipo no puede saber si las optimizaciones funcionan ni detectar regresiones de costo.

**Métricas clave a monitorear:**
- **Costo por request** (input + output tokens × precio del modelo)
- **Cache hit rate** (% de requests con `cache_read_input_tokens > 0`)
- **Distribución por modelo** (qué % de requests va a Haiku vs Sonnet vs Opus)
- **Tokens de output promedio** (detectar prompts que generan respuestas innecesariamente largas)
- **Costo por feature/endpoint** (qué parte de tu app consume más)

**Integración con Helicone (1 línea de cambio):**
```python
import anthropic

# Antes
client = anthropic.Anthropic(api_key="sk-ant-...")

# Después — proxy transparente de Helicone
client = anthropic.Anthropic(
    api_key="sk-ant-...",
    base_url="https://anthropic.helicone.ai",
    default_headers={
        "Helicone-Auth": f"Bearer {HELICONE_API_KEY}",
        "Helicone-Property-Feature": "code-review",  # Etiquetar por feature
        "Helicone-Property-User": user_id,            # Etiquetar por usuario
    }
)
# Todas tus llamadas existentes funcionan sin cambios
# Dashboard en helicone.ai muestra costos en tiempo real
```

**Instrumentación manual en el código (sin proxy):**
```python
import time
from dataclasses import dataclass

@dataclass
class MetricasLlamada:
    modelo: str
    tokens_input: int
    tokens_output: int
    tokens_cache_write: int
    tokens_cache_read: int
    latencia_ms: float
    feature: str

def llamada_instrumentada(cliente, feature: str, **kwargs) -> tuple:
    inicio = time.time()
    response = cliente.messages.create(**kwargs)
    latencia = (time.time() - inicio) * 1000

    # Calcular costo según modelo
    precios = {
        "claude-haiku-4-5": (1.00, 5.00),
        "claude-sonnet-4-6": (3.00, 15.00),
        "claude-opus-4-7": (5.00, 25.00),
    }
    precio_input, precio_output = precios.get(kwargs["model"], (3.00, 15.00))

    u = response.usage
    costo_input  = u.input_tokens * precio_input / 1_000_000
    costo_output = u.output_tokens * precio_output / 1_000_000
    costo_cache_write = u.cache_creation_input_tokens * precio_input * 1.25 / 1_000_000
    costo_cache_read  = u.cache_read_input_tokens * precio_input * 0.10 / 1_000_000
    costo_total = costo_input + costo_output + costo_cache_write + costo_cache_read

    metricas = MetricasLlamada(
        modelo=kwargs["model"],
        tokens_input=u.input_tokens,
        tokens_output=u.output_tokens,
        tokens_cache_write=u.cache_creation_input_tokens,
        tokens_cache_read=u.cache_read_input_tokens,
        latencia_ms=latencia,
        feature=feature
    )

    # Enviar a tu sistema de métricas (DataDog, Grafana, etc.)
    registrar_metricas(metricas, costo_total)

    return response, costo_total
```

**Presupuestos y alertas con LiteLLM:**
```python
# litellm.ai — proxy open source con control de presupuesto
# En config.yaml del proxy:
# model_list:
#   - model_name: claude-sonnet
#     litellm_params:
#       model: anthropic/claude-sonnet-4-6
#       api_key: sk-ant-...
#
# general_settings:
#   max_budget: 100  # USD máximo total
#   budget_duration: 1mo  # Por mes
#
# Presupuestos por clave/equipo:
# key_generation:
#   max_budget: 10  # Cada dev key tiene max $10/mes
```

---

## 💪 Ejercicio práctico

### Implementar prompt caching y medir el ahorro real

**Objetivo:** Construir un analizador de código con caching, ejecutarlo 10 veces con el mismo contexto y documentar el ahorro real en tokens y USD.

**Paso 1: Setup inicial (10 min)**
1. Instalar el SDK: `pip install anthropic`
2. Exportar la API key: `export ANTHROPIC_API_KEY="sk-ant-..."`
3. Crear un archivo `analizador.py` con el siguiente scaffolding:

```python
import anthropic
import json

client = anthropic.Anthropic()

# System prompt extenso (debe superar 1,024 tokens para cachear en Sonnet 4.6)
SYSTEM_PROMPT = """
Eres un experto senior en ingeniería de software con 15 años de experiencia.
Especializaciones: Python, arquitectura de sistemas, performance, seguridad.

PROCESO DE REVISIÓN:
1. Analizar la estructura y organización del código
2. Detectar bugs potenciales, incluyendo race conditions y edge cases
3. Identificar violaciones de principios SOLID
4. Evaluar el manejo de errores y excepciones
5. Revisar seguridad: inyección, validación de inputs, exposición de secrets
6. Analizar performance: complejidad algorítmica, operaciones costosas
7. Verificar testabilidad y coverage potencial

FORMATO DE RESPUESTA (siempre en este orden):
## Resumen Ejecutivo
[2-3 líneas del estado general del código]

## Issues Críticos (P0)
[Bugs que causan fallos o vulnerabilidades de seguridad]

## Issues Importantes (P1)
[Problemas de lógica, rendimiento o mantenibilidad]

## Sugerencias de Mejora (P2)
[Refactorizaciones y buenas prácticas opcionales]

## Score: X/10
[Justificación del puntaje]
""" * 3  # Repetir para superar el mínimo de 1,024 tokens

def analizar_sin_cache(codigo: str) -> dict:
    """Llamada sin caching — precio estándar."""
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        system=SYSTEM_PROMPT,  # Sin cache_control
        messages=[{"role": "user", "content": f"Analiza:\n\n{codigo}"}]
    )
    return {
        "input": response.usage.input_tokens,
        "output": response.usage.output_tokens,
        "cache_write": response.usage.cache_creation_input_tokens,
        "cache_read": response.usage.cache_read_input_tokens,
    }

def analizar_con_cache(codigo: str) -> dict:
    """Llamada con caching — ahorro en llamadas repetidas."""
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        system=[
            {
                "type": "text",
                "text": SYSTEM_PROMPT,
                "cache_control": {"type": "ephemeral"}
            }
        ],
        messages=[{"role": "user", "content": f"Analiza:\n\n{codigo}"}]
    )
    return {
        "input": response.usage.input_tokens,
        "output": response.usage.output_tokens,
        "cache_write": response.usage.cache_creation_input_tokens,
        "cache_read": response.usage.cache_read_input_tokens,
    }
```

**Paso 2: Medir el ahorro (20 min)**

```python
CODIGO_PRUEBA = """
def procesar_usuarios(db_conn, user_ids):
    resultados = []
    for uid in user_ids:
        query = f"SELECT * FROM users WHERE id = {uid}"  # Bug de seguridad!
        cursor = db_conn.cursor()
        cursor.execute(query)
        user = cursor.fetchone()
        if user:
            resultados.append(user)
    return resultados
"""

PRECIO_INPUT_SONNET  = 3.00 / 1_000_000   # por token
PRECIO_OUTPUT_SONNET = 15.00 / 1_000_000  # por token
PRECIO_CACHE_WRITE   = 3.75 / 1_000_000   # 1.25×
PRECIO_CACHE_READ    = 0.30 / 1_000_000   # 0.10×

def calcular_costo(metricas: dict) -> float:
    return (
        metricas["input"]       * PRECIO_INPUT_SONNET  +
        metricas["output"]      * PRECIO_OUTPUT_SONNET +
        metricas["cache_write"] * PRECIO_CACHE_WRITE   +
        metricas["cache_read"]  * PRECIO_CACHE_READ
    )

# Ejecutar 10 llamadas de cada tipo y comparar
print("=== SIN CACHING (5 llamadas) ===")
costo_sin_cache = 0
for i in range(5):
    m = analizar_sin_cache(CODIGO_PRUEBA)
    costo = calcular_costo(m)
    costo_sin_cache += costo
    print(f"  Llamada {i+1}: {m['input']} input, {m['output']} output → ${costo:.5f}")

print("\n=== CON CACHING (5 llamadas) ===")
costo_con_cache = 0
for i in range(5):
    m = analizar_con_cache(CODIGO_PRUEBA)
    costo = calcular_costo(m)
    costo_con_cache += costo
    tipo = "WRITE" if m['cache_write'] > 0 else "READ"
    print(f"  Llamada {i+1} [{tipo}]: {m['cache_read']} cached tokens → ${costo:.5f}")

ahorro = costo_sin_cache - costo_con_cache
print(f"\n--- RESULTADO ---")
print(f"Costo sin cache (5 llamadas): ${costo_sin_cache:.5f}")
print(f"Costo con cache (5 llamadas): ${costo_con_cache:.5f}")
print(f"Ahorro total: ${ahorro:.5f} ({ahorro/costo_sin_cache*100:.1f}%)")
print(f"Ahorro proyectado (1000 llamadas/día): ${ahorro/5*1000:.2f}/día")
```

**Paso 3: Bonus — agregar batch processing (30 min)**

Modificar el ejercicio para enviar las 5 revisiones como un solo batch y comparar:
- Latencia (batch tarda más pero procesa en paralelo)
- Costo (50% de descuento automático)
- Cuándo tiene sentido usar batch vs real-time

**Reflexión grupal (10 min):**
- ¿En qué partes de sus proyectos actuales tienen system prompts repetidos que podrían cachear?
- ¿Qué workloads en su stack podrían batchear sin impacto en la experiencia del usuario?
- ¿Qué modelo están usando hoy para cada tarea? ¿Tiene sentido?

---

## 📚 Recursos recomendados

### Documentación oficial (fuente primaria)
- [Prompt Caching — Claude API Docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) — Guía técnica completa con ejemplos de código
- [Message Batches API — Claude API Docs](https://platform.claude.com/docs/en/build-with-claude/batch-processing) — Documentación del Batches API
- [Pricing oficial — Claude API](https://platform.claude.com/docs/en/about-claude/pricing) — Tabla de precios actualizada con todos los modelos
- [Claude Cookbook — Batch Processing](https://platform.claude.com/cookbook/misc-batch-processing) — Ejemplo práctico de batch processing

### Herramientas de monitoreo
- [Helicone](https://www.helicone.ai) — Observabilidad open source, integración en 1 línea
- [LangSmith](https://smith.langchain.com) — Trazabilidad para ecosistema LangChain
- [LiteLLM](https://www.litellm.ai) — Proxy open source con control de presupuesto
- [Langfuse](https://langfuse.com) — Alternativa open source a LangSmith con token tracking
- [Anthropic Console](https://console.anthropic.com) — Dashboard oficial de uso y costos

### Lecturas adicionales
- ["Stop Burning Tokens: A Developer's Guide to Claude AI Token Optimization"](https://levelup.gitconnected.com/stop-burning-tokens-a-developers-guide-to-claude-ai-token-optimization-4c70c7c52ffb) — Level Up Coding
- ["How to cut Claude API costs by up to 95% with three features most developers skip"](https://amitkoth.com/reduce-claude-api-costs/) — Amit Kothari
- ["Claude API Cost Optimization: Caching, Batching, and 60% Token Reduction"](https://dev.to/whoffagents/claude-api-cost-optimization-caching-batching-and-60-token-reduction-in-production-3n49) — DEV Community
- ["Anthropic API Pricing in 2026: Complete Guide"](https://www.finout.io/blog/anthropic-api-pricing) — Finout

### SDKs y herramientas de código
- [Anthropic Python SDK](https://github.com/anthropics/anthropic-sdk-python) — GitHub oficial
- [Anthropic TypeScript SDK](https://github.com/anthropics/anthropic-sdk-typescript) — GitHub oficial

---

## 🔗 Acciones post-clase

### Esta semana (compromiso mínimo)
- [ ] Revisar el system prompt de tu aplicación principal: ¿cuántos tokens tiene? ¿supera el mínimo de caching (1,024 para Sonnet)?
- [ ] Agregar `cache_control: {"type": "ephemeral"}` al system prompt y verificar que `cache_read_input_tokens > 0` en la segunda llamada
- [ ] Abrir el Anthropic Console y revisar el breakdown de uso por modelo del último mes

### Este mes
- [ ] Implementar logging de `usage` (input, output, cache_write, cache_read) en todas las llamadas a la API del proyecto
- [ ] Identificar qué endpoints o features de tu app consumen más tokens y evaluar si el modelo asignado es el correcto
- [ ] Migrar al menos un workload batch-compatible (revisiones de código, análisis de logs, generación de tests) al Message Batches API
- [ ] Configurar Helicone o Langfuse para tener visibilidad de costos en tiempo real

### Este trimestre
- [ ] Implementar routing inteligente entre modelos basado en la complejidad de cada request
- [ ] Establecer alertas de presupuesto por feature y por equipo
- [ ] Medir el impacto total: comparar el costo mensual antes y después de las optimizaciones
- [ ] Documentar las estrategias aplicadas y los ahorros conseguidos para compartir con el equipo

---

*Clase 13 — Programa IA Aplicada · Track TI / Dev · Tier 4*
*Presentado por Dani · Viernes 24 julio 2026*
