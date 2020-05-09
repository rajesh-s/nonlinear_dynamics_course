# Course on Nonlinear Dynamics: Mathematical and Computational Approaches

My progress and notes from the [course on nonlinear dynamics](https://www.complexityexplorer.org/courses/100-nonlinear-dynamics-mathematical-and-computational-approaches) offered by the Santa Fe Institute.

- [Terminology](#terminology)
- [Intro](#intro)
- [Maps (Discrete time)](#maps-discrete-time)

## Terminology

| Term | Definition   |
|---|---|
| Deterministic  | A system that is not random. Cause & Effect are linked. Current state determines future state  |
| Nonlinear | A system that with relationships between variables that matter are nonlinear |
| Dynamic(al) | A system that evolves with time| 

## Intro

- **Chaos** - Complex behavior, arising in a deterministic nonlinear dynamic (NLD) system with 2 properties: sensitive dependence on initial conditions and characteristic structure. Systems that exhibit chaos are ubiquitous
- Systems: ![Type of systems](images/2020-05-08-23-33-05.png)
- Derivatives represent the math of change with time
- NLD is in weather, flows (air,fluid), non linear oscillators (pendula, human heart, fireflies, electronic systems), protein folding etc.
- Complexity (complicated systems with simple behavior) vs Chaos (simple systems with complex behavior)
- Flow (continuous in time) vs Maps (discrete time intervals with no knowledge of state of the system between intervals)

![Map](images/2020-05-08-23-45-55.png)

## Maps (Discrete time)

- Difference Equation: x<sub>n+1</sub> = f    (x<sub>n</sub>). Repetition converges to a fixed point from a transient phase
- Logistic Map: x<sub>n+1</sub> = R x<sub>n</sub>(1-x<sub>n</sub>). Repetition converges to a fixed point from a transient phase. [Try this simulator](./code/Logistic%20Map%20Sim%20-%20Cobweb%20Plots%20and%20the%20Time%20Domain/Cobweb.html)