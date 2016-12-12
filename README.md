# Templatize

Convert additive strings to ES6 template strings

## Example
```javascript
    'this ' + 'is ' + 'a ' + 'string. ' + testVariable + (testVariable ? 'foo' : 'bar')
```

Compiles to

```javascript
    `this is a string. ${testVariable}${(testVariable ? 'foo' : 'bar')}`
```

## Activation Methods

#### Keyboard Shortcut
```cmd-alt-shift-T```

#### Context Menu
"ES6 Template String"
