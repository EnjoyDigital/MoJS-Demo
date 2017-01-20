Here we'll show you just a few simple effects we've created in our short time with MOJS.

###Shape and Burst effect:

The Shape module is the foundation of MOJS. These create basic geometric shapes which can be manipulated into many possible outcomes. Clicking within the **search-box** will trigger the search icon to appear. This uses a combination of two shapes: circle, and line. The circle is a shape with no fill and a blue stroke. We then use the strokeDelay and strokeOffset properties to give the effect of the circle being drawn. The same principle is then applied to the line shape, albeit with a slight delay added.

Burst is a handy module that creates, you guessed it, burst effects. In their simplest form they look like fireworks, but with a little tinkering with the various options the module provides, we can add a little feedback to user input. By clicking within the **search-box**, you can see how we're giving the user a little bit of feedback. Some sparks coming from the **search-box** indicate that the user has clicked within the area.

###Dust effect (using ShapeSwirl):

ShapeSwirl moves Shapes over sine trajectories. This gives the effect of dust/smoke/bubbles floating away. To create a dust effect we've used multiple ShapeSwirls on varying paths. With more time to experiment, we could utilise the Burst module to create a similar effect. This is because the Shapes created using Burst (see above) are individually customisable.

We want the dust to appear as the SearchWrapper hits the bottom of the window. We know the transition duration of the SearchWrapper - 200ms - so we're going to get the Burst to trigger after 180ms of hitting the **Toggle** button.

### Ripple effect (using Shape):

Now we're going to use the Shape module to create a simple ripple effect. Here we have 3 circle shapes which scale up and disappear, relative to the user's mouse pointer. We're using the **delay** property to give the effect of multiple ripples appearing on click.

After a user clicks within the blue area of the SearchWrapper, a ripple effect will begin.

By passing the event into the function, we can use the **tune** method to set the x and y values of the shapes to the same as the pointer.

These are just a few simple effects that can be achieved with a little code and a powerful tooklkit. We've only just scratched the surface of MOJS and hope to explore it further in the near future!