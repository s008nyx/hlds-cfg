# hlds-cfg

> HLDS Configurator

### Config file

| Variable | Type | Required | Description |
| :------: | :------: | :------: | ------ |
| title | string | 1 | Title configuration |
| variables | variablesData[] | 1 | Array variablesData objects |

##### variablesData object
| Variable | Type | Required | Description |
| :------: | :------: | :------: | ------ |
| command | string | 1 | Console command to set\get variable |
| type | string | 1 | Data type (`int`, `string`, `float`) |
| label | string | 1 | Command short title |
| values | valuesData[] | 1 | Array valuesData objects |
| description | string | 0 | Command description |
| default | as `type` | 0 | Default value |
| alt_values | altValuesData | 0 |  |
| min | as `type` | 0 | Min value |
| max | as `type` | 0 | Max value |
| step | as `type` | 0 | The step change value |

##### valuesData object
| Variable | Type | Required | Description |
| :------: | :------: | :------: | ------ |
| value | as `type` | 1 | Value |
| desc | string | 0 | Value description |

##### altValuesData object
| Variable | Type | Required | Description |
| :------: | :------: | :------: | ------ |
| values | valuesData[] | 1 | Array valuesData objects |
| multiply | bool | 0 | Can multiple values be selected (checkbox\radio) |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
