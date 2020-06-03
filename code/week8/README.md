# Embedding Time Series Data

Write a program that steps through a data file and embeds the time-series data, producing the corresponding trajectory in reconstruction space.  This program should take a time series that is evenly sampled at some interval Δt, a time delay τ that is an integer number of multiples of Δt, and an embedding dimension m.  It should produce an array (list) of m-dimensional vectors (points in reconstruction space) each of whose ith element is x(t - iτ) for i = 0 . . . m - 1; i.e., a list of vectors of the form

 $[x(t), x(t-\tau), . . ., x(t-(m-1)\tau)]$

 Finally, it should plot a two-dimensional projection of this embedding.