# Positioning
See the MDN discussion on the [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property

## Offset Properties
* `top`
* `right`
* `bottom`
* `left`

**Note**: Positive values for offset properties move an item away from that property. For example, `top: 20px;` moves the item *away* from the top by 20 pixels.

---

## Stacking Context
```css
z-index: auto;
```

---

## Static
```css
position: static;
```

* Default
* Ignores offset properties
* Stacking context is ignored; that is, `z-index` is not applicable

---

## Relative
```css
position: relative;
```

* In the absence of any offset properties, nothing happens
* Stacking context is obeyed
* Does not break the flow of the document

---

## Fixed
```css
position: fixed;
```

* Observes offset properties
* Offset properties are offset from the viewport, not the parent
* Stacking context is obeyed
* Breaks the flow, much like `display: none`

---

## Sticky
```css
position: sticky;
```

* Alters a property’s position value from `relative` to `fixed`, thus, sticking.
