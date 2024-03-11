'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-testing-with-ng-mocks documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-b63781febae44df5e7e19ec35262745248cf77e030065eabd428d83b62f609c9b9b3bd47c8d5e7e78dfaa11003c513717acdc150ff276c7371ffb39d941e4a75"' : 'data-bs-target="#xs-components-links-module-AppModule-b63781febae44df5e7e19ec35262745248cf77e030065eabd428d83b62f609c9b9b3bd47c8d5e7e78dfaa11003c513717acdc150ff276c7371ffb39d941e4a75"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b63781febae44df5e7e19ec35262745248cf77e030065eabd428d83b62f609c9b9b3bd47c8d5e7e78dfaa11003c513717acdc150ff276c7371ffb39d941e4a75"' :
                                            'id="xs-components-links-module-AppModule-b63781febae44df5e7e19ec35262745248cf77e030065eabd428d83b62f609c9b9b3bd47c8d5e7e78dfaa11003c513717acdc150ff276c7371ffb39d941e4a75"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartFeatureModule.html" data-type="entity-link" >CartFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CartFeatureModule-ff845c96ad7e65d4f9776fcabee8bedcd4d630b2eed315107a5f2211321a910d317998500354cfffe95df9d0aec4a1a6edfc7231cee64aa97b4c8b9d8df0531f"' : 'data-bs-target="#xs-components-links-module-CartFeatureModule-ff845c96ad7e65d4f9776fcabee8bedcd4d630b2eed315107a5f2211321a910d317998500354cfffe95df9d0aec4a1a6edfc7231cee64aa97b4c8b9d8df0531f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartFeatureModule-ff845c96ad7e65d4f9776fcabee8bedcd4d630b2eed315107a5f2211321a910d317998500354cfffe95df9d0aec4a1a6edfc7231cee64aa97b4c8b9d8df0531f"' :
                                            'id="xs-components-links-module-CartFeatureModule-ff845c96ad7e65d4f9776fcabee8bedcd4d630b2eed315107a5f2211321a910d317998500354cfffe95df9d0aec4a1a6edfc7231cee64aa97b4c8b9d8df0531f"' }>
                                            <li class="link">
                                                <a href="components/CartFeatureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartFeatureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartFeatureRoutingModule.html" data-type="entity-link" >CartFeatureRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LayoutModule-e9784670451efde34913ef7f2fb472fae9ab0bd88bbbddcd2f72c839e689aa731d84abad690bf0f8955d661cf5a3b198121039689795fe691ab69c0ac2989c0b"' : 'data-bs-target="#xs-components-links-module-LayoutModule-e9784670451efde34913ef7f2fb472fae9ab0bd88bbbddcd2f72c839e689aa731d84abad690bf0f8955d661cf5a3b198121039689795fe691ab69c0ac2989c0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-e9784670451efde34913ef7f2fb472fae9ab0bd88bbbddcd2f72c839e689aa731d84abad690bf0f8955d661cf5a3b198121039689795fe691ab69c0ac2989c0b"' :
                                            'id="xs-components-links-module-LayoutModule-e9784670451efde34913ef7f2fb472fae9ab0bd88bbbddcd2f72c839e689aa731d84abad690bf0f8955d661cf5a3b198121039689795fe691ab69c0ac2989c0b"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductFeatureModule.html" data-type="entity-link" >ProductFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductFeatureModule-8f0abc6b52cb7a63e353a9ea54c8bd951c06e7f2fc88630f37d8d4b835b1cc047ccc830966c2bbcbb3cbee7091111b9fbbd4856f860e06efb197ed6eafafd40b"' : 'data-bs-target="#xs-components-links-module-ProductFeatureModule-8f0abc6b52cb7a63e353a9ea54c8bd951c06e7f2fc88630f37d8d4b835b1cc047ccc830966c2bbcbb3cbee7091111b9fbbd4856f860e06efb197ed6eafafd40b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductFeatureModule-8f0abc6b52cb7a63e353a9ea54c8bd951c06e7f2fc88630f37d8d4b835b1cc047ccc830966c2bbcbb3cbee7091111b9fbbd4856f860e06efb197ed6eafafd40b"' :
                                            'id="xs-components-links-module-ProductFeatureModule-8f0abc6b52cb7a63e353a9ea54c8bd951c06e7f2fc88630f37d8d4b835b1cc047ccc830966c2bbcbb3cbee7091111b9fbbd4856f860e06efb197ed6eafafd40b"' }>
                                            <li class="link">
                                                <a href="components/AddNewProductFeatureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddNewProductFeatureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductFeatureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductFeatureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsFeatureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsFeatureComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductFeatureRoutingModule.html" data-type="entity-link" >ProductFeatureRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SharedModule-a83e1e64fc074c45beb01ae91367f0a2e8a7dc0aba6e11c2f40dc3d7056d9a05c30b6e52551a8cb36e47e8f475c615110c95a5b80da449e2d25ea86aef4d5d28"' : 'data-bs-target="#xs-directives-links-module-SharedModule-a83e1e64fc074c45beb01ae91367f0a2e8a7dc0aba6e11c2f40dc3d7056d9a05c30b6e52551a8cb36e47e8f475c615110c95a5b80da449e2d25ea86aef4d5d28"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-a83e1e64fc074c45beb01ae91367f0a2e8a7dc0aba6e11c2f40dc3d7056d9a05c30b6e52551a8cb36e47e8f475c615110c95a5b80da449e2d25ea86aef4d5d28"' :
                                        'id="xs-directives-links-module-SharedModule-a83e1e64fc074c45beb01ae91367f0a2e8a7dc0aba6e11c2f40dc3d7056d9a05c30b6e52551a8cb36e47e8f475c615110c95a5b80da449e2d25ea86aef4d5d28"' }>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-a83e1e64fc074c45beb01ae91367f0a2e8a7dc0aba6e11c2f40dc3d7056d9a05c30b6e52551a8cb36e47e8f475c615110c95a5b80da449e2d25ea86aef4d5d28"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-a83e1e64fc074c45beb01ae91367f0a2e8a7dc0aba6e11c2f40dc3d7056d9a05c30b6e52551a8cb36e47e8f475c615110c95a5b80da449e2d25ea86aef4d5d28"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-a83e1e64fc074c45beb01ae91367f0a2e8a7dc0aba6e11c2f40dc3d7056d9a05c30b6e52551a8cb36e47e8f475c615110c95a5b80da449e2d25ea86aef4d5d28"' :
                                            'id="xs-pipes-links-module-SharedModule-a83e1e64fc074c45beb01ae91367f0a2e8a7dc0aba6e11c2f40dc3d7056d9a05c30b6e52551a8cb36e47e8f475c615110c95a5b80da449e2d25ea86aef4d5d28"' }>
                                            <li class="link">
                                                <a href="pipes/RoundOffPricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoundOffPricePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NewProductComponent.html" data-type="entity-link" >NewProductComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCardComponent.html" data-type="entity-link" >ProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDetailComponent.html" data-type="entity-link" >ProductDetailComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ProductsEffects.html" data-type="entity-link" >ProductsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductsState.html" data-type="entity-link" >ProductsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rating.html" data-type="entity-link" >Rating</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShoppingCartState.html" data-type="entity-link" >ShoppingCartState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});