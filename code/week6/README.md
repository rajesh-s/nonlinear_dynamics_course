# Forward and Backward Euler combined - Trapezoidal method

Forward and backward Euler both make errors.  Combining the two of them, however, can be surprisingly effective.  Implement a solver that averages a forward and backward Euler step:

$ \vec{x}(t+\Delta t) = \vec{x}(t) + \frac{\Delta t}{2} [f(\vec{x}(t))+f(\vec{x}_{FE}(t+\Delta t))] $

 Here,  is the result of applying one step of the forward Euler algorithm starting from  with time step Δt.  This method averages the slope at that point with the slope at the original point and uses that averaged slope to move forward.  This is sometimes called the trapezoidal method in the literature.