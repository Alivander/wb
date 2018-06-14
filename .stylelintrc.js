module.exports = {
    plugins: [
        'stylelint-order'
    ],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss'
    ],
    rules: {
        'indentation': 4,
        'declaration-empty-line-before': [ "always", {
            except: [],
            ignore: [
                "after-declaration",
                "after-comment",
                "first-nested"
            ],
        }],
        'order/properties-order': [
            {
                emptyLineBefore: 'always',
                properties: [
                    'position',
                    'top',
                    'right',
                    'bottom',
                    'left',
                    'z-index'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'display',
                    'flex-direction',
                    'flex-order',
                    'flex-pack',
                    'flex-align',
                    'flex-wrap',
                    'justify-content',
                    'align-items',
                    'align-self',
                    'float',
                    'clear',
                    'overflow',
                    'overflow-x',
                    'overflow-y',
                    'clip',
                    'zoom',
                    'visibility'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'box-sizing',
                    'width',
                    'min-width',
                    'max-width',
                    'height',
                    'min-height',
                    'max-height',
                    'margin',
                    'margin-top',
                    'margin-right',
                    'margin-bottom',
                    'margin-left',
                    'padding',
                    'padding-top',
                    'padding-right',
                    'padding-bottom',
                    'padding-left'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'table-layout',
                    'empty-cells',
                    'caption-side',
                    'border-spacing',
                    'border-collapse',
                    'list-style',
                    'list-style-position',
                    'list-style-type',
                    'list-style-image'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'font',
                    'font-family',
                    'font-size',
                    'font-weight',
                    'font-style',
                    'font-variant',
                    'font-size-adjust',
                    'font-stretch',
                    'font-effect',
                    'font-emphasize',
                    'font-emphasize-position',
                    'font-emphasize-style',
                    'font-smooth',
                    'line-height'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'content',
                    'quotes',
                    'counter-reset',
                    'counter-increment',
                    'resize',
                    'cursor',
                    'user-select',
                    'nav-index',
                    'nav-up',
                    'nav-right',
                    'nav-down',
                    'nav-left',
                    'text-align',
                    'text-align-last',
                    'vertical-align',
                    'white-space',
                    'text-decoration',
                    'text-emphasis',
                    'text-emphasis-color',
                    'text-emphasis-style',
                    'text-emphasis-position',
                    'text-indent',
                    'text-justify',
                    'letter-spacing',
                    'word-spacing',
                    'text-outline',
                    'text-transform',
                    'text-wrap',
                    'text-overflow',
                    'text-overflow-ellipsis',
                    'text-overflow-mode',
                    '-ms-word-wrap',
                    'word-wrap',
                    'word-break',
                    'tab-size',
                    'hyphens',
                    'pointer-events'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'color',
                    'border',
                    'border-width',
                    'border-style',
                    'border-color',
                    'border-top',
                    'border-top-width',
                    'border-top-style',
                    'border-top-color',
                    'border-right',
                    'border-right-width',
                    'border-right-style',
                    'border-right-color',
                    'border-bottom',
                    'border-bottom-width',
                    'border-bottom-style',
                    'border-bottom-color',
                    'border-left',
                    'border-left-width',
                    'border-left-style',
                    'border-left-color',
                    'border-radius',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-bottom-right-radius',
                    'border-bottom-left-radius',
                    'border-image',
                    'border-image-source',
                    'border-image-slice',
                    'border-image-width',
                    'border-image-outset',
                    'border-image-repeat',
                    'outline',
                    'outline-width',
                    'outline-style',
                    'outline-color',
                    'outline-offset',
                    'background',
                    'background-color',
                    'background-image',
                    'background-repeat',
                    'background-attachment',
                    'background-position',
                    'background-position-x',
                    'background-position-y',
                    'background-clip',
                    'background-origin',
                    'background-size',
                    'box-decoration-break',
                    'box-shadow',
                    'text-shadow',
                    'opacity'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'transition',
                    'transition-delay',
                    'transition-timing-function',
                    'transition-duration',
                    'transition-property',
                    'transform',
                    'transform-origin',
                    'animation',
                    'animation-name',
                    'animation-duration',
                    'animation-play-state',
                    'animation-timing-function',
                    'animation-delay',
                    'animation-iteration-count',
                    'animation-direction',
                    'backface-visibility'
                ]
            }
        ]
    }
};
