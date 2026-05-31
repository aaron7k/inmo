# ⏰ Agentes cronometrados para ejecución de tareas programadas

**Presentador:** Aaron | **Fecha:** Viernes 14 agosto 2026 | **Audiencia:** Devs + ops | **Tier:** 4 · TI / Dev track | **Duración:** 90 min

---

## 🎯 Objetivos

Al finalizar esta clase, los participantes podrán:

1. **Diseñar agentes de IA que se ejecuten automáticamente** en horarios definidos mediante expresiones cron, sin requerir intervención humana en cada ciclo.
2. **Elegir la herramienta de scheduling correcta** según el contexto: schedule library, APScheduler, Celery Beat, GitHub Actions o AWS EventBridge.
3. **Integrar la API de Claude** en pipelines cronometrados para que el agente analice datos, tome decisiones y actúe de forma autónoma cada hora, día o semana.
4. **Implementar idempotencia y manejo de fallos** para que el agente sea seguro de re-ejecutar sin efectos secundarios duplicados.
5. **Instrumentar observabilidad completa**: logs estructurados, métricas en Grafana y alertas que detecten fallos silenciosos antes de que impacten al negocio.

---

## 🔑 Conceptos clave

| Término | Definición |
|---|---|
| **Cron Job** | Tarea programada que se dispara según una expresión de tiempo estándar (5 campos: minuto hora día-mes mes día-semana). El estándar POSIX original, adoptado por casi todas las plataformas modernas. |
| **Expresión cron** | Cadena de texto que define el horario: `0 9 * * 1-5` = "cada día hábil a las 9 am". Soporta wildcards (`*`), rangos (`1-5`), pasos (`*/15`) y listas (`1,15,30`). |
| **Agente cronometrado** | Agente de IA que recibe un disparador temporal, ejecuta un workflow autónomo (consultar API → razonar → actuar → reportar) y termina limpiamente hasta el próximo ciclo. |
| **Idempotencia** | Propiedad que garantiza que ejecutar la misma tarea múltiples veces produce el mismo resultado que ejecutarla una sola vez. Crítico cuando hay reintentos o fallos a mitad del pipeline. |
| **At-least-once delivery** | Garantía de entrega de los brokers de mensajes: el mensaje se entrega como mínimo una vez, pero podría entregarse más de una vez. Requiere que el consumidor sea idempotente. |
| **Dead Letter Queue (DLQ)** | Cola donde van los mensajes/tareas que fallaron todos sus reintentos. Permite inspección post-mortem sin perder datos. |
| **Event-driven scheduling** | El agente se dispara por un evento (nuevo archivo en S3, webhook, mensaje en cola) en lugar de por tiempo. Complementa al cron cuando la cadencia es irregular. |
| **Jitter** | Desplazamiento aleatorio o determinístico añadido al horario para evitar que miles de workers arranquen exactamente al mismo segundo (thundering herd). |
| **Backfill / Catch-up** | Capacidad de re-ejecutar todas las ejecuciones que se perdieron durante un período de downtime. Algunos schedulers lo hacen automáticamente al reiniciar. |
| **Observabilidad** | Capacidad de entender el estado interno de un sistema a partir de sus salidas externas: logs, métricas y trazas distribuidas (los tres pilares). |
| **Scheduler persistence** | El estado del scheduler (qué jobs hay, cuándo corren) se guarda en base de datos o Redis, sobreviviendo reinicios de la aplicación. |
| **Tarea huérfana** | Job que quedó corriendo pero sin worker activo que lo supervise. Requiere TTL y monitoreo de heartbeat para detectarlos. |

---

## 🛠️ Stack tecnológico

| Herramienta | Para qué sirve | Tipo | URL |
|---|---|---|---|
| **Claude API (Anthropic)** | Motor de razonamiento del agente: analiza datos, genera resúmenes, decide acciones y redacta reportes en texto natural. Soporte nativo para tool use y structured outputs. | De pago | [anthropic.com/api](https://www.anthropic.com/api) |
| **Python `schedule`** | Librería minimalista de scheduling in-process. Ideal para scripts simples: `schedule.every().hour.do(job)`. Sin persistencia, sin workers distribuidos. | Gratis / OSS | [schedule.readthedocs.io](https://schedule.readthedocs.io) |
| **APScheduler 4.x** | Scheduler de producción para Python con soporte asyncio nativo (v4). Tres modos: cron, intervalo y one-shot. Backends: SQLAlchemy, Redis, MongoDB, ZooKeeper. Arquitectura task/schedule/worker separada. | Gratis / OSS | [apscheduler.readthedocs.io](https://apscheduler.readthedocs.io) |
| **Celery + Celery Beat** | Cola de tareas distribuidas + scheduler. Celery Beat lanza las tareas según el calendario y workers las ejecutan en paralelo. Escala horizontalmente. Brokers: Redis o RabbitMQ. | Gratis / OSS | [docs.celeryq.dev](https://docs.celeryq.dev) |
| **Redis** | Broker de mensajes y backend de resultados para Celery y APScheduler. También usado para locks de idempotencia distribuida (`SET NX EX`). | Gratis / OSS | [redis.io](https://redis.io) |
| **GitHub Actions (schedule trigger)** | CI/CD con cron nativo: `on: schedule: - cron: "0 9 * * *"`. Ejecuta el agente en contenedores efímeros sin servidor propio. Mínimo: 5 minutos entre runs. Siempre en UTC. | Freemium | [github.com/features/actions](https://github.com/features/actions) |
| **AWS EventBridge Scheduler** | Scheduler serverless totalmente gestionado. Soporta expresiones cron y rate, DLQ automática, reintentos configurables, y invocación de Lambda, Step Functions, ECS, SQS y más. Idempotencia via `ClientToken`. | De pago | [aws.amazon.com/eventbridge](https://aws.amazon.com/eventbridge/) |
| **Grafana + Prometheus** | Stack de observabilidad: Prometheus recolecta métricas de los agentes (ejecuciones, latencia, errores, tokens consumidos) y Grafana las visualiza en dashboards en tiempo real. Alertas vía Alertmanager. | Gratis / OSS | [grafana.com](https://grafana.com) |
| **Flower** | Dashboard web de monitoreo para Celery. Muestra workers activos, tareas en curso, historial de ejecuciones, reintentos y fallos en tiempo real. | Gratis / OSS | [flower.readthedocs.io](https://flower.readthedocs.io) |
| **Claude Code Routines** | Scheduling gestionado por Anthropic: el agente corre en infraestructura cloud sin necesidad de mantener máquina propia. Disparadores: horario, API call o webhook de GitHub. Mínimo: 1 hora entre runs. | Pro / Max plan | [code.claude.com/docs/en/routines](https://code.claude.com/docs/en/routines) |

---

## 📋 Contenido

### Módulo 1: Fundamentos de cron (0–20 min)

**¿Qué es un cron job y por qué importa en sistemas de IA?**

Los agentes de IA necesitan información fresca y acción constante. El cron es el mecanismo más simple y universal para automatizar esa cadencia: en lugar de que un humano recuerde "ahora toca analizar las métricas", el sistema lo hace solo, de forma predecible y auditable.

**Anatomía de una expresión cron:**
```
┌──── minuto (0-59)
│  ┌─── hora (0-23)
│  │  ┌── día del mes (1-31)
│  │  │  ┌─ mes (1-12)
│  │  │  │  ┌ día de semana (0-7, dom=0 o 7)
│  │  │  │  │
*  *  *  *  *
```

| Expresión | Significado |
|---|---|
| `*/5 * * * *` | Cada 5 minutos |
| `0 * * * *` | Cada hora en punto |
| `0 9 * * 1-5` | Días hábiles a las 9 am |
| `0 0 1 * *` | Primer día de cada mes |
| `30 14 * * 3` | Miércoles a las 14:30 |

**Reglas de oro:**
- GitHub Actions siempre corre en UTC — convertir antes de escribir la expresión.
- El mínimo en GitHub Actions es 5 minutos; en CloudRoutines de Anthropic es 1 hora.
- Agregar **jitter** en producción para evitar thundering herd.
- Nunca usar `* * * * *` (cada minuto) con agentes de IA; los costos de API se disparan.

---

### Módulo 2: Agentes programados con Python y Claude API (20–50 min)

**Arquitectura de un agente cronometrado:**

```
SCHEDULER
   │
   ▼ (disparo temporal)
AGENTE WRAPPER
   ├── 1. Verificar idempotencia (¿ya corrió hoy?)
   ├── 2. Recolectar datos (API / DB / archivos)
   ├── 3. Llamar Claude API → análisis + decisión
   ├── 4. Ejecutar acciones (email, Slack, DB write)
   ├── 5. Guardar estado de ejecución
   └── 6. Emitir métricas y logs estructurados
```

**Ejemplo con APScheduler 4.x + Claude API:**

```python
import asyncio
import json
from datetime import datetime
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.cron import CronTrigger
import anthropic

client = anthropic.Anthropic()  # lee ANTHROPIC_API_KEY del env

async def agente_metricas():
    """Agente que analiza métricas cada hora y envía alerta si hay anomalía."""
    run_id = datetime.utcnow().strftime("%Y%m%d-%H")

    # 1. Idempotencia: verificar si ya corrió esta hora
    if ya_ejecutado(run_id):
        print(f"[{run_id}] Ya ejecutado. Saltando.")
        return

    # 2. Recolectar datos del sistema
    metricas = obtener_metricas()  # tu función de monitoreo

    # 3. Llamar a Claude para análisis
    mensaje = client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=1024,
        messages=[{
            "role": "user",
            "content": f"""Analiza estas métricas del sistema y detecta anomalías.
Responde en JSON con campos: anomalia (bool), severidad (low/medium/high),
resumen (str), accion_recomendada (str).

Métricas: {json.dumps(metricas)}"""
        }]
    )

    analisis = json.loads(mensaje.content[0].text)

    # 4. Actuar según el análisis
    if analisis["anomalia"] and analisis["severidad"] in ["medium", "high"]:
        enviar_alerta(analisis)

    # 5. Guardar estado
    marcar_ejecutado(run_id, analisis)
    emitir_metrica("agente.metricas.run", {"status": "ok", "run_id": run_id})


async def main():
    scheduler = AsyncIOScheduler()
    scheduler.add_job(
        agente_metricas,
        CronTrigger(minute=0),       # Cada hora en punto
        id="agente-metricas",
        replace_existing=True,
        misfire_grace_time=300,      # Tolera hasta 5 min de retraso
        coalesce=True                # Si perdió varias, ejecuta solo una
    )
    scheduler.start()
    await asyncio.Event().wait()     # Corre indefinidamente

asyncio.run(main())
```

**Ejemplo con GitHub Actions (sin servidor propio):**

```yaml
# .github/workflows/agente-metricas.yml
name: Agente de Métricas Horario

on:
  schedule:
    - cron: '0 * * * *'    # Cada hora (UTC)
  workflow_dispatch:        # También disparo manual

jobs:
  ejecutar-agente:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
          cache: 'pip'

      - run: pip install anthropic

      - name: Ejecutar agente
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: python scripts/agente_metricas.py
```

**Patrones de scheduling para agentes:**

| Patrón | Cuándo usar | Herramienta recomendada |
|---|---|---|
| **Cron fijo** | Reportes diarios, resúmenes nocturnos | APScheduler, GitHub Actions |
| **Intervalo adaptivo** | Monitoreo que duerme más cuando hay calma | Claude `/loop` con dynamic interval |
| **Event-driven** | Procesar al instante cuando llega nuevo dato | EventBridge + Lambda |
| **Daisy-chain** | Agente A pasa resultado a Agente B | Celery chains, Step Functions |
| **One-shot diferido** | Recordatorios, acciones retrasadas | APScheduler one-shot, cron_create |

---

### Módulo 3: Manejo de fallos y resiliencia (50–70 min)

**Los 5 modos de fallo de un agente cronometrado:**

1. **Fallo silencioso**: el agente termina sin error pero no hizo nada. Requiere heartbeat y validación de salida.
2. **Timeout**: la llamada a Claude o a una API externa demora más de lo esperado. Siempre envolver con `asyncio.wait_for()` o `httpx` timeout.
3. **Fallo de idempotencia**: el agente se ejecuta dos veces y duplica envíos o escrituras. Usar lock en Redis o `INSERT ... ON CONFLICT DO NOTHING`.
4. **Rate limit de API**: Claude, SendGrid o tu propia DB rechazan la petición. Implementar retry con exponential backoff.
5. **Fallo de la máquina**: el servidor cae a mitad de la tarea. Requiere persistencia de estado y catch-up al reiniciar.

**Patrón de idempotencia con Redis:**

```python
import redis
import time

r = redis.Redis(host="localhost", port=6379)

def ejecutar_si_no_fue(run_id: str, ttl: int = 3600):
    """Lock distribuido: solo un worker ejecuta por run_id."""
    lock_key = f"agente:lock:{run_id}"
    acquired = r.set(lock_key, "1", nx=True, ex=ttl)
    if not acquired:
        return False   # Ya está corriendo o ya corrió
    return True

def agente_idempotente(run_id: str):
    if not ejecutar_si_no_fue(run_id):
        return
    try:
        # lógica del agente
        pass
    except Exception as e:
        # Si falla, liberar el lock para permitir reintento
        r.delete(f"agente:lock:{run_id}")
        raise
```

**Retry con backoff exponencial:**

```python
import anthropic
import time

def llamar_claude_con_retry(prompt: str, max_intentos: int = 3) -> str:
    cliente = anthropic.Anthropic()
    for intento in range(max_intentos):
        try:
            respuesta = cliente.messages.create(
                model="claude-sonnet-4-5",
                max_tokens=1024,
                messages=[{"role": "user", "content": prompt}]
            )
            return respuesta.content[0].text
        except anthropic.RateLimitError:
            espera = (2 ** intento) + (time.random() * 0.5)
            print(f"Rate limit. Esperando {espera:.1f}s...")
            time.sleep(espera)
    raise RuntimeError("Máximo de reintentos alcanzado")
```

**Dead Letter Queue con Celery:**

```python
from celery import Celery

app = Celery("agentes", broker="redis://localhost:6379/0")

@app.task(
    bind=True,
    max_retries=3,
    default_retry_delay=60,          # 60s entre reintentos
    acks_late=True,                  # Solo confirmar después de éxito
    queue="agentes",
    dead_letter_exchange="agentes-dlq"
)
def tarea_agente(self, run_id: str):
    try:
        ejecutar_agente(run_id)
    except Exception as exc:
        raise self.retry(exc=exc, countdown=2 ** self.request.retries)
```

**Checklist de resiliencia:**

- Timeout en todas las llamadas externas (Claude, APIs, DB)
- Retry con backoff exponencial + jitter en rate limits
- Idempotencia via Redis NX o unique constraint en DB
- DLQ para inspección de fallos permanentes
- Heartbeat: el agente emite un "estoy vivo" cada N minutos
- Alertas: si no hay heartbeat en 2x el intervalo esperado → PagerDuty / Slack
- Coalesce habilitado: si se perdieron varios disparos, ejecutar solo uno

---

### Módulo 4: Observabilidad completa (70–90 min)

**Los tres pilares aplicados a agentes cronometrados:**

**1. Logs estructurados (JSON):**
```python
import logging
import json
import time

class AgentLogger:
    def log_run(self, run_id, status, duracion_ms, tokens_usados, error=None):
        entrada = {
            "timestamp": time.time(),
            "agente": "metricas-horario",
            "run_id": run_id,
            "status": status,           # "ok" | "error" | "skip"
            "duracion_ms": duracion_ms,
            "tokens_usados": tokens_usados,
            "error": str(error) if error else None
        }
        print(json.dumps(entrada))      # Capturado por CloudWatch/Loki/Datadog
```

**2. Métricas con Prometheus:**
```python
from prometheus_client import Counter, Histogram, start_http_server

runs_total = Counter("agente_runs_total", "Total de ejecuciones", ["status"])
duracion = Histogram("agente_duracion_segundos", "Duración por run")
tokens = Counter("agente_tokens_total", "Tokens consumidos en Claude API")

# En el agente:
with duracion.time():
    resultado = ejecutar_pipeline()
    runs_total.labels(status="ok").inc()
    tokens.inc(resultado.tokens_usados)
```

**3. Dashboard Grafana — métricas clave:**

| Panel | Métrica | Alerta si... |
|---|---|---|
| Ejecuciones por hora | `rate(agente_runs_total[1h])` | < 1 en 2h (agente muerto) |
| Tasa de errores | `rate(runs_total{status="error"}[1h])` | > 10% |
| Duración promedio | `histogram_quantile(0.95, agente_duracion)` | > 5 min (timeout inminente) |
| Tokens consumidos | `increase(agente_tokens_total[24h])` | > presupuesto diario |
| Jobs en DLQ | `celery_dlq_messages_total` | > 0 (requiere atención) |

**Comparación de herramientas de scheduling para producción:**

| Criterio | `schedule` lib | APScheduler | Celery Beat | GitHub Actions | AWS EventBridge |
|---|---|---|---|---|---|
| Persistencia de estado | No | Si (DB/Redis) | Si (DB) | No (efímero) | Si (gestionado) |
| Workers distribuidos | No | Si (v4) | Si | No | Si |
| Catch-up de missed jobs | No | Si | Si | No | Si |
| Costo operativo | Muy bajo | Bajo | Medio | Bajo | Pay-per-use |
| Escalabilidad | Proceso único | Multi-worker | Horizontal | Paralelo por job | Ilimitada |
| Mejor para | Scripts simples | Apps Python | Microservicios | CI/CD sin servidor | Serverless AWS |

---

## 💪 Ejercicio práctico

### Agente de análisis horario con reporte por email

**Objetivo:** Construir un agente Python que se ejecute cada hora, analice métricas simuladas del sistema usando Claude API, y envíe un resumen por email si detecta alguna anomalía.

**Duración:** 30 minutos en parejas

**Requisitos:**
- Python 3.10+
- `pip install anthropic apscheduler schedule`
- API key de Anthropic (variable de entorno `ANTHROPIC_API_KEY`)

**Paso 1 — Preparar el agente base (`agente_reporte.py`):**

```python
import os
import json
import random
import asyncio
from datetime import datetime
import anthropic

cliente = anthropic.Anthropic()

def simular_metricas() -> dict:
    """Genera métricas ficticias del servidor."""
    return {
        "timestamp": datetime.utcnow().isoformat(),
        "cpu_pct": random.uniform(20, 95),
        "memoria_pct": random.uniform(40, 92),
        "latencia_ms": random.uniform(80, 800),
        "errores_por_min": random.randint(0, 15),
        "usuarios_activos": random.randint(50, 2000)
    }

def analizar_con_claude(metricas: dict) -> dict:
    """Pide a Claude que analice las métricas y detecte anomalías."""
    respuesta = cliente.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=512,
        messages=[{
            "role": "user",
            "content": f"""Eres un agente de monitoreo de sistemas. Analiza estas métricas
y responde SOLO en JSON válido con esta estructura:
{{
  "anomalia": true/false,
  "severidad": "low" | "medium" | "high",
  "componentes_afectados": ["lista de componentes"],
  "resumen": "descripción de 1-2 oraciones",
  "accion_recomendada": "qué hacer ahora"
}}

Métricas del sistema:
{json.dumps(metricas, indent=2)}

Umbrales de alerta: CPU > 85%, Memoria > 88%, Latencia > 500ms, Errores > 10/min."""
        }]
    )
    return json.loads(respuesta.content[0].text)

def enviar_reporte(metricas: dict, analisis: dict, es_alerta: bool):
    """Simula envío de email (en producción: usar SendGrid o SES)."""
    tipo = "ALERTA" if es_alerta else "Reporte normal"
    print(f"\n{'='*50}")
    print(f"[{tipo}] {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print(f"Severidad: {analisis['severidad'].upper()}")
    print(f"Resumen: {analisis['resumen']}")
    if es_alerta:
        print(f"Accion recomendada: {analisis['accion_recomendada']}")
    print('='*50)

def ejecutar_ciclo():
    """Un ciclo completo del agente."""
    run_id = datetime.utcnow().strftime("%Y%m%d-%H%M")
    print(f"\n[{run_id}] Iniciando ciclo de análisis...")

    metricas = simular_metricas()
    analisis = analizar_con_claude(metricas)

    es_alerta = analisis["anomalia"] and analisis["severidad"] in ["medium", "high"]
    enviar_reporte(metricas, analisis, es_alerta)

    return analisis
```

**Paso 2 — Agregar el scheduler:**

```python
import schedule
import time

# Ejecutar cada hora
schedule.every().hour.at(":00").do(ejecutar_ciclo)

# Para probar: ejecutar cada 2 minutos
schedule.every(2).minutes.do(ejecutar_ciclo)

print("Agente iniciado. Ctrl+C para detener.")
ejecutar_ciclo()  # Primera ejecución inmediata

while True:
    schedule.run_pending()
    time.sleep(30)
```

**Paso 3 — Verificar con GitHub Actions:**

```yaml
# .github/workflows/agente-test.yml
name: Test Agente Horario
on:
  workflow_dispatch:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install anthropic
      - run: python agente_reporte.py --once
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
```

**Criterios de evaluación:**
- El agente corre sin errores y produce output estructurado
- Claude responde con JSON válido y análisis coherente
- El agente detecta correctamente el caso de alerta vs. normal
- Los logs incluyen timestamp, run_id y duración

**Extensiones opcionales para los más rápidos:**
- Agregar persistencia del historial en un archivo JSON
- Implementar idempotencia con un set de run_ids ya ejecutados
- Añadir una métrica de Prometheus y consultarla con `curl`

---

## 📚 Recursos

### Documentación oficial
- [APScheduler 4.x Docs](https://apscheduler.readthedocs.io) — Referencia completa con ejemplos async
- [Celery Beat Docs](https://docs.celeryq.dev/en/stable/userguide/periodic-tasks.html) — Periodic tasks en producción
- [Anthropic Python SDK](https://github.com/anthropic-ai/anthropic-sdk-python) — SDK oficial con ejemplos
- [Claude Code Scheduled Tasks](https://code.claude.com/docs/en/scheduled-tasks) — Documentación oficial de `/loop` y cron tools
- [Claude Code Routines](https://code.claude.com/docs/en/routines) — Scheduling cloud gestionado por Anthropic
- [GitHub Actions Schedule Trigger](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule) — Referencia oficial
- [AWS EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html) — Documentación completa

### Herramientas de referencia
- [crontab.guru](https://crontab.guru) — Editor visual de expresiones cron con explicación en tiempo real
- [Flower (Celery Monitor)](https://flower.readthedocs.io) — Dashboard de monitoreo para Celery
- [Prometheus Python Client](https://github.com/prometheus/client_python) — Métricas desde Python
- [Redis Python Client](https://redis-py.readthedocs.io) — Para locks de idempotencia
- [claude-mcp-scheduler](https://github.com/tonybentley/claude-mcp-scheduler) — Ejemplo open-source de Claude API + cron + MCP

### Lectura recomendada
- "The Twelve-Factor App" — Factor IX: Disposability (relevante para agentes efímeros)
- AWS re:Invent 2025: Building Agentic Workflows for Augmented Observability (COP405)
- "Reliability Engineering for AI Pipelines" — Idempotencia y DLQ en sistemas de IA

---

## 🔗 Acciones post-clase

**Esta semana:**
- [ ] Instalar APScheduler y correr el ejemplo del ejercicio localmente
- [ ] Crear un cron en GitHub Actions que llame a Claude y guarde el output como artifact
- [ ] Implementar idempotencia básica con un archivo JSON de estado
- [ ] Configurar al menos un log estructurado en tu agente existente

**Este mes:**
- [ ] Migrar el agente de `schedule` a APScheduler con persistencia en SQLite
- [ ] Añadir un dashboard de Grafana con al menos 3 paneles de métricas del agente
- [ ] Configurar DLQ y simular un fallo para verificar que la alerta llega
- [ ] Documentar el runbook del agente: qué hacer cuando falla cada componente

**Recursos para seguir aprendiendo:**
- Próxima clase: Agentes multimodales con visión (análisis de imágenes y dashboards)
- Tier 3 recomendado: clase de orquestación multi-agente con LangGraph
- Comunidad: canal `#dev-agentes` en Slack del programa
