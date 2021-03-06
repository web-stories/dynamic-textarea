# Dynamic Textarea
A simple dynamic textarea decorator that just works **without jQuery**

# Installation

Just include the script in the page:

```html
<script src="/path/to/dynamic-textarea.js"></script>
```

dynamic-textarea supports [npm](https://www.npmjs.com/package/dynamic-textarea) and [Bower](http://bower.io/search/?q=dynamic-textarea) under the name `dynamic-textarea`

It can also be loaded as an AMD module.

# Usage

Add the `data-dynamic` attribute to the `textarea` elements and they will magically grow to fit the content (even for dynamic added elements!):

```html
<textarea data-dynamic></textarea>
```

# API

The api is exposed only in AMD capable environments to prevent polluting the global scope unnecessarily.

### .refresh()

Update the height of all dynamic textareas relative to its content.

**Example:**

```javascript
require( [ "dynamic-textarea" ], function( dynamicTextarea ) {
	if ( someArbitraryEventHappens ) {
		dynamicTextarea.refresh();
	}
});
```