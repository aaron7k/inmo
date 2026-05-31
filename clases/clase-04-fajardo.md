# 🔌 Programas para utilizar Claude como extensión

**Presentador:** Fajardo | **Fecha:** Viernes 12 junio 2026 | **Audiencia:** Todos | **Tier:** 1 · Fundamentos | **Duración:** 90 min

---

## 🎯 Objetivos

Al finalizar esta clase, los participantes serán capaces de:

- **Integrar Claude a su flujo de trabajo diario** utilizando extensiones de navegador, aplicaciones de escritorio y editores de código.
- **Conectar Claude con herramientas externas** (Notion, Slack, Google Drive, GitHub) a través del protocolo MCP.
- **Automatizar tareas repetitivas** con plataformas no-code como Zapier, Make.com y n8n sin escribir código.
- **Configurar el entorno de desarrollo** con la extensión de VS Code de Claude Code para asistencia IA directa en el editor.
- **Comprender la arquitectura MCP** (Model Context Protocol) y su papel como estándar universal de integración IA.

---

## 🔑 Conceptos Clave

### Model Context Protocol (MCP)
Estándar abierto lanzado por Anthropic en noviembre de 2024. Proporciona una interfaz universal basada en JSON-RPC 2.0 que permite a los modelos de lenguaje conectarse de forma segura y bidireccional con herramientas externas, bases de datos y servicios. Es, en esencia, el "USB de la IA": un conector universal.

- **Arquitectura de tres capas:** Host (la aplicación, ej. Claude Desktop), Client (puente dentro del host) y Server (el servicio externo con sus herramientas).
- **Gobernanza:** Desde diciembre de 2025 está administrado por la Linux Foundation bajo el Agentic AI Foundation (AAIF), co-fundado por Anthropic, OpenAI y Block.
- **Adopción masiva:** A marzo de 2026 hay más de 10,000 servidores MCP activos y 97 millones de descargas mensuales del SDK.

### API (Application Programming Interface)
Interfaz que permite a programas externos comunicarse con Claude directamente mediante código. Base de todas las integraciones avanzadas. Claude expone su API REST en `https://api.anthropic.com/v1/messages`.

### Extensiones de Navegador
Programas que se instalan en el navegador (Chrome, Edge, Brave, Arc) y añaden capacidades de Claude directamente a la experiencia de navegación web.

### Integraciones No-Code
Plataformas visuales de automatización (Zapier, Make.com, n8n) que permiten conectar Claude con cientos de aplicaciones mediante flujos de trabajo gráficos, sin necesidad de programar.

### Claude Cowork
Funcionalidad de la app de escritorio de Claude que ejecuta tareas agenticas en una máquina virtual local aislada. Permite a Claude acceder a archivos locales y conectores MCP para trabajo de conocimiento más allá del código.

---

## 🛠️ Stack Tecnológico

| Herramienta | Tipo | Precio | URL | Descripción |
|---|---|---|---|---|
| **Claude.ai (web)** | Plataforma base | Free / Pro $20/mes / Max $100-200/mes | [claude.ai](https://claude.ai) | Interfaz web principal; acceso a todos los modelos Claude |
| **Claude Desktop** | App de escritorio | Gratis (incluida en plan) | [claude.com/download](https://claude.com/download) | App nativa para macOS y Windows; habilita MCP y Cowork |
| **Claude en Chrome** | Extensión navegador | Requiere plan pago (Pro+) | [Chrome Web Store](https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn) | Claude navega, hace clic y rellena formularios en tu nombre |
| **Claude Code (VS Code)** | Extensión IDE | Incluida en plan / API | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) | Asistente de código con diffs en línea, @-menciones y plan review |
| **MCP Servers** | Protocolo / Servidores | Open source / varía | [modelcontextprotocol.io](https://modelcontextprotocol.io) | +10,000 servidores: GitHub, Slack, Notion, Postgres, Google Drive… |
| **Zapier** | Automatización no-code | Free / desde $19.99/mes | [zapier.com](https://zapier.com/apps/anthropic-claude/integrations) | +9,000 apps; MCP support desde abril 2025; ideal para flujos simples |
| **Make.com** | Automatización visual | Free / desde $9/mes | [make.com](https://www.make.com/en/integrations/anthropic-claude) | Constructor visual avanzado; mejor para flujos complejos con bifurcaciones |
| **n8n** | Automatización dev-friendly | Self-hosted gratis / cloud desde $20/mes | [n8n.io/integrations/claude](https://n8n.io/integrations/claude/) | Open source, self-hosteable; ideal para desarrolladores y equipos técnicos |
| **JetBrains Plugin** | Extensión IDE | Incluida en plan | [JetBrains Marketplace](https://plugins.jetbrains.com) | Para IntelliJ, PyCharm, WebStorm y otros IDEs de JetBrains |
| **Amazon Bedrock** | Plataforma cloud | Pago por uso | [aws.amazon.com/bedrock](https://aws.amazon.com/bedrock) | Accede a Claude mediante infraestructura AWS para empresas |
| **Google Vertex AI** | Plataforma cloud | Pago por uso | [cloud.google.com/vertex-ai](https://cloud.google.com/vertex-ai) | Accede a Claude en la infraestructura Google Cloud |

---

## 📋 Contenido de la Clase — 4 Módulos

### Módulo 1: Panorama General — El Ecosistema de Extensiones Claude (20 min)

**¿Por qué extender Claude más allá del chat?**

Claude.ai en el navegador es poderoso, pero su verdadero potencial se libera cuando se conecta con el contexto de tu trabajo real: tus archivos, tu código, tus emails, tu calendario. Las extensiones e integraciones eliminan el copiar-y-pegar constante y convierten a Claude en un colega que ya conoce tu entorno.

**Panorama del ecosistema (2026):**
- **Capa 1 — Apps nativas:** Claude Desktop + Claude.ai web. Base de todo.
- **Capa 2 — Extensiones de interfaz:** Navegador (Chrome) e IDE (VS Code, JetBrains). Claude trabaja donde tú trabajas.
- **Capa 3 — Integraciones estructuradas (MCP):** Conexiones directas y bidireccionales con servicios externos. Claude lee y escribe en tus herramientas.
- **Capa 4 — Automatizaciones (Zapier/Make/n8n):** Flujos de trabajo que se ejecutan solos. Claude como motor de inteligencia dentro de procesos automatizados.
- **Capa 5 — Infraestructura empresarial (API, Bedrock, Vertex):** Integraciones personalizadas a escala.

**Tipos de integración por caso de uso:**
| Caso | Herramienta recomendada |
|---|---|
| Navegar la web con IA | Claude en Chrome |
| Escribir código | Claude Code en VS Code |
| Conectar apps sin código | Zapier / Make.com |
| Integrar con sistemas propios | MCP + Claude Desktop |
| Automatización avanzada | n8n |
| Aplicaciones empresariales | API de Anthropic |

---

### Módulo 2: Extensiones de Navegador — Claude en Chrome (20 min)

**¿Qué es Claude en Chrome?**

Claude en Chrome es una extensión oficial de Anthropic disponible para todos los navegadores basados en Chromium (Chrome, Edge, Brave, Arc, Opera). Apareció como preview en agosto 2025 con 1,000 testers, se expandió en noviembre 2025 a suscriptores Max, y desde diciembre 2025 está disponible en beta para todos los planes pagos (Pro $20/mes en adelante).

**Capacidades principales:**
- Se ejecuta en el panel lateral mientras navegas — Claude ve lo que tú ves
- Puede hacer clic, navegar páginas y rellenar formularios en tu nombre
- "Enseñas" un flujo de trabajo grabando los pasos; Claude aprende a repetirlos
- Se integra con Claude Code para flujos de trabajo de extremo a extremo (web → código → deploy)
- Comparte el estado de login de tu navegador; puede acceder a sitios en los que ya estás autenticado

**Modelos disponibles por plan:**
- Plan Pro ($20/mes): acceso al modelo Haiku 4.5 (más rápido, menos capaz)
- Plan Max ($100-200/mes): acceso a Sonnet y Opus completos

**Casos de uso prácticos:**
1. Investigación web: extrae datos de múltiples páginas y los consolida automáticamente
2. Formularios repetitivos: Claude rellena formularios de registro o CRM con datos de tus archivos
3. Monitoreo de precios o contenido: Claude visita páginas periódicamente y te informa cambios
4. Testing de aplicaciones web: conectado a VS Code, Claude prueba la UI de tu app mientras la desarrollas

**Seguridad — Consideraciones importantes:**
- **Riesgo de prompt injection:** actores maliciosos pueden intentar inyectar instrucciones en páginas web para engañar a Claude
- La extensión solicita confirmación antes de acciones sensibles
- Siempre revisa las acciones propuestas antes de autorizar operaciones en sitios financieros o con datos personales

**Instalación:**
1. Ir a Chrome Web Store → buscar "Claude" (publicador: Anthropic)
2. Hacer clic en "Añadir a Chrome"
3. Iniciar sesión con la cuenta de Claude.ai
4. El panel de Claude aparece en la barra lateral del navegador

---

### Módulo 3: Integraciones No-Code — Zapier, Make.com y n8n (25 min)

**El concepto: Claude como motor de inteligencia**

Las plataformas de automatización permiten conectar Claude con cualquier aplicación que uses, sin escribir código. Claude aporta el "cerebro" (comprensión, redacción, clasificación, resumen) y la plataforma aporta la "fontanería" (cuándo disparar el flujo, adónde enviar los resultados).

#### Zapier — El más popular y accesible

- **+9,000 apps** integradas; la red más grande del mercado
- **Acción principal:** "Create Conversation" — envía contenido a Claude y recibe la respuesta generada
- **Modelos disponibles:** Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku (seleccionable en cada Zap)
- **Zapier MCP (desde abril 2025):** conecta Claude Desktop directamente con las 9,000 apps y 30,000+ acciones de Zapier en una sola sesión agentica. Solo funciona con la app de escritorio, no con la versión web.
- **Mejor para:** automatizaciones simples, equipos no técnicos, primeras pruebas de concepto
- **Precio:** plan gratuito limitado; planes de pago desde $19.99/mes

**Ejemplos de flujos con Zapier:**
- Nuevo email en Gmail → Claude resume y clasifica → guardado en Notion
- Nuevo lead en HubSpot → Claude redacta email personalizado → enviado automáticamente
- Nuevo artículo RSS → Claude traduce y adapta → publicado en Slack

#### Make.com — El más visual y potente

- Constructor visual drag-and-drop con nodos y bifurcaciones
- Ideal para flujos complejos con condicionales, bucles y transformaciones de datos
- Integración nativa con Claude API de Anthropic
- **Mejor para:** automatizaciones de marketing, procesamiento de datos en lote, flujos con múltiples ramas lógicas
- **Precio:** plan gratuito (1,000 operaciones/mes); planes desde $9/mes

**Ejemplos de flujos con Make.com:**
- Monitorear competidores → Claude analiza cambios → dashboard actualizado
- Procesar documentos PDF masivamente → Claude extrae datos → hoja de cálculo

#### n8n — El más potente para desarrolladores

- Plataforma open source, self-hosteable (gratis) o en la nube (desde $20/mes)
- **Claude como capa de inteligencia:** n8n maneja la lógica del flujo, Claude entiende el contenido
- Integración mediante nodos HTTP directos a la API de Claude o via MCP
- **Batch API:** para volúmenes altos, 50% de descuento con procesamiento asíncrono
- **Mejor para:** equipos técnicos, startups con control de costos, integraciones con sistemas propios
- **2026:** mejoras en gestión de memoria, coordinación multi-agente e integraciones más profundas con LLMs

**Stack recomendado para equipos:**
> n8n como motor central de flujos de trabajo + Claude Code para proyectos de código + Zapier/Make para automatizaciones rápidas ad-hoc.

---

### Módulo 4: MCP Avanzado — Conecta Claude con Todo (25 min)

**¿Qué es el Model Context Protocol (MCP)?**

MCP es el estándar de integración más importante lanzado en el ecosistema de IA de 2024-2026. Creado por Anthropic en noviembre de 2024, define una interfaz universal JSON-RPC 2.0 que permite a Claude conectarse de forma segura y bidireccional con cualquier herramienta o fuente de datos. A diferencia de las APIs tradicionales (unidireccionales), MCP crea un canal persistente donde Claude puede leer *y* escribir.

**Arquitectura MCP:**
```
[HOST: Claude Desktop / VS Code]
        ↓
[CLIENT: Puente MCP interno]
        ↓
[SERVER: Servicio externo con herramientas]
        ↓
[RECURSO: GitHub API / Base de datos / Sistema de archivos]
```

**Servidores MCP oficiales de Anthropic (pre-construidos):**
| Servidor | Capacidades |
|---|---|
| **GitHub** | Leer repos, crear PRs, revisar código, gestionar issues |
| **Slack** | Enviar mensajes, leer historial de canales, buscar usuarios |
| **Google Drive** | Buscar, leer y crear archivos en Drive |
| **Notion** | Leer y escribir páginas, bases de datos y comentarios en tiempo real |
| **Postgres** | Ejecutar consultas SQL, leer esquemas de base de datos |
| **Puppeteer** | Control de navegador headless para automatización web |
| **Filesystem** | Acceder a archivos y carpetas del sistema local |
| **Git** | Operaciones de control de versiones en repos locales |
| **Jira** | Crear y gestionar tickets, sprints y proyectos |
| **Zapier** | Conectar las 9,000+ apps de Zapier en sesión MCP (desde abril 2025) |

**Ecosistema MCP en cifras (2026):**
- **+10,000** servidores MCP activos públicamente (algunos reportan ya 13,000+)
- **97 millones** de descargas mensuales del SDK (Python y TypeScript)
- **Adoptado por:** Anthropic, OpenAI (marzo 2025), Google DeepMind, Microsoft Copilot Studio
- **Gobernanza:** Linux Foundation / Agentic AI Foundation desde diciembre 2025

**Cómo configurar MCP en Claude Desktop:**

Claude Desktop usa un archivo JSON de configuración para especificar qué servidores MCP cargar:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "tu-token-aqui"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/ruta/a/tu/carpeta"]
    }
  }
}
```

**Cómo agregar un servidor MCP en VS Code:**

Desde el terminal integrado de VS Code:
```bash
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ \
  --header "Authorization: Bearer TU_GITHUB_PAT"
```

Una vez configurado, simplemente pide: *"Revisa el PR #456"* o *"Busca en mis archivos de Drive el contrato con Acme"*.

**Conectores del Directorio de Claude (Claude.ai web):**

Desde julio 2025, Claude.ai tiene un directorio de conectores con instalación en un clic. A febrero 2026, incluye más de 50 integraciones en categorías de:
- Comunicación: Slack, Gmail, Google Calendar
- Productividad: Notion, Asana, Figma, Canva
- Desarrollo: GitHub, Cloudflare, bases de datos
- Estilo de vida: Spotify, AllTrails, Instacart, Audible, Tripadvisor, Uber

**Roadmap MCP H2 2026:**
- Operación de servidores sin estado (stateless)
- Descubrimiento automático mediante MCP Server Cards
- Coordinación agente-a-agente con protocolo A2A
- MCP como infraestructura base de orquestación multi-agente

---

## 💪 Ejercicio Práctico

### Objetivo: Instalar Claude en VS Code y crear un flujo automático en Zapier

**Duración:** 30 minutos | **Nivel:** Principiante-Intermedio

---

### Parte A — Claude Code en VS Code (15 min)

**Prerrequisitos:**
- VS Code versión 1.98.0 o superior
- Cuenta en Claude.ai (plan Free o superior)

**Pasos:**

1. **Instalar la extensión:**
   - Abre VS Code → presiona `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (Mac)
   - Busca "Claude Code" (publicador: Anthropic)
   - Haz clic en "Instalar"
   - Alternativamente, ve directamente al [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)

2. **Autenticarte:**
   - Al abrir el panel de Claude (icono ✦ en la barra superior del editor), aparece la pantalla de login
   - Haz clic en "Sign in" → se abrirá tu navegador para autorizar
   - Regresa a VS Code — Claude ya está conectado

3. **Primer uso:**
   - Abre cualquier archivo de código
   - El icono ✦ aparece en la esquina superior derecha del editor
   - Selecciona un bloque de código y escribe: *"Explica qué hace esta función"*
   - Claude responde en el panel lateral con análisis del código seleccionado

4. **Explorar funcionalidades:**
   - Escribe `@` para mencionar archivos específicos (ej. `@archivo.js`)
   - Prueba el comando `/`: explora los modos "Plan", "Auto-accept" y "Normal"
   - Pide a Claude: *"Encuentra los bugs en este archivo y corrígelos"*
   - Revisa el diff side-by-side antes de aceptar los cambios

**Resultado esperado:** Claude Code instalado y funcionando, con tu primer análisis de código completado.

---

### Parte B — Flujo Automatizado en Zapier (15 min)

**Prerrequisitos:**
- Cuenta gratuita en [Zapier](https://zapier.com)
- Cuenta de Claude.ai (para obtener API key en [console.anthropic.com](https://console.anthropic.com))

**Flujo a crear:** *Nuevo formulario de contacto → Claude resume y clasifica → Guarda en hoja de cálculo*

**Pasos:**

1. **Crea un Zap nuevo** en Zapier → "Create Zap"

2. **Configura el Trigger:**
   - Elige "Webhooks by Zapier" → "Catch Hook"
   - O si tienes Typeform/Google Forms, úsalo como trigger
   - Copia la URL del webhook (la usaremos para simular un formulario)

3. **Agrega la acción de Claude:**
   - Busca "Anthropic (Claude)" en acciones
   - Selecciona "Create Conversation"
   - Conecta tu cuenta API de Anthropic (pega tu API key)
   - En el campo "Message": escribe el prompt con datos del formulario:
     ```
     Analiza este mensaje de un cliente potencial y:
     1. Resume en 1 oración qué necesita
     2. Clasifica su prioridad (Alta/Media/Baja)
     3. Sugiere el siguiente paso

     Mensaje: {{nombre}} dice: {{mensaje}}
     ```
   - Selecciona el modelo: Claude 3.5 Sonnet

4. **Agrega acción final:**
   - Busca "Google Sheets" → "Create Spreadsheet Row"
   - Mapea: Nombre, Email, Resumen de Claude, Prioridad de Claude

5. **Prueba el Zap:**
   - Haz clic en "Test" para enviar datos de prueba
   - Verifica que Claude genera el resumen y la clasificación correctamente
   - Activa el Zap

**Resultado esperado:** Cada nuevo contacto llega automáticamente clasificado por Claude en tu hoja de cálculo.

---

### Bonus (para quienes terminen antes): Conectar un servidor MCP
- Descarga Claude Desktop desde [claude.com/download](https://claude.com/download)
- Sigue la guía para añadir el servidor MCP de Filesystem
- Pide a Claude: *"Lista todos los archivos .md en mi carpeta Documentos"*

---

## 📚 Recursos de Aprendizaje

### Documentación Oficial
- [Documentación de MCP (Anthropic)](https://modelcontextprotocol.io) — Guía oficial del protocolo, servidores disponibles y tutoriales
- [Claude Code Docs](https://code.claude.com/docs) — Todo sobre la extensión de VS Code, comandos y configuración
- [Centro de ayuda de Claude](https://support.claude.com) — Artículos de soporte oficial, incluyendo MCP en Desktop
- [Anthropic API Docs](https://docs.anthropic.com) — Referencia completa de la API REST de Claude
- [MCP en GitHub](https://github.com/modelcontextprotocol) — Código fuente de los servidores MCP oficiales

### Herramientas de Integración
- [Zapier × Claude](https://zapier.com/apps/anthropic-claude/integrations) — Lista de todas las integraciones y plantillas de Zaps
- [Make.com × Claude](https://www.make.com/en/integrations/anthropic-claude) — Módulos oficiales de Make para Anthropic
- [n8n × Claude](https://n8n.io/integrations/claude/) — Nodo oficial de Claude en n8n y plantillas

### Artículos Recomendados
- [Piloting Claude in Chrome](https://www.anthropic.com/news/claude-for-chrome) — Anuncio oficial de la extensión de Chrome
- [Claude can now connect to your world](https://claude.com/blog/integrations) — Anuncio del sistema de conectores
- [MCP Revolution: 10,000 Servers, 97M Downloads](https://medium.com/data-science-collective/the-mcp-revolution-10-000-servers-97m-downloads-a-new-ai-nervous-system-89d701c1f487) — Análisis del ecosistema MCP en 2026

### Comunidades
- [Discord de Anthropic](https://discord.gg/anthropic) — Comunidad oficial de desarrolladores
- [Reddit r/ClaudeAI](https://reddit.com/r/ClaudeAI) — Discusiones, trucos y casos de uso
- [MCP Community Hub](https://github.com/modelcontextprotocol/servers) — Directorio comunitario de servidores MCP

---

## 🔗 Acciones Post-Clase

### Esta semana (prioridad alta)
- [ ] **Instalar Claude Code en VS Code** y usarlo en un proyecto real durante al menos 2 horas
- [ ] **Crear tu primer Zap** con Claude: automatiza una tarea repetitiva de tu trabajo actual
- [ ] **Descargar Claude Desktop** y explorar los conectores disponibles en el directorio

### Próximas 2 semanas
- [ ] **Configurar al menos 1 servidor MCP** (recomendado: Filesystem o Notion) en Claude Desktop
- [ ] **Documentar tu flujo de trabajo actual** e identificar 3 puntos donde Claude podría automatizar o asistir
- [ ] **Explorar n8n** si tienes experiencia técnica: instala la versión self-hosted y conecta Claude

### Exploración avanzada
- [ ] Leer la especificación completa de MCP en [modelcontextprotocol.io](https://modelcontextprotocol.io)
- [ ] Crear un servidor MCP personalizado para una herramienta interna de tu organización
- [ ] Integrar Claude Code con Amazon Bedrock o Google Vertex AI si tu empresa usa estas plataformas cloud

### Próxima clase
Trae documentado un flujo de trabajo que hayas automatizado o mejorado con Claude esta semana. Compartiremos casos reales en los primeros 15 minutos de la próxima sesión.

---

*Clase 04 · Serie: IA para Todos · Presentador: Fajardo · Viernes 12 junio 2026*
