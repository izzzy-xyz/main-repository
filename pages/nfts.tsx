/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


 import Page from '@components/page';
 import Layout from '@components/layout';
 
 import { META_DESCRIPTION } from '@lib/constants';
 import ListedNfts from '@components/thirdweb/listed';
 import { ThirdwebProvider } from '@thirdweb-dev/react';
 import { ChainId } from '@thirdweb-dev/sdk';
 
 // This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;
 
 export default function Nfts() {
   const meta = {
     title: 'Nft - Discover upcoming NFTs minting right now',
     description: META_DESCRIPTION
   };
 
   return (
    <ThirdwebProvider desiredChainId={activeChainId}>
     <Page meta={meta}>
       <Layout>
         <ListedNfts children={meta}/>
       </Layout>
     </Page>
    </ThirdwebProvider>
   );
 }
 
 
 