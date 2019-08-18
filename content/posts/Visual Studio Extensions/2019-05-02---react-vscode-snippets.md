---
title: VSCode React/Redux snippets for quick coding in React
date: '2019-05-02T18:05:00.738Z'
template: 'post'
draft: false
series: true
slug: '/posts/react-vscode-snippets'
category: 'VSCode IDE'
tags:
    - 'React'
    - 'Code'
    - 'IDE'
description: 'Code in React/Redux with snippets using best available VSCode extension'
---

Code snippets are shorthand keystrokes that help you type frequently used code sections quickly. We have plenty of such plugins/extensions available for various IDE(s). You simply type in a short string (usually 2-3 characters) and it expands into code section. For example, in VSCode, typing `foreach` followed by →Tab would expand into Array.prototype.forEach snippet as shown below.

![Screenshot](/media/snippetfor.png)

on hitting tab `foreach` would expand into following in VSCode,

![Screenshot](/media/snippetforexpand.png)

---

Similarly, for react/redux there is VSCode extension to bring snippets for React/Redux on VSCode. It is not available by default and third party extension help you gain such functionalities.

For React/Redux, the best such extension is `ES7 React/Redux/GraphQL/React-Native snippets` by dsznajder. It can be installed using `Extension` tab in VSCode (key shortcut in mac, Command+Shift+X ) and type `ES7 React` followed by enter.

It has plenty of snippets for React, Redux and Graphql in JS/TS with ES7 syntax.
For example, in \*.js file (or supported files), typing `imr` followed by →Tab would expand into `import React from 'react'` or typing `imrc` followed by →Tab would expand into `import React, { Component } from 'react'`.

You can search through snippets with ES7 snippet search command which can be run with `CMD + Shift + P` or just use `CMD + Shift + R` keybinding.

![Screenshot](/media/snippetsReact.png)

I end up with a lot of frequent component creation and below snippets are my fav,

-   rce - React Class Component with Filename as Component name

        import React, { Component } from 'react'

        export class <FileName> extends Component {
            render() {
                return <div></div>
            }
        }

        export default <FileName>

-   rcep - React Class Component including Proptype with Filename as Component name

        import React, { Component } from 'react'
        import PropTypes from 'prop-types'

        export class <FileName> extends Component {
            static propTypes = {}

            render() {
                return <div></div>
            }
        }

        export default <FileName>

-   rfce - React functional component

        import React from 'react'

        function $1() {
            return <div></div>
        }

        export default $1

-   rafcp - React functional component including Proptype

        import React from 'react'
        import PropTypes from 'prop-types'

        const $1 = props => {
            return <div>$0</div>
        }

        $1.propTypes = {}

        export default $1

You can check entire list on Extension main page

Official Site: [VSCode Marketplace for Extension](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

---
