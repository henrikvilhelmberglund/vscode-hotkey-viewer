# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 0.0.0 (2023-06-27)


### Features

* :sparkles: update package.json and README ([3e0dc3b](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/3e0dc3b8e795a3e1d66f67aaecb24e0f62d39a0f))
* :sparkles: support clicking on ´ ¨ keys, update styling of h2 text ([2d911ee](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/2d911ee31dc284edeb18d30dc94dcd9788b71b1d))
* :memo: update TODO ([b756f5d](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/b756f5de116e0f47690cd9c66d92393c12b04b10))
* :sparkles: rename TODO, update TODO ([8ae4f71](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/8ae4f714bdeec7448b48da114f77f1827142d921))
* :sparkles: display all combinations for clicked keys ([4b8e224](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/4b8e22438db1ab5c6f1baf56e7a78e1b44c17d76))
* :sparkles: add MODIFIER_COMBINATIONS constant ([337a60f](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/337a60f53da850063a6e69bf517796d9fac35ffd))
* :art: add constants.js file with constants ([6697adc](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/6697adcbe2c0d1aab66ccd8ef3937fd3e559754d))
* :memo: add TODO.txt ([197db57](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/197db57cef0465d36c5ed6ebea099a9f38aea3bd))
* :sparkles: parse json, if no index, push the user key binding ([96f5fd3](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/96f5fd363606f8b2de488470a239d49d32a8c237))
* :sparkles: add function for getting all unbound keys ([7bd92b8](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/7bd92b80650306f3cda22e63effb88c2704537c1))
* :sparkles: add rest of keys, some input handling ([9428a86](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/9428a86bd76f880a1e063d41fa9911d06c3f8daf))
* :sparkles: add layout switch checkbox ([6aa6370](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/6aa637092dccc79fea7ecceec9a1c35614fc0258))
* :sparkles: add better styling, add next row of keys ([ed016f9](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/ed016f9ad75740167142ff9ec1efe95bc6f2091f))
* :sparkles: add keyboard thingy WIP ([821a8be](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/821a8be3b11751899a3e9cd151deb22dbf10dc28))
* :sparkles: add load function returning default keybindings + user keybindings ([db9e256](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/db9e256b24f68b70c131142c9b6e0e1cbe056d11))
* :bento: add default.json with vscode default keybindings ([7c0daec](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/7c0daecb4433a5a2c492f35dfa35270bde9e0d17))
* :package: add strip-json-comments ([2ffe9df](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/2ffe9dffe2fb0026204f630ee5a7eec80a857608))


### Bug Fixes

* :fire: delete existing CHANGELOG ([3032c6a](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/3032c6a24536b6c7529338335bbb169bde51afd1))
* :bug: fix escape key name ([46c50a9](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/46c50a9ff32f02e819d263f2b6deb067cfd0e3b5))
* :lipstick: move Footer to the left ([076968b](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/076968b8821705c7bc914b73ab3da01bbe6e742d))
* :bug: fix clicking of keys ([b3dcee7](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/b3dcee72071fd7251ac5434f608a2c19f27b26b6))
* :bug: fix some keys not getting highlights when pressed ([52e1a86](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/52e1a867f02a1dc723d520884d43b486361c0edd))
* :fire: remove console logs ([e1dee69](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/e1dee69892e3fb78ad1db536fc03c583497f4481))
* :bug: fix typo ([6102a52](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/6102a52ad5e60725f26a9efbc72775dfdc825fa2))
* :bug: fix chat gpt's silly code ([21fbc15](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/21fbc156d3fcf4d741ffd7a5fde1498d548386e6))
* :bug: support arrow keys, improve styling, don't show + - as bindable keys ([2e31138](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/2e31138dd9b1d9472f766c81fab3535742aabec4))
* :bug: use empty2 to have a different spacing ([2c195f5](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/2c195f543b0878b26e5b3933ef5f28fa93cfacda))
* :art: import constants from module ([ddb8346](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/ddb834613e05a3b7e898a3d909a8bfbccc42de7e))
* :art: DRY ([54ef70d](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/54ef70db95b705f53893f3fb432fdf08005e3f30))
* :fire: DRY ([e3cf5e9](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/e3cf5e983ef751d283b6f265632fd7835abbd0a1))
* :art: DRY ([a459e20](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/a459e2063e90ab0bdca0d0f9f4a31c8c1e14ecbe))
* :lipstick: update styling ([e73b679](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/e73b67981fef08cf2200dc1530d303bd1dbdf53a))
* :bug: remove commands starting with - (these are default ones that were unbound by the user) ([8a79b77](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/8a79b772d3e27e000debf04b4a3170713e2b66f5))
* :bug: fix oem_1 edge case (there are probably more) ([ea2c763](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/ea2c76308463c37bfa0b9c79754c1962afd80aa7))
* :bug: disable the inspector, messes up keys sometimes ([06e3850](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/06e385026799bfd1d71cae8c32e2a8987540f422))
* :fire: remove console log ([14b336f](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/14b336ff413f967376a553d298fba3d6cfa56a73))
* :lipstick: enable unocss-fix ([5da2e43](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/5da2e43135298275fd386df56693aeb2de4ae1b2))
* :bug: add shadow-inset to unocss-fix ([29a2127](https://github.com/henrikvilhelmberglund/vscode-hotkey-viewer/commit/29a21273580357debd8dcc116c79123998447b02))
