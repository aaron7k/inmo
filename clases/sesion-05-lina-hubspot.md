# 🔶 Agentes de HubSpot

**Participante:** Lina | **Tipo:** Asesoría 1-on-1 | **Duración:** 90 min | **Formato:** Sesión individual práctica

---

## 🎯 Objetivos de la sesión

Al finalizar esta asesoría, Lina será capaz de:

1. **Entender y usar Breeze AI de HubSpot** — conocer los agentes nativos (Customer, Prospecting, Content, Knowledge Base, Data) y saber cuándo activar cada uno en su flujo de marketing y ventas.
2. **Crear workflows inteligentes con IA** — configurar automatizaciones en HubSpot que usen la acción "Run Agent" para disparar agentes según etapas del pipeline, comportamientos de leads o triggers personalizados.
3. **Implementar lead scoring con IA** — activar el modelo de puntuación predictivo de HubSpot que analiza 12 meses de historial de engagement y mejora la precisión de leads calificados hasta 3x vs. scoring manual.
4. **Conectar HubSpot con Claude** — usar el Conector Oficial de Claude para HubSpot (lanzado julio 2025) para consultar el CRM en lenguaje natural, analizar campañas y generar insights accionables.
5. **Automatizar con Make.com y Zapier** — construir flujos que conecten HubSpot con herramientas externas usando IA para calificación, seguimiento y personalización de outreach.

---

## 🔑 Conceptos clave

### HubSpot Breeze AI
Capa de inteligencia artificial unificada de HubSpot, lanzada en INBOUND 2024 y expandida significativamente en INBOUND 2025. Comprende tres componentes: **Breeze Assistant** (asistente conversacional disponible para todos los usuarios, incluyendo el plan gratuito), **Breeze Agents** (trabajadores digitales autónomos que ejecutan tareas completas sin supervisión constante) y **Breeze Intelligence** (enriquecimiento de datos de contactos y empresas con señales de intención de compra).

### Agentes de CRM (Breeze Agents)
A diferencia de la automatización tradicional ("si X entonces Y"), los agentes usan razonamiento para interpretar datos, tomar decisiones y ejecutar flujos complejos de forma autónoma. HubSpot tiene actualmente más de 20 agentes disponibles — un aumento 5x desde INBOUND 2024. Los cuatro agentes core en disponibilidad general son: **Customer Agent** (soporte en 9 canales), **Prospecting Agent** (investigación y outreach personalizado), **Content Agent** (creación de contenido multicanal) y **Knowledge Base Agent** (expansión automática de base de conocimientos). Dos más en beta: **Company Research Agent** y **Customer Health Agent**.

### Workflows Inteligentes
HubSpot Workflows es el motor de automatización del CRM. Con la nueva acción **"Run Agent"** (Private Beta, 2025), se puede disparar un agente de Breeze automáticamente cuando cambia una etapa de deal, cuando un lead completa un formulario, o cuando se detecta una señal de compra — escalando operaciones sin contratar más personal.

### Lead Scoring con IA
HubSpot ofrece dos modalidades: **scoring manual** (reglas definidas por el usuario basadas en atributos y comportamientos) y **scoring predictivo con IA** (modelos de machine learning entrenados con deals cerrados-ganados y cerrados-perdidos). El modelo predictivo analiza datos firmográficos, secuencias de comportamiento, recency de engagement y fuente de origen. Requiere mínimo 100 deals cerrados ganados y 100 perdidos para activarse. Una vez activo, se reentrena continuamente con nuevos datos.

### Conector Oficial Claude x HubSpot
HubSpot fue el primer CRM en lanzar un conector nativo para Claude (julio 29, 2025). Permite consultar el CRM completo en lenguaje natural desde la interfaz de Claude: crear y actualizar registros, acceder al historial completo de engagement (emails, llamadas, reuniones, notas), analizar campañas y generar visualizaciones. Más de 20,000 clientes ya lo usan a través de 23 millones de registros CRM.

### Integraciones No-Code (Make y Zapier)
**Make.com** conecta HubSpot CRM con Claude/Anthropic usando triggers y acciones bidireccionales. **Zapier** conecta más de 9,000 apps incluyendo HubSpot, con su función **AI Actions** que interpreta instrucciones en lenguaje natural para construir flujos en tiempo real. Ambas plataformas permiten calificación de leads con IA, detección de sentimiento, enriquecimiento de contactos y personalización de outreach sin código.

---

## 🛠️ Stack tecnológico

| Herramienta | Función principal | Precio aprox. | Nivel | URL |
|---|---|---|---|---|
| **HubSpot Breeze AI** | Agentes nativos de CRM: Customer, Prospecting, Content, Knowledge Base, Data Agent — automatización de marketing, ventas y servicio desde adentro de HubSpot | Breeze Assistant: gratis. Agentes: créditos HubSpot (pay-as-you-go) | Freemium | [hubspot.com/breeze](https://www.hubspot.com/products/artificial-intelligence/breeze-ai-agents) |
| **HubSpot API v3** | API REST para crear/actualizar contactos, deals, propiedades personalizadas, triggers de workflows y extracción de datos del CRM para integraciones avanzadas | Incluido en todos los planes | Gratis (con límites) | [developers.hubspot.com](https://developers.hubspot.com/docs/api/overview) |
| **Claude (Anthropic)** | Análisis de datos CRM en lenguaje natural, generación de emails personalizados, calificación de leads, resúmenes de pipeline; se conecta a HubSpot via conector oficial o API | Gratis / $20 USD/mes (Pro) | Freemium | [claude.ai](https://claude.ai) |
| **Make.com** | Automatizaciones visuales no-code: conecta HubSpot con Claude, Gmail, Slack, Sheets y +1,500 apps; ideal para flujos de calificación de leads y notificaciones inteligentes | Desde $9 USD/mes (500 ops) | Freemium | [make.com](https://www.make.com/en/integrations/hubspotcrm/anthropic-claude) |
| **Zapier** | Conecta HubSpot con +9,000 apps; AI Actions permite crear automatizaciones con instrucciones en lenguaje natural; nativo para sincronización de leads y campañas | Desde $19.99 USD/mes | Freemium | [zapier.com](https://zapier.com/apps/hubspot/integrations/ai) |
| **Clearbit (ahora HubSpot Breeze Intelligence)** | Enriquecimiento automático de contactos y empresas: cargo, industria, tamaño, tecnologías usadas, señales de intención de compra — integrado nativamente en HubSpot | Incluido en planes Professional+ / créditos adicionales | Pago | [hubspot.com/products/marketing/breeze-intelligence](https://www.hubspot.com/products/marketing/breeze-intelligence) |
| **n8n** | Alternativa open-source a Make/Zapier: flujos de automatización entre Claude y HubSpot con control total del código, ideal para integraciones personalizadas y privacidad de datos | Gratis (self-hosted) / desde $20 USD/mes (cloud) | Freemium | [n8n.io/integrations/claude/and/hubspot](https://n8n.io/integrations/claude/and/hubspot/) |

---

## 📋 Plan de la sesión (4 bloques de ~20 min)

### Bloque 1 (min 0–20): Panorama de Breeze AI y agentes de HubSpot
- ¿Qué es Breeze AI y cómo se diferencia de la automatización tradicional de HubSpot?
- Recorrido por los 4 agentes core + marketplace de agentes (+20 disponibles)
- Demostración en vivo: Breeze Assistant en acción dentro del CRM de Lina
- Diferencia entre Breeze Assistant (gratis) y Breeze Agents (créditos)
- Estadística clave: equipos que usan los 4 agentes reportan 40% menos tareas CRM repetitivas y 25% más rapidez en respuesta a leads (primeros 90 días)

### Bloque 2 (min 20–45): Lead scoring y Prospecting Agent
- Cómo funciona el scoring predictivo de HubSpot: datos de entrenamiento, señales analizadas, reentrenamiento continuo
- Activar y configurar el modelo de lead scoring en el portal de Lina
- El Prospecting Agent: cómo investiga cuentas objetivo, personaliza outreach y monitorea señales de compra
- Diferencia entre scoring manual (reglas) vs. scoring predictivo (IA)
- Ejercicio: revisar los leads actuales de Lina con el scoring activado y priorizar los top 10

### Bloque 3 (min 45–65): Workflows inteligentes + Conector Claude
- Crear un workflow con la acción "Run Agent": trigger por etapa de deal, acción del agente, notificación al rep
- Configurar el Conector Oficial HubSpot x Claude: acceso a registros, consultas en lenguaje natural
- Demostración: pedirle a Claude que resuma el pipeline de la semana, identifique deals estancados y sugiera next steps
- Integración con Make.com: flujo de calificación automática cuando llega un lead nuevo
- Ejemplo práctico: "cuando un lead puntúa +80, el Prospecting Agent crea outreach personalizado y notifica al rep en Slack"

### Bloque 4 (min 65–90): Agente de calificación de leads — construcción y plan de acción
- Construcción guiada del agente completo de calificación (ejercicio práctico)
- Selección de las 2-3 automatizaciones prioritarias para implementar esta semana
- Revisión de límites y precauciones: cuándo la IA puede fallar en el CRM
- Acciones concretas post-sesión y recursos para profundizar

---

## 💪 Ejercicio práctico

### "Agente de calificación de leads con HubSpot + IA"

**Objetivo:** Construir un agente completo que reciba un lead nuevo en HubSpot, lo enriquezca con Breeze Intelligence, lo puntúe con el modelo predictivo y genere un email de outreach personalizado listo para aprobar.

**Paso a paso:**

1. **Configurar el Formulario de Captura**
   - En HubSpot: Marketing → Formularios → crear formulario con campos: nombre, email, empresa, cargo, teléfono, "¿Cómo nos encontraste?"
   - Activar la propiedad personalizada "Canal de origen" para clasificar leads

2. **Activar Breeze Intelligence (enriquecimiento)**
   - En HubSpot: Settings → Data Management → Breeze Intelligence
   - Activar "Auto-enrich new contacts": el sistema completará automáticamente cargo real, tamaño de empresa, industria y tecnologías usadas
   - Configurar mínimo 5 propiedades de enriquecimiento prioritarias

3. **Configurar Lead Scoring Predictivo**
   - En HubSpot: Marketing → Lead Scoring → "Switch to Predictive"
   - Si tienes +200 deals cerrados: activar modelo ML directamente
   - Si tienes <200 deals: crear scoring manual con reglas (cargo: +10pts, email abierto: +5pts, demo solicitada: +25pts, visita pricing page: +15pts)

4. **Crear el Workflow de calificación (el "agente")**
   ```
   TRIGGER: Contacto nuevo creado vía formulario
   
   PASO 1 → Esperar 5 min (para que Breeze Intelligence enriquezca)
   PASO 2 → Rama condicional:
     Si Lead Score ≥ 80 → "Lead Caliente"
     Si Lead Score 40-79 → "Lead Tibio"
     Si Lead Score < 40 → "Lead Frío"
   
   RAMA "Lead Caliente":
   PASO 3 → Acción: Run Agent → Prospecting Agent
             "Investiga [Nombre] de [Empresa], personaliza un email
              de contacto inicial mencionando su industria ([Industria])
              y su rol ([Cargo]). Tono profesional pero conversacional."
   PASO 4 → Notificar al rep en Slack: "Nuevo lead caliente: [Nombre], Score: [Score]"
   PASO 5 → Crear tarea: "Revisar y enviar email de outreach en 2 horas"
   
   RAMA "Lead Tibio":
   PASO 3 → Enrollar en secuencia de nurturing (3 emails en 7 días)
   PASO 4 → Agregar a lista "Para seguimiento semana"
   
   RAMA "Lead Frío":
   PASO 3 → Agregar a campaña de contenido educativo (newsletter mensual)
   ```

5. **Conectar Claude para análisis del pipeline (bonus)**
   - En Claude.ai: conectar el Conector de HubSpot (Settings → Connectors → HubSpot)
   - Prompt semanal sugerido:
   ```
   Analiza mi pipeline de HubSpot de esta semana:
   1. ¿Cuáles deals llevan más de 14 días sin actividad?
   2. ¿Qué leads con score alto no han sido contactados aún?
   3. Genera un resumen de 5 puntos para mi reunión de ventas del lunes
   ```

6. **Medir resultados a los 30 días**
   - Tasa de respuesta a leads calientes (objetivo: >30%)
   - Tiempo promedio de primer contacto (objetivo: <2 horas)
   - Leads correctamente clasificados como calientes que convierten a cliente

**Resultado esperado:** Sistema de calificación automático que opera 24/7, responde a leads calientes en minutos y libera a Lina de clasificar manualmente decenas de contactos por semana.

---

## 📚 Recursos recomendados

### Documentación oficial
- [Breeze AI Agents — HubSpot](https://www.hubspot.com/products/artificial-intelligence/breeze-ai-agents) — página oficial de todos los agentes
- [HubSpot Academy — AI Automation](https://academy.hubspot.com) — cursos gratuitos de certificación en automatización e IA
- [Conector Claude x HubSpot](https://knowledge.hubspot.com/integrations/set-up-and-use-the-hubspot-connector-for-claude) — guía oficial de configuración
- [HubSpot Developers — API Overview](https://developers.hubspot.com/docs/api/overview) — documentación técnica de la API v3

### Guías prácticas
- [Cómo construir lead scoring en HubSpot 2025](https://www.xcellimark.com/blog/how-to-build-lead-scoring-in-hubspot-2025-update) — guía práctica con scoring manual y predictivo
- [HubSpot + Claude: guía completa de insights CRM](https://www.fastslowmotion.com/hubspot-claude/) — ejemplos de consultas y casos de uso
- [Flujos de trabajo de HubSpot 2025 — Zapier](https://zapier.com/blog/hubspot-workflow-examples/) — 11 workflows esenciales con IA
- [Make.com: integración HubSpot + Claude](https://www.make.com/en/integrations/hubspotcrm/anthropic-claude) — templates de automatización listos para usar

### Estadísticas clave para tener a la mano
- **40%** menos tareas CRM repetitivas con los 4 agentes Breeze activados (primeros 90 días)
- **25%** más rapidez en respuesta a leads con agentes de HubSpot
- **2x** más tasa de respuesta con el Prospecting Agent vs. outreach manual
- **3x** más precisión en leads calificados con scoring predictivo vs. manual
- **20,000+** clientes ya usan el conector Claude x HubSpot sobre 23M de registros CRM
- **20+** agentes disponibles en HubSpot (aumento 5x desde INBOUND 2024)
- **18** nuevos agentes anunciados en INBOUND 2025 (7 marketing, 6 ventas, 5 servicio)

### Herramientas para explorar esta semana
- [HubSpot gratuito](https://www.hubspot.com/products/crm) — CRM + Breeze Assistant sin costo
- [Claude.ai](https://claude.ai) — conectar el conector de HubSpot desde Settings
- [Make.com](https://www.make.com) — plan gratuito con 1,000 operaciones/mes para probar flujos

---

## 🔗 Acciones post-sesión

- [ ] **Esta semana:** Activar Breeze Intelligence en el portal de HubSpot y revisar el enriquecimiento automático de los últimos 50 contactos
- [ ] **Esta semana:** Configurar el lead scoring (predictivo si hay +200 deals, manual si hay menos) y revisar el score actual del pipeline
- [ ] **Esta semana:** Conectar Claude con HubSpot vía el conector oficial y hacer la primera consulta de pipeline en lenguaje natural
- [ ] **Semana 2:** Construir el workflow de calificación de leads (el "agente") con las 3 ramas del ejercicio práctico
- [ ] **Semana 2:** Crear una cuenta en Make.com y configurar un flujo de notificación: "lead caliente nuevo → mensaje en WhatsApp/Slack"
- [ ] **Semana 3:** Activar el Prospecting Agent para los top 10 leads con mayor score y revisar los emails de outreach generados antes de enviarlos
- [ ] **Seguimiento:** Sesión de revisión en 30 días para medir tasa de respuesta, tiempo de primer contacto y precisión del scoring

---

*Sesión preparada para Lina — Asesoría 1-on-1 de Agentes de HubSpot | 90 minutos*
