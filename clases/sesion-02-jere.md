# 📐 Spec Driven Development con IA

**Participante:** Jere | **Tipo:** Asesoría 1-on-1 | **Duración:** 90 min | **Formato:** Sesión individual técnica

---

## 🎯 Objetivos

Al terminar esta sesión serás capaz de:

1. **Implementar Spec Driven Development (SDD) con Claude** como metodología central de tu flujo de trabajo como developer.
2. **Escribir especificaciones antes de código**: convertir ideas, feature requests y PRDs en specs estructuradas en Markdown antes de abrir el editor.
3. **Reducir errores y alucinaciones** del modelo al darle contexto preciso, criterios de aceptación y restricciones técnicas desde el principio.
4. **Usar CLAUDE.md como "constitución del proyecto"**: contexto persistente que Claude lee en cada sesión para mantener coherencia arquitectural.
5. **Integrar el ciclo Especificar → Planificar → Implementar → Validar** en proyectos reales con control de versiones y CI/CD.

---

## 🔑 Conceptos clave

### ¿Qué es Spec Driven Development?

Spec Driven Development (SDD) es una metodología de ingeniería de software donde se redacta una especificación estructurada —que define intención, comportamiento, restricciones y criterios de aceptación— **antes de escribir una sola línea de código**. No es un concepto nuevo, pero la aparición de LLMs como Claude lo ha vuelto práctico y escalable a nivel individual.

La diferencia con el "vibe coding" es fundamental: SDD separa la fase de diseño de la fase de implementación, manteniendo al humano como arquitecto y árbitro de decisiones.

### El ciclo SDD con Claude

```
Feature Request / Idea
        ↓
   SPEC.md (qué y por qué)
        ↓
   PLAN.md (cómo y cuándo)
        ↓
   Implementación (Claude codea)
        ↓
   Validación (tests, CI/CD, revisión)
        ↓
   Commit atómico con referencia al spec
```

### Tipos de documentos en SDD

| Documento | Propósito | ¿Quién lo escribe? |
|---|---|---|
| **PRD** (Product Requirements Doc) | Define el "qué" y el "por qué" del producto. Audiencia, problema, métricas de éxito. | Product Manager / Developer |
| **SPEC.md** | Especificación técnica de la feature: interfaces, flujos, edge cases, criterios de aceptación. | Developer + Claude (iterativo) |
| **PLAN.md** | Plan de implementación paso a paso: archivos a modificar, orden de cambios, dependencias. | Claude (revisado por dev) |
| **TDD (Test Design Doc)** | Define los casos de prueba antes de implementar. Se convierte en la suite de tests. | Developer + Claude |
| **CLAUDE.md** | Contexto permanente del proyecto: estilo de código, arquitectura, comandos de build/test. | Developer (mantenido en git) |

### BDD y criterios de aceptación

El Behavior Driven Development (BDD) complementa SDD definiendo comportamiento en lenguaje natural con el formato **Given / When / Then**:

```
Given: el usuario está autenticado y tiene rol "admin"
When:  hace POST /api/properties con datos válidos
Then:  la propiedad queda guardada, se retorna 201, y se dispara el evento "property.created"
```

Estos criterios van directo en el SPEC.md y Claude los usa como guía para implementar y para saber cuándo terminó.

### CLAUDE.md: la "constitución" del proyecto

Claude lee el archivo `CLAUDE.md` al inicio de cada sesión. Es la diferencia entre un asistente genérico y un pair programmer que conoce tu proyecto:

```markdown
# Mi Proyecto

## Stack
- Next.js 14, TypeScript, Prisma, PostgreSQL
- Tests: Vitest + Playwright para E2E

## Convenciones
- Usar ES modules (import/export), nunca require
- Nombres de archivos en kebab-case
- Commits convencionales: feat:, fix:, chore:

## Comandos clave
- npm run dev       → servidor local
- npm run test      → vitest watch
- npm run typecheck → tsc --noEmit

## Arquitectura
- /app → rutas Next.js (app router)
- /lib → lógica de negocio pura
- /components → solo UI, sin lógica
```

**Regla de oro:** si Claude sigue haciendo algo incorrecto a pesar de tener la instrucción, el CLAUDE.md está demasiado largo o la instrucción es ambigua. Podarlo es mantenimiento activo.

### El patrón "entrevista primero"

En lugar de escribir el spec solo, puedes pedir a Claude que te entreviste antes de codear:

```
Quiero construir [descripción breve]. 
Entrevístame en detalle usando la herramienta AskUserQuestion.
Pregunta sobre implementación técnica, UX, edge cases y tradeoffs.
No preguntes lo obvio, profundiza en lo difícil.
Cuando terminemos, escribe el spec completo en SPEC.md.
```

Una vez generado el SPEC.md, se abre una **sesión nueva** para implementar — contexto limpio, foco total en código.

### Por qué SDD reduce errores y alucinaciones

Los LLMs alucinan más cuando el contexto es vago. Un spec bien escrito actúa como ancla:
- Reduce la ambigüedad → el modelo sabe exactamente qué construir
- Permite validación automática → si el output no cumple el spec, el CI/CD falla
- Hace el código revisable → el spec es la fuente de verdad, no los comentarios del código
- Mantiene coherencia entre sesiones → Claude no "olvida" decisiones previas porque están en el spec

---

## 🛠️ Stack tecnológico

| Herramienta | Rol en SDD | Tier | URL |
|---|---|---|---|
| **Claude (claude.ai)** | Pair programmer principal: genera specs, planes, código y tests | Freemium | https://claude.ai |
| **Claude Code CLI** | Agente de terminal autónomo: lee archivos, ejecuta comandos, implementa specs | Freemium | https://code.claude.com |
| **Cursor AI** | IDE con IA integrada: indexa todo el codebase para contexto preciso | Freemium | https://cursor.com |
| **GitHub Copilot** | Autocompletado inteligente + Copilot Chat para Q&A en VS Code | Pago | https://github.com/features/copilot |
| **Linear** | Gestión de issues y feature requests que se convierten en PRDs/specs | Freemium | https://linear.app |
| **Notion** | Base de conocimiento para PRDs, ADRs (Architecture Decision Records) y specs de equipo | Freemium | https://notion.so |
| **Playwright** | Testing E2E: valida que la implementación cumple los criterios de aceptación del spec | Gratis | https://playwright.dev |
| **GitHub Spec Kit** | Framework open-source (sept. 2025): integra SDD en CI/CD, valida compliance de specs | Gratis | https://github.com/github/spec-kit |
| **Vitest** | Tests unitarios rápidos: se escriben desde el TDD antes de implementar | Gratis | https://vitest.dev |
| **AWS Kiro** | IDE de Amazon (2025) con soporte nativo de specs: spec → design → tasks | Freemium | https://aws.amazon.com |

---

## 📋 Plan de la sesión

### Bloque 1 — Fundamentos SDD (20 min)

**Objetivo:** Entender el "por qué" antes del "cómo"

- Comparar flujo tradicional vs SDD con Claude
- Diferencia entre vibe coding y spec-driven development
- Demostración en vivo: una feature sin spec vs con spec
- Anatomía de un buen SPEC.md

**Actividad:** Revisar el proyecto actual de Jere e identificar dónde en el flujo actual se pierde contexto o se generan errores.

---

### Bloque 2 — CLAUDE.md y contexto persistente (20 min)

**Objetivo:** Configurar el proyecto para trabajo efectivo con Claude Code

- Crear o refinar el CLAUDE.md del proyecto
- Estructura de directorios recomendada para SDD
- Usar `/init` para generar CLAUDE.md base
- Configurar permisos y herramientas permitidas

**Actividad:** Jere configura CLAUDE.md para su proyecto real. Claude lo revisa y sugiere mejoras.

---

### Bloque 3 — Ciclo completo: Feature → Spec → Código (30 min)

**Objetivo:** Aplicar SDD de punta a punta en un caso real

1. Tomar un feature request o issue existente del proyecto de Jere
2. Usar el patrón "entrevista primero" para generar SPEC.md
3. Claude genera PLAN.md desde el spec
4. Implementación con Claude Code en modo plan
5. Validación: tests, typecheck, build

**Actividad guiada:** Implementar una feature real o un módulo del proyecto usando SDD.

---

### Bloque 4 — Patrones avanzados y próximos pasos (20 min)

**Objetivo:** Herramientas y hábitos para sostener SDD a largo plazo

- Writer/Reviewer pattern (dos sesiones de Claude)
- Subagentes para revisión adversarial
- Integración con GitHub (PRs vinculados al spec)
- Cómo mantener el CLAUDE.md actualizado con el tiempo
- Q&A y plan de acción personal para la semana

---

## 💪 Ejercicio práctico

### Convertir feature request → spec → código con Claude

**Duración estimada:** 45-60 minutos (se puede completar después de la sesión)

**Punto de partida:** Un feature request en lenguaje natural (puede ser de Linear, Notion, o simplemente escrito a mano).

---

**Paso 1: Escribe el feature request**

```
Como usuario autenticado,
quiero poder guardar propiedades en favoritos
para revisarlas más tarde sin tener que buscarlas de nuevo.
```

---

**Paso 2: Genera el SPEC.md con Claude**

Prompt para Claude:

```
Actúa como un tech lead senior. Basándote en este feature request, 
escribe un SPEC.md completo que incluya:
- Resumen de la feature
- Criterios de aceptación en formato Given/When/Then
- Interfaces y tipos TypeScript necesarios
- Endpoints de API con request/response de ejemplo
- Casos edge y restricciones
- Lo que explícitamente está FUERA del scope

Feature request: [pegar el feature request]

Haz preguntas de aclaración antes de escribir el spec si hay ambigüedad.
```

---

**Paso 3: Valida el SPEC.md**

Revisa que el spec responda:
- [ ] ¿Qué problema resuelve exactamente?
- [ ] ¿Cuáles son los criterios de éxito medibles?
- [ ] ¿Qué está explícitamente fuera del scope?
- [ ] ¿Tiene sentido técnico dado nuestro stack?

---

**Paso 4: Genera el PLAN.md**

```
Basándote en el SPEC.md anterior y en el contexto del proyecto 
(ver CLAUDE.md), genera un PLAN.md de implementación que incluya:
- Lista de archivos a crear o modificar
- Orden de cambios con dependencias
- Comandos de migración de DB si aplica
- Tests a escribir por cada criterio de aceptación
```

---

**Paso 5: Implementa con Claude Code**

```bash
# En terminal, con Claude Code CLI
claude "Implementa la feature de favoritos siguiendo el SPEC.md y PLAN.md. 
Usa modo plan primero, muéstrame el plan antes de codear. 
Ejecuta los tests al finalizar y corrige si fallan."
```

---

**Paso 6: Valida contra el spec**

```
Revisa la implementación actual contra el SPEC.md.
¿Se cumplen todos los criterios de aceptación?
¿Hay casos edge que no se cubrieron?
Lista gaps sin incluir preferencias de estilo.
```

---

**Entregables esperados:**
- `SPEC.md` — especificación de la feature
- `PLAN.md` — plan de implementación
- Código implementado con tests
- Commit con mensaje que referencia el spec

---

## 📚 Recursos

### Documentación oficial
- [Claude Code Best Practices](https://code.claude.com/docs/en/best-practices) — guía oficial de Anthropic con patrones probados
- [CLAUDE.md Reference](https://code.claude.com/docs/en/memory) — cómo estructurar el archivo de contexto permanente
- [Claude Code Workflows](https://code.claude.com/docs/en/common-workflows) — recetas paso a paso para casos comunes

### Artículos y guías
- [Spec-driven development: Unpacking 2025's key new practice](https://www.thoughtworks.com/en-us/insights/blog/agile-engineering-practices/spec-driven-development-unpacking-2025-new-engineering-practices) — Thoughtworks
- [Spec-Driven Development (2026 Guide)](https://www.productbuilder.net/learn/spec-driven-development) — ProductBuilder
- [The Spec-to-Code Workflow: Building Software Using Only LLMs](https://medium.com/@mattia.darge/the-spec-to-code-workflow-building-software-using-only-llms-5e025cd28de0) — Medium
- [How to write PRDs for AI Coding Agents](https://medium.com/@haberlah/how-to-write-prds-for-ai-coding-agents-d60d72efb797) — Medium

### Herramientas
- [Playwright docs](https://playwright.dev/docs/intro) — testing E2E para validar specs
- [GitHub Spec Kit](https://github.com/github/spec-kit) — framework open-source para SDD en CI/CD (sept. 2025)
- [Linear](https://linear.app) — gestión de issues integrable con flujo SDD

---

## 🔗 Acciones post-sesión

Para la próxima semana, completar al menos 3 de estas acciones:

- [ ] **Crear CLAUDE.md** para el proyecto principal con stack, convenciones y comandos clave
- [ ] **Tomar una feature pendiente** y escribir su SPEC.md antes de codear
- [ ] **Usar el patrón "entrevista primero"** con Claude para al menos una tarea nueva
- [ ] **Configurar Claude Code CLI** y hacer el primer commit usando SDD
- [ ] **Revisar un PR existente** y ver si el código hubiese sido mejor con un spec previo
- [ ] **Crear un template de SPEC.md** reutilizable para el equipo o proyecto

**Criterio de éxito de la semana:** haber hecho al menos una feature con el ciclo completo Feature Request → SPEC.md → PLAN.md → Código → Tests → Commit.
