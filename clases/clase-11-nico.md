# 🎬 Agentes de producción audiovisual (Runway Gen-4, Kling 3.0, Manus)

**Presentador:** Nico | **Fecha:** Viernes 17 julio 2026 | **Audiencia:** Audiovisual | **Tier:** 3 · Audiovisual | **Duración:** 90 min

---

## 🎯 Objetivos

Al terminar esta clase vas a poder:

1. **Dominar Runway Gen-4 y Gen-4.5** para generar clips cinematográficos con consistencia de personajes, motion brush y control de cámara avanzado.
2. **Usar Kling 3.0** para producir videos de hasta 15 segundos en 4K nativo con audio y lip-sync multilingüe generado directamente desde el prompt.
3. **Orquestar Manus AI como agente de producción** para automatizar flujos completos: brief → storyboard → generación → ensamblado → exportación.
4. **Comparar las plataformas** de forma objetiva y elegir la herramienta correcta según el tipo de proyecto, presupuesto y nivel de control creativo necesario.
5. **Construir un flujo de producción audiovisual con IA** integrando generación de video, audio sintético (ElevenLabs) y edición asistida (CapCut AI).

---

## 🔑 Conceptos clave

### Video generation (text-to-video / image-to-video)
Proceso por el cual un modelo de IA convierte texto o imágenes estáticas en clips de video. Los modelos modernos como Runway Gen-4 y Kling 3.0 generan movimiento coherente, iluminación realista y física de objetos a partir de un prompt escrito.

### Motion control
Capacidad de especificar cómo se mueve la cámara (pan, zoom, dolly, tilt) o los elementos dentro del cuadro. Runway ofrece **Motion Brush** (pintar zonas de movimiento), mientras que Kling 3.0 permite definir movimientos de cámara en lenguaje natural.

### Keyframes
Fotogramas clave que anclan la composición o el estado de un personaje/objeto en un momento específico. Usar imágenes de referencia como keyframes garantiza coherencia visual entre escenas, especialmente en Runway Gen-4 con su sistema de referencias.

### Consistencia de personajes (character consistency)
Uno de los mayores retos de la generación de video con IA. Runway Gen-4 resuelve esto con **reference images**: el modelo mantiene ropa, rasgos y estilo visual del personaje a través de distintos planos, ángulos y condiciones de luz.

### Agentes de producción
Sistemas de IA autónomos —como Manus— que no solo responden preguntas sino que ejecutan tareas completas de extremo a extremo: navegan la web, generan código, crean imágenes y videos, y entregan resultados finales sin intervención humana constante.

### Prompting para video
Escribir prompts efectivos para video es distinto al prompting de imágenes. Se describe: sujeto + acción + plano cinematográfico + iluminación + movimiento de cámara + atmósfera. Ejemplo: *"Close-up of a woman walking through a neon-lit Tokyo street at night, slow dolly forward, cinematic bokeh, golden hour glow"*.

### Multi-shot storyboard
Funcionalidad de Kling 3.0 Omni que permite especificar una secuencia de planos con duración, tamaño de plano, perspectiva y movimiento de cámara para cada uno, produciendo videos narrativos estructurados en un solo flujo.

### Audio sintético nativo
Capacidad de generar voz, música ambiente y efectos de sonido directamente dentro del proceso de generación de video. Kling 3.0 genera audio lip-synced en 5 idiomas (chino, inglés, japonés, coreano, español) sin necesidad de post-producción externa.

---

## 🛠️ Stack tecnológico

| Herramienta | Función principal | Tipo | Precio base | URL |
|---|---|---|---|---|
| **Runway Gen-4 / Gen-4.5** | Generación de video con control creativo avanzado | Freemium | $15/mes (Standard) | [runwayml.com](https://runwayml.com) |
| **Kling 3.0** | Video 4K nativo con audio y lip-sync multilingüe | Freemium | $6.99/mes (Standard) | [klingai.com](https://klingai.com) |
| **Manus AI** | Agente autónomo de producción y automatización | Freemium | $20/mes (Standard) | [manus.im](https://manus.im) |
| **Sora (OpenAI)** | Generación de video de alta fidelidad narrativa | Pago | Incluido en ChatGPT Pro | [openai.com/sora](https://openai.com/sora) |
| **Pika Labs** | Generación y animación de video, efectos especiales | Freemium | Gratis (con marca de agua) | [pika.art](https://pika.art) |
| **Luma Dream Machine** | Video 3D-style, versatilidad multimodelo | Freemium | Gratis (acceso limitado) | [lumalabs.ai](https://lumalabs.ai/dream-machine) |
| **ElevenLabs** | Voz sintética, audio narración, sound effects | Freemium | Gratis (10k chars/mes) | [elevenlabs.io](https://elevenlabs.io) |
| **CapCut AI** | Edición de video asistida por IA, subtítulos, B-roll | Freemium | Gratis (funciones básicas) | [capcut.com](https://www.capcut.com) |
| **Veo 3 (Google)** | Video realista con audio nativo integrado | Pago | Google AI Ultra ($249/mes) | [deepmind.google/veo](https://deepmind.google/technologies/veo/) |
| **Kling O1** | Primer modelo multimodal unificado (texto+imagen+video) | Pago | API por segundo | [klingai.com](https://klingai.com) |

---

## 📋 Contenido de la clase

### Módulo 1 — Comparativa de plataformas de generación de video (20 min)

#### El ecosistema en 2026

El mercado de generación de video con IA ha madurado enormemente. En 2026 hay tres categorías claras:

- **Control creativo máximo:** Runway Gen-4.5 (motion brush, referencias, Aleph para edición in-video)
- **Producción cinematográfica de bajo costo:** Kling 3.0 (4K nativo, audio integrado, multi-shot)
- **Automatización de flujos completos:** Manus AI (agente autónomo que orquesta las demás herramientas)

#### Tabla comparativa rápida

| Criterio | Runway Gen-4 | Kling 3.0 | Manus AI |
|---|---|---|---|
| Duración máxima | 10 segundos | 15 segundos | N/A (orquestador) |
| Resolución | 1080p | 4K nativo (3840×2160) | N/A |
| FPS | 24 fps | 60 fps | N/A |
| Audio integrado | No | Sí (5 idiomas, lip-sync) | Sí (genera vía terceros) |
| Control de cámara | Motion Brush + prompts | Lenguaje natural | Via agente |
| Consistencia de personajes | Alta (reference images) | Alta (reasoning visual) | Depende del modelo usado |
| Precio entrada | $15/mes | $6.99/mes | $20/mes |
| Costo por segundo (API) | ~$0.10/s (Gen-4) | ~$0.084/s (Standard) | Por créditos de tarea |
| Mejor para | Ads, branded content, narrativa | Cine, comerciales 4K, social | Flujos automatizados end-to-end |

#### ¿Cuándo usar cada una?

- **Runway Gen-4.5** → Cuando necesitas control creativo granular: elegir exactamente cómo se mueve la cámara, mantener un personaje específico entre escenas, o editar partes de un video ya generado con Aleph.
- **Kling 3.0** → Cuando el cliente pide 4K, necesitas audio sincronizado en el video, o quieres generar una secuencia de planos con un solo prompt usando el modo multi-shot storyboard.
- **Manus AI** → Cuando tienes un brief completo y quieres que la IA planifique, genere y entregue un borrador sin que tengas que operar cada herramienta manualmente.

---

### Módulo 2 — Runway Gen-4 en profundidad (25 min)

#### Arquitectura y novedades

Runway Gen-4 (lanzado en 2025) introduce el concepto de **world consistency**: la IA entiende el espacio tridimensional de la escena, la física de objetos y la identidad visual de personajes, manteniéndolos coherentes a través de múltiples clips generados.

**Gen-4.5** (diciembre 2025) ocupa el primer lugar en benchmarks de calidad, con mejoras en:
- Simulación de física (agua, telas, humo)
- Adherencia al prompt (interpreta mejor las instrucciones en español e inglés)
- Calidad de movimiento (menos artefactos, transiciones más suaves)

#### Funcionalidades clave

**Reference images (consistencia de personajes)**
Sube 1-3 fotos de referencia de un personaje. Gen-4 extrae su identidad visual (rasgos, ropa, estilo) y la mantiene en todos los clips que generes, desde distintos ángulos y con distinta iluminación.

**Motion Brush**
Pintas zonas de la imagen de entrada y defines la dirección/intensidad del movimiento. Resultado: controlas exactamente qué partes del cuadro se mueven y cómo. Ideal para animar fondos, hacer parallax o aislar el movimiento de un sujeto.

**Aleph — Edición in-video**
Lanzado en julio 2025. Permite modificar partes de un video ya generado usando prompts de texto, sin necesidad de regenerar el clip completo. Ejemplo: cambiar el color de una prenda, añadir un elemento al fondo, corregir un artefacto visual.

**Gen-4 Turbo**
Variante acelerada que genera clips de 10 segundos en ~30 segundos (5× más rápido que Gen-4 estándar). Ideal para iteración rápida de ideas. Costo inferior: ~2 créditos/segundo vs 25 créditos/segundo del Gen-4.5.

#### Planes y créditos

| Plan | Precio/mes | Créditos/mes | Segundos Gen-4 | Segundos Gen-4.5 |
|---|---|---|---|---|
| Free | $0 | 125 (único) | ~7 seg | ~5 seg |
| Standard | $15 | 625 | ~31 seg | ~25 seg |
| Pro | $35 | 2,250 | ~112 seg | ~90 seg |
| Unlimited | $95 | Sin límite (modelos std) | Ilimitado | Limitado |
| Enterprise | ~$800/mes (equipo 5) | Custom | Custom | Custom |

> **Importante:** Los créditos no se acumulan entre meses. Planifica el uso mensual con anticipación.

#### Flujo de trabajo recomendado en Runway

1. Define el estilo visual con una imagen de referencia de escenario
2. Sube fotos del personaje como referencias (mínimo 2 ángulos distintos)
3. Escribe el prompt con estructura: plano + acción + iluminación + movimiento de cámara
4. Genera en Gen-4 Turbo para iterar rápido (más barato)
5. Cuando el resultado te convenza, genera la versión final en Gen-4 o Gen-4.5
6. Usa Aleph para correcciones puntuales sin regenerar el clip completo

---

### Módulo 3 — Kling 3.0 en profundidad (25 min)

#### ¿Qué es Kling 3.0?

Kuaishou (empresa china dueña de la plataforma de videos cortos Kwai) lanzó Kling 3.0 el **5 de febrero de 2026**, posicionándolo como el modelo que "democratiza la dirección cinematográfica". Es el primer modelo de video IA con:
- **4K nativo** (3840×2160, no upscaling)
- **60 fps** real
- **Audio y lip-sync nativos** en 5 idiomas
- **Arquitectura de razonamiento visual** (piensa la escena antes de generarla, igual que un LLM razona antes de responder)

#### Variantes del modelo

| Modelo | Función | Diferencial |
|---|---|---|
| **Video 3.0** | Text-to-video estándar | Alta calidad, hasta 15 seg |
| **Video 3.0 Omni** | Reference-based, multi-shot | Storyboard multiescena + referencias |
| **Image 3.0** | Generación de imágenes | 2K y 4K nativo |
| **Image 3.0 Omni** | Imágenes basadas en referencias | Control visual máximo |
| **Kling O1** | Modelo multimodal unificado | Texto + imagen + audio + video en un solo pipeline |

#### Audio y lip-sync nativo

Esta es la característica más disruptiva de Kling 3.0. Al generar un video con personajes hablando:

- El modelo genera la **voz en el idioma especificado** (no traducción post-generación, sino generación nativa)
- Sincroniza los **movimientos de labios** con el audio de forma automática
- Soporta **diálogos multi-personaje** en el mismo clip (voces distintas, lip-sync correcto para cada uno)
- Idiomas soportados: **Chino, Inglés (americano, británico, indio), Japonés, Coreano, Español**

#### Multi-shot storyboard (Video 3.0 Omni)

Permite crear secuencias narrativas estructuradas desde un solo prompt. Para cada plano puedes especificar:
- Duración exacta en segundos
- Tamaño de plano (primer plano, plano general, plano detalle, etc.)
- Perspectiva y ángulo
- Contenido narrativo
- Movimiento de cámara

Resultado: un video de múltiples escenas coherentes, sin tener que ensamblar clips individuales manualmente.

#### Planes y precios

| Plan | Precio/mes | Créditos diarios | Acceso a 4K |
|---|---|---|---|
| Free | $0 | 66 créditos/día | Limitado |
| Standard | $6.99 | Ampliado | Sí |
| Pro | ~$29.99 | Mayor | Sí |
| Premier | $64.99 | Máximo | Sí, prioritario |

**API pricing:**
- Standard: ~$0.084/seg
- Pro: ~$0.112/seg
- Con audio: precio adicional por clip

> Kling 3.0 es **65% más barato que Sora** y **44% más barato que Runway** en costo por segundo de video, manteniendo calidad de producción comercial.

#### Flujo de trabajo recomendado en Kling 3.0

1. Para videos cortos con personaje: usa **Video 3.0** con descripción detallada del personaje en el prompt
2. Para secuencias narrativas: activa **Video 3.0 Omni** y define el storyboard plano por plano
3. Especifica el idioma para el audio en el prompt: `"character speaking in Spanish with natural lip-sync"`
4. Para piezas de alta gama: selecciona salida 4K + 60fps
5. Exporta y lleva a CapCut AI o DaVinci Resolve para edición final

---

### Módulo 4 — Flujo de producción completo con Manus AI (20 min)

#### ¿Qué es Manus?

Manus (desarrollado por Monica.im, adquirido por Meta en diciembre 2025 por ~$2-3 billones de USD) es el primer **agente de IA de propósito general** que puede operar un computador virtual de forma autónoma: navegador, terminal, sistema de archivos. No responde preguntas, **entrega resultados terminados**.

Lanzado en beta cerrada el 6 de marzo de 2025, su demo inicial —donde el agente realizaba screening de CVs y análisis de bolsa de forma autónoma— acumuló más de un millón de vistas en 20 horas.

#### Capacidades relevantes para producción audiovisual

- **Investigación de referentes:** navega la web para recopilar referencias visuales, analiza tendencias, descarga imágenes de moodboard
- **Generación de imágenes** (feature lanzado mayo 2025): crea conceptos visuales y variantes de estilo
- **Generación de video** (feature lanzado junio 2025): conecta con APIs de Runway o Kling para producir clips desde el brief
- **Edición de scripts y storyboards:** escribe guiones, desglosa producciones, crea presentaciones de concepto
- **Automatización de entregas:** organiza archivos, exporta en formatos específicos, sube a carpetas compartidas

#### Flujo de producción audiovisual orquestado por Manus

```
Brief del cliente
       ↓
Manus investiga referencias → guarda moodboard
       ↓
Manus escribe el script + storyboard
       ↓
Manus genera imágenes de concepto (Image 3.0 / FLUX)
       ↓
Manus genera los clips de video (Runway/Kling vía API)
       ↓
Manus genera la narración (ElevenLabs API)
       ↓
Manus ensambla el rough cut y lo entrega al productor
       ↓
Productor revisa → ajustes finales en CapCut AI / DaVinci
```

#### Sistema de créditos

| Plan | Precio/mes | Créditos/mes | Créditos diarios refresh |
|---|---|---|---|
| Free | $0 | 300/día | 300 |
| Standard | $20 | 4,000 | 300 |
| Customizable | $40 | 8,000 | 300 |
| Extended | $200 | 40,000 | 300 |

**Consumo estimado por tarea:**
- Respuesta simple: 10-50 créditos
- Generación de storyboard con imágenes: 200-400 créditos
- Investigación profunda + informe: 500-900 créditos
- Flujo completo de producción: 1,000-3,000 créditos

> **Atención:** Los créditos no muestran estimación de consumo antes de ejecutar la tarea. Monitorea el saldo activamente.

#### Caso de uso práctico

**Brief:** "Necesito un spot de 30 segundos para una marca de café premium, tono cinematográfico, colores cálidos, narrador en español."

Prompt para Manus:
```
"Actúa como director de producción audiovisual. Crea un spot de 30 segundos para 
una marca de café premium llamada 'Volcán'. Necesito:
1. Script de 5 escenas de 6 segundos cada una
2. Descripción de prompts para Kling 3.0 (cada escena, plano, movimiento de cámara)
3. Brief de narración para ElevenLabs (voz masculina, cálida, español de México)
4. Paleta de colores y referencias visuales
Entrega todo en un documento estructurado listo para producción."
```

---

## 💪 Ejercicio práctico

### Crea un video de 30 segundos con al menos 2 plataformas

**Objetivo:** producir un spot de producto o clip narrativo de 30 segundos combinando mínimo 2 herramientas del stack.

#### Instrucciones paso a paso

**Paso 1 — Planificación (10 min)**
- Elige un producto o historia sencilla (café, zapatillas, viaje, personaje ficticio)
- Escribe un storyboard de 3-5 escenas con descripción breve de cada una
- Define el estilo visual: cinematográfico, publicitario, documental, fantástico

**Paso 2 — Generación de clips (20 min)**
- Usa **Kling 3.0** para la escena principal con mayor duración (hasta 15 seg, 4K)
- Usa **Runway Gen-4 Turbo** para las escenas de apoyo donde necesitas más control de cámara
- (Opcional) Usa **Pika** o **Luma** para una escena experimental o de transición

**Paso 3 — Audio (10 min)**
- Genera la narración en **ElevenLabs** con la voz que mejor encaje con tu historia
- (Si usaste Kling 3.0) activa el audio nativo con lip-sync para la escena del personaje

**Paso 4 — Edición final (15 min)**
- Importa todos los clips en **CapCut AI**
- Añade subtítulos automáticos, ajusta cortes, añade música de fondo
- Exporta en 1080p o 4K según la plataforma destino

#### Criterios de evaluación

- [ ] El video tiene al menos 25 segundos de duración
- [ ] Se usaron 2 o más plataformas de generación
- [ ] Hay coherencia visual entre los clips (paleta de color, estilo)
- [ ] El audio está sincronizado con las imágenes
- [ ] El resultado es apto para uso en redes sociales o presentación a cliente

---

## 📚 Recursos

### Documentación oficial
- [Runway Gen-4 — Guía de usuario](https://help.runwayml.com/hc/en-us/articles/37327109429011-Creating-with-Gen-4-Video)
- [Runway — API Pricing & Credits](https://docs.dev.runwayml.com/guides/pricing/)
- [Kling AI — Sitio oficial](https://klingai.com)
- [Manus AI — Documentación oficial](https://manus.im/docs)
- [ElevenLabs — Voice Library](https://elevenlabs.io/voice-library)

### Comparativas y benchmarks
- [Kling vs Sora vs Veo vs Runway — InVideo](https://invideo.io/blog/kling-vs-sora-vs-veo-vs-runway/)
- [Best AI Video Models 2026 — UlazAI](https://ulazai.com/ai-video-models-guide-2025/)
- [AI Video Generation 2026: Sora 2 vs Veo 3.1 vs Kling 3.0 — Lushbinary](https://lushbinary.com/blog/ai-video-generation-sora-veo-kling-seedance-comparison/)

### Precios actualizados
- [Runway ML Pricing 2026](https://propicked.com/blog/runway-ml-pricing-2026-hidden-costs)
- [Kling 3.0 Pricing](https://soravideo.art/blog/kling-3-pricing)
- [Manus AI Pricing 2026](https://www.lindy.ai/blog/manus-ai-pricing)

### Canales y comunidades recomendadas
- YouTube: busca "Runway Gen-4 tutorial 2026", "Kling 3.0 workflow", "Manus AI production"
- Reddit: r/StableDiffusion, r/aivideo, r/artificial
- Discord oficial de Runway y Kling para feedback de la comunidad

---

## 🔗 Acciones post-clase

**Esta semana:**
- [ ] Crear cuenta en Runway (plan Standard o Free) y generar tu primer clip con Gen-4 Turbo usando una imagen de referencia
- [ ] Probar Kling 3.0 con el modo de audio nativo: genera un clip de 10 segundos con un personaje hablando en español
- [ ] Explorar Manus AI (plan Free con 300 créditos diarios) enviando un prompt de brief de producción

**Próximas 2 semanas:**
- [ ] Completar el ejercicio práctico del spot de 30 segundos y compartirlo en el canal de la comunidad
- [ ] Comparar el costo real de producir el mismo clip en Runway vs Kling y documentar la diferencia
- [ ] Investigar **Veo 3 de Google** como alternativa emergente con audio nativo (disponible en Google AI Ultra)

**Recursos para seguir aprendiendo:**
- [ ] Leer la documentación de la API de Runway para automatizar generación de clips
- [ ] Explorar los presets de voz en ElevenLabs y crear una voz personalizada clonada
- [ ] Ver el demo completo de Manus AI en su canal oficial para entender el alcance del agente
