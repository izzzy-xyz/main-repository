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
 import ProjectInfo from '@components/project-info';
 
 import { META_DESCRIPTION } from '@lib/constants';
 import Header from '@components/header';
 
 
 export default function Roadmap() {
   const meta = {
     title: 'Roadmap - Milestones, and high-level tasks',
     description: META_DESCRIPTION
   };
 
   return (
     <Page meta={meta}>
       <Layout>
         <Header hero="Roadmap" description={meta.description} />
         <ProjectInfo />
       </Layout>
     </Page>
   );
 }
 
 
 