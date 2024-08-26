---
name: "MyTestTemplate"
root: "./src"
output: "/"
ignore: []
questions:
  path: "Please enter test file path."
  name: "Please enter test file name."
---

# `{{inputs.path}}/{{inputs.name}}.spec.ts`

```
{{ 'templates/UnitTestTemplate.ts' | read }}
```
