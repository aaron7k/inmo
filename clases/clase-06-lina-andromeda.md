# 🤖 IA de Meta (Andromeda)

**Presentador:** Lina | **Fecha:** Viernes 26 junio 2026 | **Audiencia:** Paid media | **Tier:** 2 · Marketing track | **Duración:** 90 min

---

## 🎯 Objetivos de la clase

1. **Entender qué es Andromeda** y cómo reemplazó el sistema tradicional de subasta de anuncios en Meta, cambiando fundamentalmente la lógica de entrega publicitaria.
2. **Comprender el rol de GEM (Generative Ads Model)** como el "cerebro" de ranking que decide qué anuncio se muestra a cada usuario en el momento correcto.
3. **Dominar Advantage+ Shopping Campaigns y Advantage+ Audience** como las herramientas de automatización más potentes del ecosistema Meta Ads.
4. **Aprender a usar las herramientas de IA generativa de Meta** para crear variaciones de copy, generar imágenes, expandir videos y construir creatividades en escala.
5. **Optimizar campañas con las nuevas señales de datos**: Conversions API (CAPI) de un clic, Meta Pixel enriquecido con IA y el Opportunity Score (0–100).

---

## 🔑 Conceptos clave

| Término | Definición |
|---|---|
| **Andromeda** | Motor de recuperación publicitaria (retrieval engine) de Meta lanzado en 2024. En vez de partir de la audiencia definida por el anunciante, evalúa millones de anuncios y predice cuáles son más relevantes para cada usuario antes de entrar al proceso de subasta. |
| **GEM (Generative Ads Model)** | Modelo fundacional generativo de Meta que actúa como el sistema de ranking final. Una vez que Andromeda genera la lista corta de candidatos, GEM puntúa cada anuncio y determina cuál se muestra. Es el mayor modelo de recomendación de la industria, entrenado a escala de LLM. |
| **Lattice** | Sistema de ranking intermedio de Meta que opera entre Andromeda (retrieval) y la subasta final. Entregó mejoras del 10% en métricas clave y 6% en conversiones según el equipo de ingeniería de Meta. |
| **Advantage+ Shopping Campaigns (ASC)** | Campañas de e-commerce totalmente automatizadas donde Meta controla la segmentación, la distribución del presupuesto y la optimización creativa. Requieren mínima configuración manual y funcionan mejor con catálogos ricos y señales de datos sólidas. |
| **Advantage+ Audience** | Opción de segmentación que permite a Meta expandir automáticamente la audiencia más allá de los parámetros manuales definidos por el anunciante, basándose en comportamientos y señales de conversión del píxel y CAPI. |
| **Advantage+ Creative** | Suite de herramientas de IA generativa que automatiza la optimización y generación de creatividades: expansión de imágenes, generación de fondos, image-to-video, variaciones de texto y superposición de overlays. |
| **Conversions API (CAPI)** | Integración server-side que envía datos de conversión directamente desde los servidores del anunciante a Meta, sin depender solo del píxel del navegador. Desde abril 2026 tiene configuración de un clic sin necesidad de desarrollador. |
| **Opportunity Score** | Puntuación de 0 a 100 dentro de Ads Manager que evalúa la calidad de configuración de una campaña en cuatro dimensiones: variedad creativa, calidad de señales (Pixel + CAPI), amplitud de audiencia y precisión del evento de conversión. |
| **Entity ID** | Identificador único que Andromeda asigna a cada creatividad. Creatividades genuinamente distintas reciben diferentes Entity IDs, lo que les da más oportunidades de ser recuperadas para diferentes segmentos de usuarios. |
| **Retrieval** | Primera fase del pipeline de entrega de anuncios: Andromeda escanea decenas de millones de anuncios y selecciona ~1.000 candidatos relevantes para un usuario específico. |
| **Signal Quality** | Calidad de las señales de datos enviadas a Meta (eventos del pixel, CAPI, coincidencias de eventos): a mayor calidad y volumen de señales, mejor puede optimizar el algoritmo. |

---

## 🛠️ Stack tecnológico

| Herramienta | Para qué sirve | Plan | URL |
|---|---|---|---|
| **Meta Ads Manager** | Plataforma central para crear, configurar y analizar campañas en Facebook, Instagram, Messenger y Audience Network. Incluye el Opportunity Score y acceso a todas las funciones Advantage+. | Gratis (pagas solo por anuncios) | [business.facebook.com](https://business.facebook.com/adsmanager) |
| **Advantage+ Shopping** | Tipo de campaña totalmente automatizada para e-commerce. Meta gestiona targeting, presupuesto y creativas automáticamente con machine learning. | Incluido en Meta Ads | [facebook.com/business/ads](https://www.facebook.com/business/ads/meta-advantage/advantage-plus-shopping-ads) |
| **Advantage+ Audience** | Herramienta de segmentación inteligente: Meta expande tu audiencia sugerida de forma automática usando señales de comportamiento y conversión. | Incluido en Meta Ads | [facebook.com/business](https://www.facebook.com/business/ads/meta-advantage) |
| **Meta Business Suite** | Panel unificado para gestionar páginas de Facebook e Instagram, mensajes, publicaciones orgánicas y pagadas desde un solo lugar. | Gratis | [business.facebook.com](https://business.facebook.com) |
| **Conversions API (CAPI)** | Tracking server-side que envía datos de conversión directamente a Meta sin depender del pixel. Desde abril 2026 disponible en un clic, sin desarrollador. Reduce CPA un 17.8% en promedio. | Gratis | [developers.facebook.com](https://developers.facebook.com/docs/marketing-api/conversions-api) |
| **Meta Pixel** | Script JavaScript que registra eventos en el sitio web (páginas vistas, añadir al carrito, compras). En 2026 incluye enriquecimiento automático con IA: extrae nombre, precio, disponibilidad de productos sin código adicional. | Gratis | [facebook.com/business/tools](https://www.facebook.com/business/tools/meta-pixel) |
| **Meta AI (Advantage+ Creative)** | Suite de IA generativa integrada en Ads Manager: genera fondos, expande imágenes, crea videos desde fotos, genera variaciones de texto (hasta 5 headlines + 5 primary texts) con Meta Llama 3. | Incluido en Meta Ads | [facebook.com/business/ads/creative](https://www.facebook.com/business/ads/meta-advantage-plus/creative) |
| **Events Manager** | Herramienta para configurar, verificar y auditar el Pixel y el CAPI. Muestra calidad de señales, cobertura de eventos y deduplicación. Clave para optimizar el Opportunity Score. | Gratis | [business.facebook.com/events_manager](https://business.facebook.com/events_manager) |
| **Meta Blueprint** | Plataforma oficial de aprendizaje de Meta: +90 cursos gratuitos sobre Ads Manager, Advantage+, CAPI y estrategia de campañas. Incluye certificaciones profesionales. | Gratis (cursos) / $99–$150 (examen de certificación) | [facebook.com/business/learn](https://www.facebook.com/business/learn) |
| **Meta for Business Blog** | Fuente oficial de actualizaciones de producto, casos de estudio y mejores prácticas. Primer lugar para conocer nuevas funciones antes de que lleguen a terceros. | Gratis | [facebook.com/business/news](https://www.facebook.com/business/news) |

---

## 📋 Contenido de la clase

### Módulo 1: ¿Qué es Andromeda? El nuevo motor de IA de Meta (~20 min)

**El fin de la segmentación tradicional — cómo Meta ahora encuentra a tu cliente**

Meta desplegó Andromeda en 2024 y completó su lanzamiento global en octubre de 2025, afectando al 100% de las cuentas publicitarias. Este cambio es el más importante en la historia de Meta Ads porque invierte la lógica fundamental: antes el anunciante definía a quién mostrar el anuncio; ahora es Andromeda quien decide qué anuncios son relevantes para cada usuario.

**El pipeline de tres etapas:**

1. **Retrieval (Andromeda):** Escanea decenas de millones de anuncios activos y selecciona ~1.000 candidatos para cada usuario en milisegundos. Usa redes neuronales profundas corriendo en hardware NVIDIA Grace Hopper y Meta MTIA. Evalúa el contenido creativo, historial de engagement y comportamiento del usuario. Esto representa una complejidad de modelos 10.000x mayor que el sistema anterior.

2. **Ranking intermedio (Lattice):** Toma los ~1.000 candidatos de Andromeda y los ordena por probabilidad de generar el objetivo de conversión. Lattice entregó mejoras del 10% en métricas clave y 6% en conversiones según Meta.

3. **Scoring final (GEM):** El Generative Ads Model, entrenado como un LLM a escala masiva en miles de GPUs, asigna el puntaje definitivo a cada anuncio candidato. GEM aprende de interacciones orgánicas y pagadas en todo el ecosistema (texto, imágenes, audio, video) y es 4x más eficiente que el sistema de ranking anterior para impulsar el rendimiento.

**Implicación clave para el paid media:** Andromeda premia la diversidad creativa. Cada creatividad genuinamente distinta recibe un Entity ID único y más oportunidades de ser recuperada para diferentes segmentos de usuarios. La recomendación actual de la industria es tener entre 15 y 20 creatividades distintas por ad set (vs. las 3–6 anteriores).

**Advertencia:** Durante el rollout de Andromeda, un análisis de 3.014 anunciantes mostró una caída promedio del 7% en ROAS (de ~9x a ~8.4x). Esta volatilidad es parte de la transición; los anunciantes que adaptaron su estrategia creativa recuperaron y superaron el rendimiento previo.

---

### Módulo 2: Advantage+ — Automatización inteligente en la práctica (~25 min)

**De la configuración manual al machine learning: entendiendo qué automatizar y qué controlar**

**Advantage+ Shopping Campaigns (ASC):**

Meta gestiona automáticamente targeting, distribución del presupuesto entre prospectos y retargeting, y optimización creativa. Los resultados reportados por Meta:
- 22% mayor ROAS vs. campañas manuales equivalentes
- $4.52 de revenue por cada $1 invertido (Q1 2025, Meta Earnings)
- 70% de crecimiento en adopción año a año (Q4 2024)
- 17% menor CPA vs. campañas manuales para marcas con catálogos maduros

**Cuándo funciona mejor ASC:**
- Marcas con catálogos de +10 SKUs
- Historial de conversiones sólido (mínimo 50 eventos de compra por semana)
- Píxel y/o CAPI correctamente configurados
- Presupuesto de aprendizaje disponible (CPAs 20–50% más altos durante las primeras 2 semanas)

**Riesgo a monitorear — Audience Depletion Spiral:** Sin la configuración correcta, ASC tiende a gastar el presupuesto en retargeting de audiencias ya convertidas, generando buen ROAS pero bajo crecimiento incremental. Solución: usar el parámetro de porcentaje de presupuesto para nuevos clientes (new customer budget cap).

**Advantage+ Audience:**

Reemplaza al targeting de intereses detallado como estrategia principal. Meta usa señales del Pixel, CAPI y comportamiento orgánico para expandir automáticamente más allá de la audiencia sugerida. Resultados reportados:
- 9% menor CPA en promedio vs. targeting manual
- Hasta 32% de reducción de CPA en verticales de e-commerce
- CTR 11–15% superior al targeting por intereses

**Opportunity Score (0–100):**

Métrica nueva dentro de Ads Manager que evalúa la calidad de configuración en 4 dimensiones:
- **Variedad creativa**: Diversidad real de formatos, mensajes y visuales
- **Calidad de señales**: Cobertura y precisión del Pixel + CAPI
- **Amplitud de audiencia**: Nivel de apertura de la segmentación
- **Precisión del evento de conversión**: Que el evento optimizado coincida con el objetivo real del negocio

Scores 90–100 = configuración excelente, máxima eficiencia de entrega. Scores 60–89 = funcional pero con brechas optimizables. Anunciantes con scores altos reportan menor CPA y delivery más estable.

---

### Módulo 3: Creación de copy e imágenes con IA generativa de Meta (~20 min)

**De una creatividad a cien variaciones: el poder de Advantage+ Creative**

En Cannes Lions 2025, Meta presentó 11 nuevas funciones de IA para publicidad. En mayo 2026, más de 4 millones de anunciantes usan activamente las herramientas de IA generativa de Meta.

**Generación y variación de texto (Meta Llama 3):**
- Genera hasta 5 variaciones de headline + 5 de primary text desde tu copy original
- Adapta tono de marca usando campañas previas como referencia
- Traduce automáticamente para llegar a audiencias en otros idiomas
- Estrategia clave: dar al sistema suficiente variedad para optimizar él mismo; no buscar que tú elijas el ganador

**Herramientas visuales de IA generativa:**
- **Background Generation:** Crea fondos nuevos alrededor de imágenes de producto basados en el prompt del anunciante o inferidos del contexto de la audiencia
- **Image Expansion:** Extiende la imagen para adaptarla a múltiples formatos (1:1, 4:5, 9:16) sin cortar elementos
- **Text Overlays:** Superpone automáticamente textos promocionales ("20% OFF") en el creativo según la sensibilidad de cada usuario al precio
- **Image-to-Video Generator:** Convierte hasta 20 fotos de producto en videos multi-escena con animaciones, texto animado y música. Incluye transiciones cinematográficas y dynamic text overlays desde tu copy
- **Video Expansion:** Reformatea videos existentes a 9:16 vertical para Reels, generando nuevos píxeles en cada frame
- **Branded assets:** Integración de logo, tipografías y paleta de color de la marca en las generaciones automáticas

**Resultados del uso de Advantage+ Creative enhancements:**
- 4% menor CPA promedio en campañas optimizadas hacia link clicks y conversiones
- Reducción significativa en tiempo de producción creativa (de días a minutos para variaciones)

**Workflow recomendado para paid media:**
1. Cargar 1 imagen hero + 1 video base de alta calidad
2. Activar Advantage+ Creative para expansiones automáticas
3. Escribir 3 variaciones de copy base; dejar que Meta genere las demás
4. Revisar que los brand assets estén configurados para mantener coherencia visual
5. Monitorear por 7–14 días antes de hacer cambios (respetar la fase de aprendizaje)

---

### Módulo 4: Optimización con datos — Pixel, CAPI y Signals (~15 min)

**El combustible del algoritmo: sin señales, no hay optimización**

El rendimiento de Andromeda, GEM y Advantage+ depende directamente de la calidad y cantidad de señales de datos que le envíes a Meta. Sin buenos datos, el sistema no puede aprender.

**Meta Pixel + CAPI (abril 2026):**

Meta anunció el 15 de abril de 2026 dos actualizaciones mayores:

1. **Meta Pixel con IA enriquecida:** El pixel ahora extrae automáticamente información de producto (nombre, precio, disponibilidad, moneda) y del negocio (nombre, ubicación) desde el contenido de la página, sin necesidad de código adicional. Los usuarios existentes reciben notificación con 30 días de ventana para revisar antes de activación.

2. **CAPI de un clic (sin desarrollador):** Configuración server-side gratuita que crea una conexión paralela al pixel del navegador con deduplicación automática. No requiere programación ni mantenimiento continuo. Impacto: 17.8% menor CPA en promedio para anunciantes que usan CAPI para eventos web.

**Jerarquía de señales para el algoritmo:**
1. Eventos de compra (Purchase) — mayor valor
2. Inicio de pago (InitiateCheckout)
3. Añadir al carrito (AddToCart)
4. Visitas a páginas de producto (ViewContent)
5. Leads con datos de contacto completos

**Checklist de señales óptimas:**
- [ ] Meta Pixel instalado y verificado en Events Manager
- [ ] CAPI configurado (ahora con un clic) para reducir pérdidas por iOS/adblockers
- [ ] Event Match Quality Score ≥ 7/10 en Events Manager
- [ ] Mínimo 50 eventos de conversión por semana por campaña
- [ ] Exclusiones de audiencias correctamente configuradas (clientes actuales vs. prospectos)

**Diagnóstico con el Opportunity Score:**
Navegar a Account Overview en Ads Manager → revisar el score global y por campaña → atender las recomendaciones de mayor impacto primero (señales y creatividades antes que audiencia).

---

## 💪 Ejercicio práctico

**"Lanzar una campaña Advantage+ con IA de principio a fin"** (30 min)

### Contexto
Tienes un cliente de e-commerce (categoría libre) con catálogo activo, Pixel instalado y un presupuesto de prueba. Tu objetivo: configurar una campaña Advantage+ Shopping usando las herramientas de IA de Meta y dejarla lista para aprendizaje.

### Pasos del ejercicio

**Parte A – Configuración de la campaña (15 min)**
1. Abrir Meta Ads Manager → Crear campaña → Seleccionar **Sales** como objetivo
2. Elegir **Advantage+ Shopping Campaign** como tipo
3. Configurar presupuesto diario y ventana de atribución (recomendado: 7-day click, 1-day view)
4. Activar **Advantage+ Audience** en el nivel de ad set
5. Revisar el **Opportunity Score** inicial y anotar el punto de partida

**Parte B – Creatividades con IA (10 min)**
1. Subir 1 imagen de producto de alta calidad al nivel de anuncio
2. Activar **Advantage+ Creative** → encender Background Generation y Image Expansion
3. Escribir 2 variaciones de primary text y 2 de headline
4. Usar el botón **"Generate more"** para que Meta Llama 3 genere variaciones adicionales
5. Revisar las variaciones generadas y activar el image-to-video si hay múltiples fotos

**Parte C – Validación y configuración de señales (5 min)**
1. Verificar en **Events Manager** que el Pixel está activo y recibiendo eventos
2. Revisar el **Event Match Quality Score** — debe ser ≥ 7/10
3. Si el score está bajo: revisar configuración de CAPI (activar one-click si no está)
4. Confirmar que el evento de optimización (Purchase) tiene suficiente volumen histórico

### Preguntas de reflexión para discutir
- ¿En qué se diferencia esta configuración de una campaña manual tradicional?
- ¿Qué información necesitaría el algoritmo para optimizar mejor?
- ¿Cómo cambiaría tu estrategia de creatividades sabiendo que Andromeda favorece la diversidad?

---

## 📚 Recursos de aprendizaje

### Fuentes oficiales de Meta
- **Meta Blueprint** — Cursos gratuitos sobre Advantage+, CAPI y Ads Manager: [facebook.com/business/learn](https://www.facebook.com/business/learn)
- **Meta for Business Blog** — Actualizaciones oficiales de producto: [facebook.com/business/news](https://www.facebook.com/business/news)
- **Engineering at Meta** — Artículo técnico sobre GEM (noviembre 2025): [engineering.fb.com](https://engineering.fb.com/2025/11/10/ml-applications/metas-generative-ads-model-gem-the-central-brain-accelerating-ads-recommendation-ai-innovation/)
- **Advantage+ Shopping Campaigns (página oficial)**: [facebook.com/business/ads/meta-advantage](https://www.facebook.com/business/ads/meta-advantage/advantage-plus-shopping-ads)

### Lecturas técnicas recomendadas
- **Search Engine Land** — "Inside Meta's AI-driven advertising system: How Andromeda and GEM work together": [searchengineland.com](https://searchengineland.com/meta-ai-driven-advertising-system-andromeda-gem-468020)
- **Social Media Today** — "Meta Unveils New AI Ad Tools, Including Improved Video Generation": [socialmediatoday.com](https://www.socialmediatoday.com/news/meta-announces-ai-ad-tools-video-generation-business-ais/750984/)
- **PPC Land** — "Meta's free one-click Conversions API is now live": [ppc.land](https://ppc.land/metas-free-one-click-conversions-api-is-now-live-no-developer-needed/)

### Herramientas de diagnóstico y análisis
- **Meta Events Manager** — Auditar calidad de señales del Pixel y CAPI: [business.facebook.com/events_manager](https://business.facebook.com/events_manager)
- **Ads Reporting** — Comparar rendimiento Advantage+ vs. manual con desglose por placement y demografía

---

## 🔗 Acciones post-clase

**Esta semana:**
- [ ] Auditar el Opportunity Score de tus cuentas activas en Account Overview de Ads Manager
- [ ] Verificar el Event Match Quality Score en Events Manager — si está por debajo de 7, activar CAPI de un clic
- [ ] Revisar si tus campañas actuales están usando Advantage+ Audience o segmentación manual cerrada

**Próximas 2 semanas:**
- [ ] Crear al menos 1 campaña Advantage+ Shopping de prueba con presupuesto pequeño y compararla vs. tu campaña manual equivalente
- [ ] Testear Advantage+ Creative en al menos un conjunto de anuncios: activar Image Expansion y Background Generation
- [ ] Usar la función de variaciones de texto de Meta para generar 5 headlines y 5 primary texts desde tu copy base

**Aprendizaje continuo:**
- [ ] Completar el curso de Advantage+ en Meta Blueprint (gratuito)
- [ ] Seguir el Meta for Business Blog para actualizaciones de Andromeda y GEM
- [ ] Configurar una alerta de Opportunity Score semanal para detectar brechas antes de que impacten el rendimiento

---

*Clase 06 · Tier 2 · Marketing track · Inmo AI Learning Program 2026*
