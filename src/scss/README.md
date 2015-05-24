# Our CSS methodology

What methodology and naming convetions should we follow? I'll explain it all in the next sections.

Our ideas are based heavilly in BEM and DOCSSA, however, I've changed the "default" naming convention to something I think it's better. (Can be discussed)

Before reading, make sure you read the [BEM documentation](https://bem.info/) so you get an idea of what is Blocks, Elements and Modifiers.

## Naming convention

We'll use the "default" naming convention for BEM classes:

```css
.block-name {}
.block-name__element-name {}
.block-name--modifier-name {}
.block-name__element-name--modifier-name {}
```

## Sizes

We want to set a root text-size in pixels
