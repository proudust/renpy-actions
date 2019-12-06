# setup-renpy

Set up your GitHub Actions workflow with a specific version of Ren'Py

## Usage

See [action.yml](action.yml)

```yaml
steps:
- uses: actions/checkout@v1
- uses: proudust/setup-renpy@v1
  id: renpy
  with:
    renpy-version: "6.99.12.4"
- name: Build Distributions
  run: renpy.sh ${{ steps.renpy.outputs.launcher }} distribute .
- name: Extract Dialogue
  run: renpy.sh . dialogue --strings --escape
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
