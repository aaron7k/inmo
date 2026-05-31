# 🔗 Conectar Claude a Meta para alertas, optimizaciones y A/B testing

**Presentador:** Lau | **Fecha:** Viernes 26 junio 2026 | **Audiencia:** Paid media | **Tier:** 2 · Marketing track | **Duración:** 90 min

---

## 🎯 Objetivos

Al terminar esta clase vas a poder:

1. **Conectar Claude con la Meta Ads API** usando el MCP oficial de Meta o conectores de terceros (Make.com / n8n / Zapier), sin exponer credenciales ni arriesgar la cuenta publicitaria.
2. **Crear alertas automáticas de rendimiento** que te notifiquen por Slack o WhatsApp cuando el CPA, CPM o ROAS se salgan de rango.
3. **Automatizar el ciclo de A/B testing**: generación de variantes de copy/creatividad → lanzamiento → monitoreo → pausa del perdedor → escalado del ganador, todo orquestado por Claude.
4. **Implementar un bucle de optimización continua** donde Claude analiza resultados, propone cambios y los ejecuta a través de la API con supervisión humana mínima.

---

## 🔑 Conceptos clave

### API (Application Programming Interface)
Conjunto de endpoints que Meta expone para leer y escribir datos de campañas sin entrar al Ads Manager. La **Meta Marketing API** (rama de la Graph API) es la que usamos en esta clase.

### MCP (Model Context Protocol)
Estándar abierto de Anthropic que permite a Claude comunicarse con servicios externos de forma segura. Meta lanzó su **Meta Ads MCP Server** en open beta el 29 de abril de 2026: da a Claude acceso autenticado a 29 herramientas que cubren toda la Marketing API, sin necesidad de generar tokens manualmente.

### Webhooks
Notificaciones HTTP que Meta (o Make/n8n) envía a tu servidor cuando ocurre un evento: un gasto supera umbral, un ad cae a delivery limitado, un ROAS baja del objetivo. Claude recibe el payload y decide la acción.

### Alertas de rendimiento
Reglas que disparan un mensaje automático cuando una métrica clave cruza un umbral definido. Ejemplos: CPA > objetivo × 1.2, frecuencia > 4, CTR < 0.8 %. La alerta puede ir a Slack, WhatsApp Business o email.

### A/B testing con IA
Proceso donde Claude genera múltiples variantes de copy, titular o CTA; las lanza como split test a través de la API; monitorea estadísticamente cuál gana; pausa los perdedores y escala el presupuesto del ganador, todo de forma automática.

### Automatización de flujos (Make / Zapier / n8n)
Plataformas de orquestación que actúan de pegamento entre la Meta Ads API, Claude y el resto del stack (Sheets, Slack, CRM). Permiten construir flujos visuales sin código profundo.

---

## 🛠️ Stack tecnológico

| Herramienta | Rol en el flujo | Precio | URL |
|---|---|---|---|
| **Claude API** (Anthropic) | Motor de razonamiento, análisis y decisiones | Pago por tokens | [anthropic.com/api](https://www.anthropic.com/api) |
| **Meta Marketing API** (Graph API v21+) | Leer/escribir campañas, ad sets, ads, métricas | Gratis (con cuenta Meta) | [developers.facebook.com/docs/marketing-apis](https://developers.facebook.com/docs/marketing-apis/) |
| **Meta Ads MCP Server** | Conector oficial Meta ↔ Claude (open beta 2026) | Gratis | [github.com/facebookresearch/meta-ads-mcp](https://github.com/facebookresearch/meta-ads-mcp) |
| **Make.com** | Orquestación visual de flujos sin código | Freemium (9 $/mes Core) | [make.com/en/integrations/facebook-ads-cm/anthropic-claude](https://www.make.com/en/integrations/facebook-ads-cm/anthropic-claude) |
| **Zapier** | Automatización sencilla, más de 8 000 apps | Freemium (19 $/mes Starter) | [zapier.com/blog/automate-claude](https://zapier.com/blog/automate-claude/) |
| **n8n** | Orquestación open-source, self-hosted | Gratis (self-host) | [n8n.io](https://n8n.io) |
| **Slack / WhatsApp Business** | Canal de alertas y notificaciones | Freemium / API de pago | [slack.com](https://slack.com) / [business.whatsapp.com](https://business.whatsapp.com) |
| **Google Sheets** | Dashboard de métricas y registro de experimentos | Gratis | [sheets.google.com](https://sheets.google.com) |
| **Composio / Ryze AI** | Conectores MCP gestionados, OAuth automático | Freemium | [composio.dev/toolkits/metaads](https://composio.dev/toolkits/metaads/framework/claude-code) |

---

## 📋 Contenido — 4 módulos (90 min)

### Módulo 1 · Arquitectura de integración (20 min)

**¿Cómo fluye la información?**

```
Meta Ads API ──► MCP Server / Make.com ──► Claude ──► Decisión
      ▲                                                    │
      └────────────────── Acción (API write) ◄────────────┘
```

**Opciones de conexión:**

1. **Meta Ads MCP oficial** (recomendado para Claude Desktop / Claude Code)
   - Sin tokens manuales, autenticación OAuth vía Meta
   - 29 herramientas: campañas, ad sets, audiencias, creatividades, catálogos, diagnósticos de señales
   - Instalación: `npx @modelcontextprotocol/create-server meta-ads`

2. **Make.com + Claude module**
   - Integración visual, ideal para equipos sin perfil técnico
   - Módulo "Anthropic Claude" nativo en Make; conector "Facebook Ads Campaign Management"
   - Ideal para flujos con Google Sheets, Slack y CRM

3. **Zapier (Claude AI action)**
   - Más fácil de configurar, menos flexible
   - Perfecto para alertas simples: gasto > umbral → Claude analiza → mensaje a Slack

4. **n8n self-hosted**
   - Control total, sin límites de operaciones
   - Ideal para agencias con datos sensibles o volumen alto

**Principios de seguridad:**
- Usar siempre OAuth, nunca hardcodear tokens en el flujo
- Otorgar solo permisos de lectura cuando sea suficiente
- Meta no penaliza el uso de la API si el comportamiento es orgánico (no cambios masivos de presupuesto de golpe, no tráfico en ráfagas)

---

### Módulo 2 · Configurar alertas automáticas (20 min)

**Tipos de alertas que vamos a construir:**

| Alerta | Métrica | Umbral | Destino |
|---|---|---|---|
| CPA disparado | CPA actual vs. CPA objetivo | > 20 % | Slack #paid-media |
| Frecuencia alta | Frecuencia de ad set | > 4.0 | WhatsApp |
| Gasto sin conversiones | Conversiones en últimas 24 h | = 0 con gasto > 50 € | Email |
| ROAS bajo | ROAS de campaña | < objetivo × 0.8 | Slack |
| Delivery limitado | Estado de entrega | "limited" | Slack + ticket Notion |

**Flujo con Make.com (paso a paso):**

1. **Trigger:** Scheduled (cada hora o cada día a las 8 am)
2. **Módulo Meta Ads:** Get Ad Set Insights (últimas 24 h)
3. **Router:** Evalúa si CPA > umbral × 1.2
4. **Módulo Claude:** "Analiza estos datos de rendimiento y redacta un resumen ejecutivo con recomendación de acción inmediata: [datos]"
5. **Módulo Slack:** Envía mensaje al canal con el resumen de Claude

**Prompt de Claude para alertas:**
```
Eres un especialista en paid media. Analiza los siguientes datos de Meta Ads de las últimas 24 horas:

{{datos_json}}

Métricas objetivo: CPA < {{cpa_objetivo}} €, ROAS > {{roas_objetivo}}, Frecuencia < 4.

Redacta:
1. Diagnóstico en 2 líneas (qué está pasando y por qué)
2. Acción inmediata recomendada (concreta, ejecutable hoy)
3. Nivel de urgencia: ALTA / MEDIA / BAJA

Tono: directo, sin rodeos, para un performance marketer.
```

---

### Módulo 3 · A/B testing automatizado (25 min)

**El ciclo completo de A/B testing con Claude:**

```
1. Briefing → Claude genera variantes
2. Claude crea los ads vía API (o Make)
3. Meta distribuye el tráfico (A/B split test nativo)
4. Claude monitorea estadísticas cada N horas
5. Al detectar ganador con significancia → pausa perdedor
6. Claude redacta aprendizajes y los guarda en Sheets
```

**Paso 1 — Generación de variantes con Claude:**

Prompt para copy de anuncio:
```
Crea 4 variantes de copy para un anuncio de Facebook/Instagram.

Producto: {{producto}}
Público objetivo: {{audiencia}}
Oferta: {{oferta}}
URL destino: {{url}}
Tono de marca: {{tono}}

Para cada variante genera:
- Titular (máx 40 caracteres)
- Texto principal (máx 125 caracteres)
- CTA sugerido

Cada variante debe probar un ángulo diferente:
A) Beneficio principal
B) Urgencia / escasez
C) Prueba social
D) Pregunta / curiosidad
```

**Paso 2 — Lanzar el test vía API:**

Con el MCP de Meta, Claude puede crear directamente el experimento:
```
"Crea un A/B test en la campaña [ID] con las 4 variantes de copy generadas, presupuesto de 20 €/día por variante, duración 7 días, métrica de optimización: costo por lead."
```

**Paso 3 — Monitoreo y decisión automatizada:**

Reglas de pausa automática (configurables en Make):
- Si CPA de variante > CPA objetivo × 1.5 después de gastar 50 € → pausar
- Si CTR de variante < promedio del grupo × 0.6 → pausar
- Al llegar a 95 % de significancia estadística → declarar ganador

**Paso 4 — Registro de aprendizajes:**

Claude redacta un resumen que se guarda automáticamente en Google Sheets:
- Fecha del test
- Hipótesis
- Variante ganadora
- Diferencia de rendimiento
- Insight aplicable a futuros tests

---

### Módulo 4 · Optimización continua (25 min)

**El bucle semanal de optimización:**

```
Lunes 8 am: Claude descarga métricas de la semana
           ↓
           Identifica los 3 ad sets con peor ROAS
           ↓
           Propone acciones: pausar / ajustar puja / cambiar audiencia
           ↓
           Equipo aprueba en Slack (botones interactivos)
           ↓
           Make ejecuta los cambios vía API
           ↓
           Jueves: Claude revisa resultados y ajusta
```

**Estrategias de optimización que Claude puede ejecutar:**

1. **Bid management**: Ajustar puja objetivo según tendencia de CPA (±10-15 %, nunca cambios bruscos)
2. **Budget shifting**: Mover presupuesto de ad sets con ROAS bajo a los de ROAS alto
3. **Audience refresh**: Detectar fatiga (frecuencia > 4) y sugerir nuevas audiencias lookalike
4. **Creative rotation**: Identificar creatividades agotadas y solicitar nuevas al equipo creativo
5. **Dayparting**: Analizar rendimiento por hora y ajustar programación de anuncios

**Prompt de optimización semanal:**
```
Actúa como un performance marketer senior. Analiza los datos de Meta Ads de los últimos 7 días:

{{json_completo_metricas}}

Objetivo de negocio: {{objetivo}} | Presupuesto total: {{presupuesto}} €/mes

Genera un plan de acción priorizado con:
1. Qué pausar inmediatamente y por qué
2. Qué escalar y cuánto presupuesto adicional asignar
3. Qué tests nuevos lanzar esta semana
4. Alertas de riesgo para los próximos 7 días

Formato: tabla con columna Acción / Impacto esperado / Esfuerzo (Alto/Medio/Bajo)
```

**Métricas a monitorear en el dashboard de Sheets:**
- ROAS por campaña / ad set / ad
- CPA por etapa del funnel
- CPM y CTR (indicadores de salud de la creatividad)
- Frecuencia (indicador de fatiga)
- Porcentaje de gasto consumido vs. objetivo
- Número de conversiones por día

---

## 💪 Ejercicio práctico

### "La alerta del CPA"

**Objetivo:** Crear un flujo en Make.com que detecte automáticamente cuándo el CPA sube más del 20 % respecto al objetivo y envíe un análisis de Claude a Slack.

**Pasos:**

1. **Crear cuenta en Make.com** (gratis) y conectar tu cuenta de Meta Ads
2. **Nuevo escenario:** Scheduled trigger → cada día a las 9 am
3. **Módulo Meta Ads:** "Get Ad Insights" → últimas 24 horas → métricas: spend, actions, cost_per_action
4. **Módulo Tools > Set variable:** calcular `cpa_actual = spend / conversiones`
5. **Módulo Router:** condición `cpa_actual > cpa_objetivo * 1.20`
   - Rama SÍ → continúa
   - Rama NO → stop
6. **Módulo Anthropic Claude:** enviar el prompt de análisis con los datos reales
7. **Módulo Slack:** enviar mensaje al canal #alertas-paid con el output de Claude

**Entregable:** Screenshot del escenario activo + ejemplo de alerta recibida en Slack

**Variante avanzada:** Añadir un botón de acción en Slack ("Pausar campaña" / "Revisar mañana") que, al clickar, ejecute la acción correspondiente en Meta vía Make.

---

## 📚 Recursos

### Documentación oficial
- [Meta Marketing API — Guía oficial](https://developers.facebook.com/docs/marketing-apis/)
- [Meta Graph API Explorer](https://developers.facebook.com/tools/explorer/)
- [Meta Ads MCP Server — GitHub](https://github.com/facebookresearch/meta-ads-mcp)
- [Anthropic API Docs](https://docs.anthropic.com)
- [Claude API — Referencia de mensajes](https://docs.anthropic.com/en/api/messages)

### Conectores y herramientas
- [Make.com · Integración Facebook Ads + Claude](https://www.make.com/en/integrations/facebook-ads-cm/anthropic-claude)
- [Zapier · 7 formas de automatizar Claude](https://zapier.com/blog/automate-claude/)
- [Composio · Meta Ads + Claude Code](https://composio.dev/toolkits/metaads/framework/claude-code)
- [Adzviser · Conectar Meta Ads a Claude vía MCP](https://adzviser.com/connect/meta-ads-to-claude-integration)

### Lecturas recomendadas
- [Meta abre su sistema de ads a Claude y ChatGPT (PPC Land)](https://ppc.land/meta-opens-its-ad-system-to-claude-and-chatgpt-with-new-ai-connectors/)
- [Guía A/B testing automatizado en Facebook Ads (AdStellar)](https://www.adstellar.ai/blog/facebook-ads-a-b-testing-automation)
- [Cómo conectar Meta Ads a Claude AI (Madgicx)](https://madgicx.com/blog/connect-meta-ads-to-claude)
- [Jon Loomer: Meta Ads AI Connectors y Claude — riesgos y usos](https://www.jonloomer.com/meta-ads-ai-connectors-claude/)
- [PorterMetrics: 4 formas gratuitas de conectar Meta Ads a Claude](https://portermetrics.com/en/tutorial/claude/chat-meta-ads/)

---

## 🔗 Acciones post-clase

- [ ] Crear cuenta en [Make.com](https://make.com) y conectar Meta Ads
- [ ] Instalar el Meta Ads MCP Server en Claude Desktop (si usas Claude localmente)
- [ ] Definir los 3 KPIs objetivo de tu cuenta (CPA, ROAS, CPM) y documentarlos
- [ ] Construir el flujo del ejercicio práctico (alerta de CPA +20 %)
- [ ] Compartir screenshot del flujo activo en el canal #clase-07 de la comunidad
- [ ] Proponer un segundo flujo de automatización para tu cuenta específica en el foro

---

*Clase 07 · Tier 2 · Marketing track · Inmo Academy 2026*
