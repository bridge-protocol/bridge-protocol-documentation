
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/doc/',
  component: ComponentCreator('/doc/'),
  exact: true,
  
},
{
  path: '/doc/docs/:route',
  component: ComponentCreator('/doc/docs/:route'),
  
  routes: [
{
  path: '/doc/docs/blockchain',
  component: ComponentCreator('/doc/docs/blockchain'),
  exact: true,
  
},
{
  path: '/doc/docs/blockchain-ethereum',
  component: ComponentCreator('/doc/docs/blockchain-ethereum'),
  exact: true,
  
},
{
  path: '/doc/docs/blockchain-neo',
  component: ComponentCreator('/doc/docs/blockchain-neo'),
  exact: true,
  
},
{
  path: '/doc/docs/bridge-claim',
  component: ComponentCreator('/doc/docs/bridge-claim'),
  exact: true,
  
},
{
  path: '/doc/docs/bridge-overview',
  component: ComponentCreator('/doc/docs/bridge-overview'),
  exact: true,
  
},
{
  path: '/doc/docs/bridge-passport',
  component: ComponentCreator('/doc/docs/bridge-passport'),
  exact: true,
  
},
{
  path: '/doc/docs/definitions',
  component: ComponentCreator('/doc/docs/definitions'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-identity',
  component: ComponentCreator('/doc/docs/extension-identity'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-identity-claimpublish',
  component: ComponentCreator('/doc/docs/extension-identity-claimpublish'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-identity-claims',
  component: ComponentCreator('/doc/docs/extension-identity-claims'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-managing',
  component: ComponentCreator('/doc/docs/extension-managing'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-marketplace',
  component: ComponentCreator('/doc/docs/extension-marketplace'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-marketplace-details',
  component: ComponentCreator('/doc/docs/extension-marketplace-details'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-marketplace-request',
  component: ComponentCreator('/doc/docs/extension-marketplace-request'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-marketplace-verification',
  component: ComponentCreator('/doc/docs/extension-marketplace-verification'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-navigating',
  component: ComponentCreator('/doc/docs/extension-navigating'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-opening',
  component: ComponentCreator('/doc/docs/extension-opening'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-passport',
  component: ComponentCreator('/doc/docs/extension-passport'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-using',
  component: ComponentCreator('/doc/docs/extension-using'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-wallets',
  component: ComponentCreator('/doc/docs/extension-wallets'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-wallets-detail',
  component: ComponentCreator('/doc/docs/extension-wallets-detail'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-wallets-swap',
  component: ComponentCreator('/doc/docs/extension-wallets-swap'),
  exact: true,
  
},
{
  path: '/doc/docs/extension-wallets-tx',
  component: ComponentCreator('/doc/docs/extension-wallets-tx'),
  exact: true,
  
},
{
  path: '/doc/docs/integration',
  component: ComponentCreator('/doc/docs/integration'),
  exact: true,
  
},
{
  path: '/doc/docs/integration-blockchain',
  component: ComponentCreator('/doc/docs/integration-blockchain'),
  exact: true,
  
},
{
  path: '/doc/docs/integration-claim',
  component: ComponentCreator('/doc/docs/integration-claim'),
  exact: true,
  
},
{
  path: '/doc/docs/integration-passport',
  component: ComponentCreator('/doc/docs/integration-passport'),
  exact: true,
  
},
{
  path: '/doc/docs/integration-profile',
  component: ComponentCreator('/doc/docs/integration-profile'),
  exact: true,
  
},
{
  path: '/doc/docs/license',
  component: ComponentCreator('/doc/docs/license'),
  exact: true,
  
},
{
  path: '/doc/docs/marketplace',
  component: ComponentCreator('/doc/docs/marketplace'),
  exact: true,
  
},
{
  path: '/doc/docs/messaging',
  component: ComponentCreator('/doc/docs/messaging'),
  exact: true,
  
},
{
  path: '/doc/docs/messaging-auth',
  component: ComponentCreator('/doc/docs/messaging-auth'),
  exact: true,
  
},
{
  path: '/doc/docs/messaging-claimsimport',
  component: ComponentCreator('/doc/docs/messaging-claimsimport'),
  exact: true,
  
},
{
  path: '/doc/docs/messaging-payment',
  component: ComponentCreator('/doc/docs/messaging-payment'),
  exact: true,
  
},
{
  path: '/doc/docs/network',
  component: ComponentCreator('/doc/docs/network'),
  exact: true,
  
},
{
  path: '/doc/docs/network-explorer',
  component: ComponentCreator('/doc/docs/network-explorer'),
  exact: true,
  
},
{
  path: '/doc/docs/overview',
  component: ComponentCreator('/doc/docs/overview'),
  exact: true,
  
},
{
  path: '/doc/docs/passport-claim',
  component: ComponentCreator('/doc/docs/passport-claim'),
  exact: true,
  
},
{
  path: '/doc/docs/passport-key',
  component: ComponentCreator('/doc/docs/passport-key'),
  exact: true,
  
},
{
  path: '/doc/docs/passport-wallet',
  component: ComponentCreator('/doc/docs/passport-wallet'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk',
  component: ComponentCreator('/doc/docs/sdk'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-examples',
  component: ComponentCreator('/doc/docs/sdk-examples'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-messaging-auth',
  component: ComponentCreator('/doc/docs/sdk-messaging-auth'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-messaging-claim',
  component: ComponentCreator('/doc/docs/sdk-messaging-claim'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-messaging-payment',
  component: ComponentCreator('/doc/docs/sdk-messaging-payment'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-models-claim',
  component: ComponentCreator('/doc/docs/sdk-models-claim'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-models-claimpackage',
  component: ComponentCreator('/doc/docs/sdk-models-claimpackage'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-models-passport',
  component: ComponentCreator('/doc/docs/sdk-models-passport'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-models-wallet',
  component: ComponentCreator('/doc/docs/sdk-models-wallet'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-services-application',
  component: ComponentCreator('/doc/docs/sdk-services-application'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-services-blockchain',
  component: ComponentCreator('/doc/docs/sdk-services-blockchain'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-services-bridge',
  component: ComponentCreator('/doc/docs/sdk-services-bridge'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-services-claim',
  component: ComponentCreator('/doc/docs/sdk-services-claim'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-services-partner',
  component: ComponentCreator('/doc/docs/sdk-services-partner'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-services-passport',
  component: ComponentCreator('/doc/docs/sdk-services-passport'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-services-profile',
  component: ComponentCreator('/doc/docs/sdk-services-profile'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-services-tokenswap',
  component: ComponentCreator('/doc/docs/sdk-services-tokenswap'),
  exact: true,
  
},
{
  path: '/doc/docs/sdk-utils-claim',
  component: ComponentCreator('/doc/docs/sdk-utils-claim'),
  exact: true,
  
},
{
  path: '/doc/docs/token',
  component: ComponentCreator('/doc/docs/token'),
  exact: true,
  
},
{
  path: '/doc/docs/tos',
  component: ComponentCreator('/doc/docs/tos'),
  exact: true,
  
},
{
  path: '/doc/docs/whatsnew',
  component: ComponentCreator('/doc/docs/whatsnew'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
