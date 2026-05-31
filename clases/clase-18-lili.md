# 📊 Análisis de datos y big data con IA

**Presentador:** Lili | **Fecha:** Viernes 21 agosto 2026 | **Audiencia:** Data, marketing analítico | **Tier:** 5 · Datos | **Duración:** 90 min

---

## 🎯 Objetivos

Al finalizar esta clase, los participantes podrán:

- **Analizar datasets con Claude** de manera conversacional: cargar archivos CSV y Excel, hacer preguntas en lenguaje natural y obtener insights accionables sin escribir una sola línea de código.
- **Implementar pipelines de datos** que combinen herramientas de ingesta (Airbyte), transformación (dbt), orquestación (Apache Airflow) y almacenamiento (BigQuery, Snowflake o Databricks) siguiendo los estándares del Modern Data Stack.
- **Visualizar insights** con herramientas de BI modernas (Looker Studio, Metabase) y entender cuándo usar cada una según el nivel técnico del equipo y el tamaño de los datos.
- **Aplicar text-to-SQL** para democratizar el acceso a datos: convertir preguntas de negocio en consultas SQL precisas usando IA, con tasas de precisión del 90–95% en queries simples y medias.
- **Distinguir big data de smart data**: entender que el objetivo no es acumular datos sino extraer señal útil para decisiones de negocio con la menor fricción posible.

---

## 🔑 Conceptos clave

### ETL (Extract, Transform, Load)
Proceso de tres fases que mueve datos desde sus fuentes originales hasta un destino analítico. **Extract** obtiene datos de APIs, bases de datos, archivos o streams. **Transform** limpia, enriquece y da forma a los datos (eliminación de duplicados, normalización de formatos, joins entre fuentes). **Load** los deposita en el data warehouse o data lake para consulta. En el Modern Data Stack de 2026, el patrón dominante es ELT (Extract-Load-Transform), donde la transformación ocurre dentro del warehouse usando herramientas como dbt, aprovechando la potencia computacional de plataformas como BigQuery o Snowflake.

### EDA (Exploratory Data Analysis / Análisis Exploratorio de Datos)
La primera fase de cualquier proyecto de datos. El objetivo es entender la estructura, distribución y calidad del dataset antes de cualquier análisis formal. Con IA, el EDA que antes tomaba horas (contar nulos, calcular estadísticas descriptivas, detectar outliers, analizar distribuciones) ahora puede completarse en minutos: basta con cargar el archivo en Claude y pedir un reporte exploratorio completo. Las herramientas como PandasAI añaden una interfaz de lenguaje natural directamente sobre DataFrames de Python, permitiendo hacer preguntas como "¿cuál es el producto con mayor varianza en ventas por trimestre?"

### Text-to-SQL
Tecnología que convierte preguntas en lenguaje natural en consultas SQL ejecutables. En 2026, los mejores modelos especializados como SQLCoder-70b alcanzan el 96% de precisión en benchmarks estándar, superando a GPT-4 en categorías de consulta complejas. El diferenciador crítico es la **conciencia de esquema**: las herramientas que se conectan directamente a la base de datos (leyendo nombres reales de tablas y columnas) generan consultas significativamente más precisas que las que adivinan la estructura. Herramientas como Vanna.ai, DBHub y el MCP de Claude para bases de datos son los referentes del momento.

### Data Pipeline
Flujo automatizado de datos desde la fuente hasta el destino analítico. Un pipeline robusto incluye: ingesta (Airbyte), orquestación (Apache Airflow como DAG en Python), transformación (dbt), almacenamiento (warehouse), y servicio (BI o API). La IA se integra en múltiples puntos del pipeline: detección automática de anomalías en los datos, limpieza inteligente de registros inconsistentes, y generación de alertas cuando una métrica sale de su rango esperado.

### Visualización de datos
El arte de convertir números en decisiones. En 2026 las herramientas de BI tienen capas de IA que generan automáticamente narrativas sobre tendencias, detectan anomalías visualmente, y en el caso de Tableau AI, generan insights interpretativos sobre los gráficos. La elección de la herramienta correcta depende del contexto: Looker Studio para equipos no técnicos que necesitan dashboards conectados a Google ecosystem; Metabase para equipos técnicos que quieren auto-servicio sobre sus propias bases de datos; Tableau o Power BI para organizaciones enterprise con necesidades de gobernanza de datos.

### Big Data vs. Smart Data
El paradigma de "más datos = mejor" ha cedido paso al enfoque de **Smart Data**: priorizar la calidad, relevancia y accionabilidad sobre el volumen. Un dataset de 10,000 transacciones bien limpio y documentado genera más valor que 10 millones de filas ruidosas. La IA actúa como filtro de señal: identifica qué variables realmente predicen el resultado de negocio, elimina el ruido estadístico, y permite que analistas y marketers centren su tiempo en interpretar y actuar, no en limpiar y estructurar.

---

## 🛠️ Stack tecnológico

| Herramienta | Función principal | Precio | URL |
|---|---|---|---|
| **Claude (Anthropic)** | Análisis conversacional de CSV/Excel, EDA automático, text-to-SQL, interpretación de resultados, generación de código Python para datos | Freemium | [claude.ai](https://claude.ai) |
| **Python + Pandas** | Manipulación y análisis de datos estructurados; con PandasAI se añade interfaz de lenguaje natural sobre DataFrames; Polars como alternativa de alto rendimiento para datasets >10 GB | Gratis | [pandas.pydata.org](https://pandas.pydata.org) |
| **Google BigQuery** | Data warehouse serverless con IA integrada vía Gemini (BigQuery Gemini); consultas SQL a escala sobre petabytes sin gestión de infraestructura; modelo de pago por consulta | Freemium | [cloud.google.com/bigquery](https://cloud.google.com/bigquery) |
| **Snowflake** | Data warehouse en la nube con Snowflake Cortex para modelos de IA y embeddings sobre datos gobernados; modelo de créditos por compute | Pago | [snowflake.com](https://www.snowflake.com) |
| **Databricks** | Lakehouse unificado con Mosaic AI para entrenamiento, fine-tuning y serving de modelos; soporta Claude, GPT y modelos open-source vía Foundation Model APIs | Pago | [databricks.com](https://www.databricks.com) |
| **Looker Studio** | BI gratuito de Google; dashboards conectados a BigQuery, Sheets y 800+ fuentes; ideal para equipos de marketing analítico | Gratis | [lookerstudio.google.com](https://lookerstudio.google.com) |
| **Metabase** | BI open-source con self-service SQL; permite a analistas no técnicos explorar bases de datos propias mediante preguntas en lenguaje natural | Freemium | [metabase.com](https://www.metabase.com) |
| **Apache Airflow** | Orquestación de pipelines de datos como DAGs en Python; estándar de la industria para scheduling, monitoreo y alertas de workflows de datos | Gratis | [airflow.apache.org](https://airflow.apache.org) |
| **dbt (data build tool)** | Transformación de datos dentro del warehouse usando SQL con control de versiones, tests y documentación automática; el estándar moderno para la capa Transform en ELT | Freemium | [getdbt.com](https://www.getdbt.com) |
| **Airbyte** | Ingesta y sincronización de datos con +350 conectores pre-construidos; puede orquestarse con Airflow para pipelines productivos | Freemium | [airbyte.com](https://airbyte.com) |

---

## 📋 Contenido — Módulos de la clase

### Módulo 1: EDA con IA — del CSV al insight en minutos (20 min)

El Análisis Exploratorio de Datos es el punto de partida de cualquier proyecto analítico, y es donde la IA genera el mayor ahorro de tiempo inmediato.

**El flujo tradicional vs. el flujo con IA:**

Sin IA, un EDA básico en Python requiere: cargar el dataset, revisar `.info()` y `.describe()`, calcular nulos por columna, identificar outliers con boxplots, analizar correlaciones con una heatmap, y documentar los hallazgos. Tiempo estimado: 2–4 horas para un analista experimentado.

Con Claude + Python: cargas el CSV, escribes "Haz un análisis exploratorio completo de este dataset: estadísticas descriptivas, valores nulos, distribuciones, outliers, y los 5 insights más relevantes para un equipo de marketing", y en 3 minutos tienes un reporte estructurado con código reproducible incluido.

**Qué analizar en un EDA de ventas/marketing:**
- **Completitud:** ¿cuántos registros tienen campos vacíos en variables clave (email, monto, fecha)?
- **Distribuciones:** ¿los montos de venta siguen una distribución normal o hay colas largas? ¿Hay meses con ventas anómalamente altas o bajas?
- **Segmentación natural:** ¿se pueden identificar clusters de clientes por comportamiento de compra?
- **Correlaciones accionables:** ¿qué variables del cliente predicen mejor el ticket promedio o la frecuencia de compra?
- **Calidad de datos:** ¿hay duplicados? ¿Fechas inconsistentes? ¿Categorías con variantes del mismo valor (ej: "CDMX", "Ciudad de Mexico", "cdmx")?

**Herramientas para EDA asistido por IA:**
- **Claude con archivo adjunto:** el más accesible para equipos no técnicos.
- **PandasAI:** corre en Python, permite hacer preguntas sobre DataFrames en español o inglés.
- **Jupyter AI:** integra asistentes de IA directamente en el entorno de notebooks.
- **Polars:** para datasets >10 GB donde pandas se vuelve lento, con "lazy evaluation" que optimiza las consultas antes de ejecutarlas.

---

### Módulo 2: Text-to-SQL — hablar con la base de datos (20 min)

Text-to-SQL democratiza el acceso a los datos: cualquier persona del equipo puede obtener respuestas de la base de datos sin saber escribir SQL.

**Cómo funciona:**
1. El usuario escribe una pregunta en lenguaje natural: "¿Cuáles fueron los 10 productos con mayor margen en Q2 2026 en la región norte?"
2. El modelo de IA lee el esquema de la base de datos (nombres de tablas, columnas, relaciones)
3. Genera la consulta SQL optimizada
4. La ejecuta y presenta los resultados en lenguaje natural + tabla

**Estado del arte en 2026:**
- Modelos especializados como SQLCoder-70b alcanzan **96% de precisión** en benchmarks, superando a GPT-4 en la mayoría de categorías de consulta
- Para queries simples (SELECT, WHERE, ORDER BY, GROUP BY), la precisión supera el **99%**
- El mayor desafío sigue siendo las queries complejas con ratios, subconsultas anidadas y lógica de ventanas, donde la precisión cae al 85–91%
- La clave del éxito: dar al modelo acceso al esquema real de la BD, no pedirle que adivine

**Top herramientas de text-to-SQL:**
- **Claude + MCP para bases de datos:** Claude conectado directamente a PostgreSQL, BigQuery o Snowflake vía Model Context Protocol; el modelo lee el esquema en tiempo real
- **Vanna.ai 2.0:** agente SQL personalizable que aprende del historial de consultas de tu organización; soporta entrenamiento con queries históricas para mejorar la precisión en tu dominio específico
- **DBHub:** servidor MCP universal que conecta cualquier cliente de IA (Claude, Cursor, VS Code) con bases de datos mediante text-to-SQL
- **BigQuery Gemini:** interfaz de lenguaje natural integrada en la consola de BigQuery para analistas de Google Cloud
- **Snowflake Cortex Analyst:** text-to-SQL nativo en Snowflake con conciencia del modelo semántico de la organización

**Consideraciones de seguridad:**
El UK's NCSC publicó en 2025 guías específicas sobre seguridad en sistemas NL2SQL. Los puntos críticos: validar los queries generados antes de ejecutarlos en producción, usar roles de base de datos con permisos de solo lectura para el agente de IA, y auditar regularmente las consultas generadas.

---

### Módulo 3: Pipelines de datos con IA — del dato crudo a la métrica de negocio (25 min)

Un pipeline de datos productivo transforma datos crudos en métricas confiables y actualizadas automáticamente. La IA añade inteligencia en cada etapa del flujo.

**Arquitectura del Modern Data Stack (2026):**

```
[Fuentes] → [Ingesta] → [Warehouse] → [Transformación] → [BI / IA]
APIs          Airbyte     BigQuery      dbt               Looker Studio
CRM           Fivetran    Snowflake     SQL + Python      Metabase
Sheets        n8n         Databricks    Claude            Tableau
```

**Orquestación con Apache Airflow:**
Airflow organiza el pipeline como un DAG (Directed Acyclic Graph) escrito en Python. Un DAG típico para un reporte de ventas semanal:
1. **Task 1:** Extracción de ventas del CRM vía API (Airbyte trigger)
2. **Task 2:** Validación de calidad de datos (Great Expectations o dbt tests)
3. **Task 3:** Transformación con dbt (joins, métricas calculadas, agregaciones)
4. **Task 4:** Actualización del dashboard en Looker Studio
5. **Task 5:** Envío de reporte de anomalías detectadas por IA al equipo de datos

**IA en el pipeline:**
- **Detección de anomalías:** modelos de IA monitorean métricas clave (GMV, churn rate, CAC) y alertan cuando un valor sale de su rango estadístico normal. Esto reemplaza los umbrales fijos manuales.
- **Limpieza inteligente:** en la etapa Transform, Claude puede generar el código dbt para estandarizar datos inconsistentes basándose en una descripción del problema en lenguaje natural.
- **Documentación automática:** dbt + Claude genera descripciones de columnas y modelos automáticamente, manteniendo el catálogo de datos actualizado sin esfuerzo manual.

**Para equipos de marketing analítico:**
El pipeline más común conecta el CRM (HubSpot, Salesforce) + las plataformas de ads (Meta, Google) + la base de datos de clientes hacia un warehouse central, donde dbt calcula métricas consolidadas (LTV, CAC, ROAS por canal, retention cohorts) que alimentan un dashboard en Looker Studio o Metabase accesible para todo el equipo.

---

### Módulo 4: Visualización e insights — convertir datos en decisiones (25 min)

El dato sin contexto no tiene valor. La visualización cierra el ciclo: convierte los números del warehouse en decisiones de negocio para personas que no necesariamente son técnicas.

**Los tres niveles de visualización:**

**Nivel 1 — Exploración (para analistas):** Jupyter notebooks con matplotlib, seaborn o Plotly. Claude genera el código de visualización a partir de la descripción del gráfico deseado. Ideal para análisis ad-hoc y descubrimiento.

**Nivel 2 — Monitoreo (para equipos):** Dashboards en Metabase o Looker Studio actualizados automáticamente. El equipo de marketing ve en tiempo real las métricas de sus campañas sin necesidad de pedir un reporte al área de datos. Metabase permite a usuarios no técnicos explorar los datos con preguntas en lenguaje natural.

**Nivel 3 — Comunicación (para stakeholders):** Presentaciones de datos con narrativa, generadas con apoyo de Claude. El analista extrae los datos, Claude construye la historia: "Este mes el canal de email tuvo el ROAS más alto (4.2x) pero alcanzó solo al 18% de la base activa. La oportunidad está en ampliar la segmentación manteniendo la personalización."

**Principios de visualización efectiva con datos de marketing:**
- Un gráfico = una pregunta de negocio. No intentar responder cuatro preguntas en un solo visual.
- Elegir el gráfico correcto: líneas de tiempo para tendencias, barras para comparaciones, scatter para correlaciones, mapas para datos geográficos.
- Contextualizar siempre con benchmarks: una tasa de conversión del 2.3% es buena o mala dependiendo del canal, la industria y el período anterior.
- La IA (Tableau AI, BigQuery Gemini) puede generar automáticamente interpretaciones en texto de los gráficos, pero el analista debe validar que la narrativa tenga sentido de negocio.

**Looker Studio vs. Metabase — cuándo usar cada uno:**

| Criterio | Looker Studio | Metabase |
|---|---|---|
| Costo | Gratis | Freemium (self-hosted gratis) |
| Mejor para | Equipos de marketing, Google ecosystem | Equipos técnicos, self-service SQL |
| Conexión a BigQuery | Nativa y sin costo | Requiere configuración |
| Text-to-SQL integrado | Sí (vía Gemini) | Sí (Metabase AI) |
| Gobernanza de datos | Básica | Avanzada en Cloud |

---

## 💪 Ejercicio práctico

### Subir un dataset de ventas y obtener insights accionables con Claude

**Objetivo:** En 30 minutos, convertir un archivo de ventas crudo en un reporte de insights con recomendaciones de acción para el equipo de marketing.

**Paso 1 — Preparar el dataset (5 min)**

Usa tu propio archivo de ventas o descarga este dataset de ejemplo: [Sample Sales Data en Kaggle](https://www.kaggle.com/datasets/kyanyoga/sample-sales-data). Asegúrate de que tenga al menos: fecha, producto/categoría, monto, canal de venta, y alguna dimensión geográfica o de cliente.

**Paso 2 — EDA inicial con Claude (10 min)**

Abre [claude.ai](https://claude.ai), adjunta el CSV y usa este prompt:

```
Eres un analista de datos senior especializado en marketing analítico. Analiza este dataset de ventas y genera:

1. RESUMEN EJECUTIVO del dataset: cuántos registros, período cubierto, variables disponibles, calidad de los datos (% nulos por columna, duplicados detectados).

2. TOP 5 INSIGHTS: los hallazgos más relevantes para un equipo de marketing. Para cada insight incluye: el dato concreto, el contexto que lo hace relevante, y una pregunta de seguimiento que valdría la pena investigar.

3. ALERTAS DE CALIDAD: cualquier problema en los datos que pueda distorsionar el análisis (registros sospechosos, outliers extremos, inconsistencias en categorías).

4. CÓDIGO PYTHON: el código pandas para reproducir el análisis más importante que encontraste.

Responde en español. Sé específico con números, no generalices.
```

**Paso 3 — Análisis profundo por segmento (10 min)**

Con base en los insights iniciales, profundiza con preguntas específicas:

```
Basándote en el dataset que analizaste:

- ¿Qué segmento de clientes tiene el mayor LTV potencial? Justifica con los datos.
- ¿Hay algún patrón estacional relevante que un equipo de marketing debería anticipar?
- ¿Cuál es el canal de venta con mejor rentabilidad por unidad vendida?
- Si tuvieras que recomendar en qué categoría de producto doblar la inversión de marketing, ¿cuál sería y por qué?
```

**Paso 4 — Recomendaciones accionables (5 min)**

```
Convierte los insights anteriores en un plan de acción concreto para el equipo de marketing:
- 3 acciones que se pueden implementar esta semana
- 2 experimentos A/B que valdría la pena correr el próximo mes
- 1 métrica nueva que el equipo debería empezar a monitorear

Formato: lista de viñetas, lenguaje directo, sin jerga técnica.
```

**Reflexión grupal:** Cada participante comparte el insight más sorprendente de su dataset y la acción que planea tomar basándose en él.

---

## 📚 Recursos recomendados

### Lecturas y guías esenciales
- ["Top AI Tools for Automating Python Data Analysis Pipelines in 2026"](https://ai.exoticaitsolutions.com/blog/top-ai-tools-for-automating-python-data-analysis-pipelines-in-2026/) — Exotica IT Solutions
- ["Natural Language to SQL: The Complete 2026 Guide"](https://www.blazesql.com/blog/natural-language-to-sql) — BlazeSQL
- ["Text2SQL Complete Guide: Tools, Accuracy, Real Examples"](https://builder.ai2sql.io/blog/text-to-sql-complete-guide) — AI2SQL
- ["The Essential Modern Data Stack Tools for 2026"](https://airbyte.com/top-etl-tools-for-sources/the-essential-modern-data-stack-tools) — Airbyte
- ["Snowflake vs Databricks vs BigQuery: A Guide for IT Leaders in 2026"](https://technologymatch.com/blog/snowflake-vs-databricks-vs-bigquery-a-guide-for-it-leaders-in-2026) — TechnologyMatch
- ["Claude in Excel: AI Spreadsheet Automation Guide 2026"](https://orbilontech.com/claude-in-excel-ai-spreadsheet-automation-2026/) — Orbilontech

### Herramientas para explorar esta semana
- [Claude.ai](https://claude.ai) — sube un CSV y empieza el EDA hoy. Plan Free disponible.
- [Looker Studio](https://lookerstudio.google.com) — dashboards gratis, conectado a Google Sheets en 5 minutos
- [Metabase](https://www.metabase.com) — self-hosted gratuito, o nube desde $500/mes para equipos
- [PandasAI](https://pandas-ai.com) — lenguaje natural sobre DataFrames de Python. Open source.
- [Vanna.ai](https://vanna.ai) — agente text-to-SQL personalizable. Plan gratuito disponible.
- [dbt Cloud](https://www.getdbt.com) — cuenta Developer gratuita para proyectos individuales
- [Apache Airflow](https://airflow.apache.org) — open source; [Astronomer](https://www.astronomer.io) para versión gestionada

### Datos para citar
- Los modelos text-to-SQL especializados alcanzan **96% de precisión** en benchmarks estándar (SQLCoder-70b, 2025)
- Para queries simples, la precisión de text-to-SQL supera el **99%** en producción (BlazeSQL, 2026)
- El Modern Data Stack estándar de 2026: Airbyte → Snowflake/BigQuery → dbt → Airflow → Looker/Metabase
- PandasAI, Polars y Dask son los tres pilares del análisis de datos en Python para 2026
- BigQuery, Snowflake y Databricks han convergido en soporte de SQL, Python y AI workloads; el diferenciador es el approach al ciclo de vida de modelos de IA

---

## 🔗 Acciones post-clase

### Esta semana (compromiso mínimo)
- [ ] Subir un dataset real de tu empresa a Claude y pedir un EDA completo; documentar los 3 insights más útiles que encontró
- [ ] Probar Looker Studio conectado a Google Sheets con datos de tus últimas campañas
- [ ] Instalar PandasAI en Python y hacer 5 preguntas sobre un dataset propio en lenguaje natural

### Este mes
- [ ] Definir las 5 métricas de negocio más importantes para tu equipo y asegurarte de que cada una tiene una fuente de datos confiable y actualizada automáticamente
- [ ] Probar Vanna.ai o un text-to-SQL sobre la base de datos de tu organización y documentar la precisión real en queries de tu dominio
- [ ] Diseñar el esquema del pipeline de datos ideal para tu equipo: fuentes → warehouse → transformaciones → dashboard; identificar qué parte falta o está sin automatizar

### Este trimestre
- [ ] Implementar un pipeline básico con al menos tres etapas automatizadas (ingesta + transformación + dashboard)
- [ ] Capacitar a al menos 2 personas no técnicas del equipo para que puedan obtener datos del warehouse por su cuenta usando text-to-SQL o Metabase
- [ ] Establecer un proceso de calidad de datos: definir qué tests correr automáticamente, qué alertas disparar, y quién es el responsable de resolverlas

---

*Clase 18 — Programa IA Aplicada · Tier 5 · Datos*
*Presentado por Lili · Viernes 21 agosto 2026*
