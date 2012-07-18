# Markmenu - simple jQuery plugin to mark menu

Markmenu simple way to mark links of a menu based on url.
Eg: If you the user is accessing http:www/yoursite.com/products and you
want to highlight the link `Products` from menu, you can achieve this
easily with markmenu.

## Getting Started:

1. Add the property `data-mark` to each link you want to customize:
2. Call jQuery plugin

### 1 - Add property data-mark

```html
<ul id="top_menu">
  <li><a href="/home" data-mark="home">Home</a><li>
  <li><a href="/projects" data-mark="projects">Projects</a><li>
  <li><a href="/about" data-mark="about">About</a><li>
</ul>
```

What goes happen:

When the url be:

`/home` - Will add a css class to Home link
`/projects` - Will add a css class to Projects link
`/about` - Will add a css class to About link

You can change data-mark to whateve value you want, eg:

```html
<ul id="menu">
  <li><a href="/home" data-mark="lupalumpas">Home</a><li>
</ul>
```

Will add class to Home link when url match with `lupalumpas`

### 2 - Call jquery plugin

You need just:

```javascript
$("#top_menu").markmenu();
```

## Bonus

Customizing link class:

The default css class added to links is: `marked`, but you can override
this with:

```javascript
$("#top_menu").markmenu({class : "myCustomClass" });
```
