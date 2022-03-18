# use-debounce

A Small React hook that implements debouncing in react.

### Usage

```
const someFunction= () => any
const delay = 1000 // delay in ms

const debouncedFunction= useDebounce(delay,someFunction)

debouncedFunction() // Calls it only once after the delay regardless of number of calls
```

### What's Debouncing?

I'd suggest you go through this [blog](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086)

Simpler TL;DR image explaination:

![Image_Explaination](https://miro.medium.com/max/1400/1*-r8hP_iDBPrj-odjIZajzw.gif)
