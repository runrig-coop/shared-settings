Runrig Eslint Config
================================================================================

The [AirBnb config] doesn't get much maintenance these days and doesn't support
the big changes in ESLint 9.0.0, so while this config does add few extra
[rules], the main reason for packaging it separately is to wrap AirBnb with
[FlatCompat] and suppress warnings about incompatible [peer dependencies].

[AirBnb config]: https://github.com/airbnb/javascript/
[rules]: rules/base.js
[FlatCompat]: eslint.config.js#L6-L14
[peer dependencies]: package.json#L23-L25
