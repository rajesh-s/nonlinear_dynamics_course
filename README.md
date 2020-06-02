# Course on Nonlinear Dynamics: Mathematical and Computational Approaches

My progress and notes from the [course on nonlinear dynamics](https://www.complexityexplorer.org/courses/100-nonlinear-dynamics-mathematical-and-computational-approaches) offered by the Santa Fe Institute.

Code files are present [here](./code)

- [Terminology](#terminology)
- [Learning that made this course very interesting](#learning-that-made-this-course-very-interesting)
- [Intro](#intro)
- [Maps (Discrete time intervals; Modelled using Difference equations)](#maps-discrete-time-intervals-modelled-using-difference-equations)
  - [Concepts](#concepts)
  - [Return Maps](#return-maps)
    - [Time Domain Plots and their return map equivalent](#time-domain-plots-and-their-return-map-equivalent)
  - [Bifurcation Diagram](#bifurcation-diagram)
    - [Feigenbaum and universality](#feigenbaum-and-universality)
      - [Manifestations of Universality of Chaos (Eg. Feigenbaum number)](#manifestations-of-universality-of-chaos-eg-feigenbaum-number)
- [Flows (Continuous time; Modelled using Differential equations)](#flows-continuous-time-modelled-using-differential-equations)
  - [Fundamentals](#fundamentals)
  - [State variables and state space](#state-variables-and-state-space)
  - [ODE and Dynamical system](#ode-and-dynamical-system)
  - [Fixed points and stability](#fixed-points-and-stability)
  - [Saddle points and Eigen vectors](#saddle-points-and-eigen-vectors)
  - [Stable and Unstable Manifolds of Fixed points](#stable-and-unstable-manifolds-of-fixed-points)
  - [Attractors](#attractors)
  - [ODEs, Vector fields and Dynamical landscapes](#odes-vector-fields-and-dynamical-landscapes)
  - [Numerical ODE Solvers](#numerical-ode-solvers)
  - [Two simple ODE solvers: forward and backward Euler](#two-simple-ode-solvers-forward-and-backward-euler)
  - [Solving ODE's of a SHO](#solving-odes-of-a-sho)
  - [ODE Solvers: Error and Adaptation](#ode-solvers-error-and-adaptation)
  - [Production ODE solvers](#production-ode-solvers)
  - [Numerical dynamics and due diligence while picking ODE solvers](#numerical-dynamics-and-due-diligence-while-picking-ode-solvers)
  - [Shadowing and Chaos](#shadowing-and-chaos)
  - [Solving ODE's numerically, Review](#solving-odes-numerically-review)

## Terminology

| Term | Definition   |
|---|---|
| Deterministic  | A system that is not random. Cause & Effect are linked. Current state determines future state  |
| Nonlinear | A system that with relationships between variables that matter are nonlinear |
| Dynamic(al) | A system that evolves with time|
| Phase space | Also known as State Space, used to describe evolution of trajectory of dynamical systems. For a standard map, the statespace is the x,y-axes|
| Sparatrix | Curve in state space that separates two different regions|
| Integrable| Not chaotic|
| Disspative| Friction, necessary condition for the existence of attractors but not for the existence of chaos |
| Hamiltonian | Synonym for conservative/non-dissipative|
| Conservation | No friction, Ideal|
| Nonintegrability | Applies to only non-dissipative/hamiltonian systems. Think of it as "can't be solved in closed form/analytically"|

Nonlinearity is a necessary condition for chaos. Not all nonlinear systems are chaotic

Non integrabilitiy (if the ODE is non linear, possible that there might not exist an **analytic** solution) is a necessary and sufficient condition for chaos. Such ODE's are solved **numerically** (with a computer)

## Learning that made this course very interesting

Concepts learnt:
maps, return maps, logistic map, bifurcation diagram, time series analysis, dynamical systems, chaos, feigenbaum number, universality, standard maps, flows, [linear algebra,matrices,ODE] in the context on linear dynamics, numerical analysis, dynamics using matrices,

- Manifestations of Universality of Chaos
- NLD is in weather, flows (air,fluid), non linear oscillators (pendula, human heart, fireflies, electronic systems), protein folding, classical mechanics (three-body problem, paired black holes) etc.
- The course goes over terminology very carefully (eg. sensitivity to initial conditions) and explains the fundaments of systems. Adds analysis structure to understanding patterns such as the butterfly effect for example.
- NLD developed in the 1960's as a result of computers, which are absolutely essential to solve non-integrable ODE's numerically. Experimental Mathematics relies on the computer as the laboratory
- Problems like an artifical pancreas aid for diabetes are difficult because the response of human body to insulin is non-linear. ODE's have reduced the necessity for animal testing. A very interesting [application](https://www.youtube.com/watch?v=a790FlSLIQo) of ODE's. The role of computers in such applications is amazing!
- Using stable and unstable manifolds to design [spacecraft trajectories](https://www.youtube.com/watch?v=PRbAag_crbo) (with Jeff Parker)
- NLD is interdisciplinary from Economics, Medicine, Mechanical systems and others from the field trips

## Intro

- **Chaos** - Complex behavior, arising in a deterministic nonlinear dynamic (NLD) system with 2 properties: **sensitive dependence on initial conditions** (butterfly effect, trajectory changes based on initial condition) and characteristic structure. Systems that exhibit chaos are ubiquitous
- Systems: ![Type of systems](images/2020-05-08-23-33-05.png)
- Derivatives represent the math of change with time
- **Complexity** (complicated systems with simple behavior) **vs Chaos** (simple systems with complex behavior)
- Flow (continuous in time) vs Maps (discrete time intervals with no knowledge of state of the system between intervals)

![Map](images/2020-05-08-23-45-55.png)

## Maps (Discrete time intervals; Modelled using Difference equations)

- Difference Equation: x<sub>n+1</sub> = f    (x<sub>n</sub>).
- Logistic Map: x<sub>n+1</sub> = R x<sub>n</sub>(1-x<sub>n</sub>). Repetition converges to a fixed point from a transient phase. [Try this simulator](./code/Logistic%20Map%20Sim%20-%20Cobweb%20Plots%20and%20the%20Time%20Domain/Cobweb.html)

### Concepts

- x0,x1,x2.. -> **Orbit**/Trajectory of the dynamical system. Sequence of **state variables**.
- Logistic map has a single state variable x. Other maps such as the [Henon map](https://en.wikipedia.org/wiki/H%C3%A9non_map) have more than one state variable
- Starting state variable is the **initial condition**
- Repetition converges to a fixed point from a transient phase. A fixed point does not move under the influence of dynamics. An **attracting (stable) fixed point** is one that the system tends to go to (eg. rest). Fixed points move with changing parameter R. A fixed point of a map $f$ is a state $x^{*}$ such that $x^{*}=f\left(x^{*}\right)$
- **Transient** -> Fixed results in overshoot/**oscilatory** for higher values of R
- Attractors. Kinds:
  - Attracting fixed points
  - **Basin of attraction**: Different initial points leading to the same fixed point
  - **Periodic orbit** (limit cycle) Period:2(this can be any number based on fixed points)![Po](images/2020-05-09-22-11-27.png)
  - **Chaotic/Strange Attractors** ![CA](images/2020-05-09-22-17-07.png)
- **Bifurcations** - Changes in the topology of the attractor. R is a bifurcation parameter in the logistic map. It affects the dynamic in a fundamental way. Eg. a flooded creek
- Few **representations** to understand NLD:
  - Physical space (Eg. Pendulum)
  - Time Domain Plots ( $x_n$ vs n ) - Shows overall temporal pattern of the iterates
    - Brings out overall behavior of iterates
  - Return Maps (Correlation Plot/ Cobweb diagram) ( $x_{n+1}$ vs $x_n$ (First because of n+1, We can also have second return map etc))
    - Brings out correlation between succesive iterates, geometry of iterates why they go where they go
  - Bifurcation diagram ( $x_n$ vs R). View of a time plot from the side.
    - What changes about the asymptotic behavior of the trajectory as R changes including bifurcations

### Return Maps

- Logistic Map ![Return Map](images/2020-05-10-11-01-03.png) ![RM2](images/2020-05-10-11-03-33.png)
- ![Fixed point](images/2020-05-10-11-09-08.png)
- Fixed point condition, xn+1* = xn* (where dynamics dont move)
  ![Fixed point](images/2020-05-31-12-00-15.png)
- Points on the curve signify where the iterates are. This is a fixed point (not periodic) because nearby iterates are converging to the same point ![iterates](images/2020-05-31-12-01-57.png)
- The spacing between points and tendency to converge will differentiate fixed points from periodic orbits.Slope of the blue curve (parabola) at the fixed point determines if it's a fixed point or not
- Green line indicates the fixed points of the system. Slope of the blue curve (function/parabola) at the intersection of green point and parabola determines whether it is a stable (cobweb) or unstable fixed point
- Periodic Orbit on a return map ![RM3](images/2020-05-10-11-11-12.png)
- Second return map example ![RM4](images/2020-05-10-11-12-41.png)
- Removing transient points in a cobweb plot will make periodic orbits clearly visible. Example: ![cobweb](images/2020-05-11-00-20-52.png)

#### Time Domain Plots and their return map equivalent

![1](images/2020-05-31-12-11-11.png)
![1](images/2020-05-31-12-11-31.png)
![2](images/2020-05-31-12-11-46.png)
![2](images/2020-05-31-12-12-08.png)
![3](images/2020-05-31-12-12-23.png)
![3](images/2020-05-31-12-12-46.png)
![4](images/2020-05-31-12-13-25.png)
![4](images/2020-05-31-12-13-38.png)

### Bifurcation Diagram

- Bifurcation point is the point where a fixed point splits into periodic 2 orbit in a xn vs R app
- Bifurcation diagram ignores the transient curve
  - Near a bifurcation point, we notice thickening if insufficient transient is removed
- Fractals are self-similar patterns that become visible in bifurcation diagrams. These are non-integer Hausdorff dimension. Fractals are in nature and also in computer graphics to analogue nature (eg. mandelbrot set)
  - Many (most) chaotic systems have fractal state-space structure. But not all.

- ![Logistic map](images/2020-05-31-11-47-52.png)
- Logistic Map BD features: 
  - Periodic orbit of 2 in fixed points (2,4,8)
  - Periodic orbit of 3 amongst chaotic points (3,6,12)
  - It is a fractal with period-doubling cascades
  - Dark veils in the logistic map bifurcation diagram are unstable perioid orbits
  - Bifurcations in the cascade are getting smaller (closer) as R increases (and period increases with R)
- Initial points (x0) within the same basin of attractors reach the same fixed point.
- As R increases in logistic map, we see oscillatory convergence and period doubling as visible from both time series and bd
- Differnet x0 follows the same path but in a different order which is why bd are useful compared to timeseries plots

Important aspects of NLD:
- Structure of chaotic attractors
- Sensitive dependance on initial conditions

![BD](images/2020-05-29-02-20-32.png)

#### Feigenbaum and universality

![FN](images/2020-05-29-02-01-39.png)

$$\lim _{n \rightarrow \infty} \frac{\Delta_{n}}{\Delta_{n+1}}=4.66$$

i.e Widths of the pitchforks.

Feigenbaum number holds true for any **1-D** **map** with a quadratic maximum eg. logistic map, sine map and any other map that looks like a parabola at it's maximum

##### Manifestations of Universality of Chaos (Eg. Feigenbaum number)

Systems as diverse as orbiting moons, human heart, pendulum, hurricanes all act the same in the throws of chaos. This is extremely fascinating.

Example of 2D map: Smale's horshoe kneading moves initial points closer to far apart and vice versa. The stretching and folding that creates this is a paradigm in chaos. **Its the cause of sensitive dependence on initial conditions**. In a logistic map, the quadratic map (like fingers) kneads the unit interval (like dough).

![Kneads](images/2020-05-29-02-12-47.png)

Maps are also useful in modelling physical systems. A good example of this is the standard map that can be used to model an experiment where a pendulum in free space is hit periodically in time (meaning different points in its path) and to model the amplitude and angular momentum impact (extend this to effect of planets on asteroid movement)

Standard map is non-disspative (no attractors) but there is still chaos

## Flows (Continuous time; Modelled using Differential equations)

### Fundamentals

- Constraints in sampling rate/data acquisitions induces the need to rely on discretization to an extent
- State variables in Flows example
  - The double pendulum can be modelled using 4 state variables (Angle of main bob, Angle of second bob relative to main, Angular momentum of both bobs since position alone cannot convey all possible states)
  - **The state variables *EVOLVE* continuosly under the *influence* of the dynamical system**
  - The trajectory of the system is the progression (continuous unlike maps) of states that the dynamical system goes through.
  - The dynamical system goes through a transient (oscillations) before reaching an attractor (stable fixed point at rest). This is only when the initial point is in the basin of attraction (in case of a pendulum this is basically without raising the bob above)
  - Stable fixed points shrink perturbation. Unstable fixed points (3 for example, b,c,d) ![Pendulum](images/2020-05-31-13-38-47.png)
  - A stable fixed point can become chaotic or move to a perioic orbit (at a bifurcation parameter think of this as moving the table on which the pendulum was placed at a frequency, the bob will eventually move). Similarly an unstable fixed point can become stable at a different condition

### State variables and state space

- A powerful representation in the field of non linear dynamics. Supresses time and reveals patterns that emerge as the system evolves with time. Focus of exploration is important while choosing state space in a dynamical system (think of eyes in a potrait drawing)
- Simple pendulum example for state space potrait
  - The states at odd multiples of pi are unstable fixed points and even multiples of pi (theta w.r.t rest condition) are repeated stable fixed points
  - The angular momentum values translate into ellipses around the origin
  - State representation of a simple pendulum ![State](images/2020-05-31-13-59-45.png)
  - Assumes no friction but real device shows damped oscillation ![State2](images/2020-05-31-14-02-17.png)
  - With no friction, there is no attractor, because there is nothing to cause the transient to die out. The elliptic fixed points in the above image are **NOT ATTRACTIVE** for this reason.
  - A system without friction is called a conservative or hamiltonian system
  - The trajectories demonstrate uniqueness i.e they do not cross and this is a mathematical requirement

### ODE and Dynamical system

- Derivative (slope of x(t), ODE) w.r.t time for dynamical systems. To find the solution we would also need the constant (or x(t) at t=0)
- Any ODE that can be solved analytically on paper is clsoed form by definition not chaotic
- Nonlinearity is a necessary condition for chaos. If an ODE is non linear it is possible there is no analytical solution
- If there is no analytic solution to an ODE, then the ODE is for sure chaotic
- x' = sinx is a nonlinear ODE
- Why ODE?
  - Good models that capture biology, physics, enonomics etc.
- Non linear equation have powers, products of variables or transcedentals (such as sin x)

### Fixed points and stability

- A point in the dynamical system that is stable under the influence of dynamics
- Stable fixed point -> Perturbation shrinks, Unstable fixed point -> Perturbation grows
- Dissipative systems have attractors
- Conservative systems have no friction and hence no attractors. There are still fixed points and chaos though, just that there are no fixed/chaotic attractors.
  - Solar system is a conservative system on human scale. But Pluto's orbit is chaotic.
- Initial condition outside the basin of attraction of a fixed point will not lead to convergence. Think off dynamics as an oddly shaped bowl (the shape defined by the dynamics), where the bottom most point is the fixed point. A trajectory is a ball rolling on the topography/landscape (intuitive shape of the state space) defined by the dynamic. This analogy is useful for 2-D state space.

### Saddle points and Eigen vectors

- Fixed points can either be on a dynamic landscape of:
  - An inverted bowl
  - Saddle (eg. inverted point on a pendulum)
- Matrices affect transformations of space
  - Define computer graphics, the connection goes to the landscape in dynamical systems
  - Eigen means same
    - Eigenvalues:Tells how fast the state travels along the eigenvector and it's direction. Movement along an eigen vector: $e^{s_it}$
      - Imagine a ball rolling from a mountain along a stream. EV at the top would be positive as ball travels away and EV is negative at bottom where ball travels towards. The distance between the ball drop in the stream and the place where we drop it grows exponentially
    - Eigenvectors: A point that starts on an eigenvector stays on the EV. (think of a ball rolling on a landscape)
    - To find EigenValues subtract s from the diagonal elements and calculated the determinate (to get the roots of the characteristic polynomial). Each value has it's own eigen vector. Possibilities (each of these indicate a type of fixed point discussed earlier):
      - e^s shrinks. Both point inwards like a bowl ![1](images/2020-06-01-19-05-31.png)
        - If s1 & s2 are perpendicular they are a hemispherical bowl
      - Upside down bowl ![2](images/2020-06-01-19-06-45.png)
      - Saddle ![3](images/2020-06-01-19-08-05.png)
        - For a pendulum, saddle points are at odd values of theta
        - Eigen values/vectors work when we are looking at a small patch of the system ![4](images/2020-06-01-19-10-17.png)
        - NonLinear Systems occuring in nature do not have bowl/saddle shapes as they are much more complex and nonlinear.

### Stable and Unstable Manifolds of Fixed points

![Stable](images/2020-06-01-19-51-57.png)

- Manifolds are surfaces in the state space that are like non-linear generalizations of eigen vectors. They are invariant manifolds i.e state that starts on this manifold stays on that manifold just like an eigen vector
  - Manifolds are useful in determining boundaries of basins of attraction, filtering out noise and controlling chaos
  - ![Vecrots](images/2020-06-01-19-56-18.png)
  - The entire structure above also is usefully in formally proving that a system is chaotic
  - The bends and folds in the manifolds are the source of i) sensitive dependence to initial conditions ii) structure of a chaotic attractor
- Things spread along unstable manifolds and converge along stable manifolds
- Stable manifolds (bowl, converging) - Set of initial conditions such that x->x* as t-> inf
- Unstable manifolds (Upside down bowl,diverging) - Set of initial conditions such that x->x* as t-> -inf while staying on the manifold

### Attractors

- Four kinds of attractors in dissipative nld sytems:
  - Fixed points ![1](images/2020-06-01-21-33-41.png)
  - Periodic Orbit/ Limit cycle ![2](images/2020-06-01-21-33-53.png)
  - Chaotic/Strange attractors. Exponential divergence of neighboring trajectories is sensitive dependence to initial conditions ![3](images/2020-06-01-21-34-33.png)
  - Quasi-Periodic orbitic
- A nonlinear system can have any number of attractors, of all types, sprinkled around the state space. Their basins of attraction partition the state space. There's no way to know where they are, how many there are, what types etc.
- In determininstic dynamical systems and intersection cannot occur in the state space or the orbit because at the intersection there would be two paths for the trajectory which is a violation of determinism

### ODEs, Vector fields and Dynamical landscapes

- Transformation to convert higher order ODE's to n first order ODEs . Nth order ODE needs n-1 helper variables![1](images/2020-06-02-12-49-58.png) ![1](images/2020-06-02-12-57-46.png). Each of the n vectors in this representation is a vector field that gives the slope
  - Derivates on the LHS, RHS only captures dynamics of the system i.e how things change based on values of state variables and parameters
  - Vectors are thin matrices, single col/row
  - Elements of the above vector are the two state variables (position x, velocity v) of SHO. State vector contains state variables
  - **The number of state variables, height of the state vector, the number of axes in the state space, order of the original ODE is all the same (2 here).**
  - 2-D cannot be chaotic. 3 dimensions is a necessary condition for chaos in continuous time systems
  - Time independent representation ![2](images/2020-06-02-12-57-01.png)
  - Think of a ball placed as a way to visualize the development of trajectories in state space but not in the physical sense
  - The derivative vector field (i.e the slope) at every point is tangent to the solution
- Matrices capture how a ball rolls on a dynamical landscape. The statement is completely true everywhere if the landscape is defined by a linear ODE (like a bowl/saddle). The matrix is only good locally if the system in nonlinear.
- If the system is nonlinear we can't write the ODE in matrix form i.e we can't write $\dot{\vec{x}}=A \vec{x}$ with only numbers for A (since they have products, transcendentals etc). But we can linearize non-linear ODEs using **Partial Derivatives and Jacobian matrix**.
- Jacobian matrix is a local linear approximation of a non-linear landscape and it's eigen values/vectors tell what kind of linear landscape (bowl/saddle) is a good fit

### Numerical ODE Solvers

- An ODE tells for every point in the state space what the derivate is i.e in which direction will the trajectory/state evolves
- ![1](images/2020-06-02-13-42-07.png)
- The differential equation only gives the direction in which state is going to evolve but not the next point unlike a difference equation. This requires additional work done by the ODE solver.
- Numeric solvers take as input the ODE, initial condition and time step (del T) and gives an estimate of the state at $\vec{X} (t_0 + \Delta t)$ ![2](images/2020-06-02-13-47-45.png)

### Two simple ODE solvers: forward and backward Euler

- To figure out what direction is downhill, do a vector sum of x' and v' (i.e the state variable derivatives) ![1](images/2020-06-02-14-02-32.png)
- Forward Euler (Spirals out): "Follow the Slope".
  - Effort vs Accuracy tradeoff on how far down the slope
  - Computed as: $ \vec{x}(t_0 + \Delta t) = \vec{x}(t_0) + \Delta t \cdot \vec{x'} (t) $
- Backward Euler (Spirals in)
  - $\vec{x}\left(t_{0}+\Delta t\right)=\vec{x}\left(t_{0}\right)+\Delta t \cdot \vec{x}_{FE}^{\prime}\left(t_{0}+\Delta t\right)$
  - $\vec{x}_{FE}^{\prime}$ is not the derivative of the original point but the derivative at the point where we get to if we take one step using forward Euler
  - This is useful when the direction pointed by FE is at an offset compared to actual path.

### Solving ODE's of a SHO

- v/x are circles (ideal solutions for non-dissipative systems) but these are sines and cosines in the time domain
- Each Forward Euler solution point turns as a spiral around the circle
- Time step exacerbates the error
- ![1](images/2020-06-02-16-28-51.png)
- Backward euler replicates the direction of the next step (one after FE) at the original point ![2](images/2020-06-02-16-32-06.png)
- Backward Euler produces the exact solution for a dampened SHO due to numerical damping ![3](images/2020-06-02-16-33-17.png)
- FE produces negative damping (more like a push), BE produces positive damping
- FE and BE are not used in practice but are useful in understanding how ODE solvers work and how they break

### ODE Solvers: Error and Adaptation

- Forward Euler overshoots because of the Taylor series (approximation at a point) ![1](images/2020-06-02-17-30-49.png)
- ![2](images/2020-06-02-17-33-55.png)
- The local truncation error of FE is not proportional to the step size (square of it) and it is dependent on the dynamical landscape
- Types of errors:
  - Truncation error: From terms in the series that you didn't use
  - Roundoff error: From the digits that the computer cut off. Errors snowball due to wrong value getting to the next step
  - Observational error: Inserted between the system and the observer
  - Dynamical Error: Coupled back into the system (Dangerorous as it can snowball)
- Local truncation error for FE (for a single step). $O (\Delta x^2)$ or O($h^2$) error: $\frac{1}{2} \Delta x^{2} f^{\prime \prime}\left(x_{0}\right)$
- BE also has a $O (\Delta x^2)$ or O($h^2$) error
- The average of these errors and then use combined slope of both methods to move forwards. Trapezoidal method with error h^3 which is lesser than h^2 ![2](images/2020-06-02-17-42-36.png).
- Geometry of landscape determines step size. Adaptive time step ODE solvers ![2](images/2020-06-02-17-43-21.png)
- ![Adaptive solver](images/2020-06-02-17-44-54.png)
- Pseudocode. The tolerance is important to be carefully chosen to avoid numerical effects 
  - ![Timestep](images/2020-06-02-17-46-41.png)

### Production ODE solvers

- Runge Kutta method (Test steps to understand landscape). Order of RK is the number of test steps
- RK4 is commonly used
- Single step ODE solvers use only info available in a single point to go forward: FE-RK1, BE-RK2
- Multi-step ODE solvers use a bunch of points:
  - Determine points down the solve
  - Fit a function to this slope
  - Integrate the function to get the actual

### Numerical dynamics and due diligence while picking ODE solvers

- Causes of errors in ODE solvers:
  - Time step
  - Geometry of landscape by f(x) [Absent in linear systems]
  - Computation effects. Machine epsilon is the smallest width between two numbers on a number line. Smallest fraction of a number a computer can handle. But representations like IEEE Floating Point allow varying epsilon ![2](images/2020-06-02-18-18-26.png)

- These errors can:
  - Cause distortions, bifurcations etc
  - Look like real physical dynamics
  - Source is varied (algorithms, arithmetic system, timestep)
- What could you do to diagnose spurious numerical dynamics (when using solvers from numpy,matlab etc. for eg)?
  - Change the timestep
  - Change the method
  - Change the arithmetic
  - But beware of machine $\epsilon$
  - If results dont' change by changing above then they are probably right
- Thickening of curve between a 500 and 5000 point SHO trajectory due to "Numerical error is violating the conservation of energy property of a SHO with β = 0; since this system is a conservative system a symplectic integrator should be used."
  - ![2](images/2020-06-02-18-45-56.png)

### Shadowing and Chaos

- Chaotic systems are sensitively dependent on small changes in state
- The ODE solvers inherently introduce small changes due to errors. How can we infer that the trajectory is the actual trajectory of a chaotic system?
- **Shadowing Lemma** (only applies to chaotic attractors, **ONLY for STATE vectors and not parameters**) - Every noise-added trajectory on a chaotic attractor is shadowed by a true trajectory. Given, the noise does not bump trajectory out of the basin. This is for state noise and NOT parameter noise.
  - ODE solvers produce points on the attractor but maybe not in the right order because at every step it gets bounced around due to error but the lemma saves us. With a reasonable solver, these effects happen on a tiny scale
  - Highly magnified version of trajectories not noticeable at level of vision ![1](images/2020-06-02-19-09-35.png)
- For a fixed point attractor, perturbation will shrink naturally
- Numerical errors in period cycle present ![3](images/2020-06-02-19-10-31.png) but the difference will shrink because of the contraction of state space of the transverse stable manifold that slopes downhill towards the limit cycles (like the curve in a hat)

### Solving ODE's numerically, Review

![ODEs](images/2020-06-02-19-29-56.png)

PDE's have more than one independent variable. PDE's are specially useful with fluid transfer

![PDE](images/2020-06-02-19-32-02.png)