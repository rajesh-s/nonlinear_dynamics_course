#include <stdio.h>

void main()
{
    float x0,r;
    int n;
    x0=r=n=0;
    printf("Enter the value of x0(initial state)\n");
    scanf("%f",&x0);
    printf("Enter the value of r(parameter)\n");
    scanf("%f",&r);
    printf("Enter the value of n(number of iterations)\n");
    scanf("%d",&n);
    printf("Selected condition: r=%f, x0=%f\n",r,x0);
    float prev=x0; // Stores the previous state value of x
    float curr=0;
    for(int i=1; i<=n; i++)
    {
       curr = prev*r*(1-prev);
       printf("The value of x%d is %.3f\n",i,curr);
       prev = curr;
    }
}
