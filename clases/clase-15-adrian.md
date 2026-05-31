# 🔄 Integración de agentes IA con APIs y webhooks

**Presentador:** Adrian | **Fecha:** Viernes 31 julio 2026 | **Audiencia:** Devs | **Tier:** 4 · TI / Dev track | **Duración:** 90 min

---

## 🎯 Objetivos de la clase

1. **Integrar agentes IA con APIs REST externas**, entendiendo los cinco patrones principales de integración y cuándo aplicar cada uno en producción.
2. **Configurar endpoints de webhooks seguros** que reciban eventos de sistemas externos y los procesen de forma asíncrona sin bloquear el hilo principal.
3. **Manejar eventos asíncronos correctamente**, implementando acuse de recibo inmediato, colas de trabajo y procesamiento diferido para cumplir con los SLA de latencia.
4. **Implementar autenticación robusta** para agentes IA usando API keys, JWT y OAuth 2.0, aplicando el principio de mínimo privilegio.
5. **Aplicar retry logic con backoff exponencial** e idempotencia para garantizar la entrega exactamente-una-vez en flujos críticos de negocio.
6. **Usar herramientas no-code/low-code** (n8n, Make.com) para protototipar integraciones de agentes antes de pasarlas a código de producción.

---

## 🔑 Conceptos clave

| Término | Definición |
|---|---|
| **REST API** | Interfaz de programación de aplicaciones que sigue los principios de Representational State Transfer. El agente hace la llamada (pull). Opera sobre verbos HTTP: GET, POST, PUT, PATCH, DELETE. |
| **Webhook** | Mecanismo push inverso al REST: el sistema externo llama a tu endpoint cuando ocurre un evento. Elimina el polling y reduce latencia a milisegundos. |
| **Evento (Event)** | Notificación estructurada (JSON) que describe algo que ocurrió: `session.status_idled`, `payment.completed`, `lead.created`. Contiene `type`, `id` y `created_at`. |
| **Procesamiento síncrono vs asíncrono** | Síncrono: la respuesta espera que termine el procesamiento (riesgo de timeout). Asíncrono: se devuelve `202 Accepted` de inmediato y el trabajo pesado se delega a una cola. |
| **Autenticación (Authentication)** | Verificación de identidad. Para webhooks: firma HMAC-SHA256 en header `X-Webhook-Signature`. Para APIs: API key, Bearer token JWT, OAuth 2.0. |
| **Rate Limiting** | Límite de solicitudes por unidad de tiempo para proteger APIs. Patrones: token bucket, ventana deslizante, cuotas basadas en costo de tokens. |
| **Retry Logic** | Lógica de reintento ante fallos. Debe incluir backoff exponencial + jitter para evitar el "thundering herd problem" (avalancha de reintentos simultáneos). |
| **Idempotencia** | Propiedad de una operación que produce el mismo resultado si se ejecuta una o múltiples veces con los mismos datos. Clave para manejar reintentos de webhooks sin efectos secundarios duplicados. |
| **Circuit Breaker** | Patrón que "abre el circuito" y deja de reintentar cuando detecta un servicio caído, evitando cascadas de fallos. Se cierra progresivamente cuando el servicio se recupera. |
| **MCP (Model Context Protocol)** | Protocolo abierto de Anthropic que estandariza cómo los agentes IA se conectan a herramientas y fuentes de datos externas. Está reemplazando las integraciones ad-hoc con APIs. |
| **Dead Letter Queue (DLQ)** | Cola donde van los eventos que fallaron todos sus reintentos. Permite auditarlos, investigar el error y reprocesarlos manualmente. |
| **ngrok** | Herramienta que crea un túnel HTTPS público a tu servidor local, permitiendo que sistemas externos alcancen tu endpoint durante el desarrollo. |

---

## 🛠️ Stack tecnológico

| Herramienta | Para qué sirve | Categoría | Plan | URL |
|---|---|---|---|---|
| **Claude API (Anthropic)** | Motor de IA para procesar texto, clasificar eventos de webhook, generar respuestas y tomar decisiones en el agente. Soporta webhooks nativos para sesiones de Managed Agents. | IA / LLM | Free tier / API por tokens | [platform.claude.com](https://platform.claude.com) |
| **FastAPI (Python)** | Framework Python de alto rendimiento para construir endpoints de webhooks y APIs REST. Incluye validación automática con Pydantic y documentación OpenAPI. | Backend | Open Source (gratis) | [fastapi.tiangolo.com](https://fastapi.tiangolo.com) |
| **Express.js (Node)** | Framework minimalista para Node.js. Ideal para webhooks en TypeScript con el SDK oficial de Anthropic. Permite usar `express.raw()` para verificar firmas correctamente. | Backend | Open Source (gratis) | [expressjs.com](https://expressjs.com) |
| **n8n** | Plataforma de automatización de flujos con +70 nodos de IA (LangChain nativo), soporte de webhooks como triggers, memoria persistente y agentes autónomos. Self-hosteable. | Automatización | Free self-hosted / Cloud desde $20/mes | [n8n.io](https://n8n.io) |
| **Make.com** | Automatización visual con interfaz drag-and-drop. Incluye Maia (IA que construye escenarios desde lenguaje natural) y nodos HTTP para llamar a cualquier API. | Automatización | Free 1000 ops/mes / Pro $9/mes | [make.com](https://make.com) |
| **ngrok** | Túnel seguro HTTPS para exponer tu servidor local durante desarrollo. Esencial para recibir webhooks en tu máquina sin desplegar. | Dev Tools | Free / Pro $8/mes | [ngrok.com](https://ngrok.com) |
| **Postman** | Plataforma para diseñar, probar y simular llamadas a APIs y webhooks. Permite crear mock servers y simular eventos de webhook sin el sistema real. | Testing | Free / Pro $14/mes | [postman.com](https://postman.com) |
| **Redis** | Base de datos in-memory usada como cola de mensajes (con Redis Streams o Bull/BullMQ) para procesar eventos de webhook de forma asíncrona y garantizar idempotencia. | Infraestructura | Open Source (gratis) / Cloud desde $7/mes | [redis.io](https://redis.io) |
| **Hookdeck** | Gateway de eventos especializado para webhooks: retry automático, filtrado, transformación de payloads, monitoreo y replay de eventos fallidos. | Infraestructura | Free 10k eventos/mes / Pro $25/mes | [hookdeck.com](https://hookdeck.com) |
| **Zapier** | Automatización no-code con 8000+ integraciones. Zapier Agents permite ejecución autónoma de tareas. Ideal para prototipar sin código. | Automatización | Free 100 tasks/mes / Pro $29/mes | [zapier.com](https://zapier.com) |

---

## 📋 Contenido de la clase

### Módulo 1 — Fundamentos de integración de APIs con agentes IA (20 min)

#### ¿Por qué los agentes necesitan APIs?

Los agentes IA por sí solos solo pueden procesar texto. Las APIs son el sistema nervioso que les da superpoderes: leer datos en tiempo real, escribir en sistemas externos, disparar acciones en el mundo real. Sin integración de APIs, un agente IA es solo un chatbot.

#### Los 5 patrones de integración API para agentes

**1. Llamadas REST directas**
El agente hace un `GET` o `POST` directo a un endpoint externo. Simple pero síncrono. Adecuado para consultas rápidas donde el tiempo de respuesta es predecible.
```python
import anthropic
import httpx

client = anthropic.Anthropic()

def agente_con_api():
    # El agente obtiene datos y los procesa
    datos = httpx.get("https://api.ejemplo.com/leads/123").json()
    
    respuesta = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": f"Analiza este lead y categorízalo: {datos}"
        }]
    )
    return respuesta.content[0].text
```

**2. Tool Use / Function Calling**
El agente decide qué herramientas usar basándose en el contexto. Claude puede llamar funciones definidas por el desarrollador. Es el patrón más potente para agentes autónomos.
```python
tools = [
    {
        "name": "buscar_cliente",
        "description": "Busca información de un cliente en el CRM",
        "input_schema": {
            "type": "object",
            "properties": {
                "cliente_id": {"type": "string"}
            },
            "required": ["cliente_id"]
        }
    }
]

response = client.messages.create(
    model="claude-opus-4-5",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "¿Qué sé sobre el cliente 456?"}]
)
```

**3. MCP (Model Context Protocol)**
El estándar emergente de 2025-2026 para conectar agentes con herramientas. Más rápido de integrar que REST ad-hoc, más fácil de depurar, y estandarizado entre proveedores.

**4. Plataformas unificadas (Composio, Unified.to)**
Capa de abstracción sobre cientos de APIs. El agente llama a una interfaz única y la plataforma gestiona la autenticación y traducción a cada API específica.

**5. Protocolo A2A (Agent-to-Agent)**
Agentes que se llaman entre sí como servicios. Útil en arquitecturas multiagente donde un coordinador delega subtareas a agentes especializados.

---

### Módulo 2 — Webhooks: arquitectura push y manejo de eventos (25 min)

#### Webhooks vs Polling: la diferencia fundamental

| Aspecto | Polling | Webhook |
|---|---|---|
| **Dirección** | Tu sistema llama al externo | El externo llama a tu sistema |
| **Latencia** | Minutos u horas (según intervalo) | Milisegundos |
| **Recursos** | Desperdicia CPU y red en llamadas vacías | Solo consume recursos cuando hay eventos |
| **Complejidad** | Simple de implementar | Requiere endpoint público + firma |
| **Caso de uso** | Datos que cambian poco | Eventos en tiempo real |

#### Anatomía de un webhook

Todo webhook tiene la misma estructura básica:

```json
{
  "type": "event",
  "id": "event_01ABC123",
  "created_at": "2026-07-31T14:05:22Z",
  "data": {
    "type": "lead.created",
    "id": "lead_01XYZ789",
    "organization_id": "8a3d2f1e-...",
    "workspace_id": "c7b0e4d9-..."
  }
}
```

**Regla de oro:** Los webhooks devuelven el `id` del objeto, NO el objeto completo. Debes hacer un `GET` adicional para obtener los datos actualizados. Esto evita entregar datos obsoletos en reintentos.

#### Implementación de un endpoint seguro (FastAPI)

```python
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
import hmac
import hashlib
import json
import asyncio
from redis import asyncio as aioredis

app = FastAPI()
redis = aioredis.from_url("redis://localhost")

WEBHOOK_SECRET = "tu_secreto_seguro_aqui"

def verificar_firma(payload: bytes, firma_recibida: str) -> bool:
    """Verifica la firma HMAC-SHA256 del webhook."""
    firma_esperada = hmac.new(
        WEBHOOK_SECRET.encode(),
        payload,
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(f"sha256={firma_esperada}", firma_recibida)

@app.post("/webhook")
async def recibir_webhook(request: Request):
    # 1. Leer el body crudo (ANTES de parsear JSON)
    body = await request.body()
    
    # 2. Verificar firma de seguridad
    firma = request.headers.get("X-Webhook-Signature", "")
    if not verificar_firma(body, firma):
        raise HTTPException(status_code=400, detail="Firma inválida")
    
    # 3. Parsear el evento
    evento = json.loads(body)
    event_id = evento.get("id")
    
    # 4. Verificar idempotencia
    if await redis.get(f"processed:{event_id}"):
        return JSONResponse({"status": "ya procesado"}, status_code=200)
    
    # 5. ACK INMEDIATO — devolver 200 antes de procesar
    # El procesamiento pesado va a la cola
    await redis.rpush("webhook_queue", json.dumps(evento))
    await redis.setex(f"processed:{event_id}", 86400, "1")  # TTL 24h
    
    return JSONResponse({"status": "recibido"}, status_code=200)

async def worker():
    """Worker que procesa eventos de la cola y llama a Claude."""
    while True:
        _, raw = await redis.blpop("webhook_queue")
        evento = json.loads(raw)
        await procesar_con_claude(evento)

async def procesar_con_claude(evento: dict):
    """Llama a la Claude API para procesar el evento."""
    import anthropic
    client = anthropic.Anthropic()
    
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=512,
        messages=[{
            "role": "user",
            "content": f"Procesa este evento y determina la acción: {json.dumps(evento)}"
        }]
    )
    print(f"Claude respondió: {response.content[0].text}")
```

#### Webhooks nativos de Claude API (Managed Agents)

Para quienes usen Claude Managed Agents, Anthropic ofrece webhooks nativos:

**Eventos de sesión disponibles:**
- `session.status_run_started` — El agente comenzó a ejecutarse
- `session.status_idled` — El agente espera input (aprobación de herramienta o mensaje)
- `session.status_rescheduled` — Error transitorio, reintentando automáticamente
- `session.status_terminated` — Error terminal, sesión finalizada
- `session.thread_created` — Nuevo hilo en arquitectura multiagente
- `session.outcome_evaluation_ended` — Evaluación de resultado completada

**Verificación de firma oficial (Python):**
```python
from flask import Flask, request
import anthropic

client = anthropic.Anthropic()  # lee ANTHROPIC_WEBHOOK_SIGNING_KEY del env
app = Flask(__name__)

@app.route("/webhook", methods=["POST"])
def webhook():
    try:
        # unwrap() verifica firma Y valida que el payload no tenga más de 5 minutos
        event = client.beta.webhooks.unwrap(
            request.get_data(as_text=True),
            headers=dict(request.headers),
        )
    except Exception:
        return "firma inválida", 400

    if event.data.type == "session.status_idled":
        session = client.beta.sessions.retrieve(event.data.id)
        notificar_usuario(session)

    return "", 204  # 204 No Content también es válido
```

**Verificación de firma oficial (TypeScript):**
```typescript
import express from "express";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();
const app = express();

// CRÍTICO: usar express.raw(), NO express.json()
// La firma se calcula sobre los bytes crudos del body
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  let event;
  try {
    event = client.beta.webhooks.unwrap(req.body.toString("utf8"), {
      headers: req.headers as Record<string, string>
    });
  } catch {
    return res.status(400).send("firma inválida");
  }

  switch (event.data.type) {
    case "session.status_idled":
      console.log("sesión en espera:", event.data.id);
      break;
    case "session.status_terminated":
      console.log("sesión terminada con error:", event.data.id);
      break;
  }

  res.sendStatus(204);
});
```

**Comportamiento de entrega de Claude:**
- Los reintentos usan el mismo `event.id` — úsalo para idempotencia
- El ordering NO está garantizado — usa `created_at` para ordenar si importa
- Los redirects 3xx se tratan como fallos
- El endpoint se deshabilita automáticamente tras ~20 fallos consecutivos

---

### Módulo 3 — Integraciones comunes: n8n, Make.com y Zapier (25 min)

#### Cuándo usar cada plataforma

| | n8n | Make.com | Zapier |
|---|---|---|---|
| **Perfil ideal** | Dev con servidor propio | Usuario técnico-medio | No-dev o prototipado rápido |
| **Agentes IA** | Nativos (LangChain, 70+ nodos IA) | Maia AI + HTTP nodes | Zapier Agents (8000+ apps) |
| **Webhooks** | Trigger nativo, filtrable | Trigger + transformación | Trigger simple |
| **Self-hosted** | Sí (gratis, sin límites desde ago 2025) | No | No |
| **Costo 1K runs/día** | ~$0 (self-hosted) | ~$50-100/mes | ~$200-400/mes |
| **Debugging** | Excelente (ejecución por pasos) | Bueno | Básico |
| **Mejor para** | Flujos complejos, producción | Flujos visuales elaborados | Automatización rápida |

#### Flujo típico en n8n: Webhook → IA → CRM

```
[Webhook Trigger]
      ↓ recibe evento JSON
[Set Node] — extrae campos relevantes
      ↓
[HTTP Request] — llama a Claude API
   POST https://api.anthropic.com/v1/messages
   Headers: x-api-key, anthropic-version
   Body: { model, max_tokens, messages }
      ↓
[IF Node] — evalúa respuesta de Claude
   ¿Score > 80? → Sí / No
      ↓                ↓
[CRM Update]    [Send Email]
   HubSpot         Notificación
```

#### Integración n8n + Claude (nodo HTTP)

En n8n, el nodo de Claude API se configura así:
- **Method:** POST
- **URL:** `https://api.anthropic.com/v1/messages`
- **Headers:**
  - `x-api-key`: `{{ $env.ANTHROPIC_API_KEY }}`
  - `anthropic-version`: `2023-06-01`
  - `content-type`: `application/json`
- **Body:**
```json
{
  "model": "claude-opus-4-5",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Analiza este lead: {{ $json.lead_data }}"
    }
  ]
}
```

#### Desarrollo local con ngrok

Para recibir webhooks en tu máquina durante el desarrollo:

```bash
# Instalar ngrok
npm install -g ngrok

# Iniciar tu servidor local en puerto 3000
node server.js

# En otra terminal: crear túnel HTTPS público
ngrok http 3000

# ngrok te dará una URL tipo:
# https://abc123.ngrok-free.app

# Registra esa URL en el panel de webhooks del servicio externo
# Todos los webhooks llegarán a tu servidor local
```

---

### Módulo 4 — Manejo de errores, retry logic y seguridad (20 min)

#### Retry con backoff exponencial + jitter

El patrón más importante para sistemas distribuidos confiables:

```python
import asyncio
import random
import httpx

async def llamar_api_con_retry(url: str, payload: dict, max_intentos: int = 5):
    """
    Retry con backoff exponencial y jitter.
    Evita el thundering herd problem.
    """
    for intento in range(max_intentos):
        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(url, json=payload, timeout=30)
                
                if response.status_code == 429:  # Rate limited
                    retry_after = int(response.headers.get("Retry-After", 60))
                    await asyncio.sleep(retry_after)
                    continue
                
                response.raise_for_status()
                return response.json()
                
        except (httpx.TimeoutException, httpx.ConnectError) as e:
            if intento == max_intentos - 1:
                raise  # Re-lanzar en el último intento
            
            # Backoff exponencial: 2^intento segundos base
            espera_base = (2 ** intento)
            # Jitter: ±30% aleatorio para evitar avalanchas
            jitter = random.uniform(0.7, 1.3)
            espera = min(espera_base * jitter, 60)  # máximo 60 segundos
            
            print(f"Intento {intento + 1} falló. Esperando {espera:.1f}s...")
            await asyncio.sleep(espera)
    
    raise Exception(f"Falló después de {max_intentos} intentos")
```

#### Circuit Breaker

```python
from enum import Enum
import time

class Estado(Enum):
    CERRADO = "closed"      # Operación normal
    ABIERTO = "open"        # Bloqueando llamadas
    SEMIABIERTO = "half_open"  # Probando recuperación

class CircuitBreaker:
    def __init__(self, umbral_fallos=5, timeout_recuperacion=60):
        self.estado = Estado.CERRADO
        self.fallos = 0
        self.umbral = umbral_fallos
        self.timeout = timeout_recuperacion
        self.ultimo_fallo = None
    
    def puede_llamar(self) -> bool:
        if self.estado == Estado.CERRADO:
            return True
        if self.estado == Estado.ABIERTO:
            if time.time() - self.ultimo_fallo > self.timeout:
                self.estado = Estado.SEMIABIERTO
                return True
            return False
        return True  # SEMIABIERTO: permite una prueba
    
    def registrar_exito(self):
        self.fallos = 0
        self.estado = Estado.CERRADO
    
    def registrar_fallo(self):
        self.fallos += 1
        self.ultimo_fallo = time.time()
        if self.fallos >= self.umbral:
            self.estado = Estado.ABIERTO
            print(f"Circuit breaker ABIERTO tras {self.fallos} fallos")
```

#### Rate Limiting: 5 patrones para agentes IA

1. **Token bucket por identidad de agente** — Cada agente tiene su cubo de tokens que se llena a velocidad constante. Más justo que límites por IP.
2. **Cuotas basadas en costo** — Limitar por tokens de IA consumidos, no por número de llamadas. Un agente que hace preguntas cortas no pena igual que uno que genera documentos largos.
3. **Retry budget** — Cada agente tiene un presupuesto de reintentos (ej: 10 reintentos/minuto). Se agota si abusa.
4. **Circuit breaker** — Abre el circuito si la tasa de error supera el umbral. Protege servicios downstream.
5. **Throttling adaptativo** — Ajusta dinámicamente el límite según la carga del sistema. En horas pico, reduce el rate limit automáticamente.

#### Seguridad: autenticación para agentes IA

```python
# API Key en headers (mínimo requerido)
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "X-Agent-ID": "agente-procesador-leads",  # Identificar el agente
    "X-Request-ID": str(uuid.uuid4()),         # Trazabilidad
}

# JWT con scopes mínimos (principio de mínimo privilegio)
# Un agente que solo lee NO debe tener scope de escritura
payload = {
    "sub": "agente-procesador-leads",
    "scope": "leads:read crm:write",  # Solo lo necesario
    "iat": datetime.utcnow(),
    "exp": datetime.utcnow() + timedelta(hours=1),  # TTL corto
}
```

**Mejores prácticas de seguridad:**
- Rotar API keys cada 90 días máximo
- Usar variables de entorno, nunca hardcodear secretos en el código
- Verificar SIEMPRE la firma del webhook antes de procesar
- Implementar HTTPS obligatorio (Claude rechaza endpoints HTTP)
- Usar `compare_digest()` para comparar firmas (evita timing attacks)
- Registrar todos los eventos en logs auditables
- Nunca loguear el body completo del webhook (puede contener datos sensibles)

---

## 💪 Ejercicio práctico

### Construir un pipeline: Webhook → Cola → Claude → CRM

**Objetivo:** Crear un endpoint que recibe un webhook de lead nuevo, encola el evento, llama a Claude para análisis y clasificación, y actualiza el CRM.

**Tiempo:** 30 minutos

#### Paso 1 — Setup del entorno

```bash
mkdir webhook-claude-demo && cd webhook-claude-demo
python -m venv venv && source venv/bin/activate
pip install fastapi uvicorn anthropic redis httpx python-dotenv

# .env
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env
echo "WEBHOOK_SECRET=mi_secreto_super_seguro" >> .env
echo "REDIS_URL=redis://localhost:6379" >> .env
```

#### Paso 2 — Servidor de webhook con FastAPI

```python
# main.py
from fastapi import FastAPI, Request, HTTPException, BackgroundTasks
from fastapi.responses import JSONResponse
import anthropic
import hmac
import hashlib
import json
import os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="Webhook → Claude Pipeline")
claude = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
WEBHOOK_SECRET = os.getenv("WEBHOOK_SECRET")

def verificar_firma(body: bytes, firma: str) -> bool:
    esperada = hmac.new(WEBHOOK_SECRET.encode(), body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(f"sha256={esperada}", firma)

async def procesar_lead(evento: dict):
    """Procesamiento asíncrono: Claude analiza y clasifica el lead."""
    lead = evento.get("data", {})
    
    prompt = f"""Analiza este lead y responde con JSON válido:
    
Lead: {json.dumps(lead, ensure_ascii=False)}

Responde SOLO con este JSON:
{{
  "score": <número 0-100>,
  "categoria": "<caliente|tibio|frío>",
  "razon": "<explicación en 1 oración>",
  "accion_recomendada": "<siguiente paso concreto>"
}}"""

    response = claude.messages.create(
        model="claude-opus-4-5",
        max_tokens=256,
        messages=[{"role": "user", "content": prompt}]
    )
    
    resultado = json.loads(response.content[0].text)
    print(f"Lead {lead.get('id')} clasificado: {resultado}")
    
    # Aquí llamarías a tu CRM (HubSpot, Salesforce, etc.)
    # await actualizar_crm(lead["id"], resultado)
    return resultado

@app.post("/webhook/lead")
async def recibir_lead(request: Request, background_tasks: BackgroundTasks):
    body = await request.body()
    firma = request.headers.get("X-Webhook-Signature", "")
    
    # Seguridad: verificar firma
    if not verificar_firma(body, firma):
        raise HTTPException(status_code=400, detail="Firma de webhook inválida")
    
    evento = json.loads(body)
    
    # ACK inmediato — el procesamiento va en background
    background_tasks.add_task(procesar_lead, evento)
    
    return JSONResponse({"status": "recibido", "id": evento.get("id")})

@app.get("/health")
async def health():
    return {"status": "ok"}

# Ejecutar: uvicorn main:app --reload --port 3000
```

#### Paso 3 — Exponer localmente con ngrok

```bash
# Terminal 1: iniciar el servidor
uvicorn main:app --reload --port 3000

# Terminal 2: exponer con ngrok
ngrok http 3000
# Copia la URL https://xxxx.ngrok-free.app

# Terminal 3: simular un webhook de lead
curl -X POST https://xxxx.ngrok-free.app/webhook/lead \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Signature: sha256=$(echo -n '{"id":"evt_001","data":{"id":"lead_123","nombre":"María García","empresa":"Startup XYZ","email":"maria@startup.com","mensaje":"Necesito automatizar mi proceso de ventas"}}' | openssl dgst -sha256 -hmac 'mi_secreto_super_seguro' | cut -d' ' -f2)" \
  -d '{"id":"evt_001","data":{"id":"lead_123","nombre":"María García","empresa":"Startup XYZ","email":"maria@startup.com","mensaje":"Necesito automatizar mi proceso de ventas"}}'
```

#### Paso 4 — Verificar en logs

```
INFO:     127.0.0.1:54321 - "POST /webhook/lead HTTP/1.1" 200 OK
Lead lead_123 clasificado: {
  "score": 85,
  "categoria": "caliente",
  "razon": "Empresa tech con necesidad clara de automatización y presupuesto implícito",
  "accion_recomendada": "Llamar en las próximas 2 horas con demo de automatización de ventas"
}
```

**Extensiones opcionales para los más rápidos:**
- Agregar Redis para idempotencia real
- Integrar con HubSpot API para actualizar el lead
- Agregar un endpoint `/webhook/replay/:id` para reprocesar eventos fallidos
- Implementar el circuit breaker sobre la llamada a Claude

---

## 📚 Recursos

### Documentación oficial
- [Claude API — Webhooks para Managed Agents](https://platform.claude.com/docs/en/managed-agents/webhooks) — Documentación oficial completa con código en 7 lenguajes
- [Claude API — Tool Use / Function Calling](https://docs.anthropic.com/claude/docs/tool-use) — Cómo definir herramientas para agentes
- [Claude API — Messages API Reference](https://docs.anthropic.com/claude/reference/messages) — Referencia completa de la API
- [n8n — Nodo de AI Agent](https://n8n.io/integrations/agent/) — Documentación del nodo de agente IA en n8n
- [FastAPI — Background Tasks](https://fastapi.tiangolo.com/tutorial/background-tasks/) — Procesamiento asíncrono en FastAPI

### Tutoriales y guías
- [Hookdeck — Webhook Skills para agentes IA](https://hookdeck.com/blog/webhook-skills) — Framework de conocimiento de webhooks para agentes de código
- [Webhook Best Practices — DEV Community](https://dev.to/henry_hang/webhook-best-practices-retry-logic-idempotency-and-error-handling-27i3) — Retry logic, idempotencia y manejo de errores
- [Composio — 5 patrones de integración API para agentes](https://composio.dev/content/apis-ai-agents-integration-patterns) — Los 5 patrones con pros/contras

### Comparativas de plataformas
- [n8n vs Make — Zapier Blog 2026](https://zapier.com/blog/n8n-vs-make/) — Comparativa actualizada
- [Marketing Automation AI Agents: Make vs Zapier vs n8n](https://www.digitalapplied.com/blog/marketing-automation-ai-agents-make-zapier-n8n-2026) — Casos de uso prácticos

### Seguridad
- [JWTs para agentes IA — Security Boulevard](https://securityboulevard.com/2025/11/jwts-for-ai-agents-authenticating-non-human-identities/) — Autenticación de identidades no-humanas
- [API Security Best Practices for AI Agents — Curity](https://curity.io/resources/learn/api-security-best-practice-for-ai-agents/) — 8 prácticas de seguridad
- [Building Secure AI Agents with Auth0 — DEV Community](https://dev.to/aniruddhaadak/building-secure-ai-agents-with-auth0-a-developers-guide-309n) — OAuth + JWT para agentes

### Herramientas de desarrollo
- [ngrok Docs](https://ngrok.com/docs) — Configuración de túneles para desarrollo local
- [Postman — Webhook Testing](https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/mock-server/) — Mock servers para simular webhooks
- [Redis Streams](https://redis.io/docs/data-types/streams/) — Colas de mensajes con Redis

---

## 🔗 Acciones post-clase

- [ ] **Hoy:** Crear una cuenta en [platform.claude.com](https://platform.claude.com) y obtener tu API key
- [ ] **Hoy:** Instalar ngrok y probar que puedes recibir un webhook en localhost
- [ ] **Esta semana:** Implementar el ejercicio completo del pipeline Webhook → Claude → respuesta
- [ ] **Esta semana:** Crear un flujo básico en n8n que reciba un webhook y llame a Claude
- [ ] **Antes del próximo viernes:** Agregar retry logic con backoff exponencial a tu implementación
- [ ] **Reto avanzado:** Implementar el Circuit Breaker pattern y medir cuándo se activa bajo carga
- [ ] **Compartir en el grupo:** Tu endpoint funcionando con ngrok + Claude respondiendo en los logs

---

*Clase 15 de 20 · Track TI/Dev · Programa de IA Aplicada · Julio 2026*
